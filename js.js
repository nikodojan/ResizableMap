var $el = $("#map-container");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $("#scaleable-wrapper");

$wrapper.resizable({
  resize: doResize
});

function doResize(event, ui) {
  
  var scale, origin;
    
  scale = Math.min(
    ui.size.width / elWidth,    
    ui.size.height / elHeight
  );
  
  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });
  
}

var starterData = { 
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
doResize(null, starterData);


// added code for parking slots

let createTopRight = function () {
  let main = document.getElementById('map-container')
  let distH = 1;

  for (let i = 0; i <= 10; i++){
    let slot = document.createElement('div')
    slot.style.width = '5%'
    slot.style.height = '15%'
    slot.style.background = 'red'
  
    slot.style.position = 'absolute'
    slot.style.top = '1%'
    slot.style.right = distH + i*distH + (i*5) + '%'
    main.append(slot);
  }
}

let createMiddleTop = function () {
  let main = document.getElementById('map-container')
  let distH = 1;

  for (let i = 0; i <= 10; i++){
    let slot = document.createElement('div')
    slot.style.width = '5%'
    slot.style.height = '15%'
    slot.style.background = 'red'
  
    slot.style.position = 'absolute'
    slot.style.top = '35%'
    slot.style.right = distH + i*distH + (i*5) + '%'
    main.append(slot);
  }
}
let createMiddleBottom = function () {
  let main = document.getElementById('map-container')
  let distH = 1;

  for (let i = 0; i <= 10; i++){
    let slot = document.createElement('div')
    slot.style.width = '5%'
    slot.style.height = '15%'
    slot.style.background = 'red'
  
    slot.style.position = 'absolute'
    slot.style.top = '52%'
    slot.style.right = distH + i*distH + (i*5) + '%'
    main.append(slot);
  }
}
let createBottom = function () {
  let main = document.getElementById('map-container')
  let distH = 1;

  for (let i = 0; i <= 10; i++){
    let slot = document.createElement('div')
    slot.style.width = '5%'
    slot.style.height = '15%'
    slot.style.background = 'red'
  
    slot.style.position = 'absolute'
    slot.style.top = '84%'
    slot.style.right = distH + i*distH + (i*5) + '%'
    main.append(slot);
  }
}

let createLeft = function () {
  let main = document.getElementById('map-container')
  let distV = 1;

  for (let i = 0; i <= 7; i++){
    let slot = document.createElement('div')
    slot.style.width = '8%'
    slot.style.height = '8%'
    slot.style.background = 'red'
  
    slot.style.position = 'absolute'
    slot.style.top = 16 + i*distV + (i*8) + '%'
    slot.style.left = '1%'
    main.append(slot);
  }
}

let drawParkingSlots = function () {
  createTopRight()
  createMiddleTop()
  createMiddleBottom()
  createBottom()
  createLeft()
}

drawParkingSlots()


