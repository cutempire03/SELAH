import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-xl tracking-[0.1em] mb-4">SELAH</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Moda cristã com propósito. Vestindo a Palavra em silêncio e verdade.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navegação
            </p>
            <div className="flex flex-col gap-2.5">
              <Link to="/colecao" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                Coleção
              </Link>
              <Link to="/sobre" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                O Projeto
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contato
            </p>
            <div className="flex flex-col gap-2.5">
              <span className="text-sm text-foreground/70">selah.contatooficial@gmail.com</span>
              <span className="text-sm text-foreground/70">selahoficiall in Instagram/</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} SELAH. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
