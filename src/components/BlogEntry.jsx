import '../index.css'

export default function BlogEntry(props) {
    return (
        <article className="blog-entry">
            <div>
                <img className="blog-image" src={props.entry.img.src} alt={props.entry.img.alt}></img>
                <h2 className="blog-title">{props.entry.title}</h2>
                <p className="blog-date">{props.entry.date}</p>
                <p className="blog-sample">{props.entry.text}</p>
            </div>
        </article>
    )
}