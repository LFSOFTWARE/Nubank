import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        width: "100%",
        height: 190,
        backgroundColor: "#830AD1"
    },
    body: {
        width: "100%",
        height: "auto"
    },

    iconsTop: {
        width: "100%",
        height: 50,
        marginTop: 30,
        marginLeft: 20,
        flexDirection: "row"
    },
    iconUser: {
        backgroundColor: "#9B3BDA",
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"

    },
    icons: {
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"

    },
    nameUser: {
        marginTop: 30,
        marginLeft: 25,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 22
    },
    sectionConta: {
        width: "100%",

    },
    saldo: {
        marginTop: 30,
        marginLeft: 24,
        fontSize: 30,
        fontWeight: '700',
        color: "black"
    },
    cardCard: {
        width: "90%",
        height: 60,
        marginTop: 30,
        backgroundColor: "#F0F1F5",
        alignSelf: "center",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    cardText: {
        color: "black",
         fontWeight: "600",
          fontSize:16,
          marginLeft:10
    }

})


export default style

