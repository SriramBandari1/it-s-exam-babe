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
      { id:"cn",     name:"Computer Networks",               code:"22PC0CS14", icon:"🌐" },
      { id:"daa",    name:"Design & Analysis of Algorithms", code:"22PC0CS13", icon:"🔁" },
      { id:"da",     name:"Data Analytics",                  code:"22PE0CS03", icon:"📊" },
      { id:"devops", name:"DevOps",                          code:"22PC0CS15", icon:"♾️" },
      { id:"dbms",   name:"DBMS",                            code:"22PC0CS17", icon:"🗄️" },
      { id:"os",     name:"Operating Systems",               code:"22PC0CS16", icon:"⚙️" },
    ],
  };
  const key = `${dept}-${sem}`;
  return all[key] || [];
}

// ============================================================
//  QUESTION BANKS (Merged Mid-1 & Mid-2: 175 Questions)
// ============================================================

const QUESTION_BANKS = {
  "cse-5-cn": [
    {
        "unit": 1,
        "q": "Discuss unguided transmission media.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Explain various guided transmission media.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "What is layered architecture? Explain about the functionalities of each layer in OSI/ISO reference model with a neat sketch.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Define Framing. Also Describe Framing with byte stuffing in data link layer.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Explain TCP/IP reference model with a neat sketch.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Illustrate CRC method for error detection with an example.",
        "bt": 3
    },
    {
        "unit": 1,
        "q": "State Hamming code for error correction with an example.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Identify the Checksum value of 1001001110010011 and 1001100001001101.",
        "bt": 3
    },
    {
        "unit": 1,
        "q": "Generate the Hamming code with even parity for the data 1011. Also show the position of parity bits.",
        "bt": 3
    },
    {
        "unit": 1,
        "q": "The received codeword is 110101011. Generator (Divisor) is 1011. Check using CRC, whether an error will be detected or not.",
        "bt": 4
    },
    {
        "unit": 2,
        "q": "Describe the working of CSMA for 1-persistant, Non persistant & p-persistant.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Explain working of Pure ALOHA with flow diagram.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Solve the following: For Pure ALOHA, Offered load is G=0.5 For Slotted ALOHA, offered load is G=1 Calculate the efficiency(throghput) in percentage for both protocols.",
        "bt": 3
    },
    {
        "unit": 2,
        "q": "Illustrate Simplest and Stop & Wait protocol for noiseless channel.",
        "bt": 4
    },
    {
        "unit": 2,
        "q": "Descibe the working of Slotted ALOHA protocol with flow diagram.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "In a CSMA / CD network running at 1 Gbps over 1 km cable with no repeaters, the signal speed in the cable is 200000 km/sec. What is minimum frame size?",
        "bt": 4
    },
    {
        "unit": 2,
        "q": "Discuss CSMA/CD protocolin detail with flow diagram.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Give the overview of various Controlled Access protocols.",
        "bt": 3
    },
    {
        "unit": 2,
        "q": "State CSMA/CA protocol in detail with flow diagram.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Explain the operation of Go back-N ARQ sliding window protocol in case of normal scenario, Frame lost and Acknowledgement lost with diagram.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Illustrate Link State Routing Algorithm.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Explain Distance Vector Routing Algorithm",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Describe Dijkstra's Shortest path routing algorithm with an example.",
        "bt": 3
    },
    {
        "unit": 3,
        "q": "Explain Hierarchical Routing and give its advantages",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Discuss Broadcast Routing.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Explain Leacky Bucket algortithm for traffic shaping with diagram.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Describe various Packet shceduling algorithm.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Discuss about Resource Reservation Protocol RSVP with example.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Draw and explain about each field in the IPV4 datagram header format",
        "bt": 3
    },
    {
        "unit": 3,
        "q": "What is an IP Address? Explain classful IP addressing in detail.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Describe UDP and UDP header format in detail.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Explain the protocol scenarios for Establishing Connection using three-way handshake mechanisms",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Compare and contrast TCP & UDP.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Illustrate brief about various fields of TCP Header with the help of a neat diagram.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Explain the four protocol scenarios for Establishing Connection Release using two-way army Problem",
        "bt": 4
    },
    {
        "unit": 4,
        "q": "Explain the process of Crash Recovery Mechanism in the Transport Layer.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Discuss about Remote Procedure Call",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Write about Error control and Flow control at the transport layer.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Give the overview of various transport service primitives in detail.",
        "bt": 4
    },
    {
        "unit": 4,
        "q": "Descrbe the Berkley sockets at transport layer.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "What is the use of Domain Name System? Explain how it works.",
        "bt": 4
    },
    {
        "unit": 5,
        "q": "Discus about JPEG and MPEG",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Describe the Architecture of Email and its services.",
        "bt": 3
    },
    {
        "unit": 5,
        "q": "Write short notes on: a) Static web pages b) Dynamic web pages",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Explain about Domain Name servers.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Illustrate in breif about SMTP for mail transfer.",
        "bt": 3
    },
    {
        "unit": 5,
        "q": "Describe the Architecture of the World Wide web.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Explain URL and its working.",
        "bt": 3
    },
    {
        "unit": 5,
        "q": "Write about streaming of: a) Digital Audio b) Digital Video",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Discuss about HTTP and HTTP connections.",
        "bt": 2
    }
],

  "cse-5-daa": [
    {
        "unit": 1,
        "q": "What is algorithm? Explain the properties of algorithm.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Discuss time complexity and space complexity with examples.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Write about Asymptotic Notations.",
        "bt": 3
    },
    {
        "unit": 1,
        "q": "Compare Big Oh and Little Oh notations.",
        "bt": 4
    },
    {
        "unit": 1,
        "q": "Use binary search algorithm to find target number 23 in the given array of elements 2, 5, 8, 12, 16, 23, 38, 56, 72, 91.",
        "bt": 3
    },
    {
        "unit": 1,
        "q": "Explain how each phase (Divide, Conquer, and Combine) is implemented in Quick Sort with example.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Without writing the Merge Sort algorithm, illustrate how the array {38, 27, 43, 3, 9, 82, 10} is sorted using Merge Sort.",
        "bt": 3
    },
    {
        "unit": 1,
        "q": "Distinguish between Quick sort and Merge sort.",
        "bt": 4
    },
    {
        "unit": 1,
        "q": "Discuss Stressan's matrix multiplication.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Write algorithms for merge() and mergesort().",
        "bt": 3
    },
    {
        "unit": 2,
        "q": "What are the primary operation of disjoint sets? Explain.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Describe Find operation and discuss the collapsing rule.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Why to use weighted union? Justify with example.",
        "bt": 4
    },
    {
        "unit": 2,
        "q": "Describe Heap Sort with an example.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Define priority queue. Discuss operations of priority queues.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Illustrate the solution to the N-Queens problem using Backtracking.",
        "bt": 3
    },
    {
        "unit": 2,
        "q": "Given a set S = (3, 4, 5, 6) and X =9. Obtain the subset sum using the Backtracking approach.",
        "bt": 3
    },
    {
        "unit": 2,
        "q": "Describe the Graph Coloring problem using Backtracking.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Discuss hamiltonian cycle using backtracking approach.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Compare Backtracking and Divide-and-Conquer techniques",
        "bt": 4
    },
    {
        "unit": 3,
        "q": "Explain the general method of Dynamic Programming approach and its characteristics.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Discuss the construction of an Optimal Binary Search Tree.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Describe top-down and bottom-up approch in dynamic programming",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Analyze the advantages of Dynamic Programming over Backtracking.",
        "bt": 4
    },
    {
        "unit": 3,
        "q": "Consider a 0/1 Knapsack with a maximum weight capacity W = 7 and the following items: Item (i) Weight (w\u1d62) Profit (P\u1d62) 1 1 1 2 3 4 3 4 5 4 5 7 Solve the following 0/1 Knapsack problem using the Dynamic Programming technique.",
        "bt": 3
    },
    {
        "unit": 3,
        "q": "Describe the Travelling sales person problem with an example",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Determine the length of the shortest path between all pairs of vertices in the following graph G.",
        "bt": 3
    },
    {
        "unit": 3,
        "q": "What is Reliability Design? Explain with a example.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Apply Floyd-Warshall algorithm for constructing the shortest path.",
        "bt": 3
    },
    {
        "unit": 3,
        "q": "Define Traveling Salesperson problem. Write the algorithm for TSP.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Consider the following instance of 0/1 knapsack problem n=3,m=60, profits (p1,p2,p3)=(100,280,120) and weights(w1,w2,w3)=(10,40,20). Obtain the solution using greedy approach and explain whether the solution is an optimal or not.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Consider the following instance of the knapsack problem for n=3, m=20, (p1, p2, p3) = (25, 24, 15) and (w1,w2,w3) = (18,15,10). Find the feasible solutions using greedy method.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Write an algorithm of prim\u2019s minimum spanning tree.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Define articulation point. Explain Biconnected graph with example.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Write an algorithm of Kruskal minimum spanning tree. Give example.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Write an algorithm for Single source shortest path. Explain with an example.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Compare and contrast between connected components and bi connected components.",
        "bt": 4
    },
    {
        "unit": 4,
        "q": "Describe Binary tree traversal techniques with example.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Solve the problem for Job sequencing with deadlines for n=4, (p1,p2,p3,p4) = (100,10,15,27) and (d1,d2,d3,d4) = (2,1,2,1) find the feasible solutions using greedy method.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Explain DFS with example.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Describe Branch and Bound 0/1 knapsack problem using LC method.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Write about FIFO branch and bound solutions.",
        "bt": 3
    },
    {
        "unit": 5,
        "q": "Write about general method for branch and bound.",
        "bt": 3
    },
    {
        "unit": 5,
        "q": "Discuss BFS with example.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Find the LC branch and bound solution for the travelling sales person problem whose cost matrix is as follows: The cost matrix is",
        "bt": 3
    },
    {
        "unit": 5,
        "q": "Write about Tractable and Intractable Problems.",
        "bt": 3
    },
    {
        "unit": 5,
        "q": "Explain properties of NP-complete and NP-Hard problems.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "State the Cook\u2019s theorem. What is the significance of this theorem? Explain.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Explain non-deterministic algorithm with an example.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Discuss Satisfiability problem with example.",
        "bt": 2
    }
],

  "cse-5-da": [
    {
        "unit": 1,
        "q": "Explain about Modeling techniques in data analytics?",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Explain about the Data Pre-processing in detail.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Define Data and design architecture.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Why Data Quality is Important?",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Explain about Data Management.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Explain about Outlier Analysis with Suitable example.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Disscuss about Data Processing.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Difference between data vs information.",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Why Data Analytics is so important?",
        "bt": 2
    },
    {
        "unit": 1,
        "q": "Difference between Analysis vs Analytics.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Illustrate the role of data analytics and it's applications.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Explain in deatail types of Data Analytics.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "What are different primary Analytics Tools for DA? Explain.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Discuss about Data models?",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Explain about Missing Imputation with example problem.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Explain applications of Modeling in bussiness?",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Explain about types of data in da?",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Explain about Hierarchical data modeling.",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Explain about tools in da?",
        "bt": 2
    },
    {
        "unit": 2,
        "q": "Explain the need of Business Modeling and Model Theory.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Explain about Regression Analysis?",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Listout the Regression Analysis Steps and Applicatios.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Explain about Blue Property Assumption.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Find the line of best fit for the following data points using the Least Square method: (x,y) = (1,3), (2,4), (4,8), (6,10), (8,15).",
        "bt": 3
    },
    {
        "unit": 3,
        "q": "Consider the following data set: x = {1,2,4,3,5} and y = {1,3,3,2,5} We use R to apply Linear Regression for the above data.",
        "bt": 3
    },
    {
        "unit": 3,
        "q": "Explain about regression in detail.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Expalin the Linear regression.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Explain the process of model construction with logistic regression.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Explain the different types of regressions in detail.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Implement the process of Model Building using Logistic Regression.",
        "bt": 3
    },
    {
        "unit": 4,
        "q": "Explain about Supervised and unsupervised learning.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Explain Decision trees model with suitable example.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Write the difference between Regression and Segmentation",
        "bt": 4
    },
    {
        "unit": 4,
        "q": "Discuss about multiple decision tree or random forest.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "How to perform cross validation techniques of time series analysis?",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "What are tools used to make Decision trees?",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Describe about Classification Trees.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Explain how to extract features from generated model as height,average energy etc in time series methods",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Explain about the supervised machine learning algorithm with small dataset.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "What are the solutions to prevent overfitting.",
        "bt": 1
    },
    {
        "unit": 5,
        "q": "Explain Geometric Projection Visualization Techniques.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Summarize about data visualization.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Interpret the Hierarchical visualization techniques",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Explain asymmetrical Chernoff faces",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Explain about Pixel oriented visualization techniques",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Write notes of a) circle segment technique and 2) space filling curves",
        "bt": 1
    },
    {
        "unit": 5,
        "q": "Explain about scatter plot.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Explain about Box and Whisker plot",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Explain Icon-based visualization Techniques.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Explain about visualizing complex data & relations.",
        "bt": 2
    }
],

  "cse-5-devops": [
    {
        "unit": 3,
        "q": "Discuss the pull request model and its advantages in a DevOps environment.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "What is Git? Explain branches, commits and benefits of Git.",
        "bt": 1
    },
    {
        "unit": 3,
        "q": "Explain about different Git server Implementation and shared authentication.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Discuss about Docker, Docker Intermission and Benefits of usingDocker.",
        "bt": 2
    },
    {
        "unit": 3,
        "q": "Explain in detail about Git Lab including its capabilities for source code management?",
        "bt": 1
    },
    {
        "unit": 4,
        "q": "What is code building and explain code building process?",
        "bt": 1
    },
    {
        "unit": 4,
        "q": "Explain Jenkin master slave architecture and Jennkin applications?",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Explain the CI/CD pipeline and its stages.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "WhatisinfrastructureascodeandhowdoesitsupportDevOps practices?",
        "bt": 1
    },
    {
        "unit": 4,
        "q": "Explain different build phases inDevops?",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "What are triggers? Explain about job chaining and build pipelines.",
        "bt": 1
    },
    {
        "unit": 4,
        "q": "Provideadetailedexplanationofhowtocollateandmeasurethe qualityofbuilds.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "Describe the host Server and Build Slaves in detail.",
        "bt": 2
    },
    {
        "unit": 4,
        "q": "What is Building the Code ?Explain the code Building Process.",
        "bt": 1
    },
    {
        "unit": 4,
        "q": "Discuss the challenges and strategies for managing build systems in a large-scale DevOps environment",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "What is Testing and Explain different types of testing?",
        "bt": 1
    },
    {
        "unit": 5,
        "q": "Explainthebenefitsandchallengesofautomating testsing aDevOps environment.",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "What is selenium? Explain selenium features and Selenium Tool Suite?",
        "bt": 1
    },
    {
        "unit": 5,
        "q": "What are Testing backend integration points and explain backend testing validation?",
        "bt": 1
    },
    {
        "unit": 5,
        "q": "WhatisREPL-drivendevelopmentandhowdoesitsupportsoftware testing?",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "What is TTD and DiscusstheprinciplesandBenefitsoftest-drivendevelopment.?",
        "bt": 1
    },
    {
        "unit": 5,
        "q": "Explain the following. i) Visualization Stacks ii)Automated Integration Testing",
        "bt": 1
    },
    {
        "unit": 5,
        "q": "Discuss the Puppetmaster-agentarchitectureanditsbenefitsin managing infrastructure",
        "bt": 2
    },
    {
        "unit": 5,
        "q": "Explain the following. i) Ansible and Chef ii) Docker and Kubernetes",
        "bt": 1
    },
    {
        "unit": 5,
        "q": "List out and explain automation of testing Pros and Cons.",
        "bt": 2
    }
],

  "cse-5-dbms": [],
  "cse-5-os": [],
};

// ============================================================
//  STUDENT TALENT DATA
// ============================================================

const STUDENT_TALENT = {

  "cse-5-cn": {
    quickIdea: "Computer Networks is about how computers talk to each other — through rules (protocols), layers (OSI/TCP-IP), physical cables or wireless (transmission media), error control, routing, transport (TCP/UDP), and application layer services (DNS, Email, Web).",
    bullets: [
      "OSI model has 7 layers; TCP/IP has 4 — Physical, Network Access, Internet, Transport/Application.",
      "Guided media: Twisted Pair, Coaxial, Fiber Optic. Unguided: Radio, Microwave, Infrared.",
      "Error detection: Parity, Checksum, CRC. Error correction: Hamming Code.",
      "MAC protocols: ALOHA (Pure/Slotted), CSMA, CSMA/CD (Ethernet), CSMA/CA (WiFi).",
      "ARQ protocols: Stop & Wait, Go-Back-N, Selective Repeat — handle retransmission.",
      "Routing: Distance Vector (Bellman-Ford) vs Link State (Dijkstra's). Hierarchical for large nets.",
      "Congestion Control & Traffic Shaping: Leaky Bucket (constant rate) vs Token Bucket (bursts allowed).",
      "IPv4 header is 20-60 bytes; classful addressing ranges A (0-127), B (128-191), C (192-223).",
      "Transport: TCP is connection-oriented & reliable (3-way handshake); UDP is connectionless & fast.",
      "Application layer protocols: DNS translates names to IPs; SMTP transfers mail; HTTP retrieves web pages."
    ],
    vocab: [
      { term:"OSI Model",       def:"7-layer conceptual framework for network communication." },
      { term:"TCP/IP",          def:"4-layer practical protocol suite used on the Internet." },
      { term:"CRC",             def:"Cyclic Redundancy Check — polynomial-based error detection." },
      { term:"Hamming Code",    def:"Error-correcting code using parity bits at power-of-2 positions." },
      { term:"CSMA/CD",         def:"Carrier Sense Multiple Access / Collision Detection — used in Ethernet." },
      { term:"CSMA/CA",         def:"Carrier Sense Multiple Access / Collision Avoidance — used in WiFi." },
      { term:"Leaky Bucket",    def:"Traffic shaping algorithm converting bursty flow into steady stream." },
      { term:"3-Way Handshake", def:"SYN -> SYN-ACK -> ACK connection establishment in TCP." },
      { term:"Dijkstra's",      def:"Shortest path algorithm used in Link State routing." },
      { term:"Framing",         def:"Packaging data into frames with byte/bit stuffing in Data Link Layer." },
      { term:"Throughput",      def:"Actual rate of successful data delivery over a channel." },
      { term:"DNS",             def:"Domain Name System resolving human hostnames into IP addresses." },
    ],
    examTips: [
      "In 10-mark questions, always draw the protocol header or layer stack first — examiners award 3-4 marks for neat sketches.",
      "For CRC questions: divide using XOR (not normal arithmetic). Remainder 0 means no error.",
      "Hamming code parity bits are positioned strictly at powers of 2 (1, 2, 4, 8...).",
      "Throughput formulas: Pure ALOHA = G*e^(-2G) (max 18.4% at G=0.5); Slotted ALOHA = G*e^(-G) (max 36.8% at G=1).",
      "IPv4 datagram: always show 32-bit row layout with Version, IHL, Type of Service, Total Length, and TTL."
    ]
  },

  "cse-5-daa": {
    quickIdea: "DAA is about solving computational problems efficiently — measuring asymptotic growth (complexity), and applying paradigms: Divide & Conquer, Backtracking, Dynamic Programming, and Branch & Bound.",
    bullets: [
      "Big-O = upper bound (worst case), Omega = lower bound (best case), Theta = tight bound (average).",
      "Divide & Conquer: Split -> Solve -> Merge. Merge Sort O(n log n), Quick Sort O(n log n) avg, O(n^2) worst.",
      "Binary Search works only on sorted arrays — O(log n).",
      "Strassen's matrix multiplication: O(n^2.81) using 7 sub-matrix multiplications instead of 8.",
      "Disjoint Sets use Union-Find with path compression and weighted union for near-linear O(alpha(n)).",
      "Backtracking: Build solution step-by-step; backtrack when constraint violated. N-Queens, Subset Sum, Graph Coloring.",
      "Heap Sort uses Max-Heap. Build heap O(n), sort O(n log n). In-place and non-stable.",
      "Dynamic Programming: Principle of Optimality + Overlapping Subproblems. OBST, All-Pairs Shortest Path (Floyd-Warshall), 0/1 Knapsack, TSP.",
      "Branch & Bound: Explores state space using FIFO or Least Cost (LC) queues with upper/lower bounds.",
      "Complexity Classes: P (polynomial solvable), NP (polynomial verifiable), NP-Complete (hardest in NP, Cook's Theorem)."
    ],
    vocab: [
      { term:"Time Complexity",     def:"Measure of execution time as a function of input size n." },
      { term:"Asymptotic Notation", def:"Mathematical notation describing limiting behavior (Big-O, Omega, Theta)." },
      { term:"Divide & Conquer",    def:"Breaking problem into independent subproblems, solving recursively, combining." },
      { term:"Backtracking",        def:"Systematic depth-first search of state-space tree with pruning." },
      { term:"Dynamic Programming", def:"Solving subproblems once, memoizing/tabulating results to avoid recomputation." },
      { term:"Branch & Bound",      def:"Optimization tree search using bounding functions to prune non-optimal subtrees." },
      { term:"Floyd-Warshall",      def:"All-pairs shortest path DP algorithm running in O(n^3) time." },
      { term:"N-Queens",            def:"Placement of N non-attacking queens on an N x N chessboard." },
      { term:"Hamiltonian Cycle",   def:"Closed loop in a graph visiting every vertex exactly once." },
      { term:"Cook's Theorem",      def:"Foundational proof that Boolean Satisfiability (SAT) is NP-Complete." },
      { term:"OBST",                def:"Optimal Binary Search Tree minimizing expected search cost." },
      { term:"0/1 Knapsack",        def:"Selecting items with given weights and values to maximize value under capacity W." }
    ],
    examTips: [
      "Always write the recurrence relation before tracing any Divide & Conquer or DP algorithm.",
      "For Backtracking (N-Queens, Graph Coloring, Subset Sum): draw the state-space tree with pruned branches marked with 'X'.",
      "For Floyd-Warshall: clearly show step-by-step distance matrices D(0), D(1), D(2)... up to D(n).",
      "Contrast Quick Sort and Merge Sort using a structured 5-point comparison table (time, space, stability, approach).",
      "In NP-completeness questions, draw the Venn diagram showing P, NP, NP-Complete, and NP-Hard relationships."
    ]
  },

  "cse-5-da": {
    quickIdea: "Data Analytics is the science of inspecting, cleansing, transforming, and modeling raw data to discover actionable insights, predict trends, and optimize business decisions.",
    bullets: [
      "Data Analytics Lifecycle: Business Understanding -> Data Collection -> Pre-processing -> Modeling -> Evaluation -> Deployment.",
      "Types of Analytics: Descriptive (what happened), Diagnostic (why), Predictive (what will happen), Prescriptive (what to do).",
      "Data Pre-processing: Data Cleaning (noise/missing), Integration, Transformation (normalization), Reduction, Discretization.",
      "Outliers: Data points deviating significantly from distribution (detected by Z-Score, IQR, Boxplots).",
      "Missing Imputation: Handling absent data via Mean/Median/Mode, KNN, Regression, or MICE.",
      "Regression Analysis: Simple/Multiple Linear Regression using Ordinary Least Squares (OLS) line of best fit.",
      "BLUE Property (Gauss-Markov): Best Linear Unbiased Estimator under zero conditional mean error assumptions.",
      "Classification vs Clustering: Supervised (Decision Tree, Naive Bayes) vs Unsupervised (K-Means, Hierarchical).",
      "Model Evaluation: Confusion Matrix, Precision, Recall, F1-Score, ROC-AUC, R-squared.",
      "Tools: Python (Pandas, Scikit-learn), R, Tableau, Power BI, Excel, Apache Spark."
    ],
    vocab: [
      { term:"Data Analytics",    def:"Comprehensive methodology of analyzing raw data to extract strategic insights." },
      { term:"Regression",        def:"Statistical modeling of the relationship between dependent and independent variables." },
      { term:"Least Squares",     def:"Optimization technique minimizing the sum of squared vertical residuals (errors)." },
      { term:"BLUE",              def:"Best Linear Unbiased Estimator — minimum variance property of OLS." },
      { term:"Outlier",           def:"Observation located an abnormal distance from other values in a random sample." },
      { term:"Imputation",        def:"Process of replacing missing data with substituted statistical values." },
      { term:"Descriptive Stats", def:"Quantitative summaries: Mean, Median, Mode, Variance, Standard Deviation, Quartiles." },
      { term:"Decision Tree",     def:"Supervised hierarchical tree splitting data on attribute information gain / Gini index." },
      { term:"K-Means",           def:"Partitioning clustering algorithm grouping data into K clusters around centroids." },
      { term:"Logistic Reg",      def:"Classification algorithm modeling probability of categorical outcome via sigmoid curve." },
      { term:"Confusion Matrix",  def:"Tabular layout of True Positives, False Positives, True Negatives, False Negatives." },
      { term:"Dendrogram",        def:"Tree diagram illustrating hierarchical clustering arrangements." }
    ],
    examTips: [
      "For Least Squares numericals: write formula b = [n*sum(xy) - sum(x)*sum(y)] / [n*sum(x^2) - (sum(x))^2] and a = y_bar - b*x_bar.",
      "Always draw a neat scatter plot with the fitted regression line and residual arrows e_i.",
      "Distinguish Analysis vs Analytics: Analysis explains historical past data; Analytics predicts and prescribes future actions.",
      "For Pre-processing 10-markers: draw the sequential 4-box pipeline (Cleaning -> Integration -> Transformation -> Reduction).",
      "In BLUE questions, state all 4 Gauss-Markov assumptions (Linearity, Exogeneity, Homoscedasticity, No Autocorrelation)."
    ]
  },

  "cse-5-devops": {
    quickIdea: "DevOps bridges Software Development (Dev) and IT Operations (Ops) using cultural philosophies, agile practices, automated CI/CD pipelines, containerization, and infrastructure-as-code.",
    bullets: [
      "DevOps Lifecycle: Plan -> Code -> Build -> Test -> Release -> Deploy -> Operate -> Monitor.",
      "Version Control: Git distributed architecture (Working Directory, Staging Area, Local Repo, Remote Repo).",
      "Pull Request Model: Fork/Branch -> Commit -> Pull Request -> Peer Review / Automated Tests -> Merge to Main.",
      "Git Implementations: GitLab, GitHub, Bitbucket with SSH keys and token-based shared authentication.",
      "Docker Containerization: OS-level virtualization sharing host kernel; light, portable, instant boot vs heavy VMs.",
      "Docker Core Components: Docker Engine, Dockerfile (build instructions), Docker Image (snapshot), Docker Container (runtime).",
      "CI/CD Pipeline: Continuous Integration (frequent automated test/build) and Continuous Deployment (automated production release).",
      "Jenkins Automation: Controller-Agent architecture, automated triggers (webhooks), declarative Jenkinsfile pipelines.",
      "Configuration Management: Ansible (agentless push over SSH using YAML playbooks) vs Puppet/Chef (agent-based).",
      "Kubernetes & Monitoring: K8s container orchestration (Pods, Services, Deployments), Prometheus metrics & Grafana dashboards."
    ],
    vocab: [
      { term:"DevOps",           def:"Combination of cultural practices and automated tools enhancing delivery velocity." },
      { term:"Git",              def:"Distributed version control system tracking source code history." },
      { term:"Pull Request",     def:"Formal mechanism for notifying team members that a feature branch is ready for review." },
      { term:"Docker Container", def:"Standardized lightweight executable package containing application code and dependencies." },
      { term:"Dockerfile",       def:"Script containing sequential commands to assemble a Docker image." },
      { term:"CI/CD",            def:"Continuous Integration & Continuous Delivery/Deployment automated software delivery pipeline." },
      { term:"Jenkins",          def:"Open-source automation server for building, testing, and deploying software." },
      { term:"Ansible",          def:"Agentless configuration management and deployment automation tool using YAML." },
      { term:"Kubernetes",       def:"Open-source container orchestration system automating deployment and scaling." },
      { term:"Infrastructure as Code", def:"Managing and provisioning compute infrastructure through machine-readable definition files." },
      { term:"Prometheus",       def:"Open-source metrics collection and alerting time-series monitoring system." },
      { term:"Grafana",          def:"Multi-platform visualization and analytics web application for operational dashboards." }
    ],
    examTips: [
      "In Docker questions, always draw the side-by-side comparison: Containers (Shared OS Kernel) vs VMs (Hypervisor + Guest OS).",
      "For CI/CD questions: draw the classic DevOps infinity loop (♾️) or 5-stage pipeline (Commit -> Build -> Test -> Stage -> Prod).",
      "Explain the Pull Request workflow using a clean branching diagram showing feature-branch merging into main after approval.",
      "In Ansible questions, highlight that it is 'Agentless' (uses standard OpenSSH) which differentiates it from Chef and Puppet.",
      "For Git questions, sketch the 3 local trees: Working Directory -> `git add` -> Staging Area -> `git commit` -> Local Repo."
    ]
  },

  "cse-5-dbms": {
    quickIdea: "DBMS helps organize, store, and retrieve data efficiently using tables, queries, transactions, and ACID properties.",
    bullets: ["Content will be added soon. Stay tuned! 📌"],
    vocab: [],
    examTips: []
  },

  "cse-5-os": {
    quickIdea: "Operating Systems manage hardware and software resources — processes, memory, file systems, synchronization, and I/O.",
    bullets: ["Content will be added soon. Stay tuned! 📌"],
    vocab: [],
    examTips: []
  },
};
