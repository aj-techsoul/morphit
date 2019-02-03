# MorphIt
This allows you to morph HTML in a simple way.

## Easily Setup your Codes
Now you can use like this to make it work

### HTML
```
<p id="morphit">
  <strong>Great</strong> Looks,
  <strong>Muscular</strong> Body,
  <strong>Stylish</strong> Attitude
</p>
```
### JS
Download morphit.js and then use it like this
```
<script src="morphit.js" charset="utf-8"></script>
<script>
   // Simple Use
   morphit('fadeInRight');
   
   // Customizable Use
   morphit({
        animate: 'fadeIn',       // animation using animate.css
        interval: 3000,         // Time Interval, 3000 = 3 seconds
        morphid: '#morphit',   //  ID of the element, Don't use Class. For multiple use, call this function multiple times with diffrent ids.
        seperator: ','        // Seperators - with which you are seperating your code, here we used , (comma)
   });
</script>
```

#### Note: To make the animation Work, you must use animate.css also, you can link it by adding this below line to your head tag of html.
 
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
```

