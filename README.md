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
```
<script src="morphit.js" charset="utf-8"></script>
<script>
   // Simple Use
   morphit('fadeInRight');
   
   // Customizable Use
   morphit({
        animate: 'fadeIn',
        interval: 3000,
        morphid: '#morphit',
        seperator: ','
   });
</script>
```

#### Note: To make the animation Work, you must use animate.css also, you can link it by adding this below line to your head tag of html.
 
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
```

