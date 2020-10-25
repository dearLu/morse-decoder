const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str=expr;
    let arr;
    let symbol;
    let result='';
    arr=str.split('');
    while(arr.length){
     symbol=arr.slice(0,10);
     arr.splice(0,10);
     if(symbol.join('') === '**********'){
       result+=' ';
      }else{
        result+=findSymbol(symbol.join(''));
      }
     
    }
    return result;
  }
  function findSymbol(numderStr){
     let res=parseInt(numderStr);
     let resStr=res.toString();
     var re = /10/gi;
     var re1 = /11/gi;
     resStr=resStr.replace(re,'.');
     resStr=resStr.replace(re1,'-');
     return MORSE_TABLE[resStr];
  }
module.exports = {
    decode
}