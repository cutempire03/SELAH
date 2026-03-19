import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <p className="text-sm font-sans text-muted-foreground uppercase tracking-[0.2em] mb-4">
              Moda com Propósito
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] mb-6">
              Pausa.
              <br />
              Respira.
              <br />
              <span className="italic">Selah.</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-md mb-8 leading-relaxed">
              Vestindo a Palavra em silêncio e verdade. Cada peça é um convite
              para desacelerar e encontrar significado no que você veste.
            </p>
            <Link
              to="/colecao"
              className="inline-block px-8 py-3.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explorar Coleção
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Camiseta Selah em algodão premium"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
