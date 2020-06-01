<template>
  <div class="productInfo">
    <el-form
      class="form"
      ref="form"
      label-width="180px"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-form-item label="名字：">
        <el-input v-model="modelData.name"></el-input>
      </el-form-item>

      <el-form-item label="价格：">
        <el-input v-model="modelData.price"></el-input>
      </el-form-item>

      <el-form-item label="生产厂家：">
        <el-select
          v-model="modelData.manufacturer.name"
          clearable
          placeholder="请选择制造商"
        >
          <el-option
            v-for="manufacturer in manufacturers"
            :key="manufacturer._id"
            :label="manufacturer.name"
            :value="manufacturer.name"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="图片：">
        <el-input v-model="modelData.image"></el-input>
      </el-form-item>
      <el-form-item label="描述：">
        <el-input type="textarea" v-model="modelData.description"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit"
          >更新商品</el-button
        >
        <el-button v-else @click="onSubmit">添加商品</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelData: { manufacturer: { name: "" } }
    };
  },
  props: ["model", "manufacturers", "isEditing"],
  methods: {
    onSubmit() {
      const manufacturer = this.manufacturers.find(
        item => item.name === this.modelData.manufacturer.name
      );
      this.modelData.manufacturer = manufacturer;
      this.$emit("save-product", this.modelData);
    }
  },
  created() {
    console.log(this.model);
    const product = this.model;
    this.modelData = { ...product, manufacturer: { ...product.manufacturer } };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    model(val, oldVal) {
      this.modelData = val;
    }
  },
  computed: {
    loading() {
      return this.$store.state.showLoader;
    }
  }
};
</script>

<style lang="scss" scoped>
.productInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 60px;
}
.el-select {
  width: 320px;
}
</style>
