import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  MANUFACTURER_BY_ID,
  MANUFACTURER_BY_ID_SUCCESS,
  ADD_MANUFACTURER,
  ADD_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER,
  UPDATE_MANUFACTURER_SUCCESS,
  REMOVE_MANUFACTURER,
  REMOVE_MANUFACTURER_SUCCESS
} from "./mutation-types";
import { Message } from "element-ui";
//商品状态变更
export const productMutations = {
  [ALL_PRODUCTS](state) {
    state.showLoader = true;
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    state.showLoader = false;

    const { products } = payload;
    state.products = products;
  },
  [PRODUCT_BY_ID](state) {
    state.showLoader = true;
  },
  [PRODUCT_BY_ID_SUCCESS](state, payload) {
    state.showLoader = false;

    const { product } = payload;
    state.product = product;
  },
  [REMOVE_PRODUCT](state) {
    state.showLoader = true;
  },
  [REMOVE_PRODUCT_SUCCESS](state, payload) {
    state.showLoader = false;

    const { productId } = payload;
    state.products = state.products.filter(
      product => product._id !== productId
    );
  },
  [UPDATE_PRODUCT](state) {
    state.showLoader = true;
  },
  [UPDATE_PRODUCT_SUCCESS](state, payload) {
    state.showLoader = false;

    const { product: newProduct } = payload;
    state.product = newProduct;
    state.products = state.products.map(product => {
      if (product._id === newProduct._id) {
        return newProduct;
      }
      return product;
    });
    state.product = newProduct;
  },
  [ADD_PRODUCT](state) {
    state.showLoader = true;
  },
  [ADD_PRODUCT_SUCCESS](state, payload) {
    state.showLoader = false;

    const { product } = payload;
    state.products = state.products.concat(product);
  }
};

//购物车状态变更
export const cartMutations = {
  [ADD_TO_CART](state, payload) {
    const { product } = payload;
    state.cart.push(product);
    Message({
      message: "恭喜你，成功加入购物车！",
      type: "success"
    });
  },
  [REMOVE_FROM_CART](state, payload) {
    const { productId } = payload;
    state.cart = state.cart.filter(product => product._id !== productId);
    Message({
      message: "恭喜你，成功从购物车移除！",
      type: "success"
    });
  }
};

//制造商状态变更
export const manufacturerMutations = {
  //制造商部分
  [ALL_MANUFACTURERS](state) {
    state.showLoader = true;
  },
  [ALL_MANUFACTURERS_SUCCESS](state, payload) {
    const { manufacturers } = payload;

    state.showLoader = false;
    state.manufacturers = manufacturers;
  },
  [MANUFACTURER_BY_ID](state) {
    state.showLoader = true;
  },
  [MANUFACTURER_BY_ID_SUCCESS](state, payload) {
    const { manufacturer } = payload;

    state.showLoader = false;
    state.manufacturer = manufacturer;
  },
  [REMOVE_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [REMOVE_MANUFACTURER_SUCCESS](state, payload) {
    const { manufacturerId } = payload;

    state.showLoader = false;
    state.manufacturers = state.manufacturers.filter(
      manufacturer => manufacturer._id !== manufacturerId
    );
  },
  [UPDATE_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [UPDATE_MANUFACTURER_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturer: newMnufacturer } = payload;
    state.manufacturers = state.manufacturers.map(manufacturer => {
      if (manufacturer._id === newMnufacturer._id) {
        return newMnufacturer;
      }
      return manufacturer;
    });
    state.manufacturer = newMnufacturer;
  },
  [ADD_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [ADD_MANUFACTURER_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturer } = payload;
    state.manufacturers = state.manufacturers.concat(manufacturer);
  }
};
