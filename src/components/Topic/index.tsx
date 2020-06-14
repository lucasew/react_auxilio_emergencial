import React from 'react'

import Conditional from '../Conditional'

interface Props {
    topicKey?: string
    topicValue: any
}

const Topic: React.FC<Props> = (props) => {
    return <p>
        <Conditional cond={props.topicKey !== undefined}>
            <span className="topicKey">{props.topicKey} </span> 
        </Conditional>
        <span className="topicValue">{String(props.topicValue)}</span>
    </p>
}

export default Topic