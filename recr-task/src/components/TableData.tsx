import {
    Tr,
    Td,
    Checkbox
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
}[]
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

export const TableData = ({...value}) => {
    const navigate = useNavigate();
    const [color, setColor] = useState<string>('');

    const handleClick = () => {
        navigate(`/movie/${value.id}`, { replace: false });
    }

    return (
        <>
            <Tr onClick={handleClick} className={style.link} style={{backgroundColor: color}}>
                <Td onClick={(e)=>e.stopPropagation()}>
                    <Checkbox
                        type="checkbox"
                        onChange={(e)=>e.target.checked ? setColor('orange') : setColor('')}
                        id={value.id}>
                    </Checkbox>
                </Td>
                <Td>{value.title}</Td>
                <Td maxWidth={300}><img src={`https://image.tmdb.org/t/p/original${value.poster_path}`} alt="poster" /></Td>
                <Td>
                    <div className={style.overviewColumn}>{value.overview}</div>
                </Td>
                <Td>{value.release_date}</Td>
                <Td isNumeric>{value.vote_average}</Td>
                <Td>{value.adult ? 'Yes' : 'No'}</Td>
            </Tr>
        </>
    )
}