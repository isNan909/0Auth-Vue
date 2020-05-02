<template>
  <div class="home">
    <h1>This is an home page</h1>
    <div>
      <div v-if="!this.isLogged">
        <small>Not Loged In?</small><br /><button
          type="button"
          @click="loginClick()"
        >
          Login
        </button>
      </div>
      <div v-else>
        <small>You are logged In</small>
        <button @click="logOut()">LogOut</button>
      </div>
    </div>
  </div>
</template>
<script>
import { login, isLogged, logUserOut } from '../utils/auth';
export default {
  name: 'Home',
  components: {},
  methods: {
    loginClick() {
      login();
    },
    logOut() {
      this.isLogged = false;
      logUserOut();
    }
  },
  data: () => {
    return {
      isLogged: isLogged()
    };
  }
};
</script>
