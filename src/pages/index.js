import Menulat from "./menulat"
import Heads from "./heads"
import Head from "next/head"

export default function Home() {
  return (
     <>
     <Head>
     <title>
      Person | Home
     </title>
     <meta name="keywords" content="Roupas, Calçados, Acessórios, Moda"></meta>
     </Head>
       <div className="w-20 flex flex-1 bg-slate-600">
        <Menulat />
        <div>
          <Heads />
        </div>
      </div>
     </>
  )
}