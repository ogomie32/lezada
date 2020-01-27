<template>
    <div>
        <div class="loginBar">
            <div class="pl-5  my-5 text-left">
                <h1>Customer login</h1>
                <router-link to="/" exact-active-class="is_active" >HOME</router-link>
                /
                <router-link to="/customer-login" active-class="is_active">CUSTOMER LOGIN</router-link> 
            </div>
        </div>
        <div class="row login-row ">
            <div class="col-lg-5 col-md-2 grey">
                <div class="text-center my-3">
                    <div><h2> Login</h2></div>
                    <div class="text-muted mb-5">Great to have you back!</div>
                </div>
                <form>
                    <div class="row w-100">
                        <div class="col-lg-12 col-lg-offset-6 col-md-6 col-md-offset-3 w-100 ml-2">
                            <div class="form-group">
                                <!-- <label for="email">Mail</label> -->
                                <input
                                        type="text"
                                        id="email"
                                        class="form-control wt"
                                        placeholder="Username or email address"
                                        v-model="users.email">
                            </div>
                            <div class="form-group">
                                <!-- <label for="password">Password</label> -->
                                <input
                                        type="password"
                                        id="password"
                                        class="form-control wt"
                                        placeholder="Password"
                                        v-model.lazy="users.password"
                                        >
                                        <!-- <p>{{ users.password }}</p> -->
                            </div>
                        </div>
                    </div>
                </form>
                <div class="log_btn">
                    <button class="btn btn-dark">LOGIN</button>
                </div>
                <div class="form-group mt-5">
                    <label for="box">
                        <input 
                            type="checkbox" 
                            id="box" 
                            value="Remember"> 
                            Remember me
                    </label>
                    
                </div>
                <div class="my-3 text-muted">Lost your Password?</div>
            </div>
            <div class="col-lg-5 col-md-4 my-5">
                <div class="text-center my-3">
                    <div><h2> Register</h2></div>
                    <div class="text-muted mb-5">If you don't have an account, register now!</div>
                </div>
                <form>
                    <div class="row w-100">
                        <div class="col-lg-12 col-lg-offset-6 col-md-6 col-md-offset-3 w-100 ml-4">
                            <div class="form-group">
                                <label for="email">EMAIL ADDRESS</label>
                                <input
                                        type="text"
                                        id="email"
                                        class="form-control wt"
                                        placeholder="Username or email address"
                                        v-model="users.email">
                            </div>
                            <div class="form-group">
                                <label for="password">PASSWORD</label>
                                <input
                                        type="password"
                                        id="password"
                                        class="form-control wt"
                                        placeholder="Password"
                                        v-model.lazy="users.password"
                                        >
                                        <!-- <p>{{ users.password }}</p> -->
                            </div>
                        </div>
                    </div>
                </form>
                <div class="log_btn">
                    <button class="btn btn-dark">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: {
                email: '',
                password: ''
            }
        }
    }
}
</script>

<style scoped>
.loginBar{
    padding: 90px 60px;
    background-color: rgb(240, 236, 236);
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
.login-row{
    padding: 70px 0;
    margin: 0px 150px;
    justify-content: center;
}
.grey{
    background-color: rgb(240, 236, 236);
    padding: 50px 30px;
    margin-right: 50px;
}
input {
    font-size: 11px;
    border: none;
    background-color: none;
    border-bottom: 1px solid black;
    border-radius: 0;
    /* margin-left: 20px; */
}
input .x{
    display: flex;
    bottom: 1px solid red;
}
.wt{
    width: 450px;
    margin-bottom: 50px;
    font-size: 20px;
}
.log_btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    padding: 10px 40px;
    font-size: 15px;
    border-radius: 0;
}
</style>