// relatorios.js
document.addEventListener('DOMContentLoaded', function() {
    const periodoSelect = document.getElementById('periodo');
    const faturamentoTotalElement = document.getElementById('faturamentoTotal');
    const despesasTotalElement = document.getElementById('despesasTotais');
    const detalhesFaturamentoTable = document.getElementById('detalhesFaturamento');
    const graficoFinanceiroCanvas = document.getElementById('graficoFinanceiro').getContext('2d');

    function atualizarRelatorio() {
        const periodo = periodoSelect.value;

        // Dados de exemplo (substitua com seus dados reais)
        let faturamentoTotal = 0;
        let despesasTotais = 0;
        let detalhesFaturamento = [];
        let labels = [];
        let data = [];

        if (periodo === 'mensal') {
            faturamentoTotal = 15000;
            despesasTotais = 8000;
            detalhesFaturamento = [
                { data: '2023-11-01', descricao: 'Consulta João', valor: 500 },
                { data: '2023-11-05', descricao: 'Exame Maria', valor: 1200 },
                { data: '2023-11-10', descricao: 'Consulta Carlos', valor: 600 },
            ];
            labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
            data = [3000, 4000, 5000, 3000];
        } else if (periodo === 'anual') {
            faturamentoTotal = 180000;
            despesasTotais = 96000;
            detalhesFaturamento = [
                { data: '2023-01-15', descricao: 'Consulta Anual', valor: 1500 },
                { data: '2023-06-20', descricao: 'Exames Diversos', valor: 10000 },
                { data: '2023-12-01', descricao: 'Consultas Fim de Ano', valor: 8000 },
            ];
            labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            data = [15000, 14000, 16000, 13000, 17000, 18000, 15000, 16000, 14000, 17000, 18000, 15000];
        }

        faturamentoTotalElement.textContent = `R$ ${faturamentoTotal.toFixed(2)}`;
        despesasTotalElement.textContent = `R$ ${despesasTotais.toFixed(2)}`;

        detalhesFaturamentoTable.innerHTML = detalhesFaturamento.map(item => `
            <tr>
                <td>${item.data}</td>
                <td>${item.descricao}</td>
                <td>R$ ${item.valor.toFixed(2)}</td>
            </tr>
        `).join('');

        new Chart(graficoFinanceiroCanvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Faturamento',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    periodoSelect.addEventListener('change', atualizarRelatorio);
    atualizarRelatorio(); // Carrega o relatório inicial
});