// Import obligatorio y DEBE ir primero.
// Es requerido por React Navigation (Drawer/Gestos).
import "react-native-gesture-handler";

import AppNavigator from "./navigation/AppNavigator";
import { ThemeProvider } from "./theme";

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}