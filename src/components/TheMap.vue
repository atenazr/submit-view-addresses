<template>
    <div class="message">
        {{ message }}
    </div>

    <ol-map 
        :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:290px">

        <ol-view 
            ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>

        <ol-vector-layer>
            <ol-source-vector :projection="projection">

                <ol-interaction-draw
                 minPoints=1
                 maxnPoints=1
                v-if="drawEnable" :type="drawType" @drawend="drawend" @drawstart="drawstart">

                </ol-interaction-draw>

            </ol-source-vector>

            <ol-style>
                <ol-style-stroke color="red" :width="2"></ol-style-stroke>
                <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
                <ol-style-circle :radius="7">
                    <ol-style-fill color="red"></ol-style-fill>
                </ol-style-circle>
            </ol-style>
        </ol-vector-layer>

    </ol-map>

    <div 
    @click="setPositon"
    class="me-btn p-3 my-2 rounded text-center">
        ثبت موقعیت
    </div>

</template>

<script>
import {
    ref
} from 'vue'
export default {
    props: {},
    emits: ["setPosotion"],
    setup(props,{emit}) {
        const center = ref([51.3365315, 35.7717503]);
        const projection = ref("EPSG:4326");
        const zoom = ref(8);
        const rotation = ref(0);
        const position = ref([]);
        const message = ref('موقعیت موردنظر را بر روی نقشه انتخاب کنید');

        const drawEnable = ref(true)
        const drawType = ref("Point")

        const drawstart = (event) => {
            // console.log(event);
            position.value = event.feature.geometryChangeKey_.target.flatCoordinates;
            message.value = 'اکنون بر روی "ثبت موقعیت" کلیک کنید';
        }

        // const drawend = (event) => {
        //     console.log(event)
        // }

        const setPositon = () =>{
            message.value = 'موقعیت با موفقیت ثبت شد.';
            emit('setPosotion',position.value);
        }

        return {
            center,
            projection,
            zoom,
            rotation,
            drawEnable,
            drawType,
            position,
            message,
            drawstart,
            // drawend,
            setPositon
        }
    },
}

</script>


<style scoped>
*{
    cursor: pointer;
}
.message{
    padding: 1rem;
    text-align: center;
    background-color: #f2f2f2;
    color: #5a5e76;
}
.me-btn{
    background-color: #16d998;
    font-size: 1.2rem;
}
.me-btn:hover{
    color: #5a5e76;
    font-size: 1.2rem;
}
</style>