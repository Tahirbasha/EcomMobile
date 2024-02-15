import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product, ProductsPayload } from "../types/ecom-types";

export const login = async (loginCredentials: { username: string, password: string }) => {
  const url = "https://apis.ccbp.in/login";
  const options = {
    method: "POST",
    body: JSON.stringify(loginCredentials),
  };
  const response = await fetch(url, options);
  return response
}

export const getAllProducts = async (payload: ProductsPayload) => {
  const jwtToken = await AsyncStorage.getItem('Token');
  const { activeOptionId, activeCategoryId, searchInput, activeRatingId } = payload
  const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: 'GET',
  }
  const response = await fetch(apiUrl, options)
  if (response.ok) {
    const fetchedData = await response.json()
    const updatedData: Product[] = fetchedData.products.map((product: any) => ({
      title: product.title,
      brand: product.brand,
      price: product.price,
      id: product.id,
      imageUrl: product.image_url,
      rating: product.rating,
    }));
    return updatedData;
  }
};

export const getPrimeProducts = async () => {

  const jwtToken = await AsyncStorage.getItem('Token');

  const apiUrl = 'https://apis.ccbp.in/prime-deals'
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: 'GET',
  }
  const response = await fetch(apiUrl, options)
  if (response.ok) {
    const fetchedData = await response.json()
    const updatedData: Product[] = fetchedData.prime_deals.map((product: any) => ({
      title: product.title,
      brand: product.brand,
      price: product.price,
      id: product.id,
      imageUrl: product.image_url,
      rating: product.rating,
    }));
    return updatedData;
  }
};

export const getProductDetails= async (productId: number) => {

  const jwtToken = await AsyncStorage.getItem('Token');
  const apiUrl = `https://apis.ccbp.in/products/${productId}`
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: 'GET',
  }
  const response = await fetch(apiUrl, options)
  if (response.ok) {
    const fetchedData = await response.json()
    const updatedData = getFormattedData(fetchedData)
    const updatedSimilarProductsData = fetchedData.similar_products.map(
      (eachSimilarProduct: any) => getFormattedData(eachSimilarProduct),
    )
    return {productDetails: updatedData, similarProducts: updatedSimilarProductsData};
  }
}

const getFormattedData = (data:any) => ({
  id: data.id,
  title: data.title,
  imageUrl: data.image_url,
  brand: data.brand,
  price: data.price,
  availability: data.availability,
  description: data.description,
  rating: data.rating,
  totalReviews: data.total_reviews,
});