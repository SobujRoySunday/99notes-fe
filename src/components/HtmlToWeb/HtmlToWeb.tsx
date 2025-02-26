'use client'

import React, { useEffect } from 'react'
import './HtmlToWeb.css'

const HtmlToWeb = ({ content }: { content: string }) => {
    useEffect(() => {
        const htmlContent = document.getElementById('HtmlContent');

        if (htmlContent && content) {
            htmlContent.innerHTML = content;
        }
    })

    return (
        <div id='HtmlContent'></div>
    )
}

export default HtmlToWeb