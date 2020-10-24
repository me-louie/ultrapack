let id = 5;
const initialState = [
  {
    id: "uuid_1",
    name: "Backpack",
    weight: 50,
    quantity: 1,
    consumable: false,
    category: "Gear",
  },
  {
    id: "uuid_2",
    name: "Hiking Poles",
    weight: 100,
    quantity: 1,
    consumable: false,
    category: "Gear",
  },
  {
    id: "uuid_3",
    name: "Trail Mix",
    weight: 50,
    quantity: 1,
    consumable: true,
    category: "Food",
  },
  {
    id: "uuid_4",
    name: "Thermal",
    weight: 105,
    quantity: 2,
    consumable: false,
    category: "Clothing",
  },
];

export const packingList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PACK":
      return [...state, action.payload];
    case "ADD_ROW":
      console.log("reducer");
      return [
        ...state,
        {
          id: ++id,
          name: ++id,
          weight: "",
          quantity: "",
          consumable: false,
          category: "",
        },
      ];
    default:
      return state;
  }
};

export default packingList;
