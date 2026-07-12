import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (post && post.metaTitle && post.metaDescription) {
      document.title = post.metaTitle;

      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', post.metaDescription);

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (post.keywords) {
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', post.keywords);
      }
    }

    return () => {
      document.title = 'Gursimran Singh - Product Manager';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Product Manager passionate about building impactful products');
      }
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article not found</h1>
          <Link to="/writing" className="text-emerald-600 hover:text-emerald-700 font-medium">
            ← Back to Writing
          </Link>
        </div>
      </div>
    );
  }

  if (!post.content) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming soon</h1>
          <Link to="/writing" className="text-emerald-600 hover:text-emerald-700 font-medium">
            ← Back to Writing
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/writing"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Writing
        </Link>

        <div className="mb-8">
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(post.date)}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="text-xl text-gray-600 italic border-l-4 border-emerald-500 pl-4">
              {post.subtitle}
            </p>
          )}
        </div>

        <div
          className="prose prose-lg prose-emerald max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:space-y-2
            prose-li:text-gray-700
            prose-code:text-emerald-600 prose-code:bg-emerald-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-table:w-full prose-table:border-collapse
            prose-th:bg-emerald-50 prose-th:border prose-th:border-gray-300 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900
            prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-3 prose-td:text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            to="/writing"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;
