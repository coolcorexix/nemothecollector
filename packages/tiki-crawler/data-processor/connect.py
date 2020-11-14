import psycopg2

def openPostgreSession(callback): 
    conn = None

    try:
        conn = psycopg2.connect(
            host='localhost',
            database='tiki_crawler',
            user='postgres',
            password='Chipueatfas7',
        )
        cur = conn.cursor()
        callback(cur)
        conn.commit()
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
            print('Database connection closed.')

# sql = """INSERT INTO product_item(tiki_id)
#         VALUES(%s) RETURNING id;"""
#              cur.execute(sql, (12345,))
# tiki_id = cur.fetchone()[0]
# print('tiki id: ', tiki_id)