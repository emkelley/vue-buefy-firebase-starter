<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <h1 class="title has-text-centered">Login</h1>
            <b-field label="Email">
              <b-input v-model="email"></b-input>
            </b-field>
            <b-field label="Password">
              <b-input type="password" v-model="password"></b-input>
            </b-field>
            <br />
            <b-button
              tag="router-link"
              to="/"
              type="is-primary"
              size="is-medium"
              expanded
            >
              Login
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data: () => ({
    email: undefined,
    password: undefined,
  }),
};
</script>
