import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesComponent } from './courses/courses.component';
import { NewsComponent } from './news/news.component';
import AuthSigninComponent from './demo/pages/authentication/auth-signin/auth-signin.component';
import AuthSignupComponent from './demo/pages/authentication/auth-signup/auth-signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'dashboard',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'examination',
        loadComponent: () => import('./demo/examination/examination.component').then((c) => c.ExaminationComponent)
      },
      {
        path: 'take-examination',
        loadComponent: () => import('./demo/take-examination/take-examination.component').then((c) => c.TakeExaminationComponent)
      },
      {
        path: 'all-result',
        loadComponent: () => import('./demo/all-result/all-result.component').then((c) => c.AllResultComponent)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then((m) => m.FormElementsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./demo/pages/tables/tables.module').then((m) => m.TablesModule)
      },
      {
        path: 'apexchart',
        loadComponent: () => import('./demo/pages/core-chart/apex-chart/apex-chart.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/extra/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'login',
    component: AuthSigninComponent
  },
  {
    path: 'register',
    component: AuthSignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
