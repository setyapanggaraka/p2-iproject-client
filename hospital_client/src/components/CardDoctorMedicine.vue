<script>
export default {
    props: ['medicine'],
    methods: {
        selectData(id) {
            this.$router.push(`/form-preception/${id}`)
        }
    }
}
</script>

<template>
    <div class="bg-gray-100 flex flex-col justify-center">
        <div class="relative m-3 flex flex-wrap mx-auto justify-center">
            <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                    <img class="h-40 rounded-2xl w-full object-cover"
                        src="https://domf5oio6qrcr.cloudfront.net/medialibrary/4977/3687af9d-7e14-43ee-999b-7c9f3a341b9d.jpg">
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                    <div>
                        <p class="text-lg font-semibold text-gray-900 mb-0">{{ medicine.name }}</p>
                        <p class="text-md text-gray-800 mt-0">Amount: {{ medicine.amount }}</p>
                        <p class="text-md text-gray-800 mt-0">Dose: {{ medicine.dose }} mg</p>
                    </div>
                </div>
                <div class="flex pb-6 space-x-2">
                    <button @click.prevent="selectData(medicine.id)" type="button"
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Select
                        Medicine</button>
                </div>
            </div>
        </div>
    </div>
</template>