/* eslint-disable jest/no-disabled-tests */
import AddressToLink from 'src/helpers/MapLinkFromAddress';
import Parse from 'src/helpers/ParseQuery';
import ParsePhone from 'src/helpers/PhoneLink';
import LatLongFromAddress from 'src/helpers/LatLongFromString';
import dotenv from 'dotenv';

// Allow environment variables to function
dotenv.config({ path: '../.env.local' });

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

describe('Match query with type', () => {
  test('Zip codes', () => {
    expect(Parse('37024')).toBe('zip');
    expect(Parse('123456')).toBe('error');
  });

  test('Counties', () => {
    expect(Parse('Williamson, TN')).toBe('county');
    expect(Parse('Williamson')).toBe('error');
  });

  test('Addresses', () => {
    expect(Parse('400 Winston Rd, Knoxville, TN')).toBe('add1');
    // expect(Parse('400 Winston Rd, Knoxville, TN 37909')).toBe(
    //  'add2'
    // );
  });
});

describe('convert phone number in (xxx) xxx-xxxx to tel:xxx-xxx-xxxx', () => {
  test('Conversion', () => {
    expect(ParsePhone('(123) 456-7890')).toBe('tel:123-456-7890');
    expect(ParsePhone('(999) 999-9999')).toBe('tel:999-999-9999');
    expect(ParsePhone('hello')).toBe('error');
  });
});

// Skipped below tests because they need API key to run on github actions
// Can run locally (do pass)
describe('Address string to Google Maps Lat and Long', () => {
  test.skip('Fail on Empty/Whitespace String', async () => {
    await expect(LatLongFromAddress('')).rejects.toThrowError('Empty Parameter address');
    await expect(LatLongFromAddress('  ')).rejects.toThrowError('Empty Parameter address');
    await expect(LatLongFromAddress('test string')).resolves.not.toThrow();
  });

  test.skip('function', async () => {
    const [lat, lon] = (await LatLongFromAddress('1600 Pennsylvania Avenue NW, Washington, DC 20500')) ?? [null, null];
    expect([lat, lon]).not.toBe([null, null]);
    expect(lat).toBeCloseTo(38.898819);
    expect(lon).toBeCloseTo(-77.03669);
    await expect(LatLongFromAddress('Knoxville, TN 37996')).resolves.toBeTruthy();
  });
});
