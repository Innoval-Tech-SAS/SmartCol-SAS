import React from "react";

interface VisionProps {
    imgName: string,
    titleStyle: string
}

const Vision:React.FC<VisionProps> = ({imgName, titleStyle}) => {
    return (
        <div className="w-50">
            <h2 className={titleStyle}>Visión</h2>
        </div>
    )
}

export default Vision