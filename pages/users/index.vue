<template>
  <div>
    <h1>Users</h1>
    <ul v-for="user of users" :key="user.name">
      <li>
        <a href="#" @click.prevent="openUser(user)">{{ user.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [
      { name: 'aynur', age: 33 },
      { name: 'Sasha', age: 35 }
    ]
  }),
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.name);
    }
  }
}
</script>
