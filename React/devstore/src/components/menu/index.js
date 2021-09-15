import { Container } from "./styled"

export default function Index(){
    return(
        <Container>
             <header>
                <div className="fox-svg"> <img src="/assets/images/fox-logo.svg" alt="" /> </div>
                <div className="nome-site"><span>Dev</span>Store</div>
            </header>
    
            <div className="ret-cinza"></div>
            <div className="box-opcoes"> 
                <div>Gerenciamento</div>
                <div> <button> <img src="/assets/images/seta-baixo.svg" alt="" /> </button> </div>
            </div>
            <div className="box-aluno">  Alunos</div>
        </Container>
    )
}