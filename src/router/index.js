import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'Home'
  },
  {
    path: '/about',
    component: AboutView,
    name: 'About'
  },
  {
    path: '/posts',
    component: PostListView,
    name: 'PostList'
  },
  {
    path: '/posts/create',
    component: PostCreateView,
    name: 'PostCreate'
  },
  {
    path: '/posts/:id',
    component: PostDetailView,
    name: 'PostDetail'
  },
  {
    path: '/posts/:id/edit',
    component: PostEditView,
    name: 'PostEdit'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: '',
        component: NestedHomeView,
        name: 'NestedHome'
      },
      {
        path: 'one',
        component: NestedOneView,
        name: 'NestedOne'
      },
      {
        path: 'two',
        component: NestedTwoView,
        name: 'NestedTwo'
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
