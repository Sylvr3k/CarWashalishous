<template>
  <div class="contact-container">
    <h1>Contact Us</h1>
    <p>If you have any questions or need more information, feel free to reach out using the form below:</p>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" rows="5" required></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here (e.g., send data to server or show an alert)
      console.log('Form submitted:', this.form);
      alert('Thank you for contacting us!');
      
      // Clear the form after submission
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 35px;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 8px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 100;
  font-family: 'Century Gothic';
}

p {
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Century Gothic';
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-weight: 100;
  font-family: 'Century Gothic';
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  display: inline-block;
  background-color: #f8f9fa;
  color: #000;
  padding: 20px 30px;
  font-size: 16px;
  border: 1px #cccccc solid;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
}

button:hover{
  background-color: #dddee0;
}
</style>