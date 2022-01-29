const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
};

let sing = {
   '00': '',
   '10': '.',
   '11': '-',
   '**': ' ',
}

function decode(expr) {

   let result = [];

   for (let i = 0; i < expr.length; i += 10) {

      result.push(expr.slice(i, i + 10));

   };

   result = result.map((it) => {

      let pair = [];

      for (let i = 0; i < it.length; i += 2) {

         pair.push(it.slice(i, i + 2));
      }
      return pair;
   })
      .map(it => it
         .map(pair => sing[pair]))

      .map(it => it.join(''))

      .map(it => it.replace('     ', ' '))

      .map(it => MORSE_TABLE[it]).join('')

   return result;
}

module.exports = {
   decode
}