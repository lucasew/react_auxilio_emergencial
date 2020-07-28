import React from 'react'

import Conditional from '../Conditional'

import './styles.css'

interface Props {
    topicKey?: string
    topicValue: any
}

const Topic: React.FC<Props> = (props) => {
    return <h2 className="topic">
        <Conditional cond={props.topicKey !== undefined}>
            <span className="topicKey">{props.topicKey} </span> 
        </Conditional>
        <span className="topicValue">{String(props.topicValue)}</span>
    </h2>
}

export default Topic