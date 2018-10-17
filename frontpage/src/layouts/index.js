import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../icon/favicon.png'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
      meta={[
        { name: 'description', content: 'A Rust framework for building modern, concurrent and resilient applications' },
        { name: 'keywords', content: 'rust, actors, cqrs, event sourcing' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
