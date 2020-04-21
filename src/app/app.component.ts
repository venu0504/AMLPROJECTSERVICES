import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { ConfigName, ConfigService } from '../@vex/services/config.service';
import { MatIconRegistry } from '@angular/material/icon';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icDateRange from '@iconify/icons-ic/twotone-date-range';
import icChat from '@iconify/icons-ic/twotone-chat';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icLock from '@iconify/icons-ic/twotone-lock';
import icWatchLater from '@iconify/icons-ic/twotone-watch-later';
import icError from '@iconify/icons-ic/twotone-error';
import icAttachMoney from '@iconify/icons-ic/twotone-attach-money';
import icPersonOutline from '@iconify/icons-ic/twotone-person-outline';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icHelp from '@iconify/icons-ic/twotone-help';
import icBook from '@iconify/icons-ic/twotone-book';
import icBubbleChart from '@iconify/icons-ic/twotone-bubble-chart';
import icFormatColorText from '@iconify/icons-ic/twotone-format-color-text';
import icStar from '@iconify/icons-ic/twotone-star';
import icViewCompact from '@iconify/icons-ic/twotone-view-compact';
import icPictureInPicture from '@iconify/icons-ic/twotone-picture-in-picture';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { LayoutService } from '../@vex/services/layout.service';
import icUpdate from '@iconify/icons-ic/twotone-update';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { Style, StyleService } from '../@vex/services/style.service';
import theme from '../@vex/utils/tailwindcss';
import icChromeReaderMode from '@iconify/icons-ic/twotone-chrome-reader-mode';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vex';

  constructor(private configService: ConfigService,
              private styleService: StyleService,
              private iconRegistry: MatIconRegistry,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private navigationService: NavigationService,
              private splashScreenService: SplashScreenService) {
    this.iconRegistry.setDefaultFontSetClass('iconify');
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('rtl') && coerceBooleanProperty(queryParamMap.get('rtl')))
    ).subscribe(queryParamMap => {
      this.document.body.dir = 'rtl';
      this.configService.updateConfig({
        rtl: true
      });
    });

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('layout'))
    ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));

    this.navigationService.items = [
      {
        type: 'link',
        label: 'Dashboard',
        route: '/dashboards/analytics',
        icon: icLayers
      },
    
	  {
        type: 'link',
        label: 'Screening',
          route: '/screening/components/overview',
        icon: icLayers
      },
	
   
	     {
        type: 'link',
        label: 'Case Manager',
         route: '/casemanager/case1',
        icon: icContacts
      },
	
      // {
      //   type: 'dropdown',
      //   label: 'Status Reports',
      //   icon: icAssigment,
      //   children: [
      //     {
      //       type: 'link',
      //       label: 'Batch Screening Status',
      //         route: '/status-reports/screening-status',
      //       icon: icAssigment
      //     },
      //     {
      //       type: 'link',
      //       label: 'Export Status',
      //       route: '/status-reports/export-status',
      //       icon: icAssigment
      //     }
      //   ]
      // },
	 
      {
        type: 'dropdown',
        label: 'Admin',
        icon: icContacts,
        children: [
      
	      {
            type: 'link',
            label: 'Summary',
            route: '/admin/summary',
            icon: icAssigment
          },
          {
            type: 'link',
            label: 'Groups',
            route: '/admin/groups',
            icon: icAssigment
          },
         {
            type: 'link',
            label: 'Users',
            route: '/admin/users',
            icon: icAssigment
          },
          {
            type: 'link',
            label: 'Audit',
            route: '/admin/audit',
            icon: icAssigment
          },
		
          {
            type: 'link',
            label: 'Roles',
            route: '/admin/roles',
            icon: icAssigment
          }
        ]
      },
	  

      {
        type: 'dropdown',
        label: 'Help',
        icon: icContactSupport,
        children: [
         {
            type: 'link',
            label: 'Help',
            route: '/Help/help',
            icon: icAssigment
          },
          {
            type: 'link',
            label: 'Training',
            route: '/Help/training',
            icon: icAssigment
          },
          {
            type: 'link',
            label: 'Contact Us',
            route: '/Help/contactus',
            icon: icAssigment
          }
        ]
      },


 
      // {
      //   type: 'subheading',
      //   label: 'Pages',
      //   children: [
      //     {
      //       type: 'dropdown',
      //       label: 'Authentication',
      //       icon: icLock,
      //       children: [
      //         {
      //           type: 'link',
      //           label: 'Login',
      //           route: '/login'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Register',
      //           route: '/register'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Forgot Password',
      //           route: '/forgot-password'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Forgot Username',
      //           route: '/forgot-username'
      //         }
      //       ]
      //     },
         
  
      //     {
      //       type: 'link',
      //       label: 'Pricing',
      //       icon: icAttachMoney,
      //       route: '/pages/pricing'
      //     },
      //     {
      //       type: 'link',
      //       label: 'Profile',
      //       icon: icPersonOutline,
      //       route: '/pages/profile'
      //     },
      //     {
      //       type: 'link',
      //       label: 'Invoice',
      //       icon: icReceipt,
      //       route: '/pages/invoice'
      //     },
      //     {
      //       type: 'link',
      //       label: 'FAQ',
      //       icon: icHelp,
      //       route: '/pages/faq'
      //     },
      //     {
      //       type: 'link',
      //       label: 'Guides',
      //       icon: icBook,
      //       route: '/pages/guides',
      //       badge: {
      //         value: '18',
      //         background: theme.colors.teal['500'],
      //         color: theme.textColor['teal-contrast']['500']
      //       },
      //     },
      //   ]
      // },
 
      {
        type: 'link',
        label: 'Configuration',
        route: () => this.layoutService.openConfigpanel(),
        icon: icSettings
      }
    ];
  }
}
