import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Narrative Forge - AI News Daily</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      </Head>
      <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif'}}>
        <header style={{borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px'}}>
          <h1 style={{margin: 0}}>Narrative Forge</h1>
          <p style={{color: '#666', margin: '5px 0 0 0'}}>AI News & Insights</p>
        </header>
        
        <section style={{background: '#e8f4f8', padding: '20px', borderRadius: '8px', marginBottom: '30px'}}>
          <h2 style={{marginTop: 0, color: '#0066cc'}}>📰 Daily AI News - March 31, 2026</h2>
          <p style={{color: '#666', fontSize: '14px'}}>Your 3-minute morning briefing</p>
          
          <div style={{marginTop: '15px'}}>
            <article style={{marginBottom: '15px', padding: '10px', background: 'white', borderRadius: '4px'}}>
              <h3 style={{margin: '0 0 5px 0', fontSize: '16px'}}>🚀 Ollama + MLX on Apple Silicon</h3>
              <p style={{margin: 0, fontSize: '14px', color: '#444'}}>Ollama announces platform will be powered by MLX, enhancing computational efficiency for AI applications on Apple hardware.</p>
            </article>
            
            <article style={{marginBottom: '15px', padding: '10px', background: 'white', borderRadius: '4px'}}>
              <h3 style={{margin: '0 0 5px 0', fontSize: '16px'}}>⚠️ Claude Code Source Code Leaked</h3>
              <p style={{margin: 0, fontSize: '14px', color: '#444'}}>Source code for Claude Code reportedly leaked online, raising serious concerns about security and intellectual property.</p>
            </article>
            
            <article style={{marginBottom: '15px', padding: '10px', background: 'white', borderRadius: '4px'}}>
              <h3 style={{margin: '0 0 5px 0', fontSize: '16px'}}>💡 Universal Claude.md: Token Efficiency</h3>
              <p style={{margin: 0, fontSize: '14px', color: '#444'}}>New Universal Claude.md promises to significantly cut token usage, helping businesses manage AI costs.</p>
            </article>
            
            <article style={{marginBottom: '15px', padding: '10px', background: 'white', borderRadius: '4px'}}>
              <h3 style={{margin: '0 0 5px 0', fontSize: '16px'}}>🤔 The Debate on Closed Source AI</h3>
              <p style={{margin: 0, fontSize: '14px', color: '#444'}}>Discussion on closed-source AI technologies sparks debate about "neofeudalism" and access to essential AI technologies.</p>
            </article>
          </div>
        </section>
        
        <section style={{borderTop: '1px solid #ddd', paddingTop: '20px'}}>
          <h2>📊 Featured Analysis</h2>
          <div style={{background: '#f9f9f9', padding: '15px', borderRadius: '8px'}}>
            <h3 style={{marginTop: 0}}>10 AI Trends That Will Define 2026</h3>
            <p>From agentic AI to invisible intelligence, discover the trends reshaping business and technology.</p>
            <p style={{fontSize: '12px', color: '#999'}}>Published: March 30, 2026</p>
          </div>
        </section>
        
        <footer style={{marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ddd', textAlign: 'center', color: '#999', fontSize: '12px'}}>
          <p>© 2026 Narrative Forge • Daily updates at 8 AM MT</p>
        </footer>
      </div>
    </>
  );
}
