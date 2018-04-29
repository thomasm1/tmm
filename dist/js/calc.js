

console.log("calc loaded");
document.getElementById("calc").innerHTML = `
<form id="form">
							<p>
								<input class="bu" name="seven" onclick="updateString('7')" type="button" value="7" />
								<input class="bu" name="eight" onclick="updateString('8')" type="button" value="8" />
								<input class="bu" name="nine" onclick="updateString('9')" type="button" value="9" />
								<input class="bu" name="div" onclick="updateString('/')" type="button" value="/" />
								<br />
								<input class="bu" name="four" onclick="updateString('4')" type="button" value="4" />
								<input class="bu" name="five" onclick="updateString('5')" type="button" value="5" />
								<input class="bu" name="six" onclick="updateString('6')" type="button" value="6" />
								<input class="bu" name="mult" onclick="updateString('*')" type="button" value="*" />
								<br />
								<input class="bu" name="one" onclick="updateString('1')" type="button" value="1" />
								<input class="bu" name="two" onclick="updateString('2')" type="button" value="2" />
								<input class="bu" name="three" onclick="updateString('3')" type="button" value="3" />
								<input class="bu" name="plus" onclick="updateString('+')" type="button" value="+" />
								<br />
								<input class="bu" name="openparenth" onclick="updateString('(')" type="button" value="(" />
								<input class="bu" name="closeparenth" onclick="updateString(')')" type="button" value=")" />
								<input class="bu" name="power" onclick="updateString(';-)')" type="button" value=";-)" />
								<input class="bu" name="modulus" onclick="updateString(':-\)')" type="button" value=":-)" />
								<br />
								<input class="bu" name="zero" onclick="updateString('0')" type="button" value="0" />
								<input class="bu" name="dot" onclick="updateString('.')" type="button" value="." />
								<input class="bu" name="clear" onclick="document.getElementById("calc").input.value='';inputString=''" type="button" value="C"
								/>
								<input class="bu" name="minus" onclick="updateString('-')" type="button" value="-" />
								<br />
								<input class="bu" name="calc" onclick="document.getElementById("calc").input.value = eval(inputString); inputString=''" style="color:white;background-color:teal"
								    type="button" value="=" />
								<input class="bu prim" name="mem" onclick="document.getElementById("calc").storedValue.value = parseInt(document.getElementById("calc").storedValue.value) + parseInt(document.getElementById("calc").input.value)"
								    type="button" value="M +" />
								<input class="bu prim" name="recall" onclick="updateString(document.getElementById("calc").storedValue.value)" type="button" value="MRC"
								/>
								<input class="bu prim" name="memClear" onclick="document.getElementById("calc").storedValue.value=0" type="button" value="MC"
								/>
								<input name="storedValue" type="hidden" value="0" />
								<br />
								<br />
								<input id="window" name="input" type="text" />
							</p>
                        </form>
					`
					
