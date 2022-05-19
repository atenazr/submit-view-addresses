<template>
    
    <div>

        <router-link to="/viewAddresses">مشاهده همه آدرس ها</router-link>

        <router-link to="newAddress">ثبت آدرس جدید</router-link>


    </div>



</template>

<script>

export default {

}
</script>

<style scoped>
div{
    padding: 1.2rem;
    width: 100%;
    text-align: center;
    background-color: #16d998;
}
div a{
    margin: 0 1rem;
    color: #f7f7f7;;
    text-decoration: none;
    font-size: 1.1rem;
    transition: .3s ease-in-out;
}
a:hover,
a.router-link-exact-active{
    color: #5a5e76;
}
</style>
