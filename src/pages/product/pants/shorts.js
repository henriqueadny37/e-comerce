import Link from "next/link"
import bola2 from "../../../img/sports/bola2.png"
import bola3 from "../../../img/sports/bola3.png"

const Shorts = () => {
    return (
        <>
        <main className="bg-white">
        <div >
            <h1 className="font-bold flex
             justify-center items-center p-2 text-blue-700">
                Outlet
            </h1>
            <div className="text-gray-700 mt-0 text-5xl">
                <p>Bola de basquete penalty</p>
                <p>playoff baby IX</p>
            </div>
           <div className="flex justify-center items-center">
                <img src={bola2.src} alt="bola-basquete" title="bola-basquete-penalty" width={300} height={300} />
            </div>
            <div className="flex justify-center items-center">
            <img src={bola3.src} alt="bola-basquete-foto3" title="foto03" width={300} height={300} />
            </div>
           <div className="bg-blue-600 w-20 h-7 ml-[80%] text-center rounded font-bold">
            Comprar
           </div>
           <button>
           <Link href="../" className="text-blue-600 font-bold">
            voltar
            </Link>
           </button>
        </div>
        </main>
        </>
    )
}
export default Shorts