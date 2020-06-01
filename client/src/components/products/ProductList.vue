<template>
  <div>
    <div class="products">
      <div class="container">商品页面</div>
      <!-- <template v-for="product in products"> -->
      <product-item :products="products"></product-item>
      <!-- </template> -->
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
export default {
  name: "product-list",
  components: {
    ProductItem
  },
  computed: {
    products() {
      // return this.$store.state.products;
      return this.$store.getters.allProducts;
    }
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("allProducts");
    }
  }
};
</script>

<style lang="scss" scoped></style>
