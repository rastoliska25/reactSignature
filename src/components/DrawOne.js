import React, { useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import axios from 'axios';
import { Routes, Route, useParams } from 'react-router-dom';

const Signature = () => {
    const [imageURL, setImageURl] = useState(null);

    const sigCanvas = useRef({});
    const clear = () => sigCanvas.current.clear();

    const save = () =>
        setImageURl(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

    let { linkId } = useParams();
    console.log(linkId);

    const saveToBackend = () => {
        var m = window.confirm("Want to sign?");
        if (m) {

            sigCanvas.current.getTrimmedCanvas().toBlob(function (blob) {
                const formData = new FormData();
                formData.append('file', blob, 'image.png');

                axios.post('http://localhost:8080/receiveImageOne/' + linkId, formData);

                window.location.href = '/download/' + linkId;

            });
        }
    };

    return (
        <div>
            <h3>Signature Pad</h3>
            <div>
                <SignaturePad
                    ref={sigCanvas}
                    canvasProps={{ className: "signatureCanvas" }}
                />
                <button onClick={clear}>Clear</button>
                <button onClick={saveToBackend}>SaveToBackend</button>
            </div>
        </div>
    );
};

export default Signature;