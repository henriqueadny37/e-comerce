import GoDrop from "../../../Components/GoDrop";
import bike3 from "../../../img/sports/bike3.png"
import bike2 from "../../../img/sports/bike2.png"
import pCard from "../../../img/sports/pCard.png"
import Head from "next/head"
import { GiFlatbedCovered } from "react-icons/gi"

const goBike = () => {
    return (
        <>
            <Head>
                <title>Bicicleta Drop Z3</title>
            </Head>
            <main className="bg-white h-screen">
                <div className="flex justify-between bg-white h-screen">
                    <div className="  bg-white h-48 text-gray-800 text-3xl p-5">
                        <p className="break-words">Bicicleta Drop Z3 aro 29</p>
                        <p>câmbios shimano 21 marchas</p>
                        <p>freio a disco</p>
                        <div className="text-gray-600 text-base">
                            <section>
                                <ul>
                                    <li>
                                        <strong>Modalidade:</strong>
                                        passeio
                                    </li>
                                    <li>
                                        <strong>Aro:</strong>
                                        29
                                    </li>
                                    <li>
                                        <strong>Marchas:</strong>
                                        21
                                    </li>
                                    <li>
                                        <strong>Material da roda:</strong>
                                        Aero 36 furos folha dupla
                                    </li>
                                    <li>
                                        <strong>Suspensão:</strong>
                                        dianteira
                                    </li>
                                    <li>
                                        <strong>Indicado para:</strong>
                                        praticante
                                    </li>
                                </ul>
                            </section>

                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={bike3.src} title="bike-drop" width={400} height={400} />

                    </div>
                    <div></div>
                    <div className="text-blue-400 font-bold text-2xl flex flex-col mt-32">
                        <p className="text-base text-green-800"><GiFlatbedCovered /> Frete grátis</p>
                        <p className="line-through text-gray-500 text-sm font-light">R$ 2.899,00</p>
                        <p>R$ 899,00</p>
                        <p className="text-base">até 10x de R$ 89,90 sem juros</p>
                        <div className="flex text-xs text-gray-600">

                            <div className="flex flex-col">
                                <img src={pCard.src} title="cartãoPerson" width={10} height={10} />
                                <p>R$ 899,00 P.card</p>
                                <p>ou em 15x de 59,93 peça já o seu</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-orange-400 w-24 h-7 mt-[40%] mr-10 cursor-pointer text-center font-bold">
                        comprar
                    </div>
                </div>
                <div className="bg-white">
                    <GoDrop />
                </div>
            </main>
        </>
    )
}
export default goBike