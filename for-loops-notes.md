# Practical JavaScript: Version 5 - Loops of Logic

## The 'for' Loop
- So you can repeat a certain amount of code any number of times
- Initialization - creating a variable to keep track of how many times you want to do something
- Condition - "If this is true keep going, otherwise stop"
- Final Expression - what happens each round (ex: each round increase value of i by 1)

#### Example in plain english

```

i = 0  // Initialization (0 is the variable to keep track)
Say 'hey' if i < 3 // Condition
Increase i by 1 // Final Expression

0 "hey"
1 "hey"
2 "hey"
3
```
#### Code - setup

```JavaScript

for (initialization; condition; final-expression) {
  // what you want to repeat here
}

```
#### Example

``` JavaScript

for (var i = 0; i < 3; i++) {
  console.log('hey');
}

// Returns:

'hey'
'hey'
'hey'

```

## Looping Over Arrays

- Using testArray.**length** makes the code dyamic and works with the test array no matter how many items are in it. Hardcoding a number means that if any additional items are added, they will not be printed out.

``` JavaScript

for (var i = 0; i < testArray.length; i++) {
  console.log('hey');
}
```
