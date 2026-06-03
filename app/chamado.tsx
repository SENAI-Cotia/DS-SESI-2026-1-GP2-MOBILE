import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView
} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function NovoChamado() {

  const [arquivoNome, setArquivoNome] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  function anexarArquivo() {

    if (typeof document !== "undefined") {

      const input = document.createElement("input");

      input.type = "file";

      input.onchange = (event: any) => {

        const arquivo = event.target?.files?.[0];

        if (arquivo) {
          setArquivoNome(arquivo.name);
        }
      };

      input.click();
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>

        <View style={styles.cabecalho}>

          <Link href={"/homeFuncionario"} asChild>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={22} color="#fff" />
            </TouchableOpacity>
          </Link>

          <Text style={styles.tituloCabecalho}>Novo chamado</Text>

      <View style={styles.categorias}>
        <TouchableOpacity style={styles.cartao}>
          <MaterialIcons name="computer" size={22} color="#6D28D9" />

          <Text style={styles.cartaoTitulo}>Informática</Text>
          <Text style={styles.cartaoSub}>Escritório</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartao}>
          <MaterialIcons name="factory" size={22} color="#6D28D9" />

          <Text style={styles.cartaoTitulo}>Produção</Text>
          <Text style={styles.cartaoSub}>Fábrica</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartao}>
          <Ionicons name="document" size={22} color="#6D28D9" />

          <Text style={styles.cartaoTitulo}>Administrativo</Text>
          <Text style={styles.cartaoSub}>Salas</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.rotulo}>O que aconteceu?</Text>

      <TextInput
        placeholder="Descreva brevemente o problema"
        placeholderTextColor="#9A9A9A"
        multiline
        style={styles.areaTexto}
      />

      <Text style={styles.rotulo}>Anexar foto (Opcional)</Text>

      <TouchableOpacity style={styles.foto}>
        <Ionicons name="image" size={18} color="#7A5CFF" />

        <Text style={styles.textoFoto}>Adicionar foto</Text>
      </TouchableOpacity>

      <Text style={styles.rotulo}>Adicione sua Localização</Text>

      <TextInput
        placeholder="Administração, Almoxerifado ou Produção"
        placeholderTextColor="#9A9A9A"
        style={styles.input}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Enviar chamado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3F3',
  },

  cabecalho: {
    backgroundColor: '#4F46E5',
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  tituloCabecalho: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 90
  },

  titulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#5B12D6',
    textAlign: 'center',
    marginVertical: 40,
    color: '#4F46E5'
  },

  rotulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 16,
    marginHorizontal: 18,
  },

  categorias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginBottom: 32,
  },

  cartao: {
    width: '31%',
    height: 98,
    backgroundColor: '#FFF',
    borderWidth: 1.3,
    borderColor: '#9B6BFF',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },

  cartaoTitulo: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '700',
    color: '#6D28D9',
    textAlign: 'center',
  },

  cartaoSub: {
    marginTop: 2,
    fontSize: 11,
    color: '#777',
    textAlign: 'center',
  },

  areaTitulo: {
    height: 40,
    backgroundColor: '#F9F4F4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4F46E5',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 12,
    textAlignVertical: 'top',
  },

  areaTexto: {
    height: 150,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1.2,
    borderColor: '#9B6BFF',
    marginHorizontal: 18,
    marginBottom: 28,
    padding: 14,
    textAlignVertical: 'top',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },

  foto: {
    height: 52,
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
    marginBottom: 15,
  },

  textoFoto: {
    color: '#777',
    fontSize: 14,
  },

  arquivoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECE8FF',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    gap: 10
  },

  nomeArquivo: {
    color: '#4F46E5',
    fontSize: 14,
    flex: 1
  },

  input: {
    backgroundColor: '#F9F4F4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7A5CFF',
    marginHorizontal: 20,
    padding: 12,
    marginBottom: 30,
  },

  containerBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 90
  },

  botao: {
    backgroundColor: '#4F46E5',
    width: 180,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: '600'
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#5D3FD3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});