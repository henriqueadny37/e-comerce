import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import Contador from "../../Components/Contador";
import styles from "../../styles/Sport.module.css";
import bolaBas from "../../img/sports/bolaBas.png";
import ballAdidas from "../../img/sports/ballAdidas.png";
import bolaTenis1 from "../../img/sports/bolaTenis1.png";
import meiBola1 from "../../img/sports/meiBola1.png";
import bike1 from "../../img/sports/bike1.png";
import varaPesca from "../../img/sports/varaPesca.png";
import ergoMetro1 from "../../img/sports/ergoMetro1.png";
import shapeSkate1 from "../../img/sports/shapeSkate1.png";

export default function () {
    

    return (
        <>
         <Head>
            <title>Esportes</title>
        </Head>
            <div className="font-bold text-xl text-center">

            <h1 className={styles.Sport}>Esportes</h1>
            </div>
            
           <div className="flex flex-wrap font-bold text-center mt-10">
           <div className="mt-7 ml-7 hover:opacity-30 transition-opacity">
            <Link href="../product/pants/shorts">
                <img src={bolaBas.src} alt="basquete" title="bola-penalty" width={300} height={300} />
                </Link>
                <p className="mt-1">Bola de basquete penalty</p>
                <p className="mt-1">R$ 59,99</p>
            </div>
            <div className="ml-7 mt-7 hover:opacity-30 transition-opacity">
               <Link href="../product/pants/bolaAdidas">
                <img src={ballAdidas.src} alt="ball.adidas" title="bola-adidas-campo" width={300} height={300} />
                <p>Bola de futebol campo Adidas</p>
                <p>R$ 98,99</p>
               </Link>
            </div>
            <div className="mt-7 ml-8 hover:opacity-30 transition-opacity">
                <img src={bolaTenis1.src} alt="bola.tenis1" title="bola-tenis-penalty" width={300} height={300} />
                <p>Kit penalty tubo com 3 bolinhas</p>
                <p>R$ 48,99</p>
            </div>
            <div className="mt-7 ml-8 hover:opacity-30 transition-opacity">
                <img src={meiBola1.src} alt="meia-bola" title="meia-bola-bosu" width={300} height={300} />
                <p>Meia bola bosu antiestouro</p>
                <p>R$ 319,90</p>
            </div>
            <div className="mt-10 ml-7 hover:opacity-30 transition-opacity">
                <Link href="../product/pants/bikeDrop">
                <img src={bike1.src} title="bike-aro-29" width={300} height={300} />
                <p>Bicicleta Dropp Z3 aro 29</p>
                <p>R$ 899,00</p>
                </Link>
            </div>
            <div className="mt-10 ml-8 hover:opacity-30 transition-opacity">
                <img src={varaPesca.src} title="vara de pescar" width={300} height={300} />
                <p>Vara de pesca telescópia</p>
                <p>R$ 72,99</p>
            </div>
            <div className="mt-10 ml-8 hover:opacity-30 transition-opacity">
                <img src={ergoMetro1.src} title="bicicleta ergométrica" width={300} height={300} />
                <p>Bicicleta ergométrica gallant elite</p>
                <p>R$ 1.899,00</p>
            </div>
            <div className="mt-10 ml-8 hover:opacity-30 transition-opacity">
               <img src={shapeSkate1.src} title="shape-element-hatched" width={300} height={300} />
               <p>Shape element hatched 8.0</p>
               <p>R$ 360,90</p>
            </div>
           </div>
           <div className="ml-5 mt-10">
           <Link href="/" className="p-2 bg-blue-600 rounded-md font-bold">
                Voltar
            </Link>
           </div>
        </>
    )
}