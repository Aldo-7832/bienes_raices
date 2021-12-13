<template>
  <div>
    <div class="col-lg-12">
      <div class="card shadow-sm-mt-2">
        <div class="card-header">
          <div class="col-lg-12 d-flex">
            <div><button class="btn-back"><b>&lt;</b></button></div>
            <div style="margin-right: 10px"><img src="../assets/user.png"></div>
            <div class="mt-2"><b>Nombre</b></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="col-lg-12">
      <input type="text" class="chat1" value="Mensaje 1" readonly />
    </div>
    <div class="col-lg-12 text-end">
      <input type="text" class="chat2" value="Mensaje 2" readonly />
    </div>
    <div class="col-lg-12">
      <input type="text" class="chat1" value="Mensaje 3" readonly />
    </div>
    <div class="col-lg-12 text-end">
      <input type="text" class="chat2" value="Mensaje 4" readonly />
    </div>
    <div class="col-lg-12">
      <input type="text" class="chat1" value="Mensaje 5" readonly />
    </div>
    <div class="col-lg-12 text-end">
      <input type="text" class="chat2" value="Mensaje 6" readonly />
    </div>
    </div>
    <div class="bottom-navbar">
      <div class="card-footer">
        <div class="col-lg-12 d-flex">
          <button class="btn-extra"><b>+</b></button>
          <input type="text" class="message-box" placeholder="Mensaje" />
          <button class="btn-back" style="margin-left: 10px"><b>&gt;</b></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
};
</script>

<style scoped>
.header {
  width: 100% !important;
  background-color: #25d87c;
  height: 45px;
}
.message-box {
  width: 10000px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 14px;
}
.chat1 {
  width: 400px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 15px;
  border: 1px solid #939503;
  border-radius: 14px;
  outline: none;
  background-color: #fff;
}
.chat2 {
  width: 400px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 15px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #d19509;
  border-radius: 14px;
  outline: none;
  background-color: #fff;
}
.btn-extra {
  width: 40px;
  border-radius: 20px;
  outline: none;
  border: 1px solid rgb(219, 219, 219);
  margin-right: 10px;
  background-color: #fff;
}
.btn-back {
  width: 40px;
  border-radius: 20px;
  height: 40px;
  outline: none;
  border: 1px solid rgb(219, 219, 219);
  margin-right: 10px;
  background-color: #fff;
}
img
{
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.top-navbar,
.bottom-navbar {
  position: fixed;
  width: 100%;
}
.bottom-navbar {
  bottom: 0;
}
</style>