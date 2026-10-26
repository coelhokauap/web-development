# RabbitOS e Rabbit R1

## Objetivo

Esta atividade apresenta o mesmo site de produto em Bootstrap e Tailwind CSS para comparar a criação de layout, responsividade e componentes. **RabbitOS** é o software assistente; **Rabbit R1** é o dispositivo de hardware.

## Versões

Na estrutura atual da branch `main`, as versões ficam em `09 RabbitOS/bootstrap/` e `09 RabbitOS/tailwind/`.

### Bootstrap

`09 RabbitOS/bootstrap/index.html` usa Bootstrap 5.3.3 por CDN: navbar responsiva, grid (`row` e `col-*`), cards, botões e utilitários de espaçamento. `09 RabbitOS/bootstrap/style.css` importa `main.css` da raiz do repositório e define estilos próprios da identidade visual e da ilustração do Rabbit R1.

### Tailwind CSS

`09 RabbitOS/tailwind/index.html` usa o Play CDN do Tailwind CSS 4 e classes utilitárias para layout, responsividade, tipografia, cores e espaçamento. `09 RabbitOS/tailwind/style.css` importa `main.css` e estiliza a ilustração do aparelho. O Play CDN é indicado para experimentação e desenvolvimento, não para produção. [Documentação oficial](https://tailwindcss.com/docs/installation/play-cdn).

## Como executar

É necessário ter Python 3 e conexão com a internet para carregar os frameworks pelas CDNs. Na raiz do repositório, inicie um servidor estático:

```bash
python3 -m http.server 8000
```

Acesse:

- Seletor: <http://localhost:8000/09%20RabbitOS/>
- Bootstrap: <http://localhost:8000/09%20RabbitOS/bootstrap/>
- Tailwind CSS: <http://localhost:8000/09%20RabbitOS/tailwind/>

Encerre com `Ctrl+C`.

## Análise crítica

O documento em Word está em [`09 RabbitOS/Analise critica Bootstrap e Tailwind.docx`](09%20RabbitOS/Analise%20critica%20Bootstrap%20e%20Tailwind.docx).

## Branches

As branches atualmente existentes são `feat/bootstrap` e `feat/tailwind`. O enunciado pede os nomes exatos `bootstrap` e `tailwind`; alinhe os nomes antes da entrega final.
