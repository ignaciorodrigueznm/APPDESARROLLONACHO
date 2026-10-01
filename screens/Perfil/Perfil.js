import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import { useTheme } from "../../theme";

export default function Perfil() {
  const { colors } = useTheme();

  const estilos = crearEstilos(colors);

  const [modo, setModo] = useState("login");

  const [logueado, setLogueado] = useState(false);

  const [usuario, setUsuario] = useState(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [metodoPago, setMetodoPago] =
    useState("No configurado");

  const [numeroTarjeta, setNumeroTarjeta] =
    useState("");

  const [mostrarPago, setMostrarPago] =
    useState(false);

  function limpiarCampos() {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  function registrar() {
    if (!username.trim()) {
      Alert.alert(
        "Falta el username",
        "Ingresá un nombre de usuario."
      );

      return;
    }

    if (!email.trim()) {
      Alert.alert(
        "Falta el correo",
        "Ingresá un correo electrónico."
      );

      return;
    }

    if (!email.includes("@")) {
      Alert.alert(
        "Correo inválido",
        "Ingresá un correo válido."
      );

      return;
    }

    if (password.length < 4) {
      Alert.alert(
        "Contraseña demasiado corta",
        "Para esta prueba usá al menos 4 caracteres."
      );

      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        "Las contraseñas no coinciden",
        "Revisá ambas contraseñas."
      );

      return;
    }

    const nuevoUsuario = {
      username: username.trim(),
      email: email.trim(),
    };

    setUsuario(nuevoUsuario);
    setLogueado(true);

    limpiarCampos();
  }

  function iniciarSesion() {
    if (!username.trim()) {
      Alert.alert(
        "Falta el username",
        "Ingresá tu username."
      );

      return;
    }

    if (!password) {
      Alert.alert(
        "Falta la contraseña",
        "Ingresá tu contraseña."
      );

      return;
    }

    // Login de prueba.
    // No existe una base de datos real.
    setUsuario({
      username: username.trim(),
      email:
        email.trim() || "usuario@undrgrnd.test",
    });

    setLogueado(true);

    setPassword("");
  }

  function cerrarSesion() {
    setLogueado(false);
    setUsuario(null);
    setMetodoPago("No configurado");
    setNumeroTarjeta("");
    setMostrarPago(false);
    limpiarCampos();
  }

  function guardarMetodoPago() {
    if (numeroTarjeta.length < 4) {
      Alert.alert(
        "Tarjeta inválida",
        "Para la prueba ingresá al menos los últimos 4 números."
      );

      return;
    }

    const ultimos =
      numeroTarjeta.slice(-4);

    setMetodoPago(
      `Tarjeta terminada en •••• ${ultimos}`
    );

    setNumeroTarjeta("");
    setMostrarPago(false);

    Alert.alert(
      "Método guardado",
      "El método de pago fue guardado solamente para esta prueba."
    );
  }

  if (!logueado) {
    return (
      <KeyboardAvoidingView
        style={estilos.pantalla}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >
        <ScrollView
          contentContainerStyle={
            estilos.contenidoScroll
          }
          keyboardShouldPersistTaps="handled"
        >
          <View style={estilos.encabezado}>
            <Text style={estilos.marca}>
              UNDRGRND
            </Text>

            <Text style={estilos.titulo}>
              {modo === "login"
                ? "Iniciar sesión"
                : "Crear cuenta"}
            </Text>

            <Text style={estilos.subtitulo}>
              {modo === "login"
                ? "Entrá a tu cuenta Underground."
                : "Creá una cuenta de prueba para continuar."}
            </Text>
          </View>

          <View style={estilos.tabs}>
            <Pressable
              style={[
                estilos.tab,
                modo === "login" &&
                  estilos.tabActivo,
              ]}
              onPress={() => {
                setModo("login");
                limpiarCampos();
              }}
            >
              <Text
                style={[
                  estilos.tabTexto,
                  modo === "login" &&
                    estilos.tabTextoActivo,
                ]}
              >
                LOGIN
              </Text>
            </Pressable>

            <Pressable
              style={[
                estilos.tab,
                modo === "register" &&
                  estilos.tabActivo,
              ]}
              onPress={() => {
                setModo("register");
                limpiarCampos();
              }}
            >
              <Text
                style={[
                  estilos.tabTexto,
                  modo === "register" &&
                    estilos.tabTextoActivo,
                ]}
              >
                REGISTER
              </Text>
            </Pressable>
          </View>

          <View style={estilos.tarjeta}>
            <Text style={estilos.label}>
              Username
            </Text>

            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Tu username"
              placeholderTextColor={
                colors.textoSecundario
              }
              autoCapitalize="none"
              style={estilos.input}
            />

            {modo === "register" && (
              <>
                <Text style={estilos.label}>
                  Correo electrónico
                </Text>

                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="correo@ejemplo.com"
                  placeholderTextColor={
                    colors.textoSecundario
                  }
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={estilos.input}
                />
              </>
            )}

            {modo === "login" && (
              <>
                <Text style={estilos.label}>
                  Correo opcional
                </Text>

                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="correo@ejemplo.com"
                  placeholderTextColor={
                    colors.textoSecundario
                  }
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={estilos.input}
                />
              </>
            )}

            <Text style={estilos.label}>
              Contraseña
            </Text>

            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor={
                colors.textoSecundario
              }
              secureTextEntry
              autoCapitalize="none"
              style={estilos.input}
            />

            {modo === "register" && (
              <>
                <Text style={estilos.label}>
                  Confirmar contraseña
                </Text>

                <TextInput
                  value={confirmPassword}
                  onChangeText={
                    setConfirmPassword
                  }
                  placeholder="••••••••"
                  placeholderTextColor={
                    colors.textoSecundario
                  }
                  secureTextEntry
                  autoCapitalize="none"
                  style={estilos.input}
                />
              </>
            )}

            <Pressable
              style={({ pressed }) => [
                estilos.botonPrincipal,
                pressed &&
                  estilos.botonPresionado,
              ]}
              onPress={
                modo === "login"
                  ? iniciarSesion
                  : registrar
              }
            >
              <Text
                style={estilos.botonPrincipalTexto}
              >
                {modo === "login"
                  ? "INICIAR SESIÓN"
                  : "CREAR CUENTA"}
              </Text>
            </Pressable>
          </View>

          <Text style={estilos.nota}>
            Modo de prueba: no se envían datos a
            ningún servidor.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <ScrollView
      style={estilos.pantalla}
      contentContainerStyle={
        estilos.contenidoScroll
      }
    >
      <View style={estilos.perfilHeader}>
        <View style={estilos.avatar}>
          <Text style={estilos.avatarTexto}>
            {usuario?.username
              ?.charAt(0)
              ?.toUpperCase() || "U"}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={estilos.perfilUsername}>
            @{usuario?.username}
          </Text>

          <Text style={estilos.perfilEmail}>
            {usuario?.email}
          </Text>
        </View>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.seccionTitulo}>
          Cuenta
        </Text>

        <View style={estilos.infoBox}>
          <Text style={estilos.infoLabel}>
            Username
          </Text>

          <Text style={estilos.infoValor}>
            @{usuario?.username}
          </Text>
        </View>

        <View style={estilos.infoBox}>
          <Text style={estilos.infoLabel}>
            Email
          </Text>

          <Text style={estilos.infoValor}>
            {usuario?.email}
          </Text>
        </View>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.seccionTitulo}>
          Método de pago
        </Text>

        <View style={estilos.pagoBox}>
          <View style={{ flex: 1 }}>
            <Text style={estilos.infoLabel}>
              Método actual
            </Text>

            <Text style={estilos.infoValor}>
              {metodoPago}
            </Text>
          </View>

          <Text style={estilos.tarjetaIcono}>
            💳
          </Text>
        </View>

        {!mostrarPago ? (
          <Pressable
            style={estilos.botonSecundario}
            onPress={() =>
              setMostrarPago(true)
            }
          >
            <Text
              style={
                estilos.botonSecundarioTexto
              }
            >
              {metodoPago === "No configurado"
                ? "AGREGAR MÉTODO"
                : "CAMBIAR MÉTODO"}
            </Text>
          </Pressable>
        ) : (
          <View style={estilos.formPago}>
            <Text style={estilos.label}>
              Número de tarjeta de prueba
            </Text>

            <TextInput
              value={numeroTarjeta}
              onChangeText={setNumeroTarjeta}
              placeholder="4242 4242 4242 4242"
              placeholderTextColor={
                colors.textoSecundario
              }
              keyboardType="numeric"
              style={estilos.input}
              maxLength={19}
            />

            <Text style={estilos.notaPago}>
              No es una tarjeta real. Se guardarán
              únicamente los últimos 4 números para
              mostrar la función.
            </Text>

            <Pressable
              style={estilos.botonPrincipal}
              onPress={guardarMetodoPago}
            >
              <Text
                style={
                  estilos.botonPrincipalTexto
                }
              >
                GUARDAR MÉTODO
              </Text>
            </Pressable>

            <Pressable
              style={estilos.cancelar}
              onPress={() =>
                setMostrarPago(false)
              }
            >
              <Text style={estilos.cancelarTexto}>
                Cancelar
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      <Pressable
        style={estilos.botonCerrar}
        onPress={cerrarSesion}
      >
        <Text style={estilos.botonCerrarTexto}>
          CERRAR SESIÓN
        </Text>
      </Pressable>

      <Text style={estilos.nota}>
        Esta cuenta es solamente para probar la
        interfaz. Los datos no se almacenan
        permanentemente.
      </Text>
    </ScrollView>
  );
}

function crearEstilos(colors) {
  return StyleSheet.create({
    pantalla: {
      flex: 1,
      backgroundColor: colors.fondo,
    },

    contenidoScroll: {
      padding: 24,
      paddingBottom: 50,
    },

    encabezado: {
      marginBottom: 24,
    },

    marca: {
      color: colors.acento,
      fontSize: 13,
      fontWeight: "900",
      letterSpacing: 3,
      marginBottom: 8,
    },

    titulo: {
      fontSize: 29,
      fontWeight: "900",
      color: colors.texto,
      textTransform: "uppercase",
      letterSpacing: 1,
    },

    subtitulo: {
      color: colors.textoSecundario,
      fontSize: 14,
      lineHeight: 20,
      marginTop: 8,
    },

    tabs: {
      flexDirection: "row",
      backgroundColor: colors.tarjeta,
      borderWidth: 1,
      borderColor: colors.borde,
      borderRadius: 8,
      marginBottom: 16,
      overflow: "hidden",
    },

    tab: {
      flex: 1,
      paddingVertical: 14,
      alignItems: "center",
    },

    tabActivo: {
      backgroundColor: colors.acento,
    },

    tabTexto: {
      color: colors.textoSecundario,
      fontSize: 12,
      fontWeight: "900",
      letterSpacing: 1,
    },

    tabTextoActivo: {
      color: "#0D0D0D",
    },

    tarjeta: {
      backgroundColor: colors.tarjeta,
      borderWidth: 1,
      borderColor: colors.borde,
      borderRadius: 8,
      padding: 18,
    },

    label: {
      color: colors.textoSecundario,
      fontSize: 11,
      fontWeight: "800",
      textTransform: "uppercase",
      letterSpacing: 0.8,
      marginBottom: 7,
    },

    input: {
      height: 48,
      borderWidth: 1,
      borderColor: colors.borde,
      borderRadius: 6,
      backgroundColor: colors.fondo,
      color: colors.texto,
      paddingHorizontal: 14,
      fontSize: 14,
      marginBottom: 16,
    },

    botonPrincipal: {
      backgroundColor: colors.acento,
      minHeight: 50,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 18,
    },

    botonPresionado: {
      opacity: 0.7,
    },

    botonPrincipalTexto: {
      color: "#0D0D0D",
      fontSize: 13,
      fontWeight: "900",
      letterSpacing: 1,
    },

    nota: {
      color: colors.textoSecundario,
      fontSize: 12,
      lineHeight: 18,
      marginTop: 18,
      textAlign: "center",
    },

    perfilHeader: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.tarjeta,
      borderWidth: 1,
      borderColor: colors.borde,
      borderRadius: 8,
      padding: 18,
      marginBottom: 28,
    },

    avatar: {
      width: 58,
      height: 58,
      borderRadius: 29,
      backgroundColor: colors.acento,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 15,
    },

    avatarTexto: {
      color: "#0D0D0D",
      fontSize: 23,
      fontWeight: "900",
    },

    perfilUsername: {
      color: colors.texto,
      fontSize: 18,
      fontWeight: "900",
      marginBottom: 4,
    },

    perfilEmail: {
      color: colors.textoSecundario,
      fontSize: 13,
    },

    seccion: {
      marginBottom: 28,
    },

    seccionTitulo: {
      color: colors.texto,
      fontSize: 18,
      fontWeight: "900",
      textTransform: "uppercase",
      letterSpacing: 0.8,
      marginBottom: 12,
    },

    infoBox: {
      backgroundColor: colors.tarjeta,
      borderWidth: 1,
      borderColor: colors.borde,
      borderRadius: 7,
      padding: 15,
      marginBottom: 10,
    },

    infoLabel: {
      color: colors.textoSecundario,
      fontSize: 10,
      fontWeight: "800",
      textTransform: "uppercase",
      letterSpacing: 0.8,
      marginBottom: 5,
    },

    infoValor: {
      color: colors.texto,
      fontSize: 14,
      fontWeight: "700",
    },

    pagoBox: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.tarjeta,
      borderWidth: 1,
      borderColor: colors.borde,
      borderRadius: 7,
      padding: 15,
      marginBottom: 10,
    },

    tarjetaIcono: {
      fontSize: 27,
      marginLeft: 10,
    },

    botonSecundario: {
      borderWidth: 1,
      borderColor: colors.acento,
      borderRadius: 6,
      minHeight: 48,
      alignItems: "center",
      justifyContent: "center",
    },

    botonSecundarioTexto: {
      color: colors.acento,
      fontSize: 12,
      fontWeight: "900",
      letterSpacing: 1,
    },

    formPago: {
      backgroundColor: colors.tarjeta,
      borderWidth: 1,
      borderColor: colors.borde,
      borderRadius: 7,
      padding: 15,
    },

    notaPago: {
      color: colors.textoSecundario,
      fontSize: 11,
      lineHeight: 17,
      marginTop: -6,
      marginBottom: 15,
    },

    cancelar: {
      alignItems: "center",
      paddingVertical: 14,
    },

    cancelarTexto: {
      color: colors.textoSecundario,
      fontSize: 12,
      fontWeight: "700",
    },

    botonCerrar: {
      borderWidth: 1,
      borderColor: colors.acentoSecundario,
      borderRadius: 6,
      minHeight: 50,
      alignItems: "center",
      justifyContent: "center",
    },

    botonCerrarTexto: {
      color: colors.acentoSecundario,
      fontSize: 12,
      fontWeight: "900",
      letterSpacing: 1,
    },
  });
}