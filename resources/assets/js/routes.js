import authPage from './components/pages/authPage.vue';
import portalHome from './components/pages/portalPages/home.vue';
import portalEvents from './components/pages/portalPages/events.vue';
import portalAbout from './components/pages/portalPages/about.vue';
import portalCourses from './components/pages/portalPages/courses.vue';
import portalSchedule from './components/pages/portalPages/schedule.vue';
import portalEnroll from './components/pages/portalPages/enrollnow.vue';

import jie404 from './components/pages/jie404.vue';
import jieSignup from './components/jieAuthFolder/jieSignup.vue';
import jieLogin from './components/jieAuthFolder/jieLogin.vue';

import jieUserLayout from './components/jieLayoutsFolder/userLayout.vue';

import jieUserWelcome from './components/jieUserFolder/jieWelcome.vue';
import jieUserHome from './components/jieUserFolder/jieHome.vue';
import jieProfile from './components/jieUserFolder/jieProfile.vue';

import jieVpOffice from './components/jieMyApps/jieVpOffice.vue';
import jieVpaaOffice from './components/jieMyApps/jieVpaaOffice.vue';
import api from './components/api.vue';


import jieVpaaOfficeDash from './components/jieMyApps/vpaaOffice/dashboard.vue';
import jieVpaaOfficeSched from './components/jieMyApps/vpaaOffice/schedule.vue';
import jieVpaaOfficeSubjects from './components/jieMyApps/vpaaOffice/subjects.vue';
import jieVpaaOfficePrograms from './components/jieMyApps/vpaaOffice/programs.vue';
import jieVpaaOfficeRooms from './components/jieMyApps/vpaaOffice/rooms.vue';
import jieVpaaOfficeFaculties from './components/jieMyApps/vpaaOffice/faculties.vue';
import jieVpaaOfficeStudents from './components/jieMyApps/vpaaOffice/students.vue';

//test

import PleaseClickMe from './components/pages/PleaseClickMe.vue';

export const routes = [
   {
      path:'/auth',
      component: authPage,
      children: [
         {
            path: '/auth',
            component: portalHome,
         },{
            path: '/about',
            component: portalAbout,
         },{
            path: '/events',
            component: portalEvents,
         },{
            path: '/courses',
            component: portalEvents,
         },{
            path: '/schedule',
            component: portalSchedule,
         },{
            path: '/enrollment',
            component: portalEnroll,
         },
      ]
   },
   {
      path: '/',
      component: jieUserLayout,
      meta: {
         requiresAuth: true,
         // progress: {
         //    func: [
         //       {call: 'color', modifier: 'temp', argument: '#ffb000'},
         //       {call: 'fail', modifier: 'temp', argument: '#6e0000'},
         //       {call: 'location', modifier: 'temp', argument: 'top'},
         //       {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
         //    ]
         // }
      },
      children: [
         {
            path: '/',
            component: jieUserHome
         },
         {
            path: '/profile/:username',
            component: jieProfile,
         },
         {
            path: '/welcome',
            component: jieUserWelcome
         },
         {
            path: '/vpoffice',
            component: jieVpOffice
         },
         {
            path: 'vpaaoffice',
            component: jieVpaaOffice,
            children:[ 
               {
                  path:'/',
                  component: jieVpaaOfficeDash
               },
               {
                  path:'schedule',
                  component: jieVpaaOfficeSched
               },
               {
                  path:'subjects',
                  component: jieVpaaOfficeSubjects
               },
               {
                  path:'programs',
                  component: jieVpaaOfficePrograms
               },
               {
                  path:'rooms',
                  component: jieVpaaOfficeRooms
               },
               {
                  path:'faculties',
                  component: jieVpaaOfficeFaculties
               },
               {
                  path:'students',
                  component: jieVpaaOfficeStudents
               },
            ]
         }
      ]
   },
   {
      path:'/api',
      component: api
   },
   // {
   //    path:'/signup',
   //    name: 'signup',
   //    component: jieSignup
   // },
   // {
   //    path:'/login',
   //    component: jieLogin
   // },

   {
      path:'/PleaseClickMe',
      component: PleaseClickMe
   },

   {  
      path: "*",
      component: jie404,
      meta: {
         title: 'Home Page - Example App',
         metaTags: [
           {
             name: 'description',
             content: 'The home page of our example app.'
           },
           {
             property: 'og:description',
             content: 'The home page of our example app.'
           }
         ]
       }
   }
]