import { Component, OnInit } from '@angular/core';
import { TermService } from "@pf/services/termcondition.service";
import { UserService } from "@pf/services/user.service";
import { UploaderService } from "@pf/services/profileImgUpload.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any;
  username: string;
  city: string;
  public termId: number = -1;
  public editorContent: string = '';
  // public options: Object = {
  //   placeholderText: 'Edit Your Content Here!',
  //   charCounterCount: false,
  //   attribution: false,
  //   height: '70vh',
  // }
  editorStyle = {
    height: '70vh'
  };

  imageUrl: string = "";

  // --------- variables for file upload -----------
  progress: number;
  isUploading: boolean = false;
  file: File;
  fileName: string = "No file selected";

  constructor(
    private termService: TermService,
    private userService: UserService,
    private uploader: UploaderService,
  ) {
    this.termService.getTerm().subscribe((res) => {
      this.termId = -1;
      if (res) {
        this.editorContent = res.content;
        this.termId = res.id;
      }
    });
    this.user = {...this.userService.currentUser};
    this.username = this.user.firstname + ' ' + this.user.lastname;
    this.city = this.user.city;
    this.imageUrl = this.user.logo.url;
  }

  ngOnInit() {
    this.uploader.progressSource.subscribe(progress => {
      this.progress = progress;
    });
  }

  onChange(event: any) {
    let file = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.file = file;

      this.isUploading = true;
      this.uploader.upload(this.file, this.user.logo.id, JSON.stringify(this.user)).subscribe(
        message => {
          this.isUploading = false;
          if (message)
            this.imageUrl = message;
        },
        err => {
          this.isUploading = false;
          alert('Failed to upload image.')
        });
    }
  }

  saveTermCondition = () => {
    console.log('htmlContent', this.editorContent);
    if (this.termId === -1) {
      this.termService.createTerm({ content: this.editorContent }).subscribe((res) => {
        console.log('createdResult', res);
      });
    }
    else {
      this.termService.updateTerm(this.termId, { content: this.editorContent }).subscribe((res) => {
        console.log('updatedResult', res);
      })
    }
  }

  saveProfile = () => {
    this.userService.updateUser(this.user.id, this.user).subscribe((res) => {
      if(res !== 'Failed to update user') {
        this.username = res.firstname + ' ' + res.lastname;
        this.city = res.city;
        this.userService.currentUser = res;
      }
      else alert('Failed to update user');
    })
  }

}
