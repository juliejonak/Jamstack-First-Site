import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Lambda Team</h1>
    <p>We're ready to rock the Jamstack Hack</p>
    <p>Building something great...</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
