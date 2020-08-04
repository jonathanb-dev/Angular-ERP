import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// Angular material
import { MatSidenav } from '@angular/material/sidenav';

// Services
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.sidenav.toggle();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
