<template>
        <div class="mt-5">
            <carousel>
            <slide>
                <img src="src/assets/imgs/slider-homepage-img1.png" alt="image 1">
            </slide>
            <slide>
                <img src="src/assets/imgs/slider-homepage-img2.png" alt="image 1">
            </slide>
            <slide>
                <img src="src/assets/imgs/slider-homepage-img4.png" alt="image 1">
            </slide>
            </carousel>
        </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    }
}
</script>

<style  scoped>

</style>