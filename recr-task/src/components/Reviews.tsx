import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import style from './Reviews.module.css'

export interface ReviewsData {
    author: string;
    author_details: [{
        avatar_path: string;
        name: string;
        rating: number;
        username: string;
    }],
    content: string;
    created_at: string;
    id: string;
}[]

export const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState<ReviewsData[]>([]);
    
    const fetchReviews = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDE3NzU3Njk3MWM4ZDI1MDgxNmM1ZmNkNWNhYzYwMCIsInN1YiI6IjYwODdiZGE1OGQyMmZjMDA3NzI2MGJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hw5OGt80BF43_iUo9e6cjSCU2UoOXpBQHnRri6Rq3qY'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setReviews(response.results);
            })
            .catch(err => console.error(err));
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
                            <div className={style.containerReviews_authorName}>Author: {el.author}</div>
                            <div className={style.containerReviews_authorDetails}>Author details: </div>
                        </div>
                        <div className={style.containerReviews_data}>
                            <div className={style.containerReviews_dataContent}>Content: {el.content}</div>
                            <div className={style.containerReviews_dataCreated}>Created at: {el.created_at}</div>
                        </div>
                    </div>
                ))}
            </>}
            <Link to={`/movie/${id}`}>
                <Button type='button'>Wróć</Button>
            </Link>
        </>
    )
}