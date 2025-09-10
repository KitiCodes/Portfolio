import SiteHeaderMobile from "../components/SiteHeaderMobile";
import um0 from "../assets/optimized/sm/UM0.webp";
import um1 from "../assets/optimized/sm/UM1.webp";
import um2 from "../assets/optimized/sm/UM2.webp";
import um3 from "../assets/optimized/sm/UM3.webp";
import um4 from "../assets/optimized/sm/UM4.webp";
import um5 from "../assets/optimized/sm/UM5.webp";
import um6 from "../assets/optimized/sm/UM6.webp";
import um7 from "../assets/optimized/sm/UM7.webp";
import um8 from "../assets/optimized/sm/UM8.webp";

export const AboutMeMobile = (): JSX.Element => {
  return (
    <div className="w-96 h-[1581px] relative bg-stone-300 overflow-hidden">
      <img className="w-48 h-64 left-[10px] top-[83px] absolute" src={um0} alt="Portrait Sabine Hansen" />
      <div className="w-40 h-72 left-[218px] top-[79px] absolute justify-start text-black text-base font-thin font-['Antonio'] leading-normal">
        Ich bin Sabine Hansen – geboren und aufgewachsen im hohen Norden, zwischen Nord- und Ostsee. Heute lebe ich in Schwentinental, in der Nähe von Kiel.
        <br />
        <br />
        Kreativität und die Liebe zu Kunst und Literatur begleiten mich schon mein ganzes Leben.
      </div>
      <div className="w-80 h-96 left-[28px] top-[370px] absolute text-center justify-start text-black text-base font-thin font-['Antonio'] leading-normal">
        Nach vielen Jahren im sozialen Bereich habe ich 2019 meine Leidenschaft für die Acrylmalerei entdeckt. Seither bilde ich mich kontinuierlich weiter, unter anderem an Malschulen in Schleswig-Holstein und Hamburg.
        <br />
        <br />
        Mein Schwerpunkt liegt heute auf der abstrakten Acrylmalerei. Ich experimentiere gern mit verschiedenen Materialien und Techniken – immer auf der Suche nach neuen Ausdrucksformen und spannenden Oberflächen.
        <br />
        <br />
        Malen ist für mich in erster Linie Ausdruck und Verarbeitung von Emotionen, Erinnerungen, Bildern oder Ereignissen. Meine Inspiration finde ich in der Natur, in der Kunst und in meinem eigenen Innenleben.
        <br />
        <br />
        Kraftvolle, aber auch zarte Farben finden sich ebenso wie feine und grobe Strukturen wieder. Ich arbeite meist auf großen Formaten – sie geben mir die Freiheit, mit großer Geste und vollem Einsatz zu arbeiten.
      </div>
      <SiteHeaderMobile />
      <img className="w-20 h-32 left-[14px] top-[885px] absolute" src={um1} alt="Arbeit 1" />
      <img className="w-44 h-32 left-[105px] top-[885px] absolute" src={um2} alt="Arbeit 2" />
      <img className="w-20 h-32 left-[298px] top-[885px] absolute" src={um3} alt="Arbeit 3" />
      <img className="w-20 h-32 left-[14px] top-[1020px] absolute" src={um4} alt="Arbeit 4" />
      <img className="w-20 h-32 left-[109.50px] top-[1020px] absolute" src={um5} alt="Arbeit 5" />
      <img className="w-20 h-32 left-[203px] top-[1020px] absolute" src={um6} alt="Arbeit 6" />
      <img className="w-20 h-32 left-[296.50px] top-[1020px] absolute" src={um7} alt="Arbeit 7" />
      <div className="w-96 h-80 left-0 top-[1223px] absolute">
        <div className="w-96 h-80 left-0 top-0 absolute">
          <div className="left-[73px] top-0 absolute text-center justify-start"><span className="text-black text-4xl font-normal font-['Antonio'] leading-10">Sabine Hansen<br/></span><span className="text-black text-2xl font-normal font-['Antonio'] leading-7">Schwentinental, Deutschland<br/></span><span className="text-black text-2xl font-normal font-['Antonio'] underline leading-7">kontakt@sabinehansen.art</span></div>
        </div>
        <img className="w-11 h-14 left-[171.66px] top-[166px] absolute" src={um8} alt="Logo" />
      </div>
      <div className="w-96 h-5 left-0 top-[1551px] absolute">
        <div className="w-11 h-3 left-[155px] top-[2.79px] absolute justify-start text-black text-xs font-normal font-['Antonio'] leading-3">Impressum </div>
        <div className="w-12 h-3 left-[243px] top-[2.79px] absolute justify-start text-black text-xs font-normal font-['Antonio'] leading-3">Datenschutz</div>
        <img className="w-4 h-3.5 left-[72px] top-[2px] absolute" src={um8} alt="icon" />
        <div className="w-4 h-3 left-[93px] top-[2.79px] absolute justify-start text-black text-xs font-normal font-['Antonio'] leading-3">2025</div>
        <div className="w-14 h-3 left-[12px] top-[2.79px] absolute justify-start text-black text-xs font-normal font-['Antonio'] leading-3">Sabine Hansen          </div>
      </div>
    </div>
  );
};

export default AboutMeMobile;
