
/* Declarações dos temas */
function LucasFuncao() {
    var element = document.body;
    var footer = document.querySelector('footer'); 
    var header = document.querySelector('header'); 
    var sessao_obras = document.querySelector('.sessao_obras'); 
    var aviso_ingresso = document.querySelector('.aviso_ingresso');
    var nossas_obras = document.querySelector('.nossas_obras');
    var sobre_nos = document.querySelector('.sobre_nos');
    var localizacao_museu = document.querySelector('.localizacao_museu');
    var titulo_e_descricao = document.querySelector('.titulo_e_descricao');

    
    element.classList.toggle("modo_preto");
    
    if (footer) { 
        footer.classList.toggle("modo_preto02");
    }

    /* Gambiarra das gambiarras | Tema black */
    
    /*if (sessao_obras) { 
        sessao_obras.classList.toggle("modo_preto");
    }
     */

    if (header) { 
        header.classList.toggle("modo_preto");
    }

    if (aviso_ingresso) { 
        aviso_ingresso.classList.toggle("modo_preto");
    }

    if (nossas_obras) { 
        nossas_obras.classList.toggle("modo_preto03");
    }
   
    if (sobre_nos) { 
        sobre_nos.classList.toggle("modo_preto04");
    }

    if (localizacao_museu) { 
        localizacao_museu.classList.toggle("modo_preto04");
    }

    if (titulo_e_descricao) { 
        titulo_e_descricao.classList.toggle("modo_preto05");
    }
}

