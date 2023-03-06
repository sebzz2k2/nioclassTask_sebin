import React from 'react'
import { MathJaxContext, MathJax } from 'better-react-mathjax'


const Question = ({ QData }) => {
    return (
        <MathJaxContext>
            <MathJax>{QData}</MathJax>
        </MathJaxContext>
    )
}

export default Question