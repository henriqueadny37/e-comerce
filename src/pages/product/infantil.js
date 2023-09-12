import Link from "next/link"
import { useEffect, useState } from "react"
import { BiHomeAlt2 } from "react-icons/bi"
import { json } from "react-router-dom"



const Infantil = () => {
    
    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/notas/123')
    .then(resp => resp.json())
    .then(setQuestao)
    }, [])

    return (
        <>
            <div className="bg-blue-700 p-2 h-20">
                <h1 className="items-center flex justify-center font-bold p-5">
                    Infantil
                </h1>
            </div>
            <div>
              <span>{questao?.modos} - {questao?.id}</span>
              <ul>
                <li>{questao?.itens}</li>
              </ul>
            </div>
            <div className="m-3">
            <div className="w-36 h-16 bg-sky-400 opacity-20"></div>
                    <div className="-mt-8 w-20 h-10 bg-sky-300 font-bold">mt-08</div>
            </div>
            <div className="m-3 w-4 bg-slate-600 rounded-md hover:bg-blue-700">
                <Link href="/">
                    <BiHomeAlt2 />
                </Link>
            </div>
        </>
    )
}
export default Infantil