package com.example.IssueManagement.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.IssueManagement.entity.Issue;
import com.example.IssueManagement.service.IssueService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/issues")
@CrossOrigin
public class IssueController {

    private final IssueService service;

    public IssueController(IssueService service) {
        this.service = service;
    }

    // 1. Create Issue
    @PostMapping
    public ResponseEntity<Issue> createIssue(@Valid @RequestBody Issue issue) {
        return ResponseEntity.status(201).body(service.createIssue(issue));
    }

    // 2. Get All Issues
    @GetMapping
    public ResponseEntity<List<Issue>> getAllIssues() {
        return ResponseEntity.ok(service.getAllIssues());
    }

    // 3. Update Issue
    @PutMapping("/{id}")
    public ResponseEntity<Issue> updateIssue(@PathVariable Long id, @RequestBody Issue issue) {
        return ResponseEntity.ok(service.updateIssue(id, issue));
    }

    // 4. Delete Issue
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIssue(@PathVariable Long id) {
        service.deleteIssue(id);
        return ResponseEntity.noContent().build();
    }

    // 5. Filter by Priority
    @GetMapping("/priority/{priority}")
    public ResponseEntity<List<Issue>> filterByPriority(@PathVariable String priority) {
        return ResponseEntity.ok(service.filterByPriority(priority));
    }

    // 6. Filter by Status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Issue>> filterByStatus(@PathVariable String status) {
        return ResponseEntity.ok(service.filterByStatus(status));
    }
}
