<template>
  <div>
    <h2 class="txt-title">{{title}}</h2>
    <p  class="txt-description">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'textdiv',
  props: ['title', 'description']
}
</script>

<style scoped>
.txt-title{
  font-family: 'Kanit', sans-serif;
  font-size: 30px;
  color: white;
}
.txt-description{
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  color: #8E87C0;
}
</style>
