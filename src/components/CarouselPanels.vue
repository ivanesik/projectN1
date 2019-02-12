<template>
    <div class="carousel" style="height: 100vh;" >
        <div class="control"></div>
        <div class="carousel_item" ref="domItems" v-for="(item, index) of items" :key="index" @animationend="onAnimationEnd($event, index)">
            <div class="carousel_item-left">
                <div class="carousel_item_content" :style="{ backgroundImage: index % 2 == 0 ? 'url(' + item.backgroundImageUrl + ')' : 'none' }">
                    <div class="h-100" :style="{ backgroundColor: index % 2 == 0 ? 'transparent' : item.backgroundColor }" @click="prev()">
					</div>
                </div>
            </div>
            <div class="carousel_item-right">
                <div class="carousel_item_content" :style="{ backgroundImage: index % 2 == 1 ? 'url(' + item.backgroundImageUrl + ')' : 'none' }">
                    <div class="h-100" :style="{ backgroundColor: index % 2 == 1 ? 'transparent' : item.backgroundColor }" @click="next()">
					</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "./CarouselPanels.scss";
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CarouselItem } from '@/data/model.ts';

@Component
export default class CarouselPanels extends Vue {
        @Prop() private items!: CarouselItem[];
    public 	activeIndex: number = 0;
    public 	isTransition: boolean = false;

    public 	mounted() {
            (this.$refs.domItems  as HTMLElement[])[0].classList.add('display');
        }

// ***************************************************************************************************************
// -API-----------------------------------------------------------------------------------------------------------
// ***************************************************************************************************************
    public 	next() {
            if (!this.isTransition) {
                const nextIndex = this.activeIndex + 1 >= (this.$refs.domItems as any[]).length ? 0 : this.activeIndex + 1;
                this.rotateForward(nextIndex);
                this.activeIndex = nextIndex;
            }
        }

    public 	prev() {
            if (!this.isTransition) {
                const prevIndex = this.activeIndex - 1 < 0 ? (this.$refs.domItems as any[]).length - 1 : this.activeIndex - 1;
                this.rotateBackward(prevIndex);
                this.activeIndex = prevIndex;
            }
        }

    public 	selectAt(index: number) {
            if (!this.isTransition) {
                if (index > this.activeIndex
                    this.rotateForward(index);
                else
                    this.rotateBackward(index);
                this.activeIndex = index;
            }
        }

// ***************************************************************************************************************
// -Style-And-Avibility-------------------------------------------------------------------------------------------
// ***************************************************************************************************************
    public 	rotateForward(index: number) {
            this.isTransition = true;
            const activeItem = (this.$refs.domItems  as HTMLElement[])[this.activeIndex];
            const item = (this.$refs.domItems  as HTMLElement[])[index];
            activeItem.classList.add('forward', 'remove');
            item.classList.add('display');
            item.classList.add('forward', 'show');
        }

    public 	rotateBackward(index: number) {
            this.isTransition = true;
            const activeItem = (this.$refs.domItems  as HTMLElement[])[this.activeIndex];
            const item = (this.$refs.domItems  as HTMLElement[])[index];
            activeItem.classList.add('reverse', 'remove');
            item.classList.add('display');
            item.classList.add('reverse', 'show');
        }

// ***************************************************************************************************************
// -Handler-------------------------------------------------------------------------------------------------------
// ***************************************************************************************************************
    public 	onAnimationEnd($event: AnimationEvent, index: number) {
            if (this.activeIndex != index && $event && $event.currentTarget)
                ($event.currentTarget as HTMLElement).classList.remove('display', 'forward', 'reverse', 'remove');
            const activeItem = (this.$refs.domItems  as HTMLElement[])[this.activeIndex];
            activeItem.classList.remove('show', 'forward', 'reverse');
            this.isTransition = false;
        }

}
</script>


