import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      console.log(this.validateForm)
      const formData: Object = {
        _csrf: 'dDJNYk5FRmIVS347GC4yJEd.KlsocA06LHMiKSA8GTMlYj9QNiQlKQ==',
        username: 'sr123123',
        password: 'sr123123'
      }
      const api: string = 'http://member-api-dev.ewgvip.com/admin/center/do-login.html'
      this.http.post(api, formData).subscribe(res => {console.log(res)})
    }
  }
  // login(): void {
  //   console.log(123)
  //   this.http.get('http://a.itying.com/api/productlist').subscribe(res => {console.log(res)})
  // }

}
