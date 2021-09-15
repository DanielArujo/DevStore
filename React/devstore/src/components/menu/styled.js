import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    flex-direction: column;

    background-color: #2B3031;
    height: 100vh;  


    position: sticky;
    top: 0px;

header{
    display: flex;
    flex-direction: row;

    
    align-items: center;
    font-size: 25px;
    font-weight: 700;

    padding: 1.5em 3.5em 1.5em 2em;
    color: white;
}

header span{
    color: #10EAEA;
}

header img{
    margin-right: 5px;
}

.box-lateral header span{
    color: #EA10C7;
}

.ret-cinza{
    background-color: #262626;
    width: 100%;
    height: 3em;
}

.box-opcoes{
    display: flex;
    flex-direction: row;
    padding: 1.5em 1.4em 1em 3.2em;

    justify-content: space-between;
    color: white;
}

.box-opcoes button{
    border: none;
    background: none;
}

.box-aluno{
    padding: 1em 1.4em 1em 3.2em;
    background-color: white;

    font-weight: 700;
    border-left: 4px solid  #10EAEA;

}




`

export {Container}