import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-4 md:p-12 flex flex-col items-center gap-12">
            {children}
        </div>
    )
}

export default Container