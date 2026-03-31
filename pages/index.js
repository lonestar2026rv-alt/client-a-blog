import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Narrative Forge - AI News</title>
      </Head>
      <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui'}}>
        <h1>Narrative Forge</h1>
        <h2>Daily AI News - March 31, 2026</h2>
        <div style={{background: '#f0f0f0', padding: '20px', borderRadius: '8px', marginTop: '20px'}}>
          <h3>Today&apos;s Stories:</h3>
          <ul>
            <li><strong>Ollama + MLX:</strong> Now powered by MLX on Apple Silicon</li>
            <li><strong>Claude Code Leak:</strong> Source code leaked online</li>
            <li><strong>Universal Claude.md:</strong> Token efficiency breakthrough</li>
            <li><strong>Closed Source AI Debate:</strong> Neofeudalism concerns</li>
          </ul>
        </div>
        <h2 style={{marginTop: '40px'}}>Featured: 10 AI Trends 2026</h2>
        <p>From agentic AI to invisible intelligence...</p>
      </div>
    </>
  );
}
