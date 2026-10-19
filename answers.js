// ============================================================
//  IT'S EXAM BABE — 10-Mark Model Answers Engine
//  Professor-Friendly Structure:
//    1. Introduction (Relevant)
//    2. Core Content & Explanation (with SVG Exam Diagrams)
//    3. Summary & Conclusion
//  Adjacent Companion Panel:
//    1. Tips to Remember (Mnemonics & memory hooks)
//    2. Subject Vocabulary (Keywords professors look for)
//    3. Mistakes to Avoid (Common exam pitfalls)
// ============================================================

const CURATED_ANSWERS = {

  // ============================================================
  //  1. COMPUTER NETWORKS
  // ============================================================

  "What is layered architecture? Explain about the functionalities of each layer in OSI/ISO reference model with a neat sketch.": {
    intro: "The Open Systems Interconnection (OSI) reference model was formulated by the International Organization for Standardization (ISO) in 1984. Layered architecture is a modular structural design methodology where a complex communication system is broken down into seven distinct, manageable, hierarchical tiers. Each layer fulfills a specialized set of network functions and interfaces with adjacent layers via Service Access Points (SAPs), ensuring protocol abstraction, vendor neutrality, and independent technological evolution.",
    content: `
      <h4>1. Architectural Philosophy of Layered Design</h4>
      <p>Layering adheres to modular engineering principles. An enhancement or protocol update at one layer (e.g., upgrading from IPv4 to IPv6 at Layer 3 or moving from copper Ethernet to optical fiber at Layer 1) requires zero operational modifications to higher transport or application layers.</p>

      <h4>2. Neat Sketch: The 7-Layer OSI Reference Architecture</h4>
      <div class="exam-diagram-box">
        <div class="diagram-title">✏️ Draw this in your exam paper: (7-Layer Stack & PDU Encapsulation)</div>
        <svg viewBox="0 0 600 240" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="layerGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#fff8ed" />
              <stop offset="100%" stop-color="#fdf4e3" />
            </linearGradient>
          </defs>
          <!-- Layers from 7 down to 1 -->
          <rect x="50" y="8" width="280" height="26" rx="4" fill="url(#layerGrad)" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="65" y="25" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">7. Application Layer</text>
          <text x="350" y="25" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">PDU: Data (HTTP, SMTP, DNS)</text>

          <rect x="50" y="38" width="280" height="26" rx="4" fill="url(#layerGrad)" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="65" y="55" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">6. Presentation Layer</text>
          <text x="350" y="55" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">PDU: Data (Encryption, Compression)</text>

          <rect x="50" y="68" width="280" height="26" rx="4" fill="url(#layerGrad)" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="65" y="85" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">5. Session Layer</text>
          <text x="350" y="85" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">PDU: Data (Dialog Control, Sync)</text>

          <rect x="50" y="98" width="280" height="26" rx="4" fill="url(#layerGrad)" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="65" y="115" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">4. Transport Layer</text>
          <text x="350" y="115" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">PDU: Segment (TCP/UDP, Port Nos)</text>

          <rect x="50" y="128" width="280" height="26" rx="4" fill="url(#layerGrad)" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="65" y="145" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">3. Network Layer</text>
          <text x="350" y="145" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">PDU: Packet (Routing, IP Addressing)</text>

          <rect x="50" y="158" width="280" height="26" rx="4" fill="url(#layerGrad)" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="65" y="175" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">2. Data Link Layer</text>
          <text x="350" y="175" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">PDU: Frame (MAC, Framing, CRC)</text>

          <rect x="50" y="188" width="280" height="26" rx="4" fill="url(#layerGrad)" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="65" y="205" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">1. Physical Layer</text>
          <text x="350" y="205" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">PDU: Bits (Voltage, Cabling, Pinouts)</text>

          <line x1="25" y1="20" x2="25" y2="200" stroke="#c07c2e" stroke-width="2" stroke-dasharray="3,3"/>
          <polygon points="25,208 20,198 30,198" fill="#c07c2e"/>
          <text x="10" y="125" transform="rotate(-90 10 125)" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#c07c2e">Data Encapsulation</text>
        </svg>
      </div>

      <h4>3. Systematic Functionalities of Each Layer</h4>
      <div class="table-responsive">
        <table class="exam-table">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Core Functionalities</th>
              <th>Standard Protocols & Devices</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Physical</strong></td>
              <td>Raw bit transmission, mechanical/electrical pinouts, data rate timing, physical bit synchronization, transmission mode (simplex/duplex).</td>
              <td>RJ-45, Fiber, Repeaters, Hubs</td>
            </tr>
            <tr>
              <td><strong>2. Data Link</strong></td>
              <td>Framing, physical hardware MAC addressing, error detection via CRC trailer, link-level flow control (Stop-and-Wait, ARQ).</td>
              <td>Ethernet 802.3, Wi-Fi 802.11, Switches, Bridges</td>
            </tr>
            <tr>
              <td><strong>3. Network</strong></td>
              <td>Logical host addressing (IPv4/IPv6), path determination (routing algorithms), packet forwarding, fragmentation and reassembly.</td>
              <td>IPv4, IPv6, ICMP, OSPF, BGP, Routers</td>
            </tr>
            <tr>
              <td><strong>4. Transport</strong></td>
              <td>End-to-end process-to-process communication, port addressing (16-bit), segmentation, connection establishment (3-way handshake), flow & error control.</td>
              <td>TCP, UDP</td>
            </tr>
            <tr>
              <td><strong>5. Session</strong></td>
              <td>Dialog control (half-duplex/full-duplex), session token synchronization, checkpoint insertion for crash recovery during long file transfers.</td>
              <td>NetBIOS, RPC, PPTP</td>
            </tr>
            <tr>
              <td><strong>6. Presentation</strong></td>
              <td>Data representation, character code translation (ASCII, EBCDIC), data compression (Huffman, LZW), cryptographic encryption/decryption (TLS).</td>
              <td>SSL/TLS, MIME, JPEG, MPEG</td>
            </tr>
            <tr>
              <td><strong>7. Application</strong></td>
              <td>Provides high-level network services directly to user applications and processes: web browsing, file transfer, electronic mail, directory resolution.</td>
              <td>HTTP, HTTPS, SMTP, FTP, DNS</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    summary: "The 7-layer OSI model serves as the universally recognized theoretical gold standard for network communications. While the commercial Internet utilizes the pragmatic 4-layer TCP/IP suite, the OSI model provides an invaluable diagnostic reference model for understanding encapsulation, protocol design, and network troubleshooting.",
    tips: [
      "Top-to-Bottom Mnemonic: 'All People Seem To Need Data Processing' (Application to Physical).",
      "Bottom-to-Top Mnemonic: 'Please Do Not Throw Sausage Pizza Away' (Physical to Application).",
      "Always state the Protocol Data Unit (PDU) for each layer in your answer: Bits -> Frames -> Packets -> Segments -> Data.",
      "Highlight that Data Link is the only layer that prepends a Header (H2) AND appends a Trailer (T2 containing CRC)."
    ],
    vocab: [
      { term: "PDU", def: "Protocol Data Unit — the formal packaging entity of data at each respective architectural layer." },
      { term: "Encapsulation", def: "The process of wrapping payload data with layer-specific protocol control headers and trailers." },
      { term: "SAP", def: "Service Access Point — the conceptual interface through which a lower layer delivers services to the adjacent higher layer." },
      { term: "Framing", def: "Delineating continuous bit streams into distinct discernible frames using byte/bit stuffing." }
    ],
    mistakes: [
      "Confusing Layer 2 (MAC addressing / Frames) with Layer 3 (IP addressing / Packets).",
      "Forgetting to mention the trailer in the Data Link Layer (Layer 2 adds both header and CRC trailer).",
      "Calling OSI an implementation rather than a reference/conceptual model."
    ]
  },

  "Explain TCP/IP reference model with a neat sketch.": {
    intro: "The TCP/IP (Transmission Control Protocol / Internet Protocol) reference model was formulated by DARPA for the ARPANET and serves as the operational architecture of the global Internet. Engineered for resilient packet-switched communication across heterogeneous networks, the TCP/IP suite condenses network communication into 4 pragmatic layers: Network Access, Internet, Transport, and Application.",
    content: `
      <h4>1. The Hourglass Architecture Rationale</h4>
      <p>The core philosophy of TCP/IP is the 'Hourglass' model: diverse physical networks (Ethernet, Wi-Fi, Satellite) at the bottom and diverse application protocols (HTTP, SMTP, DNS) at the top all converge through a single, unified, connectionless Internet Protocol (IP) at the waist.</p>

      <h4>2. Neat Sketch: TCP/IP Layer Architecture & Protocol Stack</h4>
      <div class="exam-diagram-box">
        <div class="diagram-title">✏️ Draw this in your exam paper: (TCP/IP Architecture & Protocol Mapping)</div>
        <svg viewBox="0 0 600 220" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="15" width="220" height="38" rx="5" fill="#fff8ed" stroke="#c07c2e" stroke-width="2"/>
          <text x="75" y="33" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">4. Application Layer</text>
          <text x="75" y="46" font-family="Inter, sans-serif" font-size="10" fill="#7a6a55">HTTP, HTTPS, DNS, SMTP, FTP, SSH</text>

          <rect x="60" y="62" width="220" height="38" rx="5" fill="#fff8ed" stroke="#c07c2e" stroke-width="2"/>
          <text x="75" y="80" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">3. Transport Layer</text>
          <text x="75" y="93" font-family="Inter, sans-serif" font-size="10" fill="#7a6a55">TCP (Reliable) | UDP (Lightweight)</text>

          <rect x="60" y="109" width="220" height="38" rx="5" fill="#fff8ed" stroke="#c07c2e" stroke-width="2"/>
          <text x="75" y="127" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">2. Internet Layer</text>
          <text x="75" y="140" font-family="Inter, sans-serif" font-size="10" fill="#7a6a55">IPv4, IPv6, ICMP, ARP, IGMP</text>

          <rect x="60" y="156" width="220" height="38" rx="5" fill="#fff8ed" stroke="#c07c2e" stroke-width="2"/>
          <text x="75" y="174" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#1a1612">1. Network Access Layer</text>
          <text x="75" y="187" font-family="Inter, sans-serif" font-size="10" fill="#7a6a55">Ethernet (802.3), Wi-Fi (802.11), PPP</text>

          <!-- OSI comparison box -->
          <rect x="330" y="15" width="230" height="179" rx="6" fill="#f5f0e8" stroke="#d9c9a8" stroke-dasharray="3,3"/>
          <text x="350" y="35" font-family="Inter, sans-serif" font-size="12" font-weight="bold" fill="#4a3f30">OSI Equivalence Comparison:</text>
          <text x="350" y="60" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">→ App + Pres + Sess = Application</text>
          <text x="350" y="98" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">→ Transport Layer = Transport</text>
          <text x="350" y="135" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">→ Network Layer = Internet</text>
          <text x="350" y="175" font-family="Inter, sans-serif" font-size="11" fill="#7a6a55">→ Data Link + Physical = Net Access</text>
        </svg>
      </div>

      <h4>3. Detailed Layer Descriptions</h4>
      <ul>
        <li><strong>Network Access Layer:</strong> Manages physical media transmission and framing. Accepts IP packets and encapsulates them into network frames with hardware MAC addresses.</li>
        <li><strong>Internet Layer:</strong> Anchored by the Internet Protocol (IP). Operates connectionless, best-effort packet delivery across multiple routers using logical addressing and routing algorithms.</li>
        <li><strong>Transport Layer:</strong> End-to-end host transport. Provides TCP for reliable, ordered, byte-stream connection-oriented transport, or UDP for fast, connectionless datagram transport.</li>
        <li><strong>Application Layer:</strong> Combines functions of OSI Layers 5, 6, and 7 into a streamlined user application interface.</li>
      </ul>
    `,
    summary: "The TCP/IP model's pragmatic, modular design enabled the unprecedented scaling of the global Internet. By decoupling network hardware from transport protocols, it provided the flexibility and resilience needed for modern digital communication.",
    tips: [
      "In the exam, draw the TCP/IP stack side-by-side with the OSI 7-layer model to demonstrate comparative mastery.",
      "Emphasize that IP provides 'best-effort' delivery — meaning it does not guarantee delivery; reliability is handled by TCP above it.",
      "Mention ICMP (ping, traceroute) and ARP as vital supporting protocols of the Internet layer."
    ],
    vocab: [
      { term: "Hourglass Architecture", def: "Design where many application protocols and physical media converge through unified IP layer." },
      { term: "Connectionless", def: "Transmission model where each packet is routed independently without prior handshake setup." },
      { term: "Best-Effort", def: "Service level with no absolute guarantee that packets will reach destination without drops." }
    ],
    mistakes: [
      "Writing that TCP/IP has 7 layers like OSI.",
      "Claiming IP is a reliable protocol (IP is strictly unreliable and connectionless)."
    ]
  },

  "Illustrate CRC method for error detection with an example.": {
    intro: "Cyclic Redundancy Check (CRC) is a powerful, polynomial-based error-detection technique widely deployed in data link layer protocols like Ethernet (IEEE 802.3) and HDLC. It interprets binary bit sequences as algebraic polynomials with binary coefficients and performs modulo-2 division using a predetermined generator polynomial G(x). The resulting remainder is appended to the message as an error-checking frame check sequence (FCS).",
    content: `
      <h4>1. Modulo-2 Arithmetic Fundamentals</h4>
      <p>Modulo-2 binary arithmetic operates without carries in addition and without borrows in subtraction. Both operations are mathematically equivalent to the bitwise <strong>XOR</strong> operation:</p>
      <pre class="code-block">0 ⊕ 0 = 0 | 0 ⊕ 1 = 1 | 1 ⊕ 0 = 1 | 1 ⊕ 1 = 0</pre>

      <h4>2. Step-by-Step Numerical Example</h4>
      <p><strong>Given:</strong> Message <code>M = 100100</code> (6 bits) and Generator Polynomial <code>G(x) = x³ + x + 1</code> (Binary: <code>1011</code>, degree r = 3).</p>
      <ol>
        <li>Append <code>r = 3</code> zeroes to M: Augmented message = <code>100100000</code>.</li>
        <li>Divide <code>100100000</code> by <code>1011</code> using modulo-2 (XOR) division.</li>
        <li>The resulting remainder is the 3-bit CRC Checksum.</li>
      </ol>

      <h4>3. Neat Sketch: Modulo-2 XOR Division</h4>
      <div class="exam-diagram-box">
        <div class="diagram-title">✏️ Draw this in your exam paper: (Modulo-2 Long Division Tracing)</div>
        <pre class="diagram-pre">
        Divisor: 1011 ) 100100000 ( Quotient: 101011
                        1011
                        ----
                         01000
                          1011
                          ----
                           00110
                            0000
                            ----
                             1100
                             1011
                             ----
                              1110
                              1011
                              ----
                               101  <-- Remainder (CRC = 101)

Codeword to Transmit = Message + CRC = 100100 101 = 100100101
        </pre>
      </div>

      <h4>4. Verification at the Receiver</h4>
      <p>The receiver receives <code>100100101</code> and divides it by the identical generator <code>1011</code> using modulo-2 arithmetic:</p>
      <ul>
        <li>If Remainder = <strong>000</strong>: The transmission is accepted as error-free.</li>
        <li>If Remainder ≠ <strong>000</strong>: Transmission error detected; the receiver drops the frame.</li>
      </ul>
    `,
    summary: "CRC provides robust protection against transmission noise. A generator polynomial of degree r detects 100% of single-bit errors, 100% of double-bit errors, all odd numbers of bit errors, and burst errors up to length r.",
    tips: [
      "Always append exactly r zeroes to the data, where r is the degree of the generator polynomial.",
      "In XOR division: if the leading bit is 1, place 1 in quotient and XOR with divisor; if leading bit is 0, place 0 and XOR with 0000.",
      "Check that the CRC remainder length equals degree r (pad with leading zeroes if necessary)."
    ],
    vocab: [
      { term: "Generator Polynomial", def: "Predefined algebraic divisor polynomial agreed upon by both sender and receiver." },
      { term: "Modulo-2 Arithmetic", def: "Binary arithmetic without carries or borrows, identical to bitwise XOR." },
      { term: "Burst Error", def: "Condition where two or more consecutive bits are flipped during transmission." }
    ],
    mistakes: [
      "Using standard arithmetic subtraction instead of bitwise XOR.",
      "Appending n zeroes instead of r = n-1 zeroes (for a 4-bit divisor, append 3 zeroes).",
      "Omitting leading zeroes from the final remainder."
    ]
  },

  // ============================================================
  //  2. DESIGN & ANALYSIS OF ALGORITHMS
  // ============================================================

  "What is algorithm? Explain the properties of algorithm.": {
    intro: "An algorithm is a finite, well-defined, unambiguous sequence of computational instructions designed to solve a specific problem or compute an output from given inputs. Formulated by the 9th-century Persian scholar Muhammad ibn Musa al-Khwarizmi, algorithms serve as the theoretical, hardware-independent core of all computer programs and automated software systems.",
    content: `
      <h4>1. The Conceptual IPO Processing Model</h4>
      <p>An algorithm transforms input into output through sequential mathematical and logical operations. It must be language-agnostic and analyzed for asymptotic performance.</p>

      <h4>2. Neat Sketch: Input-Process-Output Model</h4>
      <div class="exam-diagram-box">
        <div class="diagram-title">✏️ Draw this in your exam paper: (Algorithm Structural Model)</div>
        <svg viewBox="0 0 600 110" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="30" width="110" height="45" rx="6" fill="#fff8ed" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="95" y="57" font-family="Inter,sans-serif" font-size="12" font-weight="bold" fill="#1a1612" text-anchor="middle">Input (≥ 0)</text>

          <line x1="150" y1="52" x2="210" y2="52" stroke="#c07c2e" stroke-width="2"/>
          <polygon points="210,52 202,47 202,57" fill="#c07c2e"/>

          <rect x="210" y="20" width="180" height="65" rx="8" fill="#ede4d3" stroke="#c07c2e" stroke-width="2"/>
          <text x="300" y="47" font-family="Inter,sans-serif" font-size="13" font-weight="bold" fill="#1a1612" text-anchor="middle">ALGORITHM</text>
          <text x="300" y="67" font-family="Inter,sans-serif" font-size="10" fill="#4a3f30" text-anchor="middle">Finiteness · Definiteness · Effectiveness</text>

          <line x1="390" y1="52" x2="450" y2="52" stroke="#c07c2e" stroke-width="2"/>
          <polygon points="450,52 442,47 442,57" fill="#c07c2e"/>

          <rect x="450" y="30" width="110" height="45" rx="6" fill="#fff8ed" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="505" y="57" font-family="Inter,sans-serif" font-size="12" font-weight="bold" fill="#1a1612" text-anchor="middle">Output (≥ 1)</text>
        </svg>
      </div>

      <h4>3. Five Fundamental Properties of Algorithms (Knuth's Criteria)</h4>
      <div class="table-responsive">
        <table class="exam-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Formal Requirement</th>
              <th>Detailed Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Finiteness</strong></td>
              <td>Must terminate after a finite number of steps for all valid inputs.</td>
              <td>An algorithm must never trap the processor in an infinite loop. Even operating systems run infinite main loops composed of finite sub-algorithms.</td>
            </tr>
            <tr>
              <td><strong>2. Definiteness</strong></td>
              <td>Every step must be precisely, rigorously, and unambiguously defined.</td>
              <td>Each computational instruction must have exactly one interpretation. Ambiguous phrases like 'divide by approximate average' violate definiteness.</td>
            </tr>
            <tr>
              <td><strong>3. Input</strong></td>
              <td>Accepts zero or more externally supplied quantities.</td>
              <td>Inputs must come from specified domains. An algorithm can take zero inputs (e.g. generating the first 50 prime numbers).</td>
            </tr>
            <tr>
              <td><strong>4. Output</strong></td>
              <td>Must produce at least one or more observable results.</td>
              <td>A procedure producing zero outputs or observable side-effects is computationally useless.</td>
            </tr>
            <tr>
              <td><strong>5. Effectiveness</strong></td>
              <td>Operations must be sufficiently basic to be executed mechanically with paper and pencil in finite time.</td>
              <td>Instructions must be mathematically feasible (e.g., cannot require infinite precision division or solving undecidable problems).</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    summary: "Algorithms provide the formal logical foundation of computation. By adhering strictly to Donald Knuth's 5 criteria (FIDEO), an algorithm ensures deterministic execution, mathematical analyzeability, and predictable computational complexity.",
    tips: [
      "Remember the acronym 'FIDEO': Finiteness, Input, Definiteness, Effectiveness, Output.",
      "Mention Donald Knuth explicitly — referencing Knuth's Art of Computer Programming earns high marks.",
      "Distinguish between an algorithm (abstract design) and a program (implementation in a specific language)."
    ],
    vocab: [
      { term: "Finiteness", def: "Property guaranteeing algorithmic termination after a finite count of operational steps." },
      { term: "Definiteness", def: "Absolute absence of ambiguity; every operational instruction has a single deterministic meaning." },
      { term: "Effectiveness", def: "Feasibility of each operation being executed in finite time using basic mechanical operations." }
    ],
    mistakes: [
      "Stating that an algorithm requires at least 1 input (algorithms can have 0 inputs).",
      "Confusing an abstract algorithm with an executable program in a specific programming language."
    ]
  },

  "Explain how each phase (Divide, Conquer, and Combine) is implemented in Quick Sort with example.": {
    intro: "Quick Sort, designed by Sir Tony Hoare in 1959, is a highly efficient, comparison-based, in-place sorting algorithm utilizing the Divide-and-Conquer paradigm. It partitions an array into two subarrays around a selected pivot element such that elements smaller than the pivot precede it and elements larger follow it. With an average time complexity of O(n log n), Quick Sort is universally adopted in system libraries.",
    content: `
      <h4>1. The Three Paradigm Phases of Quick Sort</h4>
      <ul>
        <li><strong>1. Divide:</strong> Select a pivot element. Rearrange (partition) the array such that all elements ≤ pivot move to the left partition, and all elements > pivot move to the right partition. The pivot is placed into its final sorted index <code>q</code>.</li>
        <li><strong>2. Conquer:</strong> Recursively apply Quick Sort to the left subarray <code>A[p ... q-1]</code> and the right subarray <code>A[q+1 ... r]</code>.</li>
        <li><strong>3. Combine:</strong> Because partitioning is executed in-place within the original array memory, the Combine phase requires <strong>zero work</strong>! The entire array is sorted once subproblems reach base size (0 or 1).</li>
      </ul>

      <h4>2. Neat Sketch: Quick Sort Partitioning Tree</h4>
      <div class="exam-diagram-box">
        <div class="diagram-title">✏️ Draw this in your exam paper: (Partition Tree with Pivot Selection)</div>
        <svg viewBox="0 0 600 180" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
          <rect x="180" y="10" width="240" height="28" rx="4" fill="#fff8ed" stroke="#c07c2e" stroke-width="2"/>
          <text x="300" y="28" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">Input: [ 10, 80, 30, 90, 40, 50, 70 ]</text>

          <line x1="300" y1="38" x2="300" y2="60" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="310" y="52" font-family="Inter,sans-serif" font-size="10" fill="#c07c2e">Pivot = 70</text>

          <rect x="100" y="60" width="160" height="28" rx="4" fill="#ede4d3" stroke="#c07c2e"/>
          <text x="180" y="78" font-family="Inter,sans-serif" font-size="11" fill="#1a1612" text-anchor="middle">Left: [ 10, 30, 40, 50 ]</text>

          <rect x="280" y="60" width="40" height="28" rx="4" fill="#e8a84a" stroke="#c07c2e" stroke-width="2"/>
          <text x="300" y="78" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">[70]</text>

          <rect x="340" y="60" width="160" height="28" rx="4" fill="#ede4d3" stroke="#c07c2e"/>
          <text x="420" y="78" font-family="Inter,sans-serif" font-size="11" fill="#1a1612" text-anchor="middle">Right: [ 90, 80 ]</text>

          <line x1="180" y1="88" x2="180" y2="115" stroke="#a89880" stroke-width="1.5"/>
          <rect x="110" y="115" width="140" height="25" rx="3" fill="#fff8ed" stroke="#c07c2e"/>
          <text x="180" y="132" font-family="Inter,sans-serif" font-size="10" fill="#1a1612" text-anchor="middle">[ 10, 30, 40, 50 ] sorted</text>

          <line x1="420" y1="88" x2="420" y2="115" stroke="#a89880" stroke-width="1.5"/>
          <rect x="360" y="115" width="120" height="25" rx="3" fill="#fff8ed" stroke="#c07c2e"/>
          <text x="420" y="132" font-family="Inter,sans-serif" font-size="10" fill="#1a1612" text-anchor="middle">[ 80, 90 ] sorted</text>

          <text x="300" y="165" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#c07c2e" text-anchor="middle">Final Combined Array: [ 10, 30, 40, 50, 70, 80, 90 ]</text>
        </svg>
      </div>

      <h4>3. Partition Algorithm (Lomuto Partition Scheme)</h4>
      <pre class="code-block">
PARTITION(A, p, r):
    pivot = A[r]
    i = p - 1
    for j = p to r - 1:
        if A[j] <= pivot:
            i = i + 1
            swap A[i] with A[j]
    swap A[i + 1] with A[r]
    return i + 1
      </pre>

      <h4>4. Asymptotic Complexity Analysis</h4>
      <ul>
        <li><strong>Best Case:</strong> O(n log n) when pivot divides array into two balanced halves each step.</li>
        <li><strong>Average Case:</strong> O(n log n) across random permutations.</li>
        <li><strong>Worst Case:</strong> O(n²) when array is already sorted and pivot selected is always smallest or largest element.</li>
        <li><strong>Space Complexity:</strong> O(log n) auxiliary stack space for recursive calls.</li>
      </ul>
    `,
    summary: "Quick Sort is the premier practical sorting algorithm. By concentrating computational work into the Divide (partitioning) phase, it achieves in-place sorting without the O(n) memory penalty required by Merge Sort.",
    tips: [
      "Emphasize that the Combine phase requires zero computation in Quick Sort (unlike Merge Sort).",
      "Write both recurrence relations: Best T(n) = 2T(n/2) + O(n) => O(n log n); Worst T(n) = T(n-1) + O(n) => O(n²).",
      "Explain how Randomized Quick Sort avoids the O(n²) worst-case on sorted arrays."
    ],
    vocab: [
      { term: "Pivot", def: "The benchmark element chosen to split an array into smaller and greater partitions." },
      { term: "In-Place Sorting", def: "Sorting algorithm that rearranges elements within original array memory without extra buffers." },
      { term: "Lomuto Partition", def: "Partitioning technique where two pointers move monotonically from left to right." }
    ],
    mistakes: [
      "Stating Quick Sort worst-case is O(n log n) — it is O(n²) when input is already sorted with naive pivot.",
      "Claiming Quick Sort requires O(n) extra space like Merge Sort."
    ]
  },

  // ============================================================
  //  3. DATA ANALYTICS
  // ============================================================

  "Explain about Regression Analysis.": {
    intro: "Regression Analysis is a foundational supervised statistical and predictive modeling technique used to investigate and quantify the relationship between a continuous dependent target variable (Y) and one or more independent predictor variables (X). It is utilized throughout engineering, finance, and science for forecasting, causal inference, and trend estimation.",
    content: `
      <h4>1. Mathematical Model Formulation</h4>
      <p>Simple Linear Regression models the linear association between predictor X and continuous target Y as:</p>
      <pre class="code-block">Y = β₀ + β₁X + ε</pre>
      <p>Where β₀ is the Y-intercept, β₁ is the regression slope coefficient, and ε is the residual error disturbance term.</p>

      <h4>2. Neat Sketch: Ordinary Least Squares (OLS) Best Fit</h4>
      <div class="exam-diagram-box">
        <div class="diagram-title">✏️ Draw this in your exam paper: (Line of Best Fit & Residual Errors)</div>
        <svg viewBox="0 0 600 180" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
          <line x1="60" y1="150" x2="520" y2="150" stroke="#1a1612" stroke-width="2"/>
          <line x1="60" y1="150" x2="60" y2="20" stroke="#1a1612" stroke-width="2"/>
          <text x="530" y="155" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612">X (Predictor)</text>
          <text x="60" y="15" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">Y</text>

          <line x1="80" y1="135" x2="480" y2="35" stroke="#c07c2e" stroke-width="2.5"/>
          <text x="490" y="35" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#c07c2e">Line of Best Fit: Ŷ = a + bX</text>

          <!-- Residual lines -->
          <circle cx="150" cy="100" r="4" fill="#1a1612"/>
          <line x1="150" y1="100" x2="150" y2="118" stroke="#e8a84a" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="155" y="112" font-family="Inter,sans-serif" font-size="10" fill="#c07c2e">e₁</text>

          <circle cx="260" cy="115" r="4" fill="#1a1612"/>
          <line x1="260" y1="115" x2="260" y2="90" stroke="#e8a84a" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="265" y="105" font-family="Inter,sans-serif" font-size="10" fill="#c07c2e">e₂</text>

          <circle cx="370" cy="50" r="4" fill="#1a1612"/>
          <line x1="370" y1="50" x2="370" y2="63" stroke="#e8a84a" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="375" y="60" font-family="Inter,sans-serif" font-size="10" fill="#c07c2e">e₃</text>

          <text x="300" y="170" font-family="Inter,sans-serif" font-size="10" font-style="italic" fill="#7a6a55" text-anchor="middle">OLS Objective: Minimize Sum of Squared Errors Σ(eᵢ)² = Σ(Yᵢ - Ŷᵢ)²</text>
        </svg>
      </div>

      <h4>3. Normal Equations for OLS Solution</h4>
      <p>The coefficients <code>a</code> and <code>b</code> are derived by solving the two normal equations:</p>
      <pre class="code-block">
1. ΣY = n·a + b·ΣX
2. ΣXY = a·ΣX + b·ΣX²

Slope b = [ n·Σ(XY) - (ΣX)(ΣY) ] / [ n·Σ(X²) - (ΣX)² ]
Intercept a = Ȳ - b·X̄
      </pre>

      <h4>4. Regression Types & Evaluation</h4>
      <ul>
        <li><strong>Simple Linear:</strong> One predictor, continuous target.</li>
        <li><strong>Multiple Linear:</strong> Multiple predictors: <code>Y = β₀ + β₁X₁ + β₂X₂ + ... + βₖXₖ + ε</code>.</li>
        <li><strong>Logistic Regression:</strong> Target is binary (0/1); models probability using the Sigmoid curve.</li>
        <li><strong>Coefficient of Determination (R²):</strong> Proportion of variance in Y explained by predictors (0 to 1).</li>
      </ul>
    `,
    summary: "Regression analysis remains the preeminent parametric technique for predictive modeling of continuous outcomes. Solving via Ordinary Least Squares provides minimum-variance, unbiased estimates under classical Gauss-Markov conditions.",
    tips: [
      "Always write down the two normal equations in your exam answer.",
      "Draw the scatter plot with the fitted regression line and dashed vertical residual lines e_i.",
      "Distinguish Regression (predicts continuous values) from Classification (predicts categorical labels)."
    ],
    vocab: [
      { term: "OLS", def: "Ordinary Least Squares — mathematical optimization minimizing sum of squared vertical residuals." },
      { term: "Residual", def: "The vertical error difference between observed data point Y and predicted value Ŷ." },
      { term: "R² Score", def: "Proportion of total variance in the dependent variable explained by regression predictors." }
    ],
    mistakes: [
      "Minimizing Σe instead of Σ(e)² (positive and negative errors cancel out to zero without squaring).",
      "Confusing Regression with Classification."
    ]
  },

  // ============================================================
  //  4. DEVOPS
  // ============================================================

  "Discuss the pull request model and its advantages in a DevOps environment.": {
    intro: "The Pull Request (PR) model — known as a Merge Request in GitLab — is a collaborative code integration protocol in modern distributed version control. Developers commit code to dedicated feature branches and submit a formal Pull Request. The PR triggers automated CI build/test validation, facilitates peer code review, and merges into the main branch only upon meeting verified quality gates.",
    content: `
      <h4>1. Step-by-Step Lifecycle of a Pull Request</h4>
      <ol>
        <li><strong>Branch Creation:</strong> Developer branches from main: <code>git checkout -b feature/auth</code>.</li>
        <li><strong>Local Work & Push:</strong> Developer commits changes locally and pushes feature branch to remote Git server.</li>
        <li><strong>PR Creation:</strong> Developer files a Pull Request targeting main branch.</li>
        <li><strong>Automated CI Verification:</strong> Webhooks trigger Jenkins/GitHub Actions to run linters, unit tests, and security scans.</li>
        <li><strong>Peer Code Review:</strong> Teammates inspect diffs, write inline comments, and suggest refinements.</li>
        <li><strong>Approval & Automated Merge:</strong> Upon approvals and green CI checks, branch merges into main and auto-deploys.</li>
      </ol>

      <h4>2. Neat Sketch: Git Feature Branching & Pull Request Gate</h4>
      <div class="exam-diagram-box">
        <div class="diagram-title">✏️ Draw this in your exam paper: (PR Review & Merge Flowchart)</div>
        <svg viewBox="0 0 600 160" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Main branch line -->
          <line x1="50" y1="120" x2="550" y2="120" stroke="#1a1612" stroke-width="3"/>
          <text x="50" y="145" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612">main branch</text>

          <circle cx="90" cy="120" r="7" fill="#c07c2e"/>
          <circle cx="180" cy="120" r="7" fill="#1a1612"/>
          <circle cx="500" cy="120" r="7" fill="#2a9d8f"/>

          <!-- Feature branch branch-out -->
          <path d="M 90 120 C 120 70, 150 50, 200 50" fill="none" stroke="#c07c2e" stroke-width="2" stroke-dasharray="4,4"/>
          <line x1="200" y1="50" x2="380" y2="50" stroke="#c07c2e" stroke-width="2"/>
          <text x="180" y="35" font-family="Inter,sans-serif" font-size="10" font-weight="bold" fill="#c07c2e">feature/new-api</text>

          <circle cx="250" cy="50" r="6" fill="#e8a84a"/>
          <circle cx="320" cy="50" r="6" fill="#e8a84a"/>

          <!-- Pull Request Quality Box -->
          <rect x="340" y="25" width="120" height="45" rx="5" fill="#fff8ed" stroke="#c07c2e" stroke-width="1.5"/>
          <text x="400" y="42" font-family="Inter,sans-serif" font-size="10" font-weight="bold" fill="#1a1612" text-anchor="middle">PULL REQUEST</text>
          <text x="400" y="56" font-family="Inter,sans-serif" font-size="9" fill="#7a6a55" text-anchor="middle">CI Tests + Review</text>

          <!-- Merge back to main -->
          <path d="M 380 50 C 430 50, 460 90, 500 120" fill="none" stroke="#2a9d8f" stroke-width="2"/>
          <polygon points="500,120 490,113 494,124" fill="#2a9d8f"/>
          <text x="500" y="145" font-family="Inter,sans-serif" font-size="10" font-weight="bold" fill="#2a9d8f">Merged</text>
        </svg>
      </div>

      <h4>3. Strategic DevOps Advantages</h4>
      <div class="table-responsive">
        <table class="exam-table">
          <thead>
            <tr>
              <th>Advantage</th>
              <th>Technical Impact in DevOps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Code Quality Enforcement</strong></td>
              <td>Enforces multi-person review preventing untested bugs, anti-patterns, and vulnerabilities from reaching production.</td>
            </tr>
            <tr>
              <td><strong>Automated CI Integration</strong></td>
              <td>Triggers automated test suites, linting, and docker image build validation before human review.</td>
            </tr>
            <tr>
              <td><strong>Auditability & Traceability</strong></td>
              <td>Maintains permanent Git history linking developer discussions, Jira tickets, and test logs.</td>
            </tr>
            <tr>
              <td><strong>Main Branch Protection</strong></td>
              <td>Ensures production/main branch is always clean, stable, and continuously deployable.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    summary: "The Pull Request model forms the backbone of continuous integration culture in DevOps. By turning code merging into an automated, transparent quality gate, teams achieve rapid delivery without sacrificing code stability.",
    tips: [
      "Draw the feature branch diverging, entering the PR review gate, and merging back into main.",
      "Emphasize the 'Shift-Left' testing principle — catching bugs during PR review rather than in production.",
      "Note that Pull Requests are a platform collaboration feature (GitHub, GitLab), not a low-level Git CLI command."
    ],
    vocab: [
      { term: "Pull Request", def: "Formal submission requesting peer review and automated validation before merging branch into main." },
      { term: "Branch Protection", def: "Repository governance rule prohibiting direct pushes to main without passing PR checks." },
      { term: "Shift-Left", def: "DevOps practice of testing and evaluating security as early as possible in the development lifecycle." }
    ],
    mistakes: [
      "Saying `git pull-request` is a Git command (it is a feature of web hosts like GitHub/GitLab).",
      "Treating PRs as purely human reviews; automated CI test checks are equally critical."
    ]
  }

};

// ============================================================
//  UNIVERSAL TOPIC KNOWLEDGE SYNTHESIS ENGINE
// ============================================================

function synthesizeAnswer(subjectId, qObj) {
  const q = qObj.q;
  const qLower = q.toLowerCase();
  const unit = qObj.unit || 1;

  // --- COMPUTER NETWORKS ---
  if (subjectId.includes("cn")) {
    if (qLower.includes("media") || qLower.includes("guided") || qLower.includes("unguided") || qLower.includes("cable") || qLower.includes("fiber")) {
      return {
        intro: "Transmission media constitutes the physical layer communication path facilitating the propagation of data in the form of electromagnetic energy between transmitter and receiver. Transmission media is broadly categorized into Guided (bounded physical conductors like Twisted Pair, Coaxial, and Optical Fiber) and Unguided (unbounded wireless propagation via Radio, Microwave, and Infrared waves).",
        content: `
          <h4>1. Classification of Transmission Media</h4>
          <p>Guided media constrains and guides electromagnetic waves along a solid physical path, providing high data rates and physical security. Unguided media radiates electromagnetic signals through atmosphere or vacuum omnidirectionally or directionally.</p>
          <div class="exam-diagram-box">
            <div class="diagram-title">✏️ Draw this in your exam paper: (Transmission Media Classification & Cross-Section)</div>
            <svg viewBox="0 0 600 150" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
              <rect x="220" y="10" width="160" height="26" rx="4" fill="#ede4d3" stroke="#c07c2e" stroke-width="2"/>
              <text x="300" y="27" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">Transmission Media</text>
              <line x1="260" y1="36" x2="150" y2="55" stroke="#c07c2e" stroke-width="1.5"/>
              <line x1="340" y1="36" x2="450" y2="55" stroke="#c07c2e" stroke-width="1.5"/>
              <rect x="80" y="55" width="140" height="25" rx="4" fill="#fff8ed" stroke="#c07c2e"/>
              <text x="150" y="72" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#c07c2e" text-anchor="middle">Guided (Bounded)</text>
              <text x="150" y="98" font-family="Inter,sans-serif" font-size="10" fill="#7a6a55" text-anchor="middle">• Twisted Pair (UTP/STP)</text>
              <text x="150" y="115" font-family="Inter,sans-serif" font-size="10" fill="#7a6a55" text-anchor="middle">• Coaxial Cable</text>
              <text x="150" y="132" font-family="Inter,sans-serif" font-size="10" fill="#7a6a55" text-anchor="middle">• Optical Fiber Cable</text>
              <rect x="380" y="55" width="140" height="25" rx="4" fill="#fff8ed" stroke="#c07c2e"/>
              <text x="450" y="72" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#c07c2e" text-anchor="middle">Unguided (Wireless)</text>
              <text x="450" y="98" font-family="Inter,sans-serif" font-size="10" fill="#7a6a55" text-anchor="middle">• Radio Waves (3kHz-1GHz)</text>
              <text x="450" y="115" font-family="Inter,sans-serif" font-size="10" fill="#7a6a55" text-anchor="middle">• Microwaves (1GHz-300GHz)</text>
              <text x="450" y="132" font-family="Inter,sans-serif" font-size="10" fill="#7a6a55" text-anchor="middle">• Infrared (300GHz-400THz)</text>
            </svg>
          </div>
          <h4>2. Technical Specifications & Comparisons</h4>
          <div class="table-responsive">
            <table class="exam-table">
              <tr><th>Medium</th><th>Bandwidth</th><th>Attenuation</th><th>EMI Immunity</th><th>Common Usage</th></tr>
              <tr><td>Twisted Pair</td><td>Moderate (10-1000 Mbps)</td><td>High</td><td>Low to Moderate</td><td>LAN (Cat 5e/6), Telephone lines</td></tr>
              <tr><td>Coaxial Cable</td><td>High (10-100 Mbps)</td><td>Moderate</td><td>Good (Braided shield)</td><td>Cable TV, Broadband LANs</td></tr>
              <tr><td>Fiber Optic</td><td>Extremely High (>10 Gbps)</td><td>Very Low (Total Internal Reflection)</td><td>Immune (Electromagnetic)</td><td>Backbone networks, Subsea links</td></tr>
            </table>
          </div>
        `,
        summary: "Guided media provides deterministic, interference-free transmission for localized high-bandwidth backbones, whereas unguided wireless media empowers mobility and wide-area coverage across terrestrial and satellite links.",
        tips: ["Always draw the fiber optic cross-section: Core (high refractive index n1), Cladding (lower index n2), Buffer jacket.", "Mention Total Internal Reflection as the governing physics principle of fiber optics.", "State frequency bands: Radio (< 1 GHz), Microwave (1-300 GHz), Infrared (> 300 GHz)."],
        vocab: [{ term: "Total Internal Reflection", def: "Phenomenon where light rays reflect entirely within optical core when angle of incidence exceeds critical angle." }, { term: "Attenuation", def: "Gradual loss of signal amplitude as electromagnetic energy travels over distance." }, { term: "EMI", def: "Electromagnetic Interference caused by external electromagnetic radiation." }],
        mistakes: ["Stating fiber optics conducts electrical current — it transmits light pulses.", "Confusing unshielded twisted pair (UTP) with shielded twisted pair (STP)."]
      };
    }

    if (qLower.includes("aloha") || qLower.includes("csma") || qLower.includes("mac") || qLower.includes("channel") || qLower.includes("access")) {
      return {
        intro: "Multiple Access Control (MAC) protocols resolve channel contention in shared broadcast communication mediums at the Data Link Layer. Random access protocols permit stations to transmit autonomously without central arbitration, employing protocols like Pure ALOHA, Slotted ALOHA, CSMA, CSMA/CD, and CSMA/CA to balance throughput and collision management.",
        content: `
          <h4>1. Protocol Theoretical Mechanics</h4>
          <ul>
            <li><strong>Pure ALOHA (Abramson, 1970):</strong> Stations transmit whenever data is ready. If collision occurs, stations wait a random backoff time. Vulnerable period is <code>2 × Tfr</code>. Max throughput = <code>S = G × e^(-2G) = 18.4%</code> at <code>G = 0.5</code>.</li>
            <li><strong>Slotted ALOHA (Roberts, 1972):</strong> Time is discretized into uniform slots equal to frame duration Tfr. Stations transmit strictly at slot boundaries. Vulnerable period halved to <code>Tfr</code>. Max throughput = <code>S = G × e^(-G) = 36.8%</code> at <code>G = 1.0</code>.</li>
            <li><strong>CSMA (Carrier Sense Multiple Access):</strong> 'Listen before speak'. Station senses carrier:
              <ul>
                <li><em>1-Persistent:</em> If busy, senses continuously; transmits immediately when idle.</li>
                <li><em>Non-Persistent:</em> If busy, waits random duration before sensing again.</li>
                <li><em>p-Persistent:</em> If idle, transmits with probability p, delays with (1-p).</li>
              </ul>
            </li>
          </ul>
          <div class="exam-diagram-box">
            <div class="diagram-title">✏️ Draw this in your exam paper: (Pure ALOHA vs Slotted ALOHA Vulnerability & CSMA Sensing)</div>
            <svg viewBox="0 0 600 130" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="20" width="220" height="35" rx="4" fill="#fff8ed" stroke="#c07c2e" stroke-width="1.5"/>
              <text x="160" y="42" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">Pure ALOHA (Continuous)</text>
              <text x="160" y="80" font-family="Inter,sans-serif" font-size="10" fill="#7a6a55" text-anchor="middle">Vulnerable Period = 2 × T_fr</text>
              <text x="160" y="100" font-family="Inter,sans-serif" font-size="10" font-weight="bold" fill="#c07c2e" text-anchor="middle">Max Throughput = 18.4%</text>

              <line x1="300" y1="15" x2="300" y2="120" stroke="#d9c9a8" stroke-dasharray="3,3"/>

              <rect x="330" y="20" width="220" height="35" rx="4" fill="#fff8ed" stroke="#c07c2e" stroke-width="1.5"/>
              <text x="440" y="42" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">Slotted ALOHA (Time Slots)</text>
              <text x="440" y="80" font-family="Inter,sans-serif" font-size="10" fill="#7a6a55" text-anchor="middle">Vulnerable Period = T_fr</text>
              <text x="440" y="100" font-family="Inter,sans-serif" font-size="10" font-weight="bold" fill="#c07c2e" text-anchor="middle">Max Throughput = 36.8%</text>
            </svg>
          </div>
        `,
        summary: "Random access protocols trade channel efficiency for simplicity and decentralized scalability. Slotted ALOHA doubles Pure ALOHA's efficiency by synchronizing transmission attempts, while CSMA further curtails collisions through carrier listening.",
        tips: ["Write throughput formulas clearly: S = G·e^(-2G) (Pure) and S = G·e^(-G) (Slotted).", "State minimum frame size condition for CSMA/CD: Frame_Size ≥ 2 × Propagation_Delay × Bandwidth.", "Draw flowchart of CSMA/CD with collision count k ≤ 15."],
        vocab: [{ term: "Throughput (S)", def: "Fraction of channel capacity successfully delivering collision-free frames." }, { term: "Offered Load (G)", def: "Average total number of frames generated per frame transmission time." }, { term: "Backoff Time", def: "Random waiting period chosen after collision to avoid repeated synchronized collisions." }],
        mistakes: ["Using standard arithmetic for throughput instead of exponential formula.", "Confusing CSMA/CD (used in wired Ethernet) with CSMA/CA (used in wireless 802.11)."]
      };
    }

    if (qLower.includes("routing") || qLower.includes("dijkstra") || qLower.includes("distance vector") || qLower.includes("link state")) {
      return {
        intro: "Routing algorithms in the Network Layer determine the optimal, shortest, and most efficient path for transmitting datagrams across interconnected networks. Routing strategies divide into Intra-domain (Interior Gateway) algorithms like Link State (OSPF) and Distance Vector (RIP), and Inter-domain protocols (BGP).",
        content: `
          <h4>1. Distance Vector vs Link State Routing</h4>
          <div class="table-responsive">
            <table class="exam-table">
              <tr><th>Dimension</th><th>Distance Vector Routing (Bellman-Ford)</th><th>Link State Routing (Dijkstra)</th></tr>
              <tr><td><strong>Knowledge</strong></td><td>Tells neighbors about the entire world.</td><td>Tells the entire world about immediate neighbors.</td></tr>
              <tr><td><strong>Algorithm</strong></td><td>Bellman-Ford equation: D_x(y) = min_v { c(x,v) + D_v(y) }</td><td>Dijkstra's shortest path greedy tree algorithm.</td></tr>
              <tr><td><strong>Convergence</strong></td><td>Slow convergence; suffers from Count-to-Infinity problem.</td><td>Fast convergence; broadcasts Link State Advertisements (LSAs).</td></tr>
              <tr><td><strong>Overhead</strong></td><td>Low CPU/Memory overhead; high convergence time.</td><td>Higher memory and CPU computation for shortest path trees.</td></tr>
            </table>
          </div>
          <h4>2. Neat Sketch: Dijkstra's Shortest Path Tree Algorithm</h4>
          <div class="exam-diagram-box">
            <div class="diagram-title">✏️ Draw this in your exam paper: (Network Graph & Shortest Path Tree)</div>
            <svg viewBox="0 0 600 130" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="65" r="16" fill="#fff8ed" stroke="#c07c2e" stroke-width="2"/>
              <text x="100" y="70" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">A</text>
              <circle cx="230" cy="30" r="16" fill="#fff8ed" stroke="#c07c2e" stroke-width="2"/>
              <text x="230" y="35" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">B</text>
              <circle cx="230" cy="100" r="16" fill="#fff8ed" stroke="#c07c2e" stroke-width="2"/>
              <text x="230" y="105" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">C</text>
              <circle cx="380" cy="65" r="16" fill="#e8a84a" stroke="#c07c2e" stroke-width="2"/>
              <text x="380" y="70" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">D</text>

              <line x1="116" y1="60" x2="214" y2="35" stroke="#c07c2e" stroke-width="2"/>
              <text x="160" y="44" font-family="Inter,sans-serif" font-size="10" font-weight="bold" fill="#c07c2e">cost: 2</text>
              <line x1="116" y1="70" x2="214" y2="95" stroke="#c07c2e" stroke-width="2"/>
              <text x="160" y="90" font-family="Inter,sans-serif" font-size="10" font-weight="bold" fill="#c07c2e">cost: 5</text>
              <line x1="246" y1="35" x2="364" y2="60" stroke="#c07c2e" stroke-width="2"/>
              <text x="310" y="44" font-family="Inter,sans-serif" font-size="10" font-weight="bold" fill="#c07c2e">cost: 3</text>
              <text x="490" y="70" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612">Shortest A→D = 5</text>
            </svg>
          </div>
        `,
        summary: "Routing algorithms constitute the intelligence of the network layer. Link State protocols dominate modern enterprise backbones due to loop-free instant convergence, while Distance Vector persists in smaller topologies.",
        tips: ["Show step-by-step relaxation in Dijkstra: dist[v] = min(dist[v], dist[u] + cost(u,v)).", "Explain Count-to-Infinity problem and its mitigation using Split Horizon and Poisoned Reverse.", "Mention OSPF as an implementation of Link State and RIP as an implementation of Distance Vector."],
        vocab: [{ term: "Convergence", def: "State where all router routing tables reflect consistent, synchronized network topologies." }, { term: "LSA", def: "Link State Advertisement — broadcast packet advertising state and cost of attached router links." }, { term: "Split Horizon", def: "Technique preventing routing loops by not advertising a route back toward its origin." }],
        mistakes: ["Confusing Distance Vector (Bellman-Ford) with Link State (Dijkstra).", "Failing to explain how Dijkstra selects the node with minimum tentative distance."]
      };
    }
  }

  // --- DAA TOPICS ---
  if (subjectId.includes("daa")) {
    if (qLower.includes("sort") || qLower.includes("merge") || qLower.includes("heap") || qLower.includes("binary search") || qLower.includes("divide")) {
      return {
        intro: "Divide and Conquer is a fundamental algorithmic paradigm that recursively decomposes a complex problem into two or more independent subproblems of the same type, solves the subproblems, and combines their solutions to formulate the comprehensive result. Foundational sorting algorithms like Merge Sort, Quick Sort, and Heap Sort achieve optimal O(n log n) average asymptotic bounds.",
        content: `
          <h4>1. Algorithmic Mechanics & Recurrence</h4>
          <ul>
            <li><strong>Merge Sort:</strong> Divides array into two halves at midpoint <code>m = (l+r)/2</code>, recursively sorts each half, and merges sorted sub-arrays in O(n) linear time. Recurrence: <code>T(n) = 2T(n/2) + O(n) => O(n log n)</code>. Stable, out-of-place.</li>
            <li><strong>Heap Sort:</strong> In-place comparison sort utilizing a Binary Max-Heap data structure. Builds max-heap in O(n), repeatedly swaps root (maximum) with end of array, and heapifies in O(log n). Total time: <code>O(n log n)</code> in all cases. Non-stable, in-place.</li>
            <li><strong>Binary Search:</strong> Eliminates half the search interval at each comparison on sorted arrays: <code>T(n) = T(n/2) + O(1) => O(log n)</code>.</li>
          </ul>
          <div class="exam-diagram-box">
            <div class="diagram-title">✏️ Draw this in your exam paper: (Merge Sort Split & Combine Tree / Max-Heap Structure)</div>
            <svg viewBox="0 0 600 130" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
              <rect x="220" y="10" width="160" height="25" rx="4" fill="#ede4d3" stroke="#c07c2e" stroke-width="2"/>
              <text x="300" y="27" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">[ 38, 27, 43, 3, 9, 82, 10 ]</text>

              <line x1="260" y1="35" x2="160" y2="52" stroke="#c07c2e" stroke-width="1.5"/>
              <line x1="340" y1="35" x2="440" y2="52" stroke="#c07c2e" stroke-width="1.5"/>

              <rect x="100" y="52" width="120" height="22" rx="4" fill="#fff8ed" stroke="#c07c2e"/>
              <text x="160" y="67" font-family="Inter,sans-serif" font-size="10" fill="#1a1612" text-anchor="middle">[ 38, 27, 43, 3 ]</text>
              <rect x="380" y="52" width="120" height="22" rx="4" fill="#fff8ed" stroke="#c07c2e"/>
              <text x="440" y="67" font-family="Inter,sans-serif" font-size="10" fill="#1a1612" text-anchor="middle">[ 9, 82, 10 ]</text>

              <line x1="160" y1="74" x2="260" y2="95" stroke="#2a9d8f" stroke-width="1.5"/>
              <line x1="440" y1="74" x2="340" y2="95" stroke="#2a9d8f" stroke-width="1.5"/>

              <rect x="200" y="95" width="200" height="26" rx="4" fill="#e8a84a" stroke="#c07c2e" stroke-width="2"/>
              <text x="300" y="112" font-family="Inter,sans-serif" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">Merged: [ 3, 9, 10, 27, 38, 43, 82 ]</text>
            </svg>
          </div>
        `,
        summary: "Divide and Conquer minimizes overall problem entropy through recursive splitting. Merge Sort guarantees O(n log n) worst-case performance at the expense of extra RAM, while Heap Sort provides optimal O(n log n) performance strictly in-place.",
        tips: ["Apply Master Theorem on T(n) = 2T(n/2) + O(n): a=2, b=2 => n^(log_b a) = n^1 => Case 2 yields O(n log n).", "Show heap index relationships: Left child = 2i + 1, Right child = 2i + 2, Parent = (i - 1)/2.", "Remember that Binary Search requires the input collection to be strictly sorted."],
        vocab: [{ term: "Master Theorem", def: "Direct analytical formula for solving divide-and-conquer recurrence relations." }, { term: "Max-Heap", def: "Complete binary tree where every parent node key is greater than or equal to its children keys." }, { term: "Stability", def: "Algorithm characteristic preserving the original relative order of duplicate elements." }],
        mistakes: ["Stating Merge Sort sorts in-place — it requires O(n) temporary buffer space.", "Confusing Binary Search (O(log n)) with Linear Search (O(n))."]
      };
    }

    if (qLower.includes("backtracking") || qLower.includes("queen") || qLower.includes("graph coloring") || qLower.includes("hamiltonian") || qLower.includes("subset")) {
      return {
        intro: "Backtracking is a refined brute-force algorithmic approach for solving combinatorial search problems. It constructs candidate solutions incrementally, systematically evaluating candidate validity against bounding functions. If a partial candidate cannot possibly be completed to a valid solution, the algorithm immediately prunes the branch and backtracks to the parent node in the state-space tree.",
        content: `
          <h4>1. Classical Backtracking Problems</h4>
          <ul>
            <li><strong>N-Queens Problem:</strong> Place N non-attacking queens on an N×N chessboard such that no two queens share the same row, column, or diagonal. Evaluated row-by-row using bounding checks <code>x[i] == x[k] || |x[i] - x[k]| == |i - k|</code>.</li>
            <li><strong>Sum of Subsets:</strong> Find all subsets of a given set of positive integers whose sum equals target M. Branches are pruned if cumulative sum exceeds M or if adding remaining elements cannot reach M.</li>
            <li><strong>m-Colorability / Graph Coloring:</strong> Assign at most m colors to vertices of a graph such that no two adjacent vertices share identical color.</li>
          </ul>
          <div class="exam-diagram-box">
            <div class="diagram-title">✏️ Draw this in your exam paper: (4-Queens State-Space Search Tree with Pruning)</div>
            <svg viewBox="0 0 600 130" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="18" r="12" fill="#ede4d3" stroke="#c07c2e" stroke-width="2"/>
              <text x="300" y="22" font-family="Inter,sans-serif" font-size="9" font-weight="bold" fill="#1a1612" text-anchor="middle">Root</text>

              <line x1="288" y1="26" x2="160" y2="52" stroke="#c07c2e" stroke-width="1.5"/>
              <line x1="312" y1="26" x2="440" y2="52" stroke="#c07c2e" stroke-width="1.5"/>

              <circle cx="160" cy="55" r="12" fill="#fff8ed" stroke="#c07c2e"/>
              <text x="160" y="59" font-family="Inter,sans-serif" font-size="9" fill="#1a1612" text-anchor="middle">Q1=1</text>
              <circle cx="440" cy="55" r="12" fill="#fff8ed" stroke="#c07c2e"/>
              <text x="440" y="59" font-family="Inter,sans-serif" font-size="9" fill="#1a1612" text-anchor="middle">Q1=2</text>

              <line x1="150" y1="67" x2="110" y2="95" stroke="#e63946" stroke-width="1.5"/>
              <text x="95" y="110" font-family="Inter,sans-serif" font-size="9" font-weight="bold" fill="#e63946">❌ Conflict (Col)</text>

              <line x1="440" y1="67" x2="440" y2="95" stroke="#2a9d8f" stroke-width="2"/>
              <circle cx="440" cy="105" r="12" fill="#e8a84a" stroke="#c07c2e" stroke-width="2"/>
              <text x="440" y="109" font-family="Inter,sans-serif" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">Valid</text>
              <text x="465" y="109" font-family="Inter,sans-serif" font-size="9" font-weight="bold" fill="#2a9d8f">→ [2, 4, 1, 3]</text>
            </svg>
          </div>
        `,
        summary: "Backtracking avoids exponential brute-force catastrophe by aggressively pruning dead ends using bounding criteria, making it the premier paradigm for constraint satisfaction problems.",
        tips: ["Always draw state-space tree nodes with red 'X' cross marks indicating pruned invalid branches.", "State the N-Queens diagonal collision formula: |x[i] - x[k]| == |i - k|.", "Distinguish Backtracking (depth-first traversal) from Branch-and-Bound (breadth-first or least-cost traversal)."],
        vocab: [{ term: "State-Space Tree", def: "Tree representation of all prospective partial and complete candidate solutions." }, { term: "Bounding Function", def: "Heuristic test determining whether a partial path can mathematically yield a feasible solution." }, { term: "Pruning", def: "Terminating search down an entire subtree once bounding constraints fail." }],
        mistakes: ["Confusing Backtracking with Dynamic Programming.", "Missing diagonal conflict checks in the N-Queens solution."]
      };
    }
  }

  // --- GENERAL HIGH-YIELD FALLBACK ENGINE (For any other questions) ---
  return {
    intro: `This 10-mark examination question addresses fundamental theoretical and applied concepts in ${getSubjectName(subjectId)}. A comprehensive academic response requires defining the architectural principles, examining the algorithmic or protocol steps, providing a schematic exam illustration, and evaluating practical trade-offs.`,
    content: `
      <h4>1. Core Technical Foundations</h4>
      <p>The problem '${escapeHtml(q)}' pertains to Unit ${unit} of the curriculum. In academic evaluation, professors look for precise definitions, step-by-step methodologies, and well-structured comparative tables.</p>

      <h4>2. Architectural / Algorithmic Flow Diagram</h4>
      <div class="exam-diagram-box">
        <div class="diagram-title">✏️ Draw this in your exam paper: (Conceptual Architecture & Dataflow)</div>
        <svg viewBox="0 0 600 110" class="exam-svg" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="30" width="120" height="48" rx="6" fill="#fff8ed" stroke="#c07c2e" stroke-width="2"/>
          <text x="100" y="52" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">Input State</text>
          <text x="100" y="68" font-family="Inter,sans-serif" font-size="10" fill="#7a6a55" text-anchor="middle">Initial Conditions</text>

          <line x1="160" y1="54" x2="230" y2="54" stroke="#c07c2e" stroke-width="2"/>
          <polygon points="230,54 222,49 222,59" fill="#c07c2e"/>

          <rect x="230" y="20" width="170" height="68" rx="8" fill="#ede4d3" stroke="#c07c2e" stroke-width="2"/>
          <text x="315" y="47" font-family="Inter,sans-serif" font-size="12" font-weight="bold" fill="#1a1612" text-anchor="middle">Core Processing</text>
          <text x="315" y="65" font-family="Inter,sans-serif" font-size="10" fill="#4a3f30" text-anchor="middle">Algorithm / Protocol</text>

          <line x1="400" y1="54" x2="470" y2="54" stroke="#c07c2e" stroke-width="2"/>
          <polygon points="470,54 462,49 462,59" fill="#c07c2e"/>

          <rect x="470" y="30" width="100" height="48" rx="6" fill="#fff8ed" stroke="#c07c2e" stroke-width="2"/>
          <text x="520" y="52" font-family="Inter,sans-serif" font-size="11" font-weight="bold" fill="#1a1612" text-anchor="middle">Verified Output</text>
          <text x="520" y="68" font-family="Inter,sans-serif" font-size="10" fill="#2a9d8f" text-anchor="middle">Optimal / Final</text>
        </svg>
      </div>

      <h4>3. Detailed Step-by-Step Breakdown</h4>
      <ol>
        <li><strong>Formulation & Setup:</strong> Define all operational parameters, mathematical bounds, and system configurations.</li>
        <li><strong>Algorithmic Execution / Protocol Interaction:</strong> Execute the sequential steps with strict verification of transition conditions and error boundaries.</li>
        <li><strong>Verification & Optimization:</strong> Analyze output correctness, time/space computational complexity, and boundary error conditions.</li>
      </ol>
    `,
    summary: `In summary, mastering '${escapeHtml(q)}' guarantees a high-scoring 10-mark response. Adhering to structured introduction, neat labeling on exam sketches, and clear conclusion ensures maximum marks from the university evaluator.`,
    tips: [
      "Always start your answer with a bold 2-line definition before diving into bullet points.",
      "Include a labeled box or flow diagram; examiners allocate 3 to 4 marks out of 10 purely for diagrams.",
      "Summarize with a concluding paragraph highlighting industry application or computational efficiency."
    ],
    vocab: [
      { term: "Protocol / Model", def: "Formal set of structured rules or mathematical abstractions governing system behavior." },
      { term: "Optimization", def: "Process of maximizing throughput and efficiency while minimizing time and space overhead." },
      { term: "Complexity", def: "Asymptotic measure of computational resources required as input size scales." }
    ],
    mistakes: [
      "Writing a continuous unstructured wall of text without headings or numbered points.",
      "Omitting diagrams or writing sketches without explicit text labels.",
      "Neglecting to state boundary assumptions or complexity metrics."
    ]
  };
}

function getSubjectName(key) {
  if (key.includes("cn")) return "Computer Networks";
  if (key.includes("daa")) return "Design & Analysis of Algorithms";
  if (key.includes("da")) return "Data Analytics";
  if (key.includes("devops")) return "DevOps Engineering";
  return "Engineering";
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Master accessor
function get10MarkAnswer(subjectKey, qObj) {
  if (CURATED_ANSWERS[qObj.q]) {
    return CURATED_ANSWERS[qObj.q];
  }
  return synthesizeAnswer(subjectKey, qObj);
}
