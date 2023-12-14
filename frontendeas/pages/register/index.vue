<template>
    <div>
      <h1>Simple Form</h1>
      <form>
        <div class="input-container">
        <div>
          <label for="name">Name:</label>
          <input v-model="name" id="name" placeholder="Enter your name">
        </div>
  
        <div>
          <label for="email">Email:</label>
          <input v-model="email" id="email" placeholder="Enter your email">
        </div>
  
        <div>
          <label for="school">School:</label>
          <input v-model="school" id="school" placeholder="Enter your school name">
        </div>
      </div>
    </form>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          school: '',
        }
      };
    },
    methods: {
      submitForm() {
        fetch('http://localhost:3001/api/registration/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.formData = {
            name: '',
            email: '',
            school: '',
          };
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
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
  