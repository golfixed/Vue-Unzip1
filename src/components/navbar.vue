<template>
  
  <nav class="nav-div">

  </nav>
</template>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133351645-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-133351645-1');
</script>

<script>
export default {
  name: 'navbar',

}
</script>

<style scoped>
.nav-div{
  background-color: #1B1B38;
  opacity: 93%;
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 999;

  -webkit-box-shadow: 0px 2px 10px -1px black;
  -moz-box-shadow: 0px 2px 10px -1px black;
  box-shadow: 0px 2px 10px -1px black;
}

</style>
