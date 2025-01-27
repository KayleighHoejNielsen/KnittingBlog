import './index.css'

export default function BlogEntry(props) {
    return (
        <article className="blog-entry">
            <img className="blog-image" src={props.img.src} alt={props.img.alt}></img>
            <h2 className="blog-title">{props.title}</h2>
            <p className="blog-date">{props.date}</p>
            <p classname="blog-sample">{props.text}</p>
        </article>
    )
}