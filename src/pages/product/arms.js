import Link from "next/link"
import Head from "next/head"
import { BiHomeAlt2 } from "react-icons/bi"
import womaMaris from "../../img/womaMaris.png"
import womaMaristwo from "../../img/womaMaristwo.png"
import womanThree from "../../img/womanThree.png"
import bootMaris from "../../img/bootMaris.png"
import bootMaristwo from "../../img/bootMaristwo.png"
import calcinMaris from "../../img/calcinMaris.png"
import womanMarisfour from "../../img/womanMarisfour.png"
import womanPlus from "../../img/womanPlus.png"
import womanFive from "../../img/womanFive.png"
import kiddsMaris from "../../img/kiddsMaris.png"
import camaMaris from "../../img/camaMaris.png"

const Arms = () => {
    return (
        <>
         <Head>
            <title>Mulheres</title>
        </Head>
            <main>
            <div className="bg-pink-500 h-20">
                <h1 className="font-bold flex justify-center items-center p-5 text-2xl">Mulheres</h1>
            </div>
            <div className="m-3 ml-5">
                <div className="flex space-x-4 m-3">
                    <div className="border w-48 h-16 bg-pink-600 opacity-20 font-bold p-2 rounded hover:opacity-100 cursor-pointer">
                        Shorts
                    </div>
                    <div className="border w-48 h-16 bg-pink-600 opacity-20 font-bold p-2 rounded hover:opacity-100 cursor-pointer">
                        Blazers
                    </div>
                    <div className="border w-48 h-16 bg-pink-600 opacity-20 font-bold p-2 rounded hover:opacity-100 cursor-pointer">
                        Vestidos
                    </div>
                 </div>
            </div>
            <div className="m-8 w-100 h-[50vh] bg-pink-600 font-bold pl-[30%] text-[6.5rem]">
                Novidades
                <a className="text-xl p-2 font-extralight">de mulher para mulher</a>
                <div className="flex items-center justify-center">
                    <div className="border rounded w-24 text-center font-thin text-base hover:cursor-pointer">
                        comprar
                    </div>
                </div>
            </div>
             {/*seção de fotos logo abaixo*/}
            <div className="flex flex-wrap mx-8">
                <div className="">
                    <img src={womaMaris.src}  alt="mulher" title="homepage-mosaico1" width={400} height={400} />
                </div>
                <div className="ml-20">
                    <img src={womaMaristwo.src} alt="2-mulheres" title="homepage-mosaico2" width={800} height={800} />
                </div>
                <div className="mt-4">
                    <img src={womanThree.src} alt="calca-jeans" title="homepage-calca.jeans" width={800} height={500} />
                </div>
                <div className="ml-20">
                    <img src={bootMaris.src} alt="tenis" title="homepage-tenis" width={400} height={700} />
                </div>
                <div className="flex justify-center items-center mt-32 w-100 h-[50vh]">
                    <img src={bootMaristwo.src} alt="botinha" title="homepage-botas" />
                </div>
                <div className="mt-32">
                    <img src={calcinMaris.src} alt="kits" title="kits" width={600} height={500} />
                </div>
                <div className="mt-32 ml-auto">
                    <img src={womanMarisfour.src} alt="pijamas" title="pijamas" width={600} height={500} />
                </div>
            </div>
            {/*fim da seçao de fotos acima*/}
            <div className="flex items-center justify-center mt-10 font-medium text-lg">
                Mais ofertas
            </div>
            {/*parte de compras abaixo*/}
            <div className="flex flex-row">
                <div className="m-7 font-bold">
                    <img src={womanPlus.src} alt="man" title="camisetas e polos" width={300} height={500} className="cursor-pointer" />
                    <p className="mt-3">Plus Size</p>
                    <p className="text-gray-600">A partir de R$ 49,99</p>
                    <button className="w-24 border-none rounded bg-pink-600 pb-1 mt-2">
                        comprar
                    </button>
                </div>
                <div className="mt-7  font-bold">
                    <img src={womanFive.src} alt="bolsas" title="bolsas e acessorios" width={300} height={500} className="cursor-pointer" />
                    <p className="mt-3">Bolsas e Acessórios</p>
                    <p className="text-gray-600">A partir de R$ 19,99</p>
                    <button className="w-24 border-none rounded bg-pink-600 mt-2 pb-1">
                        comprar
                    </button>
                </div>
                <div className="mt-7 ml-7 font-bold">
                    <img src={kiddsMaris.src} alt="kids" title="moda infantil" width={300} height={500} className="cursor-pointer" />
                    <p className="mt-3">Moda Infantil</p>
                    <p className="text-gray-600">Com até 60% OFF</p>
                    <button className="w-24 bg-pink-600 border-none rounded mt-2 pb-1">
                        comprar
                    </button>
                </div>
                <div className="mt-7 ml-7 font-bold">
                    <img src={camaMaris.src} alt="cama" tittle="camas" width={300} height={500} className="cursor-pointer" />
                    <p className="mt-3">Sua cama confortavel</p>
                    <p className="text-gray-600">A partir de 39,99</p>
                    <button className="w-24 bg-pink-600 border-none rounded mt-2 pb-1">
                        comprar
                    </button>
                </div>
            </div>
            
            <div className="m-3 w-4 bg-slate-700 rounded-md hover:bg-pink-600">
                <Link href="/">
                    <BiHomeAlt2 />
                </Link>
            </div>
            </main>
        </>
    )
}
export default Arms

//style={{position:"absolute", top:"170%"}}
//style={{height: "550px"}}