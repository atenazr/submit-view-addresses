<template>

  <div class="container-fluid">
    <the-header></the-header>

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>

  </div>

  
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  name: 'App',
  components:{
    TheHeader
  }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap'); */
*{
  direction: rtl;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* color:#78b2cf; */
  color: #f7f7f7;
}
body{
  background-color: #f7f7f7;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
