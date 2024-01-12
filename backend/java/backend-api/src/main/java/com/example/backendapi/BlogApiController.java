package com.example.backendapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/java/blog")
public class BlogApiController {

    @Autowired
    private BlogService blogService;

    @GetMapping
    public List<BlogResponse> getBlogs() {
        return blogService.getAllBlogs();
    }

    // 特定のIDのブログを取得
    @GetMapping("/{id}")
    public BlogResponse getBlogById(@PathVariable String id) {
        return blogService.getBlogById(id);
    }
}
