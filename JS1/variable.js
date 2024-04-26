/**
 * Tipe Variabel
 * 1. VAR
 * 2. LET
 * 3. CONST
 */

/**
 * 1. Declaration => pernyataan bahwa variabel ada
 * 2. Assignment => memasukkan nilai kedalam variabel
 * 2.1 Reassign => mengganti nilai sebuah variabel
 * 3. Scope => area dimana variabel bisa diakses/dipanggil/digunakan
 * 3.1 Global Scope (gs) => bisa digunakan oleh project tersebut
 * 3.2 Function Scope (fs) => bisa digunakan oleh seluruh fungsi
 * 3.3 Block Scope (bs) => bisa digunakan oleh block tersebut, block biasanya ditandai oleh kurung {}
 */

// // var => gs, fs
// var kata; // deklarasi variabel kata dalam global scope
// kata = "javascript"; // assignment terhadap variabel kata
// kata = "nodejs"; // reassign terhadap variabel kata

// function a() {
//   console.log(kata); // kode didalam function scope
//   // var memiliki sifat hoisting =>
//   //   khusus var, bentuk deklarasi akan dijalankan diawal scope
//   var kalimat; // deklarasi variabel kata dalam function scope
//   kata = "nodejs"; // assignment terhadap variabel kata
//   kata = "javascript"; // reassign terhadap variabel kata
//   console.log(kalimat);
// }

// console.log(kata);
// a();
// console.log(kalimat); // tidak bisa menggunakan kalimat karena berada diluar fs

// const & let => fs & bs
let umur; // deklarasi variabel umur dalam block scope
umur = 20; // assignment terhadap variabel umur
umur = 23; // reassign terhadap variabel umur
console.log(umur);

let condition = false;
if (condition) {
  // console.log(umur); // akan gagal karena tidak ada hoisting pada let dan const
  let umur; // deklarasi variabel umur dalam block scope
  umur = 10; // assignment terhadap variabel umur
  umur = 13; // reassign terhadap variabel umur
  console.log(umur);
} else {
  console.log(umur);
}

// console.log(umur);
// const tidak bisa di reassign
// bentun deklarasi dan assignment pada const harus digabung
const kalimat = "Saya Belajar Javascript";
