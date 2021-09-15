import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%; 

    input, textarea{
    outline: none;
    cursor: text;
    }

.box-body{
    background-color: #F5F5F5;
    min-height: 100vh;
    width: 66.5em;
    padding: 2.5em 2.5em;
}
.box-organization-body{
    display: flex;
    flex-direction: column;

    background-color: white;
    padding: 2em 2.5em;
    margin-bottom: 2em;
}
.box-produtos-adm{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1em;
}
.barra{
    border:#119FDC 0.2em solid;
    background-color: #119FDC;
    border-radius: 1.3em;
    height: 1.8em;
    margin-right: 1em;
}

.produto-novo{
    font-size: 2em;
    font-weight: 700;
    color: #3C3939;
}

.all-inputs{
    display: flex;
    flex-direction: row;
}

.inputs-cadastro{
    display: flex;
    flex-direction: row;
}

.cadastrar-imagens{
    display: flex;
    flex-direction: row;

    margin-right: 2em;
    padding: 0.5em 0em;
    justify-content: flex-end;
    align-items: center;
}

.cadastrar-desc {
    display: flex;
    flex-direction: row;

    margin-right: 2em;
    padding: 0.5em 0em;
    justify-content: flex-end;

}

.cadastrar-imagens input{
    width: 100%;
    height: 2em;
    
    margin-left: 1.1em;
    border-radius: 0.3em;
    border: solid 1px #A8A8A8;
}

.cadastrar-desc textarea{
    width: 100%;
    margin-left: 0.5em;
    height: 10em;
    border-radius: 0.3em;
    border: solid 1px #A8A8A8;
}



.botao-cadastrar button:hover{
background-color: #6CC3DF;
}

.botao-cadastrar{
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.5em;
}

.botao-cadastrar button{
    
    font-weight: 700;
    background: #119FDC;
    color: white;
    border-radius: 2em;
    padding: 0.6em 1.5em;
    border: none;
    cursor: pointer;
}
.format-inputs{
    display: flex;
    flex-direction: row;
    margin-right: 2em;
    padding: 0.5em 0em;
    justify-content: flex-end;
    align-items: center;
}
.format-inputs input {
    margin-left: 0.5em;
    border-radius: 0.3em;
    border: solid 1px #A8A8A8;
    height: 2em;
}
.inputs-esquerda{
    margin-right: 2em
}
.tabela-usuarios{
    border-collapse: collapse;
    width: 100%;
    align-items: flex-start;
    margin-top: 2em;
}
thead{
    background-color: #6CC3DF;
}
tbody{
    font-size: 15px;
}
th{
    padding: 1.5em  1em;
    color: white;
    text-align: left;
}
.linha-alternada{
    background-color: #F2EAE9;
}
td{
    padding: 1.5em 1em;
    color: #6D6868;
}
td button{
    padding: 0.5em;
    border-radius: 50%;
    border:none;
    background-color: #565656;
    opacity: 50%;
    cursor: pointer;
}
.buttom-option > button{
    visibility: hidden;
}
tr:hover{
    .buttom-option > button{
    visibility: visible;
} 
}
td button:hover{
    opacity: 100%;
}
.buttom-option{
    padding: 1.5em 0.5em;
}

`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;

`

export {Container, Conteudo }