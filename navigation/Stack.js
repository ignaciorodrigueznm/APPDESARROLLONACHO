import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerActions } from "@react-navigation/native";

import {
  Text,
  TouchableHighlight,
} from "react-native";

import Lista from "../screens/stack/Lista";
import Detalles from "../screens/stack/Detalles";

import { useTheme } from "../theme";

const StackNav = createNativeStackNavigator();

export default function ProductosStack() {
  const { colors } = useTheme();

  return (
    <StackNav.Navigator
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
      }}
    >
      <StackNav.Screen
        name="Lista"
        component={Lista}
        options={({ navigation }) => ({
          title: "Catálogo",

          headerLeft: () => (
            <TouchableHighlight
              underlayColor="transparent"
              activeOpacity={0.6}
              onPress={() =>
                navigation
                  .getParent()
                  ?.getParent()
                  ?.dispatch(
                    DrawerActions.openDrawer()
                  )
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
      />

      <StackNav.Screen
        name="Detalles"
        component={Detalles}
        options={{
          title: "Detalle",
        }}
      />
    </StackNav.Navigator>
  );
}