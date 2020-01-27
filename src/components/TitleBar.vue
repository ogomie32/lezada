<template>
    <div class="container-fluid">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light py-2">
            <router-link class="navbar-brand fs-30" to="/">LEZADA</router-link>

            <div class="collapse navbar-collapse justify-content-center">
                <ul class="navbar-nav">
                    <li class="nav-item  pl-2">
                        <a class="nav-link" href="#" @click="home">Home <span class="sr-only">(current)</span> <i class="material-icons caret">expand_more</i></a>
                    </li>
                    <li class="nav-item pl-2">
                        <a class="nav-link" href="#">Shop <i class="material-icons caret">expand_more</i></a>
                    </li>
                    <li class="nav-item pl-2">
                        <a class="nav-link" href="#">Element <i class="material-icons caret">expand_more</i></a>
                    </li>
                    <li class="nav-item pl-2">
                        <a class="nav-link" href="#">Pages <i class="material-icons caret">expand_more</i></a>
                    </li>
                    <li class="nav-item pl-2">
                        <a class="nav-link" href="#">Blog <i class="material-icons caret">expand_more</i></a>
                    </li>
                </ul>
            </div>
            <div class="d-flex pr-3" style="cursor: pointer;">
                <div ><i class="material-icons p-2 fs-20" title="Help Menu">search</i></div>
                <div><i class="material-icons p-2 fs-20" title="Setting Menu" @click="login">person_outline</i></div>
                <div><i class="material-icons p-2 fs-20" @click="showSideWish" >favorite_outline</i></div> 
                <div><i class="material-icons p-2 fs-20" @click="showSideCart" >shopping_cart</i></div>
                <!-- <div class="cartBar" v-else></div> -->
            </div>
            <div class="wish-list" v-if="(my_wish.length >= 1)">{{ my_wish.length }}</div>
            <!-- <div class="cart-circle">{{my_cart.length}}</div> -->
            <div class="cart-circle" v-if="(my_cart >= 1)">{{my_cart}}</div>
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        data(){
            return {
                // show: false
                // message:" There is no item in the cart"
            };
        },
        my_cart() {
            return this.$store.getters.cartAmount;
        },
        my_wish(){
            return this.$store.getters.wish;
        }
    },
    methods:{
        gotoCart(){
            this.$router.push({path: "/shoppingcart"});
        },
        
        showSideCart() {
            this.$store.commit('SET_SIDE_CART_OPEN', true);
        },
        showSideWish(){
            this.$store.commit('SET_SIDE_WISH_OPEN', true);
 
        },
        home(){
            this.$router.push({name: 'home'})
        },
        login(){
            this.$router.push({name: 'login'})
        }
    }
}
</script>

<style  scoped>
a:hover{
    color: black;
    text-decoration: underline;
}
.fs-30{
    font-size: 30px;
}
.fs-20{
    font-size: 20px;
}
.navbar{
    background: white;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 1px 1px 0 silver, 0 4px 3px 0px silver;
}
.caret{
    color: #ccc;
    font-size: 18px;
}
.cart-circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: crimson;
    font-size: 12px;
    color: white;
    font-weight: bold;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    margin-right: 10px;
    position: absolute;
    top: 20px;
    right: 23px;
}
.wish-list {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: crimson;
    font-size: 12px;
    color: white;
    font-weight: bold;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    margin-right: 10px;
    position: absolute;
    top: 20px;
    right: 58px;
}
.cartBar {
    width: 50px;
    height: 100%;
    border: 1px solid black;
    position: absolute;
    right: 30px;
    top: 150px;
}
</style>