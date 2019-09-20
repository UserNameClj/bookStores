<template>
  <div class="login">
    <div class="user">
      <van-cell-group >
        <van-field
          v-model="username"
          clearable
          left-icon="contact"
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field 
        v-model="paasword" 
        type="password" 
        label="密码" 
        left-icon=closed-eye
        placeholder="请输入密码" />
      </van-cell-group>
    </div>
    <div class="login-btn">
      <van-button 
      type="primary" 
      round size="large" 
      :disabled="isForbidLogin" 
      @click="loginUser()">{{loginBtn}}</van-button>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      msg: "登陆页面",
      username: "",
      paasword: "",
      loginBtn: "登录",
      isFocus: true
    };
  },
  components: {},
  methods: {
    _loginUser(){
      Axios.post('http://localhost:3000/login').then(res=>{
        console.log(res)
      },error=>{
        console.log(error,1)
      })
    },
    loginUser(){
      this._loginUser()
    }
  },
  computed: {
    isForbidLogin() {
      if (this.username === "" || this.paasword === "") {
        return  true;
      } else {
         return false;
      }
    }
  },
};
</script>

<style scoped>
.login {
  margin: 3.125rem 0rem;
}
.login-btn {
  margin: 2.5rem 0;
  text-align: center;
}
</style>

