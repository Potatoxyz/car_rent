<template>
  <transition>
    <slot></slot>
  </transition>
</template>
<script>
  export default {
    name: 'FadeAnimation'
  }
</script>
<style scoped lang="scss">
  .v-enter-active {
    animation: enter .5s ease;
  }

  .v-leave-active {
    animation: leave .5s ease;
  }

  @keyframes enter {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes leave {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }

</style>
