function gerarPrompt() {
    // Lista de frases e cenários para o Neymar em 2026
    const cenarios = [
        "⚽ 'O Hexa vem! Neymar faz o gol do título aos 45 minutos do segundo tempo com um chute de fora da área!'",
        "🎯 'Neymar lidera o campeonato em assistências e serve a nova geração de craques para levantar a taça!'",
        "🏆 'Com a camisa 10 e a braçadeira de capitão, Neymar dita o ritmo do meio-campo e brilha nos gramados!'",
        "💫 'O futebol arte vive! Caneta, carretilha e o sorriso no rosto: o Menino Ney está pronto para fazer história!'"
    ];

    // Escolhe um cenário aleatório
    const indiceAleatorio = Math.floor(Math.random() * cenarios.length);
    const promptSelecionado = cenarios[indiceAleatorio];

    // Exibe o resultado na tela mudando o estilo para 'block'
    const elementoResultado = document.getElementById('resultadoPrompt');
    elementoResultado.innerText = promptSelecionado;
    elementoResultado.style.display = 'block';
}