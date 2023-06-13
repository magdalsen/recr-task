import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer
  } from '@chakra-ui/react'
import { MovieData, TableData } from "./TableData"
import { useTableContext } from "../contexts/TableContext";

export const Tables = () => {
    const { movies } = useTableContext();

    return (
        <>
            <TableContainer>
                <Table border={"style: 1px solid black;"} variant='simple'>
                    <TableCaption>Only good movies!</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Mark</Th>
                        <Th>Title</Th>
                        <Th>Poster</Th>
                        <Th>Overview</Th>
                        <Th>Release date</Th>
                        <Th isNumeric>Vote average</Th>
                        <Th>Adult</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        <>
                            {movies.map((el:MovieData)=>(
                                <TableData {...el} key={el.id} />
                            ))}
                        </>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}