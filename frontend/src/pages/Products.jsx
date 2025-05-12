import api from "../services/api";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("/products")
        .then((response) => setProducts(response.data))
        .catch((error) => console.error("Erro ao buscar produtos", error));
    }, []);

    return (
        <div>
            <h1>
                Produtos
            </h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - R$ {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;