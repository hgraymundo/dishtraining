import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { TypeCourseComponent } from './components/type-course/type-course.component';
import { NewTypeCourseComponent } from './components/new-type-course/new-type-course.component';
import { EditTypeCourseComponent } from './components/edit-type-course/edit-type-course.component';

import { RoleComponent } from './components/role/role.component';
import { NewRoleComponent } from './components/new-role/new-role.component';

import { FunctionalAreaComponent } from './components/functional-area/functional-area.component';
import { NewFunctionalAreaComponent } from './components/new-functional-area/new-functional-area.component';
import { EditFunctionalAreaComponent } from './components/edit-functional-area/edit-functional-area.component';

import { CourseCategoryComponent } from './components/course-category/course-category.component';
import { NewCourseCategoryComponent } from './components/new-course-category/new-course-category.component';

import { CourseComponent } from './components/course/course.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { DetailCourseComponent } from './components/detail-course/detail-course.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { SupportComponent } from './components/support/support.component';

import { ProfileComponent } from './components/profile/profile.component';
import { ProgressComponent } from './components/progress/progress.component';
import { MyCourseComponent } from './components/my-course/my-course.component';
import { CompleteCourseComponent } from './components/complete-course/complete-course.component';

// import { AdminModule } from './components/admin/admin.module';
import { RegisterComponent } from './components/register/register.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';

import { StudentComponent } from './components/student/student.component';
import { NewStudentComponent } from './components/new-student/new-student.component';


import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';


// check for delete
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ModuleComponent } from './components/module/module.component';
@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    
    ProfileComponent,
    ProgressComponent,
    MyCourseComponent,
    CompleteCourseComponent,
    HomeComponent,
    
    TypeCourseComponent,
    NewTypeCourseComponent,
    EditTypeCourseComponent,

    RoleComponent,
    NewRoleComponent,

    FunctionalAreaComponent,
    NewFunctionalAreaComponent,
    EditFunctionalAreaComponent,

    CourseCategoryComponent,
    NewCourseCategoryComponent,

    CourseComponent,
    NewCourseComponent,
    DetailCourseComponent,

    StudentComponent,
    NewStudentComponent,

    UserComponent,
    NewUserComponent,
    
    DashboardComponent,

    SupportComponent,

    ConfirmDialogComponent,

    RecoveryPasswordComponent,

    ActivateAccountComponent,

    // HeaderComponent,
    // FooterComponent
    AdminMenuComponent,
    ActivityComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      easeTime: 700
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent
  ]

})
export class AppModule { }
