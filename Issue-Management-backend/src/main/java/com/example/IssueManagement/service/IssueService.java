package com.example.IssueManagement.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.IssueManagement.entity.Issue;
import com.example.IssueManagement.repository.IssueRepository;
import com.example.IssueManagement.exception.ResourceNotFoundException;

@Service
public class IssueService {

    private final IssueRepository repository;

    public IssueService(IssueRepository repository) {
        this.repository = repository;
    }

    // ✅ Create Issue
    public Issue createIssue(Issue issue) {
        return repository.save(issue);
    }

    // ✅ Get All Issues
    public List<Issue> getAllIssues() {
        return repository.findAll();
    }

    // ✅ Update Issue
    public Issue updateIssue(Long id, Issue updatedIssue) {

        Issue issue = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Issue not found with id: " + id)
                );

        issue.setTitle(updatedIssue.getTitle());
        issue.setDescription(updatedIssue.getDescription());
        issue.setPriority(updatedIssue.getPriority());
        issue.setStatus(updatedIssue.getStatus());
        issue.setAssignee(updatedIssue.getAssignee());

        // updatedDate handled automatically by @PreUpdate

        return repository.save(issue);
    }

    // ✅ Delete Issue
    public void deleteIssue(Long id) {

        Issue issue = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Issue not found with id: " + id)
                );

        repository.delete(issue);
    }

    // ✅ Filter by Priority
    public List<Issue> filterByPriority(String priority) {
        return repository.findByPriority(priority);
    }

    // ✅ Filter by Status
    public List<Issue> filterByStatus(String status) {
        return repository.findByStatus(status);
    }
}
