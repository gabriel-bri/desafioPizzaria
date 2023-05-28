//Pega o botão para calcular o  valor
const btnCalc = document.querySelector('#btnCalc');

btnCalc.addEventListener('click', () => {
	// Armazena os dados dos inputs
	const valorTotal = Number.parseFloat(document.querySelector('#conta').value).toFixed(2);
	const taxaServico = Number.parseFloat(document.querySelector('#taxa').value).toFixed(2);
	const pagantes = Math.trunc(Number.parseInt(document.querySelector('#pagantes').value));

	const valorValido = () => valorTotal >= 1 && taxaServico >= 1 && pagantes >= 1;

	if(valorValido()) {

		const totalFinal = ((parseFloat(valorTotal) + parseFloat(taxaServico)) / parseInt(pagantes)).toFixed(2);
		
		Swal.fire({
		  icon: 'success',
		  title: `Total a pagar: ${totalFinal}`,
		  html: `Uma conta de R$ ${valorTotal} + 
		   o acréscimo de R$ ${taxaServico}
		   do garçom resultará no total de R$ ${(parseFloat(valorTotal) + parseFloat(taxaServico)).toFixed(2)}. 
		   Dividido para ${pagantes} pessoas, dará um total de: 
		   <strong>${totalFinal}/pessoa.</strong>`
		})
	}

	else {
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Você digitou valores inválidos, tente novamente.'
		})
	}
})
