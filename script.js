const generateSequence = (genotype) => {
  return [
    [genotype[0], genotype[2]].join(""),
    [genotype[1], genotype[3]].join(""),
  ];
};

const orderAlleleByCase = (alA, alB) => {
  return /^[A-Z]/.test(alA) ? alA + alB : alB + alA;
};

const generateGenotype = (pairA, pairB) => {
  const firstGene = orderAlleleByCase(pairA[0], pairB[0]);
  const secondGene = orderAlleleByCase(pairA[1], pairB[1]);
  return firstGene + secondGene;
};

const handleClick = () => {
  document.getElementById("container").innerHTML = "";
  const first = document.getElementById("first").value;
  const second = document.getElementById("second").value;
  if (first.length !== second.length && first.length !== 4) {
    return false;
  }
  const fullSequence = [
    ...generateSequence(first),
    ...generateSequence(second),
  ];
  const matrix = [["", ...fullSequence]];
  fullSequence.forEach((pairX) => {
    const row = [pairX];
    fullSequence.forEach((pairY) => {
      row.push(generateGenotype(pairX, pairY));
    });
    matrix.push(row);
  });
  matrix.map(row => {
    document.getElementById("container").innerHTML += `
      <div class="row">
        ${
          row.map(genotype => `
            <div>${genotype}</div>
          `).join('')
        }
      </div>
    `;
  })
  console.log(matrix);
};
