import React from 'react';
import './Project.css'
import test1 from '../Images/test1.jpeg'
import test2 from '../Images/test2.jpeg'
import test3 from '../Images/test3.jpeg'

// import { Link } from 'react-router-dom'

// const Project = () => {
//     return (
//         <div className="projects">
//             <h3>DocuManage</h3>
//             <Link to='https://github.com/jkatem/DocuManage'>sss</Link>
            
//             <h3>Sniff-n-play</h3>
//             <Link to="https://github.com/jkatem/sniff_and_play">fksjfsjldfjjsf</Link>
//         </div>
//     )

// }
// export default Project;

const Project = () => {
    return (
        <div>
            <a className="arrow prev">Prev</a>
            <a className="arrow next">Next</a>  

            <ul id="carousel">
                <li class="visible"><a href="https://github.com/jkatem/DocuManage"><img src={test1} alt="" /></a></li>
                <li class="visible"><a href="https://github.com/jkatem/sniff_and_play"><img src={test2} alt="" /></a></li>
                <li class="visible"><a href="https://github.com/jkatem/sniff_and_play"><img src={test3} alt="" /></a></li>

            </ul>
        </div>
        
    )
}
export default Project