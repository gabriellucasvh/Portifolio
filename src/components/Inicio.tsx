import Image from "next/image";

const Inicio = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center pb-5 -mt-24 md:-mt-14" id="sobre">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full p-4">
        <section className="p-2 text-justify">
          <h1 className="font-bold text-3xl md:text-5xl flex justify-center mb-4 text-blue-500 mt-32">
            Gabriel Gonçalves
          </h1>
          <h2 className="font-bold text-xl sm:text-3xl md:text-3xl flex justify-center mb-10">
            &lt; Front-end Developer &gt;
          </h2>
          <p className="indent-5 text-break">
            Comecei minha jornada na programação em 2020, quando vi os famosos bots do Discord e me perguntei: 
            {/* Mudança: As aspas foram escapadas */}
            &quot;Como é possível isso atender às minhas necessidades?&quot;. 
            Decidi criar meu próprio bot e conheci o <b>JavaScript</b>. Desde então, tenho me dedicado arduamente ao aprendizado e à prática, buscando sempre aperfeiçoar minhas habilidades e expandir meu conhecimento no vasto universo da programação.
          </p>
          <p className="indent-5 py-5 text-break">
            Estudar <i>Análise e Desenvolvimento de Sistemas</i> foi um desafio constante, mas me proporcionou aprendizados valiosos em tecnologia e colaboração. Estou ansioso para explorar as oportunidades que surgirão após a graduação.
          </p>
          <p className="indent-5 text-break">
            Atualmente, meu foco está em desenvolvimento <b>Front-end</b>, estou imerso em diversas linguagens e frameworks. Essas tecnologias fascinantes têm me proporcionado experiências enriquecedoras e desafiadoras, à medida que mergulho em projetos cada vez mais complexos e inovadores.
          </p>
        </section>

        <section className="flex items-center justify-center md:mt-52">
          <Image
            className="rounded-xl h-60 md:h-96 w-auto max-w-96"
            src="/person.png"
            alt="Foto"
            width={500}
            height={500}
          />
        </section>
      </div>
    </div>
  );
}

export default Inicio;
