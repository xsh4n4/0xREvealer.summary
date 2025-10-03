import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app">


      <div className="container">
        {/* Hero Section */}
        <div className="title-section">
          <h1 className="heading">
            <span>0xREvealer</span>
          </h1>
          <p className="tagline">
            Revealing EVM bytecode secrets: From 0x to human-readable through AI-powered reverse engineering
          </p>
          
        </div>

        {/* Abstract */}
        <div className="content-section">
          <h2 className="subHeading"><span>Abstract</span></h2>
          <p>
            Smart contracts on Ethereum are deployed as opaque EVM bytecode, making it challenging to understand their underlying logic and identify potential security vulnerabilities. While existing tools provide static and dynamic analysis capabilities, they often lack human-readable explanations that developers and auditors can quickly comprehend.
          </p>
          <p>
            <strong>0xREvealer</strong> bridges this gap by combining advanced reverse engineering techniques, comprehensive static analysis, and cutting-edge AI-powered Large Language Models (LLMs) to produce plain-English summaries of smart contract behavior. Our tool not only identifies potential vulnerabilities but also explains them in context, dramatically accelerating the auditing process and making blockchain security accessible to a broader audience.
          </p>
        </div>

        {/* Introduction */}
        <div className="content-section">
          <h2 className="subHeading"><span>Introduction</span></h2>
          <p>
            Ethereum smart contracts are self-executing programs that run on the blockchain, handling billions of dollars in digital assets. While developers write these contracts in high-level languages like Solidity, they are ultimately compiled into low-level EVM bytecode before deployment.
          </p>
          <p>
            When source code is unavailable or verification is needed, auditors and security researchers must analyze raw bytecode, a time-consuming and error-prone process. Understanding bytecode behavior is critical for identifying vulnerabilities such as:
          </p>
          <ul>
            <li><strong>Reentrancy attacks</strong> that can drain contract funds</li>
            <li><strong>Unchecked external calls</strong> that may fail silently</li>
            <li><strong>Unsafe arithmetic operations</strong> leading to overflow/underflow</li>
            <li><strong>Access control issues</strong> exposing privileged functions</li>
            <li><strong>Front-running vulnerabilities</strong> in transaction ordering</li>
          </ul>
          <p>
            0xREvealer transforms this complex analysis into an automated, AI-assisted workflow that produces actionable insights in minutes rather than hours.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="content-section">
          <h2 className="subHeading"><span>Motivation & Problem Statement</span></h2>
          <p>
            Current smart contract analysis tools like Slither, Mythril, and Echidna provide powerful automated analysis capabilities but present several limitations:
          </p>
          <ul>
            <li><strong>Technical Output:</strong> Results are often presented as raw findings without context or explanations accessible to non-experts</li>
            <li><strong>Manual Interpretation Required:</strong> Auditors must manually piece together findings to understand contract behavior</li>
            <li><strong>Time-Intensive:</strong> Reverse engineering bytecode manually can take hours or days per contract</li>
            <li><strong>High Barrier to Entry:</strong> Requires deep expertise in EVM internals and security patterns</li>
            <li><strong>Limited Accessibility:</strong> Small teams and independent developers lack resources for comprehensive audits</li>
          </ul>
          <p>
            There is a critical need for a tool that can automatically disassemble bytecode into readable opcodes, detect risky operations and patterns, and generate human-readable explanations leveraging the power of modern AI language models.
          </p>
        </div>

        {/* Solution */}
        <div className="content-section">
          <h2 className="subHeading"><span>Proposed Solution</span></h2>
          <p>
            0xREvealer addresses these challenges through a three-pillar approach that combines the best of traditional security analysis with modern AI capabilities:
          </p>
          <ul>
            <li><strong>Reverse Engineering:</strong> Advanced disassembly of EVM bytecode into readable opcodes with control-flow graph (CFG) reconstruction to understand program logic and execution paths</li>
            <li><strong>Static Analysis:</strong> Pattern-based detection of suspicious operations including unchecked CALLs, SELFDESTRUCT usage, missing overflow checks, and access control violations</li>
            <li><strong>AI-Powered Explanation:</strong> Integration with state-of-the-art LLMs (GPT, LLaMA) to generate natural-language descriptions of contract behavior, vulnerability context, and mitigation strategies</li>
            <li><strong>Comprehensive Reporting:</strong> Multi-format output (JSON, Markdown, HTML) with vulnerability scoring, code snippets, and actionable recommendations for developers and auditors</li>
          </ul>
        </div>


        {/* Features */}
        <div className="content-section">
          <h2 className="subHeading"><span>Key Features</span></h2>
          <ul>
            <li><strong>Complete EVM Bytecode Disassembly:</strong> Transform raw hex into structured opcode sequences with jump analysis</li>
            <li><strong>Control Flow Graph Reconstruction:</strong> Visualize execution paths and identify complex logic patterns</li>
            <li><strong>Vulnerability Suspicion Scoring:</strong> Risk-based prioritization of findings (0-10 scale)</li>
            <li><strong>LLM-Based Natural Language Explanations:</strong> Context-aware descriptions of what the contract does and why it might be risky</li>
            <li><strong>Multi-Format Output:</strong> Export reports in JSON for tooling integration, Markdown for documentation, and HTML for presentations</li>
            <li><strong>Optional Fuzzing Integration:</strong> Dynamic analysis to discover runtime vulnerabilities and edge cases</li>
            <li><strong>Batch Processing:</strong> Analyze multiple contracts simultaneously for comparative auditing</li>
            <li><strong>CI/CD Integration Ready:</strong> Automate security checks in development pipelines</li>
          </ul>
        </div>

        {/* Technical Stack */}
        <div className="content-section">
          <h2 className="subHeading"><span>Technical Stack</span></h2>
          <table className="tech-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Technology/Library</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bytecode Disassembly</td>
                <td>evmdasm, ethereum-etl, pyevmasm</td>
              </tr>
              <tr>
                <td>Static Analysis</td>
                <td>Slither, Mythril, custom Python modules</td>
              </tr>
              <tr>
                <td>AI Explanation</td>
                <td>OpenAI GPT-4, LLaMA 2, Anthropic Claude</td>
              </tr>
              <tr>
                <td>CLI Interface</td>
                <td>Python Click/Typer with rich formatting</td>
              </tr>
              <tr>
                <td>Reporting</td>
                <td>Jinja2 templates, Markdown, JSON schema</td>
              </tr>
              <tr>
                <td>Testing</td>
                <td>pytest, hypothesis for property testing</td>
              </tr>
              <tr>
                <td>Version Control</td>
                <td>Git + GitHub with semantic versioning</td>
              </tr>
              <tr>
                <td>CI/CD</td>
                <td>GitHub Actions with automated testing</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Architecture */}
        <div className="content-section">
          <h2 className="subHeading"><span>Architecture & Workflow</span></h2>
          <div className="architecture-flow">
            <div className="flow-item">EVM Bytecode Input</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-item">Disassembler (evmdasm)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-item">Control Flow Analysis</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-item">Static Analyzer (Slither/Mythril)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-item">Optional Fuzzer (Dynamic Testing)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-item">LLM Explainer (GPT/LLaMA)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-item">Human-Readable Report</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-item">JSON | Markdown | HTML Output</div>
          </div>
        </div>

        

        {/* Example Output */}
        <div className="content-section">
          <h2 className="subHeading"><span>Example Analysis Output</span></h2>
          <div className="example-box">
            <h3>Function: transfer (0x401)</h3>
            <p className="risk-score"> Risk Score: 8/10 (HIGH)</p>
            <p><strong>LLM Explanation:</strong></p>
            <p>
              "This function implements an ERC20 token transfer mechanism but contains a critical vulnerability: it does not validate the return value of the external call to the recipient contract. This creates a potential reentrancy attack vector where a malicious receiving contract could call back into this function before the state is fully updated".
            </p>
            <p><strong>Detected Issues:</strong></p>
            <ul>
              <li>Unchecked return value from external call (CALL opcode at position 0x245)</li>
              <li>State changes occur after external call (violates checks-effects-interactions pattern)</li>
              <li>No reentrancy guard detected</li>
            </ul>
            <p><strong>Recommended Mitigations:</strong></p>
            <ul>
              <li>Implement the checks-effects-interactions pattern: update state before external calls</li>
              <li>Add explicit return value validation using require() or assert()</li>
              <li>Consider using OpenZeppelin's ReentrancyGuard modifier</li>
              <li>Use safe transfer patterns like SafeERC20 library</li>
            </ul>
            <p>
              <strong>Code Location:</strong> Opcodes 0x240-0x265 | Function selector: 0xa9059cbb
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="content-section">
          <h2 className="subHeading"><span>Impact & Applications</span></h2>
          <ul>
            <li><strong>Accelerated Smart Contract Auditing:</strong> Reduce audit time from days to hours with automated analysis and AI explanations</li>
            <li><strong>Educational Tool:</strong> Help developers and students understand EVM internals and security best practices</li>
            <li><strong>CTF & Security Research:</strong> Assist capture-the-flag players and researchers in analyzing challenge contracts</li>
            <li><strong>Due Diligence:</strong> Enable investors and users to assess contract security before interaction</li>
            <li><strong>Blockchain Security Advancement:</strong> Bridge traditional reverse engineering with modern AI/ML techniques</li>
            <li><strong>Industry Adoption:</strong> Scalable solution for auditing firms and blockchain development teams</li>
          </ul>
        </div>

        {/* Future Work */}
        <div className="content-section">
          <h2 className="subHeading"><span>Future Enhancements</span></h2>
          <ul>
            <li><strong>Multi-Chain Support:</strong> Extend to WASM smart contracts (Solana, Polkadot, Cosmos)</li>
            <li><strong>Advanced Vulnerability Scoring:</strong> Machine learning models for vulnerability severity prediction</li>
            <li><strong>Automated Exploit Generation:</strong> PoC generation for discovered vulnerabilities</li>
            <li><strong>CI/CD Pipeline Integration:</strong> GitHub Actions, GitLab CI plugins for automated security checks</li>
            <li><strong>Interactive Web Interface:</strong> Browser-based UI for contract analysis and visualization</li>
            <li><strong>Collaborative Auditing:</strong> Multi-user platform for team-based security reviews</li>
            <li><strong>Historical Analysis:</strong> Track contract upgrades and security improvements over time</li>
            <li><strong>Custom Rule Engine:</strong> Allow users to define project-specific security patterns</li>
          </ul>
        </div>

        {/* References */}
        <div className="content-section">
          <h2 className="subHeading"><span>References & Resources</span></h2>
          <ul>
            <li><a href="https://github.com/crytic/slither" target="_blank" rel="noopener noreferrer">Slither - Static Analysis Framework</a></li>
            <li><a href="https://github.com/crytic/echidna" target="_blank" rel="noopener noreferrer">Echidna - Fuzzing Tool</a></li>
            <li><a href="https://github.com/crytic/crytic-compile" target="_blank" rel="noopener noreferrer">Crytic-Compile - Compilation Library</a></li>
            <li><a href="https://github.com/ethereum/evmdasm" target="_blank" rel="noopener noreferrer">EVMDASM - Disassembler</a></li>
            <li><a href="https://github.com/ConsenSys/mythril" target="_blank" rel="noopener noreferrer">Mythril - Security Analysis Tool</a></li>
            <li>OpenAI GPT-4 Research Papers & Documentation</li>
            <li>LLaMA 2: Open Foundation and Fine-Tuned Chat Models</li>
            <li>Ethereum Yellow Paper - EVM Specification</li>
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="content-section" style={{ textAlign: 'left', marginTop: '4rem', paddingTop: '1rem', borderTop: '2px solid var(--muted-text-color)' }}>
          <p> Going to build a prototype in upcoming days.</p>
          <div className="buttons">
  
            <a href="https://github.com/xsh4n4/0xREvealer" className="button primary">View on Github</a>
            </div>
        </div>
      </div>
    </div>
  );
}