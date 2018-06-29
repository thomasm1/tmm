 
//Top Vars Above

console.log('blogger-may');
var bloggerMay = function () {
 
 

blogpost13 =  `

<p class="firstparagraph">Winning and losing millions via a telephone is very James Bond-esque, but the (re)newed legalisation of sports betting merely mimics national models already in long-time use in Europe and elsewhere.<sup>1</sup> In the U.S., mobile carriers and makers will be asked of a lot more when money is on the line ... which implicitly brings up blockchain solutions. Here's one example:
</p>
<p class="quote"> WinFlow, a sports betting platform that uses ledger technology to offer transparent betting and products, has decided to run its platform, a decentralized application on the Hedera Hashgraph Network.

WinFlow has been created with the intentions of solving three main industry related problems, which are the lack of accountability and transparency, meaningful rewards programs or compensation to losing players and product innovation.<sup>2</sup>
</p>
<p>
 So where are we on Mobile solutions now that the stakes have been exponentially raised...Security, Authentication, Instantaneous Speed?  No need to look, the tech doesn't exist!</p>
<p class="quote">“There is currently no active, fully-functional sportsbook using distributed ledger or blockchain technology, let alone any operator in the sports betting industry at large that redistributes almost all of their profits right back to the players. <sup> 2 </sup> </p>
<p>What a coincidence that this month, Hedera's Hashgraph <i>public</i> ledger was released, the European Union rewrote their internet data policies in General Data Privacy Regulation (GDPR covered in more depth in <a href="#18-04-19">April 19th</a> and <a href="#18-04-16"> 16th posts</a>. However the occurrence of all three events will definitely trigger some technological hot-swapping! From the same example,
</p>
<p class="quote">
the [WinFlow] project, which is squarely focused on Europe due to the Federal ban on sports betting in the US, will raise money through private placements while it continues to work on developing the betting platform.<br /><br /> 
WinFlow, which claims to have a unique profit sharing model, said breakthroughs in technology and new benefits for players, including unprecedented rewards, security, and transparency, will allow it to disrupt the incumbents in a multi-billion dollar market.
</p>
<p>So, the needs for mobile sports betting all depend on speed, for which the newly unveiled Hedera hashgraph specializes <sup>2 </sup> (covered <a href="#may-18-05-02">May 2-5 four-part series</a>). Looks good from afar, let's see now that anyone can kick the tires of that thing called DAG!
</p>
`;  
 blogcite13  =  
 `
 <p class="cite">1. <a href="https://www.theguardian.com/business/nils-pratley-on-finance/2018/may/14/uk-bookies-beware-us-will-look-after-its-own-in-betting-revolution" target="_blank">https://www.theguardian.com/business/nils-pratley-on-finance/2018/may/14/uk-bookies-beware-us-will-look-after-its-own-in-betting-revolution</a></p>
  <p class="cite">2. <a href="https://bitcoinexchangeguide.com/hedera-hashgraph-dlt-will-power-winflow-profit-sharing-sportsbook/" target="_blank"> https://bitcoinexchangeguide.com/hedera-hashgraph-dlt-will-power-winflow-profit-sharing-sportsbook/</a></p>
  
 <p class="cite">3. <a href="https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#63d0806cabcb" target="_blank">https://www.forbes.com/sites/jeffkauflin/2018/03/13/hedera-hashgraph-thinks-it-can-one-up-bitcoin-and-ethereum-with-faster-transactions/#63d0806cabcb</a></p>
 <p class="cite">4. <a href="https://bitsonline.com/mance-harmon-hedera-hashgraph/" target="_blank">https://bitsonline.com/mance-harmon-hedera-hashgraph/</a></p>
 
 `;


blogpost12 =  `<p class="firstparagraph">Justice Samuel A. Alito Jr. outlined the Supreme Court's Majority Opinion on overturning the federal prohibition on sports betting this week.<sup>1</sup> The primary <i>justification was an unconsitutional Federal authority over States' rights</i>, in overturning the 1992 Professional and Amateur Sports Protection Act.  
</p>
<p class="quote">The Supreme Court struck down a 1992 federal law on Monday that effectively banned commercial sports betting in most states, opening the door to legalizing the estimated $150 billion in illegal wagers on professional and amateur sports that Americans make every year.<br /><br />
The decision seems certain to result in profound changes to the nation’s relationship with sports wagering. Bettors will no longer be forced into the black market to use offshore wagering operations or illicit bookies.<i> Placing bets will be done on mobile devices, </i> fueled and endorsed by the lawmakers and sports officials who opposed it for so long. <sup>2</sup> 
</p>

<p>And now, <i>the Vegas Strip</i> is but a mere icon's hop away from Candy Crush! Uh oh ....</p>
`;
blogcite12 = `<p class="cite">1. <a href="https://www.nytimes.com/2018/05/14/us/politics/supreme-court-sports-betting-new-jersey.html" target="_blank">https://www.nytimes.com/2018/05/14/us/politics/supreme-court-sports-betting-new-jersey.html</a></p>`;
 

blogpost11 =  `<p class="firstparagraph">Jargon is curiously ugly at first sight, but only with time does technical beauty reveal itself. I decided to make my first recipe with WebAssembly and JavaScript, (with yes, a third called <i>Emscripten</i> and no, my eyes aren't rolling) ... this waaas amazing, Wow! So I thought to write about the nuts and bolts of it all. </p>
<p>So,   what exactly <i> is </i> WebAssembly, specifically?? It's this:<span style="color:purple"> (And, for the jargon-wary, skip this paragraph </span> :-)</p>
<p class="cite">
$ emcc -s WASM=1 -o fib.js fib.c </p><p class="green">
<i>emcc</i> executes the <i>Emscripten</i> compiler<br />
<i>-s</i> ensures that Emscripten outputs WebAssembly<br />
<i>-o fib.js</i> names the output as fib.js<br />
<i>fib.c</i> And, finally this is the input file's name!<br />
<p>
This first part? It's like staring into a solar eclipse (I confess I glanced at one recently (but didn't we all, secretly?)) ... <br />
Anyway, this is a simple, classic example using Fibonacci sequence<sup>2</sup> for familiarity. Here's the input:<br />
</p>
<pre>
fib.c:
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int fib(int n) {
  int i, , a = 0, b = 1;
  for  (i = 0; i < n; i++) {
    t = a + b;
    a = b;
    b = t;
  }
  return b;
}</pre> 
<p>
So, given the integer absence in JavaScript mentioned in the <a href="#18-05-10">May 10th post</a>, The Fibonacci integer sequence example illustrates the   relationship between WebAssembly and Javascript. Unlike JavaScript's lack of integers, WebAssembly's math kit is nothing short of luxury! 
</p>  
<script src="fib.js"></script>
<script> <span class="green">This part is JavaScript carrying out the instructions receieved from Emscripten:</span>
  Module.onRuntimeInitialized = _ => {
    const fib = Module.cwrap('fib', 'number', ['number']);
    console.log(fib(12));
  };
  <script>
</p>
<p>So what happened back there is that <i>Emscripten outputs <strong>two </strong>files, one JavaScript (fib.js) and one WebAssembly (fib.wasm)</i>.. Simple enough, and that's why massive, intractable application programs like AutoCAD can now be easily deployed on any platform, fast and high-function on our mobile phones. True it is, <i>after first glance, all  this jargon's inner beauty shines, a real harbinger of great apps to come!</p>

`;
blogcite11 = `<p class="cite">1. <a href="https://medium.com/mozilla-tech/why-webassembly-is-a-game-changer-for-the-web-and-a-source-of-pride-for-mozilla-and-firefox-dda80e4c43cb" target="_blank"> https://medium.com/mozilla-tech/why-webassembly-is-a-game-changer-for-the-web-and-a-source-of-pride-for-mozilla-and-firefox-dda80e4c43cb</a></p>
<p class="cite">2. <a href="https://webassembly.org" target="_blank">https://webassembly.org</a></p>
<p class="cite quote green ">2. Note on example Fibonacci Sequence: (Wikipaedia Definition):
<br />
In mathematics, an integer sequence is a sequence (i.e., an ordered list) of integers. 
An integer sequence may be specified explicitly by giving a formula for its nth term, or implicitly by giving a relationship between its terms. For example, the sequence 0, 1, 1, 2, 3, 5, 8, 13, … <i>(the Fibonacci sequence) is formed by starting with 0 and 1 and then adding any two consecutive terms to obtain the next one: an implicit description.</i>  The sequence 0, 3, 8, 15, … is formed according to the formula n2 − 1 for the nth term: an explicit definition.</p> ` ;
 
blogpost10 = `<p class="firstparagraph">WebAssembly,  about a year old, provides a new level of performance to mobile apps and the browser generally, but is it safe? It's actually safer than traditional plug-ins for browsers. Here's a quick recap from yesterday's post on WebAssembly:</p>
<p class="quote">WebAssembly is one of the biggest advances to the Web Platform over the past decade.

This new standard will enable amazing video games and high-performance web apps for things like computer-aided design, video and image editing, and scientific visualization. Over time, many existing productivity apps (e.g. email, social networks, word processing) and JavaScript frameworks will likely use WebAssembly to significantly reduce load times while simultaneously improving performance while running. Unlike other approaches that have required plug-ins to achieve near-native performance in the browser, WebAssembly runs entirely within the Web Platform. This means that developers can integrate WebAssembly libraries for CPU-intensive calculations (e.g. compression, face detection, physics) into existing web apps that use JavaScript for less intensive work.<sup>1</sup>
</p><p>
Browsers, <i>despite HTTPS encryption, are growing in security weaknesses</i> with more territory, responsibilities, and new API relationships. However, along with WebAssembly's solutions for CPU-intensive browser operations (like AutoCAD example in the previous post), WebAssembly also offers unique security solutions:  
</p>
<p class="quote">WebAssembly describes a memory-safe, sandboxed execution environment that may even be implemented inside existing JavaScript virtual machines. When embedded in the web, WebAssembly will enforce the same-origin and permissions security policies of the browser.<sup>2.</sup></p>
<p>
 This architecture   signifies eventual compatibility with the existing Block Chain apps like MetaMask that use a browser plug-in to set up an API between, for example, the Ethereum blockchain and Web access. So, with WebAssembly's great potential with JavaScript, is it a safer, more secure on-line world? No, but <i>there are safer corners </i> ... and certainly a safer niche for drawing space!</p>

`;
blogcite10 = `<p class="cite">1. <a href="https://medium.com/mozilla-tech/why-webassembly-is-a-game-changer-for-the-web-and-a-source-of-pride-for-mozilla-and-firefox-dda80e4c43cb" target="_blank"> https://medium.com/mozilla-tech/why-webassembly-is-a-game-changer-for-the-web-and-a-source-of-pride-for-mozilla-and-firefox-dda80e4c43cb</a></p>
<p class="cite">2. <a href="https://webassembly.org" target="_blank">https://webassembly.org</a></p>`;

blogpost9 = `<p class="firstparagraph">AutoCAD, the first name in 3-D engineering, has stepped into a new world in the past month. Recent, unprecedented mobile app advances allow more CPU-intensive laptop applications to hop to the phone with equal interactivity and near-equal functionality. Thanks to third-party languages, JavaScript, the browser's language, is broadening in powers: And this is nothing short of exhilarating with just enough of a touch of danger.
</p><p>AutoCAD's recent advances in their mobile platform exemplifies this trend.<sup>1</sup> AutoCAD, the ancient, foundational, ultra-powerful, ever-modernizing programming codebase--celebrates 35 years old, and predates the web! AutoCAD by AutoDesk has historically had difficulty implementing its codebase into mobile platforms. So, their app presence suffered because it had been highly watered down, and suddenly competing with thousands of other 3-D engineering apps...Until now. </p><p>

<p class="quote">Yesterday [March 2, 2018] was a big day for the AutoCAD product. A multi-year engineering project – started in the AutoCAD team way back when I was part of it – culminated in its first deliverables getting into the hands (or, in this case, browsers) of customers.  The AutoCAD team has been working on a project codenamed “Fabric” for the last several years. It's has been a huge amount of work – something I’ll hopefully get into in a future blog post – but it’s finally bearing tangible fruit.  In broad strokes the work was to take the core of AutoCAD and make it cross-platform. </p><p class="quote">You might consider the Big Split – work that was done ostensibly to build AutoCAD for Mac but resulted in a Core Engine that became the mechanism through which developers could run custom code in the cloud via AutoCAD I/O (now part of Forge’s Design Automation API) – to be the first phase of this effort. At the very least Fabric stood on the shoulders of the Big Split.<sup>2.</sup></p><p>

In short, AutoDesk's latest browser-based AutoCAD Web App and Mobile App have suddenly advanced a quantum step. For example, the mobile app provides nearly all of the full features (not including 3-D rendering), like swapping .DWG files from cloud services using a full mobile interface.  </p>
<p>
Not just for AutoCAD, but all apps improve, because <i>third-party languages like WebAssembly can "broker" the API conversation between browser and the operating system's machine code for certain tasks</i>.<sup>3</sup> Exceptionally interesting, now WebAssembly performs real-time C++ transpiling allowing any browser to communicate in near-to direct machine-code for certain tasks. 
WebAssembly (Wasm) is a "binary instruction format for a stack-based virtual machine ... designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications."<sup>3</sup> In other words, <i>WebAssembly is the middle-person translating between JavaScript's V8 Engine and a device's Operating System</i>. Here's  a clearer explanation using the AutoCAD example:</p>
<p class="quote">[AutoCAD's] Fabric has done away with #ifdefs, forcing any platform-specific code into a PAL (Platform Abstraction Layer) per targeted platform. And Fabric is able to target more than just Windows and OS X. Some of the main targets were the established mobile platforms (more on that down the line), but one major effort was to target the web platform with the AutoCAD codebase.
Yes, you read that right… yesterday’s update to AutoCAD Web now runs the same core code as standard AutoCAD, but in a browser. A major part of AutoCAD’s C++ codebase gets run through Emscripten (at least that’s my understanding – I’ll correct any details I get wrong) to be transpiled into WebAssembly. 
<p>
<p>So, it looks like our <i>wild, untamed language, JavaScript, has matured to the big-leagues </i> by teaming up with WebAssembly ... After all, JavaScript, among all the languages, was born without a mind for math... literally. It's core math library conducts all operations in 64-bit floating point, in the absence of integers! So, this entails occasional anomalies: For example, .1 + .2 does not equal .3! (Try it with the JavaScript calculator below ... ) And so, great things await this partnership between WebAssembly and JavaScript, but every marriage is different... one partner may always need help cooking, and another may always need help with the math, but that's what Marriage is for!</p>


 
`;
blogcite9 = ` <p class="cite">1. <a href="https://www.autodesk.com/products/autocad/features" target="_blank"> https://www.autodesk.com/products/autocad/features</a></p>
<p class="cite">2. <a href="http://through-the-interface.typepad.com/through_the_interface/2018/03/the-future-of-autocad.html" target="_blank"> http://through-the-interface.typepad.com/through_the_interface/2018/03/the-future-of-autocad.html</a></p>
<p class="cite">3. <a href="https://webassembly.org">https://webassembly.org</a></p>`;




  blogpost8 = `<p class="firstparagraph">For all the fanfare of in-browser apps, i.e. Progressive Web Apps, the picture isn't as rosy as appears. After all, we are still talking about the browser window, right? Many of the <i>browser-based</i> apps depend on plugin extensions. This is sort of the Achilles Heel recently exposed while, "over two months, seven [Chrome] extensions stole credentials and installed currency miners."<sup>1</sup> The article cites 100,000 computers that may have lost passwords, and other private data--ouch!
  </p>
  <p class="quote">
  The scam was active since at least March with seven malicious extensions known so far, researchers with security firm Radware reported Thursday. Google's security team removed five of the extensions on its own and removed two more after Radware reported them. In all, the malicious add-ons infected more than 100,000 users, at least one inside a "well-protected network" of an unnamed global manufacturing firm, Radware said.
  </p>
  <p>As we see the app-in-the-browser taking on more operational, networking, functional roles (the work previously reserved to native Apple/Google/Microsoft app stores), unknown, unconceived threats are increasingly possible. That's another reason why Tech is always an edge-of-your-seat spectacle!

  `;
  blogcite8 = `  <p class="cite">1. <a href="https://arstechnica.com/information-technology/2018/05/malicious-chrome-extensions-infect-more-than-100000-users-again/">https://arstechnica.com/information-technology/2018/05/malicious-chrome-extensions-infect-more-than-100000-users-again/</a></p>
  <p class="cite">1. <a href="https://blog.radware.com/security/2018/05/nigelthorn-malware-abuses-chrome-extensions/">https://blog.radware.com/security/2018/05/nigelthorn-malware-abuses-chrome-extensions/</a></p>`;

  blogpost7 = `<p class="firstparagraph">Google I/0's 2018 revelations also included a focus on the <i>Progressive Web App (PWA)</i>. My <a href="#18-04-11">April 11th</a> and <a href="#18-04-05">April 5th</a> posts introduce a new approach to traditional mobile apps, using new JavaScript techniques including a "manifest" and "service workers" files that instruct the mobile phone what to cache and other specs. Google has pushed use of these PWAs since 2015 with Google Chrome's efforts to steer app development toward device-neutral, ultra-fast, and encryption advantages of the Hyper Text Transfer Protocol (HTTP), i.e. the browser. </p>
  <p class="quote">
  On the first day of Google I/O 2018 event, Tal Oppenheimer, Chief Product Manager (Chrome) at Google, shared that websites like EconomicTimes.com, Instagram and Starbucks are seeing "incredible results" in user retention and time spent, while using Progressive Web Apps (PWAs) technology.
<br />
PWAs are websites that take advantage of modern web platform Application Programming Interfaces (APIs) to build experiences like working offline, sending push notifications and getting added directly to .. 
  </p>
  <p>Web apps use the browser for viewing and security, while the app's "manifest" uses <i>service workers</i> to manage data, networking, caching optimized for off-line ability and other actions that were formally reserved for "Native" apps downloaded from Apple or  Google Play stores. So what the flip? It does mean better speed and utility, features and appearance optimized to device, whether mobile, laptop or tablet, all without sacrificing the personalized, off-line features of "native" app store apps? ... it's the best of both worlds! </p>
  

  `;
  blogcite7 = `  <p class="cite"><a href="https://www.cnet.com/news/5-best-things-from-google-io-2018/" target="_blank" >https://www.cnet.com/news/5-best-things-from-google-io-2018/</a></p>
  <p class="cite"><a href="economictimes.indiatimes.com/articleshow/64089365.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst" target="_blank" >economictimes.indiatimes.com/articleshow/64089365.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst</a></p>`;
  
  blogpost6 = `
  <p class="firstparagraph">O.K. Google, I'll pass on the lemonade, and ... why don't you take the afternoon off, I'm going to be independent for a while, "again". Alas, we are getting some interesting, if not slightly weird, features from this week's Google I/O 2018 Developer Conference.<sup>1</sup>  So, wonderful news! I'm so tired from picking up my phone to order my take-out, now my Google Assistant can just do all that hard work for me!
  </p><p>This week's revelations from Google's I/0 2018 offer A.I.-focused new hardware features, yet A.I. stole the show. The better integration of Google's assistant <i>with contacts and calling</i> is eyebrow-raising:</p>
  <p class="quote">The demo is part of what Google calls an "experiment" it plans to launch this summer. With Duplex, a "small" number of people will be able to book restaurant reservations and hair appointments and to check holiday hours, stuff you'd normally do over the phone. All of that back and forth happens on the back end -- between Google Assistant and, say, the restaurant. You won't even hear the conversation taking place. It'll come from an unspecified phone number, not your own number.<sup>1</sup></p>
  <p>The feature raises the question of advantage over Siri and Alexa... Although access to the Google-minutiae of our personal information (data thankfully we are now more empowered to download and even delete) begs the question of individuals' machines that talk directly to the restaurant's voice-activated receptionist (perhaps a french accent?) machine. I'm all for efficiency and better organization, but I'd hardly imagine being too busy to place a call myself! 
  </p>

 
  `;
  blogcite6 = `  <p>
  also just mean different assistants for different parts of our day!</p>
  <p class="cite">1. <a href="https://www.cnet.com/features/google-assistant-duplex-at-io-could-become-the-most-lifelike-ai-voice-assistant-yet/" target="_blank">https://www.cnet.com/features/google-assistant-duplex-at-io-could-become-the-most-lifelike-ai-voice-assistant-yet/ </a></p>
 <p class="cite">2. <a href="https://www.techradar.com/news/google-io-2018" target="_blank">https://www.techradar.com/news/google-io-2018</a></p>`;
  
  blogpost5 =  `<p class="firstparagraph">Challenges to the Hashgraph range from mathematical properties of acyclic graphs (think of the 7 Bridges of Koenigsburg, the riddle of crossing town while crossing each bridge exactly once) to the social implications of how to "distribute" data and <i>who actually holds onto the keys at the end of the day.  </i>
  </p>
  <p class="quote">While GridAgents™ and in general multi-agent systems (MAS) offered strong models for representing complex and dynamic real-world environments, we were missing something very important that is becoming available today with blockchain and distributed ledger technologies. The missing links include (1) consensus, (2) immutability and (3) ability to operate in trustless environments. Dr. Maxim Orlovsky states:

  “Blockchain will give to Multi-Agent AI — the same thing that written language gave to humans — Means of Cognitive Evolution”
  
  Maxim also states that what blockchain brings to multi-agent systems is consensus algorithms for interpreting facts in a trustless multi-agent system. Consensus allows for nodes in the system to be in unanimous agreement on the state of things. Additionally, blockchain creates a permanent memory (immutability) making the vision of multi-agent systems much more complete. I call the addition of blockchain/DLTs to multi-agents system, AI 3.0. This AI 3.0 combines the benefits of over 30 years of research on AI, machine learning, and multi-agent systems with blockchain and DLT technology to finally enable the emerging industry 4.0 where billions of devices will be connected to the internet and will need to coordinate in real-time at the edge of the network.<sup>3</sup> </p>



  `;
  blogcite5  = `  <p class="cite">1.  <a href="      https://science.house.gov/legislation/hearings/subcommittee-oversight-and-subcommittee-research-and-technology-hearing-0" target="_blank">   https://science.house.gov/legislation/hearings/subcommittee-oversight-and-subcommittee-research-and-technology-hearing-0</a></p>  
  <p class="cite">2.  <a href="    https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/" target="_blank">    https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/</a></p>  
 <p class="cite">3.  <a href=" https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f" target="_blank">https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f</a></p> `;
 
  blogpost4 =  `<p class="firstparagraph">Blockchain challenges, like any field, start with social acceptance on one end, and technical acceptance on the other. The latter is a little more important, but the former usually runs the show because <i>it, financially speaking, <strong> is</strong> the show</i>. I mentioned the curve
  </p>
  <p class="quote">First, blockchain benefits from incumbency and familiarity. Why risk replacing it with a less well-tested technology whose vulnerabilities haven’t all been identified? Also, while it can retain as much transactional data as needed, hashgraph typically doesn’t contain as much transactional history as the Bitcoin blockchain does. For many applications, hashgraph would only keep track of users’ latest positive wallet balances.

  Second, the DAG system doesn’t involve the computation-heavy “proof of work” effort to verify transactions that some blockchains, such as Bitcoin blockchain, require. Having several miners ratify and vote to accept a transaction lends blockchain what some say is a greater degree of security that the ledger contains a single version of the truth than under DAG-based systems. 
  <br />
  <br />
  IOTA, the best-known DAG, is already the No. 10 largest cryptocurrency, with $6.6 billion in market capitalization, according to CoinMarketCap. 
  
  “Even first-year computer science students here at MIT laugh at the code when they see it,” Tadge Dryja, a research scientist at MIT who is working to scale the Bitcoin network, said in an email. 
  
  The hack MIT came up with “can’t happen in practice,” Serguei Popov, one of the founders of IOTA, said in a phone interview.
  
  
Hashgraph uses DAG differently: It uses it to record different aspects of transactions than IOTA, and has different security characteristics, according to hashgraph developers.
<sup>1</sup>
   



  `;
  blogcite4 = `  </p>
  <p class="cite">1. CoinDesk Source URL being researched. <a href="#" target="_blank">__</a></p>`;
  
  blogpost3 =  `<p class="firstparagraph">The lessons learned from last week's Romaine Lettuce Crisis has brought the <i>supply chain management</i> topic to the nation's dinner-table conversations. 
  (Quick recap in my <a href="#18-04-25">April 25th post</a>). The big issue is uninterrupted, comprehensive and permissioned data access to those ... mystery Romaine lettuce heads. What could hashgraph tech offer? Everything from real-time temperature sensors and ID's to cross-institution, cross-border accuracy from source to supply targets. And, next week Congress will also be talking about it:  
  </p>
  <p class="quote">
  Lawmakers in the U.S. Congress are set to hold a hearing on blockchain tech's use in global supply chains next week.

Two subcommittees of the U.S. House Committee on Science, Space and Technology - for Research and Technology, and Oversight - will meet on May 8, a newly published notice reveals. The hearing is entitled "Leveraging Blockchain Technology to Improve Supply Chain Management and Combat Counterfeit Goods."<sup>1</sup>
</p>
<p>Here, the Science, Space, & Technology Committee <sup>2</sup> of Congress will be meeting This Tuesday, May 8th, hearing from Witnesses from Maersk (head of global trade digitization), UPS (global customs brokerage staff), and of course the good ol' Dept. of Homeland Security, and doubtless an international<sup>3</sup> platoon of lawyers! </p>

  
  `;
  blogcite3 = ` <p class="cite">1. <a href="https://www.coindesk.com/us-lawmakers-hear-case-blockchain-supply-chain/" target="_blank">https://www.coindesk.com/us-lawmakers-hear-case-blockchain-supply-chain/</a></p>
  <p class="cite">2. <a href="https://science.house.gov/legislation/hearings/subcommittee-oversight-and-subcommittee-research-and-technology-hearing-0" target="_blank">https://science.house.gov/legislation/hearings/subcommittee-oversight-and-subcommittee-research-and-technology-hearing-0</a></p> 
   <p class="cite">3. <a href="https://www.mckinsey.com/industries/financial-services/our-insights/global-payments-2017-amid-rapid-change-an-upward-trajectory">https://www.mckinsey.com/industries/financial-services/our-insights/global-payments-2017-amid-rapid-change-an-upward-trajectory</a></p> `;
  
blogpost2 =  `<p class="firstparagraph">The most polished, cryptographically stable leader of  <i>third generation</i> blockchain technology is formally released this month, and anticipation is anything but calm. (Some background posts help contextualize this 2-part series on Hashgraph  technology and potential for capturing per-micro-second, real-time financial needs of the globalizing economy: <a href="#18-04-18"> April 18</a> and <a href="#18-04-02">April 2</a>.) The formal release is on May 9th, but this May 1st press release caught my attention as we see a glimpse of this technology on a public* ledger: 
</p>
<p class="quote"> CULedger and Hedera today announced a partnership whereby CULedger will use Hedera's hashgraph platform and public ledger to build a system for cross-border payments. CULedger has already been using the private ledger version of hashgraph, offered by Swirlds, for general purpose, permissioned ledger use.<sup>1</sup> </p>
<p>The big news is Hedera's "public" blockchain ledger service that moves closer to popular usage with it's unique <i>directed acyclic graphs</i>, whose speed increases with scale.  Until recently, Blockchain tech has been hamstrung in the domain of micro-transactions, so now that the barrier has been crossed, how many sectors of life will be enhanced? All. But not yet. Once 5G technology (100 times faster, 100 times the capacity of 4G) is rolled out, then we hit the big leagues.</p> 
<p class="quote">A group of U.S. credit unions looking to pool resources considered the Bitcoin and Ethereum blockchains to track their business, but wound up selecting something else entirely: hashgraph.</p>
<p class="quote">Currently, cross-border payments are painful for all parties involved," said Rick Cranston, COO of CULedger. "They take time, they're expensive, and there is limited visibility into the transaction. Hashgraph is fast and it provides visibility between the two parties at a significantly lower cost. It also eliminates concerns regarding fraud and default, since transactions are recorded immutably on the public ledger, and manual processes, since transactions are automated via smart contracts.<sup>1</sup></p>
<p> ...to be continued...</p> 

`;
blogcite2 = `<p class="cite"><a href="https://www.prnewswire.com/news-releases/culedger-selects-hedera-hashgraph-to-build-global-ledger-for-cross-border-payments-300639874.html" target="_blank">https://www.prnewswire.com/news-releases/culedger-selects-hedera-hashgraph-to-build-global-ledger-for-cross-border-payments-300639874.html</a></p>
<p class="cite"><a href="https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/" target="_blank">https://venturebeat.com/2018/03/13/hedera-hashgraph-and-mz-unveil-next-generation-blockchain-alternative/</a></p>

<p class="cite"><a href="https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f" target="_blank">https://medium.com/hashgraph/ai-3-0-why-hashgraph-and-how-it-will-revolutionize-blockchain-and-ai-86a6ef715c9f</a></p>`;

blogpost1 =  `<p class="firstparagraph">May. Spring. Exercise. All wonderful things, reacquainting with Nature--if we can and <i>if we let <strong>Tech</strong> let ourselves outside</i>: Let's face it, screens  don't mix well with the sun! <</p>
<p>Recently  though,Tech made a real comeback in the Mother Nature department, thanks to the 2016 Pok&eacute;mon rage that drew crowds out in droves and into the streets and haphazard places over countless miles walked.  Technology, at long last assumes a new role:<i> an ever dedicated activity coach</i> According to <i>Behavioralist psychology</i>, the actions frame the state of mind, so it only makes perfect sense to set our tech devices to where we want to go!</p>
<p>But <i>some</i> of the benefits of exercise ...
</p>
<p class="quote"> 
 Neurotrophins, endogenous proteins that support brain plasticity likely mediate the beneficial effects of exercise on the brain. In clinical studies, exercise increases brain volume in areas implicated in executive processing, improves cognition in children with cerebral palsy and enhances phonemic skill in school children with reading difficulty. Studies examining the intensity of exercise required to optimize neurotrophins suggest that moderation is important. Sustained increases in neurotrophin levels occur with prolonged low intensity exercise, while higher intensity exercise, in a rat model of brain injury, elevates the stress hormone, corticosterone.<sup>1</sup> 
 </p> <p>
 ... more on this later ...</p>

`;
blogcite1 = `<p class="cite"><a href="https://www.tandfonline.com/doi/abs/10.1080/17518420801997007" target="_blank">https://www.tandfonline.com/doi/abs/10.1080/17518420801997007</a></p> ` ;

  var url =  
  [    
    { 
    id:'13',
    did:'may-18-05-15',
      date:'May 15, 2018',
  author:'by Thomas Maestas, MA',
  cat3:'Musing Blockchain',
  title:'Betting on the Mobile Blockchain <br />Part II:  Betting on the Hedera Hashgraph Distributed Ledger',
  post:blogpost13,
  blogcite:blogcite13 
  },   
   { 
    id:'12',
    did:'may-18-05-14',
      date:'May 14, 2018',
  author:'by Thomas Maestas, MA',
  cat3:'Sociology Tomorrow!',
  title:'Betting on Mobile Blockchain<br /> Part I: The Floodgates of Money have Opened!',
  post:blogpost12,
  blogcite:blogcite12
  },  
 { 
    id:'11',
    did:'may-18-05-12',
      date:'May 12-13, 2018<br />Weekend',
  author:'by Thomas Maestas, MA',
  cat3:'Web Dev Affairs',
  title:'The Wedding of JavaScript and WebAssembly: <br />Part III: The Nuts and Bolts of the Relationship',
  post:blogpost11,
  blogcite:blogcite11
  },   
    { 
      id:'10',
      did:'may-18-05-11',
        date:'May 11, 2018',
    author:'by Thomas Maestas, MA',
    cat3:'Sociology Tomorrow!',
    title:'The Wedding of JavaScript and WebAssembly: <br />Part II: How Secure and Safe is this New Mobile World?',
    post:blogpost10,
    blogcite:blogcite10
    },   
    
   { 
      id:'9',
      did:'may-18-05-10',
        date:'May 10, 2018',
    author:'by Thomas Maestas, MA',
    cat3:'Web Dev Affairs',
    title:'The Wedding of JavaScript and WebAssembly: <br />Part I: The Opening of a New Mobile App World',
    post:blogpost9,
    blogcite:blogcite9
    },   
    { 
      id:'8',
      did:'may-18-05-09',
        date:'May 9, 2018',
    author:'by Thomas Maestas, MA',
    cat3:'Musing Blockchain',
    title:'Google I/O 2018, Part III:<br /> The Browser\'s Achilles Heel Exposed',
    post:blogpost8,
    blogcite:blogcite8
    },   
    {    
    id:'7',
    did:'may-18-05-08',
    date:'May 8, 2018',
    author:'by Thomas Maestas, MA',
    cat3:'Web Dev Affairs',
    title:'Google I/O 2018, Part II:<br />   Progressive Web Apps (PWAs) Quietly Taking Over the Mobile App World',
    post:blogpost7,
   blogcite:blogcite7
     },
    { 
    id:'6',
      did:'may-18-05-07',
        date:'May 7, 2018',
    author:'by Thomas Maestas, MA',
    cat3:'Web Dev Affairs',
    title:'Google I/O 2018,  Part I:<br />  Google Duplex, Do We Really Want to be as Lazy as Possible?',
    post:blogpost6,
    blogcite:blogcite6
    }        
      ,
    { 
      id:'5',
      did:'may-18-05-05',
        date:'May 5-6, 2018<br />Weekend',
    author:'by Thomas Maestas, MA',
    cat3:'Musing Blockchain',
    title:'3rd Generation Blockchain: How Fast can the Blockchain Operate? Part IV: Potential Solutions for Blockchain Stability',
    post:blogpost5,
    blogcite:blogcite5
    },   
    {    
    id:'4',
    did:'may-18-05-04',
    date:'May 4, 2018',
    author:'by Thomas Maestas, MA',
    cat3:'Musing Blockchain',
    title:'3rd Generation Blockchain: How Fast can the Blockchain Operate? Part III: : The Challenges for the Directed Acyclic Graph (DAG) with Ripple and  Iota Coin',
    post:blogpost4,
    blogcite:blogcite4
     },
      { 
    id:'3',
    did:'may-18-05-03',
    date:'May 3, 2018',
    author:'by Thomas Maestas, MA',
    cat3:'Musing Blockchain',
    title:'3rd Generation Blockchain: How fast can the blockchain operate? Part II: : Speed Needs of   Supply Chain Management',
    post:blogpost3,
    blogcite:blogcite3
  },
  { 
    id:'2',
    did:'may-18-05-02',
    date:'May 2, 2018',
    author:'by Thomas Maestas, MA',
    cat3:'Musing Blockchain',
    title:'3rd Generation Blockchain: How fast can the blockchain operate? nPart I: Speed needs of the Financial Sector',
    post:blogpost2,
    blogcite:blogcite2
  },
    { 
    id:'1',
    did:'may-18-05-01',
    date:'May 1, 2018',
    author:'by Thomas Maestas, MA',
    cat3:'Web Dev Affairs',
    title:'Technology: The Coincidental and Unintended Bane of Exercise',
    post:blogpost1,
   blogcite:blogcite1
   }
   ] ;

   for (i=0;i<url.length;i++){ 
    var cat = ` 
    <div id="${url[i].did}" class="blogDiv"> 
    <hr />  
    <a href="#top"><button>Top</button></a>  
    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  
    <h5 id="cat3" class="  subdailytech">${url[i].cat3}</h5> 
    <p id="author" class="  author">${url[i].author}</p>   
    <h6  id="date" class="  chapternumber">${url[i].date}</h6>    
    <h6  id="title"   class="dailytitle chapternumber">${url[i].title}</h6>
    <br />
    <div id="post">${url[i].post}
    </div>
    <div id="blogcite">${url[i].blogcite}
    </div>` ;
document.getElementById("paragraph-may").innerHTML += cat; 
} 
 
for (i=0;i<url.length;i++){ 
  var catMod = `
  <div id="${url[i].did}_mod" class="blogDivMod"> 
  <hr />  
  <a href="#top-mod"><button>Top</button></a>   
  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  
  <h5 id="cat3" class="  subdailytech">${url[i].cat3}</h5>  
  <p id="author" class="  author">${url[i].author}</p>   
  <h6  id="date" class="  chapternumber">${url[i].date}</h6>    
  <h6  id="title"   class="dailytitle chapternumber">${url[i].title}</h6>
  <br />
  <div id="post">${url[i].post}</div>
  </div>
 <div id="blogcite">${url[i].blogcite}
 </div>`;
document.getElementById("paragraph-may-mod").innerHTML += catMod;
}
}; 


bloggerMay();  

