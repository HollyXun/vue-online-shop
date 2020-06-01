<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <h1>{{ msg }}</h1>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      msg: "后台管理"
    };
  }
};
</script>

<style lang="scss" scoped></style>
