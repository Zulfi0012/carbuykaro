import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import AdSlot from '../components/Adslot';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const files = import.meta.glob('../posts/*.md');
      const loadedPosts = [];

      for (const path in files) {
        const content = await files[path]();
        const raw = content.default;
        const slug = path.split('/').pop().replace('.md', '');
        const parsed = matter(raw);
        loadedPosts.push({ ...parsed.data, slug });
      }

      loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(loadedPosts);
    };

    loadPosts();
  }, []);

  const search = localStorage.getItem('search')?.toLowerCase() || '';
  const filtered = posts.filter(p => p.title.toLowerCase().includes(search));

  return (
    <div>
      <h2 className="mb-4">Latest Blog Posts</h2>
      {filtered.length > 0 ? (
        filtered.map(post => (
          <div key={post.slug} className="mb-4 border-bottom pb-3">
            <h4><Link to={`/post/${post.slug}`}>{post.title}</Link></h4>
            <small className="text-muted">{post.date}</small>
            <p>{post.excerpt || 'No excerpt available'}</p>
          </div>
        ))
      ) : (
        <p>No posts found. Loading...</p>
      )}
      <AdSlot slotName="Homepage Footer Ad" />
    </div>
  );
}

export default Home;