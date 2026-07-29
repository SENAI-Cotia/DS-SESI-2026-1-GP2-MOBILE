import { useEffect, useState } from 'react';
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
import { router } from 'expo-router';

interface chamado {

}

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
    <ScrollView style={styles.container}>

      <View style={styles.cabecalho}>
        <Link href="/homeFuncionario">
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
    onPress={() => setCategoriaSelecionada("informatica")}
    style={[
      styles.cartao,
      categoriaSelecionada === "informatica" && styles.cartaoSelecionado,
    ]}
  >
    <MaterialIcons
      name="computer"
      size={22}
      color={categoriaSelecionada === "informatica" ? "#FFF" : "#6D28D9"}
    />

    <Text
      style={[
        styles.cartaoTitulo,
        categoriaSelecionada === "informatica" &&
          styles.cartaoTituloSelecionado,
      ]}
    >
      Informática
    </Text>

    <Text
      style={[
        styles.cartaoSub,
        categoriaSelecionada === "informatica" &&
          styles.cartaoSubSelecionado,
      ]}
    >
      Escritório
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => setCategoriaSelecionada("producao")}
    style={[
      styles.cartao,
      categoriaSelecionada === "producao" && styles.cartaoSelecionado,
    ]}
  >
    <MaterialIcons
      name="factory"
      size={22}
      color={categoriaSelecionada === "producao" ? "#FFF" : "#6D28D9"}
    />

    <Text
      style={[
        styles.cartaoTitulo,
        categoriaSelecionada === "producao" &&
          styles.cartaoTituloSelecionado,
      ]}
    >
      Produção
    </Text>

    <Text
      style={[
        styles.cartaoSub,
        categoriaSelecionada === "producao" &&
          styles.cartaoSubSelecionado,
      ]}
    >
      Fábrica
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => setCategoriaSelecionada("administrativo")}
    style={[
      styles.cartao,
      categoriaSelecionada === "administrativo" &&
        styles.cartaoSelecionado,
    ]}
  >
    <Ionicons
      name="document"
      size={22}
      color={categoriaSelecionada === "administrativo" ? "#FFF" : "#6D28D9"}
    />

    <Text
      style={[
        styles.cartaoTitulo,
        categoriaSelecionada === "administrativo" &&
          styles.cartaoTituloSelecionado,
      ]}
    >
      Administrativo
    </Text>

    <Text
      style={[
        styles.cartaoSub,
        categoriaSelecionada === "administrativo" &&
          styles.cartaoSubSelecionado,
      ]}
    >
      Salas
    </Text>
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
    fontSize: 18,
    fontWeight: '700',
    color: '#5B12D6',
    textAlign: 'center',
    marginVertical: 40,
    color: '#4410B4'
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

  cartaoSelecionado: {
  width: '31%',
  height: 98,
  backgroundColor: '#6D28D9',
  borderWidth: 1.3,
  borderColor: '#6D28D9',
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

cartaoTituloSelecionado: {
  color: '#FFF',
},

cartaoSubSelecionado: {
  color: '#FFF',
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