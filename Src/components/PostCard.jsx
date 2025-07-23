import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ id, title, summary, date, cover }) {
  return (
    <div className="card mb-4 shadow-sm">
      {cover && <img src={cover} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/post/${id}`}>{title}</Link>
        </h5>
        <small className="text-muted d-block mb-2">{date}</small>
        <p className="card-text">{summary}</p>
        <Link to={`/post/${id}`} className="btn btn-outline-primary btn-sm">
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default PostCard;