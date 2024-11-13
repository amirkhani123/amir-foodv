export interface Ifoods {
    image:    Iimage;
    name:     string;
    category: string;
    price:    number;
    id:string;
    quentity:number;
}

export interface Iimage {
    thumbnail: string;
    mobile:    string;
    tablet:    string;
    desktop:   string;
}
export interface IinitialState{
    selectedProduct: Ifoods[];
    totalPrice:      number;
    quntity:         number;

}