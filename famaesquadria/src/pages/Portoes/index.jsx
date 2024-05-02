import janelaImg from '/janelaImg.png'
import { Button } from "flowbite-react";
import { useState } from 'react';
import GalleryImage from '../../components/GalleryImage';
import janela1 from '/janela1.png'
import Header from '../../components/Header';
import FooterFama from '../../components/FooterFama';


const Portoes = () => {
    const [images, setImages] = useState([
        {id: 1, url: "./janela1.png" , title: 'Janela'},
        {id: 2, url: './janela2.png' , title: 'Janela1'},
        {id: 3, url: './janela3.png' , title: 'Janela2'},
        {id: 4, url: './janela4.png' , title: 'Janela3'},
        {id: 5, url: './janela5.png' , title: 'Janela4'},
        {id: 6, url: './janela6.png' , title: 'Janela5'},
        {id: 7, url: './janela7.png' , title: 'Janela6'},
        {id: 8, url: './janela8.png' , title: 'Janela7'}
    ])
    return(
        <>
        <Header />
            <div className="flex items-center justify-center flex-col shadow-2xl" style={{backgroundImage: `url(${janelaImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
                <h1 className='p-24 text-center text-white font-bold lg:text-6xl md:text-2xl sm:text-lg'>Portão
            </h1>
                <Button color='gray'className='mb-24 shadow' href='https://api.whatsapp.com/send?phone=5511947235282' target='blank'>
                    Solicitar Orçamento
                </Button>
            </div>

            <div className='text-center mt-30'>
                <GalleryImage images={images}/>
            </div>
        <FooterFama />
        </>
    )
}

export default Portoes