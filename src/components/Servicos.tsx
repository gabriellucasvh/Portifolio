import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faComments, faHourglassEnd, faBook, faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';

const Servicos = () => {
    return (
        <div id="servicos" className="mx-4 md:mx-10 pt-16 md:pt-32 flex flex-col items-center justify-center">
            <h1 className="flex justify-center font-medium text-2xl md:text-4xl mb-10 md:mb-20" >Serviços</h1>
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-4 lg:max-w-6xl items-center justify-center">
                    {[
                        { icon: faArrowTrendUp, title: "Competência Técnica", description: "Minha proficiência em HTML, CSS, JavaScript e frameworks como React e Vue.js garante soluções eficazes e adaptáveis para qualquer desafio de desenvolvimento Front-end." },
                        { icon: faComments, title: "Comunicação Clara", description: "Manter um diálogo aberto e constante com clientes e equipe é fundamental. Feedback contínuo assegura que todas as expectativas e requisitos sejam compreendidos e atendidos." },
                        { icon: faHourglassEnd, title: "Planejamento e Gestão", description: "Definir escopos claros e prazos realistas, aliado ao uso de metodologias ágeis, mantém o projeto no caminho certo e facilita a adaptação às mudanças." },
                        { icon: faBook, title: "Qualidade do Código", description: "Produzo um código limpo, bem documentado e modular, que é fácil de manter e escalar. Testes automatizados e depuração rigorosa garantem a estabilidade e funcionalidade." },
                        { icon: faFaceLaughBeam, title: "Design e Experiência do Usuário", description: "Crio interfaces intuitivas, acessíveis e visualmente atraentes. Otimizo para performance e responsividade, assegurando que o aplicativo funcione perfeitamente." },
                    ].map((service, index) => (
                        <div key={index} className="flex flex-col md:flex-row p-6 bg-gradient-to-r from-blue-950/50 to-blue-900 rounded-2xl text-white" >
                            <div className="w-full md:w-1/2 flex items-center mb-4 md:mb-0">
                                <FontAwesomeIcon icon={service.icon} className="text-3xl mr-4 md:mr-16 text-blue-500" />
                                <h2 className="font-semibold text-lg md:text-xl">{service.title}</h2>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center">
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Servicos;