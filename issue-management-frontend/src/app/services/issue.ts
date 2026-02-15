import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../models/issue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private apiUrl = 'http://localhost:8080/api/issues';

  constructor(private http: HttpClient) {}

  getAllIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.apiUrl);
  }

  createIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(this.apiUrl, issue);
  }

  updateIssue(id: number, issue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`${this.apiUrl}/${id}`, issue);
  }

  deleteIssue(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  filterByPriority(priority: string): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.apiUrl}/priority/${priority}`);
  }

  filterByStatus(status: string): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.apiUrl}/status/${status}`);
  }
}
