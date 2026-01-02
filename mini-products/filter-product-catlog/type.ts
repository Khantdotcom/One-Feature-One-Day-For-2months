type Product = {
    id : string;
    name : string;
    category : 'electronics' | 'home' |'kids';
    price : number;
    inStock : boolean;
    description : string;
}

type previewCard = Pick<Product,'name'|'category' |'price'>

<<<<<<< HEAD
=======
type onlyString = PickByType<Product,string>;
>>>>>>> 1a1fd5e (Update issue templates)
