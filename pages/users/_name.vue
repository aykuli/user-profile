<template>
  <h2>
    User {{$route.params.name}}
  </h2>
</template>

<script>
export default {
  validate({ params }) {
    return ['aynur', 'Sasha'].includes(params.name);
  }
}
</script>
