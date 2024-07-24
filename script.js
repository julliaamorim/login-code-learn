const inputSenha = document.getElementById("input-senha");
const olhoSenha = document.getElementById("olho-senha");
let senhaVisivel = false;

olhoSenha.addEventListener("click", mudarTipoSenha);

function mudarTipoSenha() {
  senhaVisivel = !senhaVisivel;

  if (senhaVisivel === true) {
    inputSenha.type = "text";
    olhoSenha.className = "fa-solid fa-eye-slash";
  }
  else {
    inputSenha.type = "password";
    olhoSenha.className = "fa-solid fa-eye";
  }
}
