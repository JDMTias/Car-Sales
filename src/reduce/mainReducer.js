export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const mainReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TOGGLE":
      console.log(action.payload);
      return {
        ...state,
        additionalPrice: (state.additionalPrice += action.payload.price),
        additionalFeatures: state.additionalFeatures.filter(
          (feat) => action.payload.id !== feat.id
        ),
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
      };
    case "REMOVE_TOGGLE":
      return {
        ...state,
        additionalPrice: (state.additionalPrice -= action.payload.price),
        car: {
            ...state.car,
            features:  state.car.features.filter((feat) => action.payload.id !== feat.id)
          },
            
        additionalFeatures: [...state.additionalFeatures, action.payload],
        
      };

    default:
      return state;
  }
};
