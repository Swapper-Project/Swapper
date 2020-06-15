import React, {Component} from 'react'
import DashBoardTabs from './DashBoardTabs.js'

class Dashboard extends Component {
    render() {
        return (
            <div>
               <h1>Dashboard Reached.</h1> 
               <DashBoardTabs />
            </div>
        )
    }
}

export default Dashboard;
