import React from "react";
import esquadriaImg from '/esquadriaImg.png'
import janela from '/janela.png'
import { Card } from "flowbite-react";


const Home = () => {
    return(
        <>
        <div className="bg-scroll p-16 flex gap-24 flex-wrap items-center justify-center" style={{backgroundImage: `url(${esquadriaImg})`}}>
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
            </Card>

            <Card
            className="max-w-sm bg-gray-200 shadow border-none "
            imgAlt="Janela"
            imgSrc={janela}
            >
                <h5 className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white">
                    Janelas
                </h5>
                <p className="font-normal text-gray-600 dark:text-gray-400">
                Transforme sua casa com elegância e durabilidade. Nossas janelas de alumínio oferecem qualidade incomparável e design moderno para o seu lar.
                </p>
            </Card>

            <Card
            className="max-w-sm bg-gray-200 shadow border-none "
            imgAlt="Janela"
            imgSrc={janela}
            >
                <h5 className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white">
                    Janelas
                </h5>
                <p className="font-normal text-gray-600 dark:text-gray-400">
                Transforme sua casa com elegância e durabilidade. Nossas janelas de alumínio oferecem qualidade incomparável e design moderno para o seu lar.
                </p>
            </Card>

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
            </Card>

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
            </Card>
        </div>
        <div className=" bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 shadow items-center justify-center">
            <h1 className="font-bold text-blue-950 text-6xl text-center p-10">
            QUEM SOMOS
            </h1>

            <p className="px-32 text-blue-700 font-mono text-2xl pb-20">
            Desde 2011, a Fama Esquadria de Alumínio tem sido a referência em qualidade e comprometimento no mercado de Itupeva e região. Com uma trajetória pautada pela excelência, estamos empenhados em oferecer soluções de alto padrão para atender às necessidades únicas de cada cliente. Nossa dedicação em fornecer produtos e serviços de qualidade superior nos destaca como líderes no setor, e estamos comprometidos em continuar superando as expectativas dos nossos clientes. 
            </p>
        </div>
        </>
    )
}

export default Home;