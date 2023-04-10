'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');

// Encoding

const name = 'Jacob';
const password = 'mysecretstring';

const encodedName = base64.encode(name);
const decodedName = base64.decode(encodedName);

const authString = `${name}:${password}`;
const encodedAuthString = base64.encode(authString);

console.log(encodedName, decodedName);
console.log('ENCODED AUTH STRING: ', encodedAuthString);
console.log('DECODED AUTH STRING', base64.decode(encodedAuthString));

// Encryption
// bcrypt.hash('Jacob', 20).then(hashedString => {
//   console.log('HERE IS OUR HASHED STRING: ', hashedString);

//   // comparison
//   bcrypt.compare('Jacob', `${hashedString}23874619284756`).then(isTheSame => {
//     console.log('DO strings match??', isTheSame);
//   });
// });

async function encrypt(string) {
  return await bcrypt.hash(string, 10);
}

async function decrypt(string, hash) {
  return await bcrypt.compare(string, hash);
}

async function main() {
  let encryptedHash = await encrypt('Jacob');
  let isTheSame = await decrypt('Jacob', encryptedHash);

  console.log(encryptedHash, isTheSame);
}

main();
