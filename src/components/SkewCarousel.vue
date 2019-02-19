<template>
    <div class="skew_carousel">
        <div class="carousel_item" v-for="item of items" :key="item.title">
            <div class="carousel_item--left">
                <div class="carousel_item--skewed" style="background: red;"></div>
            </div>
            <div class="carousel_item--right">
                <div class="carousel_item--skewed" style="background: blue;"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AboutItem } from '@/data/model.ts';

@Component
export default class SkewCarousel extends Vue {
    @Prop() private items!: AboutItem[];
}
</script>

<style lang="scss" scoped>
.skew_carousel {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}
.carousel_item {
    height: 100%;
    position: absolute;
}
.carousel_item--left, .carousel_item--right {
    position: absolute;
    width: 50%;
    height: 100%;
}
.carousel_item--right {
    left: 50%;
}
.carousel_item--skewed {
    height: 100%;
    width: 140%;
    position: absolute;
    transform: skewX(-18deg);
    overflow: hidden;
}
.carousel_item--left .carousel_item--skewed {
    left: -40%;
}
</style>

