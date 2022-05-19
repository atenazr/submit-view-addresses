<template>

    <div>
        <div class="container">
        <h3 class="text-right my-4">
            آدرس هایی که تاکنون ثبت شده اند
            </h3>

            <div v-if="isLoading">
                    <base-spinner></base-spinner>
            </div>

            <div class="row" v-else-if="hasAddresses">
                    <single-address
                    class="col-12 col-md-4 col-lg-3 p-2"
                    v-for="(item,index) in dataAddresses"
                    :addressDetail="item"
                    :key="index"
                    ></single-address>
            </div>

            <div v-else>
                <h3>
                    هیچ آدرسی یافت نشد.
                    دسترسی خود را بررسی کنید
                </h3>
            </div>


        </div>
    </div>

</template>


<script>
import singleAddress from '../singleAddress.vue'
export default {
    components:{
        singleAddress
    },
    data(){
        return{
            addresses:[
            ],
            isLoading:false,
            error:null
        }
    },
    created(){
        this.loadAddresses();
        // console.log('addresses',this.$store.getters['addresses'])
    },
    computed:{
        dataAddresses(){
            return this.$store.getters['addresses'];
        },
        hasAddresses(){
            return this.$store.getters['hasAddresses'];
        }
    },
    methods:{
        async loadAddresses(){
            this.isLoading = true;
            await this.$store.dispatch('loadAddresses');
            this.isLoading = false;
        }
    }

}
</script>


<style scoped>
h3{
    font-size: 1.3rem;
    color: #5a5e76;
}
</style>