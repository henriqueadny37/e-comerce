import Link from "next/link"
import Head from "next/head"
import { BiHomeAlt2 } from "react-icons/bi"
import nikeAir from "../../img/nikeAir.png"
import mochilaPreta from "../../img/acessorios/mochilaPreta.png"
import carteiraLilas from "../../img/acessorios/carteiraLilas.png"
import relogioMen from "../../img/acessorios/relogioMen.png"


const Acessorios = () => {
    return(
        <>
        <Head>
            <title>Acessórios</title>
        </Head>
            <div className="bg-orange-700 h-20 text-xl">
                <h1 className="font-bold flex justify-center 
            items-center p-7">
                    Acessórios
                </h1>
            </div>
            <div className="bg-orange-900 font-extralight text-center h-10 pt-2">
            frete grátis acima de R$150
            </div>
          <div className="flex flex-wrap mt-8 font-bold">
          <div className="text-center ml-24">
                <img src={mochilaPreta.src} tittle="mochila" width={300} height={300} className="cursor-pointer" />
                <p className="mt-1">Mochila Mizuno fun new</p>
                <p className="mt-1">por 180,90</p>
            </div>
            <div className="ml-3 text-center">
                <img src={nikeAir.src} alt="fotonike" title="nike-air" width={300} height={300} className="cursor-pointer"/>
                <p className="mt-1">Tenis nike-air</p>
                <p className="mt-1">por R$119,99</p>
            </div>
            <div className="ml-3">
                <img src={carteiraLilas.src} title="carteira" width={260} height={300} className="cursor-pointer" />
                <p className="mt-1">Carteira pequena com puxador ziper</p>
                <p className="mt-1 text-center">por R$35,90</p>
            </div>
            <div>
                <img src={relogioMen.src} title="relogio masculino" width={260} height={300} className="cursor-pointer" />
                <p className="mt-1 text-center">Relógio Mormaii Smartwatch</p>
                <p className="mt-1 text-center">por R$799,90</p>
            </div>
          </div>
                <div className="m-3 w-4 bg-gray-700 rounded-md hover:bg-orange-600">
                    <Link href="/">
                        <BiHomeAlt2 />
                    </Link>
                </div>
        </>
    )
}
export default Acessorios