import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IssueService } from '../../services/issue';
import { Issue } from '../../models/issue';

@Component({
  selector: 'app-issue-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './issue-form.html'
})
export class IssueFormComponent {

  @Output() refresh = new EventEmitter<void>();

  issue: Issue = {
    title: '',
    description: '',
    priority: 'Low',
      status: 'Open',  
    assignee: ''
  };

  constructor(private issueService: IssueService) {}

  submit() {
    this.issueService.createIssue(this.issue).subscribe(() => {
      this.refresh.emit();
      this.issue = {
        title: '',
        description: '',
        priority: 'Low',
          status: 'Open',  
        assignee: ''
      };
    });
  }
}
