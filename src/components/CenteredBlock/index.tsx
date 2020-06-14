import React from 'react'

import './styles.css'

interface Props {

}

const CenteredBlock: React.FC<Props> = (props) => {
    return (
        <div className="centeredBlock">
            {props.children}
        </div>
    )
}

export default CenteredBlock