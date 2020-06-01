<template>
  <div class="manufacturerInfo">
    <el-form
      class="form"
      ref="form"
      label-width="180px"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-form-item label="名字">
        <el-input v-model="manufacturerData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit"
          >更新生厂商</el-button
        >
        <el-button v-else @click="onSubmit">添加生产商</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      manufacturerData: { name: "" }
    };
  },
  props: ["model", "isEditing"],
  created() {
    this.manufacturerData = this.model;
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    model(val, oldVal) {
      this.manufacturerData = val;
    }
  },
  computed: {
    loading() {
      return this.$store.state.showLoader;
    }
  },
  methods: {
    onSubmit() {
      this.$emit("save-manufacturer", this.manufacturerData);
    }
  }
};
</script>

<style lang="scss" scoped>
.manufacturerInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 50px;
}
</style>
