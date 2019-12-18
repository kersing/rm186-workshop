function Decoder(bytes, port) {
  // Decode an uplink message from a buffer
  // (array) of bytes to an object of fields.
  var decoded = {};
  var i;

  if (port === 1) {
    i = (bytes[0] & 0x80 ? 0xFFFF<<16 : 0) | bytes[0]<<8 | bytes[1];
    decoded.temp=i/100;
    i= bytes[2]<<8 | bytes[3];
    decoded.humidity=i/100;
    i= bytes[4]<<8 | bytes[5];
    decoded.pressure=i/10;
    i= bytes[6]<<8 | bytes[7];
    decoded.pm25=i/100;
    i= bytes[8]<<8 | bytes[9];
    decoded.pm10=i/100;
  }
  return decoded;
}