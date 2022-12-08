import { defineStore } from "pinia";
import axios from "axios";
export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
      // baseUrl: "https://hospitalapiv3-production.up.railway.app",
      baseUrl: "http://127.0.0.1:3000",
      doctors: [],
      medicines: [],
      images: "",
      prescription: [],
      doctorPrescription: [],
      prescriptionDetail: {},
      medicalRecords: [],
    };
  },
  actions: {
    async login(userData) {
      // console.log(userData, ">> STORE");
      try {
        const { data } = await axios({
          url: this.baseUrl + "/login",
          method: "post",
          data: {
            email: userData.email,
            password: userData.password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        if (data.role === "doctor") {
          this.router.push("/doctor-medical-record");
        } else if (data.role === "admin") {
          this.router.push("/doctor");
        }
        console.log(data, ">> DATA LOGIN");
      } catch (err) {
        console.log(err);
      }
    },
    async register(userData) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/register",
          method: "post",
          data: {
            username: userData.username,
            email: userData.email,
            password: userData.password,
            role: userData.role,
          },
        });
        console.log(data, ">> DATA REGISTER");
        this.router.push("login");
      } catch (err) {
        console.log(err);
      }
    },
    logout() {
      localStorage.clear();
      this.router.replace("/login");
    },
    async fetchDoctor() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/doctors",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.doctors = data;
        console.log(data, ">>> DATA DOCTOR");
      } catch (err) {
        console.log(err);
      }
    },
    async fetchMedicines() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/medicines",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.medicines = data;
        console.log(this.medicines, ">>> MEDICINES");
      } catch (err) {
        console.log(err);
      }
    },
    async addPreception(id, newPreception) {
      try {
        console.log(newPreception, "STORE");
        const { data } = await axios({
          url: this.baseUrl + `/prescriptions/${id}`,
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            patient_name: newPreception.patient_name,
            patient_age: newPreception.patient_age,
            patient_address: newPreception.patient_address,
            use_description: newPreception.use_description,
            amount: newPreception.amount,
            dose: newPreception.dose,
          },
        });
        this.router.push("/doctor-preception");
        this.fetchMedicines();
        this.fetchPrescription();
        console.log(data, ">> DI STORE sukses");
      } catch (err) {
        console.log(err);
      }
    },
    async sendImage(sendImage, name) {
      // console.log(sendImage, ">> STORE");
      const formData = new FormData();
      formData.append("gambar", sendImage);
      formData.append("patientName", name);
      try {
        const { data } = await axios({
          url: this.baseUrl + "/uploads",
          method: "post",
          data: formData,
        });
        console.log(data);
        this.fetchMedicalRecord();
        this.router.push("/doctor-medical-record");
      } catch (err) {
        console.log(err);
      }
    },
    async fetchPrescription() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/prescriptions",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.prescription = data;
        console.log(this.prescription, ">> PRESCRIPTION");
      } catch (err) {
        console.log(err);
      }
    },
    async fetchPrescriptionById(id) {
      console.log(id, ">> ID DAPAT");
      try {
        const { data } = await axios({
          url: this.baseUrl + "/prescriptions/" + id,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.prescriptionDetail = data;
        console.log(this.prescriptionDetail, ">> PRESCRIPTION");
      } catch (err) {
        console.log(err);
      }
    },
    async addMedicine(newMedicine) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/medicines",
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            name: newMedicine.name,
            amount: newMedicine.amount,
            dose: newMedicine.dose,
            photoUrl: newMedicine.photoUrl,
          },
        });
        console.log(data, "Success");
        this.fetchMedicines();
        this.router.push("/medicine");
      } catch (err) {
        console.log(err);
      }
    },
    async fetchDoctorPrescription() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/doctor-prescriptions",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.doctorPrescription = data;
        console.log(this.doctorPrescription, ">> PRESCRIPTION");
      } catch (err) {
        console.log(err);
      }
    },
    async handleGoogle(response) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/google-sign-in",
          headers: {
            google_oauth_token: response.credential,
          },
        });
        // Swal.fire("Login Success");
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/doctor");
      } catch (err) {
        console.log(err, ">> EROR GOGLE");
      }
    },
    async fetchMedicalRecord() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/medicalRecords",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.medicalRecords = data;
        console.log(this.medicalRecords, ">>> DATANYA");
      } catch (err) {
        console.log(err);
      }
    },
    async updatePrescriptionStatus(id) {
      try {
        await axios({
          url: this.baseUrl + "/prescriptions/" + id,
          method: "patch",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchDoctorPrescription();
      } catch (err) {
        console.log(err);
      }
    },
    async paymentGateway(id) {
      // console.log(id, ">> DI STORE PAYMENT");
      try {
        const { data } = await axios({
          url: this.baseUrl + "/generate-midtrans-token/" + id,
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        const cb = this.updatePrescriptionStatus;
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            cb(id);
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
