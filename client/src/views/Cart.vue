<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <!-- <template v-for="product in cart"> -->
    <product-item :products="cart"></product-item>
    <!-- </template> -->
  </div>
</template>

<script>
import ProductItem from "../components/products/ProductItem";
export default {
  name: "Cart",
  data() {
    return {
      msg: "购物车"
    };
  },
  components: {
    ProductItem
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  created() {
    return this.$store.state.cart;
  }
};
</script>

<style lang="scss" scoped>
.product {
  border-bottom: 1px solid #000;
}
.product-image {
  width: 100px;
  height: 100px;
}
</style>
