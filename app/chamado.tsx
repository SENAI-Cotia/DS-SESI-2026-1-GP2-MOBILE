import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
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

      input.onchange = (event) => {

        const arquivo = event.target.files[0];

        if (arquivo) {
          setArquivoNome(arquivo.name);
        }
      };

      input.click();
    }
  }

  return (
    <ScrollView style={styles.container}>

      <View style={styles.cabecalho}>

        <Link href={"/"} asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
        </Link>

        <Text style={styles.tituloCabecalho}>Novo chamado</Text>

      </View>

      <Text style={styles.titulo}>Qual é o seu problema?</Text>

      <Text style={styles.rotulo}>Categoria do Problema</Text>

      <View style={styles.categorias}>

        <TouchableOpacity
          style={[
            styles.cartao,
            categoriaSelecionada === 'ti' && styles.cartaoSelecionado
          ]}
          onPress={() => setCategoriaSelecionada('ti')}
        >
          <MaterialIcons
            name="computer"
            size={24}
            color={categoriaSelecionada === 'ti' ? '#fff' : '#4F46E5'}
          />

          <View>
            <Text
              style={[
                styles.cartaoTitulo,
                categoriaSelecionada === 'ti' && styles.textoSelecionado
              ]}
            >
              Informática (TI)
            </Text>

            <Text
              style={[
                styles.cartaoSub,
                categoriaSelecionada === 'ti' && styles.textoSelecionado
              ]}
            >
              Escritório
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.cartao,
            categoriaSelecionada === 'producao' && styles.cartaoSelecionado
          ]}
          onPress={() => setCategoriaSelecionada('producao')}
        >
          <MaterialIcons
            name="factory"
            size={24}
            color={categoriaSelecionada === 'producao' ? '#fff' : '#4F46E5'}
          />

          <Text
            style={[
              styles.cartaoTitulo,
              categoriaSelecionada === 'producao' && styles.textoSelecionado
            ]}
          >
            Produção
          </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.rotulo}>Título</Text>

      <TextInput
        placeholder="Adicione um título"
        placeholderTextColor="#999"
        multiline
        style={styles.areaTitulo}
      />

      <Text style={styles.rotulo}>O que aconteceu?</Text>

      <TextInput
        placeholder="Descreva brevemente o problema"
        placeholderTextColor="#999"
        multiline
        style={styles.areaTexto}
      />

      <Text style={styles.rotulo}>Anexar arquivo (Opcional)</Text>

      <TouchableOpacity
        style={styles.foto}
        onPress={anexarArquivo}
      >
        <Ionicons name="document-attach" size={20} color="#4F46E5" />

        <Text style={styles.textoFoto}>
          Selecionar arquivo do computador
        </Text>
      </TouchableOpacity>

      {arquivoNome !== '' && (
        <View style={styles.arquivoBox}>
          <Ionicons name="document-text" size={18} color="#4F46E5" />

          <Text style={styles.nomeArquivo}>
            {arquivoNome}
          </Text>
        </View>
      )}

      <Text style={styles.rotulo}>Adicione sua Localização</Text>

      <TextInput
        placeholder="Administração, Almoxerifado ou Produção"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <View style={styles.containerBtn}>
        <Link href={"/homeFuncionario"} asChild>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Enviar chamado</Text>
          </TouchableOpacity>
          </Link>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffefe'
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
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 40,
    color: '#4F46E5'
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
    borderColor: '#4F46E5',
  },

  cartaoSelecionado: {
    backgroundColor: '#4F46E5',
  },

  textoSelecionado: {
    color: '#fff',
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
    height: 160,
    backgroundColor: '#F9F4F4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4F46E5',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 12,
    textAlignVertical: 'top',
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
    marginBottom: 15,
  },

  textoFoto: {
    color: '#777'
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
    marginBottom: 40
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
  }
});