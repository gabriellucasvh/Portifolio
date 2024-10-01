import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Contato = () => {
  return (
    <div
      id="contato"
      className="relative w-full min-h-screen flex items-center justify-center p-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        <section className="p-5 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl flex justify-center md:justify-start mb-4 text-blue-500">
            Entrar em contato:
          </h1>
          <h2 className="font-extralight text-xl md:text-3xl flex justify-center md:justify-start mb-10">
            Vamos trabalhar juntos?
          </h2>

          <Link href="mailto:gabriellucasvh@gmail.com">
            <div className="flex justify-center md:justify-start items-center p-2 pl-4 mb-5 rounded-xl border border-blue-500 max-w-xs md:max-w-sm hover:bg-blue-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4" size="2x" />
              <button className="px-3 py-2">Email</button>
            </div>
          </Link>

          <Link href="https://api.whatsapp.com/send?phone=5599991401418" target="_blank">
            <div className="flex justify-center md:justify-start items-center p-2 pl-4 mb-5 rounded-xl border border-blue-500 max-w-xs md:max-w-sm hover:bg-green-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-4" size="2x" />
              <button className="px-3 py-2">WhatsApp</button>
            </div>
          </Link>

          <Link href="/cv/cv.pdf" download="cvGabrielGoncalves.pdf">
            <div className="flex justify-center md:justify-start items-center p-2 pl-4 mb-5 rounded-xl bg-blue-700 max-w-xs md:max-w-sm hover:bg-blue-600 transition btn-bloom">
              <FontAwesomeIcon icon={faDownload} className="mr-4" size="2x" />
              <button className="px-3 py-2 text-white">Download CV</button>
            </div>
          </Link>

          <div className="flex justify-center md:justify-start items-center p-2 pl-4 mb-5 gap-10">
            <Link href="https://github.com/gabriellucasvh" target="_blank">
              <FontAwesomeIcon className="w-7 h-7 hover:opacity-75" icon={faGithub} />
            </Link>
            <Link href="https://linkedin.com/in/gabriellucasvh/" target="_blank">
              <FontAwesomeIcon className="w-7 h-7 hover:opacity-75" icon={faLinkedin} />
            </Link>
          </div>
        </section>

        <section className="flex items-center justify-center">
          {/* <img
            data-aos="fade-up"
            className="rounded-3xl h-48 md:h-96 w-auto max-w-full bg-blue-950/50"
            src="public/Gb.png"
            alt="Foto"
          /> */}
        </section>
      </div>
    </div>
  );
};

export default Contato;
