import {
  View,
  Text,
  StyleSheet,
  Switch,
} from "react-native";

import { useTheme } from "../../theme";

export default function Preferencias() {
  const {
    colors,
    modoOscuro,
    setModoOscuro,
  } = useTheme();

  const estilos = crearEstilos(colors);

  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>
        Preferencias
      </Text>

      <View style={estilos.fila}>
        <View
          style={{
            flex: 1,
            paddingRight: 12,
          }}
        >
          <Text style={estilos.filaTexto}>
            Modo oscuro
          </Text>

          <Text style={estilos.filaSubtexto}>
            {modoOscuro
              ? "Activado"
              : "Desactivado"}
          </Text>
        </View>

        <Switch
          trackColor={{
            false: colors.borde,
            true: colors.acento,
          }}
          thumbColor={
            modoOscuro
              ? colors.texto
              : "#FFFFFF"
          }
          value={modoOscuro}
          onValueChange={setModoOscuro}
        />
      </View>

      <Text style={estilos.nota}>
        El tema se aplica a toda la aplicación y
        podés cambiarlo cuando quieras.
      </Text>
    </View>
  );
}

function crearEstilos(colors) {
  return StyleSheet.create({
    pantalla: {
      flex: 1,

      backgroundColor: colors.fondo,

      padding: 24,
    },

    titulo: {
      fontSize: 28,

      fontWeight: "900",

      color: colors.texto,

      textTransform: "uppercase",

      letterSpacing: 1,

      marginBottom: 24,
    },

    fila: {
      flexDirection: "row",

      justifyContent: "space-between",

      alignItems: "center",

      backgroundColor: colors.tarjeta,

      borderWidth: 1,

      borderColor: colors.borde,

      borderRadius: 8,

      padding: 16,

      marginBottom: 16,
    },

    filaTexto: {
      fontSize: 15,

      color: colors.texto,

      fontWeight: "700",

      textTransform: "uppercase",
    },

    filaSubtexto: {
      fontSize: 12,

      color: colors.textoSecundario,

      marginTop: 4,
    },

    nota: {
      fontSize: 12,

      color: colors.textoSecundario,

      lineHeight: 18,
    },
  });
}