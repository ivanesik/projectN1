<template>
    <div class="about" style="background-color: #151515;">
        <CarouselPanels :items="carouselItems"></CarouselPanels>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CarouselPanels from '@/components/CarouselPanels.vue';
import { CarouselItem } from '@/data/model.ts';

@Component({
    components: { CarouselPanels }
})
export default class About extends Vue {
    public carouselItems: CarouselItem[] = [
        new CarouselItem('Проект N1', 'Место где можно сделать укладку, макияж, маникюр и оформить бровки в любое удобное тебе время 24/7!.',
            '#91a2b0', require('../assets/about/1.png')),
        new CarouselItem('ШКОЛА СТИЛИСТОВ', 'Для тех, кто хочет освоить красивую и творческую профессию, научиться подчеркивать свою индивидуальность.',
            '#8e7365', require('../assets/about/2.jpg')),
        new CarouselItem('Делаем красиво и с душой!', '',
            '#946651', require('../assets/about/3.jpg')),
        new CarouselItem('Бьюти-девичник - это модно и стильно!', '',
            '#e8654d', require('../assets/about/4.jpg'))
    ];
}
</script>
