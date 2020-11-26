
for i in {3..13}
do
curl -H "Content-Type: application/json" -XPOST "localhost:9200/product-items/_doc/_bulk?pretty&refresh" --data-binary @mongodump/dump.${i}.json
done