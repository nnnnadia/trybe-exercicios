// 1 - receber uma string em algarismos romanos e retornar em algarismos indo-arábicos
let paresRomanosArabicos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
function transformaRomanoEmArabico(algarismosRomanos) {
  algarismosRomanos = algarismosRomanos.split('');
  let algarismosArabicos = [];
  for (const algarismo of algarismosRomanos) {
    for (const key in paresRomanosArabicos) {
      if (algarismo === key) {
        algarismosArabicos.push(paresRomanosArabicos[key]);
      }
    }
  }
  return algarismosArabicos;
}
function contaAlgarismosRepetidos(algarismosArabicos) {
  let arabicosUnicos = [];
  for (let i = 0; i < algarismosArabicos.length; i += 1) {
    if (algarismosArabicos[i] === algarismosArabicos[i + 1] && algarismosArabicos[i] === algarismosArabicos[i + 2]) {
      arabicosUnicos.push(algarismosArabicos[i] * 3);
      i += 2;
    } else if (algarismosArabicos[i] === algarismosArabicos[i + 1]) {
      arabicosUnicos.push(algarismosArabicos[i] * 2);
      i += 1;
    } else {
      arabicosUnicos.push(algarismosArabicos[i]);
    }
  }
  return arabicosUnicos;
}
function converteAlgarismosRomanos(algarismosRomanos) {
  let algarismosArabicos = transformaRomanoEmArabico(algarismosRomanos);
  let arabicosUnicos = contaAlgarismosRepetidos(algarismosArabicos);
  console.log(algarismosArabicos);
  console.log(arabicosUnicos);
  let numeroConvertido = 0;
  for (let i = 0; i < arabicosUnicos.length; i += 1) {
    if (arabicosUnicos[i] > arabicosUnicos[i + 1] || arabicosUnicos[i + 1] === undefined) {
      numeroConvertido += arabicosUnicos[i];
    } else {
      numeroConvertido += (arabicosUnicos[i + 1] - arabicosUnicos[i])
      i += 1;
    }
  }
  return numeroConvertido;
}
console.log(converteAlgarismosRomanos('XCVII'));