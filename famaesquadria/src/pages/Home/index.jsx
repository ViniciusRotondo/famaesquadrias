import { React, useEffect } from "react";
import esquadriaImg from '/esquadriaImg.png'
import janela from '/janela.png'
import { Card, Button } from "flowbite-react";
import { Footer } from "flowbite-react";
import Header from "../../components/Header";
import FooterFama from "../../components/FooterFama";
import { Link, NavLink } from "react-router-dom";


const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Header />
        <div className="p-16 flex gap-24 flex-wrap items-center justify-center" style={{backgroundImage: `url(${esquadriaImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
            <Card
            className="max-w-sm bg-gray-200 shadow border-none"
            imgAlt="Janela"
            imgSrc={janela}
            >
                <h5 className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white">
                    Janelas
                </h5>
                <p className="font-normal text-gray-600 dark:text-gray-400">
                Transforme sua casa com elegância e durabilidade. Nossas janelas de alumínio oferecem qualidade incomparável e design moderno para o seu lar.
                </p>
                    <NavLink to='/famaesquadrias/janelas' beha className="bg-blue-600 text-white text-center font-anton font-semibold p-2 rounded-lg text-lg hover:bg-blue-800 transition duration-500 ease-in-out ">
                            Ver mais
                    </NavLink>
            </Card>

            <Card
            className="max-w-sm bg-gray-200 shadow border-none "
            imgAlt="Janela"
            imgSrc={janela}
            >
                <h5 className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white">
                    Portas
                </h5>
                <p className="font-normal text-gray-600 dark:text-gray-400">
                Transforme sua casa com elegância e durabilidade. Nossas janelas de alumínio oferecem qualidade incomparável e design moderno para o seu lar.
                </p>
                <Link to='/famaesquadrias/portas' className="bg-blue-600 text-white text-center font-anton font-semibold p-2 rounded-lg text-lg hover:bg-blue-800 transition duration-500 ease-in-out ">
                        Ver mais
                </Link>
            </Card>

            <Card
            className="max-w-sm bg-gray-200 shadow border-none "
            imgAlt="Janela"
            imgSrc={janela}
            >
                <h5 className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white">
                    Guarda-Corpos
                </h5>
                <p className="font-normal text-gray-600 dark:text-gray-400">
                Transforme sua casa com elegância e durabilidade. Nossas janelas de alumínio oferecem qualidade incomparável e design moderno para o seu lar.
                </p>
                <Link to="/famaesquadrias/guarda-corpos" className="bg-blue-600 text-white text-center font-anton font-semibold p-2 rounded-lg text-lg hover:bg-blue-800 transition duration-500 ease-in-out ">
                        Ver mais
                </Link>
            </Card>

            <Card
            className="max-w-sm bg-gray-200 shadow border-none"
            imgAlt="Janela"
            imgSrc={janela}
            >
                <h5 className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white">
                    Portões
                </h5>
                <p className="font-normal text-gray-600 dark:text-gray-400">
                Transforme sua casa com elegância e durabilidade. Nossas janelas de alumínio oferecem qualidade incomparável e design moderno para o seu lar.
                </p>
                <Link to="/famaesquadrias/portoes" className="bg-blue-600 text-white text-center font-anton font-semibold p-2 rounded-lg text-lg hover:bg-blue-800 transition duration-500 ease-in-out ">
                        Ver mais
                </Link>
            </Card>

            <Card
            className="max-w-sm bg-gray-200 shadow border-none"
            imgAlt="Janela"
            imgSrc={janela}
            >
                <h5 className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white">
                    Espelhos
                </h5>
                <p className="font-normal text-gray-600 dark:text-gray-400">
                Transforme sua casa com elegância e durabilidade. Nossas janelas de alumínio oferecem qualidade incomparável e design moderno para o seu lar.
                </p>
                <Link to="/famaesquadrias/espelhos" className="bg-blue-600 text-white text-center font-anton font-semibold p-2 rounded-lg text-lg hover:bg-blue-800 transition duration-500 ease-in-out ">
                        Ver mais
                </Link>
            </Card>
        </div>
        <div className=" bg-gradient-to-r from-blue-100 via-gray-300 to-blue-100 shadow items-center justify-center sm:pl-4 sm:text-center min-[320px]:p-4">
            <div className="ref-quem-somos"></div>
            <h1 className="font-bold text-blue-950 lg:text-6xl md:text-2xl sm:text-xl text-center p-8">
            QUEM SOMOS
            </h1>
            <Footer.Divider color="black" className="shadow-lg"/>
            <p className="lg:px-32 md:px-18 sm:px-32 text-blue-900 font-mono lg:text-2xl sm:text-sm md:text-md pb-20">
            Desde 2011, a Fama Esquadria de Alumínio tem sido a referência em qualidade e comprometimento no mercado de Itupeva e região. Com uma trajetória pautada pela excelência, estamos empenhados em oferecer soluções de alto padrão para atender às necessidades únicas de cada cliente. Nossa dedicação em fornecer produtos e serviços de qualidade superior nos destaca como líderes no setor, e estamos comprometidos em continuar superando as expectativas dos nossos clientes. 
            </p>
        </div>
        <FooterFama />
        </>
    )
}

export default Home;