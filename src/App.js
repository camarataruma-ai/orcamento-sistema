import React, { useEffect, useState } from "react";
import { getAcoes, addAcao } from "./services/sheets";

function App() {
  const [acoes, setAcoes] = useState([]);
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    async function carregar() {
      const data = await getAcoes();
      setAcoes(data);
    }
    carregar();
  }, []);

  async function salvarAcao() {
    if (!descricao) return;
    await addAcao(descricao);
    setDescricao("");
    const data = await getAcoes();
    setAcoes(data);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Sistema Orçamento 2025</h1>
      <h2>Cadastro de Ações</h2>

      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição da ação"
      />
      <button onClick={salvarAcao}>Salvar</button>

      <h3>Ações cadastradas</h3>
      <ul>
        {acoes.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
