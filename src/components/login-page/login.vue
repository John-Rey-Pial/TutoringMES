<template>
  <div style="display: flex" class="login-frame">
    <div class="side-disp">
      <div>
        <div class="message">
          <img
            src="../../assets/e3 logo-nt.png"
            style="margin-top: 100px; margin-left: 70px"
          />
          <v-spacer></v-spacer>
        </div>
      </div>
      <div>
        <div class="overlay"></div>
        <img src="../../assets/back-photo.jpg" />
      </div>
    </div>
    <div class="form-disp">
      <section><strong style="font-size: 25px">Sign In</strong></section>
      <v-spacer> </v-spacer>
      <section style="font-size: 17px">
        <v-spacer></v-spacer>
        <label for="">Username</label>
        <input type="email" required />
      </section>
      <section style="font-size: 17px">
        <v-spacer></v-spacer>
        <label for="">Password</label>
        <input type="password" required />
      </section>
      <section class="submit">
        <button>Login</button>
      </section>
      <span class="sign-up">Don't have an account? <strong style="color: purple">Sign Up</strong></span>
      <v-spacer></v-spacer>
    </div>
  </div>
</template>



<style scoped>
.login-frame {
  position: absolute;
  margin-top: 10%;
  margin-left: 25%;
  height: 26rem;
  width: 50%;
  background-color: white;
  box-shadow: 2px 2px 10px gray;
  border-radius: 5px;
}

.side-disp {
  color: black;
  border-radius: 5px 0 0 5px;
}
.overlay {
  position: absolute;
  background-image: -webkit-linear-gradient(
    rgb(235, 136, 238),
    rgb(168, 227, 238)
  );
  width: 40%;
  height: 100%;
  opacity: 0.9;
}
.message {
  position: absolute;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  z-index: 1;
  color: rgb(15, 15, 15);
}

.form-disp {
  width: 100%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}
.sign-up {
  margin-left: 15%;
  color: gray;
  font-size: 12px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.forgot-pass {
  margin-left: 15%;
  color: gray;
  font-size: 12px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

input {
  display: block;
  padding: 6px 4px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  font-size: 0.8em;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 5px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  text-align: center;
  font-size: 0.5em;
  width: 100%;
}
</style>