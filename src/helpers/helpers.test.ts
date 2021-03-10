import AddressToLink from 'src/helpers/MapLinkFromAddress';
import LatLongFromAddress from 'src/helpers/LatLongFromString';

describe('Address string to Google Maps URL Empty Cases', () => {
  test('Fail on Empty/Whitespace String', () => {
    expect(() => AddressToLink('')).toThrowError('Empty Parameter address');
    expect(() => AddressToLink('  ')).toThrowError('Empty Parameter address');
    expect(() => AddressToLink('test string')).not.toThrow();
  });

  test('Generates Nonempty URL', () => {
    expect(AddressToLink('test string')).toBeTruthy();
    expect(AddressToLink('1600 Pennsylvania Avenue NW, Washington, DC 20500')).toBeTruthy();
    expect(AddressToLink('Knoxville, TN 37996')).toBeTruthy();
  });
});

describe('Address string to Google Maps URL Correct Responses', () => {
  test('Simple Sample Address', () => {
    expect(AddressToLink('201 3rd Avenue Knoxville, TN 37917')).toBe(
      'https://www.google.com/maps/search/?api=1&query=201+3rd+Avenue+Knoxville%2C+TN+37917'
    );
    expect(AddressToLink('8729 Chapman Highway Knoxville, TN 37920')).toBe(
      'https://www.google.com/maps/search/?api=1&query=8729+Chapman+Highway+Knoxville%2C+TN+37920'
    );
    expect(AddressToLink('62 Ridgeway Road Norris, TN 37828')).toBe(
      'https://www.google.com/maps/search/?api=1&query=62+Ridgeway+Road+Norris%2C+TN+37828'
    );
  });
  test('Just Name of Location', () => {
    expect(AddressToLink('C.A.R.E. Food Pantry')).toBe(
      'https://www.google.com/maps/search/?api=1&query=C.A.R.E.+Food+Pantry'
    );
    expect(AddressToLink('Hines Creek Baptist Church')).toBe(
      'https://www.google.com/maps/search/?api=1&query=Hines+Creek+Baptist+Church'
    );
    expect(AddressToLink('Reaching the Needy Food Pantry')).toBe(
      'https://www.google.com/maps/search/?api=1&query=Reaching+the+Needy+Food+Pantry'
    );
  });
});

describe('Address string to Google Maps Lat and Long', () => {
  test('Fail on Empty/Whitespace String', () => {
    expect(() => LatLongFromAddress('')).toThrowError('Empty Parameter address');
    expect(() => LatLongFromAddress('  ')).toThrowError('Empty Parameter address');
    expect(() => LatLongFromAddress('test string')).not.toThrow();
  });

  test('Test function', () => {
    expect(LatLongFromAddress('1600 Pennsylvania Avenue NW, Washington, DC 20500')).toBe('(38.898819, -77.036690)');
    expect(LatLongFromAddress('Knoxville, TN 37996')).toBeTruthy();
  });
});
