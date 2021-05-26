import React from 'react'
import { Table } from '@material-ui/core'

export default function viewTable(records, headCells) {
    
    const TblContainer = props => (
        <Table>
            {props.children}
        </Table>
    )
    
    return {
        TblContainer
    }    
}