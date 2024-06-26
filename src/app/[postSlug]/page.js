import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { loadBlogPost } from '@/helpers/file-helpers';
import CodeSnippet from '@/components/CodeSnippet/CodeSnippet';

async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug)

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={new Date()}
      />
      <div className={styles.page}>
        <MDXRemote 
          source={content}
          components={{
            pre: CodeSnippet
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
