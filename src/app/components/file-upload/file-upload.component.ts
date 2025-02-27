import { Component } from '@angular/core';
import { FilesService } from '../../service/files.service';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  selectedFile!: File;

  constructor(private filesService: FilesService) { }

  protected handleFileUpload(event: any) {
    this.selectedFile = event.target.files[0]; // Populate the selected file with the necessary details.
  }

  /**
   * Call API to upload the file
   */
  protected uploadFile() {
    if (this.selectedFile) {
      this.filesService.uploadFile(this.selectedFile)
        .subscribe({
          next: (response) => console.log("Received response: ", response),
          error: (error) => console.error("Error on file upload: ", error)
        })
    }
  }
}
