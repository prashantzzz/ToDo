import React from 'react';
import Todo_img from './assets/todo.png'
import './assets/styles.css'
export default function About() {
    return (
        <>
            <body>
                <div class="profile-container">
                    <div class="profile-header">
                        <img src={Todo_img} alt="Profile Picture" class="profile-image"/>
                            <h1 class="profile-name">About Page</h1>
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
                        
                    </div>
                </div>
            </body>
        </>
    );
}

