import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";
import Detail from "@/views/Detail.vue";

//Admin components
import Index from "../views/admin/Index";
import New from "../views/admin/New";
import Products from "../views/admin/Products";
import Edit from "../views/admin/Edit";
import Manufacturers from "../views/admin/Manufacturers";
import NewManufacturers from "../views/admin/NewManufacturers";
import EditManufacturers from "../views/admin/EditManufacturers";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",
    component: Index,
    children: [
      {
        path: "new",
        name: "New",
        component: New
      },
      {
        path: "",
        name: "Products",
        component: Products
      },
      {
        path: "edit/:id",
        name: "Edit",
        component: Edit
      },
      {
        path: "manufacturers",
        name: "Manufacturers",
        component: Manufacturers
      },
      {
        path: "manufacturers/new",
        name: "NewManufacturers",
        component: NewManufacturers
      },
      {
        path: "manufacturers/edit/:id",
        name: "EditManufacturers",
        component: EditManufacturers
      }
    ]
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
