import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTab from "./MainTab";
import Preferencias from "../screens/drawer_extras/Preferencias";
import Contactanos from "../screens/drawer_extras/Contactanos";

import { useTheme } from "../theme";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  const { colors, modoOscuro } = useTheme();

  const temaNavegacion = {
    ...(modoOscuro ? DarkTheme : DefaultTheme),

    colors: {
      ...(modoOscuro ? DarkTheme.colors : DefaultTheme.colors),

      primary: colors.acento,
      background: colors.fondo,
      card: colors.tarjeta,
      text: colors.texto,
      border: colors.borde,
      notification: colors.acentoSecundario,
    },
  };

  return (
    <NavigationContainer theme={temaNavegacion}>
      <Drawer.Navigator
        initialRouteName="MainTab"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.fondo,
          },

          headerTintColor: colors.texto,

          headerTitleStyle: {
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: 1,
          },

          drawerStyle: {
            backgroundColor: colors.tarjeta,
          },

          drawerActiveTintColor: colors.acento,

          drawerInactiveTintColor: colors.textoSecundario,

          drawerLabelStyle: {
            textTransform: "uppercase",
            fontWeight: "700",
            fontSize: 13,
          },
        }}
      >
        <Drawer.Screen
          name="MainTab"
          component={MainTab}
          options={{
            title: "Inicio",
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name="Preferencias"
          component={Preferencias}
          options={{
            title: "Preferencias",
          }}
        />

        <Drawer.Screen
          name="Contactanos"
          component={Contactanos}
          options={{
            title: "Contactanos",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}