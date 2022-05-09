import { CustomerForm } from "./CustomerForm"
import { Queues } from "./Queues"
import { Container } from "@mui/material"
import { Divider } from "@mui/material"
import { useEffect, useState } from "react"
import * as API from '../Services/Api'
import { Typography } from "@mui/material"

export function Maincontainer(params) {

    const [toRefresh, setToRefresh] = useState(true)
    const itemCreated = () => {
        setToRefresh(false)
    }
    useEffect( () => {
        setToRefresh(true)
    },[toRefresh])

    useEffect( () => {
        setInterval( () => {
            API.customerUpdate().then(response => {
                if (response.result === 'success' && response.data.updated === true) {
                    setToRefresh(false)
                }})
        }, 5000)
    },[])

    return (
        <>
            <Container>
                <br />
                <Typography variant="h3" gutterBottom component="div">
                    Atención al Cliente
                </Typography>
                <br />
                <br />
                <CustomerForm itemCreated={itemCreated} />
                <br />
                <br />
                <Divider variant="middle" />
                {toRefresh && <Queues />}
            </Container>
        </>
    );
}
