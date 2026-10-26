<<<<<<< Updated upstream
# RabbitOS

A documentação do projeto e as instruções para executar as versões Bootstrap e Tailwind estão no [README da raiz](../README.md).
=======
# RabbitOS + Rabbit R1

## Objetivo da atividade

Construir a mesma página de apresentação de produto com Bootstrap e Tailwind CSS para comparar como cada framework ajuda a criar layout, responsividade e elementos de interface.

O site apresenta o **RabbitOS**, o software assistente, e o **Rabbit R1**, o dispositivo de hardware que o acompanha. As duas versões mantêm a mesma proposta, conteúdo e identidade visual, baseada nas variáveis de `main.css`.

## Como as versões foram construídas

### Bootstrap

A versão Bootstrap está na branch `feat/bootstrap`, nos arquivos `09 RabbitOS/index.html` e `09 RabbitOS/style.css`. O HTML usa o Bootstrap 5.3.3 por CDN: a navbar responsiva, o grid (`row` e `col-*`), cards, botões e utilitários de espaçamento e alinhamento. O CSS importa `main.css` e personaliza cores e a ilustração do Rabbit R1.

### Tailwind CSS

A versão Tailwind está na branch `feat/tailwind`, nos mesmos caminhos. O HTML carrega o Play CDN do Tailwind CSS 4 e usa classes utilitárias para definir layout, responsividade, tipografia, cores e espaçamentos. O `style.css` importa `main.css` e contém os estilos específicos da ilustração do Rabbit R1.

O Play CDN facilita experimentar o Tailwind sem instalar ferramentas ou configurar uma etapa de compilação. A documentação oficial recomenda seu uso para desenvolvimento, não para produção: <https://tailwindcss.com/docs/installation/play-cdn>.

## Como executar

É necessário ter Git, Python 3 e conexão com a internet. Não é preciso instalar dependências do projeto; Bootstrap e Tailwind são carregados por CDN. `main.css` fica na raiz do repositório e é compartilhado pelas duas versões.

### Executar a versão Bootstrap

Na raiz do repositório:

```bash
git switch feat/bootstrap
cd "09 RabbitOS"
python3 -m http.server 8000
```

Abra <http://localhost:8000/> no navegador.

### Executar a versão Tailwind CSS

Encerre o servidor anterior com `Ctrl+C`. Na raiz do repositório:

```bash
git switch feat/tailwind
cd "09 RabbitOS"
python3 -m http.server 8000
```

Abra <http://localhost:8000/> no navegador.
>>>>>>> Stashed changes
