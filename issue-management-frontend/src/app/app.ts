import { Component } from '@angular/core';
import { IssueListComponent } from './components/issue-list/issue-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IssueListComponent],   // ✅ IMPORTANT
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
