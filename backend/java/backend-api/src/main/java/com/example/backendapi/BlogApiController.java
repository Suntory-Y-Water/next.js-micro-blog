package com.example.backendapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    /**
     * ブログエントリを追加
     * @param blog
     * @return
     */
    @PostMapping
    public ResponseEntity<?> addBlog(@RequestBody BlogResponse blog) {
        boolean isAdded = blogService.addBlog(blog);
        
        if (isAdded) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // 特定のIDのブログを削除
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBlogById(@PathVariable String id) {
        boolean isDeleted = blogService.deleteBlogById(id);
        
        if (isDeleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
