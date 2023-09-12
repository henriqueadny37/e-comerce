import { BiBall } from "react-icons/bi"
import { BiMale } from "react-icons/bi"
import { BiFemale } from "react-icons/bi"
import { BiChild } from "react-icons/bi"
import { BiGlassesAlt } from "react-icons/bi"
import { BiErrorCircle } from "react-icons/bi"
import Link from "next/link"

const NavBar = () => {
    return (
        <>
            <div className="flex flex-col">
                <ul className=" flex flex-col items-center justify-center">
                
                    <li>
                        <Link href="/product" className="flex flex-col items-center justify-center p-2">
                        <BiBall />
                            Esportes
                        </Link>
                    </li>

                    <li>
                        <Link href="/about" className="flex flex-col items-center justify-center p-2">
                            <BiMale />
                            Homens
                        </Link>
                    </li>

                    <li>
                        <Link href="/product/arms" className="flex flex-col items-center justify-center p-2">
                            <BiFemale />
                            Mulheres
                        </Link>
                    </li>

                    <li>
                        <Link href="/product/infantil" className="flex flex-col items-center justify-center p-2">
                            <BiChild />
                            Infantil
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="/product/acessorios" className="flex flex-col items-center justify-center p-2">
                        <BiGlassesAlt />
                            Acessórios
                        </Link>
                    </li>

                    <li>
                        <Link href="/product/sobre" className="flex flex-col items-center justify-center p-2">
                        <BiErrorCircle />
                            Sobre
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default NavBar











/*import Link from "next/link"
import { BiBullseye } from "react-icons/bi"
const NavBar = () => {
   return (
       <>
           <div>
               <ul>
                   <li>
                       <Link href="/product">
                       <BiBullseye />
                           produtos
                       </Link>
                   </li>
                   <li>
                       <Link href="/about">
                           Sobre nós
                       </Link>
                   </li>
               </ul>
           </div>
       </>
   )
}
export default NavBar */