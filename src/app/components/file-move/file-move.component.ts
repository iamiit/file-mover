import { Component } from '@angular/core';
import { FileService } from '../../services/file.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-file-move',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './file-move.component.html',
  styleUrls: ['./file-move.component.css']
})
export class FileMoveComponent {
  moveForm: FormGroup;

  constructor(private fileService: FileService, private fb: FormBuilder) {
    this.moveForm = this.fb.group({
      srcFolder: ['', Validators.required],
      destFolder: ['', Validators.required],
      cutoffDate: ['', Validators.required]
    });
  }

  moveFiles(): void {
    if (this.moveForm.valid) {
      const { srcFolder, destFolder, cutoffDate } = this.moveForm.value;
      this.fileService.moveFiles(srcFolder, destFolder, cutoffDate).subscribe(response => {
        console.log('Files moved:', response.files_moved);
      });
    }
  }

  resetForm(): void {
    this.moveForm.reset();
  }
}
