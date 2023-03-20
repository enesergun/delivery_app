import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pageWrapper: {
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    maxWidth: 250,
    fontWeight: "bold",
  },
  icon: {
    width: 100,
    height: 100,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  input: {
    height: 50,
    borderColor: "#E6E6E6",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 275,
  },
  filter: {
    width: 48,
    height: 48,
    borderColor: "#FF9431",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemItem: {
    marginVertical: 16,
    marginRight: 10,
    borderRadius: 10,
  },
  itemTitle: {
    borderColor: "#FF9431",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontWeight: "bold",
  },
  categoryContainer: {
    marginTop: 32,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Products: {
    marginTop: 20,
    flexDirection: "row",

    width: "100%",
  },
  Image: {
    width: 87,
    alignItems: "center",
    height: 70,
    alignSelf: "center",
  },
  ProductCard: {
    width: "49%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E6E6E6",
  },
  ShadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  Rating: {
    flexDirection: "row",
  },
  RatingText: {
    marginLeft: 5,
    marginBottom: 5,
  },
  ProductImage: {
    marginBottom: 15,
  },
  ProductNameWrapper: {},
  ProductName: {
    fontSize: 21,
    marginBottom: 9,

    fontWeight: "bold",
  },
  ProductDescription: {
    fontSize: 12,
    marginBottom: 9,
  },
  PriceWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Price: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#FF9431",
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
  loading: {
    position: "absolute",
   flex: 1,
   zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default HomeStyles;
