export interface ProductsPayload {
    activeOptionId: string;
    activeCategoryId: string;
    searchInput: string;
    activeRatingId: string;
};

export interface Product {
    id: number;
    title: string;
    brand: string;
    price: number;
    imageUrl: string;
    rating: string;
    description: string;
};

export interface ProductState {
    products: Product[];
    isLoading: boolean;
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
    similarProducts?: ProductDetailedInfo;
}