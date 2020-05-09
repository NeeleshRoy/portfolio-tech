import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Switch, Route } from 'react-router-dom'
import { initMenu } from '../../menu'
import { Image } from 'react-bootstrap'

export class Nav extends Component {
  componentDidMount () {
    initMenu()
  }

  render () {
    const { routes } = this.props
    return (
      <div>
        <div id="perspective" className="perspective effect-moveleft">
          <div className="container-perspective">
            <div className="wrapper">
              <div className="main clearfix">
                <header>
                  <div className="logo">
                    <Image src='/images/logo.svg' className="logo"></Image>
                  </div>
                  <button id="showMenu"><i className="fa fa-bars"></i></button>
                </header>
              </div>
              <Switch>
                {
                  routes.map(route => {
                    return route.name === 'Home'
                      ? <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                        exact
                      />
                      : <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                      />
                  })
                }
              </Switch>
            </div>
          </div>
          <nav className="outer-nav right vertical">
            <ul>
              {
                routes.map(route => {
                  return (
                    <li key={route.path}>
                      <Link to={`${route.path}`}>{route.name}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

Nav.propTypes = {
  routes: PropTypes.array
}
