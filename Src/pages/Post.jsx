import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import AdSlot from '../components/AdSlot';

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: '', data: {} });

  useEffect(() => {
    const loadPost = async () => {
      const file = await import(../posts/${slug}.md);
      const raw = file.default;
      const { content, data } = matter(raw);
      setPost({ content, data });
    };

    loadPost();
  }, [slug]);

  return (
    <article className="blog-post">
      <h2>{post.data.title}</h2>
      <small className="text-muted">{post.data.date}</small>
      <AdSlot slotName="Top of Post" />
      <ReactMarkdown>{post.content}</ReactMarkdown>
      <AdSlot slotName="Bottom of Post" />
    </article>
  );
}

export default Post;