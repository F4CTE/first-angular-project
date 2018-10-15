import { UserProfileComponent } from './user-profile/user-profile.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
const ROUTES
: Routes = [
{ path: 'signup', component: SignUpComponent },
{path: 'user', component: UserComponent },
{path: 'user-profile', component: UserProfileComponent }
];

export { ROUTES };
