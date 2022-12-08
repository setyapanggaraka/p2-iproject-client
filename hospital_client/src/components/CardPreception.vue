<script>
export default {
    props: ['item'],
    methods: {
        toPrescriptionDetail(id) {
            this.$router.push(`/prescription-detail/${id}`)
        }
    }
}
</script>

<template>
    <div class="w-full md:w-1/2 xl:w-1/3 px-4">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
            <img :src="item.Medicine.photoUrl" alt="image" class="w-full" />
            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                    <a href="javascript:void(0)" class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                        {{ item.User.Doctor.name }}
                    </a>
                </h3>
                <p class="text-base text-body-color leading-relaxed">
                    Specialization: {{ item.User.Doctor.specialization }}
                </p>
                <p class="text-base text-body-color leading-relaxed">
                    SIP Number: {{ item.User.Doctor.sip_number }}
                </p>
                <p class="text-base text-body-color leading-relaxed">
                    Medicine Name: {{ item.Medicine.name }}
                </p>
                <p class="text-base text-body-color leading-relaxed">
                    Medicine Amount: {{ item.Medicine.amount }}
                </p>
                <p class="text-base text-body-color leading-relaxed mb-7">
                    User Description: {{ item.use_description }}
                </p>
                <a @click.prevent="toPrescriptionDetail(item.id)" href="javascript:void(0)" class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     ">
                    View Details
                </a>
            </div>
        </div>
    </div>
</template>