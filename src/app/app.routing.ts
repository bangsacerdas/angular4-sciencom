import { StudentComponent } from './components/student/student.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';

import{Routes,RouterModule} from '@angular/router'


const appRoutes : Routes =[
    {path:'',component:UserComponent},
    {path:'about',component:AboutComponent},
    {path:'student',component:StudentComponent},
    
    {path: '**', redirectTo: '' }

];
export const routing = RouterModule.forRoot(appRoutes);