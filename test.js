image = [
 [36,0,18,9],
 [27,54,9,0],
 [81,63,72,45]]
//Matríz resultante
const columns = image[0].length == 3 ? 1 : image[0].length - 2
const rows = image.length == 3 ? 1 : image[0].length - 2

console.log('columns: '+columns);
console.log('rows: '+rows);

for (var k = 0; k < columns; k++) {
  let i = k;
  topeUno = k + 2;
  for (i = 0; i <=  topeUno; i++) {
    console.log('tope: '+topeUno + ' i: '+i);
    for (let j = 0; j < 3; j++) {
      //console.log(image[i][j]);
      console.log('['+i+']['+j+'] = '+image[i,j]);
    }
  }
  console.log("____________");
}
