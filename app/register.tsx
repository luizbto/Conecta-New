import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); // Adicionado para feedback de carregamento

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    // Você pode adicionar mais validações de senha aqui (ex: mínimo de caracteres, letras/números)

    setLoading(true); // Inicia o estado de carregamento

    try {
      // ➡️ Aqui você adicionaria sua lógica de cadastro real com um backend
      // Exemplo com um mock de API (substitua pela sua integração real)
      // const response = await api.post("/register", { name, email, password });
      // console.log("Usuário registrado:", response.data);

      // Simulação de delay de rede
      await new Promise(resolve => setTimeout(resolve, 1500)); 

      Alert.alert("Sucesso", "Cadastro realizado com sucesso! Faça login para continuar.");
      router.push("/login"); // Redireciona para a tela de login após o cadastro
    } catch (error) {
      // Tratar erros de cadastro (ex: e-mail já em uso)
      console.error("Erro no cadastro:", error);
      Alert.alert("Erro de Cadastro", "Não foi possível realizar o cadastro. Tente novamente.");
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  const handleGoBackToLogin = () => {
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity 
        style={[styles.registerButton, loading && styles.buttonDisabled]} 
        onPress={handleRegister} 
        disabled={loading}
      >
        <Text style={styles.registerTextButton}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGoBackToLogin}>
        <Text style={styles.loginTextLink}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    paddingHorizontal: 16,
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#333",
  },
  registerButton: {
    backgroundColor: "#4E9F3D",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  registerTextButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  loginTextLink: {
    color: "#4E9F3D",
    fontSize: 16,
    marginTop: 20,
  },
  buttonDisabled: {
    opacity: 0.6, // Diminui a opacidade quando o botão está desabilitado
  },
});