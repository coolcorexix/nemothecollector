from pymongo import MongoClient
from datetime import datetime
from datetime import date
import connect

mongoClient = MongoClient('localhost')
mongoDb = mongoClient.tiki_crawler

def accumulateAtFirst():
    items = mongoDb.productItems.find()
    for item in items:
        connect.openPostgreSession(lambda cur: addItemToPostgreDb(item, cur))

def updateNewlyAddedItem(mongoItem, postgreCur):
    updateSql = f"""UPDATE product_item
        SET last_updated = TO_DATE(\'{mongoItem['crawl-date']}\', \'DD/MM/YYYY\') 
        WHERE tiki_id = {mongoItem['tiki-id']}"""
    postgreCur.execute(updateSql)

def updateAveragePriceAtFirst(mongoItem, postgreCur):
    updateSql = f"""UPDATE product_item
        SET average_price = {mongoItem['final-price']}
        WHERE tiki_id = {mongoItem['tiki-id']}"""
    postgreCur.execute(updateSql)

def updateHrefForTheExisting(mongoItem, postgreCur):
    updateSql = f"""UPDATE product_item
        SET href = {mongoItem['href']}
        WHERE tiki_id = {mongoItem['tiki-id']}"""
    postgreCur.execute(updateSql)

def updateAveragePrice(mongoItem, postgreCur, currentAveragePrice, totalCrawled, currentPrice):
    tikiId = mongoItem['tiki-id']
    newTotalCrawled = totalCrawled + 1
    newAveragePrice = (currentAveragePrice + int(mongoItem['final-price'])) / newTotalCrawled
    newCrawlDate = mongoItem['crawl-date']
    updatePriceSql = f"""UPDATE product_item
        SET average_price = {newAveragePrice},
            total_crawled = {newTotalCrawled},
            last_updated = TO_DATE(\'{newCrawlDate}\', \'DD/MM/YYYY\'),
            current_price = {currentPrice}
        WHERE tiki_id = {tikiId}
    """
    postgreCur.execute(updatePriceSql)


def addItemToPostgreDb(mongoItem, postgreCur):
    findItemSql = f"SELECT * from product_item WHERE tiki_id = {mongoItem['tiki-id']}"
    postgreCur.execute(findItemSql)
    existingReference = postgreCur.fetchone()
    if existingReference is None:
        href = ''
        try:
            href = mongoItem['href']
        except KeyError:
            print('error')
        insertItemSql = f"""INSERT INTO
            product_item(tiki_id, title, image, current_price, brand, total_crawled, last_updated, average_price, href)  
            VALUES({mongoItem['tiki-id']}, 
            \'{mongoItem['title']}\',
            \'{mongoItem['image']}\',
            {mongoItem['final-price']},
            \'{mongoItem['brand']}\',
            1,
            \'{mongoItem['crawl-date']}\',
            \'{mongoItem['final-price']}\',
            \'{href}\')  
            RETURNING id"""
        print(insertItemSql)
        postgreCur.execute(insertItemSql)
        print(postgreCur.fetchone()[-4])
    else:
        href = existingReference[-1]
        averagePrice = existingReference[-2]
        lastUpdated = existingReference [-3]
        totalCrawled = existingReference [-5]
        if lastUpdated is None:
            updateNewlyAddedItem(mongoItem, postgreCur)
        if averagePrice is None:
            updateAveragePriceAtFirst(mongoItem, postgreCur)
        else:
            convertedCrawlDate = datetime.strptime(mongoItem['crawl-date'], '%d/%m/%Y')
            convertedLastUpdated = datetime.combine(lastUpdated, datetime.min.time())
            if convertedLastUpdated < convertedCrawlDate:
                updateAveragePrice(mongoItem, postgreCur,
                    averagePrice, totalCrawled,
                    mongoItem['final_price'])
        if href is None:
            updateHrefForTheExisting(mongoItem, postgreCur)


accumulateAtFirst()
