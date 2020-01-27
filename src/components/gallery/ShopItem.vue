<template>
    <div >
        <!-- NavBar Box -->
        <div class="productBar">
            <div class="pl-5  my-5 text-left">
                <h1>Shop</h1>
                <router-link to="/" exact-active-class="is_active" >HOME</router-link>
                /
                <router-link to="/shopitem" active-class="is_active">SHOP</router-link> 
            </div>
        </div>
        <!-- Mian Products Page -->
        <div class="product-row">
            <div class="row">
                <!-- Image Column -->
                <div class="col-lg-6 col-md-8 col-sm-3 pr-5">
                    <div class="row">
                        <div class="col-lg-12 col-md-8 img-col">
                            <img class="w-100" :src="'/'+product.image" alt="image" @mousemove="updateCordinates">
                        </div>
                    </div>
                    <!-- Scrolled Image -->
                    <div 
                        style="overflow-x: scroll;" 
                        class="d-flex mt-4"
                    >
                        <!-- <div :style="{ border: productx.image === product.image && '1px solid red' }" v-for="productx in my_items" :key="productx.id">
                             <img :src="'/'+productx.image" :alt="productx.image" width="100px" height="100px" @click="setCurrent(productx.image)" > 
                        </div> -->
                        <div  class="mr-2" v-for="product in my_items" :key="product.id">
                             <img :src="'/'+product.image" :alt="product.image" width="100px" height="100px" @click="setCurrent(product) "> 
                        </div>
                    </div>
                </div>
                <!-- Product Information Column -->
                <div class="col-lg-6 col-md-4 col-sm-3 pl-5">
                    <div class="row text-muted">
                        <div class="col-lg-3 col-md-2 star">
                            <div class=""><i class="material-icons icon">star_border</i></div>
                            <div class=""><i class="material-icons icon">star_border</i></div>
                            <div class=""><i class="material-icons icon">star_border</i></div>
                            <div class=""><i class="material-icons icon">star_border</i></div>
                            <div class=""><i class="material-icons icon">star_border</i></div>
                        </div>
                        <div class="col-lg-6 col-md-4">
                            <div>(3 customer reviews)</div>
                        </div>
                        <div class="col-lg-3 col-md-2 arrow">
                            <div class=""><i class="material-icons icon">arrow_back</i></div>
                            <div class=""><i class="material-icons icon">arrow_forward</i></div>
                        </div>
                    </div>
                    <div class="row py-3">
                        <div class="col-lg-12 col-md-8">
                            <div><h2>{{product.name}}</h2></div>
                            <div class="d-flex" style="font-weight: bold;">
                                <div class=" pr-2 fs-12" v-if="product.discount">${{product.price - Math.round(product.price * product.discount)/ 100}}</div>
                                <div class=" fs-14" v-else>${{product.price}}.00</div>
                            </div>
                            <!-- <div>${{product.price}}</div> -->
                            <div class="pt-5 text-muted txt">
                                {{ product.description}}
                            </div>
                        </div>
                    </div>
                    
                    <div class="" >
                        <div class="size d-flex mb-4">
                            <div class="pt-2"><b>Size:</b></div>
                            <div class="fs-30 text-muted style-item">
                                <div class="mr-5">L</div>
                                <div class="mr-5">M</div>
                                <div class="mr-5">S</div>
                                <div class="mr-5">XS</div>
                            </div>
                        </div>
                        <div class="d-flex mb-4">
                            <div><b>Color:</b></div>
                            <div class="style-item">
                                <div class=" xxx black mr-2" :class="{'bb': color == 'black'}" @click="setColor('black')">
                                    <div class="xx"></div>
                                </div>
                                <div class=" xxx blues mr-2" :class="{'bb': color == 'blue'}" @click="setColor('blue')">
                                    <div class="xx"></div>
                                </div>
                                <div class=" xxx oranges mr-2" :class="{'bb': color == 'orange'}" @click="setColor('orange')">
                                    <div class="xx"></div>
                                </div>
                            </div>
                        </div>
                        <div class="qty d-flex mb-4">
                            <div><b>Quantity:</b></div>
                            <div class="ml-5 sign">
                                <i class="material-icons cursor pr-5" @click="decre(product)">remove</i>{{product.qty}}<i class="material-icons cursor pl-5" @click="incre(product)">add</i>
                                <hr>
                            </div>
                        </div>
                    </div>
                    <div class="pt-3 d-flex mb-5">
                        <button class="btn btn-dark add" 
                        @click="addCart"
                        :disabled="cartClicked"
                        >ADD TO CART</button>
                        <button class=" arrow"><i class="material-icons cursor text-center">compress</i></button>
                    </div>
                    
                    <br>
                    <br>
                    <hr>
                    <div class="row mt-5 mb-3">
                        <div class="col-lg-4 col-md-3">
                            <b>SKU:</b>
                        </div>
                        <div class="col-lg-6 col-md-4 text-muted">
                            12345
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-lg-4 col-md-3">
                            <b>Caterories:</b>
                        </div>
                        <div class="col-lg-6 col-md-4 text-muted">
                            Fashion, Men, Sunglasses
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-lg-4 col-md-3">
                            <b>Tags:</b>
                        </div>
                        <div class="col-lg-6 col-md-4 text-muted">
                            Fashion, Men
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-lg-4 col-md-3">
                            <b>Share on:</b>
                        </div>
                        <div class="col-lg-6 col-md-4 text-muted">
                        
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <hr>
            <div class=" d-flex justify-content-center align-items-center mt-5 fs-25 text-muted">
                <div class="pr-4 i" :class="{'is_active': data == 'description'}" @click.prevent="setData('description')" >Description</div>
                <div class="pr-4 i" :class="{'is_active': data == 'info'}" @click.prevent="setData('info')">Additional information</div>
                <div class="pr-4 i" :class="{'is_active': data == 'review'}" @click.prevent="setData('review')">Reviews (3)</div>
            </div>
            <div class="data text-muted" v-if="data == 'description'">
                {{ product.description }}
            </div>
            <div class="data" v-if="data == 'info'">
                <div class="row mt-1 mb-2">
                    <div class="col-lg-4 col-md-3">
                        <b>SKU: </b>
                    </div>
                    <div class="col-lg-6 col-md-4 text-muted">
                        {{ product.data.sku }}
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-lg-4 col-md-3">
                        <b>Caterories:</b>
                    </div>
                    <div class="col-lg-6 col-md-4 text-muted">
                        {{ product.data.categories }}
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-lg-4 col-md-3">
                        <b>Tags:</b>
                    </div>
                    <div class="col-lg-6 col-md-4 text-muted">
                        {{ product.data.tags }}
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-lg-4 col-md-3">
                        <b>Share on:</b>
                    </div>
                    <div class="col-lg-6 col-md-4 text-muted">
                    
                    </div>
                </div>
            </div>
            <div class="data" v-if="data == 'review'">
                <div class="row text-muted">
                    <div class="col-lg-3 col-md-2 star">
                        <div class=""><i class="material-icons icon">star_border</i></div>
                        <div class=""><i class="material-icons icon">star_border</i></div>
                        <div class=""><i class="material-icons icon">star_border</i></div>
                        <div class=""><i class="material-icons icon">star_border</i></div>
                        <div class=""><i class="material-icons icon">star_border</i></div>
                    </div>
                    <div class="col-lg-6 col-md-4">
                        <div>(3 customer reviews)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

   data(){
       return {
        //    currentImgUrl: '/src/assets/imgs/img-3.jpg',
           border: 'black',
           product: {},
           color: 'black',
           data: 'description',
           x: 0,
           y: 0
       }
   },
   computed: {

        my_cart() {
            return this.$store.getters.cart;
        },
        my_items() {
            return this.$store.getters.items;
        },
        more_data(){
            if(this.data == 'description'){
                return this.$store.getters.info_1;
            }else if(this.data == 'info'){
                return this.$store.getters.cat_1;
            }else{
                this.data = 'review';
            }
        },
        // cartClicked(){
        //     if(product.id == this.product.id && this.my_cart(this.product)){
        //     return;
        //     }
        //     this.product == product;
        // }
        // setImage(){
        //     if(image == this.image){
        //     }
        //     return this.$store.getters.items;
        //     this.image = image
        // }
   },
   methods: {
       setCurrent(product){
           if(product.id == this.product.id){
               return;
           }
           
           this.$router.push({
                path: "/shopitem/"+product.id                                                                                                                                                                                                                                                                                                                                                            
            });
            this.product = product;
       },
       setColor(value){
            this.color = value;
       },                                                                                                                                                                                                                                                                                                                                                 
       showCart() {
            this.$router.push({name: 'shop'});
        },
        setData(value){
            this.data = value;
       }, 
        addCart() {
            console.log(this.color);
            // return;
            
            this.$store.commit("ADD_TO_CART", {
                product: {...this.product, color: this.color, image: '/'+this.product.image},
                quantity: this.product.qty,
            });   
        },                                                                                                                                                                                   
        incre(product){

            this.$store.commit('incre_product', product);
        },
        decre(product){
            if(product.qty <= 1){
                return;
            }
            this.$store.commit('decre_product', product);
        },
        updateCordinates(event){
            this.x = event.clientX;
            this.y = event.clientY;
            console.log(this.x + "/" + this.y);
        }
   },
   created(){
      console.log( this.$route.params);

      let productid = this.$route.params.id;

      this.product = this.my_items.find((product) => product.id == productid);
   }
}
</script>

<style scoped>
.productBar{
    padding: 90px 60px;
    background-color: rgb(233, 231, 231);
}
.product-row{
    margin: 80px 230px;
    position: relative;
}
.star{
    display: flex;
}
.arrow{
    display: flex;
}
.star i{
    font-size: 18px;
}
.sign i{
    font-size: 20px;
}
.txt{
    line-height: 30px;
}
.fs-20{
    font-size: 20px;
}
.fs-25{
    font-size: 25px;
}
.style-item{
    display: flex;
    margin-left: 70px;
}

.xx {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

.xxx {
    height: 31px;
    width: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
}

.xxx:hover {
    border: 1px solid #b2b2b2;
    border-radius: 50%;
}
.bb {
    border: 1px solid #b2b2b2;
    border-radius: 50%;
}

.xxx.blues .xx {
    background-color: blue;
}

.xxx.black .xx {
    background-color: black;
}

.xxx.oranges .xx {
    background-color: orange;
}
button.add{
    border-radius: 0;
    background-color: black;
    padding: 10px 50px;
    margin-right: 30px;
}
button.arrow{
    border-radius: 0;
    background-color: white;
    padding: 10px 10px;
    border: 1px solid #ccc;
    color: #ccc;
}
.shop-img{
    display: flex;
}
.wid{
    width: 120px;
   display: flex;
    cursor: pointer;
    margin-right: 12px;
}
.imgBorder{
    border: 1px solid black;
}
.fs-30{
    font-size: 30px;
}
.i{
    cursor: pointer;
}
a{
    color: rgb(148, 147, 147);
    text-decoration: none;
}
.is_active {
        color: black ;
}
.data{
    padding: 30px 150px;
    height: 0;
}
</style>