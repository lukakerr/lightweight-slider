## A lightweight image slider/carousel

### Demo

Have a look at the slider [here](https://lukakerr.github.io/projects/lightweight-slider/demo.html)

### Features

- Auto play with a timer that resets when next, back or a random image is clicked
- Super lightweight (3kb minified & packed, 4kb just minified)
- Easy to use
- Custom left and right cursors (shown in second image below)
- Simple customisation
- Vanilla JavaScript (no jQuery)

### Images
<sup>Taken by <a href="https://lukakerrphoto.com">me!</a></sup>
<div style="text-align:center">
	<img src ="http://i.imgur.com/bFp8h5T.png" alt="slider">
</div>

<div style="text-align:center">
	<img src ="http://i.imgur.com/3LVafrS.png" alt="slider">
</div>

### Usage

Simply include either the `slider.min.js` or the `slider.packed.js` file at the bottom of your `.html` file, shown below.

The difference between the `slider.min.js` and the `slider.packed.js` is file size and execution speed. The `slider.packed.js` file is smaller in size, although has to run through `eval()` which increases execution time. On the other hand, the `slider.min.js` file is slightly larger in size, but doesn't need to be run through `eval()`, and executes faster. The file size and execution time differences are minimal, but you have the option to pick which one you want to put first - file size or execution speed.

For every image you include in the `.banner` div, you need to have a `<a href="1"></a>` with the corresponding image number.

```html
<!DOCTYPE html>
<html>
<head>

  <title>lightweight-slider</title>

</head>
<body>

  <div class="banner" data-height="600" data-width="100%" data-slide-speed="900" data-autoslide="5000">
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
  <!-- Or <script src="slider.packed.js"></script> -->

</body>
</html>
```

### Customisation

Height: 
- Add `data-height="600"` to the `.banner` div. Height is in pixels.

Width: 
- Add `data-width="100%"` to the `.banner` div. Width is in percentages.

Slide transition speed:
- Add `data-slide-speed="900"` to the `.banner` div. Speed is in milliseconds.

Autoslide:
- Add `data-autoslide="5000"` to the `.banner` div. Time is in milliseconds.

Cursors:
- Add `data-previous-cursor="left.png"` to the `.previous` div. You can provide an image as shown in the example, or leave blank to use the CSS attribute `cursor: w-resize`.
- Add `data-next-cursor="right.png"` to the `.next` div. You can provide an image as shown in the example, or leave blank to use the CSS attribute `cursor: e-resize`.

