'use strict'

import React from 'react'
import Dimensions from 'react-dimensions'
import assert from 'assert'

const MIN_PIXELS_PER_MONTH = 10

function dayDiff(date1, date2) {
    return (date1-date2)/(24.0*60*60*1000)
}

function nearestMonth(date) {
    const n = new Date(date)
    n.setMonth(date.getMonth() + 1)
    n.setDate(1)
    return n
}

const VerticalTimelineScroller = (props) => {

    // If the "from" and "to" dates are given as strings, convert them
    // to a Date object 
    const fromDate = (props.from instanceof Date)? props.from : new Date(props.from)
    const toDate = (props.to instanceof Date)? props.to : new Date(props.to)

    // Make sure the dates are valid & ordered correctly
    assert(fromDate.getDate())
    assert(toDate.getDate())
    assert(toDate > fromDate)

    // Calculate the year & month span
    const years = toDate.getYear() - fromDate.getYear()
    const days = dayDiff(toDate, fromDate)
    const pixelsPerDay = props.containerHeight / days
    const months = days/30 // Approximate, but enough

    // If there are too many months to show, don't draw a tick for each month, draw
    // one for each quarter
    const drawAllMonths = (pixelsPerDay*30) > MIN_PIXELS_PER_MONTH

    let d = fromDate.getDate() === 1? new Date(fromDate) : nearestMonth(fromDate)
    const monthTicks = []
    while (d <= toDate) {
        const y = dayDiff(d, fromDate) * pixelsPerDay
        monthTicks.push({
            x1: 0,
            y1: y,
            x2: 10,
            y2: y
        })

        d.setMonth(d.getMonth() + 1)
    }

    return (
        <svg style={{ background: 'yellow', width: '100%', height: '100%' }}>
          {
              monthTicks.map((l, i) => <line x1={l.x1} x2={l.x2} y1={l.y1} y2={l.y2} stroke="black" key={i}/>)
          }
        </svg>
    )
}

export default Dimensions()(VerticalTimelineScroller)


