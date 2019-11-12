import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

// import { StudentComponent } from './components/student/student.component';
// import { NewStudentComponent } from './components/new-student/new-student.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/new-user/new-user.component';

import { RoleComponent } from './components/role/role.component';
import { TypeCourseComponent } from './components/type-course/type-course.component';
import { NewRoleComponent } from './components/new-role/new-role.component';
import { NewTypeCourseComponent } from './components/new-type-course/new-type-course.component';
import { CourseComponent } from './components/course/course.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SupportComponent } from './components/support/support.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailCourseComponent } from './components/detail-course/detail-course.component';
import { CourseCategoryComponent } from './components/course-category/course-category.component';
import { NewCourseCategoryComponent } from './components/new-course-category/new-course-category.component';
import { FunctionalAreaComponent } from './components/functional-area/functional-area.component';
import { NewFunctionalAreaComponent } from './components/new-functional-area/new-functional-area.component';
import { EditFunctionalAreaComponent } from './components/edit-functional-area/edit-functional-area.component';
import { EditTypeCourseComponent } from './components/edit-type-course/edit-type-course.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { HomeComponent } from './components/home/home.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';


const routes: Routes = [
  { path: 'home',   component: HomeComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }, 
  { path: 'recovery-password/:id', component: RecoveryPasswordComponent },
  { path: 'activate-account/:id', component: ActivateAccountComponent },
  // { path: 'student', component: StudentComponent },
  // { path: 'new-student', component: NewStudentComponent },

  { path: 'user', component: UserComponent },
  { path: 'new-user', component: NewUserComponent },

  { path: 'role', component: RoleComponent },
  { path: 'new-role', component: NewRoleComponent },

  { path: 'type-course', component: TypeCourseComponent },
  { path: 'new-type-course', component: NewTypeCourseComponent },
  { path: 'edit-type-course/:id', component: EditTypeCourseComponent },

  { path: 'functional-area', component: FunctionalAreaComponent },
  { path: 'new-functional-area', component: NewFunctionalAreaComponent },
  { path: 'edit-functional-area/:id', component: EditFunctionalAreaComponent },

  { path: 'course-category', component: CourseCategoryComponent },
  { path: 'new-course-category', component: NewCourseCategoryComponent },

  { path: 'course', component: CourseComponent },
  { path: 'new-course', component: NewCourseComponent },
  { path: 'detail-course/:id', component: DetailCourseComponent },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'support', component: SupportComponent },

  { path: 'my-profile', component: ProfileComponent}
  // { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
