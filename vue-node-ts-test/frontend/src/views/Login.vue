<template>
  <div id="app">
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <div class="box">
                <div class="field">
                  <label for class="label">Login</label>
                  <div class="control">
                    <input type="text" placeholder="Login" class="input" required />
                  </div>
                </div>
                <div class="field">
                  <label for class="label">Password</label>
                  <div class="control">
                    <input type="password" placeholder="*******" class="input" required />
                  </div>
                </div>
                <div class="field">
                  <button class="button is-success" @click="logar">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
 
import axios from 'axios';
export default {
  name: "app",
  data() {
    return {
      msg: "Hello, World!" 
    };
  },
  methods : {
      logar(){

      }
  },
   
  created() {
 


   axios.get(`http://localhost:3000/pessoa`)
    .then(response => {
      // JSON responses are automatically parsed.
     alert(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
 
</script>

<style>
</style>