import React, { Component } from 'react';
import '../App.css';
import Select from '../elements/Select';

// function components
function Card(props) {
    return (
        <div>
            <br></br>
            <img src={props.foto} alt="Foto" width="200" height="200"/>
            <h3>{props.nama}</h3>
            <p>{props.nim}</p>
            <Select border="blue">
                <option selected disabled>Kelas</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
            </Select>
        </div>
    );
}

// class components
export default class CompAndProps extends Component {
    render() {
        const background = {
            backgroundColor: this.props.bgcolor
        }
        return (
            <div className="wrapper">
                <div className="User-info" style={background}>
                    <Card foto="https://i.imgur.com/VVxXCbo.png" nama="Akhmad Arief W" nim="21120117130079" />
                </div>
                <div className="User-info" style={background}>
                    <Card foto="https://i.imgur.com/B55dEWU.png" nama="Ramadhani BSN" nim="21120117120021" />
                </div>
            </div>
        )
    }
}