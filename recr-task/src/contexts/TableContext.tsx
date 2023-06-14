import { createContext, useEffect, useState } from "react";

import { getSafeContext } from "./getSafeContext";
import { MovieData } from "../components/TableData";

type TableContextProps={
    movies: MovieData[];
}

export const TableContext=createContext<TableContextProps|null>(null)

export const TableProvider = ({ children }: { children: React.ReactNode }) => {
    const [movies, setMovies] = useState<MovieData[]>([]);
    
    const fetchData = () => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDE3NzU3Njk3MWM4ZDI1MDgxNmM1ZmNkNWNhYzYwMCIsInN1YiI6IjYwODdiZGE1OGQyMmZjMDA3NzI2MGJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hw5OGt80BF43_iUo9e6cjSCU2UoOXpBQHnRri6Rq3qY'
          }
        };
        
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
          .then(response => response.json())
          .then(response => {
            console.log(response)
            setMovies(response.results)
          })
          .catch(err => console.error(err));
    };
    useEffect(()=>{
        fetchData();
    }, []);

    return (
      <TableContext.Provider value={{ movies }}>
        {children}
      </TableContext.Provider>
    );
  };

  export const useTableContext = getSafeContext(TableContext, "tableContext")