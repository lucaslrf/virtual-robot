const matriz = [
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 1, 0, 1],
    [0, 1, 9, 1],
    [1, 1, 1, 1]
];

let matriz_desenhada = false;

function desenharMatriz() {

    if (!matriz_desenhada) {
        matriz_desenhada = true;
        const div = document.getElementById("arena");
        const table = document.createElement("table");

        table.classList.add('table-arena');

        for (let linha = 0; linha < matriz.length; linha++) {
            const tr = document.createElement("tr");
            for (let coluna = 0; coluna < matriz[0].length; coluna++) {
                const td = document.createElement("td");
                td.appendChild(document.createTextNode(matriz[linha][coluna]));
                td.setAttribute('id', coluna + ' , ' + linha)
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        div.appendChild(table);
    }

}

function reload() {
    location.reload();
}


function playVirtualRobot() {

    if (!matriz_desenhada) {
        alert('Antes de executar, clique em Desenhar Matriz');
        return;
    }

    const posicao_inicial = {
        x: 0,
        y: 0,
        distancia: 0
    }

    let fila = [posicao_inicial];

    while (fila.length > 0) {

        let posicao_atual = fila.shift();

        if (matriz[posicao_atual.y][posicao_atual.x] == 9) {

            let td = document.getElementById(posicao_atual.x + ' , ' + posicao_atual.y)
            td.style.backgroundColor = 'DarkBlue';
            td.style.color = "white";

            let span = document.getElementById('coordenada-encontrada');
            span.innerHTML = "Coordenada encontrada: " + "(" + posicao_atual.x + " , " + posicao_atual.y + ")";
            span.style.fontWeight = 'bold';

            return true;
        } else {
            matriz[posicao_atual.y][posicao_atual.x] = 0;
            let lista = getPosicoesVizinhas(posicao_atual, matriz);
            fila.push(...lista);
        }

    }

}


function getPosicoesVizinhas(posicao_atual, matriz) {

    let lista = [];

    vizinho_acima = verificarPosicaoAcima(posicao_atual, matriz);
    vizinho_abaixo = verificarPosicaoAbaixo(posicao_atual, matriz);
    vizinho_direita = verificarPosicaoDireita(posicao_atual, matriz);
    vizinho_esquerda = verificarPosicaoEsquerda(posicao_atual, matriz);

    if (vizinho_acima) {
        lista.push(vizinho_acima);
    }

    if (vizinho_abaixo) {
        lista.push(vizinho_abaixo);
    }

    if (vizinho_direita) {
        lista.push(vizinho_direita);
    }

    if (vizinho_esquerda) {
        lista.push(vizinho_esquerda);
    }


    return lista;

}

function verificarPosicaoAcima(posicao_atual, matriz) {
    if ((posicao_atual.y + 1 > 0 && posicao_atual.y + 1 < matriz.length) && matriz[posicao_atual.y + 1][posicao_atual.x] != 0) {
        return { x: posicao_atual.x, y: posicao_atual.y + 1, distancia: posicao_atual.distancia + 1 };
    }
    return null;
}

function verificarPosicaoAbaixo(posicao_atual, matriz) {
    if ((posicao_atual.y - 1 > 0 && posicao_atual.y - 1 < matriz.length) && matriz[posicao_atual.y - 1][posicao_atual.x] != 0) {
        return { x: posicao_atual.x, y: posicao_atual.y - 1, distancia: posicao_atual.distancia + 1 };
    }
    return null;
}

function verificarPosicaoDireita(posicao_atual, matriz) {
    if ((posicao_atual.x + 1 > 0 && posicao_atual.x + 1 < matriz[0].length) &&
        matriz[posicao_atual.y][posicao_atual.x + 1] != 0) {
        return { x: posicao_atual.x + 1, y: posicao_atual.y, distancia: posicao_atual.distancia + 1 };
    }
    return null;
}

function verificarPosicaoEsquerda(posicao_atual, matriz) {
    if ((posicao_atual.x - 1 > 0 && posicao_atual.x < matriz[0].length) &&
        (matriz[posicao_atual.y][posicao_atual.x - 1] != 0)) {
        return { x: posicao_atual.x - 1, y: posicao_atual.y, distancia: distancia + 1 };
    }
    return null;
}