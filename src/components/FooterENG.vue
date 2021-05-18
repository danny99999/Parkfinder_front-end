<template>
      <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <center>
          <div class="col-sm-12 col-md-6">
            <br>
            <h6>About us</h6>
            <p class="text-justify">
With this application, we want to make it easier for users to find available parking spaces and their locations, enable the reservation of parking spaces, display parking zones. This app will send users notifications and display information about opening hours and availability of parking zones / spaces. Unlike classic parking systems that are only used to buy tickets, our system has the ability to find, display availability and location of parking spaces. Also, our application has the ability to calculate the total time spent in the parking lot without the need to enter the user's registration plate. Our application would be complementary to traditional parking payment systems.
</p>
          </div>
          </center>
        </div>
        <hr>
      </div>
      <div class="container">
            <center> <p>Copyright &copy; Park Finder 2021. All rights reserved. </p> </center>
        </div>
</footer>
</template>

<script>
export default {
    name: "FooterENG",
};
</script>

<style scoped>


.site-footer
{
  background-color:#26272b;
  padding:30px 0 10px;
  font-size:15px;
  line-height:24px;
  color:#737373;
  height: 550px;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d;
}
.copyright-text
{
  margin:0;
}
@media (max-width: 1500px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width: 1200px)
{
  .site-footer
  {
    padding-bottom:0;
   
    
  }
  .site-footer .copyright-text,.site-footer
  {
    text-align:center;
  }
}
.col-md-3
{
  flex: 1;
  max-width: 100%;
}
</style>