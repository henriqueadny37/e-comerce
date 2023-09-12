import { BiHomeAlt2 } from "react-icons/bi"
import Link from "next/link"
import { Sobre } from "../../Components/Sobre";
import Head from "next/head";
import styles from "../../styles/Titulo.module.css"
import { json } from "react-router-dom";
import { useEffect, useState } from "react";



const SobrePage = () => {

    const [quis, setQuis] = useState(null)

   useEffect(() => {
    fetch('http://localhost:3000/api/notas/123')
    .then(resp => resp.json())
    .then(setQuis)
   }, [])


function renderItens(){
    if(quis) {
        return quis.itens.map((item, i) => {
            return <li key={i}>{item}</li>
            //{i} chave única
        })
    }
    return false
}

    return(
        <>
         <Head>
            <title>Sobre</title>
        </Head>
            <div className="bg-yellow-400 h-20">
                <h2 className="font-bold italic text-black flex items-center justify-center p-7">
                    Sobre
                </h2>
            </div>  
            <div>
                <span>{quis?.id} - {quis?.modos}</span>
                {renderItens()}
            </div>
            <div>
                <Sobre />
            </div>
            <div>
                <h1 className={styles.Titulo}>tudo sobre a loja</h1>
            </div>
             <div className="w-4 m-3 bg-gray-600 rounded-md hover:bg-yellow-400">
             <Link href="/">
                    <BiHomeAlt2 />
                </Link>
             </div>
        </>
    )
}
export default SobrePage;