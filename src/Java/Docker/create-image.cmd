docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probaodinadcat-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probaodinadcat-java/app ../../..
