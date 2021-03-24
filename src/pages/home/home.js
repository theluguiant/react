import React, { useEffect } from 'react';
import { useForm } from '../../core/hooks/useForm';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';
import styles from './../../makeStyle';
import {apiCall} from '../../core/redux/api/index';
import { useSelector, useDispatch } from 'react-redux';
import { searchMovie } from '../../core/redux/actions/search';
import { movieResults,isSearchingLoading } from '../../core/redux/selectors';


const Home = () => {

    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchingLoading(state));
    const dispatch = useDispatch();

    const [formValues, handlerInputChange] = useForm({
        search: ''
    });

    

    const classes = styles();

    const { search } = formValues;

    useEffect(() => {
        if (search && !movies) {
           console.log(search); 
          dispatch(searchMovie({ search }));
        }
    }, search);

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        dispatch(searchMovie({ search }));
    }

    const handlerClear = (e) =>{
        e.preventDefault();
       
        const event={
            target: {
                name: 'search',
                value: ''
            }
        }
       
        handlerInputChange(event);
       
        console.log("limpiar");
    }

    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>Bienvenidos</Typography>
                    </Grid>
                    <Grid>
                        <label>Icon</label>
                    </Grid>
                </Grid>
                <TextField
                    name="search"
                    autoComplete="off"
                    className={classes.textFieldSearch}    
                    value={search}
                    placeholder="Buscar...."
                    onChange={handlerInputChange}/>
                <Grid className={classes.buttonsContainer}>
                    <Button variant="contained" type="button" onClick={handlerClear}>Limpiar</Button>
                    <Button className={classes.searchButton} variant="contained"  type="button" color="primary" size="large" onClick={handlerSubmit}>Search</Button>
                </Grid>
            </Card>


        </Container>
    );
}

export default Home;
