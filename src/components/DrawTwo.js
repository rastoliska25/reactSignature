import React, { useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import axios from 'axios';

const Signature = () => {
    const [imageURL, setImageURl] = useState(null);

    const sigCanvas = useRef({});
    const clear = () => sigCanvas.current.clear();

    const save = () =>
        setImageURl(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

    const saveToBackend = () => {
        var m = window.confirm("Want to sign?");
        if (m) {

            sigCanvas.current.getTrimmedCanvas().toBlob(function (blob) {
                const formData = new FormData();
                formData.append('file', blob, 'image.png');

                axios.post('http://localhost:8080/receiveImageTwo/123', formData);

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
                <button onClick={save}>Save</button>
                <button onClick={saveToBackend}>SaveToBackend</button>
            </div>
            {imageURL ? (
                <img
                    src={imageURL}
                    alt="Sign"
                    style={{
                        display: "block",
                        width: "150px",
                        minHeight: "50px",
                        border: "1px solid #000"
                    }}
                />
            ) : null}
        </div>
    );
};

export default Signature;