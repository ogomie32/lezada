<template>
    <tbody style="font-size: 15px;" >
        <tr class="justify-content-between" v-for="(cartPop, index) in cartPopArray" :key="cartPop.item.id" >
            <td >
                <div class="pop-row" @click="itemClicked(cartPop)">
                    <div><img :src="cartPop.item.image" alt="" width="80px" height="80px"></div> 
                    <div class=" text-center pl-3">
                        <div class="pr-3">{{ cartPop.item.name }}</div>
                        <div class="flex">
                            <div class="fs-14">{{ cartPop.quantity}} x </div>
                            <span class="fs-16">&dollar;{{ cartPop.item.price}}</span>
                        </div>
                        <div class="d-flex pt-2">{{ cartPop.item.color}}</div>
                    </div>  
                </div>
            </td>
            <td ><i class="material-icons text-muted del" @click="remove_the_cart(index)">clear</i></td>
        </tr>
    </tbody>
</template>

<script>
export default {
    data() {
        return {
            sideItem: [],
            cartPop: {}
        }
    },
    computed: {
        cartPopArray() {
            
            return this.$store.getters.cart;
        }
    },
    methods: {
        remove_the_cart(index) {
            this.$store.commit("REMOVE_CART", index);
        },
        itemClicked(cartPop) {
            if(cartPop.item.id == this.cartPop.id){
                return;
            }
            this.$router.push({path: '/shopitem/'+cartPop.item.id})
            this.cartPop = cartPop.item;
             this.$store.commit('SET_SIDE_CART_OPEN', false);
        }
    }
}
</script>

<style scoped>
.flex{
    display: flex;
    font-size: 18px;
}
.pop-row{
    display: flex;
    cursor: pointer;
}
.fs-14{
    font-size: 14px;
    padding-top: 1px;
}
.fs-16{
    font-size: 16px;
    padding-left: 5px;
    font-weight: bold;
}
.del{
    cursor: pointer;
    font-size: 14px;
}
</style>