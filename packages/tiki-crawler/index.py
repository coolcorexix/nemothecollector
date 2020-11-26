import scrapy
from datetime import date
import json
import uuid
from elasticsearch import Elasticsearch
from pymongo import MongoClient

elastic = Elasticsearch()

today = date.today().strftime("%d/%m/%Y")

mongoClient = MongoClient('localhost')

db = mongoClient.tiki_crawler

class TikiSpider(scrapy.Spider):
    name = 'tiki_spider'
    start_urls = [
        'https://tiki.vn/dien-thoai-may-tinh-bang/c1789',
        'https://tiki.vn/dien-tu-dien-lanh/c4221', 
        'https://tiki.vn/laptop-may-vi-tinh-linh-kien/c1846',
        'https://tiki.vn/may-anh/c1801',
        'https://tiki.vn/dien-gia-dung/c1882',
        'https://tiki.vn/nha-cua-doi-song/c1883',
        'https://tiki.vn/binh-pha-ca-phe/c23306',
        'https://tiki.vn/gia-do-laptop/c28682'
    ]
    def parse(self, response):
        PRODUCT_ITEM_SELECTOR='.product-item'
        productItems = response.css(PRODUCT_ITEM_SELECTOR)
        if len(productItems) == 0:
            print('[ANNOUNCE] DONE CRAWLING')
            return
        for productItem in productItems:
            PRODUCT_ITEM_HREF_SELECTOR='::attr(href)'
            PRODUCT_ITEM_TIKI_ID_SELECTOR='::attr(data-id)'
            PRODUCT_ITEM_TITLE_SELECTOR='::attr(data-title)'
            PRODUCT_ITEM_FINAL_PRICE_SELECTOR='::attr(data-price)'
            PRODUCT_ITEM_REGULAR_PRICE_SELECTOR='span.price-regular ::text'
            PRODUCT_ITEM_BRAND_SELECTOR='::attr(data-brand)'
            PRODUCT_ITEM_CATEGORY_SELECTOR='::attr(data-category)'
            PRODUCT_ITEM_IMAGE_SELECTOR='img.product-image ::attr(src)'
            productItem={
                'tiki-id': productItem.css(PRODUCT_ITEM_TIKI_ID_SELECTOR).get(),
                'image': productItem.css(PRODUCT_ITEM_IMAGE_SELECTOR).get(),
                'title': productItem.css(PRODUCT_ITEM_TITLE_SELECTOR).get(),
                'final-price': productItem.css(PRODUCT_ITEM_FINAL_PRICE_SELECTOR).get(),
                'raw-regular-price': productItem.css(PRODUCT_ITEM_REGULAR_PRICE_SELECTOR).get(),
                'brand': productItem.css(PRODUCT_ITEM_BRAND_SELECTOR).get(),
                'raw-category': productItem.css(PRODUCT_ITEM_CATEGORY_SELECTOR).get(),
                'crawl-date': today,
                'href': productItem.css(PRODUCT_ITEM_HREF_SELECTOR).get(),
            }
            elastic.index(
                index = 'product-items',
                doc_type = '_doc',
                id = uuid.uuid4().hex,
                body = json.dumps(productItem)
            )
            yield productItem
        NEXT_PAGE_SELECTOR = 'a.next ::attr(href)'
        next_page = response.css(NEXT_PAGE_SELECTOR).get()
        if next_page:
                yield scrapy.Request(
                    response.urljoin(next_page),
                    callback=self.parse
                )
