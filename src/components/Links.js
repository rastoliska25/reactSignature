import React, { useEffect, useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Button } from '@material-ui/core';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Overview() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [document, setDocument] = useState([])

    let { linkId } = useParams();
    console.log(linkId);

    useEffect(() => {
        console.log('test');
        fetch("http://localhost:8080/links/" + linkId)
            .then(res => res.json())
            .then((result) => {
                setDocument(result);
            }
            )
    }, [])
    return (

        <Container>
            <h1>Documents</h1>

            <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={document.id}>
                        first signature link: {document.signatureOne}<br />
                        second signature link: {document.signatureTwo}<br />
                    </Paper>
                
            </Paper>
        </Container>
    );
}