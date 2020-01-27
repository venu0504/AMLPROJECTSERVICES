import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../@vex/layout/layout.component';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';

const childrenRoutes: VexRoutes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },

  {
    path: 'dashboards/analytics',
    loadChildren: () => import('./pages/dashboards/dashboard-analytics/dashboard-analytics.module').then(m => m.DashboardAnalyticsModule),
  },
 
   {
    path: 'casemanager/casedetails',
    loadChildren: () => import('./pages/casemanager/casedetails/casedetails.module').then(m => m.CasedetailsModule),
  },
  
 
  
  {
    path: 'casemanager/case1',
    loadChildren: () => import('./pages/casemanager/case1/case1.module').then(m => m.Case1Module),
  },
  
       {
    path: 'casemanager/casesummery',
    loadChildren: () => import('./pages/casemanager/casesummery/casesummery.module').then(m => m.CasesummeryModule),
  },
     {
    path: 'casemanager/caseaudit',
    loadChildren: () => import('./pages/casemanager/caseaudit/caseaudit.module').then(m => m.CaseauditModule),
  },
  
  {
    path: 'casemanager/case',
    loadChildren: () => import('./pages/casemanager/case/case.module').then(m => m.CaseModule),
  },
  
    {
    path: 'status-reports/screening-status',
    loadChildren: () => import('./pages/status-reports/screening-status/screening-status.module').then(m => m.ScreeningstatusModule),
  },
   {
    path: 'status-reports/export-status',
    loadChildren: () => import('./pages/status-reports/export-status/export-status.module').then(m => m.ExportstatusModule),
  },
   
   {
    path: 'admin/users',
    loadChildren: () => import('./pages/admin/users/users.module').then(m => m.UsersModule),
  },
    {
    path: 'admin/summery',
    loadChildren: () => import('./pages/admin/summery/summery.module').then(m => m.SummeryModule),
  },
    {
    path: 'admin/groups',
    loadChildren: () => import('./pages/admin/groups/groups.module').then(m => m.GroupsModule),
  },
  
  {
    path: 'admin/audit',
    loadChildren: () => import('./pages/admin/audit/audit.module').then(m => m.AuditModule),
  },
    {
    path: 'admin/roles',
    loadChildren: () => import('./pages/admin/roles/roles.module').then(m => m.RolesModule),
  },
    {
    path: 'Help/help',
    loadChildren: () => import('./pages/Help/help/help.module').then(m => m.HelpModule),
  },
   {
    path: 'Help/training',
    loadChildren: () => import('./pages/Help/training/training.module').then(m => m.TrainingModule),
  },
  {
    path: 'Help/contactus',
    loadChildren: () => import('./pages/Help/contactus/contactus.module').then(m => m.ContactusModule),
  },
  {
    path: 'apps',
    children: [
      {
        path: 'chat',
        loadChildren: () => import('./pages/apps/chat/chat.module').then(m => m.ChatModule),
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'contacts',
        loadChildren: () => import('./pages/apps/contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./pages/apps/calendar/calendar.module').then(m => m.CalendarModule),
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'aio-table',
        loadChildren: () => import('./pages/apps/aio-table/aio-table.module').then(m => m.AioTableModule),
      },
      {
        path: 'help-center',
        loadChildren: () => import('./pages/apps/help-center/help-center.module').then(m => m.HelpCenterModule),
      },
      {
        path: 'scrumboard',
        loadChildren: () => import('./pages/apps/scrumboard/scrumboard.module').then(m => m.ScrumboardModule),
      },
      {
        path: 'editor',
        loadChildren: () => import('./pages/apps/editor/editor.module').then(m => m.EditorModule),
      },
    ]
  },
  {
    path: 'pages',
    children: [
      {
        path: 'pricing',
        loadChildren: () => import('./pages/pages/pricing/pricing.module').then(m => m.PricingModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./pages/pages/faq/faq.module').then(m => m.FaqModule)
      },
      {
        path: 'guides',
        loadChildren: () => import('./pages/pages/guides/guides.module').then(m => m.GuidesModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./pages/pages/invoice/invoice.module').then(m => m.InvoiceModule)
      },
      {
        path: 'error-404',
        loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
      },
      {
        path: 'error-500',
        loadChildren: () => import('./pages/pages/errors/error-500/error-500.module').then(m => m.Error500Module)
      }
    ]
  },
  {
    path: 'screening',
    children: [
      {
        path: 'components',
        loadChildren: () => import('./pages/screening/components/components.module').then(m => m.ComponentsModule),
      },
    
    ]
  },
  {
    path: 'documentation',
    loadChildren: () => import('./pages/documentation/documentation.module').then(m => m.DocumentationModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
  }
];

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/pages/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/pages/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: 'forgot-username',
    loadChildren: () => import('./pages/pages/auth/forgot-username/forgot-username.module').then(m => m.ForgotUsernameModule),
  },
  {
    path: 'registration-key',
    loadChildren: () => import('./pages/pages/auth/registration-key/registration-key.module').then(m => m.RegistrationKeyModule),
  },
  {
    path: 'onepass-profile',
    loadChildren: () => import('./pages/pages/auth/onepass-profile/onepass-profile.module').then(m => m.OnepassProfileModule),
  },
  {
    path: 'update-oneplus-profile',
    loadChildren: () => import('./pages/pages/auth/update-oneplus-profile/update-oneplus-profile.module').then(m => m.UpdateOneplusProfileModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./pages/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: childrenRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
