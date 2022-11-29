
import PhotoSlideShow from "../components/PhotosSlideshow"
export default function About() {

    return (
        <div className="aboutPage">
            <img alt="" src="/animals/happy pet logo.png" width="200px"></img>
            <div className="aboutText">
                <h3> Our goal is to get as many animals as possible adopted to the most suitable families.<br />
                    We want to make the search and adoption process as easy as possible for you and for the organizations we are working with.
                </h3><br/>
                <h2>Some examples to our successful adoptions</h2>
            </div>
            <div className="aboutImgDiv">


            </div>
<PhotoSlideShow/>
        </div>
    )
}