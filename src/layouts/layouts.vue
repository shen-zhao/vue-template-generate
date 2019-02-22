<template>
  <div class="container">
    <div class="header">
      <span class="logout" @click="logout">登出</span>
    </div>
    <div class="aside">
      <Aside></Aside>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Aside from "./components/aside/index";
import Headers from "./components/header";

export default {
  data() {
    return {
      name: "hahahha"
    };
  },
  name: "layouts",
  components: { Aside, Headers },
  methods: {
    logout() {
      // this.$store.di
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$header-top: 44px;
$aside-left: 200px;

.container {
  width: 100%;
  height: 100%;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: $header-top;
  background-color: #1c286d;
}

.aside {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: $aside-left;
  padding: $header-top 0 20px 0;
  box-sizing: border-box;
  background-color: #1c286d;
  color: #b5c2e0;
  overflow-x: hidden;
  overflow-y: auto;
  font-weight: normal;
  user-select: none;
}

.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: $header-top 0 0 $aside-left;
  padding: 15px;
  background: #fff;
  overflow: auto;
}

.logout {
  position: absolute;
  width: 50px;
  line-height: 30px;
  right: 20px;
  top: 7px;
  background: #8093ff;
  color: #fff;
  text-align: center;
}
</style>
