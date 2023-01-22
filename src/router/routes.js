
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/home',
    component: () => import('pages/home.vue'),
    // children: [
    //   { path: '', component: () => import('pages/home.vue') }
    // ]
  },

  // Always leave this as last one,
  // but you can also
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
