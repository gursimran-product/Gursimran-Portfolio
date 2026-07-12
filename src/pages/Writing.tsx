import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const Writing = () => {
  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'Product teardown':
        return 'bg-blue-50 text-blue-700';
      case 'Opinion':
        return 'bg-purple-50 text-purple-700';
      case 'Notes':
        return 'bg-amber-50 text-amber-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Writing & Teardowns
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Thoughts on product management, teardowns of products I admire, and lessons
          learned from building things. These pieces capture my ongoing thinking, not
          just finished projects.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium w-fit ${getTypeBadgeColor(post.type)}`}>
                  {post.type}
                </span>
              </div>

              {post.external ? (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200 cursor-pointer">
                    {post.title}
                  </h2>
                </a>
              ) : post.content ? (
                <Link to={`/writing/${post.slug}`} className="block">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200 cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
              ) : (
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 transition-colors duration-200">
                  {post.title}
                </h2>
              )}

              <p className="text-gray-600 leading-relaxed mb-4">
                {post.description}
              </p>

              {post.external ? (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200"
                >
                  Read article
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              ) : post.content ? (
                <Link
                  to={`/writing/${post.slug}`}
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200"
                >
                  Read article
                </Link>
              ) : (
                <div className="inline-flex items-center text-gray-400 font-medium">
                  Coming soon
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want to discuss product ideas?
          </h3>
          <p className="text-gray-700 mb-4">
            I'm always interested in connecting with other product folks, sharing ideas,
            and learning from different perspectives.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Writing;
