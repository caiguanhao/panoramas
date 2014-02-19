function parse_panorama(default_scene, scenes) {
  $('#pano').leanorama(scenes[default_scene]).on('leanoramaHotspotClick', function(e, hotspot) {
    if (hotspot.type == 'nav') $(this).trigger('leanoramaRefresh', scenes[hotspot.value]);
  });
}
