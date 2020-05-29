export const useDelta = () => {
  const deg2rad = (angle) => {
    return angle * 0.017453292519943295; // (angle / 180) * Math.PI;
  };

  const rad2deg = (angle) => {
    return angle * 57.29577951308232; // angle / Math.PI * 180
  };
  var radiusInRad = 1 / 6371;
  var longitudeDelta = rad2deg(radiusInRad / Math.cos(deg2rad(32.8237073)));
  var latitudeDelta = 1 * rad2deg(radiusInRad);

  return [longitudeDelta, latitudeDelta];
};
