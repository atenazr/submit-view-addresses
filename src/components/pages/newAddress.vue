<template>
    <div class="row">
        <h3 class="text-right my-4 mx-3 title">
        اطلاعات را وارد کنید!
        </h3>

        <div class="col-12 col-md-8">
           <the-map></the-map> 
        </div>

        <div class="col-12 col-md-4">
            <form action="">
                <div class="input-group mb-3"
                :class="noError">
                    <span class="input-group-text py-2" id="basic-addon1">نام</span>
                    <input
                    v-model.trim="tempData.firstName"
                     type="text" class="form-control" aria-describedby="basic-addon1">
                </div>

                <div class="input-group mb-3"
                :class="noError">
                    <span class="input-group-text py-2" id="basic-addon2"> نام خانوادگی</span>
                    <input 
                    v-model.trim="tempData.lastName"
                    type="text" class="form-control"  aria-describedby="basic-addon2">
                </div>

                <div class="input-group mb-3"
                :class="noError">
                    <span class="input-group-text py-2" id="basic-addon3"> تلفن همراه</span>
                    <input 
                    v-model.trim="tempData.coordinateMobile"
                    type="text" class="form-control"  aria-describedby="basic-addon3">
                </div>

                <div class="input-group mb-3"
                :class="noError">
                    <span class="input-group-text py-2" id="basic-addon4"> تلفن ثابت</span>
                    <input 
                    v-model.trim="tempData.coordinatePhoneNumber"
                    type="text" class="form-control"  aria-describedby="basic-addon4">
                </div>

                <div class="input-group mb-3"
                :class="noError">
                    <span class="input-group-text py-2" id="basic-addon5"> آدرس دقیق</span>
                    <input 
                    v-model.trim="tempData.address"
                    type="text" class="form-control"  aria-describedby="basic-addon5">
                </div>

                <div class="d-flex flex-row w-100 px-2 my-2">

                    <label for="" class="gender"> 
                        جنسیت
                    </label>
                    <div 
                    style="direction:ltr;"
                    class="btn-group mb-3" role="group" aria-label="Basic radio toggle button group">
                        <input 
                        v-model="tempData.gender"
                        value="Female"
                        type="radio" 
                        class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                        <label class="btn btn-outline-primary" for="btnradio1">زن </label>

                        <input 
                        v-model="tempData.gender"
                        value="Male"
                        type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio2">مرد </label>
                    </div>

                    <div class="error" >
                        {{ error }}
                    </div>

                    <div class="correct" >
                        {{ correctData }}
                    </div>

                </div>

            </form>

            <div 
            class="me-btn p-3 my-2 rounded text-center"
            @click="submitInformation">
                مرحله بعد
            </div>
        </div>
            
    </div>

</template>


<script>

import TheMap from '../TheMap.vue'

export default {
    data(){
        return{
            tempData:{
                firstName:'',
                lastName:'',
                coordinatePhoneNumber:'',
                coordinateMobile:'',
                gender:'Male',
                region:1,
                address:'',
                lat:35.7717503,
                lng:51.3365315
            },
            error:'',
            correctData:''
        }
    },
    components:{
        TheMap
    },
    computed:{
    },
    methods:{
        confirmPosition(position){
            this.tempData.lng = position[0];
            this.tempData.lat = position[1];
        },
        submitInformation(){
            if(this.validateForm()){
                this.$store.dispatch('registerAddress',this.tempData);
                this.error = '';
                this.tempData={
                firstName:'',
                lastName:'',
                coordinatePhoneNumber:'',
                coordinateMobile:'',
                gender:'Male',
                region:1,
                address:'',
                lat:35.7717503,
                lng:51.3365315
            };
                this.correctData = 'اطلاعات با موفقیت ثبت شد!'
            }
        },
        validateForm(){
            this.correctData='';
            if(this.tempData.firstName === '' ){
                this.error = 'لطفا یک نام معتبر وارد کنید'
                return false
            }
            else if(this.tempData.lastName === '' ){
                this.error = 'لطفا یک نام خانوادگی معتبر وارد کنید'
                return false
            }
            else if( this.validatePhone(this.tempData.coordinateMobile)){
                this.error = 'لطفا یک شماره همراه 11 رقمی و معتبر وارد کنید'
                return false
            }
            else if(this.validatePhone(this.tempData.coordinatePhoneNumber)){
                this.error = 'لطفا یک شماره تلفن 11 رقمی و معتبر وارد کنید'
                return false
            }
            else if( this.tempData.address === ''){
                this.error = 'لطفا یک ادرس معتبر وارد کنید'
                return false
            } 
            else{
                return true
            } 
        },
        validatePhone(num){
            if(num === '' || num.length < 11 || !(/^\d*\.?\d*$/.test(num))){
                return true
             }
        }
    }

}
</script>

<style scoped>
div.row{
    height: auto;
}
h3{
    font-size: 1.3rem;
    color: #5a5e76;
}
.input-group-text,
.form-control{
    border: none ;
    border-radius: 0;
}
.input-group-text{
    background-color: transparent !important;
}
.input-group{
    border: 1px solid #75798d !important;
    border-radius: 3px;
}
.input-group span{
    color: #2483b3;
    background-color: none !important;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {  
  margin-left:0;
}
.me-btn{
    background-color: #16d998;
    cursor: pointer;
    font-size: 1.2rem;
}
.me-btn:hover{
    color: #5a5e76;
}
.btn-group{
    margin-left: auto;
    margin-right:.8rem ;
}
.btn-group label{
    padding:.5rem;
}
.error{
    color: rgb(184, 20, 20);
}
.correct{
    color: #16d998;
}
.gender{
    color: #2483b3;
  line-height: 2rem;
}
</style>