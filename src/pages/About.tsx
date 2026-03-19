import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutTexture from "@/assets/about-texture.jpg";
import heroImage from "@/assets/hero-image.jpg";

const About = () => {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-sans text-muted-foreground uppercase tracking-[0.2em] mb-2">
            O Projeto
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
            Vestindo a Palavra
            <br />
            <span className="italic">em silêncio e verdade.</span>
          </h1>
        </motion.div>

        {/* Manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Manifesto Selah"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-serif text-foreground mb-6">Manifesto</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Selah é uma palavra encontrada nos Salmos. Ela significa pausa —
                um convite para refletir, respirar e absorver o que foi dito.
              </p>
              <p>
                Nós acreditamos que a fé não precisa ser barulhenta para ser
                autêntica. Que o vestuário pode ser uma extensão silenciosa
                daquilo que carregamos no coração.
              </p>
              <p>
                Cada peça Selah é desenhada com intenção: cortes limpos,
                materiais honestos, e a convicção de que menos é mais quando o
                propósito é claro.
              </p>
              <p>
                Não vendemos apenas algodão. Vendemos uma pausa no meio do
                barulho. Um lembrete costurado na pele de que existe algo maior.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24"
        >
          {[
            {
              title: "Propósito",
              text: "Cada peça carrega uma intenção. Não fazemos moda por fazer — fazemos porque acreditamos que o que vestimos pode falar sem palavras.",
            },
            {
              title: "Qualidade",
              text: "Algodão premium, costura reforçada, tingimento responsável. Peças feitas para durar, não para serem descartadas.",
            },
            {
              title: "Silêncio",
              text: "Num mundo de excesso visual, escolhemos o minimalismo como forma de reverência. O design serve à mensagem, nunca o contrário.",
            },
          ].map((value) => (
            <div key={value.title}>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden"
        >
          <img
            src={aboutTexture}
            alt="Textura premium"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-serif text-primary-foreground mb-4">
                Explore a Coleção
              </h2>
              <Link
                to="/colecao"
                className="inline-block px-8 py-3 bg-background text-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Ver Peças
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
