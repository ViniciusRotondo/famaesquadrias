import { Footer } from "flowbite-react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState, useCallback } from "react";

const FooterFama = () => {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDy-T4BmU97A6pH1qe2Zytqa4sQxcfWRr8"
    })

  const center = {
    lat: -23.162237692448457,
    lng: -47.05538121115186
  };

  return (
    <Footer className="bg-gray-400 border-none rounded-none p-10">
      <div className="w-full ">
        <div className="w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-2">
          <div>
          <Footer.Title title="contato"  className="text-white"/>
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">comercial@famaesquadria.com.br</Footer.Link>
                <p>(11)4496-3165</p>
                <Link href='https://api.whatsapp.com/send?phone=5511947235282' target='blank'>(11)94723-5282</Link>
                <Footer.Title title="Redes Sociais"  className="text-white"/>
                <div className="flex flex-row">
                  <Footer.Link href="#"><InstagramIcon /></Footer.Link>
                  <Footer.Link href="#"><FacebookIcon /></Footer.Link>
                </div>
              </Footer.LinkGroup>
          </div>
          <div className="w-full px-20 relative">
          {isLoaded ? (
            <GoogleMap
            mapContainerStyle={{width:'100%', height:'100%'}}
            center={center}
            zoom={17}
            ></GoogleMap>
            ) : <></>
            }
          </div>
          <div className="grid ">
            <div>
              <Footer.Title title="Endereço"  className="text-white"/>
              <p className="text-white">Av. Brasil, 1170 - Jardim Primavera - Itupeva/SP</p>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Fama Esquadrias™" year={2024}  className="text-white"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          </div>
        </div>
      </div>
    </Footer>
  );
}


export default FooterFama