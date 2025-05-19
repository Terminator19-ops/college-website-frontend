// Sample course data for demonstration
const coursesData = {
    1:[
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
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Recursion Explained</h3>
                            <p class="desc">Visual walkthrough of recursion and stack memory. Perfect for beginners.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Cracking DSA</h3>
                            <p class="desc">Downloadable PDF version of the essential DSA preparation book.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Sorting Algorithms Summary</h3>
                            <p class="desc">One-pager cheat sheet for quick revision of all sorting methods.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>GeeksforGeeks - Graphs</h3>
                            <p class="desc">Graph algorithms, implementations, and practice problems.</p>
                            <a class="link" href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Tree Visualizer</h3>
                            <p class="desc">Interactive BST/AVL visualizer to insert and delete nodes dynamically.</p>
                            <a class="link" href="#" target="_blank">Try It</a>
                          </div>
                        </div>`,            
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Limits & Continuity Quiz</td>
                                <td>May 5</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Differentiation Problems</td>
                                <td>May 12</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Integration Test</td>
                                <td>May 19</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Matrices Assignment</td>
                                <td>May 26</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>June 10</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Applications of partial derivatives in engineering</strong>
                          <span>Started by: Arnav | Replies: 6 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Limits using L'Hôpital's rule examples</strong>
                          <span>Started by: Neha | Replies: 4 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Tips for integration techniques</strong>
                          <span>Started by: Vivek | Replies: 8 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Eigenvalues and diagonalization practice</strong>
                          <span>Started by: Simran | Replies: 7 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Convergence tests for infinite series</strong>
                          <span>Started by: Tarun | Replies: 5 | Last reply: 30m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Linear algebra midterm review questions</strong>
                          <span>Started by: Meera | Replies: 11 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which calculus topic is most challenging?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Integration</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Sequences & Series</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Vector Calculus</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Matrix Operations</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>

                    </div>`,
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
                ]            },
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Physics Mechanics Explained</h3>
                            <p class="desc">Visual demonstration of Newton's laws and mechanics principles.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>University Physics</h3>
                            <p class="desc">Comprehensive textbook covering all course topics with practice problems.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Electromagnetic Theory Summary</h3>
                            <p class="desc">Concise notes on Maxwell's equations and electromagnetic waves.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>PhysicsClassroom</h3>
                            <p class="desc">Interactive simulations and tutorials on physics concepts.</p>
                            <a class="link" href="https://www.physicsclassroom.com" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Physics Lab Manual</h3>
                            <p class="desc">Experiment guides for the Physics laboratory sessions.</p>
                            <a class="link" href="#" target="_blank">Access Manual</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Mechanics Quiz</td>
                                <td>May 7</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Electromagnetism Problems</td>
                                <td>May 14</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Optics Test</td>
                                <td>May 21</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Quantum Physics Assignment</td>
                                <td>May 28</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>June 12</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Why does a lens create real and virtual images?</strong>
                          <span>Started by: Aditi | Replies: 7 | Last reply: 2hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Applications of electromagnetic induction?</strong>
                          <span>Started by: Nikhil | Replies: 4 | Last reply: 1d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Understanding wave-particle duality</strong>
                          <span>Started by: Shreya | Replies: 9 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Clarification on Newton's Third Law</strong>
                          <span>Started by: Vikram | Replies: 5 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Calculation mistake in homework problem 5?</strong>
                          <span>Started by: Deepa | Replies: 3 | Last reply: 15m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Physics lab preparation discussion</strong>
                          <span>Started by: Rahul | Replies: 12 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which physics topic do you find most challenging?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Electromagnetism</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Quantum Physics</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Optics & Waves</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Mechanics</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                ]            },
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Chemical Kinetics Lecture</h3>
                            <p class="desc">Detailed explanation of reaction rates and mechanisms with examples.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Chemistry for Engineers</h3>
                            <p class="desc">The main textbook with engineering applications of chemistry principles.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Thermodynamics Summary</h3>
                            <p class="desc">Comprehensive notes on laws of thermodynamics and their applications.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Royal Society of Chemistry</h3>
                            <p class="desc">Resources, experiments, and educational materials for chemistry students.</p>
                            <a class="link" href="https://www.rsc.org/resources-tools/" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Periodic Table Interactive</h3>
                            <p class="desc">Dynamic periodic table with element properties and interactive features.</p>
                            <a class="link" href="#" target="_blank">Explore Tool</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Atomic Structure Quiz</td>
                                <td>May 9</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Chemical Bonding Problems</td>
                                <td>May 16</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Thermodynamics Test</td>
                                <td>May 23</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Electrochemistry Assignment</td>
                                <td>May 30</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>June 14</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Chemical equilibrium in industrial processes</strong>
                          <span>Started by: Ishaan | Replies: 6 | Last reply: 45m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Differences between ionic and covalent bonds?</strong>
                          <span>Started by: Sneha | Replies: 5 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Organic chemistry nomenclature help</strong>
                          <span>Started by: Varun | Replies: 8 | Last reply: 2h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Understanding redox reactions</strong>
                          <span>Started by: Tanvi | Replies: 4 | Last reply: 6h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Lab safety protocols discussion</strong>
                          <span>Started by: Aryan | Replies: 7 | Last reply: 30m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Electrochemistry practice problems</strong>
                          <span>Started by: Manisha | Replies: 9 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which chemistry topic needs more practice sessions?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Organic Chemistry</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Thermodynamics</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Electrochemistry</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Chemical Kinetics</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                ]            },
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Pointers in C Explained</h3>
                            <p class="desc">Step-by-step tutorial on memory management and pointer operations in C.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>C Programming Language</h3>
                            <p class="desc">The classic K&R textbook - fundamental principles of C programming.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Data Structures in C</h3>
                            <p class="desc">Implementation details for arrays, linked lists, stacks, queues, and trees.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Codecademy C Course</h3>
                            <p class="desc">Interactive coding exercises and challenges to practice C programming.</p>
                            <a class="link" href="https://www.codecademy.com" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>GCC Compiler Guide</h3>
                            <p class="desc">Instructions for using the GNU C Compiler with command-line options.</p>
                            <a class="link" href="#" target="_blank">Access Guide</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Programming Basics Quiz</td>
                                <td>May 4</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Control Structures Assignment</td>
                                <td>May 11</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Functions and Methods Lab</td>
                                <td>May 18</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Arrays Exercise</td>
                                <td>May 25</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>June 15</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Understanding recursive functions</strong>
                          <span>Started by: Rohan | Replies: 8 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>How to debug segmentation faults?</strong>
                          <span>Started by: Ananya | Replies: 6 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Arrays vs Linked Lists performance</strong>
                          <span>Started by: Kabir | Replies: 7 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Best practices for readable code</strong>
                          <span>Started by: Meera | Replies: 9 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Logic error in assignment 2?</strong>
                          <span>Started by: Dhruv | Replies: 3 | Last reply: 20m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Programming project ideas discussion</strong>
                          <span>Started by: Naina | Replies: 14 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which programming language would you prefer for next semester?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Java</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Python</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">C++</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">JavaScript</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                ]            },
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Circuit Analysis Techniques</h3>
                            <p class="desc">Detailed walkthrough of Kirchhoff's laws, node and mesh analysis methods.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Fundamentals of Electrical Engineering</h3>
                            <p class="desc">Comprehensive textbook covering circuit theory and electrical systems.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Transient Response Analysis</h3>
                            <p class="desc">Step-by-step solutions for RC, RL, and RLC circuit response calculation.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Circuit Simulator</h3>
                            <p class="desc">Build and simulate electrical circuits with this interactive online tool.</p>
                            <a class="link" href="https://www.circuitlab.com" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>SPICE Simulation Guide</h3>
                            <p class="desc">Tutorial on using SPICE for circuit simulation and analysis.</p>
                            <a class="link" href="#" target="_blank">Access Guide</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Circuit Elements Quiz</td>
                                <td>May 6</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Kirchhoff's Laws Problems</td>
                                <td>May 13</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Nodal Analysis Test</td>
                                <td>May 20</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Mesh Analysis Assignment</td>
                                <td>May 27</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>June 16</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Kirchhoff's laws application problems</strong>
                          <span>Started by: Arjun | Replies: 5 | Last reply: 2hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Difference between AC and DC circuits</strong>
                          <span>Started by: Diya | Replies: 7 | Last reply: 1d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Transformer efficiency calculations</strong>
                          <span>Started by: Aditya | Replies: 6 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Three-phase power systems explanation</strong>
                          <span>Started by: Pooja | Replies: 8 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Circuit simulation software recommendations?</strong>
                          <span>Started by: Rishab | Replies: 4 | Last reply: 30m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Lab experiment troubleshooting</strong>
                          <span>Started by: Kavya | Replies: 11 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which electrical topic do you find most interesting?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Power Systems</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Control Systems</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Electronic Circuits</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Electromagnetic Theory</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Statics & Dynamics Fundamentals</h3>
                            <p class="desc">Visual demonstrations of force equilibrium and motion principles.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Engineering Mechanics by Hibbeler</h3>
                            <p class="desc">Comprehensive textbook with solved examples and practice problems.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Free Body Diagrams Reference</h3>
                            <p class="desc">Step-by-step guide to creating and analyzing free body diagrams.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Engineering Toolbox</h3>
                            <p class="desc">Reference data, formulas, and calculators for mechanics problems.</p>
                            <a class="link" href="https://www.engineeringtoolbox.com" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Mechanics Simulator</h3>
                            <p class="desc">Interactive tool to visualize and solve statics and dynamics problems.</p>
                            <a class="link" href="#" target="_blank">Try It</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Mechanics Fundamentals Quiz</td>
                                <td>May 2</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Force Analysis Problems</td>
                                <td>May 9</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Dynamics Test</td>
                                <td>May 16</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Equilibrium Project</td>
                                <td>May 23</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>June 18</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>                          
                            </table>`,            
                            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Free body diagram examples</strong>
                          <span>Started by: Vijay | Replies: 7 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Friction problems troubleshooting</strong>
                          <span>Started by: Neha | Replies: 4 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Center of mass calculations</strong>
                          <span>Started by: Suresh | Replies: 6 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Moment of inertia for complex shapes</strong>
                          <span>Started by: Anjali | Replies: 8 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Static equilibrium problem help</strong>
                          <span>Started by: Rajesh | Replies: 3 | Last reply: 25m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Engineering drawing basics discussion</strong>
                          <span>Started by: Tanya | Replies: 10 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which mechanics topic needs more examples?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Statics</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Dynamics</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Material Strength</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Vibrational Analysis</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
        },],
    "2": [
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
                ]            },
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Effective Presentation Skills</h3>
                            <p class="desc">Tips and techniques for delivering engaging technical presentations.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Technical Communication Today</h3>
                            <p class="desc">Modern guide to writing technical documents and reports.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Business Writing Style Guide</h3>
                            <p class="desc">Comprehensive guide to grammar, formatting, and style for business documents.</p>
                            <a class="link" href="#" target="_blank">View Guide</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Purdue OWL</h3>
                            <p class="desc">Online writing lab with resources for different writing styles and citations.</p>
                            <a class="link" href="https://owl.purdue.edu" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Presentation Templates</h3>
                            <p class="desc">Professional PowerPoint and document templates for technical presentations.</p>
                            <a class="link" href="#" target="_blank">Download Templates</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Communication Fundamentals Quiz</td>
                                <td>May 8</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Technical Report Writing</td>
                                <td>May 15</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Presentation Skills Test</td>
                                <td>May 19</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Professional Communication</td>
                                <td>May 30</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>July 7</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Technical report writing tips</strong>
                          <span>Started by: Rohit | Replies: 9 | Last reply: 30m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Effective presentation strategies</strong>
                          <span>Started by: Priyanka | Replies: 6 | Last reply: 1d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Email etiquette for professional communication</strong>
                          <span>Started by: Akash | Replies: 5 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Improving non-verbal communication skills</strong>
                          <span>Started by: Ritika | Replies: 7 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Grammar questions for assignment 3</strong>
                          <span>Started by: Vihaan | Replies: 4 | Last reply: 15m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Group presentation planning</strong>
                          <span>Started by: Sarika | Replies: 12 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which communication skill do you want to improve most?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Technical Writing</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Public Speaking</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Business Communication</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Visual Communication</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
            },            resources: "Textbook: Environmental Science, Documentary Collection, Case Studies",
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Environmental Science Quiz</td>
                                <td>May 2</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Ecosystems Analysis</td>
                                <td>May 9</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Biodiversity Test</td>
                                <td>May 16</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Pollution Control Project</td>
                                <td>May 23</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>July 20</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Sustainable energy solutions discussion</strong>
                          <span>Started by: Karthik | Replies: 8 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Impact of plastic pollution on marine life</strong>
                          <span>Started by: Shreya | Replies: 6 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Water conservation techniques for homes</strong>
                          <span>Started by: Divya | Replies: 7 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Climate change effects on local ecosystems</strong>
                          <span>Started by: Ashwin | Replies: 9 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Green building certification standards</strong>
                          <span>Started by: Leela | Replies: 4 | Last reply: 40m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Environmental awareness project ideas</strong>
                          <span>Started by: Mohit | Replies: 11 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which environmental issue concerns you the most?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Climate Change</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Plastic Pollution</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Deforestation</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Water Scarcity</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
            },            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Differential Equations Explained</h3>
                            <p class="desc">Visual explanations of ODEs, PDEs, and their applications in engineering problems.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Differential Equations with Applications by Zill</h3>
                            <p class="desc">Comprehensive textbook covering all differential equations topics with examples.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Laplace Transforms Cheat Sheet</h3>
                            <p class="desc">Quick reference for common Laplace transform pairs and properties.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Paul's Online Math Notes</h3>
                            <p class="desc">Detailed tutorials on differential equations with step-by-step solutions.</p>
                            <a class="link" href="https://tutorial.math.lamar.edu/Classes/DE/DE.aspx" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Problem Set Collection</h3>
                            <p class="desc">Curated problems for practice, organized by difficulty level.</p>
                            <a class="link" href="#" target="_blank">Access Problems</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>First Order ODEs Quiz</td>
                                <td>May 3</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Second Order ODEs Problems</td>
                                <td>May 10</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Series Solutions Test</td>
                                <td>May 17</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Laplace Transforms Assignment</td>
                                <td>May 24</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>July 15</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Solving first-order differential equations</strong>
                          <span>Started by: Amit | Replies: 7 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Applications of Laplace transforms</strong>
                          <span>Started by: Riya | Replies: 5 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Understanding Fourier series</strong>
                          <span>Started by: Vikrant | Replies: 8 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Second-order ODE with variable coefficients</strong>
                          <span>Started by: Anita | Replies: 6 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Help with partial differential equations</strong>
                          <span>Started by: Rahul | Replies: 4 | Last reply: 20m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Z-transform problems for control systems</strong>
                          <span>Started by: Deepika | Replies: 9 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which differential equations topic is most challenging?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">First-order ODEs</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Second-order ODEs</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Laplace Transforms</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Fourier Series</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                ]            },            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Semiconductor Physics Lectures</h3>
                            <p class="desc">Comprehensive video series covering semiconductor fundamentals and device physics.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Semiconductor Physics and Devices</h3>
                            <p class="desc">Main textbook covering all course topics with detailed explanations.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Quantum Mechanics in Semiconductors</h3>
                            <p class="desc">Summarized notes on quantum mechanics principles in semiconductor applications.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Semiconductor Research Lab</h3>
                            <p class="desc">Interactive simulations of semiconductor behavior and virtual experiments.</p>
                            <a class="link" href="#" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Semiconductor Lab Manual</h3>
                            <p class="desc">Detailed instructions for all laboratory experiments and safety guidelines.</p>
                            <a class="link" href="#" target="_blank">Access Manual</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Crystal Structure Quiz</td>
                                <td>May 7</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Band Theory Problems</td>
                                <td>May 14</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Semiconductor Materials Test</td>
                                <td>May 21</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Quantum Physics Assignment</td>
                                <td>May 28</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>July 10</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>P-N junction behavior under bias</strong>
                          <span>Started by: Vishal | Replies: 7 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Difference between intrinsic and extrinsic semiconductors</strong>
                          <span>Started by: Anjali | Replies: 5 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Energy band diagrams explained</strong>
                          <span>Started by: Arun | Replies: 8 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Diode equations and practical applications</strong>
                          <span>Started by: Neeta | Replies: 6 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Hall effect experiment clarification</strong>
                          <span>Started by: Kunal | Replies: 4 | Last reply: 35m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Semiconductor lab preparation discussion</strong>
                          <span>Started by: Tanya | Replies: 9 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which semiconductor device is most interesting to you?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Transistors</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Solar Cells</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">LEDs</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Integrated Circuits</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                ]            },            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Data Structures Visualized</h3>
                            <p class="desc">Animated explanations of data structures implementations and operations.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Data Structures and Algorithm Analysis in C++</h3>
                            <p class="desc">Comprehensive textbook with implementation details and analysis techniques.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Algorithm Complexity Cheat Sheet</h3>
                            <p class="desc">Quick reference for time and space complexity of common data structures operations.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Online Practice Platform</h3>
                            <p class="desc">Interactive coding environment with hundreds of data structure problems.</p>
                            <a class="link" href="https://leetcode.com/tag/data-structures/" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Algorithm Visualizer</h3>
                            <p class="desc">Interactive tool to visualize searching, sorting, and tree algorithms in real-time.</p>
                            <a class="link" href="#" target="_blank">Try It</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Arrays and Linked Lists Quiz</td>
                                <td>May 1</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Stack and Queue Implementation</td>
                                <td>May 8</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Trees and Graphs Test</td>
                                <td>May 15</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Searching & Sorting Algorithms</td>
                                <td>May 22</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>July 12</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>How does AVL rotation work?</strong>
                          <span>Started by: Aman | Replies: 5 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Why use stack for DFS?</strong>
                          <span>Started by: Priya | Replies: 3 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Tips for Data Structures Midterm Prep</strong>
                          <span>Started by: Riya | Replies: 8 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>What is the difference between BFS and DFS?</strong>
                          <span>Started by: Karan | Replies: 6 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Time complexity of Merge Sort?</strong>
                          <span>Started by: Sanya | Replies: 2 | Last reply: 10m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Hash table collision resolution techniques</strong>
                          <span>Started by: Ravi | Replies: 10 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which data structure topic needs revision?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Graphs</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Trees</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Sorting Algorithms</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Hashing</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                ]            },            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Digital Logic Design Tutorials</h3>
                            <p class="desc">Step-by-step video tutorials on boolean algebra, logic gates and combinational circuits.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Digital Design by Morris Mano</h3>
                            <p class="desc">Standard textbook covering all aspects of digital electronics with examples.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>K-Map Simplification Guide</h3>
                            <p class="desc">Comprehensive reference for Karnaugh maps with worked examples.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Digital Electronics Hub</h3>
                            <p class="desc">Collection of articles, practice problems and study materials.</p>
                            <a class="link" href="#" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Logic Design Simulator</h3>
                            <p class="desc">Interactive tool for designing and testing digital circuits.</p>
                            <a class="link" href="#" target="_blank">Try Simulator</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Number Systems Quiz</td>
                                <td>May 6</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Logic Gates Problems</td>
                                <td>May 13</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Combinational Circuits Test</td>
                                <td>May 20</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Sequential Circuits Project</td>
                                <td>May 27</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>July 8</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>K-map simplification examples</strong>
                          <span>Started by: Rajat | Replies: 6 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Flip-flop applications in sequential circuits</strong>
                          <span>Started by: Megha | Replies: 4 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Boolean algebra simplification techniques</strong>
                          <span>Started by: Suresh | Replies: 7 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Designing a 4-bit counter circuit</strong>
                          <span>Started by: Divya | Replies: 8 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>VHDL code review for assignment 3</strong>
                          <span>Started by: Karthik | Replies: 5 | Last reply: 25m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Digital lab practice questions</strong>
                          <span>Started by: Bhavya | Replies: 11 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which digital electronics topic is most challenging?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Combinational Logic</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Sequential Circuits</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">HDL Coding</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Memory Devices</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                ]            },            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Engineering Drawing Fundamentals</h3>
                            <p class="desc">Detailed video lessons on orthographic projections, isometric views and sectioning.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Engineering Drawing Textbook</h3>
                            <p class="desc">Comprehensive guide with numerous examples and drawing techniques.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Drawing Standards Reference</h3>
                            <p class="desc">Summary of ISO and ANSI standards for engineering drawings.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>AutoCAD Tutorials</h3>
                            <p class="desc">Step-by-step tutorials for AutoCAD from beginner to advanced level.</p>
                            <a class="link" href="#" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Drawing Equipment List</h3>
                            <p class="desc">Detailed list of required drawing instruments and equipment for the course.</p>
                            <a class="link" href="#" target="_blank">View List</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Engineering Drawing Basics</td>
                                <td>May 4</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Orthographic Projections</td>
                                <td>May 11</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Isometric Drawing Test</td>
                                <td>May 18</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>AutoCAD Project</td>
                                <td>May 25</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>July 18</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Isometric projection techniques</strong>
                          <span>Started by: Rajesh | Replies: 7 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>AutoCAD troubleshooting help</strong>
                          <span>Started by: Alisha | Replies: 5 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Orthographic projection practice</strong>
                          <span>Started by: Dev | Replies: 8 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Dimensioning standards explained</strong>
                          <span>Started by: Tanvi | Replies: 6 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Section view drawing techniques</strong>
                          <span>Started by: Rohan | Replies: 4 | Last reply: 30m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Engineering drawing assignment clarifications</strong>
                          <span>Started by: Preeti | Replies: 10 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which CAD software do you prefer?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">AutoCAD</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">SolidWorks</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">CATIA</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Fusion 360</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                ]            },            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Ethics in Engineering Practice</h3>
                            <p class="desc">Video series examining ethical dilemmas and decision-making in professional contexts.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Ethics in Engineering</h3>
                            <p class="desc">Main textbook covering ethical theories and their application in engineering.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Professional Codes of Ethics</h3>
                            <p class="desc">Compilation of ethics codes from IEEE, ACM, and other engineering organizations.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Engineering Ethics Center</h3>
                            <p class="desc">Resource hub for ethics in technology, research, and professional practice.</p>
                            <a class="link" href="#" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Case Studies Collection</h3>
                            <p class="desc">Extensive collection of real-world ethical dilemmas in engineering with analyses.</p>
                            <a class="link" href="#" target="_blank">Browse Cases</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Ethical Theories Quiz</td>
                                <td>May 5</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Professional Codes Analysis</td>
                                <td>May 12</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Case Studies Test</td>
                                <td>May 19</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Social Responsibility Project</td>
                                <td>May 26</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>July 20</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Ethical dilemmas in technology development</strong>
                          <span>Started by: Harish | Replies: 9 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Privacy concerns in data collection</strong>
                          <span>Started by: Kavya | Replies: 7 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Case study: Engineering failures due to ethical lapses</strong>
                          <span>Started by: Rahul | Replies: 8 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Professional responsibility in safety-critical systems</strong>
                          <span>Started by: Manisha | Replies: 6 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Intellectual property rights in engineering</strong>
                          <span>Started by: Varun | Replies: 5 | Last reply: 45m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Ethics case presentation preparation</strong>
                          <span>Started by: Nidhi | Replies: 11 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which ethical issue is most relevant today?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">AI Ethics</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Data Privacy</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Environmental Impact</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Digital Divide</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                ]            },            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Programming Tutorials</h3>
                            <p class="desc">Video tutorials covering all language features needed for lab assignments.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Lab Manual</h3>
                            <p class="desc">Comprehensive guide with all lab exercises, requirements and evaluation criteria.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Programming Style Guide</h3>
                            <p class="desc">Coding standards and best practices required for lab submissions.</p>
                            <a class="link" href="#" target="_blank">View Guide</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Code Repository</h3>
                            <p class="desc">Access to example code and solution templates for all lab exercises.</p>
                            <a class="link" href="#" target="_blank">Visit Repository</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Reference Programs</h3>
                            <p class="desc">Collection of well-documented reference implementations for common algorithms.</p>
                            <a class="link" href="#" target="_blank">View Examples</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Programming Basics Quiz</td>
                                <td>May 8</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Control Structures Lab</td>
                                <td>May 15</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Array Manipulations Test</td>
                                <td>May 22</td>
                                <td class="type type-test">Test</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Functions & Recursion</td>
                                <td>May 29</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Lab Test 1</td>
                                <td>July 7</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Debugging segmentation faults in C</strong>
                          <span>Started by: Vaibhav | Replies: 6 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>String manipulation functions in C</strong>
                          <span>Started by: Prerna | Replies: 5 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>File I/O operations help</strong>
                          <span>Started by: Ayush | Replies: 7 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Memory allocation best practices</strong>
                          <span>Started by: Kiran | Replies: 6 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Lab assignment 4 clarifications</strong>
                          <span>Started by: Shreya | Replies: 4 | Last reply: 20m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Programming contest preparation tips</strong>
                          <span>Started by: Aryan | Replies: 9 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which programming topic needs more lab sessions?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Pointers & Memory</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Data Structures</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">File Handling</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Algorithm Implementation</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
        }
    ],
    3:[        {
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
                    { date: "May 27", title: "Statistical Inference Project", description: "Hypothesis testing and confidence intervals" }                ]
            },            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Probability Lectures</h3>
                            <p class="desc">Video series covering fundamental probability concepts and statistical methods.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Probability and Statistics for Engineers</h3>
                            <p class="desc">Comprehensive textbook with engineering applications and practice problems.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Statistical Distribution Reference</h3>
                            <p class="desc">Quick guide to common probability distributions with formulas and examples.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Statistical Software Tutorials</h3>
                            <p class="desc">Step-by-step guides for using R, SPSS, and Excel for statistical analysis.</p>
                            <a class="link" href="#" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Statistics Calculator</h3>
                            <p class="desc">Online tool for hypothesis testing, confidence intervals, and regression analysis.</p>
                            <a class="link" href="#" target="_blank">Use Calculator</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Probability Fundamentals Quiz</td>
                                <td>May 6</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Random Variables Problems</td>
                                <td>May 13</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Probability Distributions Test</td>
                                <td>May 20</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Statistical Inference Project</td>
                                <td>May 27</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>July 5</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Understanding confidence intervals</strong>
                          <span>Started by: Priya | Replies: 7 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Difference between discrete and continuous probability distributions</strong>
                          <span>Started by: Rahul | Replies: 5 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>How to calculate conditional probability?</strong>
                          <span>Started by: Neha | Replies: 9 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Application of Bayes' theorem in machine learning</strong>
                          <span>Started by: Arjun | Replies: 6 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Help with hypothesis testing problems</strong>
                          <span>Started by: Tanya | Replies: 3 | Last reply: 30m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Understanding p-values and significance levels</strong>
                          <span>Started by: Rohit | Replies: 8 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which statistical concept is most challenging?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Probability Distributions</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Hypothesis Testing</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Regression Analysis</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Bayesian Statistics</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                    { date: "May 26", title: "Design Patterns Project", description: "Implementation of common design patterns" }                ]
            },            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>OOP Fundamentals</h3>
                            <p class="desc">Comprehensive video series covering object-oriented programming principles and implementation.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Thinking in Java</h3>
                            <p class="desc">Industry-standard textbook on Java programming with emphasis on object-oriented concepts.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Design Patterns Guide</h3>
                            <p class="desc">Reference guide for common OOP design patterns with implementation examples.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Java Documentation</h3>
                            <p class="desc">Official Java API documentation and tutorials for object-oriented programming.</p>
                            <a class="link" href="https://docs.oracle.com/javase/tutorial/" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>UML Modeling Tool</h3>
                            <p class="desc">Create class diagrams and visualize object relationships for your projects.</p>
                            <a class="link" href="#" target="_blank">Try It</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>OOP Concepts Quiz</td>
                                <td>May 5</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Classes & Objects Workshop</td>
                                <td>May 12</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Inheritance & Polymorphism Test</td>
                                <td>May 19</td>
                                <td class="type type-test">Test</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Design Patterns Project</td>
                                <td>May 26</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Midterm Exam</td>
                                <td>July 8</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Inheritance vs Composition - best practices</strong>
                          <span>Started by: Ankit | Replies: 8 | Last reply: 2hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Implementing abstract classes and interfaces</strong>
                          <span>Started by: Shreya | Replies: 6 | Last reply: 1d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Polymorphism real-world examples</strong>
                          <span>Started by: Vishal | Replies: 7 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Help with design patterns assignment</strong>
                          <span>Started by: Kavita | Replies: 9 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Exception handling best practices in Java</strong>
                          <span>Started by: Raj | Replies: 4 | Last reply: 45m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Understanding multithreading and synchronization</strong>
                          <span>Started by: Meera | Replies: 12 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which OOP concept do you find most useful?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Inheritance</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Encapsulation</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Polymorphism</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Abstraction</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                    { date: "May 23", title: "Advanced SQL Project", description: "Complex queries and database design implementation" }                ]
            },
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Database Design Tutorials</h3>
                            <p class="desc">Comprehensive video tutorials on database modeling, normalization, and SQL.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Database System Concepts</h3>
                            <p class="desc">Standard textbook covering database theory, design, and implementation.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>SQL Command Reference</h3>
                            <p class="desc">Comprehensive guide to SQL commands, functions, and best practices.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>MySQL Workbench Tutorial</h3>
                            <p class="desc">Step-by-step guide for database design and management using MySQL Workbench.</p>
                            <a class="link" href="#" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>SQL Sandbox</h3>
                            <p class="desc">Online environment for practicing SQL queries with instant feedback.</p>
                            <a class="link" href="#" target="_blank">Try SQL Sandbox</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>SQL Fundamentals</td>
                                <td>May 9</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Database Normalization</td>
                                <td>May 20</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Database Design</td>
                                <td>May 30</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Mid-term Examination</td>
                                <td>July 12</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Final Examination</td>
                                <td>August 18</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>SQL vs NoSQL - When to use each?</strong>
                          <span>Started by: Aryan | Replies: 8 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Normalization techniques explained</strong>
                          <span>Started by: Divya | Replies: 6 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Help with complex joins in SQL</strong>
                          <span>Started by: Karan | Replies: 7 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Transaction management and ACID properties</strong>
                          <span>Started by: Priyanka | Replies: 5 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Indexing strategies for performance optimization</strong>
                          <span>Started by: Varun | Replies: 4 | Last reply: 35m ago</span>
                        </div>

                        <div class="thread">
                          <strong>ER diagram review for mini-project</strong>
                          <span>Started by: Aditya | Replies: 10 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which database technology would you like to learn more about?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Traditional SQL Databases</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">MongoDB (Document Store)</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Redis (Key-Value Store)</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Graph Databases (Neo4j)</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                    { date: "May 24", title: "Memory Hierarchy Project", description: "Cache design and performance analysis" }                ]
            },
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Computer Architecture Lectures</h3>
                            <p class="desc">Video series covering CPU design, memory hierarchies, and instruction set architectures.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Computer Organization and Design</h3>
                            <p class="desc">Essential textbook covering hardware design principles and computer architecture.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Assembly Language Reference</h3>
                            <p class="desc">Comprehensive guide to assembly language programming with examples.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>CPU Simulator</h3>
                            <p class="desc">Interactive online tool for visualizing CPU operations and pipeline execution.</p>
                            <a class="link" href="#" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Assembly Programming Guide</h3>
                            <p class="desc">Hands-on guide for writing and debugging assembly language programs.</p>
                            <a class="link" href="#" target="_blank">Access Guide</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Computer Architecture Basics</td>
                                <td>May 10</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Assembly Language Programming</td>
                                <td>May 18</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Instruction Set Architecture</td>
                                <td>May 28</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Mid-term Examination</td>
                                <td>July 10</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Final Examination</td>
                                <td>August 15</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>RISC vs CISC architecture comparison</strong>
                          <span>Started by: Dhruv | Replies: 7 | Last reply: 2hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Understanding pipelining stages</strong>
                          <span>Started by: Ishita | Replies: 5 | Last reply: 1d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Cache coherence protocols explained</strong>
                          <span>Started by: Prakash | Replies: 8 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Memory hierarchy and performance optimization</strong>
                          <span>Started by: Neeti | Replies: 6 | Last reply: 5h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Tips for assembly language programming</strong>
                          <span>Started by: Siddharth | Replies: 4 | Last reply: 40m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Computer architecture project ideas discussion</strong>
                          <span>Started by: Mira | Replies: 11 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which computer organization topic is most interesting?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Processor Architecture</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Memory Systems</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">I/O Interfacing</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Parallel Computing</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
                    { date: "May 28", title: "File Systems Project", description: "Implementation of basic file system operations" }                ]
            },
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Operating Systems Fundamentals</h3>
                            <p class="desc">Video lectures covering process management, memory management, and file systems.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Operating System Concepts</h3>
                            <p class="desc">Comprehensive textbook covering all major OS concepts and implementations.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Linux Commands Cheatsheet</h3>
                            <p class="desc">Quick reference guide for Linux commands and system administration.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Linux Tutorial</h3>
                            <p class="desc">Step-by-step guide for understanding Linux kernel and system programming.</p>
                            <a class="link" href="#" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Shell Programming Guide</h3>
                            <p class="desc">Practical guide for Bash scripting and automating system tasks.</p>
                            <a class="link" href="#" target="_blank">Access Guide</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>OS Concepts</td>
                                <td>May 10</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Process Management</td>
                                <td>May 14</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Memory Management Implementation</td>
                                <td>May 25</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Mid-term Examination</td>
                                <td>July 15</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Final Examination</td>
                                <td>August 20</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Process vs Thread differences and use cases</strong>
                          <span>Started by: Akash | Replies: 9 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Avoiding deadlocks in concurrent programming</strong>
                          <span>Started by: Renu | Replies: 7 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Memory management techniques comparison</strong>
                          <span>Started by: Sameer | Replies: 8 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>File system organization and implementation</strong>
                          <span>Started by: Lakshmi | Replies: 6 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>CPU scheduling algorithms visualization</strong>
                          <span>Started by: Tarun | Replies: 5 | Last reply: 25m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Linux kernel module programming help</strong>
                          <span>Started by: Nitin | Replies: 10 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which operating system topic is most challenging?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Process Synchronization</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Memory Management</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">File Systems</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">CPU Scheduling</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
        },        {            code: "19CSE205",
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
            resources: ` <div class="resources">
                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Computer Networks Essentials</h3>
                            <p class="desc">Comprehensive video series covering network protocols, architectures, and implementation.</p>
                            <a class="link" href="#" target="_blank">Watch on YouTube</a>
                          </div>

                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Computer Networking: A Top-Down Approach</h3>
                            <p class="desc">Standard textbook for understanding network layers and protocols with examples.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>TCP/IP Protocol Suite Reference</h3>
                            <p class="desc">Detailed notes on TCP/IP protocols, headers, and packet structures.</p>
                            <a class="link" href="#" target="_blank">View Notes</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Cisco Networking Academy</h3>
                            <p class="desc">Interactive learning resources for networking concepts and Cisco certification.</p>
                            <a class="link" href="https://www.netacad.com" target="_blank">Visit Site</a>
                          </div>

                          <div class="card">
                            <div class="icon">🛠️</div>
                            <span class="tag">Tool</span>
                            <h3>Packet Tracer Tutorial</h3>
                            <p class="desc">Step-by-step guide for network simulation and troubleshooting with Packet Tracer.</p>
                            <a class="link" href="#" target="_blank">Access Tutorial</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Network Models</td>
                                <td>May 8</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Physical Layer Concepts</td>
                                <td>May 12</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Data Link Layer Implementation</td>
                                <td>May 24</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Mid-term Examination</td>
                                <td>July 18</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Final Examination</td>
                                <td>August 22</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: "Course website: cse.amrita.edu/networks",
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
            resources: `<div class="resources">
                          <div class="card">
                            <div class="icon">📚</div>
                            <span class="tag">Book</span>
                            <h3>Engineering Economics</h3>
                            <p class="desc">Official course textbook covering all fundamental economic principles for engineers.</p>
                            <a class="link" href="#" target="_blank">Find in Library</a>
                          </div>

                          <div class="card">
                            <div class="icon">📄</div>
                            <span class="tag">Notes</span>
                            <h3>Microeconomics Review</h3>
                            <p class="desc">Comprehensive notes on supply, demand, market equilibrium and elasticity concepts.</p>
                            <a class="link" href="#" target="_blank">Download PDF</a>
                          </div>

                          <div class="card">
                            <div class="icon">🎥</div>
                            <span class="tag">Video</span>
                            <h3>Engineering Investment Analysis</h3>
                            <p class="desc">Video series explaining NPV, IRR, and other investment evaluation methods.</p>
                            <a class="link" href="#" target="_blank">Watch Playlist</a>
                          </div>

                          <div class="card">
                            <div class="icon">📊</div>
                            <span class="tag">Case Study</span>
                            <h3>Real-World Economic Analysis</h3>
                            <p class="desc">Collection of industry case studies showing practical application of economic principles.</p>
                            <a class="link" href="#" target="_blank">Browse Case Studies</a>
                          </div>

                          <div class="card">
                            <div class="icon">🌐</div>
                            <span class="tag">Website</span>
                            <h3>Economic Data Resources</h3>
                            <p class="desc">Links to economic databases and statistical resources for projects and assignments.</p>
                            <a class="link" href="#" target="_blank">Access Resources</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>Economic Fundamentals</td>
                                <td>May 7</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Market Structures Analysis</td>
                                <td>May 11</td>
                                <td class="type type-quiz">Quiz</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Macroeconomics Report</td>
                                <td>May 27</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Mid-term Examination</td>
                                <td>July 7</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Final Examination</td>
                                <td>August 14</td>
                                <td class="type type-test">Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Understanding microeconomics vs macroeconomics</strong>
                          <span>Started by: Ankur | Replies: 6 | Last reply: 2hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Supply and demand curve analysis help</strong>
                          <span>Started by: Sarika | Replies: 4 | Last reply: 1d ago</span>
                        </div>

                        <div class="thread">
                          <strong>How to calculate elasticity of demand?</strong>
                          <span>Started by: Kunal | Replies: 7 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Market structures comparison for project</strong>
                          <span>Started by: Tina | Replies: 5 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Current economic trends analysis</strong>
                          <span>Started by: Vikas | Replies: 3 | Last reply: 45m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Engineering projects cost-benefit analysis</strong>
                          <span>Started by: Leela | Replies: 9 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which economic topic is most relevant to your engineering field?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Project Valuation</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Market Analysis</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Risk Assessment</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">Resource Allocation</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
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
            resources: `<div class="resources">
                          <div class="card">
                            <div class="icon">📘</div>
                            <span class="tag">Manual</span>
                            <h3>Complete Lab Manual</h3>
                            <p class="desc">Comprehensive guide with step-by-step instructions for all DBMS and OS lab exercises.</p>
                            <a class="link" href="#" target="_blank">Download Manual</a>
                          </div>

                          <div class="card">
                            <div class="icon">📋</div>
                            <span class="tag">Reference</span>
                            <h3>SQL Quick Reference</h3>
                            <p class="desc">Handy cheat sheet covering all essential SQL commands, functions, and syntax.</p>
                            <a class="link" href="#" target="_blank">View Reference</a>
                          </div>

                          <div class="card">
                            <div class="icon">🐧</div>
                            <span class="tag">Reference</span>
                            <h3>Linux Command Guide</h3>
                            <p class="desc">Comprehensive guide to Linux/Unix commands used throughout the OS portion of the lab.</p>
                            <a class="link" href="#" target="_blank">View Commands</a>
                          </div>

                          <div class="card">
                            <div class="icon">🎬</div>
                            <span class="tag">Tutorial</span>
                            <h3>Database Design Walkthrough</h3>
                            <p class="desc">Video tutorials demonstrating proper database design, normalization, and implementation.</p>
                            <a class="link" href="#" target="_blank">Watch Tutorials</a>
                          </div>

                          <div class="card">
                            <div class="icon">🔄</div>
                            <span class="tag">Software</span>
                            <h3>Virtual Lab Environment</h3>
                            <p class="desc">Pre-configured virtual machine with all required database systems and OS tools installed.</p>
                            <a class="link" href="#" target="_blank">Setup Instructions</a>
                          </div>
                        </div>`,
            testsQuizzes: `<table>    
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Returned</th>
                              </tr>
                            </thead>
                            <tbody>      <tr>
                                <td>SQL Basics Exercise</td>
                                <td>May 8</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Database Design Implementation</td>
                                <td>May 15</td>
                                <td class="type type-assignment">Assignment</td>
                                <td class="status-completed">Completed</td>
                                <td class="returned-yes">Yes</td>
                              </tr>      <tr>
                                <td>Advanced SQL & Process Management</td>
                                <td>May 30</td>
                                <td class="type type-test">Lab Test</td>
                                <td class="status-due">Due</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>OS Administration & Shell Scripting</td>
                                <td>July 10</td>
                                <td class="type type-test">Lab Test</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>      <tr>
                                <td>Final Practical Examination</td>
                                <td>August 16</td>
                                <td class="type type-test">Lab Exam</td>
                                <td class="status-na">N/A</td>
                                <td class="returned-no">No</td>
                              </tr>
                            </tbody>
                          </table>`,
            forums: `<div class="forumsandpolls">
                      <!-- Forum Section -->
                      <div class="forum">
                        <h2>🧵 Active Threads</h2>
                        <!-- Add more threads as needed -->
                        <div class="thread">
                          <strong>Creating complex SQL queries for lab assignment</strong>
                          <span>Started by: Pavan | Replies: 8 | Last reply: 1hr ago</span>
                        </div>

                        <div class="thread">
                          <strong>Troubleshooting shell script errors</strong>
                          <span>Started by: Monika | Replies: 6 | Last reply: 2d ago</span>
                        </div>

                        <div class="thread">
                          <strong>Database normalization practical examples</strong>
                          <span>Started by: Rajat | Replies: 7 | Last reply: 3h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Linux process management commands</strong>
                          <span>Started by: Sunita | Replies: 5 | Last reply: 4h ago</span>
                        </div>

                        <div class="thread">
                          <strong>Trigger implementation in MySQL</strong>
                          <span>Started by: Anand | Replies: 4 | Last reply: 30m ago</span>
                        </div>

                        <div class="thread">
                          <strong>Mini project ideas for DBMS lab</strong>
                          <span>Started by: Krishna | Replies: 10 | Last reply: Yesterday</span>
                        </div>
                      </div>

                      <!-- Poll Section -->
                      <div class="polls">
                        <h2>📊 Class Poll</h2>

                        <div class="poll-question">Which lab topic needs more practice sessions?</div>

                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt1">
                          <label for="opt1">Database Design & SQL</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt2">
                          <label for="opt2">Shell Scripting</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt3">
                          <label for="opt3">Process Management</label>
                        </div>
                        <div class="poll-option">
                          <input type="radio" name="poll" id="opt4">
                          <label for="opt4">File System Operations</label>
                        </div>

                        <button class="submit-btn">Submit Vote</button>
                      </div>
                    </div>`,
        }
    ]};

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
            { id: 'resources', name: 'Resources', content: course.resources },
            { id: 'tests-quizzes', name: 'Tests & Quizzes', content: course.testsQuizzes },
            { id: 'forums', name: 'Forums', content: course.forums }
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
            tabContent.id = `${tab.id}-content`;            // Use innerHTML for HTML content (like syllabus cards) and textContent for plain text
            if (tab.id === 'syllabus' && typeof tab.content === 'string' && tab.content.includes('<div class="syllabus-grid">')) {
                tabContent.innerHTML = tab.content;
            } else if (tab.id === 'lesson-calendar' && typeof tab.content === 'object') {
                // Create interactive calendar for lesson calendar
                createInteractiveCalendar(tabContent, tab.content);
            } else if (tab.id === 'tests-quizzes' && typeof tab.content === 'string' && tab.content.includes('<table>')) {
                // Use innerHTML for table content
                tabContent.innerHTML = tab.content;
            } else if (tab.id === 'resources' && typeof tab.content === 'string' && tab.content.includes('<div class="resources">')) {
                // Use innerHTML for resources content
                tabContent.innerHTML = tab.content;
            }
            else if (tab.id === 'forums' && typeof tab.content === 'string' && tab.content.includes('<div class="forumsandpolls">')) {
                // Use innerHTML for forums content
                tabContent.innerHTML = tab.content;
            } 
            else {
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