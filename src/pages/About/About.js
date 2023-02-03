import React from 'react';
import vedio from '../../assets/vedio/homeVedio.mp4';

const About = () => {
    return (
        <div>
            <div>
                <vedio src={vedio} autoPlay loop muted/>
            </div>
        </div>
    );
};

export default About;