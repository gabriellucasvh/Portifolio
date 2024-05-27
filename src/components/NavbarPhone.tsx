import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLightbulb, faBrain, faHandsHoldingCircle, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const NavbarPhone: React.FC = () => {
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="fixed bottom-0 left-0 w-full backdrop-blur-md bg-cyan-950/20 shadow-sm shadow-cyan-950 border-t border-cyan-950 z-10 sm:hidden">
            <div className="flex justify-evenly p-4 space-x-10">
                <a href="#" onClick={(e) => handleScroll(e, 'sobre')} className="text-white hover:text-blue-500 " >
                <FontAwesomeIcon className='icons-shadow' icon={faUser} />
                </a>
                <a href="#" onClick={(e) => handleScroll(e, 'servicos')} className="text-white hover:text-blue-500 transition-colors duration-300">
                <FontAwesomeIcon className='icons-shadow' icon={faLightbulb} />

                </a>
                <a href="#" onClick={(e) => handleScroll(e, 'tecnologias')} className="text-white hover:text-blue-500 transition-colors duration-300">
                <FontAwesomeIcon className='icons-shadow' icon={faBrain} />
                </a>
                <a href="#" onClick={(e) => handleScroll(e, 'projetos')} className="text-white hover:text-blue-500 transition-colors duration-300">
                <FontAwesomeIcon className='icons-shadow' icon={faHandsHoldingCircle} />
                </a>
                <a href="#" onClick={(e) => handleScroll(e, 'contato')} className="text-white hover:text-blue-500 transition-colors duration-300">
                <FontAwesomeIcon className='icons-shadow' icon={faAddressCard} />
                </a>
            </div>
        </nav>
    );
}

export default NavbarPhone;