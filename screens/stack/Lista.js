import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight,
} from "react-native";

import { productos } from "../../data/data";
import { useTheme } from "../../theme";

export default function Lista({
  navigation,
}) {
  const { colors } = useTheme();

  const estilos = crearEstilos(colors);

  const renderizarProducto = ({
    item,
  }) => (
    <TouchableHighlight
      underlayColor={colors.borde}
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("Detalles", {
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          imagen: item.imagen,
          descripcion: item.descripcion,
        })
      }
      style={estilos.tarjeta}
    >
      <View style={estilos.contenidoTarjeta}>
        <Image
          source={{ uri: item.imagen }}
          style={estilos.imagen}
        />

        <View style={estilos.info}>
          <Text style={estilos.nombreProducto}>
            {item.nombre}
          </Text>

          <Text style={estilos.precio}>
            {item.precio}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.encabezado}>
        Catálogo
      </Text>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={renderizarProducto}
        contentContainerStyle={{
          paddingBottom: 24,
        }}
      />
    </View>
  );
}

function crearEstilos(colors) {
  return StyleSheet.create({
    pantalla: {
      flex: 1,

      backgroundColor: colors.fondo,

      padding: 16,
    },

    encabezado: {
      color: colors.texto,

      fontSize: 26,

      fontWeight: "900",

      textTransform: "uppercase",

      letterSpacing: 1,

      marginBottom: 16,
    },

    tarjeta: {
      backgroundColor: colors.tarjeta,

      borderRadius: 4,

      marginBottom: 16,

      borderWidth: 1,

      borderColor: colors.borde,

      overflow: "hidden",
    },

    contenidoTarjeta: {
      width: "100%",
    },

    imagen: {
      width: "100%",

      height: 180,

      backgroundColor: "#000",
    },

    info: {
      padding: 14,
    },

    nombreProducto: {
      fontSize: 16,

      color: colors.texto,

      fontWeight: "700",

      textTransform: "uppercase",

      letterSpacing: 0.5,

      marginBottom: 6,
    },

    precio: {
      fontSize: 15,

      color: colors.acento,

      fontWeight: "700",
    },
  });
}