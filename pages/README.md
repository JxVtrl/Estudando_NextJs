Da para criar rotas de dois jeitos
1. Criar um arquivo tsx com o nome do componente e exporta-lo normalmente
2. Criar uma pasta com o nome da rota e exportar o componente da page no index.tsx
3. Criar um arquivo de rota e exportar os componentes através dele
    ex. 
        Pasta hello
        nome do arquivo: [nome do componente de roteamento].tsx
        qualquer subrota de hello irá cair neste componente
        localhost:3000/hello/qualquer-subrota


