<template>
  <div class="blog-teaser">
    <header class="blog-teaser__img">
      <img :src="selectedImage" :alt="blogPost.img.alt">
    </header>
    <hr>
    <main class="blog-teaser__content">
      <h2 v-if="isLocaleEN" class="blog-teaser__title">
        {{ blogPost.en.title | shorten }}
      </h2>
      <h2 v-else class="blog-teaser__title">
        {{ blogPost.de.title | shorten }}
      </h2>
      <p v-if="isLocaleEN" class="blog-teaser__preview-text">
        {{ blogPost.en.text | shorten }}
      </p>
      <p v-else class="blog-teaser__preview-text">
        {{ blogPost.de.text | shorten }}
      </p>
      <footer class="blog-teaser__footer">
        <div class="details">
          <div class="details__author">
            {{ blogPost.author | shorten }}
          </div>
          <div class="details__date">
            {{ blogPost.date | formatDate }}
          </div>
        </div>
        <div class="blog-teaser__footer__link">
          <nuxt-link :to="'/blog/'+blogPost.id" class="link link--button">
            {{ $t('page.blog.readMore') }}
          </nuxt-link>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BlogPostTeaser',
  props: {
    blogPost: {
      type: Object,
      required: true,
      id: {
        type: Number,
        required: true
      },
      img: {
        alt: {
          type: String,
          required: true
        },
        url: {
          type: String,
          required: true
        }
      },
      en: {
        title: {
          type: String,
          required: true
        },
        text: {
          type: String,
          required: true
        }
      },
      de: {
        title: {
          type: String,
          required: true
        },
        text: {
          type: String,
          required: true
        }
      },
      author: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      }
    }
  },
  computed: {
    isLocaleEN () {
      return this.$i18n.locale === 'en';
    },
    selectedImage () {
      return require(`@/assets/media/blogImages/${this.blogPost.img.url}`);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/colors';
  @import 'assets/styles/mixins';

  hr {
    @include hr-gradient-vertical($darkcyan);
  }

  .blog-teaser {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 15rem;
    @include tile;
    @include tile--inverted;
    @include tile--box-shadow;
  }

  .blog-teaser__img {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 33%;
    max-width: 33%;
    &>img {
      width: 100%;
      height: auto;
    }
  }

  .blog-teaser__content{
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: .75rem;
  }

  .blog-teaser__title{
    flex: 1 1 0;
    text-align: center;
    color: $darkcyan;
    min-height: 4rem;
    max-height: 4rem;
  }

  .blog-teaser__preview-text{
    flex: 1 1 0;
    color: $grey;
  }

  .blog-teaser__footer {
    flex: 1 1 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: $grey;
    font-size: .6rem;
    .details {
      &>div+div:before {
        content: '\00A0 \2022';
      }
    }
  }
  .details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .details__author, .details__date {
    display: inline-block;
    font-style: italic;
  }
  .blog-teaser__footer__link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @include phone {
    .blog-teaser{
      flex: 1 1 40%;
      flex-direction: column;
      height: inherit;
      margin: $content-margin-md;
    }
    .blog-teaser__img {
      &>img {
        width: auto;
        height: 6rem;
      }
    }
    hr {
      @include hr-gradient-horizontal($darkcyan);
      width: 100%;
    }
  }

  @include desktop-l {
    .blog-teaser{
      flex: 0 1 30%;
    }
  }

</style>
