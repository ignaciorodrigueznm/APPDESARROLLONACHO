import { useSyncExternalStore } from "react";

// ============================================================
// COLORES DEL TEMA OSCURO
// ============================================================

export const DARK_COLORS = {
  fondo: "#0D0D0D",
  tarjeta: "#1A1A1A",
  texto: "#FFFFFF",
  textoSecundario: "#9A9A9A",
  acento: "#CCFF00",
  acentoSecundario: "#FF003C",
  borde: "#2A2A2A",
};

// ============================================================
// COLORES DEL TEMA CLARO
// ============================================================

export const LIGHT_COLORS = {
  fondo: "#F4F4F2",
  tarjeta: "#FFFFFF",
  texto: "#111111",
  textoSecundario: "#666666",
  acento: "#72A900",
  acentoSecundario: "#D90033",
  borde: "#D9D9D9",
};

// ============================================================
// ESTADO GLOBAL DEL TEMA
// ============================================================

let modoOscuroActual = true;

const listeners = new Set();

function suscribirse(listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function obtenerModoOscuro() {
  return modoOscuroActual;
}

function cambiarModoOscuro(valor) {
  const nuevoValor =
    typeof valor === "function"
      ? valor(modoOscuroActual)
      : valor;

  if (nuevoValor === modoOscuroActual) {
    return;
  }

  modoOscuroActual = nuevoValor;

  listeners.forEach((listener) => {
    listener();
  });
}

// ============================================================
// HOOK DEL TEMA
// ============================================================

export function useTheme() {
  const modoOscuro = useSyncExternalStore(
    suscribirse,
    obtenerModoOscuro,
    obtenerModoOscuro
  );

  return {
    modoOscuro,

    setModoOscuro: cambiarModoOscuro,

    toggleModoOscuro: () => {
      cambiarModoOscuro((actual) => !actual);
    },

    colors: modoOscuro ? DARK_COLORS : LIGHT_COLORS,
  };
}

// ============================================================
// THEME PROVIDER
//
// Se mantiene para conservar una estructura compatible,
// pero el estado real del tema está fuera del Context.
// Así evitamos el error:
// "useTheme debe utilizarse dentro de ThemeProvider"
// ============================================================

export function ThemeProvider({ children }) {
  return children;
}

// ============================================================
// COMPATIBILIDAD
//
// Otros archivos antiguos que todavía importen COLORS
// seguirán funcionando en modo oscuro.
// Los archivos modificados usan useTheme() para actualizarse
// dinámicamente.
// ============================================================

export const COLORS = DARK_COLORS;