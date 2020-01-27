<template>
    <div class="">
        <div class="row grey mt-3">
            <div class="col-lg-12 col-md-6">
                <div class="pl-5  my-5 text-left">
                    <h1>Shopping Cart</h1>
                    <router-link to="/" exact-active-class="is_active">HOME</router-link>
                    /
                    <router-link to="/shoppingcart" active-class="is_active">SHOPPING CART</router-link> 
                </div>
            </div>
        </div>
        <div class="row cart_box  mt-4">
            <table class="table pl-3 w-100 ">
                <thead>
                    <tr class="text-muted">
                        <th style="width: 25%">PRODUCT</th>
                        <th style="width: 18%">PRICE</th>
                        <th style="width: 17%">QUANTITY</th>
                        <th style="width: 15%">TOTAL</th>
                        <th style="width: 15%">CANCEL</th>
                    </tr>
                </thead>
                <app-cart></app-cart>
            </table>
            <div class="totalBox" >
                <div class="text-center">
                    <h1>cart total</h1>
                    <div class="row py-5">
                        <div class="col-6 pt-2">
                            TOTAL
                        </div>
                        <div class="col-6 fs-40">
                            ${{total}}
                        </div>
                    </div>
                    <button class="btn btn-dark" @click="checkOut">PROCEED TO CHECKOUT</button>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
import Cart from './cart.vue';
export default {
    components: {
        appCart: Cart
    },
    computed: {
        stock_Array() {
            return this.$store.getters.cart;
        },
        total(){
            return this.$store.getters.overallTotal;
        }
    },
    methods: {
        checkOut(){
            this.$router.push({name: 'checkout'});
        }
    }
}
</script>
<style  scoped>
.grey{
    background: rgb(238, 237, 237);
    padding: 100px 0;
}
.cart_box {
    margin-left: 150px;
    margin-right: 150px;
}
.totalBox {
    width: 400px;
    margin-left: 1000px;
    padding: 50px;
    background: rgb(238, 237, 237);
}
button{
    color: white;
    padding: 10px 20px;
    border-radius: 0;
}
.fs-40{
    font-size: 30px;
    /* margin-bottom: 20px; */
    font-weight: bolder;
}
.is_active{
    color: black;
}
a{
    color: rgb(148, 147, 147);
    text-decoration: none;
}
</style>