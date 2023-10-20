import React from "react";


const TypingBoxHandler = () => {

    return(
        <div className="typing-box-handler">

            <div className="reset">
            <svg id="reset-btn" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RefreshIcon"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>
            </div>

            <div className="esc">
                <button id="esc-btn">esc</button>
                <span>  - reset</span>
            </div>

            <div className="words-length">
                <button>10</button>
                <button>50</button>
                <button>80</button>
                <button>100</button>
                <span>  - no. of words</span>
            </div>
        </div>
    )
}

export default TypingBoxHandler;