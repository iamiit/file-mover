import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileMoveComponent } from './components/file-move/file-move.component';
import { FileTableComponent } from './components/file-table/file-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FileMoveComponent, FileTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-mover-frontend';
}
