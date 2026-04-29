import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function LoginScreen() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [lembreMe, setLembreMe] = useState(false); 
  const router = useRouter()

  {/*Dá um limite de caracteres, e permite apenas número nesse campo*/}
  const handleCpfChange = (text: string) => {
    const apenasNumeros = text.replace(/[^0-9]/, '');
    if (apenasNumeros.length <= 11) {
      setCpf(apenasNumeros);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7B61FF" />
      
      <View style={styles.header}>
        <Image 
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/*Sobe os componentes da tela quando a pessoa vai digitar algo (no celular)*/}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.card}> 

        <Text style={styles.title}>Bem vindo, vamos começar!</Text>
        <Text style={styles.subtitle}>Faça login na sua conta!</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>CPF</Text>
          <TextInput 
            style={styles.input}
            placeholder="00000000000"
            placeholderTextColor="#999"
            keyboardType="numeric"
            maxLength={11}
            value={cpf}
            onChangeText={handleCpfChange}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <div style={{ width: '100%' }}>
            <View style={styles.passwordContainer}>
                <TextInput
                style={styles.inputPassword}
                placeholder="Insira sua senha"
                placeholderTextColor="#999"
                secureTextEntry={secureText}
                value={senha}
                onChangeText={setSenha}
                underlineColorAndroid="transparent"
                />
                <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                <Ionicons 
                    name={secureText ? "eye-off-outline" : "eye-outline"} 
                    size={22} 
                    color="#999" 
                />
                </TouchableOpacity>
            </View>
          </div>
        </View>

        <View style={styles.rowLinks}>
          <TouchableOpacity 
            style={styles.rememberMe} 
            onPress={() => setLembreMe(!lembreMe)}>

            <Ionicons 
              name={lembreMe ? "checkmark-circle" : "ellipse-outline"} 
              size={20} 
              color={lembreMe ? "#5D3FD3" : "#999"} 
            />
            <Text style={[styles.linkTextSmall, { marginLeft: 5 }]}>
              Lembre de mim
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.linkTextpassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom, #2E1A78, #4F46E5, #3354A4)'
  },

  header: {
    height: '25%', 
    justifyContent: 'center',
    alignItems: 'center',

  },

  logo: {
    width: 220,
    height: 220,
  },

  card: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 50,
    alignItems: 'center',
    marginTop: -15,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    color: '#7463F6',
    fontWeight: '600',
    marginBottom: 40,
  },

  inputGroup: {
    width: '100%',
    marginBottom: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#7463F6',
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9F9',
    color: '#333',
   
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#7463F6',
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9F9',
  },

  inputPassword: {
    flex: 1,
    height: '100%',
    color: '#333',
  
  },

  rowLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },

  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  linkTextSmall: {
    fontSize: 13,
    color: '#666',
  },

  linkTextpassword: {
    fontSize: 13,
    color: '#7463F6',
  },

  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#7463F6',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: 50
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
