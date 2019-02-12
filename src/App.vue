<template>
    <div id="app">
        <div class="nav-overlay" v-bind:style="{ display: isNavOpen ? 'flex' : 'none' }">
            <div
                v-for="i in blocksCount"
                class="block"
                :key="i"
                ref="blocks"
                v-bind:style="{ width: (100 / blocksCount) + '%', left: ((i - 1) * 100 / blocksCount) + '%' }"
            >
                <div v-if="i > 1" class="line" ref="line"></div>
            </div>
            <ul class="nav">
                <li
                    v-for="(link, i) in links"
                    class="hidden"
                    :style="{ transitionDelay: navDelay * (i + 1) + 'ms' }"
                    ref="links"
                    :key="link.link"
                    @click="hideNav()"
                >
                    <router-link :to="link.link">{{link.title}}</router-link>
                </li>
            </ul>
        </div>
        <main>
            <button class="btn-menu" :class="{close: isNavOpen}" @click="toggleNav()" :disabled="isAnimationInProgress">
                <svg width="50" height="50">
                    <path class="top" d="M5,16 45,16" stroke="#fff" stroke-width="3"></path>
                    <path class="middle" d="M5,26 45,26" stroke="#fff" stroke-width="3"></path>
                    <path class="bottom" d="M5,36 45,36" stroke="#fff" stroke-width="3"></path>
                </svg>
            </button>
            <router-view/>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@import "./app.scss";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { interval, Observable } from 'rxjs';
import { first, take, last } from 'rxjs/operators';

@Component({})
export default class App extends Vue {
    public isNavOpen: boolean = true;
    public isAnimationInProgress: boolean = false;
    public blocksCount: number = 4;

    public linesDelay: number = 300;
    public linesDur: number = 800;
    public navDelay: number = 150;
    public navDur: number = 700;
    public blockDur: number = 1000;

    public links: any[] = [
        { link: '/about', title: 'About' },
        { link: '/events', title: 'Events' },
        { link: '/price', title: 'Price' },
        { link: '/school', title: 'School' },
        { link: '/contacts', title: 'Contacts' }
    ];

    public mounted() {
        interval(1000).pipe(first()).subscribe(() => {
            this.showNavList();
        });
    }

// ***************************************************************************************************************
// -User-Interaction----------------------------------------------------------------------------------------------
// ***************************************************************************************************************
    public hideNav() {
        this.isAnimationInProgress = true;
        const onNavListHide = this.hideNavList();
        onNavListHide.subscribe(() => {
            const onLineShow = this.showLines();
            onLineShow.subscribe((i) => {
                interval(this.linesDur)
                    .pipe(first())
                    .subscribe(() => {
                        const onBlocksHide = this.hideBlocks();
                        onBlocksHide.subscribe(() => {
                            this.isNavOpen = false;
                            (this.$refs.line as HTMLElement[]).forEach((x) => {
                                (x.style as any)['transition-duration'] = '0s';
                                x.classList.remove('show');
                                x.removeAttribute('style');
                            });
                            this.isAnimationInProgress = false;
                        });
                    });
            });
        });
    }

    public showNav() {
        this.isAnimationInProgress = true;
        const onLinesShow = this.showLines();
        onLinesShow.subscribe(() => {
            interval(this.linesDur)
                .pipe(first())
                .subscribe((x) => {
                    const onBlocksShow = this.showBlocks();
                    onBlocksShow.subscribe(() => {
                        const onLinesHide = this.hideLines();
                        onLinesHide.subscribe(() => {
                            this.showNavList();
                            this.isAnimationInProgress = false;
                        });
                    });
                });
        });
    }

    public toggleNav() {
        if (this.isNavOpen)
            this.hideNav();
        else
            this.showNav();
    }

    // ***************************************************************************************************************
    // -Style-Visibility-Availability---------------------------------------------------------------------------------
    // ***************************************************************************************************************
    /** #1_1 Hide navigation list */
    public hideNavList(): Observable<number> {
        const links = this.$refs.links as Element[];
        links.forEach((x) => x.classList.add('hidden'));
        return interval(this.navDelay * links.length - 1).pipe(first());
    }

    /** #1_2, #2_1 Show  border line in blocks */
    public showLines(): Observable<number> {
        this.isNavOpen = true;
        const lines = this.$refs.line as Element[];
        const timer = interval(this.linesDelay).pipe(take(lines.length));
        timer.subscribe((i) => {
            lines[i].classList.add('show');
        });
        return timer.pipe(last());
    }

    /** #1_3 Hide overflow blocks */
    public hideBlocks(): Observable<number> {
        (this.$refs.blocks as HTMLElement[]).forEach((block) => {
            block.style.width = '0';
        });
        return interval(this.blockDur).pipe(first());
    }

    /** #1_4, #2_4 Hide blocks border line */
    public hideLines(): Observable<number> {
        const lines = this.$refs.line as Element[];
        const timer = interval(this.linesDelay).pipe(take(lines.length));
        timer.subscribe((i) => {
            lines[i].classList.remove('show');
        });
        return timer.pipe(last());
    }

    /** #2_2 Show overflow blocks */
    public showBlocks(): Observable<number> {
        (this.$refs.blocks as HTMLElement[]).forEach((block) => {
            block.style.width = '25%';
        });
        return interval(this.blockDur).pipe(first());
    }

    /** #2_3 Show navigation list */
    public showNavList() {
        const links = this.$refs.links as Element[];
        links.forEach((x) => x.classList.remove('hidden'));
    }
}
</script>

