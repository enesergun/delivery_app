import { View, TouchableOpacity, Text } from "react-native";
import DetailStyles from "../styles/DetailStyles";
import { useDispatch, useSelector } from "react-redux";

function BasketAdding({ data }) {
  const { basket } = useSelector((state) => state.basketReducer);
  const matched = basket?.filter((item) => item?.idMeal === data?.idMeal);
  const dispatch = useDispatch();
  const handleAddBasket = () => {
    dispatch({ type: "ADD_TO_BASKET", payload: [...basket, data] });
  };
  const handleDeleteBasket = () => {
    let objectsArray = [...basket];
    let currentData = data;

    let maxIndex = -1;
    let matchingObjects = objectsArray.filter((obj, index) => {
      if (obj.idMeal === currentData.idMeal) {
        maxIndex = index; // Eşleşen objelerin en büyük indexli olanını bulmak için indexler kontrol edilir.
        return true;
      }
      return false;
    });

    if (matchingObjects.length > 0) {
      if (matchingObjects.length === 1) {
        objectsArray.splice(objectsArray.indexOf(matchingObjects[0]), 1); // Tek obje eşleştiyse, onu sil.
      } else {
        objectsArray.splice(maxIndex, 1); // Birden fazla obje eşleştiyse, en büyük indexli olanı sil.
      }
    }
    dispatch({ type: "REMOVE_FROM_BASKET", payload: objectsArray });
  };

  return (
    <View style={DetailStyles.BasketCount}>
      <TouchableOpacity
        onPress={() => handleDeleteBasket()}
        style={[
          DetailStyles.CountButtons,
          matched?.length !== 0 && DetailStyles.ViewCountData,
        ]}
      >
        <Text style={DetailStyles.AddButton}>-</Text>
      </TouchableOpacity>
      <Text
        style={[
          DetailStyles.CountButtons,
          DetailStyles.Count,
          matched?.length !== 0 && DetailStyles.ViewCountData,
        ]}
      >
        {matched?.length}
      </Text>
      <TouchableOpacity
        style={DetailStyles.AddToBasket}
        onPress={() => handleAddBasket()}
      >
        <Text style={DetailStyles.AddButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BasketAdding;
