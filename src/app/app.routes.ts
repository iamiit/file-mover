import { Routes } from '@angular/router';
import { FileMoveComponent } from './components/file-move/file-move.component';
import { FileTableComponent } from './components/file-table/file-table.component';

export const routes: Routes = [
  { path: 'move-files', component: FileMoveComponent },
  { path: 'file-records', component: FileTableComponent },
  { path: '', redirectTo: '/move-files', pathMatch: 'full' }
];
