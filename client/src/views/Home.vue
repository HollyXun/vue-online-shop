<template>
  <div>
    <div class="title">
      <h1>In Stock</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/products/ProductList";
export default {
  name: "Home",
  components: {
    ProductList
  }
};
</script>
