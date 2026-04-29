<<<<<<< HEAD
import React, { useState } from 'react';

import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [lembreMe, setLembreMe] = useState(false); 

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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
=======
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function NovoChamado() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.cabecalho}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
        <Text style={styles.tituloCabecalho}>Novo chamado</Text>
      </View>

      <Text style={styles.titulo}>Qual é o seu problema?</Text>

      <Text style={styles.rotulo}>Categoria do Problema</Text>

      <View style={styles.categorias}>
        <TouchableOpacity style={styles.cartao}>
          <MaterialIcons name="computer" size={24} color="#4410B4" />
          <View>
            <Text style={styles.cartaoTitulo}>Informática (TI)</Text>
            <Text style={styles.cartaoSub}>Escritório</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartao}>
          <MaterialIcons name="factory" size={24} color="#4410B4" />
          <Text style={styles.cartaoTitulo}>Produção</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.rotulo}>O que aconteceu?</Text>

      <TextInput
        placeholder="Descreva brevemente o problema"
        placeholderTextColor="#999"
        multiline
        style={styles.areaTexto}
      />

      <Text style={styles.rotulo}>Anexar foto (Opcional)</Text>

      <TouchableOpacity style={styles.foto}>
        <Ionicons name="image" size={20} color="#7A5CFF" />
        <Text style={styles.textoFoto}>Adicionar foto</Text>
      </TouchableOpacity>

      <Text style={styles.rotulo}>Adicione sua Localização</Text>

      <TextInput
        placeholder="Administração, Almoxerifado ou Produção"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Enviar chamado</Text>
      </TouchableOpacity>

    </ScrollView>
>>>>>>> 6e45405 (pagina criar chamado)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
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
=======
    backgroundColor: '#fffefe'
  },

  cabecalho: {
    backgroundColor: '#4410B4',
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },

  tituloCabecalho: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 100
  },

  titulo: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 40,
    color: '#4410B4'
  },

  rotulo: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 20,
    marginBottom: 15,
    color: '#333'
  },

  categorias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20
  },

  cartao: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    marginRight: 10,
    backgroundColor: '#F9F4F4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7A5CFF',
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },

  cartaoTitulo: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4410B4'
  },

  cartaoSub: {
    fontSize: 13,
    color: '#777'
  },

  areaTexto: {
    height: 160,
    backgroundColor: '#F9F4F4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7A5CFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 12,
    textAlignVertical: 'top',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },

  foto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7A5CFF',
    backgroundColor: '#F9F4F4',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },

  textoFoto: {
    color: '#777'
  },

  input: {
    backgroundColor: '#F9F4F4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7A5CFF',
    marginHorizontal: 20,
    padding: 12,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },

  botao: {
    backgroundColor: '#4410B4',
    marginHorizontal: 60,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: '600'
  }
});
>>>>>>> 6e45405 (pagina criar chamado)
