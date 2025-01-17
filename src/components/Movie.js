import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg,title,summary,genres}) {
    return (
        <div key={id}>
          <img src={coverImg} alt={title}/>
          <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
          <p>{summary.length > 235 ? `${summary.slice(0,235)}...`:summary}</p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
        </ul>
      </div>
    )
}

Movie.PropsTypes ={
  id:PropsTypes.number.isRequired,
    coverImg: PropsTypes.string.isRequired,
    title:PropsTypes.string.isRequired,
    summary:PropsTypes.string.isRequired,
    genres:PropsTypes.arrayOf(PropsTypes.string).isRequired,
}

export default Movie;