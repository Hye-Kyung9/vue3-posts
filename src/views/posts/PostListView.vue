<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :contents="post.content"
          :createdAt="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
import AppCard from '@/components/AppCard.vue';
import PostDetailView from './PostDetailView.vue';

const posts = ref([]);
const router = useRouter();

const fetchPosts = async () => {
  try {
    const { data } = await getPosts();
    posts.value = data;
  } catch (err) {
    console.error(err);
  }
};

fetchPosts();

const goPage = (id) => {
  // router.push(`/posts/${id}`);
  router.push({
    name: 'PostDetail',
    params: {
      id
    }
    // query: {
    //   searchText: 'hello'
    // },
    // hash: '#world!'
  });
};
</script>

<style lang="scss" scoped></style>
