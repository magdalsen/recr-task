import { useParams } from 'react-router-dom'

export const TableDetails = () => {
    const { id } = useParams();
    return (
        <>
            <div>hejka {id}</div>
        </>
    )
}