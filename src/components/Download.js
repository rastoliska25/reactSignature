import React, { useRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import SignaturePad from "react-signature-canvas";
import axios from 'axios';
import { Routes, Route, useParams } from 'react-router-dom';

const Download = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    let { linkId } = useParams();
    console.log(linkId);

    const downloadFile = () => {
        var m = window.confirm("Want to download file?");
        if (m) {

            window.location.href = 'http://localhost:8080/downloadPdf/' + linkId;

            alert('The file has been downloaded successfully.');

            window.location.href = '/upload';
        }
    };

    return (
        <div>
            <h3>Download File</h3>
            <div>
                <button onClick={downloadFile}>Download File</button>
            </div>
        </div>
    );
};

export default Download;