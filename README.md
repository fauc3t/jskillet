#jskillet
For all breakfast and brunch lovers alike...
Or if you're just looking to add a simple scramble animation to some text on your website when a user hovers it.

##Usage

Requires jQuery.

Add jskillet.js to your preferred project directory and link to it in your HTML.

```<script src="scripts/jskillet.js"></script>```

Your HTML should be in the following format and the class ('scramble-me' in the example) can be anything you'd like:
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

Finally, make it all work by initializing it in any of your JavaScript files:
```
heatSkillet(".scramble-me", {});
```

##Heating Things Up
jskillet is set with defaults so that you can throw something together pretty easily. 
```
var defaults = {

	//Milliseconds per iteration of the scramble method
	'scramble_interval': 60,

	//Scramble/Unscramble using random indices or in order
	'inorder_scramble': false,
	'inorder_unscramble': false
}
```
Feel free to change whatever you'd like by passing through some new values when you initialize it.
```
heatSkillet(".scramble-me", {
    'scramble_interval': 40,
    'inorder_scramble': true,
    'inorder_unscramble': true
});
```
More customization will be added soon! 

##TODO

* Clean up code
* Add features for: 
 * Letting the user decide if they want the word unscrambled or not
 * Changing the word that unscrambles as long as it is <= length of the original div
 * Let the user remove characters they don't wish to appear during a scramble

#License
MIT

