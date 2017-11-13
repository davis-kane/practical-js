# HTML Essentials

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

## What is an attribute?

Attributes give an element additional information so that it can be referenced
