type StarRatingProps = {
  rating: number;
};

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star filled" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
