<template>
    <div class="input-container">
      <h1>Registration</h1>
  
      <div class="input-group">
        <label for="name">Name:</label>
        <input v-model="name" id="name" placeholder="Enter your name">
      </div>
  
      <div class="input-group">
        <label for="email">Email:</label>
        <input v-model="email" id="email" placeholder="Enter your email">
      </div>
  
      <div class="input-group">
        <label for="school">School:</label>
        <input v-model="school" id="school" placeholder="Enter your school name">
      </div>
  
      <button @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        school: '',
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted with data:', {
          name: this.name,
          email: this.email,
          school: this.school,
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
  
  .input-group {
    margin-bottom: 15px;
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
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  