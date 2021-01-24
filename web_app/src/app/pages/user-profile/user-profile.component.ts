import { Component, OnInit } from '@angular/core';
import { TermService } from "@pf/services/termcondition.service";
import { UserService } from "@pf/services/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public termId: number = -1;
  public editorContent: string = '';
  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    attribution: false,
    height: '150px',
  }

  constructor(
    private termService: TermService,
    private userService: UserService,
    ) { 
      this.termService.getTerm().subscribe((res)=>{
        this.termId = -1;
        if(res) {
          this.editorContent = res.content;
          this.termId = res.id;
        }
      });
    }

  ngOnInit() {
  }

  saveTermCondition = () => {
    console.log('htmlContent', this.editorContent);
    if(this.termId === -1) {
      this.termService.createTerm({content: this.editorContent}).subscribe((res)=>{
        console.log('createdResult', res);
      });
    }
    else {
      this.termService.updateTerm(this.termId, {content: this.editorContent}).subscribe((res)=>{
        console.log('updatedResult', res);
      })
    }
  }

}
