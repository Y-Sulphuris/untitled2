import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h1>404</h1>
            <h2>Overpriced clothing store</h2>
            <button onClick={() => navigate('/products')} style={{ marginTop: '1rem' }}>
                Go do some paperwork
            </button>
        </div>
    );
}
