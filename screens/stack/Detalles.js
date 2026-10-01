import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableHighlight,
} from "react-native";

import { useTheme } from "../../theme";

export default function Detalles({
  route,
  navigation,
}) {
  const { colors } = useTheme();

  const estilos = crearEstilos(colors);

  const {
    nombre = "Producto",

    precio = "$0",

    imagen =
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",

    descripcion =
      "Sin descripción disponible.",
  } = route.params || {};

  return (
    <ScrollView
      style={estilos.pantalla}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
    >
      <Image
        source={{ uri: imagen }}
        style={estilos.imagen}
      />

      <View style={estilos.contenido}>
        <Text style={estilos.titulo}>
          {nombre}
        </Text>

        <Text style={estilos.precio}>
          {precio}
        </Text>

        <View style={estilos.divisor} />

        <Text style={estilos.subtitulo}>
          Descripción
        </Text>

        <Text style={estilos.descripcion}>
          {descripcion}
        </Text>

        <TouchableHighlight
          underlayColor={colors.acento}
          activeOpacity={0.9}
          style={estilos.botonPrimario}
          onPress={() => {}}
        >
          <Text
            style={estilos.botonPrimarioTexto}
          >
            Agregar al carrito
          </Text>
        </TouchableHighlight>

        <View style={estilos.botonVolver}>
          <Button
            title="← Volver"
            color={colors.acento}
            onPress={() =>
              navigation.goBack()
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}

function crearEstilos(colors) {
  return StyleSheet.create({
    pantalla: {
      flex: 1,

      backgroundColor: colors.fondo,
    },

    imagen: {
      width: "100%",

      height: 320,

      backgroundColor: "#000",
    },

    contenido: {
      padding: 20,
    },

    titulo: {
      fontSize: 26,

      fontWeight: "900",

      color: colors.texto,

      textTransform: "uppercase",

      letterSpacing: 1,

      marginBottom: 6,
    },

    precio: {
      fontSize: 20,

      fontWeight: "700",

      color: colors.acento,

      marginBottom: 20,
    },

    divisor: {
      height: 1,

      backgroundColor: colors.borde,

      marginBottom: 20,
    },

    subtitulo: {
      fontSize: 14,

      fontWeight: "700",

      color: colors.textoSecundario,

      textTransform: "uppercase",

      letterSpacing: 1,

      marginBottom: 8,
    },

    descripcion: {
      fontSize: 15,

      lineHeight: 22,

      color: colors.texto,

      marginBottom: 32,
    },

    botonPrimario: {
      backgroundColor: colors.acento,

      paddingVertical: 16,

      borderRadius: 4,

      alignItems: "center",

      marginBottom: 16,
    },

    botonPrimarioTexto: {
      color: "#0D0D0D",

      fontSize: 15,

      fontWeight: "900",

      textTransform: "uppercase",

      letterSpacing: 1,
    },

    botonVolver: {
      borderRadius: 4,

      overflow: "hidden",
    },
  });
}