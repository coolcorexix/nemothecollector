let bs=10000
for i in {1..13}
do 
let bsi=${bs}*$i
mongoexport --db tiki_crawler --collection productItems --port 27017\
  -v \
  --skip ${bsi} --limit ${bs} | sed '/"_id":/s/"_id":[^,]*,//' > ./mongodump/dump.${i}.json 
done