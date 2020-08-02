<template>
  <main class="form-container">
    <form @submit.prevent="onSubmit()" class="contact-form">
      <div class="contact-form__group">
        <span id="firstname-desc-en" v-if="isLocaleEN" class="hidden">Please enter your first name.</span>
        <span id="firstname-desc-de" v-else class="hidden">Bitte geben Sie Ihren Vornamen ein.</span>
        <label for="firstname">{{ $t('page.contact.form.firstName') }}*</label>
        <input
          id="firstname"
          v-model.trim="$v.form.firstName.$model"
          :placeholder="$t('page.contact.placeholder.firstName')"
          name="contact-firstname"
          class="contact-form__control"
          type="text"
          aria-describedby="firstname-desc-en firstname-desc-de"
        >
        <div v-if="$v.form.firstName.$dirty && !$v.form.firstName.required" class="error">
          {{ $t('page.contact.errorMessage.required') }}
        </div>
      </div>
      <div class="contact-form__group">
        <span id="lastname-desc-en" v-if="isLocaleEN" class="hidden">Please enter your last name.</span>
        <span id="lastname-desc-de" v-else class="hidden">Bitte geben Sie Ihren Nachname ein.</span>
        <label for="lastname">{{ $t('page.contact.form.lastName') }}*</label>
        <input
          id="lastname"
          v-model.trim="$v.form.lastName.$model"
          :placeholder=" $t('page.contact.placeholder.lastName')"
          name="contact-lastname"
          class="contact-form__control"
          type="text"
          aria-describedby="lastname-desc-en lastname-desc-de"
        >
        <div v-if="$v.form.lastName.$dirty && !$v.form.lastName.required" class="error">
          {{ $t('page.contact.errorMessage.required') }}
        </div>
      </div>
      <div class="contact-form__group">
        <span id="mail-desc-en" v-if="isLocaleEN" class="hidden">Please enter your email address.</span>
        <span id="mail-desc-de" v-else class="hidden">Bitte geben Sie Ihre Emailadresse ein.</span>
        <label for="mail">{{ $t('page.contact.form.mail') }}*</label>
        <input
          id="mail"
          v-model.trim="$v.form.mail.$model"
          :placeholder="$t('page.contact.placeholder.mail')"
          name="contact-mail"
          class="contact-form__control"
          type="email"
          aria-describedby="mail-desc-en mail-desc-de"
        >
        <div v-if="$v.form.mail.$dirty && !$v.form.mail.required" class="error">
          {{ $t('page.contact.errorMessage.required') }}
        </div>
        <div v-if="$v.form.mail.$dirty && !$v.form.mail.email" class="error">
          {{ $t('page.contact.errorMessage.mail') }}
        </div>
      </div>
      <div class="contact-form__group">
        <span id="message-desc-en" v-if="isLocaleEN" class="hidden">Please enter the message.</span>
        <span id="message-desc-de" v-else class="hidden">Bitte geben Sie Ihre Nachricht ein.</span>
        <label for="message">{{ $t('page.contact.form.message') }}*</label>
        <textarea
          id="message"
          v-model.trim="$v.form.message.$model"
          :placeholder=" $t('page.contact.placeholder.message')"
          name="contact-message"
          class="contact-form__control"
          aria-describedby="message-desc-en message-desc-de"
        />
        <div v-if="$v.form.message.$dirty && !$v.form.message.required" class="error">
          {{ $t('page.contact.errorMessage.required') }}
        </div>
      </div>
      <div class="contact-form__group">
        <p class="form__hint">
          {{ $t('page.contact.hint') }}
        </p>
        <span id="submit-desc-en" v-if="isLocaleEN" class="hidden">Submit form.</span>
        <span id="submit-desc-de" v-else class="hidden">Formular senden.</span>
        <button :disabled="isDisabled" type="submit" class="button button--primary" aria-describedby="submit-desc-en submit-desc-de">
          {{ $t('page.contact.form.submit') }}
        </button>
      </div>
      <transition name="fade">
        <div v-if="isSubmitStatusOK" class="snackbar snackbar--success">
          <img class="snackbar__icon" src="@/assets/media/checkmark-circle.svg" alt="Check arrow inside circle">
          {{ $t('page.contact.submitMessage.success') }}
        </div>
        <div v-if="isSubmitStatusERROR" class="snackbar snackbar--error">
          <img class="snackbar__icon" src="@/assets/media/cross-circle.svg" alt="Cross inside circle">
          {{ $t('page.contact.submitMessage.error') }}
        </div>
      </transition>
    </form>
  </main>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

const formState = {
  NONE: '',
  OK: 'OK',
  ERROR: 'ERROR'
}

export default {
  name: 'Contact',
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        mail: '',
        message: '',
        status: formState.NONE
      }
    };
  },
  computed: {
    isLocaleEN () {
      return this.$i18n.locale === 'en';
    },
    isDisabled () {
      return this.$v.$invalid;
    },
    isSubmitStatusOK () {
      return this.form.status === formState.OK;
    },
    isSubmitStatusERROR () {
      return this.form.status === formState.ERROR;
    }
  },
  validations: {
    form: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      mail: {
        required,
        email
      },
      message: {
        required
      }
    }
  },
  methods: {
    resetForm () {
      this.$v.form.$reset();
      this.form.lastName = '';
      this.form.firstName = '';
      this.form.mail = '';
      this.form.message = '';
      this.form.status = '';
    },
    setStatus (status) {
      this.form.status = status;
    },
    onSubmit () {
      new Promise((resolve, reject) => {
        // mock submit logic here
        this.setStatus(formState.OK);
        console.log(this.form);
        setTimeout(() => {
          resolve()
        }, 4000);
      }).then(() => this.resetForm())
        .catch((e) => {
          this.setStatus(formState.ERROR);
          console.error(e);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/styles/mixins';
  @import 'assets/styles/colors';

  main {
    width: 100%;
    height: 100%;
  }

  .hidden {
    visibility: hidden;
  }

  .form-container {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: $content-margin-md 0;
  }

  .contact-form {
    padding: $content-padding-lg 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 1 75%;
    align-items: center;
  }
  .form__hint {
    flex: 1 1 auto;
    align-self: flex-start;
    color: $grey;
    font-size: .75rem;
  }

  .contact-form__group {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: $content-margin-lg 0;
    width: 100%;
      &>input {
        width: inherit;
      }
    textarea {
      resize: none;
      width: 100%;
      height: 10rem;
      border-color: $darkcyan;
    }
  }

  .contact-form__control{
    padding: $content-padding-sm;
    color: $darkcyan;
    &::placeholder {
      color: $grey;
      font-size: .75rem;
    }
  }

  .error {
    margin: $content-margin-sm;
    font-size: 0.6rem;
    color: $red;
  }
  .snackbar {
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 0.75rem;
    padding: $content-padding-lg;
    border-radius: $content-border-radius;
    color: $white;
  }
  .snackbar__icon {
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
  }
  .snackbar--success {
    background: $lightgreen;
  }
  .snackbar--error {
    background: $red;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  @include phone {
    .contact-form {
      flex: 0 1 50%;
    }
  }

  @include tablet {
    .contact-form {
      flex: 0 1 50%;
    }
  }

  @include desktop{
    .contact-form {
      flex: 0 1 50%;
    }
  }

  @include desktop-l {
    .contact-form {
      flex: 0 1 34%;
    }
  }
  @include desktop-xl {
    .contact-form {
      flex: 0 1 25%;
    }
  }

</style>
