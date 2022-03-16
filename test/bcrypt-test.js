import bcrypt from 'bcrypt';

// encriptamos la cadena "chaomundo"
let plaintext = "chaomundo";
const salt = 10;
const hash = bcrypt.hashSync(plaintext, salt);

console.log(plaintext);
console.log(hash);

// validamos cual de las dos coincide con el cifrado anterior
const compA = bcrypt.compareSync("holamundo", hash); // true
const compB = bcrypt.compareSync("chaomundo", hash); // false

console.log(compA);
console.log(compB);



plaintext = "man";

const hash1 = bcrypt.hashSync(plaintext, salt);
console.log(`---> bcrypt1 ${hash1}`);

const hash2 = bcrypt.hashSync(plaintext, salt);
console.log(`---> bcrypt2 ${hash2}`);