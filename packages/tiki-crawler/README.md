tiki will not just accept scrapy user agent
please run

`scrapy runspider index.py -s USER_AGENT='tiki-crawler'`

Always remember to turn on mongod in db hosting machine otherwise this spider will break unexpectedly