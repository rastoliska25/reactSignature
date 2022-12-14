import axios from 'axios';
import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

class App extends Component {

    state = {

        selectedFile: null
    };

    onFileChange = event => {

        this.setState({ selectedFile: event.target.files[0] });

    };


    onFileUpload = () => {

        let documentId = getRandomInt(9999999);

        const formData = new FormData();

        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);

        axios.post("http://localhost:8080/receivePdf/" + documentId, formData);

        alert('The file has been uploaded successfully.');
        window.location.href = '/links/' + documentId;
    
    };

    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>

                    <p>File Name: {this.state.selectedFile.name}</p>


                    <p>File Type: {this.state.selectedFile.type}</p>


                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {

        return (
            <div>
                <h1>
                    PDF Upload
                </h1>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export default App;
