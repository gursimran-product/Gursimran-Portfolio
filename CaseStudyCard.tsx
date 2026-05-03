import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from '../data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <Link
      to={`/case-studies/${caseStudy.slug}`}
      className="block group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-emerald-300 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
            {caseStudy.category}
          </span>
          <span className="text-xs text-gray-500">{caseStudy.role}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
          {caseStudy.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {caseStudy.summary}
        </p>

        {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs font-medium text-gray-700 mb-1">Key outcome</p>
            <p className="text-sm text-gray-900">{caseStudy.outcomes[0]}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center text-emerald-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
          View case study
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
