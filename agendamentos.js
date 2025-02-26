
document.addEventListener('DOMContentLoaded', function() {
    const agendamentosRealizadosTable = document.getElementById('agendamentosRealizados');

    // Dados de exemplo para agendamentos realizados
    const agendamentosRealizados = [
        { paciente: 'Ana Clara Souza', medico: 'Dr. Antônio', data: '2023-12-01', hora: '10:00', motivo: 'Avaliação', valor: 150.00 },
        { paciente: 'Bruno Mendes', medico: 'Dra. Beatriz', data: '2023-12-02', hora: '11:30', motivo: 'Revisão', valor: 120.00 },
        { paciente: 'Carla Pereira', medico: 'Dr. Jhonatas', data: '2023-12-03', hora: '09:00', motivo: 'Exame', valor: 200.00 },
        { paciente: 'Daniel Rocha', medico: 'Dr. Antônio', data: '2023-12-04', hora: '14:00', motivo: 'Consulta de rotina', valor: 100.00 },
        { paciente: 'Elisa Santos', medico: 'Dra. Beatriz', data: '2023-12-05', hora: '16:00', motivo: 'Retorno', valor: 80.00 },
        { paciente: 'Fábio Lima', medico: 'Dr. Jhonatas', data: '2023-12-06', hora: '10:30', motivo: 'Exame de sangue', valor: 180.00 },
        { paciente: 'Gabriela Costa', medico: 'Dr. Antônio', data: '2023-12-07', hora: '13:00', motivo: 'Avaliação', valor: 150.00 },
        { paciente: 'Henrique Oliveira', medico: 'Dra. Beatriz', data: '2023-12-08', hora: '15:30', motivo: 'Revisão', valor: 120.00 },
        { paciente: 'Isabela Rodrigues', medico: 'Dr. Jhonatas', data: '2023-12-09', hora: '09:30', motivo: 'Exame', valor: 200.00 },
        { paciente: 'João Silva', medico: 'Dr. Antônio', data: '2023-12-10', hora: '16:30', motivo: 'Consulta de rotina', valor: 100.00 }
    ];

    // Adiciona os agendamentos realizados à tabela
    agendamentosRealizados.forEach(agendamento => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${agendamento.paciente}</td>
            <td>${agendamento.medico}</td>
            <td>${agendamento.data}</td>
            <td>${agendamento.hora}</td>
            <td>${agendamento.motivo}</td>
            <td>R$ ${agendamento.valor.toFixed(2)}</td>
        `;
        agendamentosRealizadosTable.appendChild(row);
    });
});