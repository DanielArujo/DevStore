import axios from 'axios'

const api = axios.create({
    baseURL: 'https://devstoreapidan.herokuapp.com/'
})

export default class Api{

    async listar(){
        let r = await api.get('/produto');
        return r.data;
    }

    async inserir(produto, categoria, precoDe, precoPor, avaliacao, produtoDesc , estoque, imgProduto){
        let r = await api.post('/produto', {produto, categoria, precoDe, precoPor, avaliacao, produtoDesc , estoque, imgProduto}) 
        return r.data;
    }

    async alterar(id, produto, categoria, precoDe, precoPor, avaliacao, produtoDesc , estoque, imgProduto){
        let r = await api.put('/produto/'+ id, {produto, categoria, precoDe, precoPor, avaliacao, produtoDesc , estoque, imgProduto})
        return r.data;
    }

    async deletar(id){
        let r = await api.delete('/produto/' + id)
        return r.data;
    }

}