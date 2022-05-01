#!bin/bash

docker run --name mysql-test -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql
