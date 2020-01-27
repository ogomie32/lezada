<template>
    <tbody style="font-size: 15px;">
        <tr class="justify-content-between" v-for="(wishItem, index) in wishArray" :key="wishItem.item.id">
            <td>
                <div class="product-row text-muted">
                    <div><img :src="wishItem.item.image" alt="" width="100px"></div> 
                    <div class=" text-center pl-4">
                        <div>{{ wishItem.item.name }}</div>
                        <div>{{ wishItem.item.color }}</div>
                    </div>
                </div>
            </td>
            <td >&dollar;{{ wishItem.item.price }}</td>
            <td> 
                <div>
                    <i class="material-icons cursor pr-5"  @click="decrement(wishItem)">remove</i> {{ wishItem.quantity }} <i class="material-icons cursor pl-5" @click="increment(wishItem)">add</i>
                    <hr>
                </div>
            </td>
            <td><button class="btn btn-dark btn-txt-light"></button></td>
            <td><i class="material-icons text-muted clearBtn" @click="remove_the_wishlist(index)">clear</i></td>
        </tr>
    </tbody>
</template>

<script>
export default {
    computed: {
        wishArray() {
            return this.$store.getters.wish;
        },
    },
    methods: {
        remove_the_wishlist(index) {
            this.$store.commit("REMOVE_WISH", index);
        },
        increment(wishItem) {
            // wishItem.quantity++;
            this.$store.commit("INCREMENT_WISH", wishItem.item);
        },
        decrement(wishItem) {
            if(wishItem.quantity <= 1){
                return;
            }
            this.$store.commit("DECREMENT_WISH", wishtem.item);
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