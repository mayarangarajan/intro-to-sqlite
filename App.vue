<template>
    <div id="app">
      <h1>User Information</h1>
      
      <div v-if="user">
        <p><strong>First Name:</strong> {{ user.first_name }}</p>
        <p><strong>Last Name:</strong> {{ user.last_name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
      
   <!-- post?? --> 
      <div>
        <button @click="createUser">Create New User</button>
        <p v-if="newUserId">New User ID: {{ newUserId }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null, // store fetched user data
        newUserId: null, // store the ID of the newly created user
      };
    },
    methods: {
      // method to fetch user data by ID (for ID 3 in this case)
      //get ??
      async fetchUserById(id) {
        try {
          // replace this URL with the actual API endpoint
          const response = await fetch(`http://localhost:4000/user/${id}`);
  
          // check if the response is successful
          if (!response.ok) {
            throw new Error(`http error. status: ${response.status}`);
          }
  
          // parse the JSON data from the response
          const data = await response.json();
          
          // store the fetched data into the user variable
          this.user = data;
        } catch (error) {
          // handle errors that might occur
          console.error('error fetching user:', error);
        }
      },
  
      // method to create a new user
      async createUser() {
        try {
          // data for the new user (you can replace this with input fields for dynamic data)
          const newUser = {
            first_name: "maya",
            last_name: "rangarajan",
            email: "maya_rangarajan@horacemann.com",
            id: 3,
          };
  
          // send POST request to create the user
          const response = await fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          });
  
          // check if the response is successful
          if (!response.ok) {
            throw new Error(`http error. status: ${response.status}`);
          }
  
          // parse the JSON response to get the new user ID
          const data = await response.json();
  
          // store the new user ID
          this.newUserId = data.id;
        } catch (error) {
          // bandle any errors during user creation
          console.error('error creating user:', error);
        }
      },
    },
    created() {
      // fetch the user with ID 3 when the component is created
      this.fetchUserById(3);
    },
  };
  </script>
  
  