import SiteHeaderMobile from "../components/SiteHeaderMobile";
import kontaktImgSm from "../assets/optimized/sm/Kontakt.webp";

export const ContactMobile = (): JSX.Element => {
  return (
    <div className="w-96 h-[546px] relative bg-stone-300 overflow-hidden">
      <SiteHeaderMobile />

      <div className="w-40 h-48 left-[11px] top-[140px] absolute text-center justify-start">
        <span className="text-black text-base font-normal font-['Antonio'] leading-normal">Bei Interesse an meinen Bildern freue ich mich über eine E-Mail:<br/><br/><br/><br/></span>
        <span className="text-black text-base font-normal font-['Antonio'] underline leading-normal">kontakt@sabinehansen.art</span>
      </div>

      <img className="w-14 h-9 left-[67px] top-[371px] absolute" src={kontaktImgSm} alt="Kontakt" />
      <img className="w-48 h-96 left-[196px] top-[77px] absolute" src={kontaktImgSm} alt="Kontakt preview" />

      <div className="w-96 h-5 left-0 top-[513px] absolute">
        <img className="w-4 h-3.5 left-[72px] top-[2px] absolute" src={kontaktImgSm} alt="logo" />
        <div className="w-11 h-3 left-[155px] top-[2.79px] absolute justify-start text-black text-xs font-normal font-['Antonio'] leading-3">Impressum </div>
        <div className="w-12 h-3 left-[243px] top-[2.79px] absolute justify-start text-black text-xs font-normal font-['Antonio'] leading-3">Datenschutz</div>
        <div className="w-4 h-3 left-[93px] top-[2.79px] absolute justify-start text-black text-xs font-normal font-['Antonio'] leading-3">2025</div>
        <div className="w-14 h-3 left-[12px] top-[2.79px] absolute justify-start text-black text-xs font-normal font-['Antonio'] leading-3">Sabine Hansen</div>
      </div>
    </div>
  );
};

export default ContactMobile;
