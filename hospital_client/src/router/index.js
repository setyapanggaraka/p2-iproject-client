import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import HomeDoctorPage from "../views/HomeDoctorPage.vue";
import HomeMedicinePage from "../views/HomeMedicinePage.vue";
import HomePreception from "../views/HomePreception.vue";
import ProfilePage from "../views/ProfilePage.vue";
import MedicalRecords from "../views/MedicalRecords.vue";
import DoctorPreception from "../views/DoctorPreception.vue";
import FormPreception from "../views/FormPreception.vue";
import DoctorMedicalRecord from "../views/DoctorMedicalRecord.vue";
import FormMedicalRecord from "../views/FormMedicalRecord.vue";
import DoctorProfile from "../views/DoctorProfile.vue";
import FormMedicine from "../views/FormMedicine.vue";
import DoctorMedicine from "../views/DoctorMedicine.vue";
import PrescriptionDetail from "../views/PrescriptionDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/doctor",
      name: "doctor",
      component: HomeDoctorPage,
    },
    {
      path: "/medicine",
      name: "medicine",
      component: HomeMedicinePage,
    },
    {
      path: "/preception",
      name: "preception",
      component: HomePreception,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/medical-record",
      name: "medical-record",
      component: MedicalRecords,
    },
    {
      path: "/doctor-preception",
      name: "doctor-preception",
      component: DoctorPreception,
    },
    {
      path: "/form-preception/:id",
      name: "form-preception",
      component: FormPreception,
    },
    {
      path: "/doctor-medical-record",
      name: "doctor-medical-record",
      component: DoctorMedicalRecord,
    },
    {
      path: "/form-medical-record",
      name: "form-medical-record",
      component: FormMedicalRecord,
    },
    {
      path: "/doctor-profile",
      name: "doctor-profile",
      component: DoctorProfile,
    },
    {
      path: "/form-medicine",
      name: "form-medicine",
      component: FormMedicine,
    },
    {
      path: "/doctor-medicine",
      name: "doctor-medicine",
      component: DoctorMedicine,
    },
    {
      path: "/prescription-detail/:id",
      name: "prescription-detail",
      component: PrescriptionDetail,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.access_token;
  if (to.name === "login" && isLoggedIn) next({ name: "home" });
  else if (to.name !== "login" && !isLoggedIn) next({ name: "login" });
  else next();
});

export default router;
