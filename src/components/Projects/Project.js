import React from 'react'
import test1 from '../Carousel/Images/test1.jpeg'
import test2 from '../Carousel/Images/test2.jpeg'


class Project extends React.Component {
    render() {
        return (            
            <table className="projectsection">
                <thead>                    
                    <tr>
                        <th scope="col">DocuManage</th>
                        <th scope="col">{Project.title}</th>
                    </tr>              
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><img src={test1} alt="Responsive"/></th>                                             
                        <th scope="row"><img src={test2} alt="Responsive"/></th>                        
                    </tr>
                    <tr>
                        <th>test</th>
                        <th>test2</th>
                    </tr>
                    
                </tbody>
            </table>
                
        )
    }
}

export default Project;