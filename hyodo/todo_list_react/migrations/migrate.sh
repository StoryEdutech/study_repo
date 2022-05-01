echo "Enter Mysql Password:"
read pw
mysql -u root --password="$pw" < db.sql
mysql -u root --password="$pw" todo_list < todo_list.sql
