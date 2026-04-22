import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactDialog from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";
import shopConfig from "@/config/shopConfig";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - {shopConfig.author.name} | {shopConfig.fullName} {shopConfig.city.split(",")[0]}</title>
        <meta name="description" content={`Scopri la storia di ${shopConfig.author.name}, artista tatuatore specializzato in realismo black & grey a ${shopConfig.city} dal ${shopConfig.established}. Maestria del chiaroscuro, mitologia epica, lettering custom.`} />
        <link rel="canonical" href={`${shopConfig.meta.siteUrl}/about-me`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-5xl md:text-7xl text-foreground mb-8"
            >
              Il Maestro
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 font-body text-base leading-relaxed text-foreground"
            >
              <p>
                Dal {shopConfig.established}, <strong>Simone Sorrentino</strong> trasforma la pelle in tela per opere monumentali. 
                <strong> KINGDOM INK</strong> non è solo uno studio — è un regno dove il realismo 
                fotografico incontra l'eleganza oscura, dove ogni opera diventa leggendaria.
              </p>

              <h2 className="font-heading text-3xl text-foreground mt-12 mb-4">
                Regal Realism — L'Arte del Chiaroscuro Estremo
              </h2>
              
              <p>
                Kingdom Ink è specializzato in <strong>high-contrast black & grey realism</strong> con una padronanza 
                assoluta del chiaroscuro. Utilizzando neri profondi e sfumature perfette, Simone crea un effetto 
                tridimensionale che fa letteralmente uscire i soggetti dalla pelle — ragni iperrealistici, teschi 
                architettonici, ritratti che sembrano respirare.
              </p>

              <p>
                L'estetica è <strong>volutamente monumentale</strong>: divinità greche (Poseidone, Zeus), 
                icone egizie (Anubi), creature maestose e iconografia religiosa profonda (arcangeli, cherubini, 
                la Crocifissione). Ogni tatuaggio è pensato per essere <strong>sovrano e senza tempo</strong>.
              </p>

              <p className="text-lg font-medium text-primary">
                "Kingdom Ink è l'incontro tra un museo d'arte classica e l'energia grezza della street culture. 
                Qui creiamo arte che comanda rispetto — potente, bella, formidabile."
              </p>

              <h2 className="font-heading text-3xl text-foreground mt-12 mb-4">
                Elevated Street Culture & Lettering Magistrale
              </h2>

              <p>
                A fianco del realismo classico, Kingdom Ink eccelle nel <strong>custom lettering freehand</strong> 
                con radici nella tradizione Chicano. Dai blocchi gotici aggressivi alle eleganti filigrane corsive 
                ("Resilience," "One King"), ogni scritta è disegnata a mano per essere audace, dinamica, 
                senza compromessi.
              </p>

              <p>
                <strong>Realismo Black & Grey</strong>, <strong>Ritratti Fotografici</strong>, <strong>Lettering Chicano</strong>, 
                <strong> Mitologia Epica</strong>, <strong>Surrealismo Viscerale</strong> — ogni stile è eseguito 
                con precisione tecnica estrema e una visione artistica che unisce il sacro al contemporaneo.
              </p>

              <h2 className="font-heading text-3xl text-foreground mt-12 mb-4">
                Dark Elegance & Urban Heritage — L'Identità di Kingdom Ink
              </h2>

              <p>
                I tatuaggi di Kingdom Ink hanno un'anima oscura ed elegante. Dai ritratti inquietanti 
                (clown/chola, Medusa con occhi vuoti) ai teschi astratti con accenti rossi vibranti in stile 
                trash polka, ogni opera bilancia <strong>bellezza tecnica e intensità viscerale</strong>.
              </p>

              <div className="bg-card p-8 rounded-sm mt-8 border-2 border-accent/20">
                <h3 className="font-heading text-2xl text-foreground mb-4">Il Processo Kingdom Ink</h3>
                <ul className="space-y-3">
                  <li><strong>Consulenza Creativa</strong> – Incontro per studiare la tua visione e costruire un concept che ti rappresenti veramente.</li>
                  <li><strong>Design Monumentale</strong> – Ogni opera è progettata per avere impatto visivo estremo e significato profondo.</li>
                  <li><strong>Tecnica Chiaroscuro</strong> – Padronanza dei neri profondi e delle sfumature perfette per un effetto 3D fotografico.</li>
                  <li><strong>Esecuzione Magistrale</strong> – Precisione assoluta, sterilità impeccabile, attenzione ossessiva ai dettagli.</li>
                  <li><strong>Cura Post-Opera</strong> – Supporto completo per garantire che la tua opera rimanga perfetta nel tempo.</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-accent/20">
                <h3 className="font-heading text-2xl text-foreground mb-6">Prenota la Tua Opera d'Arte a Torino</h3>
                <p className="mb-6">
                  Se cerchi tatuaggi che comandino rispetto — realismo fotografico, mitologia epica, lettering 
                  magistrale — Kingdom Ink è il tuo regno. Consulenza gratuita per discutere il tuo progetto.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ContactDialog>
                    <Button variant="hero" size="lg">
                      Prenota Consulenza
                    </Button>
                  </ContactDialog>
                  <a href={shopConfig.contact.phoneHref} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg">
                      <Phone className="mr-2 h-5 w-5" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
                <div className="mt-6 flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                  <span>{shopConfig.contact.addressLines.join(", ")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
};

export default AboutPage;
