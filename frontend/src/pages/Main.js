import React from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import iconLike from '../assets/like.svg';
import iconDislike from '../assets/dislike.svg';

export default function Main({match}){
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/6994181?v=4" alt=""/>
                    <footer>
                        <strong>Renato W Schlogel</strong>
                        <p>Analista de Sistemas </p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={iconDislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={iconLike} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/6994181?v=4" alt=""/>
                    <footer>
                        <strong>Renato W Schlogel</strong>
                        <p>Analista de Sistemas </p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={iconDislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={iconLike} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/6994181?v=4" alt=""/>
                    <footer>
                        <strong>Renato W Schlogel</strong>
                        <p>Analista de Sistemas </p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={iconDislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={iconLike} alt="Like"/>
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/6994181?v=4" alt=""/>
                    <footer>
                        <strong>Renato W Schlogel</strong>
                        <p>Analista de Sistemas </p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={iconDislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={iconLike} alt="Like"/>
                        </button>
                    </div>
                </li>
            </ul>

        </div>
    );
}