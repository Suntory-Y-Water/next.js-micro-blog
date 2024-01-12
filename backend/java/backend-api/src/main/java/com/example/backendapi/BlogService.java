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

}
