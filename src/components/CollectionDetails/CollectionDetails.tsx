import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

import { fetchCollectionDetails } from '../../api/api';

import style from './CollectionDetails.module.css'

interface CollectionDetailsInterface {
    id: number;
    name: string;
    overview: string;
    parts: {
        original_title: string;
        overview: string;
        vote_average: number;
        popularity: number;
        release_date: string;
    }[];
}

const CollectionDetails = () => {
    const { id ,collId } = useParams();
    const [collectionDetails, setCollectionDetails] = useState<CollectionDetailsInterface>();

    useEffect(()=>{
        fetchCollectionDetails(collId).then((collectionDetails)=>setCollectionDetails(collectionDetails));
    }, [])    
    
    return (
        <>
            <div className={style.detailsCollection}>
                <div className={style.detailsCollectionName}>
                    <div className={style.detailsCollectionHeader}>Name:</div>
                    <div>{collectionDetails?.name}</div>
                </div>
                <div className={style.detailsCollectionOverview}>
                    <div className={style.detailsCollectionHeader}>Overview:</div>
                    <div>{collectionDetails?.overview}</div>
                </div>
                <div>{collectionDetails?.parts.map((el)=>(
                    <div className={style.detailsCollectionParts} key={el.original_title}>
                        <div className={style.detailsCollectionTitle}>
                            <div className={style.detailsCollectionHeader}>Original title:</div>
                            <div>{el.original_title}</div>
                        </div>
                        <div className={style.detailsCollectionOverviewColl}>
                            <div className={style.detailsCollectionHeader}>Overview:</div>
                            <div>{el.overview}</div>
                        </div>
                        <div className={style.detailsCollectionPopulatirty}>
                            <div className={style.detailsCollectionHeader}>Popularity:</div>
                            <div>{el.popularity}</div>
                        </div>
                        <div className={style.detailsCollectionReleaseDate}>
                            <div className={style.detailsCollectionHeader}>Release date:</div>
                            <div>{el.release_date}</div>
                        </div>
                        <div className={style.detailsCollectionVoteAverage}>
                            <div className={style.detailsCollectionHeader}>Vote average</div>
                            <div>{el.vote_average}</div>
                        </div>
                    </div>
                ))}</div>
            </div>
            <Link to={`/${id}/${collId}`}>
                <Button type='button'>Back</Button>
            </Link>
        </>
    )
}

export default CollectionDetails