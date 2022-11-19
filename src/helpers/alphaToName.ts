import { alpha3Codes } from '../constants';

//returns array of countries' full name converted from alpha-3 codes (BGR -> Bulgaria)
export function alphaToName(alphaCodes:string[]){
    const countries:string[] = [];

    alphaCodes.forEach(v => {
        let [a] = alpha3Codes.filter(n => n.code === v);
        countries.push(a.name);
    });
  
  return countries;
}