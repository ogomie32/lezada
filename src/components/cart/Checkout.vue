<template>
    <div>
        <div class="checkBar">
            <div class="pl-5  my-5 text-left">
                <h1>Checkout</h1>
                <router-link to="/" exact-active-class="is_active" >HOME</router-link>
                /
                <router-link to="/customer-checkout" active-class="is_active">CHECKOUT</router-link>
                <!-- <img src="src/assets/imgs/ppp.png" alt="">  -->
            </div>
        </div>
        <div class="row checkout-row">
            <div class="col-lg-6 col-lg-offset-3 col-md-3 col-md-offset-2  ml-2">
                <form >
                    <h4><b>Billing Address</b> </h4>
                    <div class="row w-100 mt-3">
                        <div class="col-sm-4 col-sm-offset-2 col-md-6 col-md-offset-4 col-lg-12 col-lg-offset-6 ml-2">
                            <div class="row">
                                <div class="col-5 mr-5">
                                    <div class="form-group">
                                        <label for="fname">FIRST NAME</label>
                                        <input
                                                type="text"
                                                id="fname"
                                                class="form-control"
                                                placeholder="First Name"
                                                v-model="users.fname">
                                    </div>
                                </div>
                                <div class="col-5 ml-5">
                                    <div class="form-group">
                                        <label for="lname">LAST NAME</label>
                                        <input
                                                type="text"
                                                id="lname"
                                                class="form-control"
                                                placeholder="Last Name"
                                                v-model="users.lname"
                                                >
                                    </div>
                                </div>
                            </div>
                           <div class="row">
                               <div class="col-5 mr-5">
                                   <div class="form-group">
                                        <label for="email">EMAIL ADDRESS</label>
                                        <input
                                                type="text"
                                                id="email"
                                                class="form-control wt"
                                                placeholder="Email Address"
                                                v-model="users.email">
                                    </div>
                               </div>
                               <div class="col-5 ml-5">
                                   <div class="form-group">
                                        <label for="phone">PHONE NO</label>
                                        <input
                                                type="text"
                                                id="phone"
                                                class="form-control wt"
                                                placeholder="Phone number"
                                                v-model="users.phone"
                                                >
                                    </div>
                               </div>
                           </div>
                            
                            <div class="form-group">
                                <label for="company">COMPANY NAME</label>
                                <input
                                        type="text"
                                        id="company"
                                        class="form-control wt"
                                        placeholder="Company Name"
                                        v-model="users.company">
                            </div>
                            <div class="form-group">
                                <label for="addr1">ADDRESS</label>
                                <input
                                        type="text"
                                        id="addr1"
                                        class="form-control wt"
                                        placeholder="Address 1"
                                        v-model="users.addr1"
                                        >
                            </div>
                            <div class="form-group">
                                <input
                                        type="text"
                                        id="addr2"
                                        class="form-control wt"
                                        placeholder="Address 2"
                                        v-model="users.addr2">
                            </div>
                            <div class="row">
                                <div class="col-5 mr-5">
                                    <div class="form-group">
                                        <label for="country">COUNTRY</label>
                                        <!-- <input
                                                type="text"
                                                id="country"
                                                class="form-control wt"
                                                placeholder="Bangladesh"
                                                
                                                > -->
                                        <select 
                                            id="country" 
                                            class="form-control"
                                            v-model="selectedCountry">
                                            <option v-for="country in countries" :key="country.id">
                                                {{ country }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-5 ml-5">
                                    <div class="form-group">
                                        <label for="town">TOWN/CITY</label>
                                        <input
                                                type="text"
                                                id="town"
                                                class="form-control wt"
                                                placeholder="Town/City"
                                                v-model="town">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-5 mr-5">
                                    <div class="form-group">
                                        <label for="state">STATE</label>
                                        <input
                                                type="text"
                                                id="state"
                                                class="form-control wt"
                                                placeholder="State"
                                                v-model="state"
                                                >
                                    </div>
                                </div>
                                <div class="col-5 ml-5">
                                     <div class="form-group">
                                        <label for="code">ZIP CODE</label>
                                        <input
                                                type="text"
                                                id="code"
                                                class="form-control wt"
                                                placeholder="Zip Code"
                                                v-model="users.code">
                                    </div>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="col-5">
                                    <div class="box">
                                        <div class="xx mr-3"></div>
                                        <div>CREATE AN ACCOUNT</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="box">
                                        <div class="xx mr-3" @click="shipAddr">
                                            <div v-show="show"><i class="material-icons icon fs-12">star_border</i></div>
                                        </div>
                                        <div>SHIP TO DIFFERENT ADDRESS</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </form>
                <form class="data" v-show="show">
                    <h4><b>Shipping Address</b> </h4>
                    <div class="row w-100 mt-3">
                        <div class="col-lg-4 col-lg-offset-2 col-md-2 col-md-offset-2 ml-2">
                            <div class="row">
                                <div class="col-5 mr-5">
                                    <div class="form-group">
                                        <label for="fname">FIRST NAME</label>
                                        <input
                                                type="text"
                                                id="fname"
                                                class="form-control"
                                                placeholder="First Name"
                                                v-model="users.fname">
                                    </div>
                                </div>
                                <div class="col-5 ml-5">
                                    <div class="form-group">
                                        <label for="lname">LAST NAME</label>
                                        <input
                                                type="text"
                                                id="lname"
                                                class="form-control"
                                                placeholder="Last Name"
                                                v-model="users.lname"
                                                >
                                    </div>
                                </div>
                            </div>
                        <div class="row">
                            <div class="col-5 mr-5">
                                <div class="form-group">
                                        <label for="email">EMAIL ADDRESS</label>
                                        <input
                                                type="text"
                                                id="email"
                                                class="form-control wt"
                                                placeholder="Email Address"
                                                v-model="users.email">
                                    </div>
                            </div>
                            <div class="col-5 ml-5">
                                <div class="form-group">
                                        <label for="phone">PHONE NO</label>
                                        <input
                                                type="text"
                                                id="phone"
                                                class="form-control wt"
                                                placeholder="Phone number"
                                                v-model="users.phone"
                                                >
                                    </div>
                            </div>
                        </div>
                            
                            <div class="form-group">
                                <label for="company">COMPANY NAME</label>
                                <input
                                        type="text"
                                        id="company"
                                        class="form-control wt"
                                        placeholder="Company Name"
                                        v-model="users.company">
                            </div>
                            <div class="form-group">
                                <label for="addr1">ADDRESS</label>
                                <input
                                        type="text"
                                        id="addr1"
                                        class="form-control wt"
                                        placeholder="Address 1"
                                        v-model="users.addr1"
                                        >
                            </div>
                            <div class="form-group">
                                <input
                                        type="text"
                                        id="addr2"
                                        class="form-control wt"
                                        placeholder="Address 2"
                                        v-model="users.addr2">
                            </div>
                            <div class="row">
                                <div class="col-5 mr-5">
                                    <div class="form-group">
                                        <label for="country">COUNTRY</label>
                                        <!-- <input
                                                type="text"
                                                id="country"
                                                class="form-control wt"
                                                placeholder="Bangladesh"
                                                
                                                > -->
                                        <select 
                                            id="country" 
                                            class="form-control"
                                            v-model="selectedCountry">
                                            <option v-for="country in countries" :key="country.id">
                                                {{ country }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-5 ml-5">
                                    <div class="form-group">
                                        <label for="town">TOWN/CITY</label>
                                        <input
                                                type="text"
                                                id="town"
                                                class="form-control wt"
                                                placeholder="Town/City"
                                                v-model="town">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-5 mr-5">
                                    <div class="form-group">
                                        <label for="state">STATE</label>
                                        <input
                                                type="text"
                                                id="state"
                                                class="form-control wt"
                                                placeholder="State"
                                                v-model="state"
                                                >
                                    </div>
                                </div>
                                <div class="col-5 ml-5">
                                    <div class="form-group">
                                        <label for="code">ZIP CODE</label>
                                        <input
                                                type="text"
                                                id="code"
                                                class="form-control wt"
                                                placeholder="Zip Code"
                                                v-model="users.code">
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </form>
                <div class="panel panel default d-block">
                    <div class="panel-heading">USER</div>
                    <div class="panel-body">
                        <p>Name: {{users.fname + '\t' + users.lname}}</p> 
                        <p>Email: {{ users.email }}</p> 
                        <p>Password: {{ users.password }}</p> 
                    </div>
                    <button class="btn btn-success" @click="saveUsers">Save</button>
                    <div></div>
                </div>
            </div>
            <div class="col-lg-4 col-lg-offset-2 col-md-2 col-md-offset-2">
                <h5><b>Cart Total</b></h5>
                <div class="totalBox mb-5" >
                    <div class="my-4 mx-4">
                        <table class="text-left">
                            <thead>
                                <th style="width: 60%"><h6>Product</h6></th>
                                <th style="width: 5%"><h6>Total</h6></th>
                            </thead>
                            <tr v-for="cartIt in check_cart" :key="cartIt.item.id">
                                <td class="p">{{ cartIt.item.name }} X {{ cartItquantity }}</td>
                                <td>&dollar;{{ cartIt.item.price * cartIt.quantity }}</td>
                            </tr>
                            <tr><hr></tr>
                            <tr>
                                <td><b>Sub Total</b></td>
                                <td><b>&dollar;{{ total }}</b></td>
                            </tr>
                            <tr><hr></tr>
                            
                            <tr>
                                <td><b>Shipping Fee</b></td>
                                <td><b>&dollar;0</b></td>
                            </tr>
                            <tr><hr></tr>
                            <tr>
                                <th><b>Grand Total</b></th>
                                <th><b>&dollar;{{ total }}</b></th>
                            </tr>
                        </table>
                    </div>
                </div>
                 <h5><b>Payment Method</b></h5>
                <div class="totalBox ">
                    <div class="text-center my-4 mx-4">
                        <div class="box">
                            <div class="xx mr-3" :class="{'bb' : color == 'check pay'}" @click="setBox('check pay')">
                                <div :class="{'xxx' : color == 'check pay'}" @click="setBox('check pay')"></div>
                            </div>
                            <div>CHECK PAYMENT</div>
                        </div>
                        <div class="box">
                            <div class="xx mr-3" :class="{'bb' : color == 'transfer'}" @click="setBox('transfer')">
                                <div :class="{'xxx' : color == 'transfer'}" @click="setBox('transfer')"></div>
                            </div>
                            <div>DIRECT BANK TRANSFER</div>
                        </div>
                        <div class="box">
                            <div class="xx mr-3" :class="{'bb' : color == 'cash'}" @click="setBox('cash')">
                                <div :class="{'xxx' : color == 'cash'}" @click="setBox('cash')"></div>
                            </div>
                            <div>CASH ON DELIVERY</div>
                        </div>
                        <div class="box">
                            <div class="xx mr-3" :class="{'bb' : color == 'paypal'}" @click="setBox('paypal')">
                                <div :class="{'xxx' : color == 'paypal'}" @click="setBox('paypal')"></div>
                            </div>
                            <div>PAYPAL</div>
                        </div>
                        <div class="box">
                            <div class="xx mr-3" :class="{'bb' : color == 'payoneer'}" @click="setBox('payoneer')">
                                <div :class="{'xxx' : color == 'payoneer'}" @click="setBox('payoneer')"></div>
                            </div>
                            <div>PAYONEER</div>
                        </div>
                        <div class="cond_box">
                            <div class="xx mr-3"></div>
                            <div>I'VE READ AND ACCEPT THE TERMS & CONDITIONS</div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-dark">PLACE ORDER</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            show: false,
            color: '',
            users: {
                fname: '',
                lname: '',
                email: '',
                password: '',
                phone: '',
                addr1: '',
                addr2: '',
                company: '',
                code: ''
            },
            selectedCountry: 'Bangladesh',
            state: '',
            town: '',
            countries: ['Bangladesh', 'Nigeria', 'Togo', 'Ghana', 'Japan']
        }
    },
    computed: {
        check_cart(){
            return this.$store.getters.cart;
        },
        total(){
            return this.$store.getters.overallTotal;
        },
        isSaved(){
            let user = JSON.parse(localStorage.getItem("users"));
            if(user) return user;
            return false;
        }
    },
    mounted() {
        if (localStorage.getItem('users')) {
            try {
                this.users = JSON.parse(localStorage.getItem('users'));
            } catch(e) {
                localStorage.removeItem('users');
            }
        }
    },
    methods: {
        setBox(value) {
            this.color = value;
        },
        shipAddr(){
            this.show = !this.show;
            console.log(localStorage);
        },
        saveUsers() {
            let preData = JSON.parse(localStorage.getItem("users"));
            if(preData) {
                const usersArray = preData.user;
                usersArray.push(this.users);
                console.log(JSON.stringify(usersArray));
                localStorage.setItem("users", JSON.stringify(usersArray));
            } else {
                const newObj = {user: [this.users]};
                console.log(JSON.stringify(newObj));
                localStorage.setItem("users", JSON.stringify(newObj));
                
            }
            
        }
    },
    watch: {
        saveUsers(X, Y){
            if(saveUsers){
                console.log(saveUsers);
            }
        },
        
    }
}
</script>

<style scoped>
.checkBar{
    padding: 90px 60px;
    background-color: rgb(233, 231, 231);
}
.checkout-row{
    padding: 70px 0;
    margin: 0px 150px;
    justify-content: center;
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
input {
    font-size: 11px;
    border: none;
    background-color: none;
    border-bottom: 2px solid #ccc;
    border-radius: 0;
}
input:hover {
    border-bottom: 2px solid black;
}
label{
    padding: 10px 0;
}
.totalBox {
    width: 400px;
    margin-left: 50px;
    margin-top: 30px;
    padding: 20px;
    background: rgb(238, 237, 237);
}
h5{
    text-decoration: underline;
    margin-left: 50px;
}
button{
    border-radius: 0;
    font-size: 15px;
    padding: 10px 40px;
    margin-left: 50px;
    margin-top: 30px;

}
.xx {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgb(141, 141, 141);
    cursor: pointer;
}

.xxx {
    height: 12px;
    width: 12px;
    background-color: black;
}
.box{
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 20px;
    color: rgb(65, 64, 64);
}
.cond_box{
    display: flex;
    align-items: right;
    font-size: 14px;
    margin-bottom: 20px;
    color: rgb(141, 141, 141);
}
/* .xxx:hover {
    border: 1px solid #b2b2b2;
    border-radius: 50%;
} */
.bb {
    border: 2px solid black;
}

.xxx.blues .xx {
    background-color: blue;
}
th{
    font-family: 'Arial Black', Arial, sans-serif;
}
td{
    color: rgb(121, 120, 120);
}
.p{
    padding: 10px 0;
}
hr{
    margin: 10px;
}
img{
    position: absolute;
    top:20px;
    right: 50px;
    width: 500px;
}
.data{
    height: 0;
    margin-bottom: 70px;
}
.fs-12{
    font-size: 14px;
    margin-top: 5px; 
}
</style>