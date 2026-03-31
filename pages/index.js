import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI News & Insights | Narrative Forge</title>
        <meta name="description" content="Daily AI news briefings and in-depth analysis of artificial intelligence trends" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI News & Insights
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl">
            Daily briefings and deep dives into the world of artificial intelligence. 
            Stay informed with curated news, analysis, and trends.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Analysis</h2>
          
          <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="/images/blog-featured-ai-trends.png" 
                  alt="AI Trends 2026"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <span className="text-blue-600 font-semibold">Featured</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                  10 AI Trends That Will Define 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  From agentic AI to invisible intelligence, discover the trends reshaping 
                  business, technology, and work in 2026. Essential reading for business leaders.
                </p>
                <Link 
                  href="/article/ai-trends-2026"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Daily News Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Daily AI News</h2>
            <span className="text-gray-500">March 2026</span>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-semibold text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {/* Empty days for March 2026 start (Sunday) */}
            {Array.from({ length: 0 }, (_, i) => (
              <div key={`empty-${i}`} className="aspect-square"></div>
            ))}

            {/* Days 1-31 */}
            {Array.from({ length: 31 }, (_, i) => {
              const day = i + 1;
              const isToday = day === 31;
              const hasReport = day === 31;

              return (
                <div
                  key={day}
                  className={`
                    aspect-square border rounded-lg p-2 flex flex-col
                    ${isToday ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}
                    ${hasReport ? 'hover:shadow-md transition cursor-pointer' : ''}
                  `}
                >
                  <span className={`text-sm font-semibold ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>
                    {day}
                  </span>
                  {hasReport && (
                    <div className="mt-auto">
                      <Link href={`#report-${day}`}>
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Today's Report */}
          <div id="report-31" className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Daily AI News</p>
                  <h3 className="text-2xl font-bold">March 31, 2026</h3>
                </div>
                <span className="bg-blue-500 px-4 py-2 rounded-full text-sm">Latest</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <p className="text-gray-600 italic mb-6">
                Your 3-minute briefing on the latest in artificial intelligence
              </p>

              <div className="space-y-6">
                <article className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Ollama Transitions to MLX on Apple Silicon
                  </h4>
                  <p className="text-gray-600">
                    Ollama announces platform will be powered by MLX on Apple Silicon, 
                    enhancing computational efficiency for AI applications on Apple hardware.
                  </p>
                </article>

                <article className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Claude Code Source Code Leaked
                  </h4>
                  <p className="text-gray-600">
                    Source code for Claude Code reportedly leaked online, raising serious 
                    concerns about security and intellectual property in the AI industry.
                  </p>
                </article>

                <article className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Universal Claude.md: Token Efficiency Breakthrough
                  </h4>
                  <p className="text-gray-600">
                    New Universal Claude.md promises to significantly cut token usage, 
                    helping businesses manage AI costs more effectively.
                  </p>
                </article>

                <article className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    The Debate on Closed Source AI
                  </h4>
                  <p className="text-gray-600">
                    Discussion on closed-source AI technologies sparks debate about 
                    &quot;neofeudalism&quot; and access to essential AI technologies.
                  </p>
                </article>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Key Takeaways</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Performance optimization is crucial for AI applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Security risks require stringent cybersecurity measures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Cost efficiency solutions help manage AI expenses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Ethical frameworks necessary for responsible AI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">Narrative Forge</h3>
              <p className="text-gray-400 mt-2">AI-powered content creation</p>
            </div>
            <div className="mt-6 md:mt-0 text-gray-400 text-sm">
              <p>© 2026 Narrative Forge. All rights reserved.</p>
              <p className="mt-1">Daily news automatically generated at 8 AM MT</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}