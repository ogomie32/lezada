import Vue from 'vue';
import Vuex from 'vuex';
import items from '../components/data/items';

Vue.use(Vuex);

const state = {
    items,
    cart: [
        // {
        //     item: {id:1, hoverImage: "src/assets/imgs/img-10.jpg", image:"src/assets/imgs/img-8.jpg", name: "Grey Tool", price: 200, discount: 25, qty: 1, color: "black"},
        //     quantity: 6,
        //     subTotal: null
        // },
        // {
        //     item: {id:9, hoverImage: "src/assets/imgs/img-9.jpg", image:"src/assets/imgs/img-9.jpg", name: "Green Coutch", price: 100, popular: true, discount: 25, qty: 1, color: "black"},
        //     quantity: 1,
        // }
    ],
    wish: [],
    sideCartOpen: false,
    sideWishOpen: false,
};
const getters = {
    items: state => {
        return state.items;
    },
    popularItems: state =>{
        let newArray = [];
        state.items.forEach(item => {
            if(item.popular) {
                newArray.push(item);
            }
        }); 

        return newArray;
    },
    salesItems: state =>{
        let newArray = [];
        state.items.forEach(item => {
            if(item.sale) {
                newArray.push(item);
            }
        }); 

        return newArray;
    },
    cart: state => {
        return state.cart;
    },
    cartAmount: state => {
        return state.cart.length;
    },
    overallTotal(state){
        let total = 0;

        state.cart.forEach(cartItem => {
            total = (cartItem.item.price * cartItem.quantity) + total;
        });

        return total;
    },
    wish: state => {
        return state.wish;
    },
    info_1: state => {
        return state.items.description;
    },
    cat_1: state => {
        return state.items.data;
    }
};

const mutations = {
    'ADD_TO_CART' (state, payload){

        let product = payload.product;
        let quantity = payload.quantity || 1;

        let inCart = false;

        state.cart.forEach((cartI) => {

            if(cartI.item.id == product.id){
                inCart = true;
                cartI.quantity += quantity;
            }
        });
      
        if(!inCart){
            let cartItem = {
                item: product,
                quantity: quantity
            };
    
            state.cart.push(cartItem);
        }
    },
    'REMOVE_WISH' (state, index){
        state.wish.splice(index,1)
    },
    'REMOVE_CART' (state, index){
        state.cart.splice(index,1)
    },

    'INCREMENT_WISH' (state, product){

        state.wish.forEach((wishI) => {

            if(wishI.item.id == product.id){
                wishI.quantity++;
            }
            
        });
    },
    'INCREMENT_CART' (state, product){

        state.cart.forEach((cartI) => {

            if(cartI.item.id == product.id){
                cartI.quantity++;
            }
            
        });
    },
    incre_product: (state, payload) => {
        state.items.forEach((q => {
            if(q.name == payload.name){
                q.qty++;
            }
        }))

    },
    decre_product: (state, payload) => {
        state.items.forEach((q => {
            if(q.name == payload.name){
                q.qty--;
            }
        }))
    },

    'DECREMENT_WISH' (state, product){

        state.wish.forEach((wishI) => {

            if(wishI.item.id == product.id){
                wishI.quantity--;
            }
        });
    },
    'DECREMENT_CART' (state, product){

        state.cart.forEach((cartI) => {

            if(cartI.item.id == product.id){
                cartI.quantity--;
            }
            // if(cartI.quantity <= 0) {
            //     const i = state.cart.indexOf(product);
            //     state.cart.splice(i,1)
            // }
        });
    },
    'SET_SIDE_CART_OPEN'(state, product){
        state.sideCartOpen = product;
    },
    'SET_SIDE_WISH_OPEN'(state, product){
        console.log(product);
        state.sideWishOpen = product;
    },
    'ADD_WISH'(state, product){
        state.wish.forEach(wishI => {
            if(wishI.item.id == product.id){
                wishI.quantity ++;
            }
        });
        let wishItem = {
            item: product,
            quantity: 1
        }
        state.wish.push(wishItem);
    }
};

export default new Vuex.Store({
    state,
    getters,
    mutations
});