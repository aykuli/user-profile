<template>
  <div>
    <v-app-bar
      :clipped-left="false"
      fixed
      app
      color="lime accent-1"
    >
      <v-spacer />

      <v-btn
        icon
        @click="logout"
        v-if="hasToken"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    miniVariant: false,
  }),
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  }
}
</script>
