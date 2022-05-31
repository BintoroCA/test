const kaoskaki = (arr) => {
  let pasang = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && arr[j] !== 0) {
          arr[i] = 0;
          arr[j] = 0;
          pasang++;
        }
      }
    }
  }
  return pasang;
};

const satu = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const dua = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const tiga = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log("soal 1a", kaoskaki(satu));
console.log("soal 1b", kaoskaki(dua));
console.log("soal 1c", kaoskaki(tiga));

const soaldua = (input) => {
  const txtInput = input.split(" ");
  const specialchar = /[$&+,:;=@#|'<>.-^()%!]/;
  let count = 0;
  for (let i = 0; i < txtInput.length; i++) {
    if (txtInput[i].match(specialchar)) {
      count++;
    }
  }

  return count;
};

const a = "Saat mengecat tembok, Agung dib_antu oleh Raihan.";
const b = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const c = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

console.log("soal 2a", soaldua(a));
console.log("soal 2b", soaldua(b));
console.log("soal 2c", soaldua(c));
