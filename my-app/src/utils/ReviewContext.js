import React, { createContext, useState, useEffect } from "react";

// Create the context
export const ReviewsContext = createContext();

// Context provider component
export const ReviewsProvider = ({ children }) => {
    const basicUrl = 'https://twisca-gpel.vercel.app';
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reviews for a product
  const fetchReviews = async (productId) => {
    try {
      const response = await fetch(`${basicUrl}/api/reviews/product/${productId}`);
      const data = await response.json();
      console.log(data.reviews)
      if (data && Array.isArray(data.reviews)) {
        setReviews(data.reviews);
      } else {
        console.error('No reviews found');
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add a review
  const addReview = async (userId, productId, rating, reviewText) => {
    try {
      const response = await fetch(`${basicUrl}/api/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, productId, rating, reviewText }),
      });
      const data = await response.json();
      console.log(data)
      if (data.review) {
        setReviews((prevReviews) => [...prevReviews, data.review]);
      } else {
        console.error('Failed to add review');
      }
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  // Update a review
  const updateReviewText = async (reviewId, rating, reviewText) => {
    try {
      const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, reviewText }),
      });
      const data = await response.json();
      if (data.review) {
        setReviews((prevReviews) =>
          prevReviews.map((review) =>
            review.reviewid === reviewId ? data.review : review
          )
        );
      } else {
        console.error('Failed to update review');
      }
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  // Delete a review
  const deleteReview = async (reviewId) => {
    try {
      const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.review) {
        setReviews((prevReviews) =>
          prevReviews.filter((review) => review.reviewid !== reviewId)
        );
      } else {
        console.error('Failed to delete review');
      }
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };
  const updateReview = async (reviewId, type) => {
    try {
      console.log(reviewId)
      console.log(type)
      const response = await fetch(`${basicUrl}/api/reviews/update-review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewId, type }),
      });

      const updatedReview = await response.json();
      console.log(updateReview)

      setReviews((prev) =>
        prev.map((r) => (r.reviewid === reviewId ? updatedReview : r))
      );
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        loading,
        fetchReviews,
        addReview,
        updateReview,
        deleteReview,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};
