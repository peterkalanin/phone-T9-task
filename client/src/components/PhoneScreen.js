import React from 'react'

export default function PhoneScreen(props) {
    const leftActionLabel = 'Select';
    const rightActionLabel = 'Clean';

    return (
        <div className='phone-screen'>
            <div className='phone-text'>

            </div>
            <div className='phone-lines'>

            </div>
            <div className='phone-actions'>
                <div className='phone-action'>
                    {leftActionLabel}
                </div>
                <div className='phone-action'>
                    {rightActionLabel}
                </div>
            </div>
        </div>
    )
}