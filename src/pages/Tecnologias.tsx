const Tecnologias = () => {
    return (
        <div id="tecnologias" className="pt-16 md:pt-20 mx-auto container">
            <h1 className="flex justify-center font-medium text-2xl md:text-4xl mb-16 md:mb-32 text-center" data-aos="fade-down">
                Linguagens e Tecnologias
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {[
                    { src: "/tecnologias/javascript.png", alt: "JavaScript", label: "JavaScript" },
                    { src: "/tecnologias/react.png", alt: "React", label: "React" },
                    { src: "/tecnologias/vue.png", alt: "Vue", label: "Vue" },
                    { src: "/tecnologias/git.png", alt: "Git", label: "Git" },
                    { src: "/tecnologias/GitHub_.png", alt: "GitHub", label: "GitHub" },
                    { src: "/tecnologias/node.png", alt: "Node.js", label: "Node.js" },
                    { src: "/tecnologias/tailwind.png", alt: "Tailwind", label: "Tailwind" },
                    { src: "/tecnologias/nextjs_icon_dark.svg", alt: "Next.js", label: "Next.js" },
                    { src: "/tecnologias/typescript.svg", alt: "TypeScript", label: "TypeScript" },
                ].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center gradiente-opacidade w-40 md:w-48 h-40 md:h-48 p-4 rounded-lg shadow-md" data-aos="fade-up">
                        <img
                            className="rounded-xl h-12 md:h-16 w-auto max-w-full"
                            src={tech.src}
                            alt={tech.alt}
                        />
                        <div className="flex items-center mt-4 font-medium">
                            <h2 className="text-lg md:text-xl text-blue-500">{tech.label}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tecnologias;
