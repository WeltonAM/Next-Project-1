import { useState } from "react";

export default function useTableOrForm(){
    const [show, setShow] = useState<'table' | 'form'>('table')

    const showTable = () => setShow('table')
    const showForm = () => setShow('form')

    return {
        formVisible: show === 'form',
        tableVisible: show === 'table',
        showTable,
        showForm,
    }
}