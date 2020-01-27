<template>
    <div>
        <div class="row">
            <div class="col-md-8 col-lg-12 pt-5">
                <app-slider-box></app-slider-box>
            </div>
        </div>
        <app-items></app-items>
        <app-sales-row></app-sales-row>
        <app-footer></app-footer>
    </div>
</template>

<script>
import SliderBox from './SliderBox.vue';
import Footer from './Footer.vue';
import Items from './gallery/Items.vue';
import SalesRow from './SalesRow.vue';

export default {
    components: {
    appSliderBox: SliderBox,
    appFooter: Footer,
    appItems: Items,
    appSalesRow: SalesRow,
  },
}
</script>