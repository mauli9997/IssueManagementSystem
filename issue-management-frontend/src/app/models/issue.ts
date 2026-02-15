export interface Issue {
  id?: number;
  title: string;
  description: string;
  priority: string;
  status?: string;
  createdDate?: string;
  updatedDate?: string;
  assignee: string;
}
