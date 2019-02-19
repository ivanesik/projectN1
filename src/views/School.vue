<template>
    <div class="courses">
        <div class="course" v-for="(course, index) of courses" v-bind:key="course.id" v-bind:class="[getColor(index)]">
            <div class="inner">
                <img class="course__logo" :src="course.logoUrl" />
                <div class="course__title">{{course.title}}</div>
                <div class="course__caption">{{course.caption}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.courses {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    color: white;
}
.course {
    width: 100%;
    height: 100%;
    @media (min-width: 567px) { width: 50%; height: 33.333332%; }
    @media (min-width: 992px) { width: 33.333332%; height: 50%; }
    border: 1px solid;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    .inner {
        display: flex;
        background: rgba(0, 0, 0, .75);
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        transition: transform .3s;
        &:hover {
            transform: scale(1.1);
        }
    }
    
}
.course__logo {
    height: 20%;
    /*width: 100px;*/
}

.black {
    background: #091b27;
}
.gray {
    background: #B2C9AB;
}
.cyan {
    background: #658E9C;
}
.white {
    background: #E8DDB5;
}
.green {
    background: #384D48;
}
.red {
    background: #DC493A;
}
</style>


<script>
import Courses from '../data/school.ts';

export default {
    data: function() {
        return { courses: Courses };
    },
    methods: {
        getColor(index) {
            let colors = ['black','cyan','gray','white','red','green']
            return colors[index % colors.length];
        }
    }
};
</script>
