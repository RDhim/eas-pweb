<template>
    <div>
      <h1>Check Status</h1>
      <form @submit.prevent="checkStatus">
        <div class="input-container">
          <label for="email">Enter Email:</label>
          <input v-model="email" type="email" id="email" placeholder="Enter your email">
          <button type="submit">Check Status</button>
        </div>
      </form>
  
      <div v-if="status !== null">
        <h2>Status:</h2>
        <p>{{ status }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        status: null,
      };
    },
    methods: {
        checkStatus() {
            
        fetch(`http://localhost:3001/api/Data?Email=${this.email}`)
            .then(response => response.json())
            .then(data => {
            if (data.docs.length > 0) {
                const registration = data.docs[0];
                this.status = registration.Status;
            } else {
                this.status = "Email not found";
            }
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
  