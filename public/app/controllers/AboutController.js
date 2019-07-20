(function () {

	angular.module('app')
			.controller('AboutController', [    '$state',  AboutController]);

	function AboutController(  $state) {

			var vm = this; 

			
	console.log(' AboutController loaded...');
 
 
 
	console.log('header');
	/*
	var headerauth = "--Ryan Dahl, Creator of JavaScript's Node.JS";
	var headerquote = `  
	 <strong>You Can Never Understand Everything.<br /><br />But You can Push Yourself to Understand the System.</strong>	 
	`;
	document.getElementById("featured").innerHTML = `
	<p class="left" id="headerquote">
	${headerquote}</p>  <p> -- ${headerauth} </p>
	`;
 
 */
	var secretButton = document.querySelector('#secret-button'); // ME
	var secretParagraph = document.querySelector('#secret-paragraph');

 ('#secret-paragraphAUG');///////////////////////////////// 
	var showSecret = false; 
	 
	/////////////////////////////// 
	secretButton.addEventListener('click', toggleSecretState); 
	
	
 
	/////////////////////////////// 
	function toggleSecretState() {
	  showSecret = !showSecret;
	  updateSecretParagraph();
	  updateSecretButton();
	} 
	
 
	/////////////////////////////// 
	function updateSecretButton() {
	  if (showSecret) {
		secretButton.innerHTML = ' '; // GOES BACK TO DEFAULT
		secretButton.style.fontFamily = 'Monoton';
	  } else {
		secretButton.innerHTML = ', M.A.'; // TOGGLE OPEN
		secretButton.style.fontFamily = 'Monoton';
	  }
	}
	 
	
	
	
 
	/////////////////////////////// 
	function updateSecretParagraph() {
	  if (showSecret) { 
			secretParagraph.style.display = 'block';  
			secretParagraph.style.textAlign = 'justify';
			secretParagraph.style.padding = '5px';
			secretParagraph.style.color = 'white'; 
			secretParagraph.style.backgroundColor = 'darkblue'; 
			
	
		secretParagraph.innerHTML = `
		<div   ><h5><strong> ... A little more about me and my philosophy:</strong></h5>
	   
	 <p class="firstparagraph">Dialectical Materialism<br />I construct my philosophical guidance from a post-Hegelian, Historical-Materialist Philosophy that sees improvement by each iteration of problem-solving. My personal philosophy holds that right actions and true knowledge begin with a final, teleological goal in sight, i.e., the <i>improvement of the Human condition</i>. <br />Post-Hegelian Logic determines a set, then compares the practical <i>thesis</i> of present empirical, perceived conditions against the ideal <i>antithesis</i> toward higher ethical, rational solutions, in order to achieve an improved synthesis, to again be repeated as a new thesis.</p>
	<p class="firstparagraph">Sharing<br />    
	Given that assumptions about population growth and climate change are true (I believe both are true), then global population well-being is threatened earlier than expected. Therefore, my antithesis holds that  smart, effective <i>Sharing of Burden</i>, Sharing of Power, and <i>Sharing of Resources</i> is critical to meeting the imminent challenges of the two said assumptions.  
	</p>
	<p class="firstparagraph">Diversity and Equality<br />
	Workplace culture too often abides by the ethos of "work harder, not smarter." Non-diverse workplaces lack the full set of problem-solving tools that are necessary in a complex, diverse world. 
	</p>
	<p>A better workforce integration along gender, racial, and socio-economic lines is a more heterogeneous workforce: more agile, creative, and efficiently team-oriented workforce--in short, a smarter workforce.
	</p> 
	`;
	
	  } else {
	
			secretParagraph.style.display = 'none';
	
	  }
	
	};
	 
}  
}());