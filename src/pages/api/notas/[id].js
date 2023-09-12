export default function mynot (req, res) {
    if(req.method === "GET") {
        const id = req.query.id
        res.status(200).json({
            id,
            modos: "esportes",
            itens: [
                'bola de basquete ',
                'bola adidas ',
                'bike drop aro 29'
            ]
        })
    } else {
        res.status(405).send()
    }
}