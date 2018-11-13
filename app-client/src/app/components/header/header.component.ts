import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMaster: boolean = false;
  isCandidate: boolean = false;
  isInterviewer: boolean = false;

  user: object;
  
  @Input() Title: string;

  constructor(private authService: AuthService, private router: Router) { 
    this.authService.subscriber()
      .subscribe(user => this.user = user);
    this.authService.subscriber()
      .subscribe(user => this.roleCheck(user));
  }

  roleCheck(user): void {
    if(user.role === 'master') {
      this.isMaster = true;
    } else if(user.role === 'candidate') {
      this.isCandidate = true;
    } else if(user.role === 'interviewer') {
      this.isInterviewer = true;
    }
  }

  onLogout() {
    this.authService.logout().subscribe();
    this.router.navigate(['/main']);
    this.isMaster = false;
    this.isCandidate = false;
    this.isInterviewer = false;
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('currentUser'));
    if(this.user) {
      this.roleCheck(this.user);
    }
  }
  
}
