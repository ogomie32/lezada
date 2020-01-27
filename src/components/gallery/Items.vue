<template>
    <div class="container">
        <div class="my-5">
            <div class="nav navbar justify-content-center fs-40">
                <a class="nav-item nav-link" :class="{'active': category == 'all'}" href="#" @click.prevent="setCategory('all')">New</a>
                <a class="nav-item nav-link" :class="{'active': category == 'popular'}" href="#" @click.prevent="setCategory('popular')">Popular</a>
                <a class="nav-item nav-link" :class="{'active': category == 'sale'}"  href="#" @click.prevent="setCategory('sale')">Sale</a>
            </div>
        </div>
        <div class="row mx-0 gallery-box">
            <template v-for="item in popClicked">
                <app-item :item="item" :key="item.id"></app-item>
            </template>
        </div>
    </div>
</template>

<script>
import Item from './Item.vue';
export default {
    data(){
        return {
            category: 'all'
        }
    },
    components: {
        appItem: Item
    },
    computed: {
        items() {
            return this.$store.getters.items;
        },
        popClicked(){
            if(this.category == 'popular'){
                return this.$store.getters.popularItems;
            }
            if(this.category == 'sale'){
                return this.$store.getters.salesItems;
            }

            return this.$store.getters.items;
            // const newArray = [];
            // this.items.forEach(item => {
            //     if(this.category === 'popular'){
            //          if(item.popular) {
            //             newArray.push(item);
            //          } 
            //     } else if (this.category === 'sale') {
            //          if(item.sale) {
            //             newArray.push(item);
            //          } 
            //     } else  {
            //         newArray.push(item);
            //     }
            // }); 
            // return newArray;
        }
    },
    methods: {
        setCategory(value){
            this.category = value;
        }
    }
   
}
</script>

<style scoped>
.fs-40{
    font-size: 40px;
}
a{
    color: rgb(173, 173, 173);
    line-height: inherit;
}
a.active{
    color: black;
}
a:hover{
    color: black;
}
.gallery-box{
    margin: 0px 50px;
    justify-content: center;
}
</style>