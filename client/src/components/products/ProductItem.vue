<template>
  <div class="products">
    <el-table class="table" :data="products">
      <el-table-column
        prop="name"
        label="产品名称"
        width="180"
      ></el-table-column>

      <el-table-column
        prop="description"
        label="介绍"
        width="250"
      ></el-table-column>

      <el-table-column prop="price" label="价格" width="150"></el-table-column>
      <el-table-column
        prop="manufacturer.name"
        label="生产厂家"
        width="180"
      ></el-table-column>

      <!--
      <el-table-column label="图片" width="200">
        <img :src="image" alt="" class="product-image" />
      </el-table-column>
      -->

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <product-button :id="scope.row._id"></product-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ProductButton from "./ProductButton";
export default {
  name: "product-item",
  data() {
    return {};
  },
  props: ["products"],
  components: {
    ProductButton
  }
};
</script>

<style lang="scss" scoped>
.products {
  padding-top: 10px;
  text-align: center;
}
.table {
  margin: 0 auto;
  width: 960px;
}
.el-table .cell {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.product-image {
  width: 100px;
  height: 100px;
}
</style>
