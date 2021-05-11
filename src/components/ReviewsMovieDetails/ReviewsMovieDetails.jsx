import { Component } from 'react';
import API from '../../api/data.api';
import styles from '../ReviewsMovieDetails/ReviewsMovieDetails.module.css';

class ReviewsMovieDetails extends Component {
    state = {
        "reviews": [],
    }

    componentDidMount() {
        const  movId  = this.props.match.params.movieId; 
        API.fetchReviews(movId)
        .then(results => {
            this.setState({ reviews: results})
        })
    }

    render() {
        const { reviews } = this.state;
        return (
            <ul> 
                {reviews.length !== 0 
                ?   reviews.map(review => (
                        <li key={review.id}> 
                            <p className={styles.bold_font}>Author: {review.author}</p>
                            <p >Character: {review.content}</p>
                        </li>
                    ))
                :<p>We don't have any reviews for this movie</p>           
                }
            </ul> 
        )
    }
}

export default ReviewsMovieDetails;