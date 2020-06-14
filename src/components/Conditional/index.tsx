import React from 'react'
import { isBoolean } from 'util'

interface Props {
    cond: (() => boolean) | boolean
    fallback?: React.ReactNode
}

const Conditional: React.FC<Props> = (props) => {
    let cond = isBoolean(props.cond)
        ? props.cond
        : props.cond()
    const choice = cond ? props.children : props.fallback
    return (
        <div>
            {choice}
        </div>
    )
}

export default Conditional