export default function StarRating({ rating }) {
    const stars = Math.round(rating);
    return (
        <div>
            {'★'.repeat(stars)}
            {'☆'.repeat(5 - stars)}
        </div>
    );
}
