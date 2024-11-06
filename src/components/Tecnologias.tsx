import Image from "next/image";

const Tecnologias = () => {
    return (
        <div id="tecnologias" className="pt-16 md:pt-20 mx-auto container md:w-8/12">
            <h1 className="flex justify-center font-medium text-2xl md:text-4xl mb-16 md:mb-32 text-center" >
                Linguagens e Tecnologias
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
                {[
                    { src: "/tecnologias/javascript.svg", alt: "JavaScript", label: "JavaScript" },
                    { src: "/tecnologias/react.svg", alt: "React", label: "React" },
                    { src: "/tecnologias/vue.svg", alt: "Vue", label: "Vue" },
                    { src: "/tecnologias/git.svg", alt: "Git", label: "Git" },
                    { src: "/tecnologias/github-dark.svg", alt: "GitHub", label: "GitHub" },
                    { src: "/tecnologias/nodejs.svg", alt: "Node.js", label: "Node.js" },
                    { src: "/tecnologias/tailwindcss.svg", alt: "Tailwind", label: "Tailwind" },
                    { src: "/tecnologias/nextjs_icon_dark.svg", alt: "Next.js", label: "Next.js" },
                    { src: "/tecnologias/typescript.svg", alt: "TypeScript", label: "TypeScript" },
                ].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center bg-gradient-to-b from-blue-950/5 to-blue-950 w-40 md:w-48 h-40 md:h-48 p-4 rounded-lg shadow-md" >
                        <Image
                            className="h-12 md:h-16 w-auto max-w-full"
                            src={tech.src}
                            alt={tech.alt}
                            width={100}
                            height={100}
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