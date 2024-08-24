
const mapeamentoCripto = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' :  'ober',
    'u' :  'ufat'
};

function criptografarMensagem(){

    let texto = document.getElementById("texto-digitado").value;

    if(validaTexto(texto)){
        alert("Escreva um texto em letras Minusculas e sem acentos!");
    }else{
            texto = texto.replace(/[/[aeiou]/g, function(mapeamento){

                return mapeamentoCripto[mapeamento];
        });

        document.getElementById("sem-texto").innerText = '';
        document.getElementById("texto-conversao").innerText = texto;
        document.getElementById("bnt-two-active-copiar").style.display = 'block';
        document.getElementById("bnt-two-active-limpar").style.display = 'block';
    }

    document.getElementById("texto-digitado").value = '';
}   

function descriptografarMensagem(){

    let texto = document.getElementById("texto-digitado").value;

    let descriptografar = Object.fromEntries(
        Object.entries(mapeamentoCripto).map(([vogal, codigo]) => [codigo, vogal])
    );

    texto = texto.replace(/ai|enter|imes|ober|ufat/g, function(mapeamento){

        return descriptografar[mapeamento];
    });

    document.getElementById("bnt-two-active-copiar").style.display = 'block';
    document.getElementById("bnt-two-active-limpar").style.display = 'block';

    document.getElementById("texto-digitado").value = '';
    document.getElementById("sem-texto").innerText = '';
    document.getElementById("texto-conversao").innerText = texto;
}


function validaTexto(texto){

    var letraMaiuscula = /[A-Z]/;
    var caractereEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    var letraComAcento = /[ÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÇáéíóúàèìòùâêîôûãõäëïöüç]/;

    return letraMaiuscula.test(texto) || caractereEspecial.test(texto) || letraComAcento.test(texto);
}

function copiar(){

  let textoCopiado = document.getElementById('texto-conversao').innerText;
  navigator.clipboard.writeText(textoCopiado).then(() => {
    alert("Texto copiado!");
  });
}

function limpar(){

    document.getElementById("sem-texto").innerText = 'Nenhuma mensagem encontrada';
    document.getElementById("texto-conversao").innerText = 'Digite um texto que você deseja Criptografar ou Descriptografar.';
    document.getElementById("bnt-two-active-copiar").style.display = 'none';
    document.getElementById("bnt-two-active-limpar").style.display = 'none';
}