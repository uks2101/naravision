import Vue from 'vue'
import VueRouter from 'vue-router'
import $ from 'jquery'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: () => import('../views/MainView.vue'),
  },
  {
    path: '/mail',
    name: 'MailView',
    component: () => import('../views/solution/mail.vue')
  },
  {
    path: '/mobile-mail',
    name: 'MobileMailView',
    component: () => import('../views/solution/mobile_mail.vue')
  },
  {
    path: '/archive',
    name: 'ArchiveView',
    component: () => import('../views/solution/archive.vue')
  },
  {
    path: '/extension',
    name: 'ExtensionView',
    component: () => import('../views/solution/extension.vue')
  },
  {
    path: '/communications',
    name: 'CommunicationsView',
    component: () => import('../views/solution/communications.vue')
  },
  {
    path: '/cloud',
    name: 'CloudView',
    component: () => import('../views/cloud/cloud.vue')
  },
  {
    path: '/customer',
    name: 'CustomerView',
    component: () => import('../views/customer/customer.vue')
  },
  {
    path: '/news-list/:nPage',
    name: 'NewsListView',
    component: () => import('../views/pr-center/news-list.vue')
  },
  {
    path:'/news-list/news/:idx',
    name: 'NewsView',
    component: () => import('../views/pr-center/view/news.vue')
  },
  {
    path: '/report-list/:nPage',
    name: 'ReportListView',
    component: () => import('../views/pr-center/report-list.vue')
  },
  {
    path: '/report-list/report/:idx',
    name: 'ReportView',
    component: () => import('../views/pr-center/view/report.vue')
  },
  {
    path: '/cs-center',
    name: 'CsCenterView',
    component: () => import('../views/cs/cs-center.vue')
  },
  {
    path: '/introduce',
    name: 'IntroduceView',
    component: () => import('../views/company/introduce.vue')
  },
  {
    path: '/year',
    name: 'YearView',
    component: () => import('../views/company/year.vue')
  },
  {
    path: '/certificate',
    name: 'CertificateView',
    component: () => import('../views/company/certificate.vue')
  },
  {
    path: '/locate',
    name:'LocateView',
    component: () => import('../views/company/locate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  $('html, body').animate({scrollTop: 0}, 0)
  closeDrawer()
  next()
})

const closeDrawer = function() {
  store.commit('app/closeDrawer')
}

export default router
