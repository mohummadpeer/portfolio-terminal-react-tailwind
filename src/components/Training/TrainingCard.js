
import React from 'react'

function TrainingCard({details}) {
    return (
        <>       
            <div className="p-4">
                <h6 className="text-xl mb-2" id="school">{details.school}</h6>
                <div className="pl-4">{details.date}</div>
                <div className="pl-4">{details.titled}</div>
            </div>          
                
        </>
    
    );
}
export default TrainingCard;