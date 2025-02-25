// index.html script
if (document.getElementById('grafico')) {
    var ctx = document.getElementById('grafico').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
            datasets: [{
                label: 'Consultas',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });
}

// pacientes.html scripts
function mostrarPopup(event) {
    event.preventDefault();
    document.getElementById('popup').style.display = 'block';
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}

// agendamentos.html scripts
if (document.getElementById('agendamentoForm')) {
    document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('popupAgendamento').style.display = 'block';
    });

    function fecharPopupAgendamento() {
        document.getElementById('popupAgendamento').style.display = 'none';
    }
}

// Modo Escuro
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Verifica se o modo escuro está salvo no localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Adiciona um ouvinte de eventos ao botão de alternância
darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    // Salva a preferência do usuário no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});