/**
 * Returns what the input is (zip code, county name, or address)
 * @Param str The string to convert
 * @Returns A string telling what the input is
 */
 export default function ParsePhone(str: string): string {
    let numb: string = str.replace(/\s+/g, '');

    let found = str.match(/^\(\d{3}\)\s\d{3}-\d{4}/g);

    if (found !== null)
    {
      numb = numb.replace(/(\(|\))/g, '-');
      numb = numb.substring(1);
      numb = "tel:" + numb;

    return numb;
    }else
    {
      return 'error';
    }
    
  }
  