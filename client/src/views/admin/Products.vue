<template>
  <div class="products">
    <el-table class="table" :data="products">
      <el-table-column prop="name" label="名字" width="180"></el-table-column>

      <el-table-column prop="price" label="价格" width="180"></el-table-column>

      <el-table-column
        prop="manufacturer.name"
        label="生产厂家"
        width="180"
      ></el-table-column>

      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button class="modify" type="text" size="medium"
            ><router-link :to="'/admin/edit/' + scope.row._id"
              >修改</router-link
            ></el-button
          >
          <el-button
            class="remove"
            @click="
              removeProduct(scope.row._id), deleteRow(scope.$index, products)
            "
            type="text"
            size="medium"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {};
  },
  computed: {
    products() {
      // return this.$store.state.products[0];
      return this.$store.getters.allProducts;
    }
  },
  methods: {
    removeProduct(productId) {
      const res = confirm("是否删除此商品");

      if (res) {
        this.$store.dispatch("removeProduct", {
          productId
        });
      }
    }
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  mounted() {
    console.log(this.products);
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
  width: 740px;
}
.el-table .cell {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.modify {
  color: #0000ff;
}
.remove {
  color: #ff0000;
}
</style>
