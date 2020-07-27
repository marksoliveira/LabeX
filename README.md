# LabeX

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML e CSS; 
e como gerenciador de pacotes do NodeJS o npm.
Os arquivos estão divididos entre `components`(FormContainer, PageTitle 
e outros) e as `pages` são as páginas em si do projeto. 

## Sobre
O projeto consiste em uma plataforma de gerenciamento de viagens espaciais. 
A plataforma possui uma parte pública e uma privada.

Na parte pública qualquer usuário poderá:
- Se inscrever para uma viagem já existente

Na parte privada, o administrador poderá:
- Listar todas as Viagens
- Criar novas viagens
- Listar, aprovar e rejeitar inscrições feitas pela parte pública da aplicação

Há integrações com APIs externas. Bibliotecas: axios, styled-components e
material-ui

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em 
sua máquina, basta abrir o terminal e navegar até o repositório clonado e 
rodar:

1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto
1. `npm run build` para gerar uma versão estática do projeto 
(que ficará na pasta `build`)

Estando com o surge instalado (`npm install surge`), para deployar pode-se utilizar 
o `surge ./build`, um link será fornecido e assim poderá utilizá-lo para abrir a 
aplicação no navegador.

Login para teste: marcos@gmail.com
Senha: 123456
