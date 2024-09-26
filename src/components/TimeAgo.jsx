import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({timestamp}) => {
    let timeAgo = "";
    if(timestamp){
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span style={{
            fonSize:"0.9rem",
            color: "#868686"
        }}>
            &nbsp; <i>{timeAgo}</i> 
        </span>
    )
}

export default TimeAgo