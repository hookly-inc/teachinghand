## Introdução
O projeto foi inicializado com o `create-react-app`, utilizado o `yarn` como gerenciador de pacotes.

#### Iniciar projeto
Rodar a aplicação em modo de desenvolvimento.
`yarn start` <br>

Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no navegador.
A página irá recarregar conforme você fizer alteraçōes nos arquivos.<br>
Os erros e avisos serão exibidos no console.

## Estrutura
Todos os arquivos de código-fonte estão dentro da pasta `src`. A partir daqui, essa será a pasta raíz.

### Componentes
Os componentes deverão estar dentro da pasta `components`, sempre em <i><b>camel case</b></i> (primeira letra maiúscula).

### Imagens
Todas as imagens do projeto deverão estar dentro da pasta `images`, podendo haver subpastas em casos específicos.

### Estilização
A estilização de todo o projeto deverá estar na pasta `styles`. 

![Pasta raíz](https://i.imgur.com/0Jq2Y9h.png)

Todos os arquivos devem ser prececidos de um `_` e importados dentro do arquivo `styles.scss`, respeitando a hierarquia de cascata.

![Arquivo raíz](https://i.imgur.com/OAgKpQf.png)

A subpasta `styles/base` contém os arquivos de configuração global, visando disponibilizar determinados estilos, variáveis e funções ao projeto inteiro.

![Arquivo de configuraçōes](https://i.imgur.com/a5TE0ni.png)

Já a subpasta `styles/components` contém os estilos e classes de componentes específicos.

Todas as classes definidas deverão seguir o padrão <b>BEM</b>, por casar muito bem com componentes e ser fácil de prestar manutenção.

Segue links:
[Documentação Oficial](http://getbem.com/introduction/)
[Criando componentes CSS com o padrão BEM](https://www.alura.com.br/artigos/criando-componentes-css-com-padrao-bem)
[CSS Tricks - BEM 101](https://css-tricks.com/bem-101/)
[Understanding CSS BEM](https://codeburst.io/understanding-css-bem-naming-convention-a8cca116d252)

## Dependências
No momento, o projeto conta apenas com:
* `node-sass` para processar os arquivos .scss
* `normalize.css` para resetar e padronizar estilos em todos os navegadores.


