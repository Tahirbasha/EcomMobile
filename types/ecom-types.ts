export interface ProductsPayload {
    activeOptionId: string;
    activeCategoryId: string;
    searchInput: string;
    activeRatingId: string;
};

export interface ProductItem {
    id: number;
    title: string;
    brand: string;
    price: number;
    imageUrl: string;
    rating: string;
    description: string;
};

export interface ProductState {
    products: ProductItem[];
    isLoading: boolean;
    isFetchFailed: boolean;
    searchByValue: string;
    searchBy: string;
}

export interface ProductDetailedInfo {
    id: number;
    title: string;
    imageUrl: string;
    brand: string;
    price: number;
    availability: string;
    description: string;
    rating: number;
    totalReviews: number;
}

export interface ProductDetailsState {
    productDetails: ProductDetailedInfo;
    similarProducts?: ProductItem[];
}

export interface CartItem {
    id: number;
    title: string;
    imageUrl: string;
    brand: string;
    quantity: number;
    price: number;
}

export interface rootState {
    cartDetails: CartItem[];
}