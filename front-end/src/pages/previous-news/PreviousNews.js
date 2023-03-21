import './PreviousNews.css'

export default function PreviousNews(props) {
    return(
        <div className="previous-news">
            <h3>{props.title}</h3>

            <p>{props.body}</p>
        </div>
    )
}