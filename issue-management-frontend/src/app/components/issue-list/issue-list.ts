import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IssueService } from '../../services/issue';
import { Issue } from '../../models/issue';
import { IssueFormComponent } from '../issue-form/issue-form';

@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [CommonModule, FormsModule, IssueFormComponent],
  templateUrl: './issue-list.html',
  styleUrls: ['./issue-list.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = [];
  allIssues: Issue[] = [];   // 🔥 store original list
  selectedIssue: Issue | null = null;

  selectedPriority: string = '';
  selectedStatus: string = '';

  constructor(
    private issueService: IssueService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadIssues();
  }

  // ✅ Load all issues
  loadIssues(): void {
    this.issueService.getAllIssues().subscribe({
      next: (data) => {
        this.allIssues = data;     // store original
        this.issues = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  // ✅ Delete
  deleteIssue(id: number): void {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.loadIssues();
    });
  }

  // ✅ Edit
  startEdit(issue: Issue): void {
    this.selectedIssue = { ...issue };
  }

  // ✅ Update
  updateIssue(): void {
    if (this.selectedIssue?.id) {
      this.issueService.updateIssue(this.selectedIssue.id, this.selectedIssue)
        .subscribe(() => {
          this.selectedIssue = null;
          this.loadIssues();
        });
    }
  }

  // ✅ Filter by Priority
  filterPriority(event: any) {
    this.selectedPriority = event.target.value;
    this.applyFilters();
  }

  // ✅ Filter by Status
  filterStatus(event: any) {
    this.selectedStatus = event.target.value;
    this.applyFilters();
  }

  // 🔥 Apply filters locally
  applyFilters() {
    this.issues = this.allIssues.filter(issue => {

      const matchesPriority =
        !this.selectedPriority || issue.priority === this.selectedPriority;

      const matchesStatus =
        !this.selectedStatus || issue.status === this.selectedStatus;

      return matchesPriority && matchesStatus;
    });
  }
}
