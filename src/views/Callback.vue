<template>
  <div>
    <h1>Callback</h1>
  </div>
</template>
<script>
import { handleAuth } from '../utils/auth';
export default {
  name: 'Callback',
  beforeMount() {
    handleAuth(error => {
      if (error) {
        console.log(error);
        return;
      }
      console.log('logged in');
      this.$router.push('/private');
    });
  }
};
</script>
