# FastAPI Lesson

## 環境構築

**ローカル環境**
``` bash 
.venv/Scripts/activate
pip install -r requirements.txt
```

**Docker**
``` bash
docker compose build

docker-compose run \
  --entrypoint "poetry init \
    --name fast-api\
    --dependency fastapi \
    --dependency uvicorn[standard]" \
  fast-api

docker-compose run --entrypoint "poetry install --no-root" fast-api
```

**新しいPythonパッケージをインストールした際の再ビルド**

``` bash
docker-compose build --no-cache
```

**その他諸々**

``` bash
# 初回起動
docker compose up

# コンテナを一時的に停止。リソースは保持。
docker-compose stop
# 再開。基本的にstopとセットで使う
docker-compose start

# コンテナとほとんどのリソースを完全に削除。
docker-compose down

# Mysqlへの接続
docker compose exec db mysql fast-api

# "fast-api" コンテナの中で "poetry add sqlalchemy aiomysql" を実行
docker-compose exec fast-api poetry add sqlalchemy aiomysql

# api モジュールの migrate_db スクリプトを実行する
docker-compose exec fast-api poetry run python -m api.migrate_db

# Pytestを非同期用に拡張する、 pytest-asyncio をインストール
docker-compose exec fast-api poetry add -G dev pytest-asyncio aiosqlite httpx

# 新しくパッケージとかインストールしたら実施する
docker-compose build --no-cache
```

``` bash
# test
docker-compose run --entrypoint "poetry run pytest" fast-api

```