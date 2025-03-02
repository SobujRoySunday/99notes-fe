'use client'

import React, { useEffect } from 'react'
import './HtmlToWeb.css'

const HtmlToWeb = ({ id, content }: { id: number, content: string }) => {
    useEffect(() => {
        const htmlContent = document.getElementById(`HtmlContent${id}`);

        if (htmlContent && content) {
            htmlContent.innerHTML = content;
        }
    })

    return (
        <div className='HtmlToWeb' id={`HtmlContent${id}`}></div>
    )
}

export default HtmlToWeb