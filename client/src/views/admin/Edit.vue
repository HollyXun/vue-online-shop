<template>
  <div>
    <div class="title">
      <!-- <h1>This is Admin/Edit/{{ $route.params.id }}</h1> -->
      <h1>This is Admin/Edit</h1>
    </div>
    <product-form
      @save-product="updateProduct"
      :model="model"
      :manufacturers="manufacturers"
      :isEditing="true"
    ></product-form>
  </div>
</template>

<script>
import ProductForm from "@/components/products/ProductForm";
export default {
  name: "Edit",
  data() {
    return {
      msg: "Welcome to the Edit Page"
    };
  },
  components: {
    ProductForm
  },
  created() {
    const { name } = this.model || {};
    if (!name) {
      this.$store.dispatch("productById", {
        productId: this.$route.params["id"]
      });
    }

    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
    model() {
      const product = this.$store.getters.productById(this.$route.params["id"]);
      const res = { ...product, manufacturer: { ...product.manufacturer } };
      return res;
    }
  },
  methods: {
    updateProduct(newProduct) {
      this.$store.dispatch("updateProduct", {
        product: newProduct
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
