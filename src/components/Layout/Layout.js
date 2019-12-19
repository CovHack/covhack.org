import React from 'react'
import Helmet from 'react-helmet'

import { Header, Footer, useSiteMetadata } from '..'

import '../../scss/theme.scss'
import '../../scss/styles.scss'
import './Layout.scss'

export const Layout = ({ children, titleOverride, clearBadge }) => {
  const { title, description } = useSiteMetadata()
  const displayTitle = titleOverride || title

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{displayTitle}</title>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />

        <meta name="theme-color" content="#2800ee" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/social-media-card.jpg" />
        <meta property="twitter:card" content="/social-media-card.jpg" />

        <script src="https://js.tito.io/v1" async></script>

        <link
          rel="stylesheet"
          href="https://indestructibletype.com/fonts/Jost.css"
          type="text/css"
          charset="utf-8"
        />
      </Helmet>

      <div className="site">
        <Header clearBadge={clearBadge} />

        <div className="site-content">{children}</div>

        <Footer />
      </div>
    </div>
  )
}
