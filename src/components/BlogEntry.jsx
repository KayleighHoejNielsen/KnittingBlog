export default function BlogEntry(props) {
    return (
        <article className="blog-tile-entry">
            <div>
                <img className="blog-tile-image" src={props.entry.img.src} alt={props.entry.img.alt}></img>
                <h2 className="blog-tile-title">{props.entry.title}</h2>
                <p className="blog-tile-date">{props.entry.date}</p>
                <div className="type-decoration">
                    <p className="blog-tile-type">{props.entry.type}</p>
                </div>
                <p className="blog-tile-sample">{props.entry.text}</p>
            </div>
        </article>
    )
}
