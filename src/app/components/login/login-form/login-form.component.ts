import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// Services
import { NotificationService } from '../../../services/notification.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService
  ) { }

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

    this.authService.login(this.loginForm.value).subscribe(next => {
      this.notificationService.showSuccess('logged in!');
    }, error => {
      this.notificationService.showSuccess('An error occured while logging in: ' + error);
    });
  }
}
