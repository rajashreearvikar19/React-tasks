import { faker } from '@faker-js/faker';
import { useState } from 'react';
import SingleProduct from "./SingleProduct"
const Home = () => {
    faker.seed(100);
    const randomImage = faker.image.urlPicsumPhotos();
    const productArray = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: randomImage
    }))

    const [products] = useState(productArray);
    return (
        <div className='productContainer'>
            {
                products.map((prod) => (
                    <SingleProduct prod={prod} key={prod.id}/>
                ))

            }

        </div>
    )
}

export default Home;