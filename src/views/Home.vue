<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <h1 class="title">Vue + Buefy + Firebase Starter Project</h1>
            <div class="buttons is-centered">
              <router-link to="/about" class="button is-primary is-expanded">
                /about
              </router-link>
              <router-link to="/login" class="button is-primary">
                /login
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useLoadUsers, deleteUser } from '@/firebase'

export default {
  name: "Home",
  components: {},
};
</script>
