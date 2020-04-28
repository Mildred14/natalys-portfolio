import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about/about'
import Landing from '../components/landing/landing'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="MILDRED SILVA" />
    <div>
      <Landing klass="container-wrap" />
      <About klass="container-wrap" />
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
