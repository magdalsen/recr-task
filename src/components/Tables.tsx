import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr  } from '@chakra-ui/react'

import { useTableContext } from "../contexts/TableContext";

import { Pagination } from './Pagination';
import { MovieData, TableData } from "./TableData"

import style from './Tables.module.css'

export const Tables = () => {
    const { movies } = useTableContext();

    return (
        <>
            <Pagination />
            <TableContainer>
            <div style={{overflow: "auto"}}>
                <Table variant='simple'>
                    <TableCaption>Only good movies!</TableCaption>
                    <Thead>
                    <Tr>
                        <Th className={style.markColumn}>Mark</Th>
                        <Th>Title</Th>
                        <Th className={style.posterColumn}>Poster</Th>
                        <Th>Overview</Th>
                        <Th className={style.releaseDateColumn}>Release date</Th>
                        <Th isNumeric className={style.voteAverageColumn}>Vote average</Th>
                        <Th>Adult</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        <>
                            {movies ? movies.map((el:MovieData)=>(
                                <TableData {...el} key={el.id} />
                            )) : <div>
                                    Bad data. Try again.
                                </div>}
                        </>
                    </Tbody>
                </Table>
                </div>
            </TableContainer>
        </>
    )
}