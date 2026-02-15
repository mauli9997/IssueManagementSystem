package com.example.IssueManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.IssueManagement.entity.Issue;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {

    List<Issue> findByPriority(String priority);

    List<Issue> findByStatus(String status);
}
