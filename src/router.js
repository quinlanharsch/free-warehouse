import Vue from 'vue'
import Router from 'vue-router'
import ItemListPage from '@/components/item-list-page.vue'
import StorageUnitPage from '@/components/storage-unit-page.vue'
import StorageUnitSinglePage from '@/components/storage-unit-single-page.vue'
import NewStorageUnitPage from '@/components/new-storage-unit-page.vue'
import HomePage from '@/components/home-page.vue'

Vue.use(Router)

export default new Router({
  base: '/free-warehouse/',
  routes: [
    { path: '/', component: HomePage },
    { path: '/i', component: ItemListPage },
    { path: '/u', component: StorageUnitPage },
    { path: '/u/:suid', component: StorageUnitSinglePage },
    { path: '/u+', component: NewStorageUnitPage }
  ]
})
