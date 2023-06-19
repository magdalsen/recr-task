import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { Badge, Button } from '@chakra-ui/react'

import style from './Reviews.module.css'
const token = import.meta.env.VITE_TOKEN

export interface ReviewsData {
    author: string;
    author_details: {
        avatar_path: string;
        name: string;
        rating: number;
        username: string;
    },
    content: string;
    created_at: string;
    id: string;
}[]

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState<ReviewsData[]>([]);
    
    const fetchReviews = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {
                setReviews(response.results);
            })
            .catch(err => <>Sorry, error occured: {err}</>);
    }

    useEffect(()=>{
        fetchReviews();
    }, [])

    return (
        <>
            {reviews.length === 0 ? <div>Sorry, no reviews. Check another movie.</div> : <>
                {reviews.map((el:ReviewsData)=>(
                    <div className={style.containerReviews} key={el.id}>
                        <div className={style.containerReviews_author}>
                            <div className={style.containerReviews_authorName}>
                                <span>Author:</span> {el.author}
                            </div>
                            <div className={style.containerReviews_authorDetails}>
                                <div><span>Username:</span> {el.author_details.username}</div>
                                <div><span>Rating:</span> {el.author_details.rating}</div>
                            </div>
                        </div>
                        <div className={style.containerReviews_data}>
                            <div className={style.containerReviews_dataCreated}>
                                <span>Created at:</span>
                                <div>{new Date(el.created_at).toDateString()}</div>
                            </div>
                            <div className={style.containerReviews_dataContent}>
                                <span>Content:</span> {el.content.includes('SPOILER-FREE') ?
                                    <>
                                        <Badge colorScheme='green'>SPOILER-FREE</Badge>
                                        <div>{el.content}</div>
                                        
                                    </> : <div>
                                    {el.content}
                                        </div>}
                            </div>
                        </div>
                    </div>
                ))}
            </>}
            <Link to={`/${id}`}>
                <Button type='button'>Wróć</Button>
            </Link>
        </>
    )
}

export default Reviews