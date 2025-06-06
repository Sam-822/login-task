import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
	{
		path:'',
		component: HomePageComponent,
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
