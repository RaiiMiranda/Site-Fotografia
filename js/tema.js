function toggleMode()
{       
    const body = document.body;        

    // geral
    const todosParagrafos = document.querySelectorAll("p");
    const todosTitulos = document.querySelectorAll("h1");  
    const buttons = document.querySelectorAll("button");  
    const secaoTitulo = document.getElementById("secao01-titulo"); 

    // index
    const fundoPrincipal = document.getElementById("fundo-principal");
    const fundoGradiente = document.getElementById("header-gradiente");
    const linkIndex = document.getElementById("link-index");  
    const containerForm = document.getElementById("container-formulário"); 
    const botaoForm = document.getElementById("form-botao-enviar"); 
    const containerFrases = document.getElementById("container-frases");
    const containerMeio = document.getElementById("container-meio");

    // historia
    const pCardTexto = document.getElementById("card-historia");

    // fotografias historicas
    const fundoContainer = document.getElementById("main-fotografias-historicas");

    // fotografos famosos
    const pFamosos = document.getElementById("p-famosos-individual"); 
    const imgFamosos = document.getElementById("container-esquerda"); 
    const biografiaFamosos = document.getElementById("direita-biografia"); 

    // mundo
    const textoImagem = document.getElementById("texto-da-imagem"); 

    // guia
    const h2Guia = document.getElementById("h2-guia"); 

    // guia e tipos
    const containerLinks = document.getElementById("container-links"); 

    // sobre
    const h3Sobre = document.getElementById("h3-dark"); 
    const fundoSobre = document.getElementById("fundo-direita-dev");
    const fundoMeio = document.getElementById("container-meio-sobre");
    const divisao01 = document.getElementById("divisao01");
    const divisao02 = document.getElementById("divisao02");
    
    // botao mudar tema
    const botao = document.getElementById("btnMudar");   
    const imagemBotao = document.getElementById("btnImagem");            
                                                                    
    body.classList.toggle("dark-mode");                         
    if (body.classList.contains("dark-mode")){
        imagemBotao.src = "tema-dark-light.png";
    }
}