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

<<<<<<< HEAD
<<<<<<< HEAD
   deleteCart: function(id) {
       return axios.delete("api/carts/" + id);
   }
=======
    deleteCart: function(id) {
        return axios.delete("api/carts/" + id);
    }
>>>>>>> 4b4bc159eb7692972412fba9c42e0cca8c69af27
=======
   deleteCart: function(id) {
       return axios.delete("api/carts/" + id);
   }
>>>>>>> 142cd864b776df70a744cea932f708a0e2773adf

};
