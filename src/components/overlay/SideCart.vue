<template>
    <div class="cart-overlay" v-if="isSideCartOpened">
        <div class="cart-pop px-2" v-on-clickaway="away">
            <div class="my-5" v-if="cartPopArray.length == 0">
                <h3>There is no item in the cart</h3>
            </div>
            <div v-else>
                <div>
                    <table class="table pl-3 w-100 ">
                        <thead>
                            <tr>
                                <th style="width: 85%">Cart</th>
                                <th style="width: 20%"><i @click="close()"  class="material-icons text-muted del">clear</i></th>
                            </tr>
                        </thead>
                        <app-side-item></app-side-item>
                    </table>
                </div>
                <hr>
                <div>
                    <div class="d-flex justify-content-between px-2 py-4">
                    <b>Total</b>
                    <div><b>&dollar;{{total}}</b></div>
                    </div>
                    <hr>
                    <button class="btn btn-dark text-center my-4" @click="showSideCart()" >VIEW CART</button>
                    <button class="btn btn-dark text-center my-4" @click="checkOut()" >CHECKOUT</button>
                    <div>Free Shipping on All Orders  Over $100</div>
                </div>
            </div>
        </div> 
    </div>
   
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import SideItem from './SideItem.vue';
export default {
     mixins: [ clickaway ],
    components: {
        appSideItem: SideItem
    },
    computed: {
        cartPopArray() {
            
            return this.$store.getters.cart;
        },
        total(){
            return this.$store.getters.overallTotal;
        },
        isSideCartOpened() {
            return this.$store.state.sideCartOpen;
        }
    },
    methods: {
        close(){
            // this.$router.push({name:'home'});
            this.$store.commit('SET_SIDE_CART_OPEN', false);
        },
        showSideCart() {
            this.$store.commit('SET_SIDE_CART_OPEN', false);
            this.$router.push({name: 'shop'});
            
        },
        away() {
            this.$store.commit('SET_SIDE_CART_OPEN', false);
        },
        checkOut(){
            this.$store.commit('SET_SIDE_CART_OPEN', false);
            this.$router.push({name: 'checkout'})
        }
    }
}
</script>
<style  scoped>
    .cart-overlay{
        position: fixed;
        width: 100%;
        z-index: 99999;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.6);
        transition: all .5s ease-in
    }
    .cart-pop {
        width: 400px;
        height: 100%;
        background-color: white;
        opacity: 1;
        position: absolute;
        right: 0;
        animation: slide-in .5s ease;
        
    }
    button{
        color: white;
        padding: 5px 10px;
        border-radius: 0;
        width: 100%;
    }
    button:hover{
        background-color: crimson;
        border:crimson;
    }
    .del{
        cursor: pointer;
        /* animation: slide-out .5s ease; */
    }
    .slide_out{
        animation: slide-out .5s ease-out;
    }
    hr{
        margin: 0;
    }
    @keyframes slide-in {
        0% {transform: translateX(400px);}
        100% {transform: translateX(0);}
    }
    @keyframes slide-out {
        0% {transform: translateX(0);}
        100% {transform: translateX(400px);}
    }
</style>