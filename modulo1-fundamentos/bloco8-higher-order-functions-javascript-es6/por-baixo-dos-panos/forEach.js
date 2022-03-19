const almoçoDeDomingo = ['🍌', '🥗', '🍲', '🍛', '🍮'];

for(let index = 0; index < almoçoDeDomingo.length; index += 1) {
  console.log(`${almoçoDeDomingo[index]} é o #${index} prato de ${almoçoDeDomingo}`);
}

almoçoDeDomingo.forEach((prato, index, refeição) => {
  console.log(`${prato} é o #${index} prato de ${refeição}`);
})

// 🍌 é o #0 prato de 🍌,🥗,🍲,🍛,🍮
// 🥗 é o #1 prato de 🍌,🥗,🍲,🍛,🍮
// 🍲 é o #2 prato de 🍌,🥗,🍲,🍛,🍮
// 🍛 é o #3 prato de 🍌,🥗,🍲,🍛,🍮
// 🍮 é o #4 prato de 🍌,🥗,🍲,🍛,🍮
