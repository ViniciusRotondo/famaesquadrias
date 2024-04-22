import janelaImg from '/janelaImg.png'
import { Button } from "flowbite-react";

const Janelas = () => {
    return(
        <>
            <div className="flex items-center justify-center flex-col shadow-2xl" style={{backgroundImage: `url(${janelaImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
                <h1 className='p-24 text-center text-white font-bold lg:text-6xl md:text-2xl sm:text-lg'>Janelas</h1>
                <Button color='gray'className='mb-24 shadow' href='https://api.whatsapp.com/send?phone=5511947235282' target='blank'>
                    Solicitar Orçamento
                </Button>
            </div>

            <div>
                Galeria de fotos
            </div>
        </>
    )
}

export default Janelas