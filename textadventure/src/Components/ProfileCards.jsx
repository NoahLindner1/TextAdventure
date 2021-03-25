import React, {Component} from 'react'
import ProfileCard from'./ProfileCard'
import image1 from '../assets/lady-with-child.jpg'
import image2 from '../assets/college-girl.jpg'

class ProfileCards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-2">
                        {/* add profile cards with component below */}
                        <ProfileCard imgsrc={image1} title={"Profile Name Placeholder"} 
                        description="30 Year old African American woman needs to get baby formula for her child"
                        route={'/Simulation1'} />
                    </div>
                    <div className="col-md-2">
                        <ProfileCard imgsrc={image2} title={"Profile Name Placeholder"}
                        description={"21 Year old transgender woman strapped on money needs to finish her last year of college"}
                        route={'/Simulation2'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCards; 