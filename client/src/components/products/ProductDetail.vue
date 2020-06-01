<template>
  <div class="product-details">
    <div class="product-details-image">
      <img :src="product.image" alt="" class="image" />
    </div>
    <div class="product-details-info">
      <div class="product-details-description">
        <small>{{ product.manufacturer.name }}</small>
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </div>
      <div class="product-details-price-cart">
        <p>{{ product.price }}</p>
        <product-button>{{ product.price }}</product-button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductButton from "./ProductButton";
export default {
  props: ["product"],
  components: {
    ProductButton
  }
};
</script>

<style lang="scss" scoped>
.product-details-image .image {
  width: 100px;
  height: 100px;
}
</style>
