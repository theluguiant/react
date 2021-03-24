import { makeStyles } from "@material-ui/core";

const centeredStyleOb = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default makeStyles({
    container:{
        height: '100vh',
        flexDirection: 'column',
        ...centeredStyleOb
    },
    cardContainer: {
        flexDirection: 'column',
        width: 400,
        height: 200,
        padding: '2rem',
        ...centeredStyleOb
    },
    title: {
        fontSize: '4rem'
    },
    titleGridContainer: {
        ...centeredStyleOb
    },
    textFieldSearch: {
        width: '90%'
    },
    searchButton: {
        marginLeft: '.5rem'
    },
    buttonsContainer:{
        marginTop:'.5rem'
    }
})