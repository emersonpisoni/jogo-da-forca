import { toast, ToastContainer } from "react-toastify";

export const conquistasDisponíveis = [
  {
    id: 30,
    title: "Caçador de zumbis.",
    description: "Acertou vinte palavras consecutivas.",
  },
  {
    id: 12,
    title: "Corte limpo!",
    description: "Acertou a palavra sem cometer nenhum erro.",
  },
  {
    id: 29,
    title: "Especialista em sobrevivência.",
    description: "Acertou dez palavras consecutivas.",
  },
  {
    id: 11,
    title: "Foi nada! Só uma mordidinha...",
    description: "Acertou a palavra depois de 5 erros.",
  },
  {
    id: 31,
    title: "Mais sorte na próxima vida...",
    description: "Perdeu na primeira rodada.",
  },
  {
    id: 13,
    title: "Ninguém é perfeito.",
    description: "Acertou a palavra depois de apenas 1 erro.",
  },
  {
    id: 27,
    title: "Sobrevivente iniciante.",
    description: "Acertou quatro palavras consecutivas.",
  },
  {
    id: 25,
    title: "Sorte de iniciante.",
    description: "Acertou duas palavras consecutivas.",
  },
  {
    id: 26,
    title: "Talvez não seja só sorte!",
    description: "Acertou três palavras consecutivas.",
  },
  {
    id: 28,
    title: "Veterano de apocalipse.",
    description: "Acertou cinco palavras consecutivas.",
  },
];

function verificaSeConquistaNaoFoiFeita(idConquistaDisponivel, conquistas) {
  return !conquistas.some(
    (conquista) => conquista.id === idConquistaDisponivel
  );
}

export function verificaConquistas(erros, conquistas, setConquistas, rodada) {
  // Conquista 12
  if (erros.length === 0 && verificaSeConquistaNaoFoiFeita(12, conquistas)) {
    const achievement = conquistasDisponíveis.find(
      (conquistaDisponível) => conquistaDisponível.id === 12
    );
    setConquistas([...conquistas, achievement]);

    toast(
      <div>
        {achievement.title}
        <br />
        {achievement.description}
      </div>
    );
  }

  // Conquista 25
  if (rodada === 2 && verificaSeConquistaNaoFoiFeita(25, conquistas)) {
    const achievement = conquistasDisponíveis.find(
      (conquistaDisponível) => conquistaDisponível.id === 25
    );
    setConquistas([...conquistas, achievement]);

    toast(
      <div>
        {achievement.title}
        <br />
        {achievement.description}
      </div>
    );
  }

  // Conquista 26
  if (rodada === 3 && verificaSeConquistaNaoFoiFeita(26, conquistas)) {
    const achievement = conquistasDisponíveis.find(
      (conquistaDisponível) => conquistaDisponível.id === 26
    );
    setConquistas([...conquistas, achievement]);

    toast(
      <div>
        {achievement.title}
        <br />
        {achievement.description}
      </div>
    );
  }
}
