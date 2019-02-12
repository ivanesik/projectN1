<template>
    <section class="contacts">
        <div class="logo">
            <img src="@/assets/logo/logo.svg" alt>
            <div class="description">
                <span>SIBERIAN BEAUTY SALOON IN TOMSK. BEAUTY. STYLE. SCHOOL.</span>
            </div>
        </div>
        <address class="contact">
            <table class="contacts_table">
                <tr class="b">
                    <td class="contact_title">ADDRESS</td>
                    <td class="contact_label text-right">г.Томск, ул. Нахимова 8 ст.37, офис 203 (заезд со стороны ул. Учебной)</td>
                </tr>
                <tr>
                    <td class="contact_title">TEL.NUM.</td>
                    <td class="contact_label text-right">+7 923 409 85 02</td>
                </tr>
                <tr class="b">
                    <td></td>
                    <td class="contact_label text-right">+7 923 405 00 44</td>
                </tr>
                <tr class="b">
                    <td class="contact_title">EMAIL</td>
                    <td class="contact_label text-right">
                        <a href="mailto:project_number_one@mail.ru">project_number_one@mail.ru</a>
                    </td>
                </tr>
                <tr>
                    <td class="contact_title">SOCIAL</td>
                    <td style="display: flex; justify-content: flex-end;">
                        <div class="icon" onclick="window.open('https://www.instagram.com/project_n1_tsk/','Мы в Instagram')">
                            <div class="instagram"></div>
                        </div>
                    </td>
                </tr>
            </table>
        </address>
        <div class="map">
            <div class="title">Map</div>
            <div id="map" style="height: 50vh;"></div>
        </div>
        <div class="art">
             <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="325.469px" height="325.469px" viewBox="0 0 325.469 325.469" style="enable-background:new 0 0 325.469 325.469;" xml:space="preserve">
                <g><path fill="currentColor" d="M162.749,325.469l-13.297-14.123c-18.747-19.933-112.25-122.571-112.25-185.815 C37.201,56.308,93.518,0,162.737,0c69.208,0,125.525,56.316,125.53,125.53c0,64.605-100.769,173.597-112.256,185.815 L162.749,325.469z M162.743,11.705c-62.767,0-113.826,51.062-113.826,113.819c0,60.082,97.907,165.923,109.065,177.788 l4.754,5.055l4.755-5.05c40.512-43.067,109.077-128.986,109.077-177.793C276.563,62.767,225.501,11.705,162.743,11.705z"/></g>
                <g><path fill="currentColor" d="M162.743,180.906c-30.534,0-55.379-24.842-55.379-55.376c0-30.537,24.845-55.379,55.379-55.379 c30.525,0,55.365,24.842,55.376,55.379C218.119,156.064,193.28,180.906,162.743,180.906z M162.743,81.862 c-24.081,0-43.668,19.593-43.668,43.668c0,24.076,19.593,43.666,43.668,43.666c24.076,0,43.666-19.59,43.666-43.666 C206.397,101.449,186.819,81.862,162.743,81.862z"/></g>
            </svg>
            <div style="margin-top: 32px;">CONTACTS</div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
$textColor: #555555;

.contacts {
    font-family: "Raleway";
    display: flex;
    padding: 20px 0 20px 20px;
    color: #d0d1d3;
    background: #242529;
    height: 100%;
}
.logo {
    @media (max-width: 1200px) { display: none; }
    margin-top: 150px;
    flex: 0 0 20%;
    max-width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    img {
        width: 100%;
        margin-bottom: 30px;
    }
    .description {
        display: flex;
        align-items: flex-end;
        height: 440px;
        font-size: 0.8em;
        white-space: nowrap;
        transform-origin: left bottom;
        transform: translateX(50%) rotate(-90deg);
    }
}
.contact {
    flex: 0 0 50%;
    font-style: normal;
    display: flex;
    align-items: flex-start;
    padding: 0 40px;
    @media (max-width: 1200px) { padding-left: 0;}
    @media (max-width: 1000px) { padding-right: 0; flex: 0 0 90%; }
}
.contacts_table {
    width: 100%;
    margin-top: 142px;
    border-spacing: 0;
    border-collapse: collapse;
    td {
        padding: 5px 0 15px 0;
        font-size: 1.1em;
        &.contact_title {
            padding-right: 15px;
        }
        &.contact_label, &.contact_label a {
            text-decoration: none;
            font-size: 0.9em;
            color: $textColor;
            &:hover {
                color: #d0d1d3;
            }
        }
    }
    tr.b td {
        border-bottom: 1px solid #a1a1a1;
    }
    .icon {
        background: #fff;
        border: 2px solid #444;
        border-radius: 22px;
        cursor: pointer;
        padding: 5px;
        &:hover {
            filter: invert(100%);
        }
    }
    .instagram {
        background-image: url('../assets/icons/instagram.svg');
        background-size: 100% 100%;
        height: 30px;
        width: 30px;
    }
}
.map {
    @media (max-width: 1000px) { display: none;}
    .title {
        margin-top: 119px;
        margin-bottom: 10px;
    }
    flex: 0 0 29%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
#map {
    filter: grayscale(0.7) brightness(0.8) contrast(1.2);
}
.art {
    height: 220px;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 146px;
    font-weight: 900;
    color: #323239;
    overflow: hidden;
    svg {
        width: 40%;
        position: absolute;
        top: -19%;
        left: -0.1%;
        height: 178%;
    }
}
.text-right {
    text-align: right;
}
</style>


<script>
export default {
    name: "contacts",
    created() {
        ymaps.ready(() => {
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                center: [56.458139, 84.957135],
                zoom: 15,
                controls: ["zoomControl"]
            });
            var myPlacemark = new ymaps.Placemark(
                [56.458139, 84.957135],
                {
                    iconContent: "Project N1",
                    balloonContentHeader: "Project N1",
                    balloonContentBody: "Студия красоты"
                },
                {
                    preset: "islands#blackStretchyIcon"
                }
            );
            myMap.geoObjects.add(myPlacemark);
        });
    }
};
</script>

