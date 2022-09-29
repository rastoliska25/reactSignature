import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Overview() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/overviewData")
            .then(res => res.json())
            .then((result) => {
                setDocuments(result);
            }
            )
    }, [])

    return (
        <Container>
            <h1>Documents</h1>

            <Paper elevation={3} style={paperStyle}>

                {documents.map(document => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={document.id}>
                        first signed: {document.firstSignature}<br />
                        second signed: {document.secondSignature}<br />
                        <a href={document.signatureOne}>First Link</a>
                        <br></br>
                        <a href={document.signatureTwo}>Second Link</a>

                    </Paper>
                ))
                }

            </Paper>
        </Container>
    );
}