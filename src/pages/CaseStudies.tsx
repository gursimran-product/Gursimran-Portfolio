import { useState } from 'react';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Launched product',
    'Product analysis',
    'Concept / redesign'
  ];

  const filteredCaseStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Case Studies
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
          A collection of product work showcasing my approach to solving problems,
          making decisions, and delivering impact. Each case study walks through
          the problem, process, and outcomes.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-emerald-600 hover:text-emerald-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredCaseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>

        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No case studies found for this filter.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CaseStudies;
