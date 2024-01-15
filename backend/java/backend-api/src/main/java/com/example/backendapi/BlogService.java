package com.example.backendapi;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class BlogService {

    @Value("${spring.datasource.url}")
    private String dbUrl;

    /** DB接続用の共通化メソッド */
    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection("jdbc:sqlite:./db/blog.db");
    }

    /** ブログ情報を全件取得する */
    public List<BlogResponse> getAllBlogs() {
        List<BlogResponse> blogs = new ArrayList<>();
        String sql = "SELECT * FROM blog";

        try (Connection conn = getConnection();
                PreparedStatement pstmt = conn.prepareStatement(sql)) {

            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                blogs.add(new BlogResponse(rs.getString("id"), rs.getString("title"),
                        rs.getString("content"), rs.getString("createdAt")));
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return blogs;
    }

    /** クエリパラメータからIDを取得して、取得したIDのレコードを返す */
    public BlogResponse getBlogById(String id) {
        String sql = "SELECT * FROM blog WHERE id = ?";

        try (Connection conn = getConnection();
                PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, id);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                return new BlogResponse(rs.getString("id"), rs.getString("title"),
                        rs.getString("content"), rs.getString("createdAt"));
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    /**
     * 新規のブログを追加する
     */
    public boolean addBlog(BlogResponse blog) {
        String sql = "INSERT INTO blog (id, title, content, createdAt) VALUES (?, ?, ?, ?)";

        try (Connection conn = getConnection();
                PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, blog.getId());
            pstmt.setString(2, blog.getTitle());
            pstmt.setString(3, blog.getContent());
            pstmt.setString(4, blog.getCreatedAt());
            int affectedRows = pstmt.executeUpdate();

            return affectedRows > 0;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    /**
     * 取得したIDのブログを削除する
     */
    public boolean deleteBlogById(String id) {
        String sql = "DELETE FROM blog WHERE id = ?";

        try (Connection conn = getConnection();
                PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, id);
            int affectedRows = pstmt.executeUpdate();

            return affectedRows > 0;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}
