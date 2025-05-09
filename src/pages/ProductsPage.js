import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';

const url = 'https://fakestoreapi.com/products'

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', padding: '1rem' }}>
            {products.map(product => (
                <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
                    <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                    <h3><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
                    <StarRating rating={product.rating.rate} />
                </div>
            ))}
        </div>
    );
}
