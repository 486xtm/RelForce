import PagesMetaHead from "../../components/PagesMetaHead";
import AppHeader from "../../components/shared/AppHeader";
import Connect from "../../components/contact/Connect";
import Info from "../../components/contact/Info";
import ClientComp from '../../components/Home/ClientsComp';
import Map from '../../public/images/map.png';
import Image from "next/image";
export default function Contact() {
  return (
    <div>
      <PagesMetaHead title="Home" />
      <div style={{
            backgroundImage: `url(/images/team_back.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover'
          }}>
        <div className="container mx-auto">
          <AppHeader />
        </div>
        <div
          className="h-[50vh] -mt-[5vh] flex flow-end flex-col justify-center items-center w-full "
        >
          <div className="text-center container">
            <span className="orbitron text-[#FE5A36] leading-[100%] font-bold text-[36px] md:text-[75px] lg:text-[100px]">
            Get in Touch
            </span>
            <br />
            <br />
            <span className="lg:text-[25px] md:text-[20px] text-[14px] open-sans leading-[44px] text-[white]">
            We&apos;re Here to Help
            </span>
          </div>
        </div>
      </div>
      <Info/>
      <Connect/>
      <ClientComp/>
      <Image className="lg:w-full lg:h-auto h-[300px]" src = {Map} />
    </div>
  );
}
