<template>
  <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers"
  ></product-form>
</template>

<script>
import ProductForm from "@/components/products/ProductForm";
export default {
  data() {
    return {
      model: { manufacturer: { name: "", _id: "" } }
    };
  },
  created() {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    }
  },
  methods: {
    addProduct(model) {
      this.$store.dispatch("addProduct", {
        product: model
      });
    }
  },
  components: {
    ProductForm
  }
};
</script>

<style lang="scss" scoped></style>
