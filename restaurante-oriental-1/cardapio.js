
function passarFormulario() {
  var email = document.getElementById("email").value.trim();
  var checkbox = document.getElementById("checkbox").checked;
  var erroEmail = document.getElementById("ErroDeEmail");
  var erroCheckbox = document.getElementById("ErroCheckbox");
  var checkboxQuadrado = document.getElementById("checkbox-quadrado");

  erroEmail.innerText = "";
  erroCheckbox.innerText = "";

  if (email === "") {
      email = prompt("Digite seu e-mail:");
      if (email === null || email.trim() === "") {
          erroEmail.innerText = "Por favor, preencha o campo de e-mail.";
          return;
      }
  }

  if (!validarEmail(email)) {
      erroEmail.innerText = "Digite um e-mail válido, por favor ";
      return;
  }

  if (!checkbox) {
      erroCheckbox.innerText = "Aceitar os termos de uso, por favor";
      checkboxQuadrado.style.backgroundColor = "red";
  }

  alert('E-mail "' + email + '" cadastrado com sucesso!');
}

function validarEmail(email) {
  var resposta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return resposta.test(email) && email.length >= 10;
}



