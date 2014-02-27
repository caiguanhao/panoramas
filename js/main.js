function parse_panorama(scenes) {
  for (var first_scene in scenes) break;
  var default_scene = first_scene;
  var scene = window.location.hash.substr(1);
  if (scenes.hasOwnProperty(scene)) {
    default_scene = scene;
  }
  if ($('#scenes').length === 1) {
    $.each(scenes, function(name, scene) {
      $('#scenes').append('<option value="' + name + '">' +
        scene.infobox.replace(/(<([^>]+)>)/ig, '') + '</option>');
    });
    $('#scenes').val(default_scene);
    $('#scenes').change(function() {
      window.location.hash = $(this).val();
    });
  }
  $('#pano').leanorama(scenes[default_scene]).on('leanoramaHotspotClick', function(e, hotspot) {
    if (hotspot.type == 'nav') window.location.hash = hotspot.value;
  });
  $(window).on("hashchange", function() {
    var scene = window.location.hash.substr(1);
    if (!scenes.hasOwnProperty(scene)) {
      scene = first_scene;
    }
    $('#pano').trigger('leanoramaRefresh', scenes[scene]);
  });
}
