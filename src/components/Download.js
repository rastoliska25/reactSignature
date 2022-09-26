import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Button } from '@material-ui/core';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const onFileDownload = () => {

    window.location.href = 'http://localhost:8080/downloadPdf/123';

    alert('The file has been downloaded successfully.');

    window.location.href = '/upload';
};

export default function Download() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }

    return (

        <Container>
            <h1>Download</h1>

            <button onClick={onFileDownload}>
                Download!
            </button>
        </Container>
    );
}