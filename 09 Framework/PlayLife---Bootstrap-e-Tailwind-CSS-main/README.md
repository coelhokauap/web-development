# PlayLife — Atividade Prática: Bootstrap e Tailwind CSS

## 1. Sobre o projeto

O PlayLife foi desenvolvido para a atividade prática de Front-end, com o objetivo de experimentar e comparar dois frameworks CSS: **Bootstrap e Tailwind CSS**.

A proposta é criar duas versões de uma mesma página web, mantendo os mesmos conteúdos, elementos e organização visual, mas utilizando diferentes formas de estilização.

O tema escolhido foi uma loja fictícia de jogos eletrônicos, com destaque para Minecraft, Mortal Kombat e Mario Kart.

## 2. Objetivos

- Praticar a criação de páginas web com Bootstrap e Tailwind CSS.
- Compreender as diferenças entre as classes e as formas de estilização dos frameworks.
- Reproduzir o mesmo layout utilizando duas abordagens diferentes.
- Comparar a organização do HTML e as possibilidades de personalização.
- Aplicar conceitos de responsividade para diferentes tamanhos de tela.
- Utilizar Git e GitHub para organizar e versionar o projeto.

## 3. Tecnologias utilizadas

- **HTML5:** estruturação do conteúdo das páginas.
- **Bootstrap 5:** construção do layout e estilização por meio de componentes e classes predefinidas.
- **Tailwind CSS:** personalização da interface por meio de classes utilitárias.
- **Git e GitHub:** controle de versão e organização das branches.
- **CDN (Content Delivery Network):** carregamento dos frameworks CSS diretamente pela internet.

## 4. Estrutura do repositório

O repositório foi organizado para separar as duas implementações e facilitar a comparação entre elas.

```text
PlayLife/
├── bootstrap/
│   └── index.html
├── tailwind/
│   └── index.html
└── README.md
```

As imagens são carregadas por URLs externas diretamente nas tags `<img>`, sem a necessidade de armazenar arquivos de imagem no repositório.

## 5. Organização das branches

O projeto utiliza três branches principais:

- **bootstrap:** desenvolvimento da versão utilizando Bootstrap 5.
- **tailwind:** desenvolvimento da versão utilizando Tailwind CSS.
- **main:** versão final, contendo as duas implementações nas pastas `bootstrap/` e `tailwind/`, além deste README.

As duas versões mantêm os mesmos textos, imagens, links e organização geral, permitindo comparar as tecnologias com base em um único projeto.

## 6. Descrição da aplicação

A PlayLife representa uma loja fictícia de jogos eletrônicos. A página foi organizada em três partes principais:

1. **Banner principal:** apresenta o nome PlayLife e a frase "Seu próximo jogo favorito está aqui!", sobre uma imagem relacionada ao universo gamer.
2. **Apresentação da loja:** contém um título, um texto introdutório, uma imagem principal e textos sobre diferentes experiências de jogos eletrônicos.
3. **Jogos em destaque:** apresenta três colunas com imagens, descrições e botões para conhecer Minecraft, Mortal Kombat e Mario Kart.

O layout utiliza recursos responsivos para adaptar a organização dos conteúdos aos diferentes tamanhos de tela. Na seção de jogos, os cards ficam empilhados em telas menores e lado a lado em telas maiores.

As imagens são incorporadas por meio do atributo `src` das tags `<img>`. Dessa forma, não é necessário baixá-las manualmente, mas é preciso ter conexão com a internet e utilizar URLs que permitam o carregamento das imagens.

## 7. Como executar o projeto

### Pré-requisitos

- Navegador atualizado, como Google Chrome, Microsoft Edge ou Firefox.
- Editor de código, como Visual Studio Code.
- Conexão com a internet para carregar os frameworks e as imagens externas.

### Clonando o repositório

Execute os comandos abaixo no terminal, substituindo a URL caso o endereço do repositório seja diferente:

```bash
git clone https://github.com/vitoriakr/PlayLife---Bootstrap-e-Tailwind-CSS.git
cd PlayLife---Bootstrap-e-Tailwind-CSS
```

### Executando a versão Bootstrap

Abra a pasta `bootstrap/` e execute o arquivo `index.html` no navegador.

Essa versão utiliza o Bootstrap 5 disponibilizado por CDN.

### Executando a versão Tailwind CSS

Abra a pasta `tailwind/` e execute o arquivo `index.html` no navegador.

Essa versão utiliza o CDN do Tailwind CSS para carregar as classes de estilização sem precisar configurar uma etapa de compilação.

**Observação:** o CDN utilizado no Tailwind é indicado para desenvolvimento e testes. Para projetos de produção, recomenda-se configurar o processo de compilação do CSS.

Também é possível abrir o repositório no Visual Studio Code e utilizar a extensão Live Server para visualizar as páginas durante o desenvolvimento.

## 8. Comparação entre Bootstrap e Tailwind CSS

O Bootstrap oferece componentes e classes predefinidas que facilitam a construção de layouts, como containers, linhas, colunas e botões. Isso permite desenvolver interfaces utilizando padrões prontos de estilização.

Já o Tailwind CSS trabalha com classes utilitárias, permitindo definir diretamente no HTML propriedades como cores, espaçamentos, dimensões, alinhamentos e comportamento responsivo.

No projeto PlayLife, as duas tecnologias foram utilizadas para construir a mesma interface. A versão Bootstrap utiliza classes como `container`, `row`, `col-md-4` e `btn`, enquanto a versão Tailwind utiliza combinações como `mx-auto`, `grid`, `md:grid-cols-3` e `rounded-full`.

Essa comparação permite observar como cada framework organiza a estilização e oferece diferentes possibilidades de personalização.

A análise crítica complementar apresenta as experiências obtidas durante o desenvolvimento, incluindo as dificuldades encontradas, as soluções adotadas e as vantagens e limitações percebidas em cada tecnologia.

## 9. Considerações finais

O desenvolvimento da PlayLife possibilitou aplicar conhecimentos de HTML e CSS por meio de duas abordagens diferentes de estilização.

Ao reproduzir o mesmo layout com Bootstrap e Tailwind CSS, a atividade permite compreender melhor as diferenças entre classes predefinidas e classes utilitárias, além de praticar a criação de interfaces responsivas.

A organização do projeto em branches também reforça a importância do Git e do GitHub no controle de versões e na manutenção do código.

---

**Projeto acadêmico:** Atividade prática de Front-end — Bootstrap e Tailwind CSS.

**Tema:** Loja fictícia de jogos eletrônicos — PlayLife.
