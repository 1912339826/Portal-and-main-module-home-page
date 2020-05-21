<template>
  <div id="app">
    <box></box>
  </div>
</template>

<script>
import box from './pages/box'

export default {
  name: 'App',
  components: {
    box
  }
}
</script>

<style lang="less">
@import url('./assets/less/all');
* {
  margin: 0;
  padding: 0;
  border: 0;
  /* font: inherit; */
  vertical-align: baseline;
  box-sizing: border-box;
}

input,
button,
textarea {
  outline: none;
  border: none;
}

i,
u,
ins,
b,
strong,
s {
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

input::-webkit-input-placeholder {
  color: #bdbdbd;
}

body,
html {
  width: 100vw;
}

button {
  border: none;
}

body,
html {
  background: #e3e9f4;
}

html,
body,
body button {
  /* font-size: 16px;
  font-family: "微软雅黑, Helvetica"; */
}

input,
button,
select,
textarea {
  outline: none;
  border: none;
}

ul,
li,
ol {
  list-style: none;
}

a,
input,
button {
  text-decoration: none;
  outline: none;
}

img {
  display: block;
}
#app {
}
</style>
