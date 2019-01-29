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
  font-family: 'Aleo', serif;
  font-size: 30px;
  color: white;
  border: solid;
  border-width: 0px 0px 0px 4px;
  padding-left: 20px;
}
.txt-description{
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #8E87C0;
}
</style>
