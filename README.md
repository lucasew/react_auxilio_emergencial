# React Auxílio Emergencial

Aplicação SPA minimalista para consulta das APIs do portal da transparência relacionadas ao auxílio emergencial
para o covid19

A aplicação pode ser acessada [aqui](https://lucasew.github.io/react_auxilio_emergencial/)

É possível que o dado da cidade selecionada dê erro e não carregue. A culpa é do certificado https da API do
portal da transparência que pode estar inválido. Eu poderia usar HTTP mesmo já que os dados são publicos, mas
como o site carrega de um ambiente HTTPS os navegadores não aceitam.

Para busca das cidades e estados foi usada a API do IBGE

Novas alterações neste repositório serão refletidas no link citado acima automaticamente via Github Actions
