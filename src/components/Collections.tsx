import { Link, useParams } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

import { useTableContext } from "../contexts/TableContext";

import style from './Collections.module.css'

export const Collections = () => {
    const { id, collId } = useParams();
    const { coll } = useTableContext();
    
    return (
        <>
            <div className={style.collectionTable}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/original${coll?.belongs_to_collection.poster_path}`} alt="collection_poster" className={style.poster} />
                </div>
                <div className={style.collectionTableLink}>
                    <div className={style.collectionTableName}>Belongs to collection:</div>
                    <Link to={`/${id}/${collId}/details`}>
                        <button className={style.collectionTableNameButton}>{coll?.belongs_to_collection.name}</button>
                    </Link>
                </div>
                <div className={style.collectionTableBudget}>
                    <div className={style.collectionTableName}>Budget:</div>
                    <div>{coll?.budget} $</div>
                </div>
                <div className={style.collectionTableStatus}>
                    <div className={style.collectionTableName}>Status:</div> 
                    <div>{coll?.status}</div>
                </div>
                <div className={style.collectionTableCompanies}>
                    <div className={style.collectionTableName}>Production companies:</div>
                    {coll?.production_companies.map((el)=>(
                    <div key={el.name}>{el.name}</div>
                ))}</div>
                <div className={style.collectionTableCountries}>
                    <div className={style.collectionTableName}>Production countries:</div>
                    {coll?.production_countries.map((el)=>(
                    <div key={el.name}>{el.name}</div>
                ))}</div>
            </div>
            <Link to={`/${id}`}>
                <Button>Back</Button>
            </Link>
        </>
    )
}