import React, {useEffect} from "react";
import logo from "../../logo.svg";
import {Link} from "react-router-dom";
import * as ROUTES from "../constants/routes";

import * as FirestoreService from '../services/firestore';
import {DB_PATH_DONATIONS, DB_PATH_MAGAZINES} from '../services/collections'

const Home = () => {

    useEffect(() => {
         FirestoreService.getDocs(DB_PATH_MAGAZINES)
            .then((docs) => {
                console.log(docs);
            })
            .catch((error) => {
                console.error(error);
            })
    }, []);

    return (
        <div>
            <footer className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Link to={ROUTES.EVENTS}>Sign Up</Link>
            </footer>
        </div>
    )
}

export default Home;
