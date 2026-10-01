import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions } from "@react-navigation/native";
import {
  Text,
  TouchableHighlight,
} from "react-native";

import InicioScreen from "../screens/inicio/InicioScreen";
import ProductosStack from "./Stack";
import Perfil from "../screens/Perfil/Perfil";

import { useTheme } from "../theme";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor: colors.acento,

        tabBarInactiveTintColor:
          colors.textoSecundario,

        tabBarStyle: {
          backgroundColor: colors.tarjeta,

          borderTopWidth: 1,

          borderTopColor: colors.borde,

          height: 64,

          paddingBottom: 6,

          paddingTop: 6,
        },

        tabBarLabelStyle: {
          fontSize: 11,

          fontWeight: "700",

          textTransform: "uppercase",

          letterSpacing: 0.5,
        },

        headerStyle: {
          backgroundColor: colors.fondo,
        },

        headerTintColor: colors.texto,

        headerTitleStyle: {
          fontWeight: "900",

          textTransform: "uppercase",

          letterSpacing: 1,
        },

        headerLeft: () => (
          <TouchableHighlight
            underlayColor="transparent"
            activeOpacity={0.6}
            onPress={() =>
              navigation
                .getParent()
                ?.dispatch(DrawerActions.openDrawer())
            }
            style={{
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: colors.texto,
              }}
            >
              ☰
            </Text>
          </TouchableHighlight>
        ),
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>
              🏠
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Catálogo"
        component={ProductosStack}
        options={{
          headerShown: false,

          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>
              🛒
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: () => (
            <Text style={{ fontSize: 20 }}>
              👤
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}