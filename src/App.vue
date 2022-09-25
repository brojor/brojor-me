<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <h1>Welcome to <span>brojor.me</span></h1>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #181818;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
h1 {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
}
h1 span {
  color: #10b981;
}
</style>
