<template>
  <div class="home">
    <h1>This is an home page</h1>
    <div>
      <small>Not Logged?</small
      ><br/><button type="button" @click="loginClick()">Login</button>
    </div>
  </div>
</template>
<script>
import { login } from '../utils/auth';
export default {
  name: 'Home',
  components: {},
  methods: {
    loginClick() {
      login();
    }
  }
};
</script>
