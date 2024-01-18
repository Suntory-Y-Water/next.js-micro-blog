# micro-blog

バックエンドの言語差異を知るための練習用リポジトリ

``` bash
# コンテナの起動
docker compose up -d

# データベースの初期化
docker-compose exec fast-api poetry run python -m api.migrate_db
```