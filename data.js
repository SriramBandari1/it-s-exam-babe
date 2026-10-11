// ============================================================
//  IT'S EXAM BABE — Data Layer
//  All college, department, semester, subject & content data
// ============================================================

const DATA = {
  colleges: [
    {
      id: "gnitc",
      name: "GNITC",
      fullName: "Guru Nanak Institutions Technical Campus",
      icon: "🏛️",
      sub: "Ibrahimpatnam, Hyderabad",
      departments: [
        {
          id: "cse",
          name: "CSE",
          fullName: "Computer Science & Engineering",
          icon: "💻",
          semesters: [1,2,3,4,5,6,7,8].map(n => ({
            id: `sem${n}`,
            name: `Semester ${n}`,
            label: n <= 2 ? `1st Year` : n <= 4 ? `2nd Year` : n <= 6 ? `3rd Year` : `4th Year`,
            icon: ["📗","📘","📙","📕","📗","📘","📙","📕"][n-1],
            subjects: getSemSubjects("cse", n)
          }))
        }
      ]
    }
  ]
};

function getSemSubjects(dept, sem) {
  const all = {
    "cse-5": [ // 3rd year sem 1
      { id:"cn",   name:"Computer Networks",              code:"22PC0CS14", icon:"🌐" },
      { id:"daa",  name:"Design & Analysis of Algorithms",code:"22PC0CS13", icon:"🔁" },
      { id:"da",   name:"Data Analytics",                 code:"22PE0CS03", icon:"📊" },
      { id:"dbms", name:"DBMS",                           code:"22PC0CS15", icon:"🗄️" },
      { id:"os",   name:"Operating Systems",              code:"22PC0CS16", icon:"⚙️" },
    ],
  };
  const key = `${dept}-${sem}`;
  return all[key] || [];
}

// ============================================================
//  QUESTION BANKS
// ============================================================

const QUESTION_BANKS = {

  "cse-5-cn": [
    // Unit 1
    { unit:1, q:"Discuss unguided transmission media.", bt:2 },
    { unit:1, q:"Explain various guided transmission media.", bt:2 },
    { unit:1, q:"What is layered architecture? Explain about the functionalities of each layer in OSI/ISO reference model with a neat sketch.", bt:2 },
    { unit:1, q:"Define Framing. Also Describe Framing with byte stuffing in data link layer.", bt:2 },
    { unit:1, q:"Explain TCP/IP reference model with a neat sketch.", bt:2 },
    { unit:1, q:"Illustrate CRC method for error detection with an example.", bt:3 },
    { unit:1, q:"State Hamming code for error correction with an example.", bt:2 },
    { unit:1, q:"Identify the Checksum value of 1001001110010011 and 1001100001001101.", bt:3 },
    { unit:1, q:"Generate the Hamming code with even parity for the data 1011. Also show the position of parity bits.", bt:3 },
    { unit:1, q:"The received codeword is 110101011. Generator (Divisor) is 1011. Check using CRC, whether an error will be detected or not.", bt:4 },
    // Unit 2
    { unit:2, q:"Describe the working of CSMA for 1-persistent, Non persistent & p-persistent.", bt:2 },
    { unit:2, q:"Explain working of Pure ALOHA with flow diagram.", bt:2 },
    { unit:2, q:"For Pure ALOHA, Offered load is G=0.5. For Slotted ALOHA, offered load is G=1. Calculate the efficiency (throughput) in percentage for both protocols.", bt:3 },
    { unit:2, q:"Illustrate Simplest and Stop & Wait protocol for noiseless channel.", bt:4 },
    { unit:2, q:"Describe the working of Slotted ALOHA protocol with flow diagram.", bt:2 },
    { unit:2, q:"In a CSMA/CD network running at 1 Gbps over 1 km cable with no repeaters, the signal speed in the cable is 200000 km/sec. What is minimum frame size?", bt:4 },
    { unit:2, q:"Discuss CSMA/CD protocol in detail with flow diagram.", bt:2 },
    { unit:2, q:"Give the overview of various Controlled Access protocols.", bt:3 },
    { unit:2, q:"State CSMA/CA protocol in detail with flow diagram.", bt:2 },
    { unit:2, q:"Explain the operation of Go-back-N ARQ sliding window protocol in case of normal scenario, Frame lost and Acknowledgement lost with diagram.", bt:2 },
    // Unit 3
    { unit:3, q:"Illustrate Link State Routing Algorithm.", bt:2 },
    { unit:3, q:"Explain Distance Vector Routing Algorithm.", bt:2 },
    { unit:3, q:"Describe Dijkstra's Shortest path routing algorithm with an example.", bt:3 },
    { unit:3, q:"Explain Hierarchical Routing and give its advantages.", bt:2 },
    { unit:3, q:"Discuss Broadcast Routing.", bt:2 },
  ],

  "cse-5-daa": [
    // Unit 1
    { unit:1, q:"What is algorithm? Explain the properties of algorithm.", bt:2 },
    { unit:1, q:"Discuss time complexity and space complexity with examples.", bt:2 },
    { unit:1, q:"Write about Asymptotic Notations.", bt:3 },
    { unit:1, q:"Compare Big Oh and Little Oh notations.", bt:4 },
    { unit:1, q:"Use binary search algorithm to find target number 23 in the given array: 2, 5, 8, 12, 16, 23, 38, 56, 72, 91.", bt:3 },
    { unit:1, q:"Explain how each phase (Divide, Conquer, and Combine) is implemented in Quick Sort with example.", bt:2 },
    { unit:1, q:"Without writing the Merge Sort algorithm, illustrate how the array {38, 27, 43, 3, 9, 82, 10} is sorted using Merge Sort.", bt:3 },
    { unit:1, q:"Distinguish between Quick sort and Merge sort.", bt:4 },
    { unit:1, q:"Discuss Strassen's matrix multiplication.", bt:2 },
    { unit:1, q:"Write algorithms for merge() and mergesort().", bt:3 },
    // Unit 2
    { unit:2, q:"What are the primary operations of disjoint sets? Explain.", bt:2 },
    { unit:2, q:"Describe Find operation and discuss the collapsing rule.", bt:2 },
    { unit:2, q:"Why use weighted union? Justify with example.", bt:4 },
    { unit:2, q:"Describe Heap Sort with an example.", bt:2 },
    { unit:2, q:"Define priority queue. Discuss operations of priority queues.", bt:2 },
    { unit:2, q:"Illustrate the solution to the N-Queens problem using Backtracking.", bt:3 },
    { unit:2, q:"Given a set S = (3, 4, 5, 6) and X = 9. Obtain the subset sum using the Backtracking approach.", bt:3 },
    { unit:2, q:"Describe the Graph Coloring problem using Backtracking.", bt:2 },
    { unit:2, q:"Discuss Hamiltonian cycle using backtracking approach.", bt:2 },
    { unit:2, q:"Compare Backtracking and Divide-and-Conquer techniques.", bt:4 },
    // Unit 3
    { unit:3, q:"Explain the general method of Dynamic Programming approach and its characteristics.", bt:2 },
    { unit:3, q:"Discuss the construction of an Optimal Binary Search Tree.", bt:2 },
    { unit:3, q:"Describe top-down and bottom-up approach in dynamic programming.", bt:2 },
    { unit:3, q:"Analyze the advantages of Dynamic Programming over Backtracking.", bt:4 },
  ],

  "cse-5-da": [
    // Unit 1
    { unit:1, q:"Explain about Modeling techniques in data analytics.", bt:2 },
    { unit:1, q:"Explain about the Data Pre-processing in detail.", bt:2 },
    { unit:1, q:"Define Data and design architecture.", bt:2 },
    { unit:1, q:"Why Data Quality is Important?", bt:2 },
    { unit:1, q:"Explain about Data Management.", bt:2 },
    { unit:1, q:"Explain about Outlier Analysis with a suitable example.", bt:2 },
    { unit:1, q:"Discuss about Data Processing.", bt:2 },
    { unit:1, q:"Difference between data vs information.", bt:2 },
    { unit:1, q:"Why Data Analytics is so important?", bt:2 },
    { unit:1, q:"Difference between Analysis vs Analytics.", bt:2 },
    // Unit 2
    { unit:2, q:"Illustrate the role of data analytics and its applications.", bt:2 },
    { unit:2, q:"Explain in detail types of Data Analytics.", bt:2 },
    { unit:2, q:"What are different primary Analytics Tools for DA? Explain.", bt:2 },
    { unit:2, q:"Discuss about Data models.", bt:2 },
    { unit:2, q:"Explain about Missing Imputation with example problem.", bt:2 },
    { unit:2, q:"Explain applications of Modeling in business.", bt:2 },
    { unit:2, q:"Explain about types of data in DA.", bt:2 },
    { unit:2, q:"Explain about Hierarchical data modeling.", bt:2 },
    { unit:2, q:"Explain about tools in DA.", bt:2 },
    { unit:2, q:"Explain the need of Business Modeling and Model Theory.", bt:2 },
    // Unit 3
    { unit:3, q:"Explain about Regression Analysis.", bt:2 },
    { unit:3, q:"List out the Regression Analysis Steps and Applications.", bt:2 },
    { unit:3, q:"Explain about BLUE Property Assumption.", bt:2 },
    { unit:3, q:"Find the line of best fit for the following data points using the Least Square method: (x,y) = (1,3), (2,4), (4,8), (6,10), (8,15).", bt:3 },
    { unit:3, q:"Consider the following data set: x = {1,2,4,3,5} and y = {1,3,3,2,5}. Apply Linear Regression using R.", bt:3 },
  ],

  // Placeholder subjects (no QB yet)
  "cse-5-dbms": [],
  "cse-5-os": [],
};

// ============================================================
//  STUDENT TALENT DATA
// ============================================================

const STUDENT_TALENT = {

  "cse-5-cn": {
    quickIdea: "Computer Networks is about how computers talk to each other — through rules (protocols), layers (OSI/TCP-IP), physical cables or wireless (transmission media), error control, and routing.",
    bullets: [
      "OSI model has 7 layers; TCP/IP has 4 — Physical, Network Access, Internet, Transport/Application.",
      "Guided media: Twisted Pair, Coaxial, Fiber Optic. Unguided: Radio, Microwave, Infrared.",
      "Error detection: Parity, Checksum, CRC. Error correction: Hamming Code.",
      "MAC protocols: ALOHA (Pure/Slotted), CSMA, CSMA/CD (Ethernet), CSMA/CA (WiFi).",
      "ARQ protocols: Stop & Wait, Go-Back-N, Selective Repeat — handle retransmission.",
      "Routing: Distance Vector (Bellman-Ford) vs Link State (Dijkstra's). Hierarchical for large nets.",
      "CRC: Attach remainder of message ÷ divisor. Receiver redivides — if remainder=0, no error.",
      "Hamming code positions parity bits at powers of 2 (1,2,4,8…).",
    ],
    vocab: [
      { term:"OSI Model",       def:"7-layer conceptual framework for network communication." },
      { term:"TCP/IP",          def:"4-layer practical protocol suite used on the Internet." },
      { term:"CRC",             def:"Cyclic Redundancy Check — polynomial-based error detection." },
      { term:"Hamming Code",    def:"Error-correcting code using parity bits at power-of-2 positions." },
      { term:"CSMA/CD",         def:"Carrier Sense Multiple Access / Collision Detection — used in Ethernet." },
      { term:"CSMA/CA",         def:"Carrier Sense Multiple Access / Collision Avoidance — used in WiFi." },
      { term:"ALOHA",           def:"Simple random-access protocol; Pure (any time) or Slotted (time slots)." },
      { term:"Go-Back-N ARQ",   def:"Sliding window protocol where N unacknowledged frames can be sent." },
      { term:"Dijkstra's",      def:"Shortest path algorithm used in Link State routing." },
      { term:"Framing",         def:"Packaging data into frames in the Data Link Layer." },
      { term:"Throughput",      def:"Actual rate of successful data delivery over a channel." },
      { term:"Bandwidth",       def:"Maximum data transfer capacity of a channel." },
    ],
    examTips: [
      "For CRC questions: divide using XOR (not normal division). Always check if the remainder is 0.",
      "Hamming code: count parity bits needed using 2^r ≥ m + r + 1.",
      "Throughput of Pure ALOHA = G·e^(-2G), Slotted ALOHA = G·e^(-G). Maximum at G=0.5 and G=1 respectively.",
      "In exam diagrams, always label both sender and receiver sides in ARQ protocols.",
      "Link State = every router knows full topology. Distance Vector = each router knows only neighbor info.",
    ]
  },

  "cse-5-daa": {
    quickIdea: "DAA is about solving problems efficiently — measuring how fast/slow algorithms are (complexity), and using smart strategies: Divide & Conquer, Backtracking, and Dynamic Programming.",
    bullets: [
      "Big-O = upper bound (worst case), Omega = lower bound (best case), Theta = tight bound (average).",
      "Divide & Conquer: Split → Solve → Merge. Examples: Merge Sort O(n log n), Quick Sort O(n²) worst.",
      "Binary Search works only on sorted arrays — O(log n).",
      "Strassen's matrix multiplication: O(n^2.81) vs naive O(n^3).",
      "Backtracking: Build solution step-by-step, backtrack when constraint violated. N-Queens, Graph Coloring.",
      "Heap Sort uses a Max-Heap. Build heap O(n), sort O(n log n). In-place sorting.",
      "Dynamic Programming: Overlapping subproblems + Optimal substructure. Memoization (top-down) or Tabulation (bottom-up).",
      "Disjoint Sets use Union-Find with path compression and weighted union for efficiency.",
    ],
    vocab: [
      { term:"Time Complexity",     def:"How runtime grows with input size n." },
      { term:"Space Complexity",    def:"How much memory an algorithm uses." },
      { term:"Big-O Notation",      def:"Upper bound on algorithm's growth rate." },
      { term:"Divide & Conquer",    def:"Break problem into sub-problems, solve independently, combine." },
      { term:"Backtracking",        def:"Systematically search solution space, prune invalid paths." },
      { term:"Dynamic Programming", def:"Solve subproblems once, store results to avoid recomputation." },
      { term:"Heap Sort",           def:"Comparison sort using binary heap structure — O(n log n)." },
      { term:"Merge Sort",          def:"Stable divide-and-conquer sort — O(n log n) guaranteed." },
      { term:"Quick Sort",          def:"Divide-and-conquer sort using pivot — O(n log n) average." },
      { term:"N-Queens",            def:"Backtracking problem: place N queens on N×N board without conflict." },
      { term:"Hamiltonian Cycle",   def:"Cycle visiting every vertex exactly once in a graph." },
      { term:"OBST",                def:"Optimal BST minimizing search cost using DP." },
    ],
    examTips: [
      "Always write recurrence relation before solving any divide-and-conquer problem.",
      "For merge sort trace: draw the split tree first, then the merge steps below it.",
      "Quick sort worst case O(n²) occurs when pivot is always smallest/largest (sorted array).",
      "Backtracking = systematic brute force with pruning. Always draw the state-space tree.",
      "DP vs Backtracking: DP stores intermediate results; Backtracking explores and prunes.",
    ]
  },

  "cse-5-da": {
    quickIdea: "Data Analytics is about extracting meaningful insights from raw data — using statistical tools, models, and techniques like regression to make business decisions.",
    bullets: [
      "Data Analytics lifecycle: Business Problem → Data Collection → Processing → Analysis → Visualization → Decision.",
      "Types of analytics: Descriptive (what happened), Diagnostic (why), Predictive (what will), Prescriptive (what to do).",
      "Data Pre-processing: cleaning, transformation, integration, reduction, discretization.",
      "Outlier: data point far from normal distribution — can skew results.",
      "Regression Analysis predicts continuous output from input variables. Linear Regression uses Least Squares.",
      "BLUE: Best Linear Unbiased Estimator — properties of OLS regression estimators.",
      "Missing imputation: Replace missing values with mean, median, mode or prediction models.",
      "Data models: Hierarchical, Network, Relational, Entity-Relationship.",
    ],
    vocab: [
      { term:"Data Analytics",    def:"Science of analyzing raw data to find patterns and make decisions." },
      { term:"Regression",        def:"Statistical method to find relationship between variables." },
      { term:"Least Squares",     def:"Method to find best-fit line by minimizing sum of squared errors." },
      { term:"BLUE",              def:"Best Linear Unbiased Estimator — OLS properties." },
      { term:"Outlier",           def:"Data point significantly different from others." },
      { term:"Data Quality",      def:"Accuracy, completeness, consistency of data." },
      { term:"Imputation",        def:"Filling in missing data using statistical estimates." },
      { term:"Descriptive Stats", def:"Summarizing data: mean, median, mode, variance, std dev." },
      { term:"Data Model",        def:"Structure defining how data is stored and organized." },
      { term:"Preprocessing",     def:"Cleaning and transforming raw data before analysis." },
      { term:"Analytics Tools",   def:"R, Python, Excel, Tableau, Power BI, SAS used for analysis." },
      { term:"Business Modeling", def:"Representing real-world business processes using data models." },
    ],
    examTips: [
      "For Least Squares: use formulas b = Σ(xy) - n·x̄·ȳ / Σ(x²) - n·x̄² and a = ȳ - b·x̄.",
      "Always mention the formula AND steps when asked about any statistical method.",
      "Difference between Analysis vs Analytics: Analysis = past data; Analytics = future predictions.",
      "BLUE property covers: Linearity, Unbiasedness, Efficiency, and Sufficiency.",
      "For data preprocessing questions, structure answer as: Collection → Cleaning → Transformation → Reduction.",
    ]
  },

  "cse-5-dbms": {
    quickIdea: "DBMS helps organize, store, and retrieve data efficiently using tables, queries, and transactions.",
    bullets: ["Content will be added soon. Stay tuned! 📌"],
    vocab: [],
    examTips: []
  },

  "cse-5-os": {
    quickIdea: "Operating Systems manage hardware and software resources — processes, memory, file systems, and I/O.",
    bullets: ["Content will be added soon. Stay tuned! 📌"],
    vocab: [],
    examTips: []
  },
};
