import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Button } from '@material-ui/core';
import axios from 'axios';
import { Routes, Route, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const OnFileDownload = () => {

    let { linkId } = useParams();
    console.log(linkId);

    //window.location.href = 'http://localhost:8080/downloadPdf/' + linkId;

    alert('The file has been downloaded successfully.');

    //window.location.href = '/upload';
};

export default function Download() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }

    return (

        <Container>
            <h1>Download</h1>

            <button onClick={OnFileDownload}>
                Download!
            </button>
        </Container>
    );
}