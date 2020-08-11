import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { NotificationService } from '../../../../../services/notification.service';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  returnUrl: string;
  loginForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  isLoginFormValid(): boolean {
    return this.loginForm.valid;
  }

  onSubmit(): void {
    if (!this.isLoginFormValid()) {
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl(this.returnUrl);
    return;
    
    this.isSubmitting = true;
    this.authService.login(this.loginForm.value).subscribe(next => {
      this.router.navigateByUrl(this.returnUrl);
      this.isSubmitting = false;
    }, error => {
      this.notificationService.showSuccess('An error occured while logging in');
      this.isSubmitting = false;
    });
  }
}
