import { useState } from "react"
import { Button } from "flowbite-react";

const GalleryImage = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    return(
        <div className="gap-20 p-10 shadow-sm grid" style={{gridTemplateColumns:"repeat(auto-fill, minmax(250px, 2fr)"}}>
            {images.map((image) => (
            <div className="relative overflow-hidden cursor-pointer rounded-lg hover:-translate-y-3 hover:shadow-md" key={image.id} onClick={() => openModal(image) }>
                <img className="transform hover:scale-110" src={image.url} alt={image.title} style={{width:'100%', height:'100%', borderRadius:'10px', transition:'transform 0.3 ease'}}></img>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 m-0 text-2xl">
                    <h3>{image.title}</h3>
                </div>
            </div>
            ))}
            {selectedImage && (
             <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center" onClick={closeModal}>
                <img className="lg:w-2/5 lg:h-4/5 min-[320px]:w-4/5 min-[320px]:h-2/5 md:w-3/5 md:h-4/5 min-[1100px]:w-2/5 min-[1100px]:h-4/5" src={selectedImage.url} alt={selectedImage.title}></img>
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-5 rounded-xl shadow-blue-500">
                    <h2 className="mt-0 text-center text-blue-950 text-2xl mb-4">{selectedImage.title}</h2>
                    <Button className="px-5 py-2" color='gray' onClick={closeModal}>Close</Button>
                </div>
            </div> 
            )}
        </div>
    )
}

export default GalleryImage