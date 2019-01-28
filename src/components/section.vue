<template>
  <div>
    <h2 class="txt-title">
      {{title}}
    </h2>
    <p  class="txt-description">
      {{description}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'section',
  props: ['title', 'description'],
}
</script>

<style>

</style>
