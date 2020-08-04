<template>
  <div>
    <v-container fluid>
      <v-card
        class="mx-auto"
        :width="width"
      >
        <v-img
          v-if="state.user"
          :width="width"
          :src="state.user.photo"
          :lazy-src="state.user.lazyPhoto"
          aspect-ratio="1.7"
          contain></v-img>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ state.user.name ? state.user.name : 'There is no user name' }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ state.user.email ? state.user.email : 'There is no user email' }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    width: 400
  }),
  computed: {
    ...mapGetters({
      state: 'getState'
    })
  },
  middleware: ['auth']
}
</script>
