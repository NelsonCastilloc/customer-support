import { useState , useEffect } from 'react'
import * as API from '../Services/Api'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'

export function Queues(params) {
    const [queues, setQueues] = useState(null)

    useEffect( () => {
        API.getCustomerList().then(response => {
            setQueues(response.data)
        })
    }, [])

    return(
        <>
        
        <br />
        <br />
        <h3>Cola 1</h3>
        <Grid container>
            <Grid item xs={9}>    
                <Grid container spacing={2}>
                    {queues && queues.map( item => 
                        (!item.attention_start && item.queue_number == 1) && 
                            <Grid item xs={2} key={item.customer_id}>
                                <Card sx={{ width: 115, height: 125 , backgroundColor: "#ffda9e" }} elevation={10} key={item.customer_id}>
                                    <CardContent key={item.customer_id}>
                                        <Typography gutterBottom variant="h6" component="div" key={`id-${item.customer_id}`}>
                                            {item.customer_id}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" key={`name-${item.customer_id}`}>
                                            {item.customer_name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>        
                        )
                    }
                </Grid>
            </Grid>
            <Grid item xs={3}>    
                <Grid container spacing={2} justifyContent="center">
                    {queues && queues.map( item => 
                        (item.attention_start && item.queue_number == 1) && 
                            <Grid item xs={2} key={item.customer_id}>
                                <Card sx={{ width: 115, height: 125, backgroundColor: "#b2e2f2"  }} elevation={10} key={item.customer_id}>
                                    <CardContent key={item.customer_id}>
                                        <Typography gutterBottom variant="h6" component="div" key={`id-${item.customer_id}`}>
                                            {item.customer_id}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" key={`name-${item.customer_id}`}>
                                            {item.customer_name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>        
                        )
                    }
                </Grid>
            </Grid>
        </Grid>

        <br />
        <br />
        <h3>Cola 2</h3>
        <Grid container>
            <Grid item xs={9}>    
                <Grid container spacing={2}>
                    {queues && queues.map( item => 
                        (!item.attention_start && item.queue_number == 2) && 
                            <Grid item xs={2} key={item.customer_id}>
                                <Card sx={{ width: 115, height: 125, backgroundColor: "#ffda9e" }} elevation={10} key={item.customer_id}>
                                    <CardContent key={item.customer_id}>
                                        <Typography gutterBottom variant="h6" component="div" key={`id-${item.customer_id}`}>
                                            {item.customer_id}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" key={`name-${item.customer_id}`}>
                                            {item.customer_name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>        
                        )
                    }
                </Grid>
            </Grid>
            <Grid item xs={3}>    
                <Grid container spacing={2} justifyContent="center">
                    {queues && queues.map( item => 
                        (item.attention_start && item.queue_number == 2) && 
                            <Grid item xs={2} key={item.customer_id}>
                                <Card sx={{ width: 115, height: 125 , backgroundColor: "#b2e2f2" }} elevation={10} key={item.customer_id}>
                                    <CardContent key={item.customer_id}>
                                        <Typography gutterBottom variant="h6" component="div" key={`id-${item.customer_id}`}>
                                            {item.customer_id}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" key={`name-${item.customer_id}`}>
                                            {item.customer_name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>        
                        )
                    }
                </Grid>
            </Grid>
        </Grid>

        </>
    )
}