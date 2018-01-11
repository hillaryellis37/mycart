import axios from "axios";


export default {
    getUserCarts: function() {
        return axios.get("api/carts");
    },

    getCart: function(id) {
        return axios.get("/api/carts/" + id);
    },

    getItems: function() {
        return axios.get("/api/items");
    },

    getSavedProducts: function() {
        return axios.get("/api/products");
    },

    deleteProduct: function(id) {
        return axios.delete("api/products/" + id);
    }

};