import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
	{
		path:'',
		component: LoginPageComponent
	},
	{
		path:'login',
		component: LoginPageComponent
	},
	{
		path:'user',
		component: UserComponent
	},
];
