import { Button, CardActions, CardContent, DialogContent, DialogContentText, Dialog, DialogActions, DialogTitle, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React, { Fragment, useState } from "react";
import { getMatchesDetail } from '../API/API';

const MyCard = ({ match }) => {
    const [detail, setDetails] = useState([]);
    const [open,setOpen] = useState(false);
    
    const handleClick = (id) => {
        //alert(id);
        getMatchesDetail(id)
            .then(data => {
                console.log("Match Data",data.data);
                setDetails(data.data);
                handleOpen();
            })
            .catch(err => console.log(err));
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const MatchNotStarted = () => {
        return (
            <Typography>Teams: {detail["teams"][0]} v/s {detail["teams"][1]} </Typography>
        );
    }
    const MatchStarted = ()=> {
        return (
            <Fragment>
                <Typography>Scores:</Typography>
                <Typography>{detail["teams"][0]}-{detail["score"][0]}</Typography>
                <Typography>{detail["teams"][1]}-{detail["score"][1]}</Typography>
            </Fragment>
        );
    }
    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Details..."}</DialogTitle> 
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>Status: {detail.status}</Typography>
                    <Typography>Venue: {detail.venue}</Typography>
                    {(detail.status==="Match not started")? <MatchNotStarted/>:<MatchStarted/>}
                </DialogContentText>
          </DialogContent> 
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Close
            </Button>
        </DialogActions>   
        </Dialog>
    )
    const getMatchCard = () => {
        return (
            <Card variant='outlined' sx={{mt: 2}}>
                <CardContent>
                    <Grid container justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant='h5'>{match["t1"]}</Typography>
                        </Grid>
                        <Grid item>
                            <img  style={{width:150}} src={require("../images/vs.jpg")} alt=""></img>
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'>{match["t2"]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Button onClick={()=>{
                                handleClick(match['id'])
                            }} variant='contained' color='primary'>
                                Show Details
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' color='primary'>
                                Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        )
    }
    return (
        <Fragment>
            {getMatchCard()}
            {getDialog()}
        </Fragment>
    );
};

export default MyCard;