# ベースイメージ
FROM node:20.9.0

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係のインストール
COPY package.json  ./

RUN npm install

# 実行コマンド
CMD ["npm", "run", "dev"]
