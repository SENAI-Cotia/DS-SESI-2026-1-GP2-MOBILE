import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HistoricoChamados() {

  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [busca, setBusca] = useState('');

  const chamados = [
    {
      id: 1,
      titulo: 'Computador Travando',
      data: '12 de abril, 12:30hr',
      status: 'aberto',
      statusLabel: 'Em aberto',
      local: 'Sala 5',
      setor: 'Administração',
      funcionario: 'João',
      descricao: 'O computador está travando e muito lento ao abrir qualquer tipo de programa.',
      imagem: require('../assets/images/monitorquebrado.webp'),
      cor: '#53bd0c'
    },
    {
      id: 2,
      titulo: 'Máquina com defeito',
      data: '09 de abril, 08:23hr',
      status: 'resolvido',
      statusLabel: 'Resolvido',
      local: 'Oficina 12',
      setor: 'Produção',
      funcionario: 'Gustavo',
      descricao: 'A máquina não está ligando, e suas engrenagens não rodam.',
      imagem: require('../assets/images/maquinaquebrada.jpg'),
      cor: '#7B61FF'
    },
    {
      id: 3,
      titulo: 'Sistema travado',
      data: '08 de abril, 10:00hr',
      status: 'cancelado',
      statusLabel: 'Cancelado',
      local: 'Sala 2',
      setor: 'TI',
      funcionario: 'Maria',
      descricao: 'Chamado cancelado pelo usuário.',
      imagem: require('../assets/images/sistematravado.png'),
      cor: '#FF5A5A'
    }
  ];

  const chamadosFiltrados = chamados.filter(item => {

    const filtroStatus =
      filtroAtivo === 'todos' || item.status === filtroAtivo;

    const filtroBusca =
      item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      item.descricao.toLowerCase().includes(busca.toLowerCase()) ||
      item.funcionario.toLowerCase().includes(busca.toLowerCase()) ||
      item.setor.toLowerCase().includes(busca.toLowerCase());

    return filtroStatus && filtroBusca;
  });

  return (
    <View style={estilos.container}>

      <View style={estilos.cabecalho}>

        <Link href={"/homeFuncionario"} asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
        </Link>

        <Text style={estilos.tituloCabecalho}>
          Histórico de chamados
        </Text>

        <View style={{ width: 20 }} />

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={estilos.caixaBusca}>
          <Ionicons name="search" size={16} color="#7a7a7a" />

          <TextInput
            placeholder="Buscar chamado..."
            placeholderTextColor="#7a7a7a"
            style={estilos.input}
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        <View style={estilos.filtros}>
          <Filtro texto="Resolvidos" valor="resolvido" ativo={filtroAtivo} setFiltro={setFiltroAtivo} cor="#7B61FF" />
          <Filtro texto="Em aberto" valor="aberto" ativo={filtroAtivo} setFiltro={setFiltroAtivo} cor="#53bd0c" />
          <Filtro texto="Cancelado" valor="cancelado" ativo={filtroAtivo} setFiltro={setFiltroAtivo} cor="#FF5A5A" />
          <Filtro texto="Todos" valor="todos" ativo={filtroAtivo} setFiltro={setFiltroAtivo} cor="#7B61FF" />
        </View>

        {chamadosFiltrados.map(item => (

            <TouchableOpacity activeOpacity={0.9}>

              <View style={estilos.card}>

                <View style={estilos.linhaEntre}>
                  <Text style={estilos.titulo}>{item.titulo}</Text>
                  <Text style={estilos.data}>{item.data}</Text>
                </View>

                <View style={estilos.linhaStatus}>
                  <View style={[estilos.ponto, { backgroundColor: item.cor }]} />
                  <Text style={estilos.status}>{item.statusLabel}</Text>
                  <Text style={estilos.local}>{item.local}</Text>
                  <Text style={estilos.setor}>{item.setor}</Text>
                </View>

                <View style={estilos.divisor} />

                <Text style={estilos.funcionario}>
                  Funcionário: {item.funcionario}
                </Text>

                <Text style={estilos.descricao}>
                  {item.descricao}
                </Text>

                <Image source={item.imagem} style={estilos.imagem} />

              </View>

            </TouchableOpacity>


        ))}

      </ScrollView>

            <View style={estilos.bottomNav}>
              <Link href={"/perfilFuncionario"}><Ionicons name="person" size={26} color="#FFF"/></Link>
              <Link href={"/homeFuncionario"}><Ionicons name="home" size={26} color="#FFF" /></Link>  
              <Link href={"/historico"}><Ionicons name="time" size={26} color="#ffffffb6" /></Link> 
            </View>

    </View>
  );
}

function Filtro({ texto, valor, ativo, setFiltro, cor }) {

  const selecionado = ativo === valor;

  return (
    <TouchableOpacity
      onPress={() => setFiltro(valor)}
      style={[
        estilos.filtro,
        {
          borderColor: cor,
          backgroundColor: selecionado ? cor + '20' : 'transparent'
        }
      ]}
    >
      <View style={[estilos.pontoPequeno, { backgroundColor: cor }]} />

      <Text style={[estilos.textoFiltro, { color: cor }]}>
        {texto}
      </Text>
    </TouchableOpacity>

  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4'
  },

  cabecalho: {
    backgroundColor: '#4F46E5',
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },

  tituloCabecalho: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },

  caixaBusca: {
    margin: 15,
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },

  input: {
    flex: 1,
    padding: 10
  },

  filtros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 15,
    marginBottom: 10
  },

  filtro: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4
  },

  textoFiltro: {
    fontSize: 12,
    marginLeft: 5
  },

  pontoPequeno: {
    width: 6,
    height: 6,
    borderRadius: 3
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#CBB7FF'
  },

  linhaEntre: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  titulo: {
    fontSize: 16,
    fontWeight: '600'
  },

  data: {
    fontSize: 11,
    color: '#9a9a9a'
  },

  linhaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6
  },

  ponto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5
  },

  status: {
    fontSize: 13
  },

  local: {
    marginLeft: 10,
    fontSize: 12,
    color: '#777'
  },

  setor: {
    marginLeft: 'auto',
    fontSize: 11,
    color: '#999'
  },

  divisor: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8
  },

  funcionario: {
    fontSize: 12,
    fontWeight: '500'
  },

  descricao: {
    fontSize: 12,
    color: '#666',
    marginVertical: 5
  },

  imagem: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginTop: 5
  },

  barraInferior: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 55,
    backgroundColor: '#4B1FB3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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