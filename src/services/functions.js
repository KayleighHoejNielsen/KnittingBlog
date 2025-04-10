export const prettyDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return "there is no date"

    //multiply the date by 1000 because Firestore stores dates in seconds
    //while JavaScript deals with dates in milliseconds
    const date = new Date(timestamp.seconds * 1000)

    const day = date.getDate()
    const month = date.toLocaleString("en-GB", {month: "long"})
    const year = date.getFullYear()
    
    //there is definitely some package I could download to do this for me
    //but I thought it was pretty neat to do it myself and work out how it does it. fun.
    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"]
        const v = n % 100
        return s[(v-20) % 10] || s[v] || s[0]
    }
    
    return `${day}${getOrdinal(day)} ${month} ${year}`
}

    //I decided that I prefer this method than the css text overflow. 
    //I think its overkill to have to have the blog content be rendered in html
    //AND THEN using the css, which needs a container added
    export const summary = (text) => {
        //the substring starts at 3 because of the p tag that comes at the start of 
        //the blog content when it is being rendered in plain text.
        const shorterText = text.substring(3, 250)

        return `${shorterText}...`
    }
