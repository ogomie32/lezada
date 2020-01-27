<template>
    <tbody style="font-size: 15px;">
        <tr class="justify-content-between" v-for="(cartItem, index) in cartArray" :key="cartItem.item.id">
            <td>
                <div class="product-row text-muted">
                    <div><img :src="cartItem.item.image" alt="" width="100px"></div> 
                    <div class=" text-center pl-4">
                        <div>{{ cartItem.item.name }}</div>
                        <div>{{ cartItem.item.color }}</div>
                    </div>
                </div>
            </td>
            <td >&dollar;{{ cartItem.item.price }}</td>
            <td> 
                <div>
                    <i class="material-icons cursor pr-5"  @click="decrement(cartItem)">remove</i> {{ cartItem.quantity }} <i class="material-icons cursor pl-5" @click="increment(cartItem)">add</i>
                    <hr>
                </div>
            </td>
            <td>&dollar;{{ cartItem.item.price * cartItem.quantity }}</td>
            <td><i class="material-icons text-muted clearBtn" @click="remove_the_cart(index)">clear</i></td>
        </tr>
    </tbody>
</template>

<script>
export default {
    // data() {
    //     return {
    //         cart: []
    //     }
    // },
    computed: {
        cartArray() {
            
            return this.$store.getters.cart;
        },
    },
    methods: {
        // cancelBtn(index) {
        //     this.cartArray.splice(index,1)
        // },
        remove_the_cart(index) {
            this.$store.commit("REMOVE_CART", index);
        },
        increment(cartItem) {
            // cartItem.quantity++;
            this.$store.commit("INCREMENT_CART", cartItem.item);
        },
        decrement(cartItem) {
            if(cartItem.quantity <= 1){
                return;
            }
            this.$store.commit("DECREMENT_CART", cartItem.item);
        },
    }
}
</script>

<style scoped>
    .product-row{
        display: inline-flex;
    }
    .clearBtn {
        border: 1px solid #ccc;
        padding: 3px;
        cursor: pointer;
    }
    i{
        font-size: 14px;
    }
    .cursor{
        cursor: pointer;
    }
</style>