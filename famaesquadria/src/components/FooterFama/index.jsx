import { Footer } from "flowbite-react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const FooterFama = () => {
  return (
    <Footer className="bg-gray-400 border-none rounded-none p-10">
      <div className="w-full ">
        <div className="w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-2">
          <div>
          <Footer.Title title="contato"  className="text-white"/>
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">comercial@famaesquadria.com.br</Footer.Link>
                <p>4496-3165</p>
                <a href='https://api.whatsapp.com/send?phone=5511947235282' target='blank'>(11)94723-5282</a>
                <div className="flex flex-row">
                  <Footer.Link href="#"><InstagramIcon /></Footer.Link>
                  <Footer.Link href="#"><FacebookIcon /></Footer.Link>
                </div>
              </Footer.LinkGroup>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="about"  className="text-white"/>
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div >
              <Footer.Title title="Follow us" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
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