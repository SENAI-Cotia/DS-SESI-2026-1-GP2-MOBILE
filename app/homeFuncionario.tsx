import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {

  const router = useRouter();

  return (

    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={style.header}>

          <Image source={require("../assets/images/group66.png")} />

          <View style={style.linha}></View>

          <TouchableOpacity
            style={style.profileBtn}
            onPress={() => router.push("/perfilFuncionario")}
          >
            <Ionicons name="person-circle-outline" size={34} color="white" />
          </TouchableOpacity>

        </View>

        <View style={style.section1}>

          <Text style={style.sectionTitle1}>
            Precisa de ajuda agora?
          </Text>

          <Link href={"/chamado"} asChild>
            <TouchableOpacity style={style.btn1}>
              <Text style={style.btnText1}>+ Novo chamado</Text>
            </TouchableOpacity>
          </Link>

        </View>

        <View style={style.ultimo}>
          <Text style={style.sectionTitle2}>Últimos Chamados</Text>
        </View>

        <View style={style.lado}>

          <View style={style.box}>
            <Text style={style.boxTitle}>✔️ Resolvidos</Text>
            <Text style={style.boxNumber}>7</Text>
          </View>

          <View style={style.box}>
            <Text style={style.boxTitle}>🕑 Em aberto</Text>
            <Text style={style.boxNumber}>3</Text>
          </View>

        </View>

        <View style={style.section2}>

          <Text style={style.sectionTitle2}>Chamados recentes</Text>

          <View style={style.card}>

            <View style={style.chamadoItem}>
              <Text style={style.cardTitle}>Computador Travando</Text>

              <View style={style.infoRow}>
                <Text style={style.status}>🕑 Em aberto</Text>
                <Text style={style.setor}>Sala 7 - ADM</Text>
              </View>

              <Text style={style.descricao}>
                O computador está travando constantemente ao abrir o sistema da empresa e demorando muito para iniciar.
              </Text>

              <Text style={style.hora}>12:30</Text>
            </View>

            <View style={style.chamadoItem}>
              <Text style={style.cardTitle}>Máquina com Defeito</Text>

              <View style={style.infoRow}>
                <Text style={style.status}>✔️ Resolvido</Text>
                <Text style={style.setor}>Oficina 12 - Produção</Text>
              </View>

              <Text style={style.descricao}>
                Equipamento apresentou falha no painel de controle e precisou de manutenção corretiva.
              </Text>

              <Text style={style.hora}>08:17</Text>
            </View>

            <View style={style.chamadoItem}>
              <Text style={style.cardTitle}>Internet Instável</Text>

              <View style={style.infoRow}>
                <Text style={style.status}>🕑 Em aberto</Text>
                <Text style={style.setor}>Sala 3 - Financeiro</Text>
              </View>

              <Text style={style.descricao}>
                A conexão com a internet está caindo diversas vezes durante o expediente.
              </Text>

              <Text style={style.hora}>10:42</Text>
            </View>

            <View style={style.chamadoItem}>
              <Text style={style.cardTitle}>Impressora sem tinta</Text>

              <View style={style.infoRow}>
                <Text style={style.status}>✔️ Resolvido</Text>
                <Text style={style.setor}>Recepção</Text>
              </View>

              <Text style={style.descricao}>
                Impressora principal da recepção estava sem tinta e impossibilitando novas impressões.
              </Text>

              <Text style={style.hora}>09:05</Text>
            </View>

            {/* BOTÃO VER MAIS */}
            <Link href={"/historico"} asChild>
              <TouchableOpacity style={style.verMaisBtn}>
                <Text style={style.verMaisText}>Ver mais</Text>
              </TouchableOpacity>
            </Link>

          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    backgroundColor: "#4F46E5",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  linha: {
    width: 1,
    height: "120%",
    backgroundColor: "#FFFFFF",
    marginRight: 180,
  },

  profileBtn: {
    padding: 2,
  },

  section1: {
    paddingVertical: 55,
    marginHorizontal: 17,
    backgroundColor: "#E9D8FF",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  sectionTitle1: {
    fontSize: 24,
    marginBottom: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
  },

  btn1: {
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 18,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  btnText1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  ultimo: {
    marginTop: 18,
    marginHorizontal: 15,
  },

  sectionTitle2: {
    fontSize: 22,
    marginBottom: 14,
    fontWeight: "bold",
    color: "#000",
  },

  lado: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },

  box: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 18,
    width: "42%",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },

  boxTitle: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },

  boxNumber: {
    color: "#666",
    fontSize: 24,
    marginTop: 8,
  },

  section2: {
    padding: 15,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 18,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },

  chamadoItem: {
    marginBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingBottom: 18,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  status: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },

  setor: {
    color: "#666",
    fontSize: 15,
  },

  descricao: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    marginBottom: 10,
  },

  hora: {
    color: "#777",
    fontSize: 14,
    textAlign: "right",
  },

  verMaisBtn: {
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  verMaisText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },

})