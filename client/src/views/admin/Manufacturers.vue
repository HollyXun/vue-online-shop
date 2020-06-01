<template>
  <div class="manufacturers">
    <el-table class="table" :data="manufacturers">
      <el-table-column prop="name" label="制造商" width="180">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button class="modify" type="text" size="medium"
            ><router-link :to="'/admin/manufacturers/edit/' + scope.row._id"
              >修改</router-link
            ></el-button
          >
          <el-button
            class="remove"
            @click="
              removeManufacturer(scope.row._id),
                deleteRow(scope.$index, products)
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
  data() {
    return {
      model: {}
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
    removeManufacturer(manufacturerId) {
      const res = confirm("是否删除此制造商");

      if (res) {
        this.$store.dispatch("removeManufacturer", {
          manufacturerId
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.manufacturers {
  padding-top: 20px;
  text-align: center;
}
.table {
  margin: 0 auto;
  width: 380px;
}
.el-table .cell {
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.modify {
  color: #0000ff;
}
.delete {
  color: #ff0000;
}
</style>
