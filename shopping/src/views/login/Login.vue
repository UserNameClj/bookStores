<template>
  <div class="login">
    <div class="error-tip"></div>
    <div class="user">
      <van-cell-group>
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
          left-icon="closed-eye"
          placeholder="请输入密码"
        />
      </van-cell-group>
    </div>
    <div class="login-btn">
      <van-button
        type="primary"
        round
        size="large"
        :disabled="isForbidLogin"
        @click="loginUser()"
      >{{loginBtn}}</van-button>
    </div>
    <div class="find-user-box">
      <van-row>
        <van-col span="12">{{registUser}}</van-col>
        <van-col span="12">{{forgetPassword}}</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import qs from "qs";

export default {
  name: "Login",
  data() {
    return {
      msg: "登陆页面",
      username: "",
      paasword: "",
      loginBtn: "登录",
      isFocus: true,
      registUser: "注册用户",
      forgetPassword: "忘记密码",
      usernameError:"用户或密码有误"
    };
  },
  components: {},
  methods: {
    _loginUser() {
      Axios.post("http://localhost:3000/login", { user: this.username,paasword:this.paasword }).then(
        res => {
          var data = res.data;
          if (data.data[0]) {
            window.localStorage.token = data.XToken;
          } else {
            this.$toast({
              message: this.usernameError
            });
            this.paasword = '';
          }
        },
        error => {
          console.log(error, 1);
        }
      );
    },
    loginUser() {
      this._loginUser();
    }
  },
  computed: {
    isForbidLogin() {
      if (this.username === "" || this.paasword === "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.login {
  margin: 3.125rem 0rem;
}
.login-btn {
  margin: 2.6rem 0;
  text-align: center;
}
.find-user-box {
  color: #f70202;
  font-size: 0.825rem;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>

