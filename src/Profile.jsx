import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './profile.css'
export default function App() {

    return (
        <>
            <body>
                <div class="profile-container">
                    <div class="profile-header">
                        <img src="assets/todo.png" alt="Profile Picture" class="profile-image">
                            <h1 class="profile-name">ToDo</h1>
                            <p class="profile-bio">A todo app in React to list tasks with due date, having features to add, edit and delete them.</p>
                    </div>
                    <div class="profile-content">
                        <div class="profile-card">
                            <h2>Design</h2>
                            <p>User friendly UI</p>
                        </div>
                        <div class="profile-card">
                            <h2>Add / Edit</h2>
                            <p>Features to edit the task later.</p>
                        </div>
                        <div class="profile-card">
                            <h2>Delete</h2>
                            <p>An option to delete the task.</p>
                        </div>
                        <div class="profile-card">
                            <h2>Usage</h2>
                            <p>npm i <br/>  npm run dev</p>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

