import React from 'react'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../icons/icons'

import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Analytics from '../Analytics/analytics';

function SideBar() {
    return (
    <Router >
        <Route render={({ location, history }) => (
        <React.Fragment >
            <SideNav 
            onSelect={(selected) => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                    history.push(to);
                }
            }
        }
        >
            <SideNav.Toggle  />
            <SideNav.Nav  defaultSelected="Analytics">
                <NavItem eventKey="Analytics">
                    <NavIcon>
                        <FontAwesomeIcon className="icon-size" icon="home"  />
                    </NavIcon>
                    <NavText>
                        Dashboard
                    </NavText>
                    <NavItem eventKey="Analytics">
                        <NavText>
                            Analytics
                        </NavText>
                        </NavItem>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            CRM
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Eccoemece
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Projects
                        </NavText>
                    </NavItem>
            </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
            <FontAwesomeIcon icon="calendar"  />
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Calendar
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
            <FontAwesomeIcon icon="comments"  />
            </NavIcon>
            <NavText>
                Chat
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <FontAwesomeIcon icon="shopping-bag"/>
            </NavIcon>
            <NavText>
                Eccomormece
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
            <FontAwesomeIcon icon="envelope"/>
            </NavIcon>
            <NavText>
                Email
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
            <FontAwesomeIcon icon="calendar-check"/>
            </NavIcon>
            <NavText>
                Projects
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
            <FontAwesomeIcon icon="rss"/>
            </NavIcon>
            <NavText>
                Social Feed
            </NavText>
            
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
            <FontAwesomeIcon icon="tasks" />
            </NavIcon>
            <NavText>
                Tasks
            </NavText>
        </NavItem>

        <NavItem eventKey="charts">
            <NavIcon>
            <FontAwesomeIcon icon="file"/>
            </NavIcon>
            <NavText>
                Pages
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
            <FontAwesomeIcon icon="sign-in-alt"/>
            </NavIcon>
            <NavText>
                landing
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <FontAwesomeIcon icon="align-justify" />
            </NavIcon>
            <NavText>
                layouts
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <FontAwesomeIcon icon="cube" />
            </NavIcon>
            <NavText>
                Basic UI
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
<main>
                <Route path="/" exact component={props => <Analytics />} />
                <Route path="/Analytics" component={props => <Analytics />} />
            </main>
    </React.Fragment>
     )}
     />
</Router>
    )
  };

  export default SideBar;
  