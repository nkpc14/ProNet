<template>
    <div>
        <div data-aos="zoom-in-left"
             data-aos-offset="100"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true" class="header-user">
            <a href=""><img src="../../assets/Add Button.png" alt=""></a>
            <div class="header-user--profile-bar">
                <img  :src="userProfilePic" alt="">
                <p>{{username}}</p>
            </div>
        </div>

        <div class="main-project-upload">
            <div class="project-upload">
                <div class="project-upload__left">
                    <div>
                        <label>Project Title</label>
                        <input  id="projectTitle" type="text" v-model="projectTitle" >
                    </div>

                    <div>
                        <label>Status</label>
                        <label class="switch">
                            <input type="checkbox" v-model="status">
                            <span class="slider round"></span>
                        </label>
                    </div>

                    <div>
                        <label>Amount</label>
                        <input type="text" v-model="amount">
                    </div>

                    <div>
                        <label>Paid</label>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round" v-model="paid"></span>
                        </label>
                    </div>

                    <div>
                        <label>Project Description</label>
                        <textarea name="description" id="" cols="30" rows="10" v-model="description"></textarea>
                    </div>
                </div>



            <Divider ></Divider>


            <div class="project-upload__right">

                <div>
                    <label>Required Skills</label>
                    <div id="requiredSkills">
                        <AddButton class="addButton"></AddButton>
                    </div>
                </div>

            <div id="holder">
                <UploadButton valuePassed="Upload File" link="" v-model="file"></UploadButton>
                <UploadButton valuePassed="Upload Image" link="" v-model="image"></UploadButton>
            </div>
                <div>
                    <label>Experience</label>
                    <input type="text" v-model="experience">
                </div>
                <div class="submit__holder">
                    <a class="submit__holder-button" href="" @click="submitForm">Submit</a>
                </div>

            </div>
            </div>

        </div>
    </div>


</template>

<script>
    import Divider from '../../components/Plugins/Divider'
    import AddButton from '../../components/Plugins/AddButton'
    import UploadButton from '../../components/Plugins/UploadButton'
    import axios from 'axios'
    export default {
        name: "HireProjectUpload",
        components:{
            Divider,
            AddButton,
            UploadButton
        },
        data(){
            return{
                username: 'Yaduvanshi Nitish Kumar',
                userProfilePic: '../assets/contact_photo.png',
                projectTitle:'',
                status:false,
                amount:'',
                paid:false,
                description:'',
                requiredSkills:[],
                file:'',
                image:'',
                experience:''
            }
        },
        created(){
            axios.get('').then(response=>{
                this.username = response.data.username
                this.userProfilePic = response.data.userProfilePic
            }).catch(err =>{
                console.log(err)
            })
        },
        methods:{
            submitForm(){
                let formData = {
                    projectTitle: this.projectTitle,
                    status: this.status,
                    amount: this.amount,
                    paid:this.paid,
                    description: this.description,
                    file: this.file,
                    image: this.image,
                    experience:this.experience,
                    requiredSkills: this.requiredSkills
                };

                axios.post('',formData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                }).then(response =>{
                    console.log(response)
                }).catch(err =>{
                    console.log(err)
                })
                console.log("Testing")
            }
        }
    }
</script>

<style scoped lang="scss">
    @media only screen and (max-width:920px ) {
        .main-project-upload{
            display:flex;
            justify-content: center;
            align-items: center;
            width: auto;
            height: auto;
            flex-wrap: wrap;
            /*background-color: red;*/
            flex-direction: row;
            margin-bottom: 5rem;
        }


        .project-upload{
            background-color: #fff;
            margin-top: 10rem;
            width: 88vw;
            height: auto;
            box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 2rem;
            display: flex;
            flex-direction: column;
            &__left{
                /*background-color: green;*/
                display: flex;
                flex-direction: column;
                padding: 4vw;
                font-size: 1.8rem;
                font-family: Adobe Fan Heiti Std;
                letter-spacing: 0.3rem;
                color: rgba(#000,0.3);
                & div{
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    margin-bottom: 0.8rem;

                    & input{
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border: none;
                        height: 3rem;
                        outline: none;
                        padding: 1rem;
                        font-size: inherit;
                        width: 90%;
                    }
                    & textarea{
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border: none;
                        width: 90%;
                        outline: none;
                        padding: 1rem;
                        font-size: inherit;
                    }

                    & #projectTitle{
                        width: 90%;
                    }
                }
            }


            &__right{
                /*background-color: red;*/
                padding: 4vw;
                display: flex;
                flex-direction: column;
                font-size: 1.8rem;
                font-family: Adobe Fan Heiti Std;
                letter-spacing: 0.3rem;
                color: rgba(#000,0.3);

                & div{
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    margin-bottom: 0.8rem;
                    position: relative;
                    & #requiredSkills{
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border: none;
                        height: 15rem;
                        width: 90%;
                        outline: none;
                        padding: 1rem;
                        font-size: inherit;
                    }

                    & .addButton{
                        position: absolute;
                        bottom: -1rem;
                        right: 1rem;
                    }
                }
                & #holder{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    /*padding: 2rem;*/
                    margin-top: 5rem;
                }

                & input{
                    box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                    border: none;
                    height: 3rem;
                    outline: none;
                    padding: 1rem;
                    font-size: inherit;
                    width: 90%;
                }

                .submit__holder{
                    /*background-color: red;*/
                    height: 100%    ;
                    &-button{
                        background-color: #1C6B99;
                        width: 100%;
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border-radius: 5rem;
                        color: #fff;
                        font-size: 1.8rem;
                        height: 6rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 4rem;
                    }
                }
            }
        }



        .header-user{
            position: absolute;
            top: 3.5rem;
            right: 10rem;
            display: none;
        }
    }


    @media only screen and (max-width:1182px ) and (min-width:919.99px ) {
        .main-project-upload{
            display:flex;
            justify-content: center;
            align-items: center;
            width: auto;
            height: auto;
            flex-wrap: wrap;
            /*background-color: red;*/
            flex-direction: row;
            margin-left: 8rem;
        }


        .project-upload{
            background-color: #fff;
            margin-top: 10rem;
            width: 88vw;
            height: auto;
            box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 2rem;
            display: flex;
            &__left{
                /*background-color: green;*/
                display: flex;
                flex-direction: column;
                padding: 4vw;
                font-size: 1.8rem;
                font-family: Adobe Fan Heiti Std;
                letter-spacing: 0.3rem;
                color: rgba(#000,0.3);
                & div{
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    margin-bottom: 0.8rem;

                    & input{
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border: none;
                        height: 3rem;
                        outline: none;
                        padding: 1rem;
                        font-size: inherit;
                    }
                    & textarea{
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border: none;
                        width: 30vw;
                        outline: none;
                        padding: 1rem;
                        font-size: inherit;
                    }

                    & #projectTitle{
                        width: 30vw;
                    }
                }
            }


            &__right{
                /*background-color: red;*/
                padding: 4vw;
                display: flex;
                flex-direction: column;
                font-size: 1.8rem;
                font-family: Adobe Fan Heiti Std;
                letter-spacing: 0.3rem;
                color: rgba(#000,0.3);

                & div{
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    margin-bottom: 0.8rem;
                    position: relative;
                    & #requiredSkills{
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border: none;
                        height: 15rem;
                        width: 30vw;
                        outline: none;
                        padding: 1rem;
                        font-size: inherit;
                    }

                    & .addButton{
                        position: absolute;
                        bottom: -1rem;
                        right: 1rem;
                    }
                }
                & #holder{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    /*padding: 2rem;*/
                    margin-top: 5rem;
                }

                & input{
                    box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                    border: none;
                    height: 3rem;
                    outline: none;
                    padding: 1rem;
                    font-size: inherit;
                }

                .submit__holder{
                    /*background-color: red;*/
                    height: 100%    ;
                    &-button{
                        background-color: #1C6B99;
                        width: 20rem;
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border-radius: 5rem;
                        color: #fff;
                        font-size: 1.8rem;
                        height: 4rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: 50%;
                        left: 40%;
                        transform: translate(-50%,-50%);
                    }
                }
            }
        }



        .header-user{
            position: absolute;
            top: 3.5rem;
            right: 10rem;
            display: flex;

            &--profile-bar{
                & img{
                    float: left;
                }
                & p{
                    font-size: 1.6rem;
                    margin-top: 1.5rem;
                    margin-right: 1rem;
                    color: rgba(#fff,0.6);
                }
                width: 30rem;
                background-color: rgba(grey,0.5);
                height: 4.9rem;
                border-radius: 5rem;
                margin-left: 4rem;
            }
        }

    }


    @media only screen and (min-width: 1182.1px) {
        .main-project-upload{
            display:flex;
            justify-content: center;
            align-items: center;
            width: auto;
            height: auto;
            flex-wrap: wrap;
            /*background-color: red;*/
            flex-direction: row;
            margin-left: 8rem;
        }


        .project-upload{
            background-color: #fff;
            margin-top: 10rem;
            width: auto;
            height: auto;
            box-shadow: rgba(#1C6B99,0.2) 0 0.2rem 2rem;
            display: flex;
            &__left{
                /*background-color: green;*/
                display: flex;
                flex-direction: column;
                padding: 3vw;
                font-size: 1.8rem;
                font-family: Adobe Fan Heiti Std;
                letter-spacing: 0.3rem;
                color: rgba(#000,0.3);
                & div{
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    margin-bottom: 0.8rem;

                    & input{
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border: none;
                        height: 3rem;
                        outline: none;
                        padding: 1rem;
                        font-size: inherit;
                    }
                    & textarea{
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border: none;
                        width: 30vw;
                        outline: none;
                        padding: 1rem;
                        font-size: inherit;
                    }

                    & #projectTitle{
                        width: 30vw;
                    }
                }
            }


            &__right{
                /*background-color: red;*/
                padding: 5vw;
                display: flex;
                flex-direction: column;
                font-size: 1.8rem;
                font-family: Adobe Fan Heiti Std;
                letter-spacing: 0.3rem;
                color: rgba(#000,0.3);

                & div{
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    margin-bottom: 0.8rem;
                    position: relative;
                    & #requiredSkills{
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border: none;
                        height: 15rem;
                        width: 30vw;
                        outline: none;
                        padding: 1rem;
                        font-size: inherit;
                    }

                    & .addButton{
                        position: absolute;
                        bottom: -1rem;
                        right: 1rem;
                    }
                }
                & #holder{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    /*padding: 2rem;*/
                    margin-top: 5rem;
                }

                & input{
                    box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                    border: none;
                    height: 3rem;
                    outline: none;
                    padding: 1rem;
                    font-size: inherit;
                }

                .submit__holder{
                    /*background-color: red;*/
                    height: 100%    ;
                    &-button{
                        background-color: #1C6B99;
                        width: 20rem;
                        box-shadow: rgba(#1C6B99,0.2) 0 0.5rem 1rem;
                        border-radius: 5rem;
                        color: #fff;
                        font-size: 1.8rem;
                        height: 4rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                    }
                }
            }
        }



        .header-user{
            position: absolute;
            top: 3.5rem;
            right: 10rem;
            display: flex;

            &--profile-bar{
                & img{
                    float: left;
                }
                & p{
                    font-size: 1.6rem;
                    margin-top: 1.5rem;
                    margin-right: 1rem;
                    color: rgba(#fff,0.6);
                }
                width: 30rem;
                background-color: rgba(grey,0.5);
                height: 4.9rem;
                border-radius: 5rem;
                margin-left: 4rem;
            }
        }

    }







    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #1C6B99;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #1C6B99;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

</style>