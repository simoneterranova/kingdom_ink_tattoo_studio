/**
 * LoadingScreen — The Vault of Kings · Kingdom Ink
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * CONCEPT: "Chiaroscuro & Visceral Elegance"
 * 
 * Un approccio radicalmente diverso. Nessuna geometria economica.
 * Solo luce pura, ombra profonda (sfondo nero assoluto), particelle di 
 * cenere dorata fluttuanti e un focus drammatico e cinematografico sul logo.
 * 
 * Il logo emerge dall'oscurità con un effetto di "messa a fuoco lenta", 
 * richiamando l'inchiostro fresco, il fumo, e l'illuminazione drammatica 
 * dell'arte classica e del realismo dark.
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import shopConfig from "@/config/shopConfig";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────
const LOGO = shopConfig.logo;
const SHOP_NAME = shopConfig.name;

// Utilities per i colori
const hslA = (t: string, a: number) => `hsl(${t} / ${a})`;
const C_BG = "#030303"; // Nero quasi assoluto, più profondo e drammatico dell'HSL standard
const C_PRIMARY = hslA(shopConfig.theme.colors.primary, 1); // L'Oro del logo

// Easing iper-fluidi per animazioni cinematografiche
const EASE_CINEMATIC =[0.16, 1, 0.3, 1] as const;  // Lento, pesante, monumentale
const EASE_BREATHE = [0.4, 0, 0.2, 1] as const;    // Respiro profondo

// ─── Generatore di Particelle (Cenere Dorata / Polvere di Cattedrale) ────────
const EmberParticles = () => {
  // Generiamo 30 particelle con posizioni, ritardi e velocità casuali
  const embers = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1, // 1px - 3px
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 4, // Ritardo iniziale
      duration: Math.random() * 6 + 6, // 6s - 12s per salire (molto lento)
      opacity: Math.random() * 0.5 + 0.2,
    }));
  },[]);

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          initial={{
            y: "110vh",
            x: "-50%",
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: "-10vh",
            x: `${Math.random() > 0.5 ? "" : "-"}${Math.random() * 20}px`, // Leggera deriva orizzontale
            opacity: [0, ember.opacity, ember.opacity, 0], // Appare e poi scompare salendo
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: ember.left,
            width: ember.size,
            height: ember.size,
            borderRadius: "50%",
            backgroundColor: C_PRIMARY,
            boxShadow: `0 0 ${ember.size * 3}px ${ember.size}px ${hslA(shopConfig.theme.colors.primary, 0.6)}`,
            mixBlendMode: "screen",
          }}
        />
      ))}
    </div>
  );
};

// ─── Componente: LoadingScreen (Main) ─────────────────────────────────────────
export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const[isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Coreografia dei tempi:
    // 0.0s - 4.5s : Costruzione drammatica (rivelazione logo, bagliore)
    // 4.5s - 6.0s : Contemplazione (il logo pulsa lentamente)
    // 6.0s : Inizia il fade out in ingresso al sito vero e proprio
    const t = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onLoadingComplete, 1800); // Transizione di uscita lentissima ed elegante
    }, 6000); 
    
    return () => clearTimeout(t);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(20px)",
            backgroundColor: "#000000",
            transition: { duration: 1.8, ease: EASE_CINEMATIC }
          }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            backgroundColor: C_BG,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* 1. Luce di fondo drammatica (Chiaroscuro) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 6, ease: EASE_BREATHE }}
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              width: "80vw", height: "80vw",
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, ${hslA(shopConfig.theme.colors.primary, 0.15)} 0%, transparent 60%)`,
              pointerEvents: "none",
            }}
          />

          {/* 2. Cenere fluttuante (Le anime / La Forgia) */}
          <EmberParticles />

          {/* 3. Il Logo (Il Cuore dell'Esperienza) */}
          <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center" }}>
            
            {/* Bagliore (Aura dietro il logo) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 3.5, delay: 1.5, ease: EASE_BREATHE }}
              style={{
                position: "absolute",
                width: "60%", height: "60%",
                background: C_PRIMARY,
                filter: "blur(80px)",
                opacity: 0.2,
                mixBlendMode: "overlay"
              }}
            />

            {/* Logo Reale: Emerge dall'ombra sfocato per poi diventare nitido come una lama */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(30px) brightness(0)", scale: 1.15 }}
              animate={{ opacity: 1, filter: "blur(0px) brightness(1)", scale: 1 }}
              transition={{ duration: 3.2, delay: 0.4, ease: EASE_CINEMATIC }}
              style={{ 
                width: "clamp(260px, 45vw, 480px)",
                // Un'ombra goccia sottile per staccarlo dallo sfondo in modo tridimensionale
                filter: `drop-shadow(0px 20px 40px rgba(0,0,0,0.9))` 
              }}
            >
              <img 
                src={LOGO} 
                alt={SHOP_NAME} 
                style={{ width: "100%", height: "auto", display: "block" }} 
              />
            </motion.div>
          </div>

          {/* 4. Tipografia Elegante & Sottile (Street Heritage & Fine Art) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 3.2, ease: EASE_CINEMATIC }}
            style={{
              position: "absolute",
              bottom: "12%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              zIndex: 10,
            }}
          >
            <span style={{
              color: C_PRIMARY,
              fontFamily: "Georgia, 'Times New Roman', serif", // Fallback elegante se font custom non caricato
              fontSize: "0.75rem",
              letterSpacing: "0.5em", // Molto spaziato per l'effetto luxury
              textTransform: "uppercase",
              opacity: 0.8,
              textShadow: `0px 2px 10px ${hslA(shopConfig.theme.colors.primary, 0.5)}`
            }}>
              Fine Art Tattoo Studio
            </span>
            
            {/* Linea di caricamento minimale a forma di ago (Sottilissima) */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 3, delay: 3.5, ease: "easeInOut" }}
              style={{
                width: "80px",
                height: "1px",
                background: C_PRIMARY,
                opacity: 0.5,
                transformOrigin: "center"
              }}
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}