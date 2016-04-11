#jskillet
For all breakfast and brunch lovers alike. 
Or if you're just looking to add a simple scramble animation to some text on your website when a user hovers it.

##Usage

Requires jQuery.

Add jskillet.js to your preferred project directory and link to it in your HTML.

Just add the 'scramble-me' class to a correctly formatted section of HTML.

```
<div class="scramble-me">
				<div>
					<span>S</span>
					<span>C</span>
					<span>R</span>
					<span>A</span>
					<span>M</span>
					<span>B</span>
					<span>L</span>
					<span>E</span>
				</div>

				<div>
					<span>T</span>
					<span>H</span>
					<span>I</span>
					<span>S</span>
				</div>
</div>
```

I also like to add CSS similar to the following so that the divs/spans surrounding the letters 
do not expand/shrink as they are scrambled. The width will have to change depending on font-size. 

```
.scramble-me div span{
  display: inline-block;
  width: 20px;
}
```

##TODO

* Clean up code
* Add features for: 
 * Letting the user decide if they want the word unscrambled or not
 * Speed of the scramble
 * Changing the word that unscrambles as long as it is <= length of the original div
 * Choosing between in-order/random-index scramble/unscramble.
 * Let the user remove characters they don't wish to appear during a scramble
* Add a manual once more features have been added

#License
MIT

