import React, { useState } from "react";

import "./style.scss";
import ContentWrapper from "../../../components/ContentWrapper/Content_wrapper";
//import { PlayIcon } from "../playIcon";
import { PlayButton } from "../PlayButton";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {data?.results?.map((video) => (
                            <div key={video.id} className="videoItem" 
                             onClick={() => {
                                setShow(true)
                                setVideoId(video.key) }
                                } >

                                    <div className="videoThumbnail">
                                        <Img src={`https:/img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                                        <PlayButton />
                                    </div>

                                    <div className="videoTitle">{video.name}</div>
                            
                        
                           
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;