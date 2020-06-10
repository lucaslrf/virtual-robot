### Virtual Robot

### Sobre

O algoritmo de busca foi realizado com javascript.
É observado os vizinhos de cada campo, que não são buracos. Também é considerada a distância
entre cada um deles (Busca em largura).
Quando da utilização de objeto ``` posicao_atual: { x:0, y:0, distancia: 0} ```, considere o x sendo coluna e 
o y sendo a linha.
É possível testar outras matriz além da atual, basta alterar o ```const matriz ``` no arquivo funcoes.js.

```
const matriz = [
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 1, 0, 1],
    [0, 1, 9, 1],
    [1, 1, 1, 1]
];
```

### Execução

- Abra o arquivo index.html 
- Clique em desenhar matriz
- Aperte play para observar se ele encontra o objeto 9
- Clique em reload para dar refresh na página