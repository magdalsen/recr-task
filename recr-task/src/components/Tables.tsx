import { useEffect, useState } from "react";
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

export const Tables = () => {
    const [movies, setMovies] = useState<MovieData[]>([]);
    
    const fetchData = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDE3NzU3Njk3MWM4ZDI1MDgxNmM1ZmNkNWNhYzYwMCIsInN1YiI6IjYwODdiZGE1OGQyMmZjMDA3NzI2MGJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hw5OGt80BF43_iUo9e6cjSCU2UoOXpBQHnRri6Rq3qY'
            }
          };
          
          fetch('https://api.themoviedb.org/3/account/10436005/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovies(response.results);
            })
            .catch(err => console.error(err));
    };

    useEffect(()=>{
        fetchData();
    }, []);

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
                            {movies.map((el)=>(
                                <TableData {...el} key={el.id} />
                            ))}
                        </>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}