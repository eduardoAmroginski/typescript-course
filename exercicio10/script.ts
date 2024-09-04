// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  ) {
    return true;
  } else {
    return false;
  }
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

function handleCursos(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCurso).forEach(curso => {
      document.body.innerHTML += `
        <div>
          <h2>${curso.nome}</h2>
          <p>${curso.horas}</p>
          <p>${curso.tags.join(', ')}</p>
        </div>
      `;
    });
  }
}
