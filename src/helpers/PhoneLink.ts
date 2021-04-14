/**
 * Returns what the input is (zip code, county name, or address)
 * @Param str The string to convert
 * @Returns A string returning either error or the correctly formatted tel number
 */
export default function ParsePhone(str: string): string {
  let numb: string = str.replace(/\s+/g, '');

  const found = str.match(/^\(\d{3}\)\s\d{3}-\d{4}/g);

  if (found !== null) {
    numb = numb.replace(/(\(|\))/g, '-');
    numb = numb.substring(1);
    numb = `tel:${numb}`;

    return numb;
  }
  return 'error';
}
