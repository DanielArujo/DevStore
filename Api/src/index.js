import db from "./db.js";
import express, { application } from 'express';
import cors from 'cors';

const app = express()
app.use(cors());
app.use(express.json())

app.get('/produto', async(req, resp) => {
try{
    let r = await db.tb_produto.findAll()
    resp.send(r);
}catch(e){
    resp.send(e.toString())
}
})

app.post('/produto', async(req, resp) =>  {
try{

    let {produto, categoria, precoDe, precoPor, avaliacao, produtoDesc , estoque, imgProduto } = req.body;

    let r = await db.tb_produto.create({
        nm_produto: produto,
        ds_categoria: categoria,
        vl_preco_de: precoDe,
        vl_preco_por: precoPor,
        vl_avaliacao: avaliacao,
        ds_produto: produtoDesc,
        qtd_estoque: estoque,
        img_produto: imgProduto
    })
    resp.send(r)
} catch(e){
    resp.send(e.toString())
}
})

app.put('/produto/:id', async(req, resp) => {
    try{
        let {id} = req.params;

        let {produto, categoria, precoDe, precoPor, avaliacao, produtoDesc, estoque, imgProduto} = req.body;
        
        let r = await db.tb_produto.update({
            nm_produto: produto,
            ds_categoria: categoria,
            vl_preco_de: precoDe,
            vl_preco_por: precoPor,
            vl_avaliacao: avaliacao,
            ds_produto: produtoDesc,
            qtd_estoque: estoque,
            img_produto: imgProduto
        }, 
        {
            where: {id_produto: id} 
        })
    

        resp.sendStatus(200)
    } catch(e){
        resp.send(e.toString())
    }
})

app.delete('/produto/:id', async (req, resp) => {
    try{
        let {id} = req.params;
        
        let r = await db.tb_produto.destroy({where: { id_produto: id } })

        resp.sendStatus(200)
    }catch(e){
        resp.send(e.toString())
    }

})


app.listen(process.env.PORT,

    x => console.log(`Server up at port ${process.env.PORT}`))

