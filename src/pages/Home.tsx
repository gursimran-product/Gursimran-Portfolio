import { Link } from 'react-router-dom';
import { Download, ArrowRight, Target, Zap, TrendingUp } from 'lucide-react';
import { highlights } from '../data/highlights';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';

const Home = () => {
  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm {highlights.hero.name.split(' ')[0]}.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
              {highlights.hero.title}
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.hero.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                View case studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="/resume.pdf"
                download="Gursimran_Singh_Resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200"
              >
                <Download className="mr-2 w-5 h-5" />
                Download resume
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6">
                <img
                  src="/ChatGPT_Image_May_3,_2026,_03_28_46_PM.png"
                  alt="Gursimran Singh"
                  className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-emerald-100 mx-auto"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick snapshot</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Role</span>
                    <span className="text-gray-900 font-medium text-sm">{highlights.hero.quickSnapshot.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Location</span>
                    <span className="text-gray-900 font-medium text-sm">{highlights.hero.quickSnapshot.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Focus</span>
                    <span className="text-gray-900 font-medium text-sm">{highlights.hero.quickSnapshot.focus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Contact</span>
                    <span className="text-gray-900 font-medium text-sm">{highlights.hero.quickSnapshot.contact}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          What I do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.valueProps.map((prop, index) => {
            const icons = [Target, Zap, TrendingUp];
            const Icon = icons[index];
            return (
              <div
                key={prop.title}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured case studies
          </h2>
          <Link
            to="/case-studies"
            className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
          >
            View all
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCaseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          How I work
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-5 gap-8 relative">
            {highlights.process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-emerald-300 transition-colors duration-200 h-full">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2 text-center">
                    {step.step}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          What others say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for a Product Manager who can connect business goals with user needs?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-emerald-600 font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl mt-6"
          >
            Let's talk
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
