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
};

export interface ProductState {
    products: Product[];
    isLoading: boolean;
}