import Vue from 'vue'
import Router from 'vue-router'
import ItemListPage from '@/components/item-list-page.vue'
import StorageUnitPage from '@/components/storage-unit-page.vue'
import HomePage from '@/components/home-page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/', component: HomePage},
    { path: '/i', component: ItemListPage },
    { path: '/u', component: StorageUnitPage }
  ]
})
