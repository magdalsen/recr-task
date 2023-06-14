import { Link, useParams } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

interface CollectionDetailsInterface {
    id: number;
    name: string;
    overview: string;
    parts: [{
        title: string;
        media_type: string;
        popularity: number;
        release_date: string;
    }]
}

export const CollectionDetails = () => {
    const { id ,collId } = useParams();
    const [collectionDetails, setCollectionDetails] = useState<CollectionDetailsInterface>();

    const fetchCollectionDetails = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDE3NzU3Njk3MWM4ZDI1MDgxNmM1ZmNkNWNhYzYwMCIsInN1YiI6IjYwODdiZGE1OGQyMmZjMDA3NzI2MGJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hw5OGt80BF43_iUo9e6cjSCU2UoOXpBQHnRri6Rq3qY'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/collection/${collId}?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setCollectionDetails(response);
            })
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchCollectionDetails();
    }, [])
    
    return (
        <>
            <div>Name: {collectionDetails?.name}</div>
            <Link to={`/movie/${id}/collection/${collId}`}>
                <Button type='button'>Back</Button>
            </Link>
        </>
    )
}