import React from 'react'

function AverageDisplay({data}) {
    const spacing = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
    return (
        <div style={spacing}>
            <div>
                <p className='avg-hdr-maintxt'>0.33%</p>
                <p className='opacity'>5 mins</p>
            </div>
            <div>
                <p className='avg-hdr-maintxt'>1.04%</p>
                <p className='opacity'>1 Hour</p>
            </div>
            <div>
                <p className='opacity'>Best Price to Trade</p>
                <h1 className='average-header'>₹{data[0].last}</h1>
                <p className='opacity'>Average {data[0].name} net price including commision</p>
            </div>
            <div>
                <p className='avg-hdr-maintxt'>3.66%</p>
                <p className='opacity'>1 Day</p>
            </div>
            <div>
                <p className='avg-hdr-maintxt'>8.42%</p>
                <p className='opacity'>7Days</p></div>
        </div>
    )
}

export default AverageDisplay