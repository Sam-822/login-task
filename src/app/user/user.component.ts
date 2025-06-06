import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
	constructor(private router: Router){}
  userData: any;
  ngOnInit() {
    const tempUserData = localStorage.getItem('userdata');
    if (tempUserData) this.userData = JSON.parse(tempUserData);
		else this.router.navigate(['/login'])
  }
  oldPassType = 'password';
  newPassType = 'password';
  confPassType = 'password';

  toggleOldPass() {
    if (this.oldPassType === 'password') this.oldPassType = 'text';
    else this.oldPassType = 'password';
  }
  toggleNewPass() {
    if (this.newPassType === 'password') this.newPassType = 'text';
    else this.newPassType = 'password';
  }
  toggleConfPass() {
    if (this.confPassType === 'password') this.confPassType = 'text';
    else this.confPassType = 'password';
  }

	logout(){
		localStorage.clear()
		this.router.navigate(['/login'])
	}
}
