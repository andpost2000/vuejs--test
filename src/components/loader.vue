<template>
  <div class="lds-dual-ring" v-bind:style="{width: size + 'px', height: size + 'px'}"></div>
</template>

<script>
  export default {
    props: {
      size: Number
    }
  }
</script>

<style lang="scss" scoped>
.lds-dual-ring {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 65%;
  height: 65%;
  border-radius: 50%;
  border: 6px solid aqua;
  border-color: aqua transparent aqua transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
