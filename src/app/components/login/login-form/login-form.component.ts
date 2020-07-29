import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// Services
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(next => {
      console.log('logged in');
    }, error => {
      console.log('error');
    });
  }
}
