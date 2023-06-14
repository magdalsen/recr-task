import { useTableContext } from "../contexts/TableContext";
import { Link, useParams } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

export const Collections = () => {
    const { id, collId } = useParams();
    const { coll } = useTableContext();
    console.log(coll);
    
    return (
        <>
            Get more collection details:
            <Link to={`/movie/${id}/collection/${collId}/details`}>
                <Button>Details</Button>
            </Link>
            <Link to={`/movie/${id}`}>
                <Button>Back</Button>
            </Link>
        </>
    )
}