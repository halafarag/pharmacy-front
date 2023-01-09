import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  newUser: any;
  constructor(private fb: FormBuilder, private userService: UserService) {}
  registerForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    emailAdress: ['', [Validators.required, Validators.email]],
    moblieNum: [
      '',
      [Validators.required, Validators.pattern('^((\\+20-?)|0)?[0-9]{10}$')],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
      ],
    ],
  });
  get userName() {
    return this.registerForm.get('userName');
  }
  get emailAdress() {
    return this.registerForm.get('emailAdress');
  }
  get moblieNum() {
    return this.registerForm.get('moblieNum');
  }
  get password() {
    return this.registerForm.get('password');
  }
  register() {
    this.newUser = this.registerForm.value;
    this.userService.register(this.newUser || '').subscribe({
      next: (newUser) => {
        console.log(newUser);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'registerd successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  }
}
