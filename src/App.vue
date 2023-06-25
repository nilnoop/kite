<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
html,
body, #app, .container {
  padding: 0;
  margin: 0;
  height: 100%;
}

.container {
  padding-bottom: constant( safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
  padding-bottom: env( safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
}
</style>
