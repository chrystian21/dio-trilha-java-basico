document.getElementById('addContactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('/adicionarContato', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Atualizar a tabela de contatos
        } else {
            alert('Erro ao adicionar contato');
        }
    });
});