<template>
  <v-app>
    <Navbar />

    <v-footer
      :absolute="false"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar
  }
}
</script>
