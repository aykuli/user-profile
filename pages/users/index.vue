<template>
  <div>
    <h1>Users</h1>
    <ul v-for="user of users" :key="user.id">
      <li>
        <a href="#" @click.prevent="openUser(user)">{{ user.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.name);
    }
  },
  async fetch({ store }) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetch');
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users'];
    }
  }
}
// todo: linter configure
</script>
