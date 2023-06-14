import style from './TableNewDetails.module.css'
import { MovieData } from './TableData'
import { useTableContext } from '../contexts/TableContext'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useEffect } from 'react'

export const TableNewDetails = () => {
    const { id } = useParams();
    const { movies, setCollection, coll } = useTableContext();

    const fetchCollections = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDE3NzU3Njk3MWM4ZDI1MDgxNmM1ZmNkNWNhYzYwMCIsInN1YiI6IjYwODdiZGE1OGQyMmZjMDA3NzI2MGJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hw5OGt80BF43_iUo9e6cjSCU2UoOXpBQHnRri6Rq3qY'
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
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/original${value.poster_path}`} alt="poster" className={style.poster} />
                                </div>
                                <div className={style.detailTable_all}>
                                    <div className={style.detailTable_info}><span>Title:</span> {value.original_title}</div>
                                    <div className={style.detailTable_info}><span>Original language:</span> {value.original_language}</div>
                                    <div className={style.detailTable_info}><span>Release date:</span> {value.release_date}</div>
                                    <div className={style.detailTable_info}><span>Popularity:</span> {value.popularity}</div>
                                    <div className={style.detailTable_info}><span>Vote average:</span> {value.vote_average}</div>
                                    <div className={style.detailTable_info}><span>Vote count:</span> {value.vote_count}</div>
                                    <div>
                                        <Link to={`/movie/${value.id}/reviews`}>
                                            <Button type='button' colorScheme='blue'>See reviews!</Button>
                                        </Link>
                                    </div>
                                    <div className={coll?.belongs_to_collection === null ? style.notVisible : ''}>
                                        <Link to={`/movie/${value.id}/collection/${coll?.belongs_to_collection?.id}`}>
                                            <Button type='button' colorScheme='blue'>Checkout collections</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to={'/'}>
                                    <Button type='button'>Back</Button>
                                </Link>
                            </div>                            
                    </> : <></>}
                </span>
            ))}
        </>
    )
}