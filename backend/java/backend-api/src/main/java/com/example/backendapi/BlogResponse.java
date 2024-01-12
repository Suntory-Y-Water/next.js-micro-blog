package com.example.backendapi;

public class BlogResponse {
    private String id;
    private String title;
    private String content;
    private String createdAt;

    public BlogResponse(String id, String title, String content, String createdAt) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
    }

    // ゲッター
    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }
    
    public String getCreatedAt() {
        return createdAt;
    }
}
