import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import AdSlot from '../components/Adslot';

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: '', data: {} });

  useEffect(() => {
    const loadPost = async () => {
      try {
        const file = await import(`../posts/${slug}.md`);
        const raw = file.default;
        const { content, data } = matter(raw);
        setPost({ content, data });
      } catch (error) {
        console.error('Error loading post:', error);
        setPost({ 
          content: 'Post not found', 
          data: { title: 'Post Not Found', date: '' } 
        });
      }
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