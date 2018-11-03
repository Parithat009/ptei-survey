import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import Krong from './components/Krong.vue'
import Content from './components/Content'
import Firestore from './components/Firestore'
import Survey from './components/Survey'
import Operator from './components/Operator'
import Adminlogin from './components/Adminlogin'
import Adminhome from './components/Adminhome'
import AdSurveyDesign from './components/AdSurveyDesign'
import AdViewData from './components/AdViewData'
import NewQuestion from './components/NewQuestion'
import Surveydetail from './components/Surveydetail'
import AdViewdetail from './components/AdViewdetail'

import choice from './components/choice'
import picture from './components/picture'
import text from './components/text'
import yesno from './components/yesno'
import satisfaction from './components/satisfaction'
import opinion from './components/opinion'
import expect from './components/expect'
import radio from './components/radio'
import expend from './components/expend'

import viewquestion from './components/Viewquestion'
import view from './components/view'
import showq from './components/showq'
import allview from './components/allview'
import register from './components/register'
import allquestion from './components/allquestion'

import firebase from 'firebase'


Vue.use(Router)

const routes = [
    { path: '/home', component: HelloWorld },
    { path: '/firebase', component: Firestore },
    { path: '/survey', component: Survey },
    { path: '/login', component: Operator },
    { path: '/',component: Krong,
      children:[
        { path: 'new', component: Content}
      ]
    },
    { path: '/adminlogin', component: Adminlogin, meta:{requiresGuest : true} },
    { path: '/adminhome', component: Adminhome, meta:{requiresAuth : true}},
    { path: '/adsurveydesign', component: AdSurveyDesign, meta:{requiresAuth : true}},
    { path: '/adviewdata', component: AdViewData, meta:{requiresAuth : true}},
    { path: '/newquestion', component: NewQuestion, meta:{requiresAuth : true}},
    { path: '/surveydetail/:qid', component: Surveydetail, meta:{requiresAuth : true}},
    { path: '/adviewdetail/:rid', component: AdViewdetail, meta:{requiresAuth : true}},

    { path: '/choice', component: choice, meta:{requiresAuth : true}},
    { path: '/picture', component: picture, meta:{requiresAuth : true}},
    { path: '/text', component: text, meta:{requiresAuth : true}},
    { path: '/yesno', component: yesno, meta:{requiresAuth : true}},
    { path: '/satisfaction', component: satisfaction, meta:{requiresAuth : true}},
    { path: '/opinion', component: opinion, meta:{requiresAuth : true}},
    { path: '/expect', component: expect, meta:{requiresAuth : true}},
    { path: '/radio', component: radio, meta:{requiresAuth : true}},
    { path: '/expend', component: expend, meta:{requiresAuth : true}},

    { path: '/viewquestion/:id', component: viewquestion, meta:{requiresAuth : true}},
    { path: '/view', component: view, meta:{requiresAuth : true}},
    { path: '/showq', component: showq, meta:{requiresAuth : true}},
    { path: '/allview', component: allview, meta:{requiresAuth : true}},
    { path: '/register', component: register, meta:{requiresAuth : true}},
    { path: '/allquestion', component: allquestion, meta:{requiresAuth : true}}
  
  ]

  const router = new Router({
    routes 
  })

  router.beforeEach((to, from, next) => {
    // Check for requiresAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // Check if NO logged user
      if (!firebase.auth().currentUser) {
        // Go to login
        next({
          path: '/adminlogin',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        // Proceed to route
        next();
      }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      // Check if NO logged user
      if (firebase.auth().currentUser) {
        // Go to login
        next({
          path: '/adminlogin',

          query: {
            redirect: to.fullPath
          }
        });
      } else {
        // Proceed to route
        next();
      }
    } else {
      // Proceed to route
      next();
    }
  });

  export default router