// operasi string

// 1. char at
let dataString = "abcde";
let dataChar = dataString.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`character pada index 4 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`character pada index 5 = ${dataChar}`); //  tidak ada karakter

// 2. menyambung string
let namaDepan = "Ucup";
let namaBelakang = "Surucup";

let namaLengkap = namaDepan.concat(" ", namaBelakang, " si keren");
console.log(namaLengkap);

// 3. mengambil index (kemunculan pertama)
console.log(namaLengkap.indexOf("k"));
console.log(namaLengkap.indexOf("c"));
console.log(namaLengkap.indexOf("u"));
console.log(namaLengkap.indexOf("U`"));
