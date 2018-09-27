var clz32 = (num) => {
  if (isNaN(num) || Math.floor(num) === 0) {
    return 32
  }
  num = Number.parseInt(num, 10)
  const BIG = Math.pow(2, 32)
  while (num < 0) {
    num += BIG
  }
  return 32 - Math.floor(Math.log2(num)) - 1
}

[
clz32(1e-9),  // => 32
clz32(0), // => 32
clz32(1), // => 31
clz32('2'), // => 30
clz32('17'), // => 27
clz32('good'), // => 32
clz32('3141430792'), // => 0
clz32(-2560553530)  // => 1
].forEach((item) => console.log(item))