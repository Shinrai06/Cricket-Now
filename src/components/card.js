import { Button, CardActions, CardContent, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from "react";

const MyCard = ({ match }) => {
    const getMatchCard =() => {
        return (
            <Card>
                <CardContent>
                    <Grid container justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant='h5'>Team A</Typography>
                        </Grid>
                        <Grid item>
                            <img  style={{width:150}} src={require("../images/vs.jpg")}></img>

                        </Grid>
                        <Grid item>
                            <Typography variant='h5'>Team B</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Button variant='contained' color='primary'>
                                Show Details
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='primary'>
                                {new Date().toString()};
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        )
    }
    return getMatchCard();
};

export default MyCard;