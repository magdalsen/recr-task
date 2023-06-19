import { Input } from '@chakra-ui/react'

import { useTableContext } from "../../contexts/TableContext"

import './Pagination.module.css'

export const Pagination = () => {
    const { page, setPage } = useTableContext();
    const regex = /^[0-9]+$/

    return (
        <>
            <div>Page {page} from 500</div>
            <form>
                <label htmlFor="page">Type page number:</label>
                <Input
                    width='4rem'
                    type="number" 
                    name="page"
                    id="page"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => regex.test(e.target.value) && e.target.value !== null || Number(e.target.value) >= 500 || Number(e.target.value) <= 0 ? setPage(Number(e.target.value)) : alert('Data must be between 1 and 500!')} />
            </form>
        </>
    )
}