import {
    Tr,
    Td
  } from '@chakra-ui/react'
import style from './TableDetails.module.css'

export const TableDetails = ({...value}) => {
    return (
        <>
                    <Tr>
                        <Td colSpan={7}>
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
                                </div>
                            </div>
                        </Td>
                    </Tr>
        </>
    )
}