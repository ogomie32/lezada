<template>
    <div class="">
        <div class="row grey mt-3">
            <div class="col-lg-12 col-md-6">
                <div class="pl-5  my-5 text-left">
                    <h1>Wish List</h1>
                    <router-link to="/" exact-active-class="is_active">HOME</router-link>
                    /
                    <router-link to="/wishes" active-class="is_active">WISH LIST</router-link> 
                </div>
            </div>
        </div>
        <div class="row wish_box  mt-4">
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
                <app-wish-list></app-wish-list>
            </table>
        </div>

    </div>
</template>

<script>
import WishList from './WishList.vue';
export default {
    components: {
        appWishList: WishList
    },
    computed: {
        stock_Array() {
            return this.$store.getters.cart;
        },
    }
}
</script>
<style  scoped>
.grey{
    background: rgb(238, 237, 237);
    padding: 100px 0;
}
.wish_box {
    margin-left: 150px;
    margin-right: 150px;
}
.is_active{
    color: black;
}
a{
    color: rgb(148, 147, 147);
    text-decoration: none;
}
</style>