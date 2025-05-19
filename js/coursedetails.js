// Sample course data for demonstration
const coursesData = {
    1: [
        {
            code: "19MAT101",
            name: "Calculus and Linear Algebra",
            faculty: "Dr. Ramesh Kumar",
            credits: 4,            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📈</div>
                    <strong>Limits & Continuity</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Epsilon-delta definitions, limits of functions, continuity, intermediate value theorem</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📊</div>
                    <strong>Differentiation</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Derivatives, rules of differentiation, applications of derivatives, optimization</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">∫</div>
                    <strong>Integration</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Definite and indefinite integrals, techniques of integration, applications</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Series</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Sequences, infinite series, convergence tests, power series, Taylor series</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧮</div>
                    <strong>Matrices</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Matrix operations, determinants, inverse matrices, linear systems of equations</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌐</div>
                    <strong>Vector Spaces</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Vector spaces, subspaces, basis, dimension, linear transformations</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">λ</div>
                    <strong>Eigenvalues</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Eigenvalues, eigenvectors, diagonalization, applications of eigenvalues</p>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [5, 12, 19, 26],
                events: [
                    { date: "May 5", title: "Limits & Continuity Quiz", description: "Epsilon-delta definitions, limits of functions" },
                    { date: "May 12", title: "Differentiation Problems", description: "Chain rule and applications" },
                    { date: "May 19", title: "Integration Test", description: "Techniques and applications of integration" },
                    { date: "May 26", title: "Matrices Assignment Due", description: "Matrix operations and determinants" }
                ]
            },
            resources: "Textbook: Thomas' Calculus, Reference Books: Advanced Engineering Mathematics",
            assignments: "Assignment 1: Due on June 15, Assignment 2: Due on July 20...",
            testsQuizzes: "Quiz 1: May 25, Mid-term: July 10, Final Exam: August 15",
            siteInfo: "Course website: math.amrita.edu/calculus",
            announcements: "Final exam pattern has been updated. Check the resources section."
        },
        {            code: "19PHY101",
            name: "Engineering Physics",
            faculty: "Dr. Sanjay Patel",
            credits: 3,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔭</div>
                    <strong>Mechanics</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Newton's laws, kinematics, momentum, energy, rotational motion</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚡</div>
                    <strong>Electromagnetism</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Electric fields, magnetic fields, Maxwell's equations, electromagnetic waves</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌈</div>
                    <strong>Optics</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Wave nature of light, interference, diffraction, polarization</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚛️</div>
                    <strong>Quantum Physics</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Wave-particle duality, uncertainty principle, Schrödinger equation, quantum states</p>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [3, 10, 17, 24],
                events: [
                    { date: "May 3", title: "Newton's Laws Lab", description: "Experimental verification of Newton's laws" },
                    { date: "May 10", title: "Work & Energy Quiz", description: "Conservation principles and applications" },
                    { date: "May 17", title: "Momentum and Collisions", description: "Elastic and inelastic collisions" },
                    { date: "May 24", title: "Rotational Dynamics Assignment", description: "Angular momentum and torque problems" }
                ]
            },
            resources: "Textbook: University Physics, Lab Manual: Basic Physics Experiments",
            assignments: "Assignment 1: Due on June 10, Assignment 2: Due on July 15...",
            testsQuizzes: "Quiz 1: May 30, Mid-term: July 5, Final Exam: August 10",
            siteInfo: "Course website: physics.amrita.edu/engg",
            announcements: "Physics Lab sessions start from next week."
        },
        {            code: "19CHE101",
            name: "Engineering Chemistry",
            faculty: "Dr. Priya Singh",
            credits: 3,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚗️</div>
                    <strong>Atomic Structure</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Atomic models, electronic configuration, quantum numbers, periodic table</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔗</div>
                    <strong>Chemical Bonding</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Ionic bonds, covalent bonds, metallic bonds, molecular geometry</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔥</div>
                    <strong>Thermodynamics</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Laws of thermodynamics, enthalpy, entropy, free energy, equilibrium</p>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚡</div>
                    <strong>Electrochemistry</strong>
                  </div>
                  <div class="syllabus-back">
                    <p>Electrochemical cells, electrode potentials, batteries, corrosion</p>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [7, 14, 21, 28],
                events: [
                    { date: "May 7", title: "Atomic Structure Review", description: "Electronic configuration and periodic properties" },
                    { date: "May 14", title: "Chemical Bonding Quiz", description: "Ionic, covalent, and metallic bonds" },
                    { date: "May 21", title: "Thermodynamics Lab", description: "Enthalpy and entropy experiments" },
                    { date: "May 28", title: "Reaction Kinetics Assignment", description: "Rate laws and reaction mechanisms" }
                ]
            },
            resources: "Textbook: Chemistry for Engineers, Reference: Physical Chemistry",
            assignments: "Assignment 1: Due on June 12, Assignment 2: Due on July 18...",
            testsQuizzes: "Quiz 1: May 28, Mid-term: July 8, Final Exam: August 12",
            siteInfo: "Course website: chemistry.amrita.edu/engg",
            announcements: "Chemistry Lab batch allocations updated."
        },
        {            code: "19CSE101",
            name: "Introduction to Programming",
            faculty: "Prof. Anand Sharma",
            credits: 4,            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">💻</div>
                    <strong>Programming Basics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Algorithms</li>
                      <li>Flowcharts</li>
                      <li>Pseudocode</li>
                      <li>Programming paradigms</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔢</div>
                    <strong>Data Types</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Primitive data types</li>
                      <li>Variables & constants</li>
                      <li>Type conversion</li>
                      <li>Operators</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Control Structures</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Conditionals (if-else)</li>
                      <li>Switch statements</li>
                      <li>Loops (for, while, do-while)</li>
                      <li>Break and continue</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📦</div>
                    <strong>Arrays</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>1D arrays</li>
                      <li>2D arrays</li>
                      <li>Array operations</li>
                      <li>Array algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔧</div>
                    <strong>Functions</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Function declaration</li>
                      <li>Parameters & return values</li>
                      <li>Scope & lifetime</li>
                      <li>Recursion</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📝</div>
                    <strong>Strings</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>String operations</li>
                      <li>String functions</li>
                      <li>Character manipulation</li>
                      <li>String algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📂</div>
                    <strong>File I/O</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>File opening modes</li>
                      <li>Reading from files</li>
                      <li>Writing to files</li>
                      <li>Error handling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [4, 11, 18, 25],
                events: [
                    { date: "May 4", title: "Programming Basics Quiz", description: "Variables, data types, and operators" },
                    { date: "May 11", title: "Control Structures Assignment", description: "Loops, conditionals, and switch statements" },
                    { date: "May 18", title: "Functions and Methods Lab", description: "Parameter passing and return values" },
                    { date: "May 25", title: "Arrays Exercise", description: "Array manipulation and algorithms" }
                ]
            },
            resources: "Textbook: C Programming Language, Online tutorials: codecademy.com",
            assignments: "Assignment 1: Due on June 5, Assignment 2: Due on July 25...",
            testsQuizzes: "Quiz 1: May 22, Mid-term: July 12, Final Exam: August 18",
            siteInfo: "Course website: cse.amrita.edu/programming",
            announcements: "Programming contest registrations open now."
        },
        {            code: "19ECE101",
            name: "Basic Electrical Engineering",
            faculty: "Dr. Ravi Shankar",
            credits: 3,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚡</div>
                    <strong>Circuit Theory</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Ohm's law</li>
                      <li>Kirchhoff's laws</li>
                      <li>Node & mesh analysis</li>
                      <li>Network theorems</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔌</div>
                    <strong>AC Fundamentals</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Phasors & complex numbers</li>
                      <li>RLC circuits</li>
                      <li>Resonance</li>
                      <li>Power factor</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧲</div>
                    <strong>Magnetic Circuits</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Magnetic fields</li>
                      <li>Magnetic materials</li>
                      <li>Hysteresis</li>
                      <li>Magnetic circuit analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Transformers</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Principles of operation</li>
                      <li>Equivalent circuit</li>
                      <li>Voltage regulation</li>
                      <li>Efficiency calculation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚙️</div>
                    <strong>Electrical Machines</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>DC generators</li>
                      <li>DC motors</li>
                      <li>Induction motors</li>
                      <li>Synchronous machines</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔋</div>
                    <strong>Power Systems</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Generation principles</li>
                      <li>Transmission lines</li>
                      <li>Distribution systems</li>
                      <li>Protection equipment</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📊</div>
                    <strong>Measurements</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Measuring instruments</li>
                      <li>Bridge circuits</li>
                      <li>Digital instruments</li>
                      <li>Transducers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [6, 13, 20, 27],
                events: [
                    { date: "May 6", title: "Circuit Elements Introduction", description: "Passive and active components, circuit laws" },
                    { date: "May 13", title: "Kirchhoff's Laws Quiz", description: "KVL and KCL applications" },
                    { date: "May 20", title: "Nodal Analysis Lab", description: "Hands-on exercise with circuit analysis" },
                    { date: "May 27", title: "Mesh Analysis Assignment", description: "Analysis of complex circuits using mesh method" }
                ]
            },
            resources: "Textbook: Fundamentals of Electrical Engineering, Circuit Simulation Software",
            assignments: "Assignment 1: Due on June 8, Assignment 2: Due on July 22...",
            testsQuizzes: "Quiz 1: May 26, Mid-term: July 15, Final Exam: August 20",
            siteInfo: "Course website: ece.amrita.edu/basic",
            announcements: "Virtual lab sessions will be conducted every Friday."
        },
        {            code: "19MEC101",
            name: "Engineering Mechanics",
            faculty: "Prof. Mohan Das",
            credits: 4,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚖️</div>
                    <strong>Statics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Forces and equilibrium</li>
                      <li>Free body diagrams</li>
                      <li>Structural analysis</li>
                      <li>Center of gravity</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🏃</div>
                    <strong>Dynamics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Kinematics</li>
                      <li>Newton's laws of motion</li>
                      <li>Work-energy principles</li>
                      <li>Impulse and momentum</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔃</div>
                    <strong>Kinematics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Particle motion</li>
                      <li>Rigid body motion</li>
                      <li>Relative motion</li>
                      <li>Velocity and acceleration</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔨</div>
                    <strong>Kinetics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Force and acceleration</li>
                      <li>Energy methods</li>
                      <li>Momentum methods</li>
                      <li>Vibrations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧲</div>
                    <strong>Friction</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Laws of friction</li>
                      <li>Dry friction</li>
                      <li>Rolling resistance</li>
                      <li>Applications of friction</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Virtual Work</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Principle of virtual work</li>
                      <li>Equilibrium applications</li>
                      <li>Potential energy</li>
                      <li>Stability analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📏</div>
                    <strong>Structural Mechanics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Stress and strain</li>
                      <li>Trusses and frames</li>
                      <li>Shear force diagrams</li>
                      <li>Bending moment diagrams</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [2, 9, 16, 23],
                events: [
                    { date: "May 2", title: "Mechanics Fundamentals", description: "Statics principles and applications" },
                    { date: "May 9", title: "Force Analysis Quiz", description: "Free body diagrams and force calculations" },
                    { date: "May 16", title: "Dynamics Lab", description: "Motion analysis experiments" },
                    { date: "May 23", title: "Equilibrium Project Due", description: "Group project on structural equilibrium" }
                ]
            },
            resources: "Textbook: Engineering Mechanics by Hibbeler, Problem Set Collection",
            assignments: "Assignment 1: Due on June 20, Assignment 2: Due on July 30...",
            testsQuizzes: "Quiz 1: June 2, Mid-term: July 18, Final Exam: August 25",
            siteInfo: "Course website: mechanical.amrita.edu/mechanics",
            announcements: "Model-making competition details announced."
        },
        {            code: "19ENG101",
            name: "Technical Communication",
            faculty: "Prof. Lisa Johnson",
            credits: 2,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📝</div>
                    <strong>Academic Writing</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Research papers</li>
                      <li>Citations & references</li>
                      <li>Plagiarism avoidance</li>
                      <li>Literature review</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📊</div>
                    <strong>Technical Reports</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Report structure</li>
                      <li>Data visualization</li>
                      <li>Executive summaries</li>
                      <li>Technical documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🎤</div>
                    <strong>Presentation Skills</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Slide design</li>
                      <li>Delivery techniques</li>
                      <li>Audience engagement</li>
                      <li>Handling Q&A</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">💬</div>
                    <strong>Communication Theory</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Communication models</li>
                      <li>Barriers to communication</li>
                      <li>Active listening</li>
                      <li>Feedback mechanisms</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">💼</div>
                    <strong>Professional Writing</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Business correspondence</li>
                      <li>Emails & memos</li>
                      <li>Resume & CV</li>
                      <li>Cover letters</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌐</div>
                    <strong>Digital Communication</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Online content writing</li>
                      <li>Social media communication</li>
                      <li>Virtual meetings</li>
                      <li>Digital etiquette</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">👥</div>
                    <strong>Team Communication</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Collaborative writing</li>
                      <li>Group presentations</li>
                      <li>Conflict resolution</li>
                      <li>Interpersonal skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [8, 15, 19, 30],
                events: [
                    { date: "May 8", title: "Communication Workshop", description: "Effective technical communication exercises" },
                    { date: "May 15", title: "Technical Writing Assignment", description: "Technical report preparation" },
                    { date: "May 19", title: "Presentation Skills Practice", description: "Group presentations with feedback" },
                    { date: "May 30", title: "Professional Communication Exam", description: "Final evaluation of all topics covered" }
                ]
            },
            resources: "Textbook: Technical Communication Today, Style Guide, Presentation Templates",
            assignments: "Assignment 1: Due on June 14, Assignment 2: Due on July 14...",
            testsQuizzes: "Quiz 1: May 27, Mid-term: July 7, Final Exam: August 14",
            siteInfo: "Course website: humanities.amrita.edu/comm",
            announcements: "Group presentation topics released."
        },
        {            code: "19ENV101",
            name: "Environmental Studies",
            faculty: "Dr. Maya Verma",
            credits: 2,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌍</div>
                    <strong>Environmental Science</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Introduction to environment</li>
                      <li>Environmental components</li>
                      <li>Natural resources</li>
                      <li>Human impact</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌿</div>
                    <strong>Ecosystems</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Structure and function</li>
                      <li>Energy flow</li>
                      <li>Food chains and webs</li>
                      <li>Ecological succession</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🦁</div>
                    <strong>Biodiversity</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Levels of biodiversity</li>
                      <li>Value of biodiversity</li>
                      <li>Threats to biodiversity</li>
                      <li>Conservation strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🏭</div>
                    <strong>Pollution</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Air pollution</li>
                      <li>Water pollution</li>
                      <li>Soil pollution</li>
                      <li>Noise pollution</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">♻️</div>
                    <strong>Waste Management</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Solid waste management</li>
                      <li>E-waste</li>
                      <li>Recycling processes</li>
                      <li>Waste minimization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌡️</div>
                    <strong>Climate Change</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Greenhouse effect</li>
                      <li>Global warming</li>
                      <li>Climate change impacts</li>
                      <li>Mitigation strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌱</div>
                    <strong>Sustainable Development</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Sustainable development goals</li>
                      <li>Green technologies</li>
                      <li>Environmental ethics</li>
                      <li>Environmental policies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [2, 9, 16, 23],
                events: [
                    { date: "May 2", title: "Environmental Science Intro", description: "Basic concepts and importance of environmental studies" },
                    { date: "May 9", title: "Ecosystems Analysis", description: "Structure and function of ecosystems" },
                    { date: "May 16", title: "Biodiversity Quiz", description: "Assessment on biodiversity and conservation" },
                    { date: "May 23", title: "Pollution Control Project", description: "Group presentations on pollution control measures" }
                ]
            },
            resources: "Textbook: Environmental Science, Documentary Collection, Case Studies",
            assignments: "Assignment 1: Due on June 18, Assignment 2: Due on July 28...",
            testsQuizzes: "Quiz 1: June 5, Mid-term: July 20, Final Exam: August 22",
            siteInfo: "Course website: envscience.amrita.edu",
            announcements: "Field trip to water treatment plant scheduled for next month."
        }
    ],
    2: [
        {            code: "19MAT102",
            name: "Differential Equations and Transforms",
            faculty: "Dr. Karthik Menon",
            credits: 4,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📝</div>
                    <strong>First Order ODEs</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Separable equations</li>
                      <li>Exact equations</li>
                      <li>Integrating factors</li>
                      <li>Linear equations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔢</div>
                    <strong>Second Order ODEs</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Homogeneous equations</li>
                      <li>Non-homogeneous equations</li>
                      <li>Method of undetermined coefficients</li>
                      <li>Variation of parameters</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚙️</div>
                    <strong>Applications of ODEs</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Mechanical systems</li>
                      <li>Electrical circuits</li>
                      <li>Population dynamics</li>
                      <li>Mixing problems</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">∇</div>
                    <strong>Partial Differential Equations</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Heat equation</li>
                      <li>Wave equation</li>
                      <li>Laplace's equation</li>
                      <li>Boundary value problems</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Laplace Transforms</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Definition and properties</li>
                      <li>Transform of derivatives</li>
                      <li>Inverse Laplace transform</li>
                      <li>Applications to ODEs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📈</div>
                    <strong>Fourier Series</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Periodic functions</li>
                      <li>Fourier coefficients</li>
                      <li>Even and odd functions</li>
                      <li>Half-range expansions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌊</div>
                    <strong>Fourier Transforms</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Definition and properties</li>
                      <li>Convolution theorem</li>
                      <li>Parseval's identity</li>
                      <li>Applications in PDEs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [3, 10, 17, 24],
                events: [
                    { date: "May 3", title: "First Order ODEs", description: "Linear and nonlinear first order differential equations" },
                    { date: "May 10", title: "Second Order ODEs Quiz", description: "Homogeneous and non-homogeneous equations" },
                    { date: "May 17", title: "Series Solutions Lab", description: "Power series methods for solving ODEs" },
                    { date: "May 24", title: "Laplace Transforms Assignment", description: "Applications of Laplace transforms in solving ODEs" }
                ]
            },
            resources: "Textbook: Differential Equations with Applications by Zill, Problem Set Collection",
            assignments: "Assignment 1: Due on June 22, Assignment 2: Due on July 25...",
            testsQuizzes: "Quiz 1: June 5, Mid-term: July 15, Final Exam: August 20",
            siteInfo: "Course website: math.amrita.edu/diffequations",
            announcements: "Extra tutorial sessions announced for Laplace Transforms."
        },
        {            code: "19PHY102",
            name: "Semiconductor Physics",
            faculty: "Dr. Arun Kumar",
            credits: 3,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔬</div>
                    <strong>Crystal Structure</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Crystalline materials</li>
                      <li>Unit cells</li>
                      <li>Crystal systems</li>
                      <li>Miller indices</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚛️</div>
                    <strong>Quantum Mechanics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Wave-particle duality</li>
                      <li>Schrödinger equation</li>
                      <li>Quantum wells</li>
                      <li>Tunneling phenomena</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">〰️</div>
                    <strong>Band Theory</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Energy bands</li>
                      <li>Valence & conduction bands</li>
                      <li>Direct & indirect bandgaps</li>
                      <li>Effective mass</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔋</div>
                    <strong>Semiconductors</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Intrinsic semiconductors</li>
                      <li>Extrinsic semiconductors</li>
                      <li>Doping and impurities</li>
                      <li>Carrier concentrations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚡</div>
                    <strong>P-N Junctions</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Junction formation</li>
                      <li>Built-in potential</li>
                      <li>Depletion region</li>
                      <li>Current-voltage characteristics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">💻</div>
                    <strong>Semiconductor Devices</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Diodes</li>
                      <li>Transistors</li>
                      <li>MOSFETs</li>
                      <li>Integrated circuits</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔆</div>
                    <strong>Optoelectronics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>LEDs</li>
                      <li>Semiconductor lasers</li>
                      <li>Photodetectors</li>
                      <li>Solar cells</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [7, 14, 21, 28],
                events: [
                    { date: "May 7", title: "Crystal Structure Basics", description: "Lattice structures and crystal symmetry" },
                    { date: "May 14", title: "Band Theory Quiz", description: "Energy bands in solids and band gaps" },
                    { date: "May 21", title: "Semiconductor Materials Lab", description: "Properties of semiconductor materials" },
                    { date: "May 28", title: "Quantum Physics Applications", description: "Practical applications in modern electronics" }
                ]
            },
            resources: "Textbook: Semiconductor Physics and Devices, Lab Manual",
            assignments: "Assignment 1: Due on June 10, Assignment 2: Due on July 18...",
            testsQuizzes: "Quiz 1: May 25, Mid-term: July 10, Final Exam: August 15",
            siteInfo: "Course website: physics.amrita.edu/semiconductor",
            announcements: "Device fabrication demonstration scheduled for next week."
        },
        {            code: "19CSE102",
            name: "Data Structures",
            faculty: "Prof. Suresh Babu",
            credits: 4,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📊</div>
                    <strong>Arrays</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>1D arrays</li>
                      <li>Multi-dimensional arrays</li>
                      <li>Array operations</li>
                      <li>Dynamic arrays</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧵</div>
                    <strong>Linked Lists</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Singly linked lists</li>
                      <li>Doubly linked lists</li>
                      <li>Circular linked lists</li>
                      <li>List operations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📚</div>
                    <strong>Stacks</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Stack operations</li>
                      <li>Array implementation</li>
                      <li>Linked list implementation</li>
                      <li>Applications of stacks</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Queues</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Queue operations</li>
                      <li>Array implementation</li>
                      <li>Linked list implementation</li>
                      <li>Circular queues & priority queues</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌳</div>
                    <strong>Trees</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Binary trees</li>
                      <li>Binary search trees</li>
                      <li>Tree traversals</li>
                      <li>AVL trees & balanced trees</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🕸️</div>
                    <strong>Graphs</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Graph representations</li>
                      <li>Graph traversals (BFS, DFS)</li>
                      <li>Shortest path algorithms</li>
                      <li>Minimum spanning trees</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔍</div>
                    <strong>Searching & Sorting</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Linear & binary search</li>
                      <li>Bubble, insertion & selection sort</li>
                      <li>Merge & quick sort</li>
                      <li>Heap sort & radix sort</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [1, 8, 15, 22],
                events: [
                    { date: "May 1", title: "Data Structures Introduction", description: "Overview of arrays and linked lists" },
                    { date: "May 8", title: "Stack and Queue Assignment", description: "Implementation and applications" },
                    { date: "May 15", title: "Trees and Graphs Lab", description: "Hands-on implementation of tree traversals" },
                    { date: "May 22", title: "Searching & Sorting Algorithms Quiz", description: "Binary search and sorting techniques" }
                ]
            },
            resources: "Textbook: Data Structures and Algorithm Analysis in C++, Online Practice Platform",
            assignments: "Assignment 1: Due on June 15, Assignment 2: Due on July 20...",
            testsQuizzes: "Quiz 1: May 30, Mid-term: July 12, Final Exam: August 18",
            siteInfo: "Course website: cse.amrita.edu/datastructures",
            announcements: "Coding competition using data structures concepts next month."
        },
        {            code: "19ECE102",
            name: "Digital Electronics",
            faculty: "Dr. Nandini Sharma",
            credits: 3,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔢</div>
                    <strong>Number Systems</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Binary, octal, hexadecimal</li>
                      <li>Conversion between systems</li>
                      <li>Complement arithmetic</li>
                      <li>Binary arithmetic</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧮</div>
                    <strong>Boolean Algebra</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Boolean operations</li>
                      <li>Boolean theorems</li>
                      <li>Karnaugh maps</li>
                      <li>Logic simplification</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔌</div>
                    <strong>Logic Gates</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Basic gates (AND, OR, NOT)</li>
                      <li>Universal gates (NAND, NOR)</li>
                      <li>XOR and XNOR gates</li>
                      <li>Gate implementations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Combinational Circuits</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Half/full adders</li>
                      <li>Multiplexers/demultiplexers</li>
                      <li>Encoders/decoders</li>
                      <li>Comparators</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⏱️</div>
                    <strong>Sequential Circuits</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Flip-flops (SR, D, JK, T)</li>
                      <li>Registers and counters</li>
                      <li>State machines</li>
                      <li>Synchronous design</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">💾</div>
                    <strong>Memory Systems</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>RAM and ROM</li>
                      <li>Memory organization</li>
                      <li>Memory addressing</li>
                      <li>Cache memory</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🖥️</div>
                    <strong>Digital System Design</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>ASM charts</li>
                      <li>Controller design</li>
                      <li>FPGA basics</li>
                      <li>Hardware description languages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [6, 13, 20, 27],
                events: [
                    { date: "May 6", title: "Number Systems Overview", description: "Binary, octal, hexadecimal and conversions" },
                    { date: "May 13", title: "Logic Gates Quiz", description: "Basic and universal logic gates" },
                    { date: "May 20", title: "Combinational Circuits Lab", description: "Design and implementation of combinational circuits" },
                    { date: "May 27", title: "Sequential Circuits Project", description: "Flip-flops and sequential circuit design" }
                ]
            },
            resources: "Textbook: Digital Design by Morris Mano, Logic Design Simulator",
            assignments: "Assignment 1: Due on June 12, Assignment 2: Due on July 22...",
            testsQuizzes: "Quiz 1: May 28, Mid-term: July 8, Final Exam: August 12",
            siteInfo: "Course website: ece.amrita.edu/digital",
            announcements: "Digital circuit mini-project topics released."
        },
        {            code: "19MEC102",
            name: "Engineering Graphics",
            faculty: "Prof. Rajesh Khanna",
            credits: 3,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📏</div>
                    <strong>Drawing Basics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Drawing instruments</li>
                      <li>Lettering standards</li>
                      <li>Dimensioning principles</li>
                      <li>Scales and measurements</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📐</div>
                    <strong>Geometric Constructions</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Lines and angles</li>
                      <li>Polygons</li>
                      <li>Circles and arcs</li>
                      <li>Tangent constructions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔍</div>
                    <strong>Orthographic Projections</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>First angle projection</li>
                      <li>Third angle projection</li>
                      <li>Multiview drawings</li>
                      <li>Projection of points and lines</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧊</div>
                    <strong>Isometric Views</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Isometric scales</li>
                      <li>Isometric projections</li>
                      <li>Isometric drawing of solids</li>
                      <li>Conversion from orthographic</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">✂️</div>
                    <strong>Sectional Views</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Full sections</li>
                      <li>Half sections</li>
                      <li>Offset sections</li>
                      <li>Revolved sections</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🖥️</div>
                    <strong>Computer-Aided Drafting</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>CAD fundamentals</li>
                      <li>2D drafting techniques</li>
                      <li>3D modeling basics</li>
                      <li>Drawing standards in CAD</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔩</div>
                    <strong>Machine Drawing</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Threaded fasteners</li>
                      <li>Keys and couplings</li>
                      <li>Bearings representation</li>
                      <li>Assembly drawings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [4, 11, 18, 25],
                events: [
                    { date: "May 4", title: "Engineering Drawing Basics", description: "Dimensioning and annotations techniques" },
                    { date: "May 11", title: "Orthographic Projections", description: "First and third angle projection methods" },
                    { date: "May 18", title: "Isometric Drawing Exercise", description: "Creating 3D isometric views from 2D drawings" },
                    { date: "May 25", title: "AutoCAD Introduction", description: "Computer-aided drafting basics and tools" }
                ]
            },
            resources: "Textbook: Engineering Drawing, AutoCAD Tutorials, Drawing Equipment List",
            assignments: "Assignment 1: Due on June 18, Assignment 2: Due on July 28...",
            testsQuizzes: "Quiz 1: June 2, Mid-term: July 18, Final Exam: August 22",
            siteInfo: "Course website: mechanical.amrita.edu/graphics",
            announcements: "CAD lab timings updated for next week."
        },
        {            code: "19HSS102",
            name: "Professional Ethics",
            faculty: "Dr. Rajat Mishra",
            credits: 2,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧠</div>
                    <strong>Ethical Theories</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Utilitarianism</li>
                      <li>Deontology</li>
                      <li>Virtue ethics</li>
                      <li>Moral relativism</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚖️</div>
                    <strong>Professional Responsibilities</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Professional codes of conduct</li>
                      <li>Whistleblowing</li>
                      <li>Workplace ethics</li>
                      <li>Corporate social responsibility</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📝</div>
                    <strong>Intellectual Property</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Patents</li>
                      <li>Copyrights</li>
                      <li>Trademarks</li>
                      <li>Trade secrets</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔒</div>
                    <strong>Privacy and Data Ethics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Data protection principles</li>
                      <li>Privacy regulations</li>
                      <li>Surveillance ethics</li>
                      <li>Informed consent</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌐</div>
                    <strong>Global Ethical Issues</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Cultural differences</li>
                      <li>Global business ethics</li>
                      <li>Environmental ethics</li>
                      <li>Technology transfer ethics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">💻</div>
                    <strong>Technology Ethics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>AI and automation ethics</li>
                      <li>Social media ethics</li>
                      <li>Cybersecurity ethics</li>
                      <li>Digital divide issues</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔍</div>
                    <strong>Case Studies Analysis</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Ethical decision frameworks</li>
                      <li>Engineering failures analysis</li>
                      <li>Tech industry case studies</li>
                      <li>Ethical dilemmas resolution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [5, 12, 19, 26],
                events: [
                    { date: "May 5", title: "Ethics Introduction", description: "Fundamental ethical theories and principles" },
                    { date: "May 12", title: "Professional Codes Discussion", description: "Analysis of engineering code of ethics" },
                    { date: "May 19", title: "Case Studies Analysis", description: "Ethical dilemmas in engineering practice" },
                    { date: "May 26", title: "Social Responsibility Project", description: "Group presentations on ethical issues in technology" }
                ]
            },
            resources: "Textbook: Ethics in Engineering, Case Studies Collection",
            assignments: "Assignment 1: Due on June 20, Assignment 2: Due on July 30...",
            testsQuizzes: "Quiz 1: June 5, Mid-term: July 20, Final Exam: August 25",
            siteInfo: "Course website: humanities.amrita.edu/ethics",
            announcements: "Guest lecture by industry expert scheduled next Thursday."
        },
        {            code: "19LAB102",
            name: "Programming Lab",
            faculty: "Prof. Vijay Kumar",
            credits: 2,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🏁</div>
                    <strong>Basic Programs</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Hello world programs</li>
                      <li>Input/output operations</li>
                      <li>Arithmetic operations</li>
                      <li>Simple calculators</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Control Structures</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Implementing if-else logic</li>
                      <li>Loop implementations</li>
                      <li>Nested control structures</li>
                      <li>Pattern printing programs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📦</div>
                    <strong>Array Manipulations</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Array traversal techniques</li>
                      <li>Searching algorithms</li>
                      <li>Searching algorithms</li>
                      <li>Sorting algorithms</li>
                      <li>Matrix operations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔧</div>
                    <strong>Functions</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Function implementation</li>
                      <li>Parameter passing techniques</li>
                      <li>Recursive functions</li>
                      <li>Function libraries usage</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📝</div>
                    <strong>String Processing</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>String manipulation functions</li>
                      <li>String search algorithms</li>
                      <li>String sorting & comparison</li>
                      <li>Text processing applications</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📂</div>
                    <strong>File Operations</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>File input/output</li>
                      <li>Text file processing</li>
                      <li>Binary file operations</li>
                      <li>File management applications</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🏗️</div>
                    <strong>Mini Projects</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Simple applications</li>
                      <li>Student management system</li>
                      <li>Library management system</li>
                      <li>Console-based games</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [8, 15, 22, 29],
                events: [
                    { date: "May 8", title: "Programming Fundamentals", description: "Introduction to Python programming basics" },
                    { date: "May 15", title: "Array Manipulations Lab", description: "Hands-on practice with array operations" },
                    { date: "May 22", title: "Functions and Recursion", description: "Implementing and using functions in Python" },
                    { date: "May 29", title: "File Handling Assignment", description: "Reading and writing data to files in Python" }
                ]
            },
            resources: "Lab Manual, Code Repository, Reference Programs",
            assignments: "Lab Assignment 1: Due on June 14, Lab Assignment 2: Due on July 14...",
            testsQuizzes: "Lab Test 1: May 27, Lab Test 2: July 7, Final Lab Exam: August 14",
            siteInfo: "Course website: cse.amrita.edu/proglab",
            announcements: "Lab equipment upgraded. New submission guidelines posted."
        }
    ],
    3: [        {
            code: "19MAT201",
            name: "Probability and Statistics",
            faculty: "Dr. Lata Gupta",
            credits: 3,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🎲</div>
                    <strong>Probability Concepts</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Sample spaces</li>
                      <li>Events and probability</li>
                      <li>Conditional probability</li>
                      <li>Bayes' theorem</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔢</div>
                    <strong>Random Variables</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Discrete random variables</li>
                      <li>Continuous random variables</li>
                      <li>Probability distributions</li>
                      <li>Expected value and variance</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📊</div>
                    <strong>Probability Distributions</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Binomial distribution</li>
                      <li>Poisson distribution</li>
                      <li>Normal distribution</li>
                      <li>Exponential distribution</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📋</div>
                    <strong>Sampling Methods</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Population and samples</li>
                      <li>Sampling distributions</li>
                      <li>Central limit theorem</li>
                      <li>Confidence intervals</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚖️</div>
                    <strong>Hypothesis Testing</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Null and alternative hypotheses</li>
                      <li>Type I and Type II errors</li>
                      <li>t-tests and z-tests</li>
                      <li>ANOVA</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📈</div>
                    <strong>Regression Analysis</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Linear regression</li>
                      <li>Multiple regression</li>
                      <li>Correlation coefficient</li>
                      <li>Model evaluation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧩</div>
                    <strong>Applied Statistics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Statistical quality control</li>
                      <li>Statistical software tools</li>
                      <li>Engineering applications</li>
                      <li>Data analysis projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [6, 13, 20, 27],
                events: [
                    { date: "May 6", title: "Probability Fundamentals", description: "Axioms and basic probability concepts" },
                    { date: "May 13", title: "Random Variables Quiz", description: "Discrete and continuous random variables" },
                    { date: "May 20", title: "Probability Distributions Lab", description: "Working with common probability distributions" },
                    { date: "May 27", title: "Statistical Inference Project", description: "Hypothesis testing and confidence intervals" }
                ]
            },
            resources: "Textbook: Probability and Statistics for Engineers, Statistical Software Tutorials",
            assignments: "Assignment 1: Due on June 8, Assignment 2: Due on July 12...",
            testsQuizzes: "Quiz 1: May 22, Mid-term: July 5, Final Exam: August 10",
            siteInfo: "Course website: math.amrita.edu/statistics",
            announcements: "Statistical analysis project topics announced."
        },        {
            code: "19CSE201",
            name: "Object-Oriented Programming",
            faculty: "Prof. Rebecca Thomas",
            credits: 4,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧩</div>
                    <strong>OOP Fundamentals</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Procedural vs OOP</li>
                      <li>OOP principles</li>
                      <li>Object thinking</li>
                      <li>OOP languages overview</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📦</div>
                    <strong>Classes and Objects</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Class definition</li>
                      <li>Object creation</li>
                      <li>Attributes and methods</li>
                      <li>Constructors and destructors</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔒</div>
                    <strong>Encapsulation</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Access modifiers</li>
                      <li>Getters and setters</li>
                      <li>Information hiding</li>
                      <li>Package/namespace concepts</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌲</div>
                    <strong>Inheritance</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Base and derived classes</li>
                      <li>Method overriding</li>
                      <li>Inheritance types</li>
                      <li>Is-a relationships</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Polymorphism</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Method overloading</li>
                      <li>Runtime polymorphism</li>
                      <li>Virtual functions</li>
                      <li>Dynamic binding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📝</div>
                    <strong>Abstraction</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Abstract classes</li>
                      <li>Interfaces</li>
                      <li>Multiple inheritance</li>
                      <li>Dependency management</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🏗️</div>
                    <strong>Design Patterns</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Creational patterns</li>
                      <li>Structural patterns</li>
                      <li>Behavioral patterns</li>
                      <li>OOP best practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [5, 12, 19, 26],
                events: [
                    { date: "May 5", title: "OOP Concepts Overview", description: "Inheritance, polymorphism, encapsulation" },
                    { date: "May 12", title: "Classes & Objects Workshop", description: "Practical implementation of OOP concepts" },
                    { date: "May 19", title: "Inheritance & Polymorphism Quiz", description: "Today's in-class assessment on inheritance" },
                    { date: "May 26", title: "Design Patterns Project", description: "Implementation of common design patterns" }
                ]
            },
            resources: "Textbook: Thinking in Java, Object-Oriented Design Patterns",
            assignments: "Assignment 1: Due on June 10, Assignment 2: Due on July 15...",
            testsQuizzes: "Quiz 1: May 25, Mid-term: July 8, Final Exam: August 12",
            siteInfo: "Course website: cse.amrita.edu/oop",
            announcements: "OOP project teams must be finalized by this Friday."
        },
        {            code: "19CSE202",
            name: "Database Management Systems",
            faculty: "Dr. Vishal Gupta",
            credits: 4,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📊</div>
                    <strong>Database Concepts</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Introduction to DBMS</li>
                      <li>Database architecture</li>
                      <li>Data independence</li>
                      <li>Database users</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🏗️</div>
                    <strong>Data Models</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Entity-Relationship model</li>
                      <li>Relational model</li>
                      <li>Object-oriented model</li>
                      <li>NoSQL models</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔍</div>
                    <strong>Relational Algebra</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Selection and projection</li>
                      <li>Set operations</li>
                      <li>Join operations</li>
                      <li>Division and aggregation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">💬</div>
                    <strong>SQL</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>DDL and DML</li>
                      <li>Queries and subqueries</li>
                      <li>Views and indexes</li>
                      <li>Stored procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📐</div>
                    <strong>Normalization</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Functional dependencies</li>
                      <li>Normal forms (1NF to BCNF)</li>
                      <li>Normalization process</li>
                      <li>Denormalization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Transaction Management</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>ACID properties</li>
                      <li>Concurrency control</li>
                      <li>Deadlock handling</li>
                      <li>Recovery techniques</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔐</div>
                    <strong>Database Security</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Authentication and authorization</li>
                      <li>Access control</li>
                      <li>Data encryption</li>
                      <li>Auditing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [2, 9, 16, 23],
                events: [
                    { date: "May 2", title: "Data Models Overview", description: "Entity-Relationship and Relational models" },
                    { date: "May 9", title: "SQL Fundamentals Quiz", description: "Basic SQL queries and operations" },
                    { date: "May 16", title: "Database Normalization Lab", description: "Practical normalization exercises" },
                    { date: "May 23", title: "Advanced SQL Project", description: "Complex queries and database design implementation" }
                ]
            },
            resources: "Textbook: Database System Concepts, MySQL Workbench Tutorial",
            assignments: "Assignment 1: Due on June 15, Assignment 2: Due on July 20...",
            testsQuizzes: "Quiz 1: May 30, Mid-term: July 12, Final Exam: August 18",
            siteInfo: "Course website: cse.amrita.edu/dbms",
            announcements: "Database design competition announced."
        },
        {            code: "19CSE203",
            name: "Computer Organization",
            faculty: "Prof. Harish Reddy",
            credits: 3,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">💻</div>
                    <strong>Computer Architecture</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Von Neumann architecture</li>
                      <li>System components</li>
                      <li>Performance metrics</li>
                      <li>Computer evolution</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚙️</div>
                    <strong>Instruction Sets</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Instruction formats</li>
                      <li>Addressing modes</li>
                      <li>Instruction types</li>
                      <li>RISC vs CISC</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧠</div>
                    <strong>Memory Hierarchy</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Cache memory</li>
                      <li>Main memory</li>
                      <li>Virtual memory</li>
                      <li>Memory management</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>CPU Organization</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Register organization</li>
                      <li>Datapath design</li>
                      <li>Control unit</li>
                      <li>Micro-operations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⏱️</div>
                    <strong>Pipelining</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Pipeline stages</li>
                      <li>Pipeline hazards</li>
                      <li>Pipeline scheduling</li>
                      <li>Superscalar processors</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🖨️</div>
                    <strong>I/O Systems</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>I/O interfaces</li>
                      <li>I/O techniques</li>
                      <li>Buses and protocols</li>
                      <li>Peripheral devices</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔢</div>
                    <strong>Assembly Language</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Assembly basics</li>
                      <li>Machine code translation</li>
                      <li>Assembly directives</li>
                      <li>Program examples</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [3, 10, 17, 24],
                events: [
                    { date: "May 3", title: "Computer Organization Basics", description: "Computer architecture and organization principles" },
                    { date: "May 10", title: "Machine Instructions Quiz", description: "Instruction formats and addressing modes" },
                    { date: "May 17", title: "CPU Design Lab", description: "ALU and control unit implementation" },
                    { date: "May 24", title: "Memory Hierarchy Project", description: "Cache design and performance analysis" }
                ]
            },
            resources: "Textbook: Computer Organization and Design, Assembly Language Programming Guide",
            assignments: "Assignment 1: Due on June 12, Assignment 2: Due on July 18...",
            testsQuizzes: "Quiz 1: May 28, Mid-term: July 10, Final Exam: August 15",
            siteInfo: "Course website: cse.amrita.edu/organization",
            announcements: "Hardware workshop rescheduled to next week."
        },
        {            code: "19CSE204",
            name: "Operating Systems",
            faculty: "Dr. Neha Sharma",
            credits: 4,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">💻</div>
                    <strong>OS Introduction</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>OS functions</li>
                      <li>System calls</li>
                      <li>OS structures</li>
                      <li>OS evolution</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Process Management</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Process concept</li>
                      <li>Process scheduling</li>
                      <li>Operations on processes</li>
                      <li>Interprocess communication</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧵</div>
                    <strong>Threads</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Thread concepts</li>
                      <li>Multithreading models</li>
                      <li>Thread libraries</li>
                      <li>Thread issues</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔒</div>
                    <strong>CPU Scheduling</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Scheduling criteria</li>
                      <li>Scheduling algorithms</li>
                      <li>Multi-processor scheduling</li>
                      <li>Real-time scheduling</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Synchronization</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Critical section problem</li>
                      <li>Semaphores</li>
                      <li>Monitors</li>
                      <li>Deadlocks</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧠</div>
                    <strong>Memory Management</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Memory hierarchy</li>
                      <li>Virtual memory</li>
                      <li>Paging</li>
                      <li>Segmentation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📁</div>
                    <strong>File Systems</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>File concepts</li>
                      <li>Directory structures</li>
                      <li>File system implementation</li>
                      <li>Disk scheduling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [7, 14, 21, 28],
                events: [
                    { date: "May 7", title: "OS Introduction", description: "Operating system concepts and evolution" },
                    { date: "May 14", title: "Process Management Quiz", description: "Process scheduling and synchronization" },
                    { date: "May 21", title: "Memory Management Lab", description: "Virtual memory and page replacement algorithms" },
                    { date: "May 28", title: "File Systems Project", description: "Implementation of basic file system operations" }
                ]
            },
            resources: "Textbook: Operating System Concepts, Linux Tutorial, Shell Programming Guide",
            assignments: "Assignment 1: Due on June 18, Assignment 2: Due on July 22...",
            testsQuizzes: "Quiz 1: June 2, Mid-term: July 15, Final Exam: August 20",
            siteInfo: "Course website: cse.amrita.edu/os",
            announcements: "Operating systems lab access extended hours announced."
        },
        {            code: "19CSE205",
            name: "Computer Networks",
            faculty: "Prof. Jayant Singh",
            credits: 3,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌐</div>
                    <strong>Network Fundamentals</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Network types</li>
                      <li>Network topologies</li>
                      <li>Networking devices</li>
                      <li>Performance metrics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🏗️</div>
                    <strong>Network Models</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>OSI model</li>
                      <li>TCP/IP model</li>
                      <li>Layer functions</li>
                      <li>Protocol stack</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">⚡</div>
                    <strong>Physical Layer</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Transmission media</li>
                      <li>Signal encoding</li>
                      <li>Digital transmission</li>
                      <li>Multiplexing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔗</div>
                    <strong>Data Link Layer</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Error detection & correction</li>
                      <li>Flow control</li>
                      <li>MAC protocols</li>
                      <li>Ethernet & WiFi</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧭</div>
                    <strong>Network Layer</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>IP addressing</li>
                      <li>Subnetting</li>
                      <li>Routing protocols</li>
                      <li>IPv4 vs IPv6</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🚢</div>
                    <strong>Transport Layer</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>TCP & UDP</li>
                      <li>Congestion control</li>
                      <li>Connection management</li>
                      <li>Socket programming</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔐</div>
                    <strong>Network Security</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Cryptography basics</li>
                      <li>Authentication mechanisms</li>
                      <li>Network attacks</li>
                      <li>Firewalls & IDS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [5, 12, 19, 26],
                events: [
                    { date: "May 5", title: "Network Models Overview", description: "OSI and TCP/IP reference models" },
                    { date: "May 12", title: "Physical Layer Quiz", description: "Transmission media and encoding techniques" },
                    { date: "May 19", title: "Data Link Layer Lab", description: "Error detection and correction protocols" },
                    { date: "May 26", title: "Network Layer Project", description: "IP addressing and routing implementation" }
                ]
            },
            resources: "Textbook: Computer Networking: A Top-Down Approach, Packet Tracer Tutorials",
            assignments: "Assignment 1: Due on June 20, Assignment 2: Due on July 25...",
            testsQuizzes: "Quiz 1: June 5, Mid-term: July 18, Final Exam: August 22",
            siteInfo: "Course website: cse.amrita.edu/networks",
            announcements: "Network simulator demonstration scheduled for Thursday."
        },
        {            code: "19HSS201",
            name: "Economics for Engineers",
            faculty: "Dr. Pankaj Gupta",
            credits: 2,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📊</div>
                    <strong>Economic Fundamentals</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Scarcity and choice</li>
                      <li>Production possibilities</li>
                      <li>Economic systems</li>
                      <li>Opportunity costs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📈</div>
                    <strong>Microeconomics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Supply and demand</li>
                      <li>Elasticity concepts</li>
                      <li>Consumer behavior</li>
                      <li>Production theory</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🏭</div>
                    <strong>Market Structures</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Perfect competition</li>
                      <li>Monopoly</li>
                      <li>Oligopoly</li>
                      <li>Monopolistic competition</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🌍</div>
                    <strong>Macroeconomics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>GDP and economic growth</li>
                      <li>Inflation and unemployment</li>
                      <li>Fiscal and monetary policy</li>
                      <li>International trade</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">💰</div>
                    <strong>Engineering Economics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Time value of money</li>
                      <li>Cost concepts</li>
                      <li>Depreciation methods</li>
                      <li>Break-even analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📝</div>
                    <strong>Project Evaluation</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>NPV and IRR</li>
                      <li>Benefit-cost analysis</li>
                      <li>Payback period</li>
                      <li>Risk assessment</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🏗️</div>
                    <strong>Economic Applications</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Resource allocation</li>
                      <li>Technology adoption</li>
                      <li>Public sector economics</li>
                      <li>Case studies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [4, 11, 18, 25],
                events: [
                    { date: "May 4", title: "Economic Fundamentals", description: "Basic economic concepts and principles" },
                    { date: "May 11", title: "Market Structures Quiz", description: "Perfect competition, monopoly, and oligopoly" },
                    { date: "May 18", title: "Supply and Demand Analysis", description: "Market equilibrium and elasticity concepts" },
                    { date: "May 25", title: "Macroeconomics Project", description: "National income accounting and economic policies" }
                ]
            },
            resources: "Textbook: Engineering Economics, Case Studies in Engineering Economics",
            assignments: "Assignment 1: Due on June 14, Assignment 2: Due on July 28...",
            testsQuizzes: "Quiz 1: May 27, Mid-term: July 7, Final Exam: August 14",
            siteInfo: "Course website: humanities.amrita.edu/economics",
            announcements: "Economic analysis project guidelines updated."
        },
        {            code: "19LAB201",
            name: "DBMS and OS Lab",
            faculty: "Prof. Radha Krishna",
            credits: 2,
            syllabus: `<div class="syllabus-grid">
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🗃️</div>
                    <strong>SQL Basics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>DDL commands</li>
                      <li>DML operations</li>
                      <li>SELECT queries</li>
                      <li>SQL constraints</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🏗️</div>
                    <strong>Database Design</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>ER diagrams</li>
                      <li>Normalization</li>
                      <li>Schema creation</li>
                      <li>Database implementation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📊</div>
                    <strong>Advanced SQL</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Joins and subqueries</li>
                      <li>Aggregate functions</li>
                      <li>Views and indexes</li>
                      <li>Triggers and procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🐧</div>
                    <strong>Unix/Linux Basics</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>File operations</li>
                      <li>User management</li>
                      <li>Permissions</li>
                      <li>System commands</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">📜</div>
                    <strong>Shell Programming</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Shell scripting basics</li>
                      <li>Control structures</li>
                      <li>Text processing</li>
                      <li>Script automation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🔄</div>
                    <strong>Process Management</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Process creation</li>
                      <li>Inter-process communication</li>
                      <li>CPU scheduling algorithms</li>
                      <li>Process synchronization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="syllabus-card">
                <div class="syllabus-inner-card">
                  <div class="syllabus-front">
                    <div class="syllabus-emoji">🧩</div>
                    <strong>Mini Projects</strong>
                  </div>
                  <div class="syllabus-back">
                    <ul style="text-align: left; padding-left: 15px; margin: 0;">
                      <li>Database applications</li>
                      <li>System utilities</li>
                      <li>Web-database integration</li>
                      <li>System administration tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`,
            lessonCalendar: {
                currentMonth: "May 2025",
                startDay: 4, // Thursday (0 = Sunday, 1 = Monday, etc.)
                daysWithEvents: [8, 15, 22, 29],
                events: [
                    { date: "May 8", title: "SQL Fundamentals", description: "Basic SQL query syntax and operations" },
                    { date: "May 15", title: "Database Design Quiz", description: "Normalization and schema design principles" },
                    { date: "May 22", title: "Advanced Queries Lab", description: "Complex joins, subqueries, and views" },
                    { date: "May 29", title: "Database Project", description: "Complete database application implementation" }
                ]
            },
            resources: "Lab Manual, SQL Reference Guide, Linux Command Reference",
            assignments: "Lab Assignment 1: Due on June 15, Lab Assignment 2: Due on July 15...",
            testsQuizzes: "Lab Test 1: May 30, Lab Test 2: July 10, Final Lab Exam: August 16",
            siteInfo: "Course website: cse.amrita.edu/dboslab",
            announcements: "Additional lab assistants assigned for the practical sessions."
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const semesterSelect = document.getElementById('semester-select');
    const coursesContainer = document.createElement('div');
    coursesContainer.className = 'courses-container';
    
    // Get the main content div
    const mainContent = document.querySelector('.main-content');
    
    // Add the courses container to the main content
    mainContent.appendChild(coursesContainer);
    
    // Initial load of courses
    loadCourses(semesterSelect.value);
    
    // Event listener for semester change
    semesterSelect.addEventListener('change', function() {
        loadCourses(this.value);
    });
    
    // Function to load courses for a selected semester
    function loadCourses(semester) {
        // Clear current courses
        coursesContainer.innerHTML = '';
        
        // Get courses for the selected semester
        const courses = coursesData[semester] || [];
        
        // Create course cards
        courses.forEach(course => {
            const courseCard = createCourseCard(course);
            coursesContainer.appendChild(courseCard);
        });
        
        // Add click event listeners to course cards
        setupCourseCardListeners();
    }
    
    // Function to create a course card
    function createCourseCard(course) {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        // Course header (always visible)
        const courseHeader = document.createElement('div');
        courseHeader.className = 'course-header';
        
        const courseInfo = document.createElement('div');
        courseInfo.className = 'course-info';
        
        const courseCode = document.createElement('div');
        courseCode.className = 'course-code';
        courseCode.textContent = course.code;
        
        const courseName = document.createElement('div');
        courseName.className = 'course-name';
        courseName.textContent = course.name;
        
        const courseFaculty = document.createElement('div');
        courseFaculty.className = 'course-faculty';
        courseFaculty.textContent = `Faculty: ${course.faculty}`;
        
        const courseCredits = document.createElement('div');
        courseCredits.className = 'course-credits';
        courseCredits.textContent = `${course.credits} Credits`;
        
        // Append course info elements
        courseInfo.appendChild(courseCode);
        courseInfo.appendChild(courseName);
        courseInfo.appendChild(courseFaculty);
        courseInfo.appendChild(courseCredits);
        
        // Toggle icon
        const courseToggle = document.createElement('i');
        courseToggle.className = 'bx bx-chevron-down course-toggle';
        
        // Append to course header
        courseHeader.appendChild(courseInfo);
        courseHeader.appendChild(courseToggle);
        
        // Course dropdown (hidden by default)
        const courseDropdown = document.createElement('div');
        courseDropdown.className = 'course-dropdown';
        
        const dropdownContent = document.createElement('div');
        dropdownContent.className = 'dropdown-content';
        
        // Create tabs
        const courseTabs = document.createElement('div');
        courseTabs.className = 'course-tabs';
        
        const tabsData = [
            { id: 'syllabus', name: 'Syllabus', content: course.syllabus },
            { id: 'lesson-calendar', name: 'Lesson Calendar', content: course.lessonCalendar },
            { id: 'announcements', name: 'Announcements', content: course.announcements },
            { id: 'resources', name: 'Resources', content: course.resources },
            { id: 'assignments', name: 'Assignments', content: course.assignments },
            { id: 'tests-quizzes', name: 'Tests & Quizzes', content: course.testsQuizzes },
            { id: 'site-info', name: 'Site Info', content: course.siteInfo }
        ];
        
        // Create tabs and tab content
        tabsData.forEach((tab, index) => {
            // Create tab
            const tabElement = document.createElement('div');
            tabElement.className = `course-tab ${index === 0 ? 'active' : ''}`;
            tabElement.setAttribute('data-tab', tab.id);
            tabElement.textContent = tab.name;
            courseTabs.appendChild(tabElement);
              // Create tab content
            const tabContent = document.createElement('div');
            tabContent.className = `tab-content ${index === 0 ? 'active' : ''}`;
            tabContent.id = `${tab.id}-content`;
              // Use innerHTML for HTML content (like syllabus cards) and textContent for plain text
            if (tab.id === 'syllabus' && typeof tab.content === 'string' && tab.content.includes('<div class="syllabus-grid">')) {
                tabContent.innerHTML = tab.content;
            } else if (tab.id === 'lesson-calendar' && typeof tab.content === 'object') {
                // Create interactive calendar for lesson calendar
                createInteractiveCalendar(tabContent, tab.content);
            } else {
                tabContent.textContent = tab.content;
            }
            
            dropdownContent.appendChild(tabContent);
        });
        
        // Append tabs to dropdown content
        dropdownContent.insertBefore(courseTabs, dropdownContent.firstChild);
        
        // Append dropdown content to dropdown
        courseDropdown.appendChild(dropdownContent);
        
        // Append all elements to course card
        courseCard.appendChild(courseHeader);
        courseCard.appendChild(courseDropdown);
        
        return courseCard;
    }
      // Function to setup event listeners for course cards
    function setupCourseCardListeners() {
        // Toggle course dropdown when clicking on course header
        document.querySelectorAll('.course-card').forEach(card => {
            const header = card.querySelector('.course-header');
            header.addEventListener('click', (e) => {
                // Toggle the active class on the card
                card.classList.toggle('active');
                
                // Get the dropdown element
                const dropdown = card.querySelector('.course-dropdown');
                
                // Log to help with debugging
                console.log('Card clicked:', card.querySelector('.course-name').textContent);
                console.log('Active status:', card.classList.contains('active'));
            });
        });
          // Tab switching within course dropdowns
        document.querySelectorAll('.course-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event from bubbling up to course header
                
                const tabId = tab.getAttribute('data-tab');
                const tabContainer = tab.parentElement;
                const contentContainer = tabContainer.parentElement;
                
                // Remove active class from all tabs in this container
                tabContainer.querySelectorAll('.course-tab').forEach(t => {
                    t.classList.remove('active');
                });
                
                // First, make all tabs invisible
                contentContainer.querySelectorAll('.tab-content').forEach(c => {
                    c.classList.remove('active');
                });
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Give a tiny delay before showing the new content for a smoother transition effect
                setTimeout(() => {
                    contentContainer.querySelector(`#${tabId}-content`).classList.add('active');
                }, 50);
                
                // Scroll the tab into view if it's not fully visible
                const tabRect = tab.getBoundingClientRect();
                const containerRect = tabContainer.getBoundingClientRect();
                
                if (tabRect.right > containerRect.right) {
                    tabContainer.scrollLeft += (tabRect.right - containerRect.right + 20);
                } else if (tabRect.left < containerRect.left) {
                    tabContainer.scrollLeft -= (containerRect.left - tabRect.left + 20);
                }
            });
        });
    }
});