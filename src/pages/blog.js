// Step 1: Import React
import * as React from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'

// Step 2: Define your component
const BlogPage = () => {
    return (
        <main>
            <Layout>
            <title>Miles Cunningham</title>
            <h1>This is the Blog Page</h1>
            <Link to="/">Back to Home</Link>
            </Layout>
        </main>
    )
}
// Step 3: Export your component
export default BlogPage