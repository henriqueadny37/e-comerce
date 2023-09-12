export default (req, res) => {
    if(req.method === "GET"){
        res.status(200).json({
            dados: "entrada liberada"
        })
    }else{
        res.status(200).json({
            dados: "valor adulterado"
        })
    }
}