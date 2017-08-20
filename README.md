## A lightweight image slider

### Features

- Auto play with a timer that resets when next, back or a random image is clicked
- Super lightweight (3kb minified)
- Easy to use
- Custom left and right cursors (shown in second image below)

### Images

<div style="text-align:center">
	<img src ="http://i.imgur.com/bFp8h5T.png" alt="slider">
</div>

<div style="text-align:center">
	<img src ="http://i.imgur.com/3LVafrS.png" alt="slider">
</div>

### Usage

Simply include jQuery and the `slider.min.js` file as below:

```html
<!DOCTYPE html>
<html>
<head>

  <title>lightweight-slider</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>
<body>

  <div class="banner" data-height="600">
    <img src="img/1.jpg" class="slider">
    <img src="img/2.jpg" class="slider">
    <img src="img/3.jpg" class="slider">

    <div class="previous" data-previous-cursor="left.png"></div>
    <div class="next" data-next-cursor="right.png"></div>

    <div class="links">
        <a href="1"></a>
        <a href="2"></a>
        <a href="3"></a>
    </div>
  </div>

  <script src="slider.min.js"></script>

</body>
</html>
```

For customisation, such as height and left and right cursors, include and modify the `data` attributes as shown above. 

In this repo are two images `left.png` and `right.png` which are used as cursors.

To change this, simply remove `data-previous-cursor="left.png"` and `data-next-cursor="right.png"`, or change the image files to your own.