<template>
  <v-container fluid>
    <v-navigation-drawer
      :width="width"
      :value="true"
      stateless
    >
      <v-img
        :src="user.photo"
        :lazy-src="user.lazyPhoto"
        aspect-ratio="1.7" contain class="profile__img"></v-img>


      <v-list>
        <v-list-item :key="user.name">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
        </v-list-item>

        <v-divider :inset="inset"></v-divider>

        <v-list-item :key="user.email">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ user.email }}</v-list-item-title>
        </v-list-item>

        <v-divider :inset="inset"></v-divider>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    width: 400,
    user: {
      id: '45',
      name: 'name',
      email: 'email',
      photo: 'https://picsum.photos/id/11/250/250',
      lazyPhoto: 'https://picsum.photos/id/11/60/60'
    }
  })
}
</script>

<style>
.profile__img {
  max-width: 250px;
}
</style>
