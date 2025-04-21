import { BlogProvider } from '@/context/BlogContext';
import BlogDetail from './BlogDetail';

const Blog = () => {
  return (
      <BlogProvider>
          <BlogDetail/>
    </BlogProvider>
  )
}

export default Blog
