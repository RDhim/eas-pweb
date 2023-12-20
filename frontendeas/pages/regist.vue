<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="submitForm">
        <div class="input-container">
        <div>
          <label for="Nama">Name:</label>
          <input v-model="formData.Nama" id="Nama" placeholder="Enter your name">
        </div>
  
        <div>
          <label for="Email">Email:</label>
          <input v-model="formData.Email" type="email" id="Email" placeholder="Enter your email">
        </div>
  
        <div>
          <label for="Asal_Sekolah">School:</label>
          <input v-model="formData.Asal_Sekolah" id="Asal_Sekolah" placeholder="Enter your school name">
        </div>

        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          Nama: "",
          Email: "",
          Asal_Sekolah: "",
          Status: "waiting",
          Tanggal_Pendaftaran: "",
        },
      };
    },
    methods: {
      submitForm() {
        this.formData.Tanggal_Pendaftaran = new Date().toISOString();
  
        fetch('http://localhost:3001/api/Data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.formData = {
              Nama: '',
              Email: '',
              AsalSekolah: '',
              Status: 'waiting',
              TanggalPendaftaran: '',
            };
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .input-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  </style>
  