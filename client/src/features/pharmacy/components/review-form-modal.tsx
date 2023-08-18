import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import ReactQuill from "react-quill";
import StarsRating from "react-star-rate";

type ReviewFormProps = {
  revealForm:boolean;
  setRevealReviewForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReviewForm = ({ revealForm,setRevealReviewForm }: ReviewFormProps) => {
  const [customer, setCustomer] = useState<{
    username: string;
    email: string;
    profile_picture: string;
  }>({
    username:"Mirza Mohammad Azwad",
    email:"mirzaazwad8@gmail.com",
    profile_picture:"/brokenProfilePicture.jpg"
  });
  const [rating, setRating] = useState<number>(0);
  const [ratingEmpty, setRatingEmpty] = useState(false);
  const [review, setReview] = useState<string>("");
  const [editorContent, setEditorContent] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const editorRef = useRef<ReactQuill | null>(null);
  const [exceededCharCount, setExceededCharCount] = useState(false);
  const MAX_CHARACTERS = 250;

  const handleRatingChange = (newRating: number | undefined) => {
    if (newRating !== undefined) {
      setRating(newRating);
      if (newRating !== 0) setRatingEmpty(false);
    }
  };
  const handleEditorChange = (content: string) => {
    console.log(content);
    if (editorRef.current) {
      // Get the Quill instance
      const quill = editorRef.current.getEditor();

      // Get the plain text without HTML tags
      const text = quill.getText().trim();
      const strippedContent = text.replace(/<[^>]+>/g, ""); // Remove HTML tags
      const count = strippedContent.length;
      setEditorContent(content);
      setReview(strippedContent);
      setCharacterCount(strippedContent.length);
      if (count > MAX_CHARACTERS) setExceededCharCount(true);
      else setExceededCharCount(false);
    }
  };

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };


  const checkEmptyRating = () => {
    if (rating === 0) {
      setRatingEmpty(true);
    } else {
      setRatingEmpty(false);
    }
  };

  //this should be set to whatever the user had in the past (without changes)
  const handleCancel = () => {
    setRevealReviewForm(false);
    setRating(0);
    setReview("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkEmptyRating();
  };
  return (
    <Modal show={revealForm} onHide={()=>setRevealReviewForm(false)}>
      <Modal.Header closeButton className="header-color-modal">Review Pharmacy</Modal.Header>
      <Modal.Body>
      <div className="table new-review-form new-review-table">
      <form className=" add-review-form" onSubmit={handleSubmit}>
        <div className="review-details d-flex mx-auto">
          <img
            src={
              customer?.profile_picture
                ? customer.profile_picture
                : "/customerProfilePicture.jpg"
            }
            width="50px"
            height="50px"
            alt="profile picture"
          ></img>
          <h4>{customer?.username}</h4>
        </div>

        <div className="customer-rating">
          <StarsRating
            classNamePrefix="customer-rating-stars"
            value={rating}
            onChange={handleRatingChange}
            allowClear={false}
          />
          {ratingEmpty && (
            <span className="errorBox">
              *Field cannot be empty!
            </span>
          )}
        </div>

        <label htmlFor="review">Drop your review here</label>
        <ReactQuill
          className="editor"
          value={editorContent}
          ref={editorRef} //
          onChange={handleEditorChange}
          modules={{ toolbar: false }}
        />
        <p
          className={`show-character-count ${
            exceededCharCount ? "warning" : ""
          }`}
        >
           {characterCount}/{MAX_CHARACTERS}
        </p>

        <div className="d-flex mx-auto w-100">
        <div className="w-50">
        <button
          className='custom-button full-width'
          type="submit"
          disabled={exceededCharCount}
        >
          Submit Review
        </button>
        </div>
        <div className="w-50">
        <button className="custom-button full-width" onClick={() => handleCancel()}>
          Cancel
        </button>
        </div>
        </div>
      </form>
    </div>
      </Modal.Body>
    </Modal>
  );
};

export default ReviewForm;
