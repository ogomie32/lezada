<template>
    <div class="wish-overlay" v-if="isSideWishOpened">
        <div class="wish-pop px-2" v-on-clickaway="away">
            <div class="my-5" v-if="wishPopArray.length == 0">
                <h3>There is no item in the wishlist</h3>
            </div>
            <div v-else>
                <div>
                    <table class="table pl-3 w-100 ">
                        <thead>
                            <tr>
                                <th style="width: 85%">Wishlist</th>
                                <th style="width: 20%"><i @click="close()"  class="material-icons text-muted del">clear</i></th>
                            </tr>
                        </thead>
                        <app-side-wish-item></app-side-wish-item>
                    </table>
                </div>
                <button class="btn btn-dark text-center my-4" @click="showSideWish()" >VIEW WISHLIST</button>
            </div>
            
        </div> 
    </div>
   
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import SideWishItem from './SideWishItem.vue';
export default {
     mixins: [ clickaway ],
    components: {
        appSideWishItem: SideWishItem
    },
    computed: {
        wishPopArray() {
            
            return this.$store.getters.wish;
        },
        isSideWishOpened() {
            return this.$store.state.sideWishOpen;
        }
    },
    // watch: {
    //     isSideWishOpened(){

    //     },
    //     boy(newValue, oldValue){
    //         console.log(newValue, 'new value');
    //         console.log(oldValue, 'old value');
    //     }
    // },
    methods: {
        close(){
            // this.$router.push({name:'home'});
            this.$store.commit('SET_SIDE_WISH_OPEN', false);
        },
        showSideWish() {
            this.$store.commit('SET_SIDE_WISH_OPEN', false);
            this.$router.push({name: 'wish'});
            
        },
        away() {
            this.$store.commit('SET_SIDE_WISH_OPEN', false);
        }
    }
}
</script>
<style  scoped>
    .wish-overlay{
        position: fixed;
        width: 100%;
        z-index: 99999;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.6);
        transition: all .5s ease-in
    }
    .wish-pop {
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
    }
    .slide_out{
        animation: slide-out .5s ease-out;
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