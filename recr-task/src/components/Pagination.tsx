import { useTableContext } from "../contexts/TableContext"
import { Input } from '@chakra-ui/react'
import './Pagination.module.css'

export const Pagination = () => {
    const { page, setPage } = useTableContext();
    return (
        <>
            <div>Page {page} from 500</div>
            <form>
                <label htmlFor="page">Type page number:</label>
                <Input
                    min="1"
                    max="500"
                    width='4rem'
                    type="number" 
                    name="page"
                    id="page"
                    value={page}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPage(Math.abs(Number(e.target.value)))} />
            </form>
        </>
    )
}