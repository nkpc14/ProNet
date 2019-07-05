<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span style="height: 4rem" class="input-group-text">{{valuePassed}}</span>
            </div>
            <div class="custom-file" >
                <input  type="file" class="custom-file-input" id="inputGroupFile01">
                <label style="height: 4rem" class="custom-file-label" for="inputGroupFile01"></label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UploadButton",
        props:{
            valuePassed:String,
            link:String
        }
    }
</script>

<style scoped lang="scss">

</style>