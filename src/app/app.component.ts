import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  project: string = '';
  forbiddenProjectNames: string[] = ['Test'];
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'project': new FormControl(null, [Validators.required], this.forbiddenNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    })
  }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) != -1) {
          resolve({'nameIsForbidden': true})
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }


}
