FROM openjdk:17

WORKDIR /app

# 親ディレクトリからbackend/java/backend-apiディレクトリにあるファイルをコピー
COPY ./backend/java/backend-api /app

# Mavenを使用して依存関係をインストールし、アプリケーションをビルド
RUN ./mvnw install -DskipTests

# ビルドされたjarファイルを実行
CMD ["java", "-jar", "target/backend-api-0.0.1-SNAPSHOT.jar"]