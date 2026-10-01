import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

import { useTheme } from "../../theme";

export default function InicioScreen({
  navigation,
}) {
  const { colors } = useTheme();

  const estilos = crearEstilos(colors);

  return (
    <View style={estilos.pantalla}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1000&q=80",
        }}
        style={estilos.hero}
      />

      <View style={estilos.overlay} />

      <View style={estilos.contenido}>
        <Text style={estilos.marca}>
          UNDRGRND
        </Text>

        <Text style={estilos.titulo}>
          Nueva Colección
        </Text>

        <Text style={estilos.texto}>
          Streetwear crudo, siluetas oversize y
          una estética que no pide permiso.
        </Text>

        <TouchableHighlight
          underlayColor={colors.acento}
          activeOpacity={0.9}
          style={estilos.boton}
          onPress={() =>
            navigation.navigate("Catálogo")
          }
        >
          <Text style={estilos.botonTexto}>
            Ver catálogo →
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

function crearEstilos(colors) {
  return StyleSheet.create({
    pantalla: {
      flex: 1,

      backgroundColor: colors.fondo,
    },

    hero: {
      width: "100%",

      height: "55%",
    },

    overlay: {
      position: "absolute",

      top: 0,

      left: 0,

      right: 0,

      height: "55%",

      backgroundColor:
        "rgba(13,13,13,0.35)",
    },

    contenido: {
      flex: 1,

      padding: 24,

      justifyContent: "center",
    },

    marca: {
      color: colors.acento,

      fontSize: 14,

      fontWeight: "900",

      letterSpacing: 3,

      marginBottom: 8,
    },

    titulo: {
      fontSize: 32,

      fontWeight: "900",

      color: colors.texto,

      textTransform: "uppercase",

      letterSpacing: 1,

      marginBottom: 12,
    },

    texto: {
      fontSize: 15,

      color: colors.textoSecundario,

      lineHeight: 22,

      marginBottom: 28,
    },

    boton: {
      backgroundColor: colors.acento,

      paddingVertical: 16,

      paddingHorizontal: 28,

      borderRadius: 4,

      alignSelf: "flex-start",
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