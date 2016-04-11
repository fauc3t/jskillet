
/*
To set up my scramble method all you need is HTML in the following format:

<div class="scramble-me">
	<div><span>S</span><span>C</span><span>R</span><span>A</span><span>M</span><span>B</span><span>L</span><span>E</span></div>
	<div><span>T</span><span>H</span><span>I</span><span>S</span></div>
</div> 

I change the display to inline-block and the width of each span to be larger so that all letters stay in place (no left/right shifting of the word)

*/

//Milliseconds per iteration of the scramble method
var scrambleTimeout = 60;

//When div of center_name is hovered 'Nick' or 'Horn' 
//Script begins scramble
$('.scramble-me div').hover(function()
{
	//On hover
	//If the div is currently not being scrambled or unscrambled
	//Set data of div to 'scramble' = true
	//Initialize scramble
	if(!$(this).data("scramble") && !$(this).data('unscramble'))
	{
		$(this).data("scramble", true);
		scramble($(this));
	}
//On unhover
//Set data of div 'scramble' = false
}, function()
		{
			$(this).data("scramble", false);
		});


//Set up scramble
function scramble(div)
{	
	//Number of letters in the text of the span (child of div)
	var numLetters = div.find('span').length;
	//Initialize the charArray that will hold all child spans of the div being hovered
	var charArray = new Array(); 

	//Initialize the text var which will hold the original text of the div
	var text = "";

	//Iterate through the child spans of the div
	//Set each index of the charArray to a span
	//Append each letter of the child span to 'text'
	for(i = 0; i<numLetters; i++)
	{
		charArray[i] = div.find(':nth-child('+(i+1)+')');
		console.log(charArray[i].text());
		text+=charArray[i].text().trim();
	}
	
	//Start scramble by calling randomChar
	randomChar(charArray, div, 0, text);
}

//Sign a random char to the charArray and either continue to scramble the div
//or begin unsrambling it when the div is unhovered
function randomChar(charArray, div, num, text)
{
		//Random index to change char at (used for random scramble)
		var rand1 = Math.floor(Math.random()*charArray.length);

		//ASCII value from 33 to 94
		//64=@, 87=W, 37=%
		//All too big for scramble, overlapped adjacent characters
		var rand2 = Math.floor((Math.random() * 59)+33);
		if(rand2 == 64 || rand2 == 87 || rand2 == 37 || rand2 == 77)
			rand2 -=1;

		//Set index of charArray to the new char
		//Use rand1 for random scramble or num for sequential scramble
		charArray[rand1].html(String.fromCharCode(rand2));
		//charArray[num].html(String.fromCharCode(rand2));
		
		//progress num and check if it is greate than charArray.length
		//Set it to 0 if it is
		num+=1;
		if(num>=charArray.length)
			num=0;
	
	var newString = "";

	//While being scrambled (hovered)
	//Recursively scramble the div
	if(div.data("scramble") == true)
		setTimeout(function(){randomChar(charArray, div, num, text); }, scrambleTimeout);
		

	//If the div was being scrambled and is no longer set to 'scramble' (unhovered)
	//Start to unscramble the div
	else if(!div.data("unscramble"))
	{
		div.data("unscramble", true);
		unscramble(charArray, div, 0, 0, text);
	}
}

//Function to unscramble the scrambled DIV
//charArray: The array of spans left to be unscrambled
//div: the original div that was hovered
//index: if scrambling sequentially, this is used to progress to the next index (not needed for random scramble)
//text: the original text of the span (child of the div that was hovered)
function unscramble(charArray, div, it, index, text)
{
	//The first if/else statements are used every iteration for either setting an index of charArray back to
	//its original text or progressing the iterator by assigning a random char to the charArray

	//If the iterator has hit 5, set the next index of charArray back to the correct character of the original text
	//Set 'it' to zero
	//Reduce the size of charArray and text by removing the span/char at the first index
	if(it>=5)
	{
		//Use this for a random unscramble
		var rand = Math.floor(Math.random()*charArray.length);
		charArray[rand].html(text.charAt(rand));
		charArray.splice(rand,1);
		text = text.substring(0,rand) + text.substring(rand+1,text.length);
		it=0;

		//Use this for a sequential unscrarmble
		/*charArray[0].html(text.charAt(0));
		it = 0;
		charArray.splice(0, 1);
		text = text.substring(1, text.length);*/
	}

	//If the current index is greater then or equal to the charArray length
	//Set it back to 0
	//Set a new randomChar on the charArray
	//Increase the index and iterator ('it') by 1
	else
	{
		
		if(index>= charArray.length)
			index = 0;

		randomChar(charArray, div, index, text);
		index+=1;
		it+=1;
	}

	//The next if/else statements are used to either check for completion of the 'unscramble' 
	//or progress it further using recursion

	//If all characters of the original text/charArray have been iterated through (and removed)
	//Set the data 'unscramble' of the div to false
	//This happens when the unscramble is complete
	if(charArray.length <=0)
	{
		div.data("unscramble",false);
	}
	//Unscramble is not quite complete. 
	//Recursively calls 'unscramble' to further unscramble the charArray
	else
	{
		//Used to slow down the speed of the scramble when there are less letters left.
		//This is just used to make it look smoother
		var timeout = scrambleTimeout;

		if(charArray.length<=2)
		{
			timeout +=30;
		}

		//Recursively call unscramble after delay
		setTimeout(function(){unscramble(charArray, div, it, index, text);}, timeout);
	}

}
