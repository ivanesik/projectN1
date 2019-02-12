<template>
    <section class="masters">
        <div class="master" v-for="master in priceList" :key="master.title" @click="onMasterClick(master)">
            <div class="master_overflow" :class="[master.colorClass]"> 
                <img class="photo" :class="{'photo-opacity': !master.showPrice }" :src="master.photoUrl" alt="Фото мастера">
            </div>
            <div class="about" :class="{ hide: master.showPrice }">
                <span>
                    {{master.firstName}}
                    <strong>{{master.lastName}}</strong>
                </span>
            </div>
            <div class="price" :class="{ hide: !master.showPrice }">
                <table>
                    <template v-for="type in master.types">
                        <tr :key="type.title">
                            <td colspan="2">
                                <h5>{{type.title}}</h5>
                            </td>
                        </tr>
                        <tr v-for="price of type.prices" :key="price.title">
                            <td :colspan="price.price ? 1 : 2">{{price.title}}</td>
                            <td v-if="price.price" class="cost">{{price.price}}</td>
                        </tr>
                    </template>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import PriceList from "@/data/price.ts";

export default {
    data: function() {
        return {
            priceList: PriceList
        };
    },
    methods: {
        onMasterClick: function(master) {
            master.showPrice = !master.showPrice;
        }
    }
};
</script>

<style lang="scss" scoped>
.masters {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    color: white;
    font-family: "Raleway", sans-serif;
}
.master {
    height: 100%;
    position: relative;
    flex: 0 0 33.333333%;
    @media (max-width: 1100px) { flex: 0 0 100%; }
    overflow: hidden;
    cursor: pointer;
    &:hover .photo-opacity {
        opacity: .65;
    }
}
.price {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px 25px;
    overflow: auto;
    transition: transform .7s;
    &.hide {
        transform: translateX(100%);
    }
    .cost {
        text-align: right;
        min-width: 110px;
    }
}
.master_overflow {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.photo {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    transition: opacity 0.35s;
    opacity: 0.25;
}
.about {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-transform: uppercase;
    font-size: 30px;
    transition: transform .7s;
    overflow: hidden;
    &.hide {
        transform: translateX(-100%);
    }

    span {
        position: relative;
        transition: transform 0.35s ease-in-out;
        &:before,
        &:after {
            background-color: rgba(255, 255, 255, 0.8);
            width: 100%;
            height: 2px;
            position: absolute;
            content: "";
            display: block;
            transition: width 0.35s ease-in-out;
        }
        &:before {
            left: 0;
            top: 0;
        }
        &:after {
            bottom: 0;
            right: 0;
        }
    }
    &:hover:not(.hide) {
        span {
            transform: rotate(-45deg);
            &:before,
            &:after {
                width: 300%;
            }
        }
    }
}
.blue {
    background: #091b27;
}
.red {
    background: #2e0e0a;
}
.green {
    background: #061c10;
}
</style>


