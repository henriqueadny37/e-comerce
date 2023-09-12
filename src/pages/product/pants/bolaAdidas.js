import Link from "next/link" 
import Contador from "../../../Components/Contador"
import ballAdidas2 from "../../../img/sports/ballAdidas2.png"
import ballAdidas from "../../../img/sports/ballAdidas.png"
import { useState } from "react"


export const ball = () => {

    const [numero, setNumero] = useState(0)

    function click(){
        setNumero(numero + 1)
    }

    function clicked() {
        setNumero(numero - 1)
    }

    return(
        <>
        <div className="flex flex-col w-[30%] text-3xl mt-10 ml-4">
        <p>bola de futebol campo adidas starlancer</p> 
        <p className="bg-pink-600 w-44 mt-8 text-center text-lg">Lançamento</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={ballAdidas.src} title="bola-starlancer" width={300} height={300} />
            <img src={ballAdidas2.src} title="bola-02" width={300} height={300} />
        </div>
        <div className="ml-[80%] bg-orange-500 rounded font-semibold w-44 text-center text-lg mb-10">
            Comprar
        </div>
        <div className="ml-[80%] border-2 border-white rounded w-32 text-center">
            total
        <Contador numero={numero} />
            <div className="flex items-center justify-center border-2 border-white font-bold">
                <button onClick={click} className="mr-2 w-8 items-center bg-gray-500">
                    +
                </button>
                <button onClick={clicked} className="ml-2 w-8 items-center bg-gray-500">
                    -
                </button>
            </div>
        </div>
           <div className="">
            <Link href="../">
                voltar
            </Link>
           </div>
        </>
    )
}
export default ball