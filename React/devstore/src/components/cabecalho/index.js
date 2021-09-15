import  {Container}  from "./styled";


export default function Index(){
    return(
        <Container>
            <div className="box-cabecalho">
                <div className="box-user-information">
                    <div className="user-image"> <img src="/assets/images/brunin-god.svg" alt="" /> <div className="notification"> 3 </div> </div>
                    <div className="user-name">Ola, <b> Bruno de Oliveira </b></div>
                </div>
                <div className="box-images">
                    <div className="recarregar"> <button> <img src="/assets/images/reload.svg" alt="" /> </button> </div>
                    <div className="sair"> <button> <img src="/assets/images/log-out.svg" alt="" /> </button> </div>
                </div>
            </div>
            <div className="line" />
        </Container>
    )
}