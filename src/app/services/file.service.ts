import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  moveFiles(srcFolder: string, destFolder: string, cutoffDate: string): Observable<any> {
    const body = { src_folder: srcFolder, dest_folder: destFolder, cutoff_date: cutoffDate };
    return this.http.post(`${this.apiUrl}/move_files`, body);
  }

  getFileRecords(): Observable<any> {
    return this.http.get(`${this.apiUrl}/file_records`);
  }

  searchRecords(params: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/search_records`, { params });
  }

  deleteRecord(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete_record/${id}`);
  }
}
