import {
    Td,
    Tr  } from '@chakra-ui/react'

import style from './TableData.module.css'

export interface MovieData {
    id: number;
    title: string;
    adult: boolean;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
    original_language: string;
    original_title: string;
    popularity: number;
    vote_count: number;
}[]
import { useState } from 'react';

import { useTableContext } from '../contexts/TableContext';

import { TableDetails } from './TableDetails';

export const TableData = ({...value}) => {
    const [color, setColor] = useState<boolean>(false);
    const [isActive, setIsActive] = useState(false);
    const { setCurrentMovieId } = useTableContext();

    const handleClick = () => {
        setIsActive(!isActive);
        setColor((prev)=>!prev);
        setCurrentMovieId(value.id);
    }

    return (
        <>
            <Tr onClick={handleClick} className={`${style.link} ${color ? style.markedRow : ''}`}>
                <Td className={style.markColumn}>
                    {isActive ? '-' : '+'}
                </Td>
                <Td className={style.titleColumn}><span>Title: </span>{value.title}</Td>
                <Td maxWidth={500} className={style.posterColumn}><img src={`https://image.tmdb.org/t/p/original${value.poster_path}`} alt="poster" className={style.poster} /></Td>
                <Td>
                    <div className={style.overviewColumn}><span>Overview: </span>{value.overview}</div>
                </Td>
                <Td className={style.releaseDateColumn}><span>Release date: </span>{value.release_date}</Td>
                <Td isNumeric className={style.voteAverageColumn}><span>Vote average: </span>{value.vote_average}</Td>
                <Td><span>Adult: </span>{value.adult ? 'Yes' : 'No'}</Td>
            </Tr>
            {isActive && <TableDetails {...value} />}
        </>
    )
}