import React, {Component} from 'react'
import DashBoardTabs from './DashBoardTabs.js'
import UserProfileCard from './UserProfileCard.js'
import UserDetailsCard from './UserDetailsCard.js'


class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="container-flexbox-userprofile">
                    <UserProfileCard />
                    <UserDetailsCard />
                </div>
                <DashBoardTabs />
            </div>
        )
    }
}

export default Dashboard;
