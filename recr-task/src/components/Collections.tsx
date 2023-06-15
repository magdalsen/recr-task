import { useTableContext } from "../contexts/TableContext";
import { Link, useParams } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

export const Collections = () => {
    const { id, collId } = useParams();
    const { coll } = useTableContext();
    console.log(coll);
    
    return (
        <>
            tutaj dać to co daje coll
            Get more collection details:
            <Link to={`/${id}/${collId}/details`}>
                <Button>Details</Button>
            </Link>
            <Link to={`/${id}`}>
                <Button>Back</Button>
            </Link>
        </>
    )
}