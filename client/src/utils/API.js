import axios from "axios";


export default {
    getUserCarts: function() {
        return axios.get("api/carts");
    },

    getCart: function(id) {
        return axios.get("/api/carts/" + id);
    },

    saveProduct: function(productData) {
        return axios.post("/api/products", productData);
    },

    getSavedProducts: function() {
        return axios.get("/api/products");
    },

    deleteProduct: function(id) {
        return axios.delete("api/products/" + id);
    }

};