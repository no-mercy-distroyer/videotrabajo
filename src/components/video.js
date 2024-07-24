import "./video.css";

function Video(){
    return(
        <video controls>
            <source src="https://servidor-video-public-v3.s3.amazonaws.com/Rod+Stewart+-+Young+Turks+(Official+Video)+%5BHD+Remaster%5D.mp4" type="video/mp4"/>
        </video>
    );
}

export default Video;