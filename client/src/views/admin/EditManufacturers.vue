<template>
  <manufacturer-form
    @save-manufacturer="addManufacturer"
    :model="model"
    :isEditing="true"
  >
  </manufacturer-form>
</template>

<script>
import ManufacturerForm from "@/components/ManufacturerForm";
export default {
  components: {
    ManufacturerForm
  },
  computed: {
    model() {
      const manufacturer = this.$store.getters.manufacturerById(
        this.$route.params["id"]
      );
      return { ...manufacturer };
    }
  },
  methods: {
    addManufacturer(newManufacturer) {
      this.$store.dispatch("updateManufacturer", {
        manufacturer: newManufacturer
      });
    }
  },
  created() {
    this.$store.dispatch("manufacturerById", {
      manufacturerId: this.$route.params["id"]
    });
  }
};
</script>

<style lang="scss" scoped></style>
