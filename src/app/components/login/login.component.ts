import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  newUser: any;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {}
  loginForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }
  login() {
    this.newUser = this.loginForm.value;
    this.userService.login(this.newUser || '').subscribe((data) => {
      this.newUser = data;

      // console.log(data);
      localStorage.setItem('userName', this.newUser.userName);
      localStorage.setItem('accessToken', this.newUser.accessToken);
      localStorage.setItem('id', this.newUser._id);
      this.ngOnInit();
      this.router.navigate(['/main/home']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'login successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      window.scrollTo(0, 0);
    });
  }
}
