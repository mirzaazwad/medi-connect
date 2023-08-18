import {useState} from 'react';
export const useReviewsView=()=>{
  const [reviews, setReviews] = useState<
    | {
        profile_picture: string;
        username: string;
        review: string;
        review_stars: number;
      }[]
    | undefined
  >([
    {
      profile_picture: "brokenProfilePicture.jpg",
      username: "John Doe",
      review: "Great product! Highly recommended.",
      review_stars: 5,
    },
    {
      profile_picture: "customerProfilePicture.jpg",
      username: "Jane Smith",
      review: "Excellent service. Will definitely buy again.",
      review_stars: 4,
    },
  ]);

  return {reviews};
}