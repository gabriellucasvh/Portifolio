import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Projetos = () => {
  return (
    <div id="projetos" className="container mx-auto px-4 pt-10">
      <h1
        className="flex justify-center font-medium text-4xl mb-16 mt-14"
        data-aos="fade-down"
      >
        Projetos
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="flex flex-col items-center gradiente-opacidade rounded-3xl"
          data-aos="fade-up"
        >
          <Image
            className="rounded-xl h-48 w-auto max-w-full"
            src="/projetos/prysmus.png"
            alt="Logo da Prysmus"
            width={100}
            height={100}
          />
          <div className="max-w-xs">
            <div className="max-w-xs flex justify-center items-center mt-4">
              <h2 className="text-2xl text-blue-500">Prysmus</h2>
              <Link
                href="http://prysmus.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="text-md mt-1 ml-3 animate-pulse"
                />
              </Link>
            </div>
            <p className="text-sm mt-2 indent-5 text-break whitespace-normal break-words">
              Prysmus é uma agência focada na criação de landing pages,
              otimização de SEO e marketing digital. Ajudamos empresas a obter
              maior visibilidade online através de soluções personalizadas que
              promovem o crescimento orgânico e eficaz nas plataformas digitais.
            </p>
            <div className="flex justify-center mt-1">
              <span className="opacity-50 text-sm text-center mr-2 mb-10">
                Next.js - Tailwind CSS - TypeScript
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center gradiente-opacidade rounded-3xl"
          data-aos="fade-up"
        >
          <Image
            className="rounded-xl h-48 w-auto max-w-full"
            src="/projetos/discordBot.png"
            alt="Imagem do Projeto 1"
            width={100}
            height={100}
          />
          <div className="max-w-xs">
            <div className="max-w-xs flex justify-center items-center mt-4">
              <h2 className="text-2xl text-blue-500">Discord Bot</h2>
              <Link
                href="https://github.com/gabriellucasvh/BotADM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl mt-1 ml-3 animate-pulse"
                />
              </Link>
            </div>
            <p className="text-sm mt-2 indent-5 text-break whitespace-normal break-words">
              Com recursos de moderação automatizada e detalhado controle de
              permissões, este bot simplifica a administração de servidores,
              permitindo uma gestão eficiente e organizada para os
              administradores. Ideal para manter ambientes virtuais seguros e
              organizados.
            </p>
            <div className="flex justify-center mt-1">
              <span className="opacity-50 text-sm text-center mr-2 mb-10">
                JavaScript
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center gradiente-opacidade rounded-3xl"
          data-aos="fade-up"
        >
          <Image
            className="rounded-xl h-48 w-auto max-w-full"
            src="/projetos/chatWS.png"
            alt="Imagem do Projeto 2"
            width={100}
            height={100}
          />
          <div className="max-w-xs">
            <div className="max-w-xs flex justify-center items-center">
              <h2 className="text-2xl text-blue-500 mt-4">Chat Online</h2>
              <Link
                href="https://github.com/gabriellucasvh/Chat"
                className="mt-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl mt-4 ml-3 animate-pulse"
                />
              </Link>
            </div>
            <p className="text-sm mt-2 indent-5 text-break whitespace-normal break-words">
              Chat online que utiliza a tecnologia de WebSockets para
              proporcionar uma comunicação em tempo real entre os usuários,
              permitindo que troquem mensagens instantaneamente e criem salas
              personalizadas para uma experiência de chat dinâmica.
            </p>
            <div className="flex justify-center mt-1">
              <span className="opacity-50 text-sm text-center mr-2 mt-6 mb-10">
                JavaScript - WebSocket
              </span>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center gradiente-opacidade rounded-3xl"
          data-aos="fade-up"
        >
          <Image
            className="rounded-xl h-48 w-auto max-w-full"
            src="/projetos/todoList.png"
            alt="Imagem do Projeto 3"
            width={100}
            height={100}
          />
          <div className="max-w-xs">
            <div className="max-w-xs flex justify-center items-center">
              <h2 className="text-2xl text-blue-500 mt-4">ToDo</h2>
              <Link
                href="https://github.com/gabriellucasvh/ToDo"
                className="mt-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl mt-4 ml-3 animate-pulse"
                />
              </Link>
            </div>
            <p className="text-sm mt-2 indent-5 text-break whitespace-normal break-words">
              Uma ToDoList que oferece uma solução simples e eficaz para o
              gerenciamento de tarefas. Com uma interface intuitiva e
              sincronização em tempo real, os usuários podem facilmente criar,
              editar e marcar tarefas como concluídas, mantendo a organização do
              dia a dia.
            </p>
            <div className="flex justify-center mt-1">
              <span className="opacity-50 text-sm text-center mr-2 mb-10">
                React
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
