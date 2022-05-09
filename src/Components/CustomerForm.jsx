import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'
import * as API from '../Services/Api'

export function CustomerForm (props) {

    const [idValue, setIdValue] = useState("")
    const [nameValue, setNameValue] = useState("")

    const getIdValue = (ev) => {
        setIdValue(ev.target.value)
    }
    const getNameValue = (ev) => {
        setNameValue(ev.target.value)
    }
    const SendData = (id, name) => {
        API.customerCreate(id, name).then(response => {
            if (response.result === 'success') {
                props.itemCreated()
                setIdValue("")
                setNameValue("")
            }
        })
    }

    return(
    <>
        <Grid container>
            <Grid item xs={8}>
            <form onSubmit={ev=>{
                ev.preventDefault()
                SendData(idValue,nameValue)
                
            }}>
                <Box
                    
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField 
                        id="customer_id" 
                        label="ID" 
                        variant="outlined" 
                        name="customer_id" 
                        value={idValue}
                        onChange={getIdValue}/>
                    <TextField 
                        id="customer_id" 
                        label="Nombre" 
                        variant="outlined" 
                        name="customer_name" 
                        value={nameValue} 
                        onChange={getNameValue}/>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        size="large" 
                        sx={{p:1.8}}>Enviar</Button>
                </Box>
                </form>
            </Grid>
            <Grid item xs={4}>
                <Grid 
                    container>
                        <Grid item>
                            <Typography variant="body2" gutterBottom sx={{p:3}}>
                                Por favor, registrese para ser antendido
                            </Typography>
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
        
        
    </>);
}