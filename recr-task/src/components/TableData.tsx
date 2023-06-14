import {
    Tr,
    Td
  } from '@chakra-ui/react'
import style from './Tables.module.css'

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
import { TableDetails } from './TableDetails';

export const TableData = ({...value}) => {
    const [color, setColor] = useState<boolean>(false);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        setColor((prev)=>!prev);
    }

    return (
        <>
            <Tr onClick={handleClick} className={`${style.link} ${color ? style.markedRow : ''}`}>
                <Td>
                    {isActive ? '-' : '+'}
                </Td>
                <Td>{value.title}</Td>
                <Td maxWidth={500}><img src={`https://image.tmdb.org/t/p/original${value.poster_path}`} alt="poster" /></Td>
                <Td>
                    <div className={style.overviewColumn}>{value.overview}</div>
                </Td>
                <Td>{value.release_date}</Td>
                <Td isNumeric>{value.vote_average}</Td>
                <Td>{value.adult ? 'Yes' : 'No'}</Td>
            </Tr>
            {isActive && <TableDetails {...value} />}
        </>
    )
}