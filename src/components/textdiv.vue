<template>
  <div>
    <h2 class="txt-title">{{title}}</h2>
    <h2 class="txt-title2">{{title2}}</h2>
    <p  class="txt-description">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'textdiv',
  props: ['title', 'title2', 'description']
}
</script>

<style scoped>
.txt-title{
  font-family: 'Kanit', sans-serif;
  font-size: 30px;
  color: white;
}
.txt-title2{
  font-family: 'Kanit', sans-serif;
  font-size: 1.5rem;
  color:  #8E87C0;
  margin-bottom: 20px;
}
.txt-description{
  font-family: 'Kanit', sans-serif;
  font-size: 17px;
  color: #8E87C0;
}
@media screen and (max-width:800px) {
  .txt-title, .txt-title2, .txt-description {
    text-align: center;
  }
}
</style>
