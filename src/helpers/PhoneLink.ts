/**
 * Returns what the input is (zip code, county name, or address)
 * @Param str The string to convert
 * @Returns A string telling what the input is
 */
 export default function ParsePhone(str: string): string {
    let numb: string = str.replace(/\s+/g, '');
    console.log(numb);

    numb = numb.replace(/(\(|\))/g, '-');
    console.log(numb);
    numb = numb.substring(1);
    numb = "tel:" + numb;

    return numb;
    
  }
  