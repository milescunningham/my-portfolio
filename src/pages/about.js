// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <title>Miles Cunningham</title>
            <h1>About Me</h1>
            <p>Miles Cunningham is from Little Silver, New Jersey and is a student at the University of South Carolina in Columbia, South Carolina. He is currently enrolled in the College of Undergraduate Studies as he looks to determine what course of study he would like to pursue.</p>
            <Link to="/index">Home</Link>
        </main>
    )
}
// Step 3: Export your component
export default AboutPage