import React, {Component} from 'react'
import ProfileCard from'./ProfileCard'
import image1 from '../assets/lady-with-child.jpg'
import image2 from '../assets/college-student.jpg'
import image3 from '../assets/elderly-woman.jpg'

class ProfileCards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                {/* https://getbootstrap.com/docs/4.0/components/card/#card-layout */}
                {/* cards will be stored in masonry-like columns for dynamic alignment */}
                <div className="card-columns">
                    <ProfileCard class="ProfileCard" imgsrc={image1} title={"LaTonya"} 
                    description="30-year-old African American woman needs to get baby formula for her child"
                    route={'/Simulation1'} />

                    <ProfileCard imgsrc={image2} title={"Jesse"}
                    description={"21-year-old transgender woman tight on money needs to finish her last year of college"}
                    route={'/Simulation2'}/>
                        
                    <ProfileCard imgsrc={image3} title={"Elsa"}
                    description={"75-year-old woman with ill health needs to get to the store and figure out how to get this months medications."}
                    route={'/Simulation3'}/>
                    {/* <ProfileCard imgsrc={image1} title={"LaTonya"} 
                    description="30-year-old African American woman needs to get baby formula for her child"
                    route={'/Simulation1'} />
                    <ProfileCard imgsrc={image1} title={"LaTonya"} 
                    description="30-year-old African American woman needs to get baby formula for her child"
                    route={'/Simulation1'} />
                    <ProfileCard imgsrc={image1} title={"LaTonya"} 
                    description="30-year-old African American woman needs to get baby formula for her child"
                    route={'/Simulation1'} /> */}
                </div>
                {/* <div className="row">
                    <div className="col">
                        <ProfileCard imgsrc={image1} title={"LaTonya"} 
                        description="30-year-old African American woman needs to get baby formula for her child"
                        route={'/Simulation1'} />
                    </div>
                    <div className="col">
                        <ProfileCard imgsrc={image2} title={"Jesse"}
                        description={"21-year-old transgender woman tight on money needs to finish her last year of college"}
                        route={'/Simulation2'}/>
                    </div>
                    <div className="col">
                        <ProfileCard imgsrc={image2} title={"Elsa"}
                        description={"75-year-old woman with ill health needs to get to the store and figure out how to get this months medications."}
                        route={'/Simulation3'}/>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default ProfileCards; 