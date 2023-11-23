// Math round
document.write("<h2>Math round (Pembulatan terdekat)</h2>");

let a = 12.3;
let b = 12.5;
let c = 12.7;

document.write(`Variable a = ${a}<br>`);
document.write(`Variable b = ${b}<br>`);
document.write(`Variable c = ${c}<br><br>`);

let mathA = Math.round(a);
let mathB = Math.round(b);
let mathC = Math.round(c);

document.write(`Hasil pembulatan dari ${a} adalah ${mathA}<br>`);
document.write(`Hasil pembulatan dari ${b} adalah ${mathB}<br>`);
document.write(`Hasil pembulatan dari ${c} adalah ${mathC}<br>`);

// Math floor
document.write("<h2>Math floor (Pembulatan kebawah)</h2>");

let d = 15.3;
let e = 25.5;
let f = 39.7;

document.write(`Variable d = ${d}<br>`);
document.write(`Variable e = ${e}<br>`);
document.write(`Variable f = ${f}<br><br>`);

let mathD = Math.floor(d);
let mathE = Math.floor(e);
let mathF = Math.floor(f);

document.write(`Hasil pembulatan kebawah dari ${d} adalah ${mathD}<br>`);
document.write(`Hasil pembulatan kebawah dari ${e} adalah ${mathE}<br>`);
document.write(`Hasil pembulatan kebawah dari ${f} adalah ${mathF}<br>`);

// Math ceil
document.write("<h2>Math ceil (Pembulatan keatas)</h2>");

let g = 45.3;
let h = 49.5;
let i = 53.7;

document.write(`Variable g = ${g}<br>`);
document.write(`Variable h = ${h}<br>`);
document.write(`Variable i = ${i}<br><br>`);

let mathG = Math.ceil(g);
let mathH = Math.ceil(h);
let mathI = Math.ceil(i);

document.write(`Hasil pembulatan keatas dari ${g} adalah ${mathG}<br>`);
document.write(`Hasil pembulatan keatas dari ${h} adalah ${mathH}<br>`);
document.write(`Hasil pembulatan keatas dari ${i} adalah ${mathI}<br>`);

// Math pow
document.write("<h2>Math pow (Menghitung hasil suatu pangkat)</h2>");

let j = 1;
let k = 2;
let l = 3;
let m = 4;
let n = 5;
let o = 6;

document.write(`Variable j = ${j}<br>`);
document.write(`Variable k = ${k}<br>`);
document.write(`Variable l = ${l}<br>`);
document.write(`Variable m = ${m}<br>`);
document.write(`Variable n = ${n}<br>`);
document.write(`Variable o = ${o}<br><br>`);

let pow1 = Math.pow(j, k);
let pow2 = Math.pow(l, m);
let pow3 = Math.pow(n, o);

document.write(`Perhitungan 1 (variable j & k) => (${j} pangkat ${k}) = ${pow1}<br>`);
document.write(`Perhitungan 2 (variable l & m) => (${l} pangkat ${m}) = ${pow2}<br>`);
document.write(`Perhitungan 3 (variable n & o) => (${n} pangkat ${o}) = ${pow3}<br>`);

// Math sqrt
document.write("<h2>Math sqrt (Menghitung akar kuadrat)</h2>");

let p = 36;
let q = 64;
let r = 81;

document.write(`Variable p = ${p}<br>`);
document.write(`Variable q = ${q}<br>`);
document.write(`Variable r = ${r}<br><br>`);

let sqrt1 = Math.sqrt(p);
let sqrt2 = Math.sqrt(q);
let sqrt3 = Math.sqrt(r);

document.write(`Akar kuadrat dari ${p} = ${sqrt1}<br>`);
document.write(`Akar kuadrat dari ${q} = ${sqrt2}<br>`);
document.write(`Akar kuadrat dari ${r} = ${sqrt3}<br>`);
