import ShoppingCart from './components/cart/ShoppingCart.vue';
import Main from './components/Main.vue';
import ShopItem from './components/gallery/ShopItem.vue';
import Wishes from './components/wish/Wishes.vue';
import Checkout from './components/cart/Checkout.vue';
import Login from './components/Login.vue';


export const routes = [
    {path: '/shoppingcart', name: 'shop', component: ShoppingCart},
    {path: '/', name: 'home', component: Main},
    {path: '/shopitem/:id', name: 'product', component: ShopItem},
    {path: '/wishes', name: 'wish', component: Wishes},
    {path: '/customer-login', name: 'login', component: Login},
    {path: '/customer-checkout', name: 'checkout', component: Checkout}
]