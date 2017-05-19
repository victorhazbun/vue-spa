<template>
  <h2>{{title}} : {{id}}</h2>
</template>

<script>
export default {
  name: 'recommendedRestaurant',
  mounted() {
    this.id = this.$route.params.id;
  },
  data () {
    return {
      title: 'Recommended Restaurant',
      id: null
    }
  }
}
</script>
