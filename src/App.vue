<template>
  <div>
    <app-title-bar></app-title-bar>
    <router-view></router-view>
    <app-side-cart></app-side-cart>
    <app-side-wish></app-side-wish>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue';
import SideCart from './components/overlay/SideCart.vue';
import SideWish from './components/wish/SideWish.vue';
export default{
  components: {
    appTitleBar: TitleBar,
    appSideCart: SideCart,
    appSideWish: SideWish,
  },
}
</script>

<style>
.fs-40{
    font-size: 40px;
}
</style>
