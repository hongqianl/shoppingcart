import { ProductService } from "../services/ProductService";

export const CartReducer = (state, action)=> {
    const {allProducts: products} = ProductService();

    switch ( action.type) {
        case "add":
            return {...state, productList: state.productList.concat(action.product), total: state.total + (products.filter(x=>x.Id === action.product))[0].Price };

        case "delete":
            if (state.productList.find(x=>x === action.product) ) {
                state.total -= (products.filter(x=>x.Id === action.product))[0].Price;
            }
            state.productList = state.productList.filter(x=>x !== action.product);
            return {...state, productList: state.productList, total: state.total};
    }
}