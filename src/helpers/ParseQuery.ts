/**
 * Returns what the input is (zip code, county name, or address)
 * @Param str The string to parse
 * @Returns A string telling what the input is
 */
export default function Parse(str: string): string {
  const zip = new RegExp('^\\d{5}$');
  // let county = new RegExp('(.+), ([a-z]{2})');
  // let county: RegExp = /(.+), ([a-z]{2})/;
  const county = new RegExp('(^[A-z]+), ([A-z]{2})');
  const add1 = new RegExp("[A-Za-z0-9'.-s,]");
  // const add1 = new RegExp('(.+), ([A-z]{2})');
  // let add2: RegExp = /\d{1,6}\s(?:[A-Za-z0-9#]+\s){0,7}(?:[A-Za-z0-9#]+,)\s*(?:[A-Za-z]+\s){0,3}(?:[A-Za-z]+,)\s*[A-Z]{2}\s*\d{5}/;

  if (zip.test(str)) {
    return 'zip';
  }
  if (county.test(str)) {
    return 'county';
  }
  if (add1.test(str)) {
    return 'add1';
  }
  return 'error';
}
