# Version 7 Notes

## Version 7 - HTML and the DOM

1. There should be a "Display Todos" button and a "Toggle All" button in the app
2. Clicking "Display Todos" should run todoList.displayTodos.
3. Clicking "Toggle All" should run todoList.toggleAll

## HTML

- HTML is a language that programmers use for describing web pages
- HTML uses tags and sets of tags are considered 'elements'
- Some elements don't have closing tags such as the link tag

``` HTML

<!-- Different elements are nested inside each other as 'child elements' -->
<head>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>
```

- The html tag is telling the browser that what's inside them is HTML
- The head tag gives the browser info about the doc that is not shown on the page
  - The link to our script.js document (the JS we've written wouldn't work without this link)
  - The link to the CSS stylesheet that controls the look of the page
- The body tag is what is visually shown on the page

##### Where should the JS script go within the HTML?

The standard play is to put JS script tags at the end of the document body so they don't block rendering of the page:

``` HTML

<html>

  <head>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <!-- All other HTML elements within body -->
    <script src="script.js"></script>
  </body>

</html>
```

[However, it should be noted that there are some newer approaches to loading scripts: https://stackoverflow.com/a/24070373]

##### Giving IDs to elements

Giving an element an ID allows that element to be referenced specifically by the JS. We gave the buttons in our todo app IDs so that they could be accessed individually by our JS:

``` HTML

<button id = "displayTodosButton">Display Todos</button>
```



## New JS Concepts

### What is the DOM?

When a web page is loaded, the browser creates a Document Object Model of the page. With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

#### With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

### .addEventListener()

The addEventListener() method attaches an event handler to the specified element.

#### Syntax

``` JavaScript

element.addEventListener(event, function);
```

In our code we used the 'click' event listener for our Display Todos and Toggle All buttons:

``` JavaScript

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});
```

[More](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)

### .getElementById()

Returns a reference to the element by its ID. The ID is a string which can be used to uniquely identify the element, found in the HTML id attribute.

#### Syntax

``` JavaScript

element = document.getElementById(id);
```
[More](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
