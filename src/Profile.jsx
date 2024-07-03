import React from 'react';
import Todo_img from './assets/profile.jpg'
import './assets/styles.css'
export default function Profile() {
    return (
        <>  
            <body>
                <div className="profile-container">
                    <div className="profile-header">
                        <img src={Todo_img} alt="Profile Picture" className="profile-image"/>
                            <h1 className="profile-name">ToDo Profile Page</h1>
                            <p className="profile-bio">A todo app in React to list tasks with due date, having features to add, edit and delete them.</p>
                    </div>
                    <div className="profile-content">
                        <div className="profile-card">
                            <h2>Design</h2>
                            <p>User friendly UI</p>
                        </div>
                        <div className="profile-card">
                            <h2>Add / Edit</h2>
                            <p>Features to edit the task later.</p>
                        </div>
                        <div className="profile-card">
                            <h2>Delete</h2>
                            <p>An option to delete the task.</p>
                        </div>
                        <div className="profile-card">
                            <h2>Usage</h2>
                            <p>npm i <br/>  npm run dev</p>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

