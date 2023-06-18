import { Link } from 'react-router-dom'
import {
    Button,
    Td,
    Tr  } from '@chakra-ui/react'

import style from './TableDetails.module.css'

export const TableDetails = ({...value}) => {
    const rows = [
        {
            label: "Title:",
            accessor: value.original_title
        },
        {
            label: "Original language:",
            accessor: value.original_language
        },
        {
            label: "Release date:",
            accessor: value.release_date
        },
        {
            label: "Popularity:",
            accessor: value.popularity
        },
        {
            label: "Vote average:",
            accessor: value.vote_average
        },
        {
            label: "Vote count:",
            accessor: value.vote_count
        }
]

    return (
        <>
            <Tr>
                <Td colSpan={7}>
                    <div className={style.detailTable}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/original${value.poster_path}`} alt="poster" className={style.poster} />
                        </div>
                        <div className={style.detailTable_all}>
                            {rows.map((el)=>(
                                <div key={el.label} className={style.detailTable_info}><span>{el.label}</span> {el.accessor}</div>
                            ))}
                        </div>
                    </div>
                    <div className={style.detailsButton}>
                        <Link to={`/${value.id}`}>
                            <Button type='button' colorScheme='blue'>Show details</Button>
                        </Link>
                    </div>
                </Td>
            </Tr>
         </>
    )
    }