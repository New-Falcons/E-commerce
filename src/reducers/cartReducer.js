const initialState = {
  products: [
    [
      {
        id: 1,
        name: "man t-shirt summer season",
        image: "1.jpg",
        price: 20,
        size: "M",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
      },
      {
        id: 2,
        name: "woman jacket for summer",
        image: "2.jpg",
        price: 30,
        size: "M",
        discount: 5,
        discountPrice: 30 - (5 / 100) * 30,
        quantity: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
      },
      {
        id: 3,
        name: "man trouser for all seasons",
        image: "3.jpg",
        price: 15,
        size: "M",
        discount: 3,
        discountPrice: 15 - (3 / 100) * 15,
        quantity: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
      },
      {
        id: 4,
        name: "shoes for all season",
        image: "4.jpg",
        price: 50,
        size: "M",
        discount: 4,
        discountPrice: 50 - (4 / 100) * 50,
        quantity: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
      },
      {
        id: 5,
        name: "Man Slim Fit Solid Spread Collar Formal Shirt",
        image:
          "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 25,
        size: "M",
        discount: 2,
        discountPrice: 25 - (2 / 100) * 25,
        quantity: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
      },
      {
        id: 6,
        name: "male jeans",
        image: "6.jpg",
        price: 60,
        size: "M",
        discount: 6,
        discountPrice: 60 - (6 / 100) * 60,
        quantity: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
      },
      {
        id: 7,
        name: "male trouser for all seasons",
        image: "7.jpg",
        price: 35,
        size: "M",
        discount: 2,
        discountPrice: 35 - (2 / 100) * 35,
        quantity: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
      },
      {
        id: 8,
        name: "male jacket for winter",
        image: "8.jpg",
        price: 80,
        size: "M",
        discount: 7,
        discountPrice: 80 - (7 / 100) * 80,
        quantity: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
      },
      {
        id: 9,
        name: "Nike Stylish High Top Men's Sports Shoes",
        image:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        price: 95,
        size: "M",
        discount: 4,
        discountPrice: 95 - (4 / 100) * 95,
        quantity: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
      },
      {
        id: 10,
        name: "male winter jacket",
        image: "10.jpg",
        price: 120,
        size: "M",
        discount: 3,
        discountPrice: 120 - (3 / 100) * 120,
        quantity: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
      },
    ],
  ],
  cartProducts: [
    {
      id: 9,
      name: "Nike Stylish High Top Men's Sports Shoes",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
      price: 95,
      size: "M",
      discount: 4,
      discountPrice: 95 - (4 / 100) * 95,
      quantity: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
    {
      id: 5,
      name: "Man Slim Fit Solid Spread Collar Formal Shirt",
      image:
        "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      price: 25,
      size: "M",
      discount: 2,
      discountPrice: 25 - (2 / 100) * 25,
      quantity: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?",
    },
  ],
  totalPrice: 120,
  totalQuantities: 2,
};

const cartReducer = (state = initialState, action) => {
  let findPro;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      const check = state.cartProducts.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const Tprice = state.totalPrice + product.price * quantity;
        const Tquantities = state.totalQuantities + quantity;
        product.quantity = quantity;
        return {
          ...state,
          cartProducts: [...state.cartProducts, product],
          totalPrice: Tprice,
          totalQuantities: Tquantities,
        };
      }
    case "INC":
      findPro = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      index = state.cartProducts.findIndex(
        (product) => product.id === action.payload
      );
      findPro.quantity += 1;
      state.cartProducts[index] = findPro;
      return {
        ...state,
        totalPrice: state.totalPrice + findPro.price,
        totalQuantities: state.totalQuantities + 1,
      };
    case "DEC":
      findPro = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      index = state.cartProducts.findIndex(
        (product) => product.id === action.payload
      );
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.cartProducts[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice - findPro.price,
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        return state;
      }
    case "REMOVE":
      findPro = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      const filtered = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cartProducts: filtered,
        totalPrice: state.totalPrice - findPro.price * findPro.quantity,
        totalQuantities: state.totalQuantities - findPro.quantity,
      };
    default:
      return state;
  }
};
export default cartReducer;
