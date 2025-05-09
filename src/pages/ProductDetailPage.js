import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StarRating from '../components/StarRating';

const url = 'https://fakestoreapi.com/products'

export default function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`${url}/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div style={{ padding: '2rem' }}>
            <img src={product.image} alt={product.title} style={{ width: '200px', objectFit: 'contain' }} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <StarRating rating={product.rating.rate} />
            <button onClick={() => navigate(-1)} style={{ marginTop: '1rem' }}>Back</button>
        </div>
    );
}
