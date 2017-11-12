# Data Types & Comparisons

### Objects
- Can be as complex as you want - can have as many properties/methods within your object as you want
- In our todo app so far, all the code we've written is contained as part of our todoList object.

``` JavaScript

var todoList = {
  // All code so far written as part of todoList object.
};

```
- Arrays and functions are also objects

### Primitives
Primitives are the simple building blocks of the JavaScript (and most other) languages. They only have one form.

- String
``` JavaScript
"Look at this string!"
```
- Number
``` JavaScript
1, 2, 3, 4 ... 9000
```
- Boolean
``` JavaScript
true, false
```
- Undefined
  - Undefined values are simply those that haven't been set yet.
- Null
  - Explicitly means **'nothing'**
  - Ex: if you have a variable for someone's test score, and the score range is from 0 - 100, but they haven't taken the exam yet, that's when you'd use Null.

##### Is it an Object or a Primitive?

Very easy way to test if something is an object or a primitive - if it is not a primitive it is an object.

### Comparisons with Primitives

Key thing to remember with comparisons with primitives - it works the same way as it would in math class: is 9 < 100? Yes. Is 20 = 20? Yes.

##### Strict Comparison - Strings
``` JavaScript

'gordon' === 'gordon' // true
'gordon1' === 'gordon' // false
```

##### Strict Comparison - Numbers
``` JavaScript

100 === 100 // true
1 === 2 // false
```

##### Strict Comparison - Booleans
``` JavaScript

true === true // true
false === true // false
```

##### Strict Comparison - Undefined
``` JavaScript

undefined === undefined // true
```

##### Strict Comparison - Null
``` JavaScript

null === null //true
```

### Comparisons with Objects

Comparisons with primitives works completely differently than comparisons with objects. Comparisons with primitives work like you'd expect they would in math class. However, when you're comparing objects, the rules are totally different:

``` JavaScript

{} === {} // false
[1, 2, 3] === [1, 2, 3] // false
```

It's important to understand why comparisons with objects work differently than comparisons with primitives because not understanding can cause unexpected behavior.

JavaScript considers objects as separate even if they contain the same values. When you create an object, JavaScript creates them as different locations in memory. It's comparing those memory 'addresses' to understand if they're the same object or not.


The only time you can have a object comparison that's equal is when you're comparing the same object:
``` JavaScript

var houseA = {};
houseA === houseA // true
```
