export default function BlogEntry(props) {
    const prettyDate = (timestamp) => {
        if (!timestamp || !timestamp.seconds) return "here"

        const date = new Date(timestamp.seconds * 1000)

        const day = date.getDate()
        const month = date.toLocaleString("en-GB", {month: "long"})
        const year = date.getFullYear()
        
        const getOrdinal = (n) => {
            const s = ["th", "st", "nd", "rd"]
            const v = n % 100
            return s[(v-20) % 10] || s[v] || s[0]
        }
        
        return `${day}${getOrdinal(day)} ${month} ${year}`
    }

    const summary = (text) => {
        const shorterText = text.substring(3, 250)

        return `${shorterText}...`
    }

    return (
        <article className="blog-tile-entry">
            <div>
                <img className="blog-tile-image" src={props.imageUrl} alt={props.alt}></img>
                <h2 className="blog-tile-title">{props.title}</h2>
                <p className="blog-tile-date">{prettyDate(props.createdAt)}</p>
                <div className="type-decoration">
                    <p className="blog-tile-type">{props.type}</p>
                </div>
                <p className="blog-tile-sample">{summary(props.content)}</p>
            </div>
        </article>
    )
}
