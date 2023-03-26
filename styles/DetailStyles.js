import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF1E5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  likeButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  ProductImage: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  Image: {
    width: 262,
    height: 210,
  },
  ContentWrapper: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 30,
    paddingTop: 24,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  TitleWrapper: {
    flexDirection: "row",
    akignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  PriceCountWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  Price: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#FF9431",
  },
  BasketCount: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
  },

  AddToBasket: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#FF9431",
    justifyContent: "center",
    alignItems: "center",
  },
  AddButton: {
    color: "#fff",
  },
  CountButtons: {
    width: 0,
    height: 30,
    borderRadius: 50,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#FF9431",
    justifyContent: "center",
    alignItems: "center",
  },
  ViewCountData: {
    width: 30,
    display: "flex",
  },
  Minus: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  Plus: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  Count: {
    textAlign: "center",
    fontSize: 18,
    color: "#000",
    marginTop: 5,
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
  AboutOrder: {
    margin: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  AboutCard: {
    borderWidth: 1,
    width: 105,
    borderColor: "#FF9431",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  AboutTitle: {
    fontSize: 14,
    color: "#FF9431",
  },
  AboutText: {
    fontSize: 18,
  },
  DescriptionWrapper: {
    marginHorizontal: 20,
  },
  DescriptionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  AddBasketButtonContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    width: "90%",

    height: 50,
    borderRadius: 10,
    backgroundColor: "#FF9431",
  },
  AddToBasketButton: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  AddToasketButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeStyles;
