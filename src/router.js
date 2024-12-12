import { createMemoryHistory, createRouter } from 'vue-router'

import TopPage from './pages/TopPage.vue'
// 就労支援B型とは
import AboutTypeB from './pages/AboutTypeB.vue'
// 404
import NotFound from './pages/NotFound.vue'
//お問い合わせ
import StaralinkContact from './pages/StaralinkContact.vue'

// staralinkについて
import AboutStaralinkParent from './pages/about_staralink/AboutStaralinkParent.vue'
// 会社概要
import CompanyInfomation from './pages/about_staralink/CompanyInfomation.vue'
// オフィス紹介
import StaralinkOffices from './pages/about_staralink/StaralinkOffices.vue'

// staralinkのB型への取り組み
import StaralinkTypeBParent from './pages/staralink_typeb/StaralinkTypeBParent.vue'
// お仕事事例
import StaralinkJobs from './pages/staralink_typeb/StaralinkJobs.vue'
// サポート体制
import StaralinkSupport from './pages/staralink_typeb/StaralinkSupport.vue'

const routes = [
  { path: '/', component: TopPage },
  { path: '/about-type-b', component: AboutTypeB },
  { path: '/404', component: NotFound },
  { path: '/contact', component: StaralinkContact },
  { path: '/about-staralink', component: AboutStaralinkParent },
  { path: '/about-staralink-company', component: CompanyInfomation },
  { path: '/about-staralink-offices', component: StaralinkOffices },
  { path: '/staralink-type-b', component: StaralinkTypeBParent },
  { path: '/staralink-type-b-jobs', component: StaralinkJobs },
  { path: '/staralink-type-b-support', component: StaralinkSupport },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
