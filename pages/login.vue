<template>
  <section class="page__login">
    <v-alert
      v-if="!state.isGettingResponse"
      outlined
      :type="state.notLoggedMessage ? 'error' : 'success'"
      text
    >
      {{ state.notLoggedMessage ?  state.notLoggedMessage : 'Login to continue' }}
    </v-alert>

     <v-alert
      v-if="state.isGettingResponse"
      outlined
      type= 'warning'
      text
    >
      Waiting response from server
    </v-alert>

    <v-form
      @submit.prevent="onSubmit"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        :disabled="state.isGettingResponse"
        placeholder="a@b.ru"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
        :disabled="state.isGettingResponse"
        placeholder="123password"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid || state.isGettingResponse"
        color="success"
        class="mr-4"
        type="submit"
        width="100"
      >
        <v-progress-circular
          v-if="state.isGettingResponse"
          :width="3"
          color="green"
          indeterminate
        ></v-progress-circular>
        {{ state.isGettingResponse ? '' : "Submit" }}
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
        :disabled="state.isGettingResponse"
      >
        Reset Form
      </v-btn>
    </v-form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { MIN_CHAR_PASSWORD } from '../static/constantas';

export default {
  layout: 'empty',
  data: () => ({
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be like a@b.ru',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= MIN_CHAR_PASSWORD) || `Password must be more than ${MIN_CHAR_PASSWORD} characters`,
        v => /\w+\d+/g.test(v) || 'Password must contain numbers and characters'
      ]
    }),
    methods: {
      validate () {
        this.$refs.form.validate();
      },
      reset () {
        this.$refs.form.reset();
      },
      onSubmit() {
        this.$store.dispatch('login', { email: this.email, password: this.password });
      }
    },
    mounted() {
      this.valid = false;
    },
     computed: {
    ...mapGetters({
      state: 'getState'
    })
  }
}
</script>

<style>
.page__login {
  width: 300px;
  margin: auto;
}
</style>
