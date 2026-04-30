import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";




export default function Index() {
  return (
    <SafeAreaView>

        <View style={style.header}>

            <Image source={require("../../assets/images/Group 66.png")}/>
            
            <View style={style.linha}>

            </View>

            <TouchableOpacity>
                <Image source={require("../../assets/images/heroicons_bell-16-solid.svg")}/>
            </TouchableOpacity>

        </View>

      <View style={style.section1}>

        <Text style={style.sectionTitle1}> Precisa de ajuda <Text style={style.sectionTitle1}> agora?</Text> </Text>

        <TouchableOpacity style={style.btn1}>
          <Text style={style.btnText1}> + Novo chamado</Text>
        </TouchableOpacity>
        
      </View>

      <View style={style.ultimo}>
         <Text style={style.sectionTitle2}>Útimos Chamados</Text>
      </View>

      

        <View style={style.lado}>
        
                <View style={style.box}>
                    <Text style={style.boxTitle}>✔️ Resolvidos</Text>
                    <Text style={style.boxNumber}> 7 </Text>
                </View>

                <View style={style.box}>
                    <Text style={style.boxTitle}> 🕑Em abertos</Text>
                    <Text style={style.boxNumber}> 3 </Text>
                </View>

        </View>
      


        <View style={style.section2}>
            <Text style={style.sectionTitle2}>Chamados recentes</Text>
            <View style={style.card}>
                <Text style={style.cardTitle}>Computador Travando</Text>
                <View style={style.lado2}>
                    <Text style={style.status}>🕑 Em aberto</Text>
                    <Text style={style.setor}> Sala 7 - ADM</Text>
                </View>
                <Text style={style.setorH} >12:30</Text>
                 <br/>
                 <br/>
                 <Text style={style.cardTitle}>Máquina com Defeito</Text>
                 <View style={style.lado2}>
                   <Text style={style.status}>✔️ Resolvido</Text> 
                   <Text style={style.setor} > Oficina 12 - Produção</Text>
                 </View>
                 <Text style={style.setorH2} >08:17</Text>
            </View>
      </View>
      
    </SafeAreaView>

  )
}

  const style = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: "#f9f9f9",
    },

    header: {
      backgroundColor: "#4F46E5",
      padding: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomColor: "black",
      borderBottomEndRadius: 10,
      borderBottomStartRadius: 10,
    },

    headerTitle: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },

    icone: {
      fontSize: 20,
      color: "white",
    },

    linha: {
      width: 1,
      height:"130%",
      backgroundColor: "#f9f9f9",
      marginRight: 200
    },

    section1: {
      padding: 65,
      marginRight: 17,
      marginLeft: 17,
      backgroundColor: "#E9D8FF",
      borderBottomStartRadius: 50,
      borderBottomEndRadius: 50,
      alignItems: "center",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
        
    },

    section2: {
      padding: 15,
    },

    sectionTitle1: {
      fontSize: 23,
      marginBottom: 10,
      fontWeight:"semibold",
      textAlign: "center",
      
      

    },

    sectionTitle2: {
      fontSize: 26,
      marginBottom: 10,
      fontWeight: "bold",
      
    },

    ultimo: {
        marginLeft: 15,
        margin: 15,

    },

    btn1: {
       backgroundColor: "#4F46E5",
      padding: 14,
      borderRadius: 17,
      alignItems: "center",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
    },

    btnText1: {
      color: "white",
      fontSize: 16,
      borderColor: "red",
    },

    lado: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },

    box: {
      backgroundColor: "white",
      borderRadius: 8,
      padding: 15,
      width: "40%",
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
      border: '1px solid #4F46E5',
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
    },

    boxTitle: {
      fontSize: 16,
      color: "black",
      fontWeight: "bold",
    },

    boxNumber: {
      color: "gray",
      fontSize: 22,
      marginTop: 5,
    },

    card: {
      backgroundColor: "white",
      borderRadius: 8,
      padding: 15,
      paddingBottom: 30,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius:5,
      border: '1px solid #4F46E5',
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
    


      
    },

    cardTitle: {
      fontSize: 21,
      fontWeight: "bold",
    },

    status: {
      color: "black",
      fontWeight: "bold",
    },

    setor: {
        color: "gray",
    },

    setorH: {
        color: "gray",
        marginLeft:280,
    },
    setorH2: {
        color: "gray",
        marginLeft:280,

    },
     lado2: {
        display:"flex",
        flexDirection: "row",
        gap: 40,
        marginVertical: 7,

     }

})


