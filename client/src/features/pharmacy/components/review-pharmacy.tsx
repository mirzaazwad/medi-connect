import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ReviewForm from "./review-form-modal";
import ViewReviews from "./view-reviews";
import CustomerReviewCard from "./customer-review";
import AverageReview from "./average-review-card";

type ReviewOrderProps={
  manager_email:string,
  customer_email:string
}

const ReviewOrder = ({customer_email,manager_email}:ReviewOrderProps) => {
  const [revealReviewForm, setRevealReviewForm] = useState(false);
  const [disabled,setDisabled]=useState(false);
  return (
    <div className="review-container">
        <AverageReview image={'/pharmacyProfilePicture.png'} disabled={disabled} review_stars={4.5} setRevealReviewForm={setRevealReviewForm} pharmacyName="New Pharmacy"/>
        <CustomerReviewCard setRevealReviewForm={setRevealReviewForm} image={'/brokenProfilePicture.jpg'} username={'Your Review'} review_stars={2.5} review={'Not Bad'}/>
        <ReviewForm revealForm={revealReviewForm} setRevealReviewForm={setRevealReviewForm}/>
        <ViewReviews/>
    </div>
  );
};

export default ReviewOrder;
