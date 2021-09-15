import styled from "styled-components";

const Container = styled.div`

.box-cabecalho{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2.5em;
}
.box-user-information{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.user-image{
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 50%;
    border: none;
}


.notification{
    justify-content: flex-start;
    color: white;
    background-color: #119FDC;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: .7em;
}
.user-name{
    font-weight: 400;
    font-size: 16px;
    color: #615858 ;
    margin-left: 1em;
}
.box-images{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 8em;
}
.box-images button{
    cursor: pointer;
    background-color: #119FDC ;
    border-radius: 50%;
    border: none;
    padding: 1em;
}
.box-images img{
 cursor: pointer;
}
.line{
    border-bottom: solid 0.5px;
    width: 95%;
    color:#d3cbcb;
    align-self: center; 
}
`

export {Container}