import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

const TimeAgo = ({ timetamp }) => {
    let timeAgo = ''
    if (timetamp) {
        const date = parseISO(timetamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
    return (
        <span title={timetamp}>
            &nbsp <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo
