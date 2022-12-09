## Design System da Onyma Digital
> https://health-inn.github.io/onyma-ds

### Descrição
Este é um projeto de Design System monorepo, ou seja, vários projetos estão dentro de um único repositório sendo possível gerenciar todos eles estando na pasta raiz. Os projetos implementados são:
- Docs (com storybook);
- React (criação dos componentes);
- Tokens;
- Ts-config;

### Como rodar o projeto
O projeto possui um package.json para cada "package" e um para gerenciar o projeto todo.

#### Rodar todos os packages ao mesmo tempo
Na pasta raiz (/), instale as dependências:
```
npm i
```

Dessa forma, todas as dependências de todos os packages irão ser instaladas. E depois rode o projeto:
```
npm run dev
```

É possível seguir estes passos para cada package individualmente, estando dentro da pasta de um deles (ex. /packages/react)
