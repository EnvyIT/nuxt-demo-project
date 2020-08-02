<template>
  <main class="blog-container">
    <blog-post-list :blog-posts="loadedBlogPosts" />
  </main>
</template>

<script>
import BlogPostList from '../../components/blog/BlogPostList'
import { BlogGetters } from '../../store/blog'

export default {
  name: 'Blog',
  components: {
    BlogPostList
  },
  computed: {
    loadedBlogPosts () {
      return this.$store.getters[BlogGetters.GET_BLOGS];
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/mixins';

  .blog-container {
    flex: 1;
    margin: $content-margin-md 0;
  }

</style>
