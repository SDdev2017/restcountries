//formats population number in format [xx,xxx,xxx]
export function format(n:number):string{
    let arrayNumber:string[] = n.toString().split("").reverse();
    let formatted:string[] = [];
    let buffer:string = '';
  
    arrayNumber.forEach(v => {   
      buffer += v;  
        if(buffer.length === 3){
          formatted.push(buffer.split("").reverse().join(""));
          buffer = '';
        }
    });
  
    if(buffer){  
      formatted.push(buffer.split("").reverse().join(""));
    }

    return formatted.reverse().join(",");
}  