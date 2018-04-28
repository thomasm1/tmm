
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
    <title>OUR DAILY TECH | Services</title>
    <link rel="stylesheet" href="dist/css/app.css">  

<style>
a.nav-link {
  background-color:transparent;
} 
.multi_drop_menu {

font:1em tahoma, geneva, sans-serif;

}

.multi_drop_menu a {

display:block;

color:blue;

background-color:transparent;

padding:.3em 1em;



border-width:4px;

border-color:transparent;

}

.multi_drop_menu a:hover {

color:#fff;

background-color:#3097D1;

}

.multi_drop_menu a:active {

background:purple;

color:#ccc;

}

.multi_drop_menu * {margin:0; padding:0;}

.multi_drop_menu ul {float:left;width:100%;}

.multi_drop_menu ul li {

	z-index:99;

	  width:25%;

float:left;

list-style-type:none;

position:relative;

 

}



.multi_drop_menu li {

     

float:left;

list-style-type:none;

position:relative;

}

.multi_drop_menu li a {
text-align:center;
display:block;

	 
border-right-style:none;

background-clip:padding-box;


text-decoration:none;

}

ul.list-unstyled.list-spaced.left {
list-style-image: url('../src/img/montrealbullet.png'); 
margin-right:-5px;
opacity:.8;
} 
ul.list-unstyled.list-spaced.left li:hover {
margin-left:-20px;
padding:0px;
margin:0px;

} 

.multi_drop_menu li:last-child a {

border-right-style:none;} 
.multi_drop_menu li ul {display:none;}



/*visual
@media (min-width: 401px) {
 .multi_drop_menu li li a {  
    color:silver; 
background-color:teal;
  }
}
 */  

.multi_drop_menu li li   { 
  color:white; 
} 
.multi_drop_menu li li a { 
  color:white;
background-color:#3097D1;
border-right-style: none;
text-align:left;
border-top-style:solid;
border-top-color:transparent;

} 
/*functional addition */

.multi_drop_menu li ul {

display:block;

position:absolute;

left:0;

top:100%;

}

.multi_drop_menu li li {
float:none;
background-color: #aaa;
width:150px;

}

.multi_drop_menu li li ul {

display:none; 
}



/*      */

.multi_drop_menu li ul {

display:none;

position:absolute;
 

}

.multi_drop_menu li:hover > ul {

display:block;

}

li ul {

display:none;

}

li:hover > ul {

display:block;

}

.multi_drop_menu li li ul {

position:absolute;

left:100%;

top:0;
 
} 
 
.multi_drop_menu li:hover > a {

color:#fff;

background-color:#004ea5;

}
 


.multi_drop_menu ul li ul li a {
background-color:#004ea5;
 
    width:150px; 

}
</style>

  </head>

  <body><!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T85KNRD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
      <img src="src/img/thomas-maestas-2018.jpg" class="profile" />
 
    <nav class="navbar navbar-default">
      
      <div class="container  tmm">
          
        <div class="navbar-header"> 
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand  " href="#"> </a>
        </div>


        <div id="navbar" class="  collapse navbar-collapse" >
  
          <ul class="nav navbar-nav profile  nav-space">
            <li><a href="index.html">HOME</a></li>
            
            <li><a href="about.php">ABOUT</a></li>
            <li class="active"><a href="services.php">SERVICES</a></li>

            <li>
                <a href="http://www.ourdailytechblog.com">BLOG SITE</a>
              </li> 

            <li class="nav-item    " ><a class="nav-link">PORTFOLIO</a>
              <ul>


              <li class="nav-item active">
              <a class="nav-link"> &nbsp;Conference<br />Presentations</a>
              <ul>
                  <li><a href="http://tinyurl.com/gmtj4v4" target="_blank" style="width:350px;"><span>
"Great Expectations Deferred: Contextualizing Community College Transfer Intentions"<br /> </span>2016 ASA-American Sociological Conference<br />@Seattle, WA</a>
                  </li>
                  <li>
                      <a href="http://hscmediasite.unm.edu/unm/Catalog/Full/6a7e058c7810440197da72484269d86c21/?state=JPIHdhLtVxTxyQQ2QHuG" target="_blank" style="width:350px;"><span> "Social Determinants of Healthy Aging"<br />
</span>Dec 2015 UNM Health Sciences Institute for Ethics Colloquium<br />@Albuquerque, NM</a>
                  </li>
                  <li><a href="http://tinyurl.com/pcq6mjx" target="_blank" style="width:350px;"><span> "The Effects of Peer Association on Adolescents' Graduation Outcomes: An HLM Approach" <br /> </span>2015 ASA Conference<br />@Chicago, Illinois</a>
                  </li>
                  <li><a href="http://www.cpc.unc.edu/projects/addhealth/events/20140613AddHealthUsersConferenceAbstracts.pdf" target="_blank" style="width:350px;"><span>
"Great Expectations: A Study on the Determinants of College Graduation Expectations"<br />
2014 NIH-UNC Adolescent Health Data Users Conference, Session 6<br /> @Bethesda, Maryland
</span></a>
                  </li>
              </ul>
          </li>

 

                  <li><a href="profile/index.html" target="_blank">CV-english</a></li>
                  <li><a href="docs/docu/MaestasThomas_CV2017_fr.pdf" target="_blank">CV-français</a></li>
                  <li><a href="http://hdl.handle.net/1928/31677" target="_blank">Education Thesis</a></li>
                  <li><a href="docs/docu/DataPresentADD_health_networks.pdf" >Education Data Analysis R-LaTeX</a></li>
                  <li><a href="docs/docu/ADAHighSchoolNetworks.html"  >Education Data Analysis R-3.4</a></li>
                  <li><a href="docs/poli/edregression.htm"  >Education Data Analysis SPSS-25</a></li>
                  <li><a href="https://public.tableau.com/profile/thomas.milton.maestas#!/vizhome/CarbonFootprint_1/C02NationTime" target="_blank">Environment Data Analysis Tableau</a></li>
                  <li><a href="docs/d3/globe_update.html">Sample of Data Visualization D3.js</a></li>
               
<li class="nav-item active"><a class="nav-link">App-Coding Samples</a>
              <ul>
<li class="nav-item active" style="z-index:1;"><a   class="nav-link" ><span class="caret">tmmPLAYR</span> <br /></a>
<ul>
<!--   <li   ><a href="/dist/js/codePlayer.html" target="_blank">Code Player</a></li>
-->
<li><a href="/dist/js/dice/index.html" target="_blank">No Dice! Game</a> </li>

</ul>
</li>

                <!--  <li style="z-index:1;"><a href="docs/php/weatherAPI.php">Weather-Map API</a></li>
                  --><li><a href="docs/d3/planet.html">Planets</a></li>
                  <li><a href="docs/d3/mobilesuits.html">Mobile Law Suits</a></li>
                  <li style="z-index:2"><a href="docs/d3/color.html">Colors</a></li>
                  <li style="z-index:2"><a href="docs/d3/flow.html">Flow</a></li> 
                  <li style="z-index:2"><a href="docs/d3/alphabet.html">Alphabet Graph</a></li>
                  <li style="z-index:2"><a href="docs/d3/globe_update.html">World Cup Map</a></li>
 
            </ul>
          </li>
 
              </ul>
          </li>




          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="http://twitter.com"><i class="fa fa-twitter"></i></a></li>
            <li><a href="http://facebook.com/thomasm"><i class="fa fa-facebook"></i></a></li>
            <li><a href="http://google-plus.com"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="http://linkedin.com"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="title-bar">
      <div class="container">
        <h1>TMM SERVICES</h1>
      </div>
    </div>

  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">CONTRACTING &AMP; CONSULTING SERVICES</h4>
            </div>
            <div class="panel-body">
              <div class="well"> 
               

    <h4>Get Data Visualization &amp; Statistics Help </h4> <p>I offer services for analyzing large data or small data, qualitative or quantitative data. Professional reporting of results for academic journals and business briefs alike, meeting the analysis demands of professionals, students, and researchers.</p><p>I have experience analyzing data from diverse fields, including sociology, criminology, natural resources, education, mental health, and business, among others.  
    
   
   
        </div>
                <div class="well">
                    <h4>TMM Data Analytics &amp; Visualization
                      </h4>
                    <strong> Past Projects </strong> include research design, completion, analysis, and report production for the Institute of Social Research at the University of New Mexico, natural gas pipeline analysis for Xpansiv Data Systems, and a bilingual program evaluation for  Pivot Evaluation.    <br /><br />  If you need help with R, Python, Stata or SPSS, contact me at <a href="mailto:thomas@ourdailytech.com"> thomas@ourdailytech.com</a> and I can perform the analysis for you so you can focus on your project and avoid the statistical package learning curve.
                  </p>	         
                </div>
                <div class="well">
                  <h4>Mobile- &amp; Web-App Development </h4>
                  <strong> Past Projects </strong> include web-app design, front-end &amp; back-end web services, Google Analytics, and search engine optimization reports for organizations including Xpansiv Data Systems, Pivot Evaluation and Gift Givers Anonymous.   
   </p>	      </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="list-group hidden height-400">
            <a href="#" class="list-group-item active">
              Cras justo odio
            </a>
            <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
            <a href="#" class="list-group-item">Morbi leo risus</a>
            <a href="#" class="list-group-item">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item">Vestibulum at eros</a>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div class="section-c">
      <div class="container">
        <div class="row">


            <div class="col-md-8"> 
               

<div class="col-md-8">


      <div id="error"><? echo $error.$successMessage; ?></div>
<div>
      

      <form method="post">

  <fieldset class="form-group">

    <label for="email">Your email address</label>

    <input type="email" class="form-control" id="email" name="email" placeholder="your_email@email.com">


  </fieldset>

  <fieldset class="form-group">

    <label for="subject">Subject</label>

    <input type="text" class="form-control" id="subject" name="subject" >

  </fieldset>

  <fieldset class="form-group">

    <label for="exampleTextarea">Message</label>

    <textarea class="form-control" id="content" name="content" rows="3"></textarea>

  </fieldset>

  <button type="submit" id="submit" class="btn btn-primary">Contact Tom</button>
<br /><br />
</form>
</div>

          

        </div>

 
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





               </div>
      


          <div class="col-md-8 col-md-offset-2 hidden  ">
            <h2>Subscribe To Our Newsletter</h2>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus.</p>
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
        
        <p>Copyright   &copy; 2018 thomasmaestas.net &nbsp;|&nbsp;Contact:  <a href="mailto:thomas@ourdailytech.com">thomas@ourdailytech.com</a> &nbsp;|&nbsp;  All Rights Reserved   </a></p>

      </div>
    </footer>
    <script src="dist/js/jquery.min.js"></script>
    <script src="dist/js/bootstrap.min.js"></script> 
<!-- Go to www.addthis.com/dashboard to customize your tools --> <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58b774f963b674cb"></script>
  </body>
</html>
