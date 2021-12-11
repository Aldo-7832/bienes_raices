<template>
  <div>
    <div class="wrapper">
      <div class="sidebar">
        <img src="../assets/user.png">
        <h2>Nombre</h2>
        <ul>
          <li><a href="#">Redactar</a></li>
          <li><a href="#">Recibidos</a></li>
          <li><a href="#">Enviados</a></li>
          <li><a href="#">Spam</a></li>
        </ul>
      </div>
      <div class="main_content">
        <div class="header"><input type="text" placeholder="Buscar"></div>
        <div class="info">
          <div class="mail">
            <div class="persona">Persona</div>
            <div class="asunto">Asunto</div>
            <div class="borrar"><p style="text-align:right">Borrar</p></div>
          </div>
          <div class="mail">
            <div class="persona">Persona</div>
            <div class="asunto">Asunto</div>
            <div class="borrar"><p style="text-align:right">Borrar</p></div>
          </div>
          <div class="mail">
            <div class="persona">Persona</div>
            <div class="asunto">Asunto</div>
            <div class="borrar"><p style="text-align:right">Borrar</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mailbox",
};
</script>

<style scoped>
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
.wrapper
{
  display: flex;
  position: relative;

}
.wrapper .sidebar
{
  position: fixed;
  width: 200px;
  height: 100%;
  background: #25D87C;
  padding:30px 0;
}
.wrapper .sidebar h2
{
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}
.wrapper .sidebar ul li
{
  padding: 15px;
  border-bottom: 1px solid #28D825;
  border-top: 1px solid #28D825;
}
.wrapper .sidebar ul li a
{
  color: #002411;
  display: block;
}
.wrapper .sidebar ul li a .fas
{
  width: 25px;
}
.wrapper .sidebar ul li:hover
{
  background: #00e783;
}
.wrapper .sidebar ul li:hover a
{
  color: #025c2c;
}
.wrapper .main_content
{
  width: 100%;
  margin-left: 200px;
}
.wrapper .main_content .header
{
  padding: 20px;
  background: #fff;
  color: #717171;
  border-bottom: 1px solid #025c2c;
}
.wrapper .main_content .header input
{
  height: 40px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid;
  padding-left: 10px;
  padding-right: 10px;
}
.wrapper .main_content .info
{
  margin: 20px;
}
.wrapper .main_content .info .mail
{
  display: flex;
  background: #e9e9e9;
  border-bottom: 1px solid #28D825;
  border-top: 1px solid #28D825;
}
.wrapper .main_content .info .mail .persona
{
  font-size: 20px;
  margin-left: 5px;
}
.wrapper .main_content .info .mail .asunto
{
  width: 200px;
  font-size: 20px;
  margin-left: 50px;
}
.wrapper .main_content .info .mail .borrar
{
  font-size: 20px;
  width:80%;
  text-align:right;
  margin-right: 10px;
}
.wrapper .main_content .info .mail:hover
{
  background: #c0c0c0;
}
.wrapper .sidebar img
{
  height: 100px;
  width: 100px;
  border-radius: 100px;
  margin-left: 25%;
  margin-bottom: 10px;
}
</style>