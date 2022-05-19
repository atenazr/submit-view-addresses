<template>
    <div>
        <div class="me-container">
            <div class="address">
                {{ addressDetail.address }}
            </div>

            <div class="d-flex flex-row my-2">
                <div class="full-name">
                    {{ fullName }}
                </div>
                <div class="mobile mx-auto">
                    {{ addressDetail.coordinateMobile }}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    props:[
        'addressDetail'
    ],
    computed:{
        fullName(){
            return this.addressDetail.firstName + ' ' + this.addressDetail.lastName
        }
    },
    created(){
        console.log('address',this.addressDetail);
    }
}
</script>

<style scoped>
.me-container{
    border: 2px solid #16d998;
    border-radius: 2.5px;
    padding: .5rem .7rem;
}
div{
    color: #5a5e76 !important;
}
</style>

