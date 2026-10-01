import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableHighlight,
} from "react-native";

import { useTheme } from "../../theme";

export default function Contactanos() {
  const { colors } = useTheme();

  const estilos = crearEstilos(colors);

  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>
        Contactanos
      </Text>

      <Text style={estilos.texto}>
        ¿Dudas sobre tu pedido o la colección?
        Escribinos por cualquiera de estos
        canales.
      </Text>

      <View style={estilos.tarjeta}>
        <Text style={estilos.etiqueta}>
          Email
        </Text>

        <Text style={estilos.valor}>
          contacto@undrgrnd.com
        </Text>
      </View>

      <View style={estilos.tarjeta}>
        <Text style={estilos.etiqueta}>
          WhatsApp
        </Text>

        <Text style={estilos.valor}>
          +54 9 351 000-0000
        </Text>
      </View>

      <View style={estilos.tarjeta}>
        <Text style={estilos.etiqueta}>
          Instagram
        </Text>

        <Text style={estilos.valor}>
          @undrgrnd.wear
        </Text>
      </View>

      <TouchableHighlight
        underlayColor={colors.borde}
        activeOpacity={0.9}
        style={estilos.boton}
        onPress={() =>
          Linking.openURL(
            "mailto:contacto@undrgrnd.com"
          )
        }
      >
        <Text style={estilos.botonTexto}>
          Enviar mensaje
        </Text>
      </TouchableHighlight>
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

      marginBottom: 10,
    },

    texto: {
      fontSize: 14,

      color: colors.textoSecundario,

      lineHeight: 20,

      marginBottom: 28,
    },

    tarjeta: {
      backgroundColor: colors.tarjeta,

      borderWidth: 1,

      borderColor: colors.borde,

      borderRadius: 4,

      padding: 16,

      marginBottom: 14,
    },

    etiqueta: {
      fontSize: 11,

      color: colors.acento,

      fontWeight: "900",

      textTransform: "uppercase",

      letterSpacing: 1,

      marginBottom: 6,
    },

    valor: {
      fontSize: 15,

      color: colors.texto,

      fontWeight: "600",
    },

    boton: {
      marginTop: 12,

      backgroundColor: colors.acento,

      paddingVertical: 16,

      borderRadius: 4,

      alignItems: "center",
    },

    botonTexto: {
      color: "#0D0D0D",

      fontSize: 15,

      fontWeight: "900",

      textTransform: "uppercase",

      letterSpacing: 1,
    },
  });
}