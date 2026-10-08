# Rádio Cenourinha

Uma rádio fictícia feita por coelhos, para coelhos. A página oferece programação da toca, um convidado aleatório, curiosidades e fotos da equipe.

## Como funciona

- **Coelho da vez:** ao abrir a página, o JavaScript seleciona uma imagem de coelho e mostra o crédito, um índice de fofura e uma curiosidade. O botão **Trocar de convidado** escolhe outra imagem e evita repetir a imagem anterior quando há outras opções.
- **Programação da toca:** seis cards apresentam segmentos sobre alimentação, sentidos, saltos, comunicação, descanso e moradia.
- **Equipe no estúdio:** o botão **Conheça a equipe da toca** revela seis personagens, cada um associado a uma imagem, uma pauta e os créditos da foto.
- **Identidade visual:** ilustração vetorial de um rádio com orelhas de coelho, cenouras decorativas e layout responsivo.

## Como a aplicação usa a API

As fotos vêm da [API do Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:API/MediaWiki). O arquivo `script.js` faz uma requisição `GET` com `fetch()` para:

```text
https://commons.wikimedia.org/w/api.php
```

A consulta usa estes parâmetros:

- `action=query` e `generator=search` para pesquisar arquivos;
- `gsrsearch=rabbit` e `gsrnamespace=6` para buscar arquivos relacionados a coelhos no espaço de arquivos;
- `gsrlimit=50` para solicitar um conjunto de resultados;
- `prop=imageinfo` e `iiprop=url|extmetadata` para receber URLs de imagem e metadados;
- `iiurlwidth=900` para solicitar miniaturas;
- `format=json` e `origin=*` para receber JSON e permitir a requisição entre origens.

O JavaScript guarda a promessa da consulta em memória. Assim, o quadro **Coelho da vez** e a galeria da equipe compartilham os mesmos resultados durante a sessão. A página escolhe imagens aleatoriamente desse conjunto e mostra o link da fonte, o autor e a licença quando esses dados estão disponíveis. Se a consulta ou o carregamento de uma imagem falhar, a interface informa o problema e permite tentar novamente.

## Como abrir

Abra `index.html` em um navegador. Não é preciso instalar dependências nem iniciar um servidor. É necessária uma conexão com a internet para consultar a API e carregar as imagens.

## Arquivos

- `index.html` — conteúdo e estrutura da rádio;
- `style.css` — identidade visual e layout responsivo, com importação de `../00/main.css`;
- `script.js` — consulta à API, seleção de imagens, curiosidades, créditos e galeria da equipe.
