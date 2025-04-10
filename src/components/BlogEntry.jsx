import { prettyDate, summary } from '../services/functions'

export default function BlogEntry(props) {

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
