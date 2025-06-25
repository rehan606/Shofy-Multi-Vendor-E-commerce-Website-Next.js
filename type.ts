type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};
export interface ProductType {
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
    Dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    discountPercentage: number;
    id: number;
    images: string[];
    Meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    minimumOrderQuantity: number;
    price: number;
    rating: number;
    returnPolicy: string;
    reviews: Review[];
    shippingInformation: string;
    sku: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    title: string;
    warrantyInformation: string;
    weight: number;
    quantity: number;

}

export interface StateType {
    shopy: {
        cart: ProductType[];
        favorite: ProductType[];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        userInfo: any;
    };
}






