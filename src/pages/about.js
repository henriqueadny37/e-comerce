import Link from "next/link"
import { BiHomeAlt2 } from "react-icons/bi"
import { BiLogoFacebookCircle } from "react-icons/bi"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { BiLogoYoutube } from "react-icons/bi"
import { BiLogoPinterest } from "react-icons/bi"
import menMaris1 from "../img/men/menMaris1.png"
import menMaris2 from "../img/men/menMaris2.png"
import menMaris3 from "../img/men/menMaris3.png"
import menCamiseta1 from "../img/men/menCamiseta1.png"
import menCamiseta2 from "../img/men/menCamiseta2.png"
import menCamiseta3 from "../img/men/menCamiseta3.png"
import menCamiseta4 from "../img/men/menCamiseta4.png"
import menCamiseta5 from "../img/men/menCamiseta5.png"
import menCamiseta6 from "../img/men/menCamiseta6.png"


const About = () => {
    return (
      <> 
        
            <div className="bg-red-800 h-20">
                <h1 className="p-5 flex justify-center items-center
             font-bold text-white-200 text-xl">Homens</h1>
            </div>
            <div className="flex flex-row border-[15px] border-red-700 mt-14 bg-red-700">
                <div>
                    <img src={menMaris1.src} alt="men" title="S09-Masculino" width={600} height={400} />
                </div>
                <div className="ml-6">
                    <img src={menMaris2.src} alt="men-2" title="S09-Masculino" width={600} height={400} />
                </div>
                <div className="ml-6">
                    <img src={menMaris3.src} alt="men-3" title="S09-Masulino" width={600} height={400} />
                </div>
            </div>

            <div className="m-6">
                Moda masculina
                <div className="border bg-white w-[40%]"></div>
            </div>

            <div className="flex m-10 justify-start w-[30%] tracking-wide ">
                <div className="border w-20 h-7 mr-2 text-center rounded cursor-pointer">Tamanho</div>
                <div className="border w-20 h-7 mr-2 text-center rounded cursor-pointer ">Preço</div>
                <div className="border w-20 h-7 mr-2 text-center rounded cursor-pointer ">Cor</div>
                <div className="border w-20 h-7 mr-2 text-center rounded cursor-pointer ">Marca</div>
                <div className="border w-20 h-7 mr-2 text-center rounded cursor-pointer ">Material</div>
            </div>

            <div className="flex flex-wrap font-bold">
                <div className=" text-center ml-32">
                    <img src={menCamiseta1.src} alt="camiseta" title="camiseta masculina estampada" width={300} height={300} className="cursor-pointer" />
                    <p className="mt-3">Camiseta estampada manga curta</p>
                    <p>49,99</p>
                    <p className="text-gray-600 font-medium">1x de 49,99 sem juros no cartão Mbank</p>
                </div>
                <div className="text-center ml-20">
                    <img src={menCamiseta2.src} alt="bermuda" title="bermuda masculina" width={300} height={300}  className="cursor-pointer" />
                    <p className="mt-3">Bermuda masculina sarja cargo</p>
                    <p>109,99</p>
                    <p className="text-gray-600 font-medium">3x de 36,66 sem juros no cartão Mbank</p>
                </div>
                <div className="ml-20 text-center">
                    <img src={menCamiseta3.src} alt="bermuda" title="bermuda-masculina2" width={300} height={300} className="cursor-pointer" />
                    <div className="flex flex-row items-center justify-center mt-2">
                        <div className="w-4 h-4 rounded-full bg-green-500 mr-3 cursor-pointer"></div>
                        <div className="w-4 h-4 rounded-full bg-indigo-800 cursor-pointer"></div>
                        <div className="w-4 h-4 rounded-full bg-yellow-400 ml-3 cursor-pointer"></div>
                    </div>
                    <p className="mt-1">Bermuda masculina sarja bolso</p>
                    <p>R$ 79,99</p>
                    <p className="text-gray-600">2x de 40,00 sem juros no cartão Mbank</p>
                </div>
                <div className="ml-32 mt-3 text-center font-bold" style={{position:"relative", top: "50%"}}>
                    <img src={menCamiseta4.src} alt="camisa masculina" title="camiseta masculina" width={300} height={300} className="cursor-pointer" />
                    <p className="mt-1">Camiseta Masculina frase manga curta</p>
                    <p className="text-center">por R$34,99</p>
                    <p className="text-gray-600">1x de 34,99 no cartão Mbank</p>
                </div>
                <div className="ml-20 mt-3">
                    <img src={menCamiseta5.src} alt="camisa masculina" title="camiseta masculina estampa" width={300} height={300} className="cursor-pointer" />
                    <p className="mt-1">Camiseta masculina estampa âncora</p>
                    <p className="text-center">por R$34,99 </p>
                    <p className="text-gray-600">1x de 34,99 sem juros no cartão Mbank</p>
                </div>
                <div className="ml-20 mt-3">
                    <img src={menCamiseta6.src} alt="camiseta rosa" title="camiseta estampa" width={300} height={300} className="cursor-pointer" />
                    <p className="mt-1">Camiseta masculina estampa rosa</p>
                    <p className="text-center">por R$34,99</p>
                    <p className="text-gray-600">1x de 34,99 sem juros no cartão Mbank</p>
                </div>
            </div>

            <div className="m-3 bg-slate-700 w-4 rounded-md hover:bg-red-500">
                <Link href="/">
                    <BiHomeAlt2 />
                </Link>
            </div>

          <div className=" mt-60 bg-red-950 font-bold h-44 flex">
            <button className="w-[10%] h-10 bg-red-600 text-center ml-[25%] font-[verdana] rounded mt-16 hover:bg-red-700">
                cadastre-aqui
            </button>
            
            <div className="ml-[40%] flex">
                <BiLogoFacebookCircle className="mt-10 cursor-pointer" title="facebook"  />
                <BiLogoInstagramAlt className="mt-10 ml-2 cursor-pointer" title="instagram" />
                <BiLogoTwitter className="mt-10 ml-2 cursor-pointer" title="twitter" />
                <BiLogoYoutube className="mt-10 ml-2 cursor-pointer" title="youtube" />
                <BiLogoPinterest className="mt-10 ml-2 cursor-pointer" title="pinterest" />
            </div>
          </div>
        
      </>
    )
}
export default About