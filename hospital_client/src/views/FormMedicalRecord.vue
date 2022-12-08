<script>
import SidebarDoctor from '../components/SidebarDoctor.vue'
import { useCounterStore } from '../stores/counter';
import { mapActions } from 'pinia';

export default {
    data() {
        return {
            patient_name: ''
        }
    },
    components: {
        SidebarDoctor
    },
    methods: {
        ...mapActions(useCounterStore, ['sendImage']),
        setImageToSend(event) {
            this.imageToSend = event.target.files[0];
            console.log(event.target.files[0]);
        },
        sendData() {
            this.sendImage(this.imageToSend, this.patient_name)
        }
    }
}
</script>

<template>
    <SidebarDoctor />
    <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
            <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">Add Medical Record</h5>
                <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <section class="bg-gray-50 dark:bg-gray-900 pt-10 pb-20">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
                    <div class="text-center">
                        <h2 class="mt-5 text-3xl font-bold text-gray-900">
                            File Upload!
                        </h2>
                        <p class="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
                    </div>
                    <form @submit.prevent="sendData">
                        <div class="grid grid-cols-1 space-y-2">
                            <label class="text-sm font-bold text-gray-500 tracking-wide">Title</label>
                            <input v-model="patient_name"
                                class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                                type="" placeholder="Patient Name">
                        </div>
                        <div class="grid grid-cols-1 space-y-2">
                            <label class="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                            <div class="flex items-center justify-center w-full">
                                <label
                                    class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                    <div
                                        class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">

                                        <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                            <img class="has-mask h-36 object-center"
                                                src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                                alt="freepik image">
                                        </div>
                                        <p class="pointer-none text-gray-500 "><span class="text-sm">Drag and
                                                drop</span> files here <br /> or <a href="" id=""
                                                class="text-blue-600 hover:underline">select a file</a> from your
                                            computer</p>
                                    </div>
                                    <!-- <input type="file" class="hidden"> -->
                                    <input type="file" name="something" id="something" v-on:change="setImageToSend" />
                                </label>
                            </div>
                        </div>
                        <p class="text-sm text-gray-300">
                            <span>File type: doc,pdf,types of images</span>
                        </p>
                        <div>
                            <button type="submit"
                                class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                                Upload
                            </button>
                        </div>
                    </form>
                    <!-- <form action="/profile" method="post" enctype="multipart/form-data">
                        <input type="file" name="avatar" />
                        <input type="submit" value="Submit">
                    </form> -->
                </div>
            </div>
        </div>
    </section>
</template>

<!-- <script>
import axios from "axios";

const baseUrl = "http://127.0.0.1:3000/profile"

export default {
    data() {
        return {
            imageToSend: undefined,
        };
    },
    methods: {
        sendData() {
            console.log(this.imageToSend, '>> SEND DATA')
        },
        async kirimData() {
            // const formData = new FormData();

            // formData.append("gambar", this.imageToSend);

            // const response = await axios.post(`${baseUrl}`, formData);
            // const response = await axios({
            //     url: baseUrl + '/profile',
            //     method: 'post',
            //     headers: {
            //         access_token: localStorage.access_token
            //     },
            //     formData: formData
            // })
            // console.log(response.data);
        },
        setImageToSend(event) {
            this.imageToSend = event.target.files[0];
            console.log(event.target.files[0]);
        },
    },
};
</script>

<template>
    <form @submit.prevent="kirimData">
        <input type="file" name="something" id="something" v-on:change="setImageToSend" />
        <button type="submit">Kirim Gambar</button>
    </form>
</template> -->