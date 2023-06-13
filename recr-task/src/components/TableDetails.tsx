import { useParams, Link } from 'react-router-dom'
import { useTableContext } from '../contexts/TableContext'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button
  } from '@chakra-ui/react'
import style from './TableDetails.module.css'

export const TableDetails = () => {
    const { id } = useParams();
    const { movies } = useTableContext();
    return (
        <>
            {movies.map((el)=>(
                el.id === Number(id) ? 
                    <>
                        <TableContainer>
                            <Table variant='striped' colorScheme='teal'>
                                <Thead>
                                    <Tr>
                                        <Th></Th>
                                        <Th>Movie details</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td maxWidth={400}><img src={`https://image.tmdb.org/t/p/original${el.poster_path}`} alt="poster" /></Td>
                                        <Td>
                                            <Tr>
                                                <Td>Title</Td>
                                                <Td>{el.original_title}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Original language</Td>
                                                <Td>{el.original_language}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Release date</Td>
                                                <Td>{el.release_date}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Popularity</Td>
                                                <Td>{el.popularity}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Vote average</Td>
                                                <Td>{el.vote_average}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>Vote count</Td>
                                                <Td>{el.vote_count}</Td>
                                            </Tr>
                                        </Td> 
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </> : <></>
            ))}
            <Link to={'/'}>
                <Button type='button' className={style.backButton}>Back</Button>
            </Link>
        </>
    )
}