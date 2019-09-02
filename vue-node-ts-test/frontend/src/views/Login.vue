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
                    <input
                      type="text"
                      placeholder="Login"
                      class="input"
                      v-model="usuario.login"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <label for class="label">Password</label>
                  <div class="control">
                    <input
                      type="password"
                      placeholder="*******"
                      class="input"
                      v-model="usuario.senha"
                      required
                    />
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
import { login } from "../services/Usuario";

export default {
  name: "login",
  data() {
    return {
      usuario: { login: "joaoapm", senha: "123" }
    };
  },
  methods: {
    logar() {
      login({ login: this.usuario.login, senha: this.usuario.senha })
        .then(response => {
          if (response.data.login) this.$router.push("/home");
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<style>
</style>