<template>
    <tbody style="font-size: 15px;">
        <tr class="justify-content-between" v-for="(wishPop, index) in wishPopArray" :key="wishPop.item.id">
            <td>
                <div class="pop-row">
                    <div><img :src="wishPop.item.image" alt="" width="80px" height="80px"></div> 
                    <div class=" text-center pl-3">
                        <div class="pr-3">{{ wishPop.item.name }}</div>
                         <div class="flex">
                            <div class="fs-14">{{ wishPop.quantity}} x </div>
                            <span class="fs-16">&dollar;{{ wishPop.item.price}}</span>
                        </div>
                        <div class="d-flex pt-2">{{ wishPop.item.color}}</div>
                    </div>  
                </div>
            </td>
            <td><i class="material-icons text-muted del" @click="remove_the_wish(index)">clear</i></td>
        </tr>
    </tbody>
</template>

<script>
export default {
    data() {
        return {
            sideItem: [],
            wishPop: {}
        }
    },
    computed: {
        wishPopArray() {
            
            return this.$store.getters.wish;
        },
    },
    methods: {
        remove_the_wish(index) {
            this.$store.commit("REMOVE_WISH", index);
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