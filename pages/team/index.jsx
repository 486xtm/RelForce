import PagesMetaHead from "../../components/PagesMetaHead";
import AppHeader from "../../components/shared/AppHeader";
import Photos from "../../components/team/Photos";
export default function Team() {
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
              Meet our team
            </span>
            <br />
            <br />
            <span className="lg:text-[25px] md:text-[20px] text-[14px] open-sans leading-[44px] text-[white]">
            The Brilliant Minds Behind Relforce
            </span>
          </div>
        </div>
      </div>
      <div className="container">
          <Photos/>
      </div>
    </div>
  );
}
