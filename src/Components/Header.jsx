//do componente, para a pagina
import deskFoto1 from "../img/iniciopag/deskFoto1.png";
import deskFoto2 from "../img/iniciopag/deskFoto2.png";
import deskFoto3 from "../img/iniciopag/deskFoto3.png";
import tarja from "../img/iniciopag/tarja.jpg";
import fulldesk from "../img/iniciopag/fulldesk.gif";
import deskgif1 from "../img/iniciopag/deskgif1.gif";
import lookFoto from "../img/iniciopag/lookFoto.png";
import lookFoto2 from "../img/iniciopag/lookFoto2.png";
import miniPhoto from "../img/iniciopag/miniPhoto.png";
import miniPhoto2 from "../img/iniciopag/miniPhoto2.png";
import miniPhoto3 from "../img/iniciopag/miniPhoto3.png";
import miniPhoto4 from "../img/iniciopag/miniPhoto4.png";
import miniPhoto5 from "../img/iniciopag/miniPhoto5.png";
import miniPhoto6 from "../img/iniciopag/miniPhoto6.png";
import miniPhoto7 from "../img/iniciopag/miniPhoto7.png";
import tenisHome1 from "../img/iniciopag/tenisHome1.png";
import tenisHome2 from "../img/iniciopag/tenisHome2.png";
import tenisHome3 from "../img/iniciopag/tenisHome3.png";
import tenisHome4 from "../img/iniciopag/tenisHome4.png";
import imagAdidas from "../img/iniciopag/imagAdidas.png";
import imagNike from "../img/iniciopag/imagNike.png";
import imagMizuno from "../img/iniciopag/imagMizuno.png";
import imagPuma from "../img/iniciopag/imagPuma.png";
import fotoGrande from "../img/iniciopag/fotoGrande.png";
import carroCar from "../img/fotosfooter/carroCar.png";
import clockTime from "../img/fotosfooter/clockTime.png";
import cartCard from "../img/fotosfooter/cartCard.png";
import littleCard from "../img/fotosfooter/littleCard.svg";
import littleVisa from "../img/fotosfooter/littleVisa.svg";
import littleMastercard from "../img/fotosfooter/littleMastercard.svg";
import littleAmex from "../img/fotosfooter/littleAmex.svg";
import littleDinersclub from "../img/fotosfooter/littleDinersclub.svg";
import littleHipercard from "../img/fotosfooter/littleHipercard.svg";
import littleElo from "../img/fotosfooter/littleElo.svg";
import littleBoleto from "../img/fotosfooter/littleBoleto.svg";
import littlePix from "../img/fotosfooter/littlePix.svg";

const Heads = () => {
  return (
    <>
      <div className="justify-center items-center flex italic bg-slate-600">
        <h3 className="">frete grátis na sua primeira compra acima de 240$</h3>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <h1 className="font-bold p-2 flex flex-col justify-center items-center text-gray-700 text-2xl">
          Person
        </h1>
      </div>
      <div>
        <img src={tarja.src} title="banner" width={1920} height={100} />
      </div>
      <div>
        <img src={fulldesk.src} title="gif" width={1920} height={504} />
      </div>
      <div className="mt-10 m-3 flex justify-between">
        <div>
          <img src={deskFoto1.src} title="foto01" width={318} height={54} />
        </div>
        <div>
          <img src={deskFoto2.src} title="foto02" width={318} height={54} />
        </div>
        <div>
          <img src={deskFoto3.src} title="foto03" width={318} height={54} />
        </div>
      </div>
      <div className="flex justify-between m-3 mt-14">
        
        <img src={deskgif1.src} title="gif" width={320} height={320} />
        <img src={lookFoto.src} title="roupas" width={320} height={320} />
        <img src={lookFoto2.src} title="tenis" width={320} height={320} />
        
      </div>
      <div className="mt-14 text-center text-xl">
        <p className="text-black">ÚLTIMOS LANÇAMENTOS</p>
      </div>
      <div className="flex mt-14 items-center justify-center text-center text-gray-700">
        <div>
          <img src={miniPhoto.src} title="tênis" width={160} height={130} />
          <a>Tênis</a>
        </div>
        <div>
          <img
            src={miniPhoto2.src}
            title="chuteiras"
            width={160}
            height={130}
          />
          <a>Chuteiras</a>
        </div>
        <div>
          <img
            src={miniPhoto3.src}
            title="camisas de time"
            width={160}
            height={130}
          />
          <a>Camisas de time</a>
        </div>
        <div>
          <img
            src={miniPhoto4.src}
            title="Suplementos"
            width={160}
            height={130}
          />
          <a>Suplementos</a>
        </div>
        <div>
          <img
            src={miniPhoto5.src}
            title="Camisetas"
            width={160}
            height={130}
          />
          <a>Camisetas</a>
        </div>
        <div>
          <img
            src={miniPhoto6.src}
            title="Jaquetas e casacos"
            width={160}
            height={130}
          />
          <a>Jaquetas e Casacos</a>
        </div>
        <div>
          <img src={miniPhoto7.src} title="Mochilas" width={160} height={130} />
          <a>Mochilas</a>
        </div>
      </div>
      <div className="ml-5 mt-14 font-bold">
        <p>MAIS VISTOS</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-gray-700">
          <img
            src={tenisHome1.src}
            title="tenis Mizuno"
            width={250}
            height={250}
          />
          <p>Tênis Mizuno Wave Titan 2</p>
          <div className=" font-bold text-black ">
            <p className="mt-3">FRETE GRÁTIS</p>
            <p className="line-through text-xs text-gray-700">R$ 379,99</p>
            <p>R$ 208,99 no Pix</p>
            <p className="line-through text-xs text-gray-700">ou 3x de 73,33</p>
          </div>
        </div>
        <div className="text-gray-700 ml-4">
          <img
            src={tenisHome2.src}
            title="tenis adidas feminino"
            width={250}
            height={250}
          />
          <p>Tênis Adidas Breaknet Feminino</p>
          <p className="mt-3 font-bold text-black">FRETE GRÁTIS</p>
          <p className="line-through text-xs text-gray-700">R$ 299,99</p>
          <p className="font-bold text-black">R$ 208,99 no Pix</p>
        </div>
        <div className="text-gray-700 ml-4">
          <img
            src={tenisHome3.src}
            title="tenis adidas masculino"
            width={250}
            height={250}
          />
          <p>Tênis Adidas Breaknet Masculino</p>
          <p className="mt-3 font-bold text-black">FRETE GRÁTIS</p>
          <p className="line-through text-xs text-gray-700">R$ 299,99</p>
          <p className="font-bold text-black">R$ 208,99 no Pix</p>
        </div>
        <div className="text-gray-700 ml-4">
          <img
            src={tenisHome4.src}
            title="Olympikus cytrus feminino"
            width={250}
            height={250}
          />
          <p>Tênis Olympikus Cytrus Feminino</p>
          <p className="font-bold text-black mt-3">FRETE GRÁTIS</p>
          <p className="line-through text-xs">179,99</p>
          <p className="font-bold text-black">R$ 107,99 no Pix</p>
        </div>
      </div>
      <div className="">
        <p className="text-black font-bold mt-10 text-center">
          NAVEGUE PELAS MARCAS
        </p>
        <div className="flex justify-center mt-10 ">
          <div>
            <img
              src={imagAdidas.src}
              title="Adidas-logo"
              width={200}
              height={100}
            />
          </div>
          <div>
            <img
              src={imagNike.src}
              title="Nike-logo"
              width={200}
              height={100}
            />
          </div>
          <div>
            <img
              src={imagMizuno.src}
              title="Mizuno-logo"
              width={200}
              height={100}
            />
          </div>
          <div>
            <img
              src={imagPuma.src}
              title="Puma-logo"
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 m-3">
        <img
          src={fotoGrande.src}
          title="Banner horizontal"
          width={1406}
          height={420}
        />
      </div>

      <footer className=" flex flex-col mt-14 text-black">
        <section>
          <div>
            <ul className="flex justify-center">
              <li>
                <img
                  src={carroCar.src}
                  title="Frete Grátis"
                  width={100}
                  height={90}
                />
              </li>
              <li>
                <img
                  src={clockTime.src}
                  title="Entrega Expressa"
                  width={100}
                  height={60}
                />
              </li>
              <li>
                <img
                  src={cartCard.src}
                  title="Cartão Person"
                  width={100}
                  height={90}
                />
              </li>
            </ul>
          </div>
        </section>
        <section className="w-[100%] flex ml-5">
          <ul>
            <li className="text-purple-600 font-bold">Institucional</li>
            <li>Sobre a Person</li>
            <li>Politica de privacidade</li>
            <li>Trabalhe Conosco</li>
            <li>Programa de afiliados</li>
            <li>Soluções Corporativas</li>
            <li>Regulamentos</li>
            <li>Programa de Integridade</li>
            <li>Guia Person</li>
            <li>Blog</li>
            <li>Black friday Person</li>
          </ul>
          <ul className="ml-4">
            <li className="font-bold">Ajuda</li>
            <li>Trocas e Devoluções</li>
            <li>Entregas</li>
            <li>Minha Conta</li>
            <li>Meus Pedidos</li>
            <li>Pagamentos</li>
            <li>Cancelamentos</li>
            <li>P Card</li>
            <li>Segurança e Privacidade</li>
            <li>Como Comprar</li>
            <li>Acessibilidade</li>
          </ul>
          <ul className="ml-4">
            <li className="font-bold text-blue-500">Person Empresas</li>
            <li>Marketing Person</li>
          </ul>
          <ul className="ml-4 font-bold">
            <li>Central de Relacionamentos</li>
            <li className="mt-2 font-semibold text-center rounded-full border-2 cursor-pointer hover:bg-black">
              <a href="">Tire suas dúvidas</a>
            </li>
          </ul>
        </section>
        <section>
          <div>
            <ul className="flex mt-14 items-center justify-center">
              <li>
                <img
                  src={littleCard.src}
                  alt="pCard"
                  title="Cartão Person"
                  width={42}
                  height={25}
                />
              </li>
              <li>
                <img
                  src={littleVisa.src}
                  alt="visa"
                  title="Cartão Visa"
                  width={42}
                  height={25}
                />
              </li>
              <li>
                <img
                  src={littleMastercard.src}
                  alt="master"
                  title="Cartão Mastercard"
                  width={42}
                  height={25}
                />
              </li>
              <li>
                <img
                  src={littleAmex.src}
                  alt="Amex"
                  title="Cartão Amex"
                  width={42}
                  height={25}
                />
              </li>
              <li>
                <img
                  src={littleDinersclub.src}
                  alt="Dinersclub"
                  title="Cartão Dinersclub"
                  width={42}
                  height={25}
                />
              </li>
              <li>
                <img
                  src={littleHipercard.src}
                  alt="Hipercard"
                  title="Cartão Hiper"
                  width={42}
                  height={25}
                />
              </li>
              <li>
                <img
                  src={littleElo.src}
                  alt="Elo"
                  title="carão Elo"
                  width={42}
                  height={25}
                />
              </li>
              <li>
                <img
                  src={littleBoleto.src}
                  alt="Boleto"
                  title="Boleto"
                  width={42}
                  height={25}
                />
              </li>
              <li>
                <img
                  src={littlePix.src}
                  alt="Pix"
                  title="Pix"
                  width={42}
                  height={25}
                />
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
};
export default Heads;
