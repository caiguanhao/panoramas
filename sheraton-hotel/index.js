parse_panorama({
  "outside": {
    "sides": [
      "images/1.front.jpg",
      "images/1.right.jpg",
      "images/1.back.jpg",
      "images/1.left.jpg",
      "images/1.top.jpg",
      "images/1.bottom.jpg"
    ],
    "lon": 180,
    "autorotate": 0,
    "infobox": "<b>Front of the Hotel</b>",
    "touch": true,
    "gyro": false,
    "hotspots": [
      {
        "type": "nav",
        "face": 1,
        "x": 500,
        "y": 470,
        "name": "Entry",
        "value": "entry"
      }
    ]
  },
  "entry": {
    "sides": [
      "images/2.front.jpg",
      "images/2.right.jpg",
      "images/2.back.jpg",
      "images/2.left.jpg",
      "images/2.top.jpg",
      "images/2.bottom.jpg"
    ],
    "lon": 90,
    "autorotate": 0,
    "infobox": "<b>Entry of the Hotel</b>",
    "touch": true,
    "gyro": false,
    "hotspots": [
      {
        "type": "nav",
        "face": 0,
        "x": 580,
        "y": 500,
        "name": "Interior",
        "value": "inside"
      }, {
        "type": "nav",
        "face": 2,
        "x": 450,
        "y": 550,
        "name": "Front",
        "value": "outside"
      }
    ]
  },
  "inside": {
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
    "infobox": "<b>Interior of the Hotel</b>",
    "touch": true,
    "gyro": false,
    "hotspots": [
      {
        "type": "nav",
        "face": 2,
        "x": 180,
        "y": 470,
        "name": "Entry",
        "value": "entry"
      }
    ]
  }
});
