const curiosidades = [
  "As orelhas dos coelhos podem girar para captar sons de diferentes direções.",
  "Os dentes dos coelhos crescem continuamente ao longo da vida.",
  "A posição dos olhos dá aos coelhos um campo de visão muito amplo.",
  "Um coelho feliz pode dar saltos e giros conhecidos como binkies.",
  "Coelhos são inteligentes e podem aprender a reconhecer rotinas e comandos.",
  "Os coelhos usam o olfato e o movimento do nariz para explorar o ambiente.",
];

const niveis = [
  "Muito fofo",
  "Extremamente fofo",
  "Coelho lendário",
  "Fofo demais para este mundo",
  "Mestre da fofura",
  "Mais fofo que o Kauã",
];

const equipe = [
  { nome: "Cenourinha", pauta: "Alimentação" },
  { nome: "Orelhudo", pauta: "Orelhas e sentidos" },
  { nome: "Saltito", pauta: "Saltos e agilidade" },
  { nome: "Focinho", pauta: "Comunicação" },
  { nome: "Lua", pauta: "Rotina e descanso" },
  { nome: "Bigodes", pauta: "Espaço e enriquecimento" },
];

const imagemCoelho = document.querySelector("#imagem-coelho");
const placeholderCoelho = document.querySelector("#placeholder-coelho");
const creditoCoelho = document.querySelector("#credito-coelho");
const indiceFofura = document.querySelector("#indice-fofura");
const nivelFofura = document.querySelector("#nivel-fofura");
const curiosidadeCoelho = document.querySelector("#curiosidade-coelho");
const statusCoelho = document.querySelector("#status-coelho");
const botaoNovoCoelho = document.querySelector("#botao-novo-coelho");

const botaoEquipe = document.querySelector("#botao-equipe");
const fotosEquipe = document.querySelector("#equipe-fotos");
const statusEquipe = document.querySelector("#status-equipe");

let imagensCommonsPromise;
let ultimoTituloCoelho = "";
let equipeCarregada = false;
let falhaNaBuscaDaEquipe = false;

function escolherAleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function embaralhar(lista) {
  const resultado = [...lista];

  for (let indice = resultado.length - 1; indice > 0; indice--) {
    const outroIndice = Math.floor(Math.random() * (indice + 1));
    [resultado[indice], resultado[outroIndice]] = [
      resultado[outroIndice],
      resultado[indice],
    ];
  }

  return resultado;
}

function textoSemHtml(texto = "") {
  const documento = new DOMParser().parseFromString(texto, "text/html");
  return documento.body.textContent.replace(/\s+/g, " ").trim();
}

async function buscarImagensCommons() {
  if (!imagensCommonsPromise) {
    const parametros = new URLSearchParams({
      action: "query",
      generator: "search",
      gsrsearch: "rabbit",
      gsrnamespace: "6",
      gsrlimit: "50",
      prop: "imageinfo",
      iiprop: "url|extmetadata",
      iiurlwidth: "900",
      format: "json",
      origin: "*",
    });

    imagensCommonsPromise = fetch(
      `https://commons.wikimedia.org/w/api.php?${parametros.toString()}`,
    )
      .then((resposta) => {
        if (!resposta.ok) throw new Error("Falha ao consultar a API.");
        return resposta.json();
      })
      .then((dados) =>
        Object.values(dados.query?.pages || {}).filter(
          (pagina) =>
            pagina.imageinfo?.[0]?.thumburl &&
            pagina.imageinfo[0].descriptionurl,
        ),
      )
      .catch((erro) => {
        imagensCommonsPromise = null;
        throw erro;
      });
  }

  return imagensCommonsPromise;
}

function mostrarCredito(elemento, info) {
  const link = document.createElement("a");
  link.href = info.descriptionurl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Wikimedia Commons";
  elemento.replaceChildren("Imagem: ", link);

  const metadados = info.extmetadata || {};
  const autor = textoSemHtml(metadados.Artist?.value);
  const licenca = textoSemHtml(metadados.LicenseShortName?.value);

  if (autor) elemento.append(` · ${autor}`);
  if (licenca) elemento.append(` · ${licenca}`);
}

function atualizarInformacoesCoelho() {
  const porcentagem = Math.floor(Math.random() * 31) + 70;
  indiceFofura.textContent = `Índice de fofura: ${porcentagem}%`;
  nivelFofura.textContent = escolherAleatorio(niveis);
  curiosidadeCoelho.textContent = escolherAleatorio(curiosidades);
}

async function buscarOutroCoelho() {
  botaoNovoCoelho.disabled = true;
  botaoNovoCoelho.textContent = "Chamando um ouvinte…";
  statusCoelho.hidden = true;
  imagemCoelho.hidden = true;
  placeholderCoelho.hidden = false;
  placeholderCoelho.textContent = "Ligando o transmissor da toca…";
  creditoCoelho.replaceChildren();

  try {
    const paginas = await buscarImagensCommons();
    const opcoes = paginas.filter(
      (pagina) => pagina.title !== ultimoTituloCoelho,
    );

    if (paginas.length === 0) throw new Error("Nenhuma imagem encontrada.");

    const pagina = escolherAleatorio(opcoes.length ? opcoes : paginas);
    const info = pagina.imageinfo[0];
    ultimoTituloCoelho = pagina.title;

    imagemCoelho.alt = pagina.title.replace(/^File:/, "Imagem de ");
    imagemCoelho.src = info.thumburl;
    imagemCoelho.hidden = false;
    placeholderCoelho.hidden = true;

    mostrarCredito(creditoCoelho, info);
    atualizarInformacoesCoelho();
  } catch (erro) {
    console.error("Não foi possível buscar o coelho:", erro);
    placeholderCoelho.textContent = "O sinal da toca está fraquinho.";
    statusCoelho.textContent =
      "Confira sua conexão e tente chamar outro ouvinte.";
    statusCoelho.hidden = false;
  } finally {
    botaoNovoCoelho.disabled = false;
    botaoNovoCoelho.textContent = "Trocar de convidado";
  }
}

function criarCartaoIntegrante(integrante, info) {
  const cartao = document.createElement("article");
  cartao.className = "perfil-coelho";

  const moldura = document.createElement("figure");
  moldura.className = "foto-equipe";

  const foto = document.createElement("img");
  foto.src = info.thumburl;
  foto.alt = `Foto de um coelho que representa ${integrante.nome}`;
  foto.loading = "lazy";

  const alternativa = document.createElement("span");
  alternativa.className = "foto-fallback";
  alternativa.textContent = "Foto indisponível";
  alternativa.hidden = true;
  foto.addEventListener("error", () => {
    foto.hidden = true;
    alternativa.hidden = false;
  });
  moldura.append(foto, alternativa);

  const informacoes = document.createElement("div");
  informacoes.className = "perfil-info";

  const nome = document.createElement("h3");
  nome.textContent = integrante.nome;

  const pauta = document.createElement("p");
  pauta.className = "perfil-pauta";
  pauta.textContent = `Repórter de ${integrante.pauta}`;

  const creditos = document.createElement("p");
  creditos.className = "perfil-creditos";
  mostrarCredito(creditos, info);

  informacoes.append(nome, pauta, creditos);
  cartao.append(moldura, informacoes);
  return cartao;
}

async function carregarEquipe() {
  botaoEquipe.disabled = true;
  botaoEquipe.textContent = "Buscando fotos da equipe…";
  statusEquipe.textContent = "A equipe está a caminho da transmissão.";
  statusEquipe.hidden = false;

  try {
    const paginas = await buscarImagensCommons();
    const disponiveis = paginas.filter(
      (pagina) => pagina.title !== ultimoTituloCoelho,
    );

    if (disponiveis.length < equipe.length) {
      throw new Error("Não foram encontradas fotos suficientes.");
    }

    const escolhidas = embaralhar(disponiveis).slice(0, equipe.length);
    escolhidas.forEach((pagina, indice) => {
      fotosEquipe.appendChild(
        criarCartaoIntegrante(equipe[indice], pagina.imageinfo[0]),
      );
    });

    equipeCarregada = true;
    falhaNaBuscaDaEquipe = false;
    statusEquipe.hidden = true;
    botaoEquipe.textContent = "Esconder a equipe da toca";
  } catch (erro) {
    console.error("Não foi possível carregar a equipe:", erro);
    falhaNaBuscaDaEquipe = true;
    statusEquipe.textContent =
      "A transmissão falhou. Verifique a conexão e tente novamente.";
    botaoEquipe.textContent = "Tentar novamente";
  } finally {
    botaoEquipe.disabled = false;
  }
}

imagemCoelho.addEventListener("error", () => {
  imagemCoelho.hidden = true;
  placeholderCoelho.hidden = false;
  placeholderCoelho.textContent = "A foto perdeu o sinal. Chame outro ouvinte.";
  statusCoelho.textContent = "Não foi possível receber esta imagem.";
  statusCoelho.hidden = false;
});

botaoNovoCoelho.addEventListener("click", buscarOutroCoelho);
botaoEquipe.addEventListener("click", () => {
  if (!fotosEquipe.hidden && !falhaNaBuscaDaEquipe) {
    fotosEquipe.hidden = true;
    botaoEquipe.setAttribute("aria-expanded", "false");
    botaoEquipe.textContent = "Conheça a equipe da toca";
    return;
  }

  fotosEquipe.hidden = false;
  botaoEquipe.setAttribute("aria-expanded", "true");

  if (!equipeCarregada) carregarEquipe();
  else botaoEquipe.textContent = "Esconder a equipe da toca";
});

buscarOutroCoelho();
