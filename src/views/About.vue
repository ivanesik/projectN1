<template>
    <div class="about" style="height: 100%;">
        <SkewCarousel :items="aboutItems"></SkewCarousel>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import SkewCarousel from '@/components/SkewCarousel.vue';
import { AboutItem } from '@/data/model.ts';

@Component({
    components: { SkewCarousel }
})
export default class About extends Vue {
    public aboutItems: AboutItem[] = [
        new AboutItem('Проект N1', 'Место где можно сделать укладку, макияж, маникюр и оформить бровки в любое удобное тебе время 24/7!.',
            '#91a2b0', require('../assets/about/1.png')),
        new AboutItem('ШКОЛА СТИЛИСТОВ', 'Для тех, кто хочет освоить красивую и творческую профессию, научиться подчеркивать свою индивидуальность.',
            '#8e7365', require('../assets/about/2.jpg')),
        new AboutItem('Делаем красиво и с душой!', '',
            '#946651', require('../assets/about/3.jpg')),
        new AboutItem('Бьюти-девичник - это модно и стильно!', '',
            '#e8654d', require('../assets/about/4.jpg'))
    ];
}
</script>
