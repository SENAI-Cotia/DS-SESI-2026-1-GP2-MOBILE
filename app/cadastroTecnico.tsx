import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image
} from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CadastroTecnico() {
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [mostrarSenha, setMostrarSenha] = useState(true);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#5B21E6" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >

        <View style={styles.topArea}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>


        <View style={styles.card}>

          <View style={styles.header}>
            <Text style={styles.title}>Cadastro</Text>

            <Text style={styles.subtitle}>
              Informe os dados do técnico
            </Text>
          </View>


          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Ionicons name="person" size={22} color="#8B5CF6" />

              <Text style={styles.label}>Nome do técnico</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              placeholderTextColor="#C4B5FD"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <MaterialCommunityIcons
                name="tools"
                size={22}
                color="#8B5CF6"
              />

              <Text style={styles.label}>
                Especialidade do técnico
              </Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#C4B5FD"
              value={especialidade}
              onChangeText={setEspecialidade}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.passwordTitle}>Criar senha</Text>

            <View style={styles.passwordContainer}>
              <Ionicons
                name="lock-closed"
                size={18}
                color="#8B5CF6"
                style={{ marginRight: 10 }}
              />

              <TextInput
                style={styles.passwordInput}
                placeholder="Digite sua senha"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={mostrarSenha}
                value={senha}
                onChangeText={setSenha}
              />

              <TouchableOpacity
                onPress={() => setMostrarSenha(!mostrarSenha)}
              >
                <Ionicons
                  name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#8B5CF6"
                />
              </TouchableOpacity>
            </View>


            <View style={styles.rulesContainer}>
              <Text style={styles.rule}>
                • Deve ter no mínimo 8 caracteres
              </Text>

              <Text style={styles.rule}>
                • Pelo menos uma letra maiúscula
              </Text>

              <Text style={styles.rule}>
                • Pelo menos um número
              </Text>

              <Text style={styles.rule}>
                • Pelo menos um caracter especial (ex: !, @, #, &...)
              </Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.passwordTitle}>
              Confirme a senha
            </Text>

            <View style={styles.passwordContainer}>
              <Ionicons
                name="lock-closed"
                size={18}
                color="#8B5CF6"
                style={{ marginRight: 10 }}
              />

              <TextInput
                style={styles.passwordInput}
                placeholder="Confirme sua senha"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={mostrarConfirmarSenha}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />

              <TouchableOpacity
                onPress={() =>
                  setMostrarConfirmarSenha(!mostrarConfirmarSenha)
                }
              >
                <Ionicons
                  name={
                    mostrarConfirmarSenha
                      ? 'eye-off-outline'
                      : 'eye-outline'
                  }
                  size={20}
                  color="#8B5CF6"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B21E6',
  },

  scrollContainer: {
    flexGrow: 1,
  },


  topArea: {
    height: 220,
    backgroundColor: '#5B21E6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 190,
    height: 190,
  },


  card: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingHorizontal: 28,
    paddingTop: 45,
    paddingBottom: 50,
    minHeight: 700,
  },

  header: {
    alignItems: 'center',
    marginBottom: 45,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#2D2363',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 18,
    color: '#9E9E9E',
    fontWeight: '700',
  },

  inputGroup: {
    marginBottom: 24,
  },

  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },

  label: {
    fontSize: 17,
    fontWeight: '800',
    color: '#333',
  },

  input: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#8B5CF6',
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: '#F5F5F5',
    color: '#333',
    fontSize: 14,
  },

  passwordTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#333',
    marginBottom: 12,
  },

  passwordContainer: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#8B5CF6',
    borderRadius: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  passwordInput: {
    flex: 1,
    height: '100%',
    color: '#333',
    fontSize: 14,
  },

  rulesContainer: {
    marginTop: 14,
    paddingLeft: 6,
  },

  rule: {
    fontSize: 13,
    color: '#555',
    marginBottom: 5,
    lineHeight: 18,
  },

  button: {
    width: 170,
    height: 52,
    backgroundColor: '#6D3DF5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 35,

    shadowColor: '#6D3DF5',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,

    elevation: 10,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
  },
});