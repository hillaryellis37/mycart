import axios from "axios";


export default {
   getUserCarts: function() {
       return axios.get("api/carts");
   },

   getCart: function(id) {
       return axios.get("/api/carts/" + id);
   },

   getItems: function(cartId) {
       return axios.get("/api/carts/" + cartId);
   },

   deleteItem: function(id) {
       return axios.delete("/api/items/" + id);
   },

   deleteCart: function(id) {
       return axios.delete("api/carts/" + id);
   }

};