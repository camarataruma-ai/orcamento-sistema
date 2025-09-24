// SIMULAÇÃO — depois trocamos pela API real
let acoesFake = ["Ação de Exemplo"];

export async function getAcoes() {
  return acoesFake;
}

export async function addAcao(descricao) {
  acoesFake.push(descricao);
  return true;
}
