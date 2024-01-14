# Java 17のベースイメージを使用
FROM openjdk:17

# 作業ディレクトリを設定
WORKDIR /app

# ここでのコピーは、Dockerfileの位置（backend/java/backend-api）を基準としています
COPY . /app

# Mavenを使用して依存関係をインストールし、アプリケーションをビルド
RUN ./mvnw install -DskipTests

# ビルドされたjarファイルを実行
CMD ["java", "-jar", "target/backend-api-0.0.1-SNAPSHOT.jar"]