### multi-line
 comment
###
name = "Tom"
message = "You are now witnessing Coffeescript compile into JS"

csOutput = document.getElementById("csoutput")

csOutput.innerHTML = "Hello #{name}<br><br> Message heard loud and clear:  #{message}<br><br>"
 
areYouHappy = no

aString = "I'm a String"
###
csOutput.insertAdjacentHTML('beforeend'), 'aString is a String<br>' if typeof aString is 'string'
###
largestNum = Number.MAX_VALUE

smallestNum = Number.MIN_VALUE

largeNumStr = "The largest num is #{largestNum}<br>"

smallNumStr = "The smallest num is #{smallestNum}<br>"

csOutput.insertAdjacentHTML('beforeend', largeNumStr + '<br>')

csOutput.insertAdjacentHTML('beforeend', 'areYouHappy is a Boolean<br>') if typeof areYouHappy is 'boolean'

csOutput.insertAdjacentHTML('beforeend', "5 + 2 = #{5 + 2}<br>")

csOutput.insertAdjacentHTML('beforeend', "5 + 2 = #{5 + 2}<br>") 

balance = 1563.87

csOutput.insertAdjacentHTML('beforeend', "Monthly Payment = #{(balance/12).toFixed(2)}<br><br>")

randNum = 5

csOutput.insertAdjacentHTML('beforeend', "randNum++ = #{randNum++}<br><br>")

csOutput.insertAdjacentHTML('beforeend', "randNum-- = #{randNum++}<br><br>")

# Math Properties
csOutput.insertAdjacentHTML('beforeend', "Math.PI = #{Math.PI}<br>")
csOutput.insertAdjacentHTML('beforeend', "math.E = #{Math.E}<br>")
csOutput.insertAdjacentHTML('beforeend', "abs(-8) = #{Math.abs(-8)}<br>")
csOutput.insertAdjacentHTML('beforeend', "math.E = #{Math.cbrt(1000)}<br>")
csOutput.insertAdjacentHTML('beforeend', "Math.floor(6.45) = #{Math.floor(6.45)}<br>")
### output:
Math.E = 2.718
Math.PI = 3.14
Math.abs(-8) = 8
Math.cbrt(1000) = 10
Math.ceil(6.45) = 7
Math.floor(6.45) = 6
Math.log(10) = 2.3
###
randNum = Math.floor(Math.random() * 100) + 1
fName = "Thomas"
lName = "Maestas"
csOutput.insertAdjacentHTML('beforeend', "Random Number = #{randNum}<br><br>")
csOutput.insertAdjacentHTML('beforeend', fName + " " + lName + "<br><br>")
longString = "This is a long string that goes forever"
csOutput.insertAdjacentHTML('beforeend', "String Length : #{longString.length}<br>")
csOutput.insertAdjacentHTML('beforeend', "Index of String : #{longString.indexOf("goes")}<br>") 
csOutput.insertAdjacentHTML('beforeend', "Word at 27 : #{longString.slice(27,31)}<br><br>")

randArray = ["word", false, 1234, 1.234]
csOutput.insertAdjacentHTML('beforeend', "Last 2 : #{randArray[2..3]}<br>")
oneTo10 = [1..10]
tenTo1 = [10..1]
combinedArray = oneTo10.concat tenTo1
oneTo10.push tenTo1...

csOutput.insertAdjacentHTML('beforeend', "#{oneTo10.toString()}<br>")

for x in oneTo10
    csOutput.insertAdjacentHTML('beforeend', "#{x}<br>")

evensOnly = oneTo10.filter (x) -> x % 2 == 0
csOutput.insertAdjacentHTML('beforeend', "#{evensOnly.toString()}<br>")

csOutput.insertAdjacentHTML('beforeend', "Max : #{Math.max oneTo10...}<br>")
csOutput.insertAdjacentHTML('beforeend', "Min : #{Math.min oneTo10...}<br>")

sumOfArray = oneTo10.reduce (x,y) -> x+y
csOutput.insertAdjacentHTML('beforeend', "Sum : #{sumOfArray}<br>")

peopleArray = [
    {
        name: "Tom",
        age: 41
        },
        {
            name: "Team",
            age:40
        }
]
 
csOutput.insertAdjacentHTML('beforeend', "people : #{peopleArray}<br>")

for x in oneTo10 when x%2 isnt 0
    csOutput.insertAdjacentHTML('beforeend', "#{x}<br>") 