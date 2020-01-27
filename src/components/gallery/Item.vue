<template>
    <div class="col-lg-4 col-md-6 col-sm-6 gallery-col" @mouseenter="hovered = true" @mouseleave="hovered = false">
        <div class="gallery">
            <div class="icon-head" v-show="hovered">
                <div class="pd" title="Add to Wishlist"><i class="material-icons icon" @click="addToWish">favorite_outline</i></div> 
                <div class="pd" title="Compare"><i class="material-icons icon">compress</i></div>
                <div class="pd" title="Quick view"><i class="material-icons icon">search</i></div>
            </div>
            <div v-if="item.discount" class="item-circle">-{{ item.discount }}%</div>
            <div @click="gotoDetails">
                <img :src="item.image" alt="image 1" width="300" height="500" v-if="!hovered">
                <img :src="item.hoverImage" alt="image 1" width="300" height="500" v-else>
            </div>
            <div class="mt-3 mb-5 fs-18">  
                <div class="weight" v-if="!hovered">{{item.name}}</div>
                <div class="red" v-else @click="addToCart"> + Add to cart</div>
                <div class="d-flex">
                    <div class=" pr-2 fs-12" v-if="item.discount"><del>${{item.price}}.00</del></div>
                    <div class="pt-2 fs-14" v-else>${{item.price}}.00</div>
                    <div class=" pt-2 fs-14" v-if="item.discount">${{item.price - Math.round(item.price * item.discount)/ 100}} </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: ['item'],
    data() {
        return {
            hovered: false,
            
        }
    },
    methods: {
        addToCart() {
            this.$store.commit("ADD_TO_CART", {
                product: this.item,
            });
        },
        addToWish(){
            this.$store.commit("ADD_WISH", this.item)
        },
        gotoDetails(){
            this.$router.push({
                path: "/shopitem/"+this.item.id
            });
        }
        // showShopItem(){
        //     this.$router.push({name: 'product'});
        // }
    }
}
</script>

<style scoped>
.fs-12{
    padding-top: 10px;
    font-size: 12px;
    font-weight: bold;
    color: rgb(161, 159, 159);
}
.fs-14{
    font-size: 14px;
    font-weight: bold;
}
.fs-18{
    font-size: 18px;
    line-height: inherit;
}
.weight{
    font-weight: normal;
}
.red {
    color: red;
    cursor: pointer;
}
.gallery{
    margin: 5px;
    padding: 0;
    border: 1px solid #ccc;
    border: none;
    width: 100%;
    justify-content: center;
}
.gallery-col{
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.gallery img{
    width: 350px;
    height: auto;
    padding: 0 5px;
}
.icon-head{
    position: absolute;
    top: 25px;
    right: 25px;
}
.icon{
    background: white;
    color: grey;
    padding: 5px;
    cursor: pointer;
}
.pd{
    padding: 2px 0;
}
.item-circle {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(81, 215, 200, 0.5);
    font-size: 14px;
    color: white;
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    margin-right: 10px;
    position: absolute;
    top: 25px;
    left: 25px;
}
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}
</style>