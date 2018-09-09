
<?php
 
   	 $error = ""; 
	 $successMessage = ""; 

    if ($_POST) { 

        if (!$_POST["email"]) {
 

            $error .= "Oops, a valid email address is required for post :-)<br>";
 
            

        }

        

        if (!$_POST["content"]) {

            

            $error .= "The content field is required.<br>";

            

        }

        

        if (!$_POST["subject"]) {

            

            $error .= "The subject is required.<br>";

            

        }

        

        if ($_POST['email'] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {

            

            $error .= "Oops, a valid email address is required for post :-)<br>";

            

        }

        

        if ($error != "") {

            

            $error = '<div class="alert alert-danger" role="alert"><p>There were error(s) in your form:</p>' . $error . '</div>';

            

        } else {

            

            $emailTo = "thomas@ourdailytech.com";

            

            $subject = $_POST['subject'];

            

            $content = $_POST['content'];

            

            $headers = "From: ".$_POST['email'];

            

            if (mail($emailTo, $subject, $content, $headers)) {

                
  		mail($emailTo, $subject, $content, $headers);
                $successMessage = '<div class="alert alert-success" role="alert">Thank you, this submission received by me, please expect a 
prompt response from me, <a href="mailto:thomas@ourdailytech.com">thomas@ourdailytech.com</a>, to your provided address, <strong> '.$_POST['email'].'</strong>, within 48 hours.</div>';

                

                

            } else {

                

                $error = '<div class="alert alert-danger" role="alert"><p><strong>Your message couldn\'t be sent - please try again later</div>';

                

                

            }

            

        }

        

        

        

    }



?>
<!DOCTYPE html>
<html lang="en">
  <head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71584977-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-71584977-1');
</script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T85KNRD');</script>
<!-- End Google Tag Manager -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>OUR DAILY TECH | About</title>
    <link rel="stylesheet" href="dist/css/app.css">

 <style>
.contactme {
max-width:100%;
}
.featured {
  font-size:1.6rem;
}
.featured p {
  color: darkslategray;
  padding:3% 10% 2%;
}
</style>
  </head>

    <title>OUR DAILY TECH</title>
  <body  > 

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T85KNRD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

 


  <nav class="  navbar navbar-default">

<img src="src/img/thomas-maestas.jpg" alt="picture of Thomas at Satellite Cafe, Albuquerque Central Ave. "
  class="profile" />

<div class="container  ">

  <div class=" navbar-header">

    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
      aria-controls="navbar">

      <span class="sr-only"> </span>

      <span class="icon-bar"></span>

      <span class="icon-bar"></span>

      <span class="icon-bar"></span>

    </button>

    <a class="navbar-brand  " href="#"> </a>

  </div>

  <div id="navbar" class="collapse navbar-collapse  ">

    <ul class="nav navbar-nav profile nav-space">

      <li>

        <a href="index.html">HOME</a>

      </li>

      <li  class="active">

        <a href="about.php">ABOUT</a>

      </li>

      <li>

        <a href="services.html">SERVICES</a>

      </li>



    </ul>

        <ul class="nav navbar-nav navbar-right">

<li>

  <a href="https://twitter.com/ThomasMaestas" target="_blank">

    <i class="fa fa-twitter"></i>

  </a>

</li>

<li>

  <a href="https://www.facebook.com/thomas.m.maestas" target="_blank">

    <i class="fa fa-facebook"></i>

  </a>

</li>

<li>

  <a href="http://linkedin.com/in/thomasmaestas" target="_blank">

    <i class="fa fa-linkedin"></i>

  </a>

</li> 
</ul>
  </div>

  <!--/.nav-collapse -->

</div>

</nav>

    <div class="title-bar">
      <div class="container  ">
        <h1>ABOUT TMM</h1>
      </div>
    </div>

  <div class="main">
    <div class="container">
      <div class="row">

        <div class="col-md-6">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">Thomas M. Maestas</h4>
            </div>
                    <h3 class="mb-4">WELCOME</h3> 
                    
                    <div class="quote featured" id="featured"> 
               <p class="left" id="headerquote">"The value of information does not survive the moment in which it was new. It lives only at that moment; it has to surrender to it completely, and explain itself to it without losing any time ...</p><p  class="left">
                  A story is different. It does not explain itself. It preserves and concentrates its strength and is capable of releasing it even after a long time."
              </p><p class="left">   -- Walter Benjamin</p>
         
                <div  class="height-500 panel-body">  
                  <a class="  list-group-item ">     
                      <h5 class="  secret" id="secret-button" >About my Data Analysis Work</h5> 
                      <p id="secret-paragraph">  
                      </p> </a>

                    
                    <a class="  list-group-item ">    
                    <h5 class="secretMP" id="secret-buttonMP" >My Philosophical Beliefs</h5>
                    <p id="secret-paragraphMP">                               
                    </p> </a> 
                    </div>   
          </div>
        </div>


        <div class="col-md-4">
          <div class="list-group">
          <div>
        <br />
        <br />
        <br />
        <h4 id="id2">
        </h4>
        <iframe id="id2-frame" src="https://www.youtube.com/embed/RfJgT89hEME" frameborder="0" allowfullscreen>
    </div  >
   
  

 
          </div>
        </div>


      </div>
    </div>
  </div>

    <div class="section-c">
      <div class="container">
        <div class="row">



<div id="contactme" class="col-md-8">
<h3 class="contactme">Contact <a title="thomas@ourdailytech.com" href="mailto:thomas@ourdailytech.com">thomas@ourdailytech.com</a></h3><br />
<h4>Or, Send me a note directly: </h4><br />

      <div id="error"><? echo $error.$successMessage; ?></div>
<div>
      

      <form method="post">

  <fieldset class="form-group">

    <label for="email">Your email address</label>

    <input type="email" class="form-control" id="email" name="email" placeholder="Your email@email.com">


  </fieldset>

  <fieldset class="form-group">

    <label for="subject">Subject</label>

    <input type="text" class="form-control" id="subject" name="subject" >

  </fieldset>

  <fieldset class="form-group">

    <label for="exampleTextarea">Message</label>

    <textarea class="form-control" id="content" name="content" rows="3"></textarea>

  </fieldset>

  <button type="submit" id="submit" class="btn btn-primary">Contact Thomas</button>
<br /><br />
</form>
</div>

          

        </div>



    <!-- jQuery first, then Bootstrap JS. -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>

          

          

    <script type="text/javascript">

          

          $("form").submit(function(e) {

              

              var error = "";

              

              if ($("#email").val() == "") {

                  

                  error += "The email field is required.<br>"

                  

              }
	
		 

              if ($("#subject").val() == "") {

                  

                  error += "The subject field is required.<br>"

                  

              }

              

              if ($("#content").val() == "") {

                  

                  error += "The content field is required.<br>"

                  

              }

              

              if (error != "") {

                  

                 $("#error").html('<div class="alert alert-danger" role="alert">
		<p><strong>There were error(s) in your form entry:</strong></p>' + error + '</div>');

                  

                  return false;

                  

              } else {

                  

                  return true;

                  

              }

          })

          

<!--
<script> $("form").submit(function(e){
        e.preventDefault();
    });
 -->
	

</div> <!-- end of PHP email -->





 



          <div class="col-md-8 col-md-offset-2 hidden">
            <h2>Monthly <i>Our Daily Tech</i>   Newsletter</h2>
            <br />
            <p>Mailing List for monthly blog PDF, beginning May 1</p>
            <hr />
            <form>
              <input type="text" class="form-control input-lg" placeholder="Enter Email">
              <br />
              <button class="btn btn-primary btn-lg btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer" >
      <div class="container">
        
      
      <p>Copyright &copy; 2018 thomasmaestas.net &nbsp;|&nbsp;

          Contact: <a href="mailto:thomas@ourdailytech.com">thomas@ourdailytech.com</a> &nbsp;|&nbsp; All Rights Reserved </a>

      </p> 
      </div>
    </footer>

 
    <script src="dist/js/jquery.min.js"></script>
    <script src="dist/js/bootstrap.min.js"></script>
 
    <script src="src/js/dom-loader.js"></script>
    <script src="src/js/app.js"></script>
<!-- Go to www.addthis.com/dashboard to customize your tools --> <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58b774f963b674cb"></script>
  </body>
</html>
