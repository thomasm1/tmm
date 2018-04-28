var secretButton = document.querySelector('#secret-button');

var secretParagraph = document.querySelector('#secret-paragraph');


var secretButtonMP = document.querySelector('#secret-buttonMP');

var secretParagraphMP = document.querySelector('#secret-paragraphMP');


/////////////////////////////////

var showSecret = false;

var showSecretMP = false;

///////////////////////////////

secretButton.addEventListener('click', toggleSecretState);

updateSecretParagraph();

secretButtonMP.addEventListener('click', toggleSecretStateMP);

updateSecretParagraphMP();


///////////////////////////////


function toggleSecretState() {

    showSecret = !showSecret;

    updateSecretParagraph();

    updateSecretButton()

}

function toggleSecretStateMP() {

    showSecretMP = !showSecretMP;

    updateSecretParagraphMP();

    updateSecretButtonMP()

}


///////////////////////////////


function updateSecretButton() {

    if (showSecret) {

        secretButton.textContent = 'Thomas M. Maestas';

    } else {

        secretButton.textContent = 'About Thomas';

    }

}

function updateSecretButtonMP() {

    if (showSecretMP) {

        secretButtonMP.textContent = 'TMM Thesis';

    } else {

        secretButtonMP.textContent = 'Doctoral Thesis';

    }

}

///////////////////////////////



function updateSecretParagraph() {

    if (showSecret) {

        secretParagraph.style.display = 'block';

        secretParagraph.style.fontFamily = 'Roboto'; 

        secretParagraph.style.backgroundColor = 'steelblue';

        secretParagraph.style.color = 'aliceblue';

        secretParagraph.style.textAlign = 'left';

        secretParagraph.innerHTML = `<div class="mb-4">  Hello, I'm Thomas, Thank you for your visit.<br /><br />My consulting services focus on latest technology with a Master's level data analysis methodology.   My data analysis experience has focused on education evaluation in K-12 and higher education. Now, I handle nearly all domains of data analysis. I focus on web-app design and development, specializing in data visualization with JavaScript and Python programming language.<br /><br /> 
                   
   
   <ul class="list-unstyled list-spaced left">
                                     <li> Thomas Provides Contractual Services and Consulting for Big &amp; Small Data and Web solutions since 2016 </span>

                                            <a href="http://www.thomasmaestas.net/profile/index.html"> <span> T M M</span></a>
                                         
                                                 <li>Masters Sociology and Bachelors French History <a href="http://www.unm.edu" target="_blank"> <span>University of New Mexico, Albuquerque</span></a>
                                  
                                
                                  
                                               <li> Social Media
                                                <span><a href="https://www.quora.com" target="_blank">Quora,</a><a href="https://www.historum.com" target="_blank"> Historium, </a><a href="https://www.instagram.com" target="_blank">Instagram, </a><a href="https://www.facebook.com" target="_blank">Facebook, </a><a href="https://www.meetup.com" target="_blank">Meet-Up, </a> Hiking Group, and Alliance Francaise</span>
                             
                                              
                                              <li>Lived in
<a href="https://www.parisinfo.com/" target="_blank">Paris, France</a> and
<a href="http://www.ny.gov/" target="_blank">New York</a> and <a href="https://www.visittheusa.com/state/texas" target="_blank">Texas.
</a>

                                                    </li>

                            </ul>
</div>

`;

    } else {

        secretParagraph.style.display = 'none';

    }

}

////////

function updateSecretParagraphMP() {

    if (showSecretMP) {

        secretParagraphMP.style.display = 'block';

        secretParagraphMP.style.fontFamily = 'Roboto';  
        secretParagraphMP.style.backgroundColor = 'steelblue'; 
        secretParagraphMP.style.color = 'white'; 
 secretParagraphMP.style.overflowY = 'scroll';
        secretParagraphMP.innerHTML = ` 
<h5 class="dailytech">Central Tenets of TMM Philosophy  
</h5> 

<p class="dailytitle" >by Thomas Maestas, MA</p> 
 
 <p class="firstparagraph">Dialectical Materialism<br />I construct my philosophical guidance from a post-Hegelian, Historical-Materialist Philosophy that sees improvement by each iteration of problem-solving. My personal philosophy holds that right actions and true knowledge begin with a final, teleological goal in sight, i.e., the <i>improvement of the Human condition</i>. <br />Post-Hegelian Logic determines a set, then compares the practical <i>thesis</i> of present empirical, perceived conditions against the ideal <i>antithesis</i> toward higher ethical, rational solutions, in order to achieve an improved synthesis, to again be repeated as a new thesis.</p>
<p class="firstparagraph">Sharing<br />    
Given that assumptions about population growth and climate change are true (I believe both are true), then global population well-being is threatened earlier than expected. Therefore, my antithesis holds that  smart, effective <i>Sharing of Burden</i>, Sharing of Power, and <i>Sharing of Resources</i> is critical to meeting the imminent challenges of the two said assumptions.  
</p>
<p class="firstparagraph">Diversity and Equality<br />
American workforce culture too often abides by the ethos of "work harder, not smarter." Americans' <i>work hours</i> are over 150% more than any other nation, yet holding population-scale, GDP, and other factors constant, American workforce is less efficient even with more work hours. (Consider our American Healthcare system, which remains the most expensive, yet least efficient (in percentile GDP  compared to other nations). 
</p>
<p>My dialectical antithesis towards a solution is better workforce integration along gender, racial, and socio-economic lines. Holding other variables constant, a more heterogeneous workforce is a more agile, creative, and efficiently team-oriented workforce--in short, a smarter workforce.
</p>
<p class="quote">1. Quantitative Measure. <br />I argue my antithesis by comparing the gender, racial, and socio-economic heterogeneity of American, British, French, and Japanese workforce, as measured by N=600 sampling method of companies of 50 or few employees, 51-200, and 200+ employees. My conclusion focuses on gender-specific solutions, especially in programming-related fields.</p>
<p class="quote">2. Qualitative Measure. <br />Using <i>Intersectionality Theory</i><sup>2</sup>, I qualitatively argue my antithesis beginning with female inclusion into programming-related fields, which now many still call a "Boys' Club" within the computer-programming sector.  16 interviews to explore the effects of continual, disproportionately male-dominated,  programming-related fields. </p> 

`;

    } else {

        secretParagraphMP.style.display = 'none';

    }

}