import Loader from "../../../partials/loader";
import ReviewCard from "./review-card";
import { useReviewsView } from "../hooks/useReviewsView";

const ViewReviews = () => {
  const {reviews}=useReviewsView();

  if (reviews !== undefined) {
    return (
      <div className="table view-all-review-table">
        {reviews.map((review, index) => (
          <ReviewCard image={'/customerProfilePicture.jpg'} username={review.username} review={review.review} review_stars={review.review_stars}></ReviewCard>
        ))}
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default ViewReviews;
