function calcularSustentabilidade() {
    // Pegando as caixas de seleção
    const p1 = document.getElementById('pratica1');
    const p2 = document.getElementById('pratica2');
    const p3 = document.getElementById('pratica3');
    
    let pontuacaoTotal = 0;

    // Verificando quais estão marcadas e somando os valores
    if (p1.checked) pontuacaoTotal += parseInt(p1.value);
    if (p2.checked) pontuacaoTotal += parseInt(p2.value);
    if (p3.checked) pontuacaoTotal += parseInt(p3.value);

    // Selecionando os elementos de resultado da página
    const divResultado = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    // Mostrando a div de resultado
    divResultado.classList.remove('escondido');

    // Lógica para definir a mensagem baseada na pontuação
    if (pontuacaoTotal === 100) {
        divResultado.className = "sucesso"; // Muda a cor para verde
        textoResultado.innerHTML = `<strong>Pontuação: ${pontuacaoTotal}%</strong> - Excelente! Sua fazenda digital alcançou o equilíbrio perfeito. Alta produção com total respeito ao meio ambiente!`;
    } else if (pontuacaoTotal >= 60) {
        divResultado.className = ""; // Cor padrão (alerta)
        textoResultado.innerHTML = `<strong>Pontuação: ${pontuacaoTotal}%</strong> - Bom caminho! Você já adota práticas sustentáveis importantes, mas ainda pode melhorar para alcançar o topo da sustentabilidade.`;
    } else {
        divResultado.className = ""; // Cor padrão (alerta)
        textoResultado.innerHTML = `<strong>Pontuação: ${pontuacaoTotal}%</strong> - Atenção! Sua produção pode estar esgotando os recursos naturais. Tente implementar mais tecnologias e práticas verdes.`;
    }
}