import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function NovoChamado() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.cabecalho}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.tituloCabecalho}>Novo chamado</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.titulo}>Qual é o seu problema?</Text>

      <Text style={styles.rotulo}>Categoria do Problema</Text>

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
    backgroundColor: '#4B00C8',
    paddingTop: 18,
    paddingBottom: 22,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 8,
  },

  tituloCabecalho: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },

  titulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#5B12D6',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 42,
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
    gap: 8,
    backgroundColor: '#FFF',
    borderWidth: 1.2,
    borderColor: '#9B6BFF',
    borderRadius: 12,
    marginHorizontal: 18,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },

  textoFoto: {
    color: '#777',
    fontSize: 14,
  },

  input: {
    height: 52,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1.2,
    borderColor: '#9B6BFF',
    marginHorizontal: 18,
    marginBottom: 34,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },

  botao: {
    height: 48,
    backgroundColor: '#4B00C8',
    borderRadius: 14,
    marginHorizontal: 55,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4B00C8',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
});