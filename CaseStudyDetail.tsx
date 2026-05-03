import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User, Building, Tag } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = caseStudies.find(cs => cs.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const currentIndex = caseStudies.findIndex(cs => cs.slug === slug);
  const previousCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Link
        to="/case-studies"
        className="fixed top-20 left-4 z-40 inline-flex items-center px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200 shadow-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all
      </Link>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 mb-4">
            {caseStudy.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {caseStudy.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {caseStudy.summary}
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gray-50 rounded-xl">
            <div>
              <div className="flex items-center text-gray-500 text-xs mb-1">
                <User className="w-3 h-3 mr-1" />
                ROLE
              </div>
              <div className="text-gray-900 font-medium text-sm">{caseStudy.role}</div>
            </div>
            <div>
              <div className="flex items-center text-gray-500 text-xs mb-1">
                <Calendar className="w-3 h-3 mr-1" />
                TIMEFRAME
              </div>
              <div className="text-gray-900 font-medium text-sm">{caseStudy.timeframe}</div>
            </div>
            <div>
              <div className="flex items-center text-gray-500 text-xs mb-1">
                <Building className="w-3 h-3 mr-1" />
                CONTEXT
              </div>
              <div className="text-gray-900 font-medium text-sm">{caseStudy.context}</div>
            </div>
            <div>
              <div className="flex items-center text-gray-500 text-xs mb-1">
                <Tag className="w-3 h-3 mr-1" />
                TYPE
              </div>
              <div className="text-gray-900 font-medium text-sm">{caseStudy.type}</div>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem & Context</h2>
          <p className="text-gray-700 leading-relaxed">{caseStudy.problem}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Goals & Success Metrics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Goals</h3>
              <ul className="space-y-2">
                {caseStudy.goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Success Metrics</h3>
              <ul className="space-y-2">
                {caseStudy.metrics.map((metric, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Research & Insights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{caseStudy.research}</p>
          <div className="bg-emerald-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Insights</h3>
            <ul className="space-y-3">
              {caseStudy.insights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold mt-0.5 mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategy & Approach</h2>
          <p className="text-gray-700 leading-relaxed">{caseStudy.strategy}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
          <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Execution</h2>
          <p className="text-gray-700 leading-relaxed">{caseStudy.execution}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcomes & Impact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStudy.outcomes.map((outcome, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200"
              >
                <p className="text-gray-900 font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Learnings & Reflection</h2>
          <p className="text-gray-700 leading-relaxed">{caseStudy.learnings}</p>
        </section>

        <section className="mb-12">
          <h3 className="text-sm font-medium text-gray-500 mb-3">TAGS</h3>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <nav className="border-t border-gray-200 pt-8 mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            {previousCase && (
              <Link
                to={`/case-studies/${previousCase.slug}`}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Previous case study
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                  {previousCase.title}
                </h3>
              </Link>
            )}
            {nextCase && (
              <Link
                to={`/case-studies/${nextCase.slug}`}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-300 hover:shadow-lg transition-all duration-300 md:text-right"
              >
                <div className="flex items-center justify-end text-gray-500 text-sm mb-2">
                  Next case study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                  {nextCase.title}
                </h3>
              </Link>
            )}
          </div>
        </nav>
      </article>
    </div>
  );
};

export default CaseStudyDetail;
