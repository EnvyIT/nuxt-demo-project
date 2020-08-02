<template>
  <div class="blog-post-list">
    <blog-post-teaser
      :key="blogPost.id"
      v-for="blogPost in blogPosts"
      :blog-post="blogPost"
    />
  </div>
</template>

<script>
import BlogPostTeaser from './BlogPostTeaser'

export default {
  name: 'BlogPostList',
  components: {
    BlogPostTeaser
  },
  props: {
    blogPosts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/mixins';

  .blog-post-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @include phone{
    .blog-post-list {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: stretch;
      margin: $content-margin-md 0;
    }
  }

</style>
