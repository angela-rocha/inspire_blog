// Ler mais (simples alerta, pode ser melhorado para abrir modal ou página)
function lerMais(postId) {
  if (postId === "post1") {
    alert("Post 1: Primeiros passos no HTML\n\nAprender HTML é o primeiro passo para construir páginas web. Comece com tags básicas e vá evoluindo!");
  } else if (postId === "post2") {
    alert("Post 2: Por que aprender JavaScript?\n\nJavaScript permite dar vida às páginas web. É a linguagem da web moderna!");
  } else if (postId === "post3") {
    alert("Post 3: Persistência é a chave\n\nProgramar é errar e aprender com os erros. Continue praticando!");
  }
}

// Frases motivacionais
const frases = [
  "O código de hoje é melhor que o de ontem.",
  "Todo expert já foi iniciante um dia.",
  "Não desista, o bug é só parte do processo.",
  "Errar é apenas aprender de uma forma diferente.",
  "Pequenos commits, grandes resultados.",
  "Seu futuro eu agradece o esforço de hoje."
];

function novaFrase() {
  const randomIndex = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").innerText = frases[randomIndex];
}
