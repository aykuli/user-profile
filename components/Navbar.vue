<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      app
      color="lime accent-1"
    >
      <v-list>
        <v-list-item
          :to="'profile'"
          router
          exact
          v-if="!hasToken"
        >
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Profile
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          :to="'login'"
          router
          exact
          v-if="!hasToken"
        >
          <v-list-item-action>
            <v-icon>mdi-door</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Login
            hasToken {{hasToken}}
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="hasToken"
          @click.prevent="logout()"
        >
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Logout
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="false"
      fixed
      app
      color="lime accent-1"
    >
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </div>
</template>

<script
>
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
      this.$router.push('login');
    }
  }
}
</script>
