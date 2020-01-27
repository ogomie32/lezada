<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 col-md-8 sale-txt">
                <a href="src/assets/imgs/cabinet.jpg">
                    <img src="src/assets/imgs/cabinet.jpg" alt="image 1" width="800" height="300">
                </a>
            </div>
        </div>
        <div class="row grey sale-txt fs-18 my-2 text-center">
            <div class="col-lg-1 col-md-1">
                <a href="#">#summer</a>
            </div>
            <div class="col-lg-1 col-md-1">
                <a href="#">#shelf</a>
            </div>
            <div class="col-lg-1 col-md-1">
                <a href="#">#sale</a>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-3"></div>
            <div class="col-lg-6 col-md-8 sale-txt fs-40 text-center ">
                <div>Up To 40% Off Final Sale Items. Caught in the moment! </div>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row my-4 pb-5">
            <div class="col-lg-12 col-md-8 sale-txt" >
                <button @click="shopClicked" >SHOP NOW</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        shopClicked() {
            this.$router.push({path: "/shopitem/1"});
        }
    }
}
</script>

<style scoped>
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
.grey{
    color: rgb(102, 99, 99);
}
.fs-18{
    font-size: 18px;
}
.fs-40{
    font-size: 40px;
}
.sale-txt{
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
}
button{
    padding: 10px 30px;
    background: black;
    color: white;
    line-height: inherit;
    cursor: pointer;
}
button:hover{
    color: black;
    background: white;
    cursor: pointer;
}

</style>