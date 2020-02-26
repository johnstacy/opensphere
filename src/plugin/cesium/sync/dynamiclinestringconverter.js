goog.module('plugin.cesium.sync.DynamicLineStringConverter');

const BaseConverter = goog.require('plugin.cesium.sync.BaseConverter');
const {shouldUpdatePrimitive} = goog.require('plugin.cesium.primitive');
const {createPolyline, updatePolyline} = goog.require('plugin.cesium.sync.DynamicLineString');

/**
 * Converter for DynamicFeature lines
 */
class DynamicLineStringConverter extends BaseConverter {
  /**
   * @inheritDoc
   */
  create(feature, geometry, style, context) {
    const polylineOptions = createPolyline(feature, geometry, style, context);
    context.addPolyline(polylineOptions, feature, geometry);
    return true;
  }

  /**
   * @inheritDoc
   */
  update(feature, geometry, style, context, primitive) {
    if (!shouldUpdatePrimitive(feature, geometry, style, context, primitive)) {
      return false;
    }

    updatePolyline(feature, geometry, style, context, primitive);
    return true;
  }
}


exports = DynamicLineStringConverter;
