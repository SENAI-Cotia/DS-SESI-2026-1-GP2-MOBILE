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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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