import React, {Component} from 'react'
import ProfileCard from'./ProfileCard'
import image1 from '../assets/woman-with-child.jpg'

class ProfileCards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        {/* add profile cards with tag below */}
                        <ProfileCard imgsrc={image1} title={"Profile Card"} 
                        description="30 Year old African American woman needs to get baby formula for her child" />
                    </div>
                    {/* <div className="col-md-4">
                        <ProfileCard />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default ProfileCards; 