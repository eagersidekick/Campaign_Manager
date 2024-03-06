import React from 'react';
// import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import '/src/App.css';

export default function Settings() {
    return (
        <div className="column is-one-fourth tile is-child box">
            <div className='section'>
            <p className="subtitle center">Settings Bar</p>

                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio necessitatibus adipisci, eligendi magnam alias sequi possimus quas iusto, placeat natus quam obcaecati, repudiandae suscipit ipsa soluta deleniti nostrum eos!</p> */}
                    <p className='list-item'>Player One</p>
                    <p className='list-item'>Player Two</p>
                    <p className='list-item'>Player Three</p>
                    <p className='list-item'>Player Four</p>
                    <p className='list-item'>First NPC</p>
                    <p className='list-item'>Other NPC</p>
                </div>
            </div>
    );
}