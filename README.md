## A lightweight image slider

### Features

- Auto play with a timer that resets when next, back or a random image is clicked
- Super lightweight (2kb minified)
- Easy to use
- Custom left and right cursors (shown in second image below)
- Simple customisation

### Images

<div style="text-align:center">
	<img src ="http://i.imgur.com/bFp8h5T.png" alt="slider">
</div>

<div style="text-align:center">
	<img src ="http://i.imgur.com/3LVafrS.png" alt="slider">
</div>

### Usage

Simply include jQuery and the `slider.min.js` file as below.

For every image you include in the `.banner` div, you need to have a corresponding `<a href="1"></a>` with the image number.

```html
<!DOCTYPE html>
<html>
<head>

  <title>lightweight-slider</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>
<body>

  <div class="banner" data-height="600" data-width="100%" data-autoslide="5000">
    <img src="1.jpg" class="slider">
    <img src="2.jpg" class="slider">
    <img src="3.jpg" class="slider">

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

### Customisation

Height: 
- Add `data-height="600"` to the `.banner` div. Height is in pixels.

Width: 
- Add `data-width="100%"` to the `.banner` div. Width is in percentages.

Autoslide:
- Add `data-autoslide="5000"` to the `.banner` div. Time is in milliseconds.

Cursors:
- Add `data-previous-cursor="left.png"` to the `.previous` div. You can provide an image as shown in the example, or leave blank to use the CSS attribute `cursor: w-resize`.
- Add `data-next-cursor="right.png"` to the `.next` div. You can provide an image as shown in the example, or leave blank to use the CSS attribute `cursor: e-resize`.

