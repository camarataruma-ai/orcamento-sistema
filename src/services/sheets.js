import axios from "axios";

const SHEET_ID = "1ojfXBIR97ZLY4kCmMa1X3WCGzYJ2TjASbijn93lP35Q"; // seu ID
const API_KEY = "SUA_API_KEY_DO_GOOGLE"; // vamos gerar já

const RANGE = "Acoes!A:A"; // exemplo: aba chamada "Acoes", coluna A

// Buscar ações
export async function getAcoes() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  const res = await axios.get(url);
  if (res.data.values) {
    return res.data.values.flat();
  }
  return [];
}

// Adicionar nova ação
export async function addAcao(descricao) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}:append?valueInputOption=RAW&key=${API_KEY}`;
  await axios.post(url, {
    values: [[descricao]]
  });
  return true;
}
