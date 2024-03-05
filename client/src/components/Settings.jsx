import React from 'react';
// import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

export default function Settings() {
    return (
        <div className="column is-one-fifth">
            <p className="subtitle">Settings Bar</p>
            <div className='section'>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio necessitatibus adipisci, eligendi magnam alias sequi possimus quas iusto, placeat natus quam obcaecati, repudiandae suscipit ipsa soluta deleniti nostrum eos!</p> */}
                <div className='list'>
                    <p className='list-item'>Player One</p>
                    <p className='list-item'>Player Two</p>
                    <p className='list-item'>Player Three</p>
                    <p className='list-item'>Player Four</p>
                    <p className='list-item'>First NPC</p>
                    <p className='list-item'>Other NPC</p>
                </div>
            </div>
        </div>
    );
}