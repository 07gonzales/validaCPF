function validarCPF(cpf) {
    cpf = cpf.replace (/[^\d]+/g,""); //  Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false; // CPF deve ter 11 dígitos
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);       
        }

        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) {
            resto = 0;
        }

        if(resto !== parseInt(cpf.substring(9, 10))) {
            return false; // CPF inválido
    }


soma = 0;
// Validação do segundo dígito verificador  
for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
}
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.substring(10, 11))) {
            return false; // CPF inválido
        }
    return true; // CPF válido
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('cpf-form').addEventListener("submit", function(e) { 
        e.preventDefault(); // Previne o envio do formulário
        const cpfInput = document.getElementById('cpf').value; 
        const messageDiv = document.getElementById('message');
        if (validarCPF(cpfInput)) {
            messageDiv.textContent = "CPF Válido";
            messageDiv.className = "message success";
        } else {
            messageDiv.textContent = "CPF Inválido";
            messageDiv.className = "message error";
        }
        messageDiv.style.display = "block"; 
    });
});
