<template>
    <div class="events">
        <div class="components-list">
            <div class="item"><img src="../assets/events/1.jpg" alt=""></div>
            <div class="item"><img src="../assets/events/2.jpg" alt=""></div>
            <div class="item"><img src="../assets/events/3.jpg" alt=""></div>
            <div class="item"><img src="../assets/events/4.png" alt=""></div>
            <div class="item"><img src="../assets/events/5.jpg" alt=""></div>
            <div class="item"><img src="../assets/events/6.jpg" alt=""></div>
            <div class="item"><img src="../assets/events/7.jpg" alt=""></div>
            <div class="item"><img src="../assets/events/8.jpg" alt=""></div>
            <div class="item"><img src="../assets/events/9.jpg" alt=""></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.events {
    display: block;
    perspective: 2000px;
    height: 100vh;
    overflow: hidden;
}

.components-list {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: black;
    transform-origin: top left;

    .item {
        height: 15vw;
        width: calc(15vw - 24px);
        margin: 5px;
        overflow: hidden;
        background-color: darkslategrey;
        transition: transform 0.8s;
        border: 1px solid white;
        cursor: pointer;
        @media (max-width: 1200px) { height: 20vw; width: calc(20vw - 10px); }
        @media (max-width: 1000px) { height: 25vw; width: 25vw; }
        @media (max-width: 800px) { height: 30vw; width: 30vw; }
        @media (max-width: 600px) { height: 40vw; width: 40vw; }
        @media (max-width: 500px) { height: 49vw; width: 49vw; }

        &:hover {
            transform: scale(1.15);
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
}
</style>


<script>
export default {
    data: function() {
        return { rotateAngleZ: -10, rotateAngleX: -4, rotateAngleY: -9 };
    }
};
</script>
