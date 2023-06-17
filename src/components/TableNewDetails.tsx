import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

import { useTableContext } from '../contexts/TableContext'

import { MovieData } from './TableData'

import style from './TableNewDetails.module.css'
const token = import.meta.env.VITE_TOKEN

export const TableNewDetails = () => {
    const { id } = useParams();
    const { movies, setCollection, coll } = useTableContext();

    const fetchCollections = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                setCollection(response);
            })
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchCollections();
    }, [])

    return (
        <>
            {movies.map((value:MovieData)=>(
                <span key={value.id}>
                    {value.id === Number(id) ? <>
                        <div className={style.detailTable}>
                            <img src={`https://image.tmdb.org/t/p/original${value.poster_path}`} alt="poster" className={style.poster} />
                            <div className={style.detailTable_title}><span>Title:</span> {value.original_title}</div>
                            <div className={style.detailTable_language}><span>Original language:</span> {value.original_language}</div>
                            <div className={style.detailTable_releaseDate}><span>Release date:</span> {value.release_date}</div>
                            <div className={style.detailTable_popularity}><span>Popularity:</span> {value.popularity}</div>
                            <div className={style.detailTable_average}><span>Vote average:</span> {value.vote_average}</div>
                            <div className={style.detailTable_count}><span>Vote count:</span> {value.vote_count}</div>
                        </div>
                        <Link to={`/${value.id}/reviews`} className={style.pathLink}>
                            <Button type='button' colorScheme='blue'>See reviews!</Button>
                        </Link>
                        <Link to={`/${value.id}/${coll?.belongs_to_collection?.id}`} className={`${style.path_link} ${coll?.belongs_to_collection === null ? style.notVisible : ''}`}>
                            <Button type='button' colorScheme='blue'>Checkout collections</Button>
                        </Link>
                        <Link to={'/'} className={style.pathLink}>
                            <Button type='button'>Back</Button>
                        </Link>                 
                    </> : <></>}
                </span>
            ))}
        </>
    )
}