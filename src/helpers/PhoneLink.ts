/**
 * Returns formatted telephone number string i.e. tel:xxx-xxx-xxxx
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
