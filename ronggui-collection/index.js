var scenes = {
  "restaurant": {
    "sides": [
      "images/1.front.jpg",
      "images/1.right.jpg",
      "images/1.back.jpg",
      "images/1.left.jpg",
      "images/1.top.jpg",
      "images/1.bottom.jpg"
    ],
    "autorotate": 0,
    "infobox": "<b>Breakfast Restaurant</b>",
    "touch": true,
    "gyro": false
  },
  "old-house-1": {
    "sides": [
      "images/2.front.jpg",
      "images/2.right.jpg",
      "images/2.back.jpg",
      "images/2.left.jpg",
      "images/2.top.jpg",
      "images/2.bottom.jpg"
    ],
    "autorotate": 0,
    "infobox": "<b>Old House</b>",
    "touch": true,
    "gyro": false
  },
  "old-house-2": {
    "sides": [
      "images/3.front.jpg",
      "images/3.right.jpg",
      "images/3.back.jpg",
      "images/3.left.jpg",
      "images/3.top.jpg",
      "images/3.bottom.jpg"
    ],
    "lon": 90,
    "autorotate": 0,
    "infobox": "<b>Old House</b>",
    "touch": true,
    "gyro": false
  },
  "old-house-3": {
    "sides": [
      "images/4.front.jpg",
      "images/4.right.jpg",
      "images/4.back.jpg",
      "images/4.left.jpg",
      "images/4.top.jpg",
      "images/4.bottom.jpg"
    ],
    "lon": 90,
    "autorotate": 0,
    "infobox": "<b>Old House</b>",
    "touch": true,
    "gyro": false
  },
  "dock": {
    "sides": [
      "images/5.front.jpg",
      "images/5.right.jpg",
      "images/5.back.jpg",
      "images/5.left.jpg",
      "images/5.top.jpg",
      "images/5.bottom.jpg"
    ],
    "lon": 90,
    "autorotate": 0,
    "infobox": "<b>Dock</b>",
    "touch": true,
    "gyro": false
  },
  "waterlock": {
    "sides": [
      "images/6.front.jpg",
      "images/6.right.jpg",
      "images/6.back.jpg",
      "images/6.left.jpg",
      "images/6.top.jpg",
      "images/6.bottom.jpg"
    ],
    "lon": 120,
    "autorotate": 0,
    "infobox": "<b>Waterlock</b>",
    "touch": true,
    "gyro": false
  },
  "run-down-house": {
    "sides": [
      "images/7.front.jpg",
      "images/7.right.jpg",
      "images/7.back.jpg",
      "images/7.left.jpg",
      "images/7.top.jpg",
      "images/7.bottom.jpg"
    ],
    "lon": 90,
    "autorotate": 0,
    "infobox": "<b>Top of a run-down house</b>",
    "touch": true,
    "gyro": false
  }
};
parse_panorama("restaurant", scenes);
$('#scenes').change(function() {
  $('#pano').trigger('leanoramaRefresh', scenes[$(this).val()]);
});
