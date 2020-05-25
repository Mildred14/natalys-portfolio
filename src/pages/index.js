import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about/about'
import Experience from '../components/experience/experience'
import Landing from '../components/landing/landing'
import Profile from '../components/profile/profile'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="MILDRED SILVA" />
    <div>
      <Landing klass="container-wrap container-size" />
      <Profile />
      <About klass="container-wrap container-size" />
      <Experience klass="container-wrap container-size" />
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
