
export const convertToArray= (value) =>{
    let coordsString = value.split('\n');
    let coordsArr =[];
    coordsString.forEach(cs => coordsArr.push(cs.split(' ')));
    return coordsArr;
}