import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Narrative Forge | AI News & Insights</title>
        <meta name="description" content="Daily AI news briefings and in-depth analysis of artificial intelligence trends" />
      </Head>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Narrative Forge</h1>
          <nav className="space-x-6">
            <a href="#featured" className="hover:text-blue-200">Featured</a>
            <a href="#daily" className="hover:text-blue-200">Daily News</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI News & Insights
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl">
            Daily briefings and deep dives into artificial intelligence. 
            Stay informed with curated news and expert analysis.
          </p>
        </div>
      </section>

      {/* Daily News Section - March 31, 2026 */}
      <section id="daily" className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Daily AI News</h2>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">March 31, 2026</span>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-gray-500 text-sm mb-4">Your 3-minute morning briefing</p>

              <div className="space-y-6">
                <article className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Ollama Transitions to MLX on Apple Silicon
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ollama announces platform will be powered by MLX (Machine Learning eXtension) 
                    on Apple Silicon, enhancing computational efficiency for AI applications on Apple hardware.
                  </p>
                </article>

                <article className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Claude Code Source Code Leaked
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Source code for Claude Code reportedly leaked online, raising serious concerns 
                    about security and intellectual property in the AI industry.
                  </p>
                </article>

                <article className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Universal Claude.md: Token Efficiency
                  </h3>
                  <p className="text-gray-600 text-sm">
                    New Universal Claude.md promises to significantly cut token usage, 
                    helping businesses manage AI costs more effectively.
                  </p>
                </article>

                <article className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    The Debate on Closed Source AI
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discussion on closed-source AI technologies sparks debate about 
                    "neofeudalism" and access to essential AI technologies.
                  </p>
                </article>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Key Takeaways</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">→</span>
                    <span className="text-gray-600">Performance optimization crucial for AI apps</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">→</span>
                    <span className="text-gray-600">Security risks require stringent measures</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">→</span>
                    <span className="text-gray-600">Cost efficiency solutions gaining traction</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">→</span>
                    <span className="text-gray-600">Ethical frameworks necessary for responsible AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article - March 30, 2026 */}
      <section id="featured" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Analysis</h2>
          
          <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="/images/blog-featured-ai-trends.png" 
                  alt="AI Trends 2026"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="flex items-center mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Featured</span>
                  <span className="text-gray-400 text-sm ml-3">March 30, 2026</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  10 AI Trends That Will Define 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  From agentic AI to invisible intelligence, discover the trends reshaping 
                  business, technology, and work in 2026. Essential reading for business leaders 
                  navigating the AI revolution.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Agentic AI</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Enterprise AI</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Generative Video</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Read Full Article
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Calendar Preview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">News Archive</h2>
          
          <div className="grid grid-cols-7 gap-2 max-w-2xl">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="text-center text-sm font-semibold text-gray-400 py-2">
                {day}
              </div>
            ))}
            
            {/* March 2026 */}
            {Array.from({ length: 31 }, (_, i) => {
              const day = i + 1;
              const hasContent = day === 30 || day === 31;
              const isLatest = day === 31;

              return (
                <div
                  key={day}
                  className={`
                    aspect-square border rounded-lg p-2 flex flex-col items-center justify-center
                    ${isLatest ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}
                    ${hasContent ? '' : 'opacity-50'}
                  `}
                >
                  <span className={`text-sm ${isLatest ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
                    {day}
                  </span>
                  {hasContent && (
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1"></span>
                  )}
                </div>
              );
            })}
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Green dot indicates days with news reports
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">Narrative Forge</h3>
              <p className="text-gray-400 text-sm mt-1">AI-powered content & insights</p>
            </div>
            <div className="mt-4 md:mt-0 text-gray-400 text-sm text-center md:text-right">
              <p>© 2026 Narrative Forge</p>
              <p className="mt-1">Daily updates at 8 AM Mountain Time</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}