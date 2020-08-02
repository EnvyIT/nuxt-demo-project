<template>
  <main>
    <div class="blog-wrapper">
      <article class="blog-article">
        <div class="blog-article__banner">
          <img :src="selectedImage" :alt="selectedPost.img.alt">
        </div>
        <hr>
        <div class="blog-article__title">
          <h1 v-if="isLocaleEN">
            {{ selectedPost.en.title }}
          </h1>
          <h1 v-else>
            {{ selectedPost.de.title }}
          </h1>
        </div>
        <div class="blog-article-header">
          <div class="blog-article-details">
            {{ selectedPost.author }} - {{ selectedPost.date | formatDate }}
          </div>
        </div>
        <hr>
        <div class="blog-article-content">
          <p v-if="isLocaleEN">
            {{ selectedPost.en.content }}
          </p>
          <p v-else>
            {{ selectedPost.de.content }}
          </p>
        </div>
        <hr>
        <div class="back-button">
          <button @click="navigateBack()" class="button button--primary">
            {{ $t('nav.back') }}
          </button>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import { BlogGetters } from '../../../store/blog'

export default {
  name: 'Index',
  computed: {
    selectedPost () {
      return this.$store.getters[BlogGetters.GET_BLOGS].find(p => p.id === parseInt(this.$route.params.id));
    },
    isLocaleEN () {
      return this.$i18n.locale === 'en';
    },
    selectedImage () {
      return require(`@/assets/media/blogImages/${this.selectedPost.img.url}`) // the module request
    }
  },
  methods: {
    navigateBack () {
      this.$router.push('/blog');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/mixins';
  @import 'assets/styles/colors';

  hr {
    @include hr-gradient-horizontal($darkcyan);
    width: 100%;
  }

  .blog-wrapper {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .blog-article {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: $content-margin-lg;
  }

  .blog-article__banner {
    & > img {
      width: 100%;
      height: auto;
    }
  }

  .blog-article-details {
    font-style: italic;
    font-size: .75rem;
    color: $grey;
  }

  .blog-article-content {
    padding: $content-padding-lg;
    line-height: 1.75rem;
  }

  .blog-article__title {
    text-align: center;
  }

  @include desktop {
    .blog-article {
      width: 80%;
    }
  }

  @include desktop-l {
    .blog-article {
      width: 60%;
    }
  }

  @include desktop-xl {
    .blog-article {
      width: 40%;
    }
  }

</style>
