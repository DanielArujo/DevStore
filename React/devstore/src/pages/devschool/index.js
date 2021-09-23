import "bootstrap/dist/css/bootstrap.min.css";
import popups from "bootstrap-popups";

import LoadingBar from 'react-top-loading-bar'
import {React, useRef }from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'

import { Container, Conteudo } from './styled'

import { useState, useEffect } from 'react';

import Api from '../../service/api';


const api = new Api();


export default function Index() {

    const[catalogo, setCatalogo] = useState([])
    const[produto, setProduto] = useState('');
    const[categoria, setCategoria] = useState('');
    const[preco, setPreco] = useState('');
    const[avaliacao, setAvaliacao] = useState('');
    const[precoDe, setPrecoDe] = useState('');
    const[imagem, setImagem] = useState('');
    const[descricao, setDescricao] = useState('');
    const[estoque, setEstoque] = useState('');
    const[idAlterando, setIdAlerando] = useState(0);

    const loading = useRef(null)  

    async function listar() {
        let r = await api.listar();
        console.log(r);
        setCatalogo(r);
    }

    async function inserir(){
        
        if(idAlterando === 0){
        loading.current.continuousStart();
        let r = await api.inserir(produto, categoria, precoDe, preco, avaliacao, descricao , estoque, imagem);
            if(r.erro)
                toast.dark(r.erro)
            else{
                toast.dark('Produto inserido!!!');
                limparCampos();
            }
            loading.current.complete();
        } else {
        loading.current.continuousStart();
        let r = await api.alterar(idAlterando, produto, categoria, precoDe, preco, avaliacao, descricao , estoque, imagem)
            if(r.erro)
                toast.dark(r.erro)
            else {
                toast.dark('Produto alterado!!!') 
                limparCampos(); 
            }
        loading.current.complete();
        }

        listar();
    }

    function limparCampos(){
        setProduto('');
        setCategoria('');
        setPreco('');
        setAvaliacao('');
        setImagem('');
        setPrecoDe('');
        setDescricao('')
        setEstoque('');
        setIdAlerando(0)
    }


    async function deletar(id){
        loading.current.continuousStart();
        await api.deletar(id);
        toast.dark('Produto deletado');
        loading.current.complete();
        listar();
    }

    async function alterar(item){
        setProduto(item.nm_produto);
        setCategoria(item.ds_categoria);
        setPrecoDe(item.vl_preco_de);
        setPreco(item.vl_preco_por);
        setAvaliacao(item.vl_avaliacao);
        setDescricao(item.ds_produto)
        setEstoque(item.qtd_estoque);
        setImagem(item.img_produto);
        setIdAlerando(item.id_produto)
    }

    useEffect( () => { listar() }, [] )

    
    return (
        
        <Container>
            <Container>
            <ToastContainer />
            <LoadingBar color='#0b78a7' ref={loading} />
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div className="box-principal">
                    <div className="box-body">
                        <div className="box-organization-body">
                            <div className="box-produtos-adm">
                                <div className="barra"></div>
                                <div className="produto-novo"> {idAlterando === 0 ? 'Novo Produto' : "Alterando produto " + idAlterando } </div>
                            </div>
                            <div className="all-inputs">
                                <div className="all-registers">
                                    <div className="inputs-cadastro">
                                        <div className="inputs-esquerda">
                                            <div className="format-inputs">
                                                <div className="produto-produto">Produto: </div>
                                                <div className="input"> <input type="text" value={produto} onChange={e => setProduto(e.target.value)} /> </div>
                                            </div>
                                            <div className="format-inputs">
                                                <div className="produto-categoria"> Categoria: </div>
                                                <div className="input"><input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} /> </div>
                                            </div>
                                            <div className="format-inputs">
                                                <div className="produto-avaliacao">Avaliação: </div>
                                                <div className="input"> <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} /> </div>
                                            </div>
                                        </div>

                                        <div className="inputs-direita">
                                            <div className="format-inputs">
                                                <div className="produto-preco-de">Preço DE: </div>
                                                <div className="input"><input type="text" value={precoDe} onChange={e => setPrecoDe(e.target.value)} /> </div>
                                            </div>
                                            <div className="format-inputs">
                                                <div className="produto-preco-por">Preço POR: </div>
                                                <div className="input"> <input type="text" value={preco} onChange={e => setPreco(e.target.value)} /> </div>
                                            </div> 
                                            <div className="format-inputs">
                                                <div className="estoque">Estoque: </div>
                                                <div className="input"> <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)} /> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inputs-maiores">
                                        <div className="cadastrar-imagens">
                                            <div> Imagem: </div>
                                            <input type="text" value={imagem} onChange={e => setImagem(e.target.value)} />
                                        </div>
                                        <div className="cadastrar-desc">
                                            <div> Descrição: </div>
                                            <textarea type="text" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                    <div className="botao-cadastrar"><button onClick={inserir}> {idAlterando === 0 ? 'Cadastrar' : 'Alterar' }  </button> </div>
                                </div>
                        </div>

                        <div className="box-organization-body">
                            <div className="box-produtos-adm">
                                <div className="barra"></div>
                                <div className="produto-novo">Produtos Cadastrados</div>
                            </div>
                            <table className="tabela-produtos">
                                <thead>
                                    <tr>
                                        <th>  </th> 
                                        <th> ID </th>
                                        <th> Produto </th>
                                        <th> Categoria </th>
                                        <th> Preço </th>
                                        <th> Estoque</th>
                                        <th className="buttom-option"></th>
                                        <th className="buttom-option"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {catalogo.map((item, i) => 
                                        <tr className= { i % 2 === 0 ? "" : "linha-alternada"}>
                                            <td className="image-produto"> <img src={item.img_produto} alt= "Sem Imagem" /> </td>
                                            <td> {item.id_produto} </td>
                                            <td title={item.nm_produto }>
                                                {item.nm_produto != null && item.nm_produto.length >= 30 ? item.nm_produto.substr(0, 30) + '...' : item.nm_produto } 
                                            </td>
                                            <td title={item.ds_categoria}> 
                                            {item.ds_categoria != null && item.ds_categoria >= 30 ? item.ds_categoria.substr(0, 30) + '...' : item.ds_categoria }
                                                </td>
                                            <td> {item.vl_preco_por} </td>
                                            <td> {item.qtd_estoque} </td>
                                            <td className="buttom-option"> <button onClick={() => alterar(item)}> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                            <td className="buttom-option"> <button onClick={ () => { popups.confirm({ message: "Tem certeza que deseja excluir o Produto " + item.id_produto + "?" , task: () => deletar(item.id_produto) }) }  }> <img src="/assets/images/trash.svg" alt="" /> </button> </td>                              
                                        </tr>
                                    )}
                                    
                                    
                                </tbody>
                            </table>       
                        </div>
                    </div>
                </div>
            </Conteudo>
        </Container>
        </Container>
    )
    }