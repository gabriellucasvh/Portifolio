import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Projetos = () => {
  return (
    <div id="projetos" className="container mx-auto px-6 pt-10">
      <h1
        className="flex justify-center font-medium text-4xl mb-16 mt-14"
        data-aos="fade-down"
      >
        Projetos
      </h1>
      <div className="flex justify-center">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          <div
            className="flex flex-col items-center bg-blue-950/40 shadow-lg rounded-lg p-6 max-w-sm"
            data-aos="fade-up"
          >
            <Image
              className="rounded-xl"
              src="/projetos/prysmusS.png"
              alt="Logo da Prysmus"
              width={400}
              height={200}
              quality={80}
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl text-blue-500">
                Prysmus
                <Link
                  href="http://prysmus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="text-md text-white mt-1 w-4 ml-3 animate-pulse"
                  />
                </Link>
              </h2>
              <p className="text-sm mt-2 indent-5 text-break whitespace-normal break-words">
                Prysmus é uma agência focada na criação de landing pages,
                otimização de SEO e marketing digital. Ajudamos empresas a
                obter maior visibilidade online através de soluções
                personalizadas que promovem o crescimento orgânico e eficaz nas
                plataformas digitais.
              </p>
              <div className="mt-1 text-sm opacity-50">
                Next.js - Tailwind CSS - TypeScript
              </div>
            </div>
          </div>

          <div
            className="flex flex-col items-center bg-blue-950/40 shadow-lg rounded-lg p-6 max-w-sm"
            data-aos="fade-up"
          >
            <Image
              className="rounded-xl"
              src="/projetos/discordBot.png"
              alt="Imagem do Projeto Discord Bot"
              width={400}
              height={200}
              quality={80}
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl text-blue-500">
                Discord Bot
                <Link
                  href="https://github.com/gabriellucasvh/BotADM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-md text-white mt-1 w-4 ml-3 animate-pulse"
                  />
                </Link>
              </h2>
              <p className="text-sm mt-2 indent-5 text-break whitespace-normal break-words">
                Com recursos de moderação automatizada e detalhado controle de
                permissões, este bot simplifica a administração de servidores,
                permitindo uma gestão eficiente e organizada para os
                administradores.
              </p>
              <div className="mt-1 text-sm opacity-50">JavaScript</div>
            </div>
          </div>

          <div
            className="flex flex-col items-center bg-blue-950/40 shadow-lg rounded-lg p-6 max-w-sm"
            data-aos="fade-up"
          >
            <Image
              className="rounded-xl"
              src="/projetos/chatWS.png"
              alt="Imagem do Projeto Chat Online"
              width={400}
              height={200}
              quality={80}
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl text-blue-500">
                Chat Online
                <Link
                  href="https://github.com/gabriellucasvh/Chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-md text-white mt-1 w-4 ml-3 animate-pulse"
                  />
                </Link>
              </h2>
              <p className="text-sm mt-2 indent-5 text-break whitespace-normal break-words">
                Chat online que utiliza a tecnologia de WebSockets para
                proporcionar uma comunicação em tempo real entre os usuários,
                permitindo troca de mensagens instantâneas e criação de salas.
              </p>
              <div className="mt-1 text-sm opacity-50">
                JavaScript - WebSocket
              </div>
            </div>
          </div>

          <div
            className="flex flex-col items-center bg-blue-950/40 shadow-lg rounded-lg p-6 max-w-sm"
            data-aos="fade-up"
          >
            <Image
              className="rounded-xl"
              src="/projetos/todoList.png"
              alt="Imagem do Projeto ToDo"
              width={400}
              height={200}
              quality={80}
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl text-blue-500">
                ToDo
                <Link
                  href="https://github.com/gabriellucasvh/ToDo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-md text-white w-4 ml-3 animate-pulse"
                  />
                </Link>
              </h2>
              <p className="text-sm mt-2 indent-5 text-break whitespace-normal break-words">
                Uma ToDoList que oferece uma solução simples e eficaz para o
                gerenciamento de tarefas, com interface intuitiva e
                sincronização em tempo real.
              </p>
              <div className="mt-1 text-sm opacity-50">React</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projetos;
