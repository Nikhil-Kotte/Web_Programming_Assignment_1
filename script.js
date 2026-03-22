const courseData = {
  coa: {
    title: "Computer Organisation and Architecture",
    price: "Rs. 600",
    duration: "4 months",
    prerequisite: "Digital Logic Design",
    description:
      "This course introduces principles of computer organization, architecture, register transfer language, arithmetic, instruction set design, microprogrammed control units, pipelining, I/O systems, and multiprocessors.",
    instructor:
      "Course Instructor: Rajesh Kumar",
    facultyMeta:
      "Educational Qualifications: PhD from IIT Madras, M.Tech from IIT Kanpur. Journals Published: 14 international, 9 national.",
    curriculum: [
      "COURSE OBJECTIVES: Introduce computer organization and architecture concepts.",
      "COURSE OUTCOMES: Understand instruction sets, functional unit design, pipeline hazards, arithmetic, and multiprocessors.",
      "UNIT-I: Introduction to Computer Architecture",
      "UNIT-I Topics: Functional units, performance metrics, and instruction cycle basics.",
      "UNIT-II: Instruction Set Architecture (ISA)",
      "UNIT-II Topics: Addressing modes, instruction formats, and RISC vs CISC comparison.",
      "UNIT-III: Data Representation",
      "UNIT-III Topics: Signed numbers, floating-point representation, and arithmetic operations.",
      "UNIT-IV: Introduction to memory systems and Pipelining",
      "UNIT-IV Topics: Cache organization, memory hierarchy, pipeline stages, and hazards.",
      "UNIT-V: Multiprocessors",
      "UNIT-V Topics: Parallel processing models, interconnection structures, and performance evaluation."
    ],
    enrollCourse: "Computer Organisation and Architecture"
  },
  dbms: {
    title: "Database Management Systems",
    price: "Rs. 1000",
    duration: "4 months",
    prerequisite: "Programming and Data Structures",
    description:
      "This course covers foundational database concepts including design, languages, implementation, indexing, data storage techniques, transaction management, concurrency control, and recovery procedures.",
    instructor:
      "Course Instructor: Rajan Kapoor",
    facultyMeta:
      "Educational Qualifications: PhD from IIT Bombay, M.Tech from IIT Delhi. Journals Published: 18 international, 11 national.",
    curriculum: [
      "COURSE OBJECTIVES: Learn database design, SQL, indexing, and transaction management.",
      "COURSE OUTCOMES: Design schema, write relational algebra/SQL, normalize data, and analyze concurrency control.",
      "UNIT-I: Introduction",
      "UNIT-I Topics: DBMS architecture, ER model, entity relationships, and schema mapping.",
      "UNIT-II: Relational Algebra, SQL",
      "UNIT-II Topics: Query writing, joins, aggregation, nested queries, and views.",
      "UNIT-III: Functional Dependency, Normalization",
      "UNIT-III Topics: 1NF to BCNF, dependency preservation, and decomposition strategies.",
      "UNIT-IV: Indexing, Transaction Processing",
      "UNIT-IV Topics: B+ trees, hashing, transaction properties, and serializability.",
      "UNIT-V: Concurrency control, Recovery system",
      "UNIT-V Topics: Locking protocols, deadlock handling, logging, and checkpoint recovery."
    ],
    enrollCourse: "Database Management Systems"
  },
  toc: {
    title: "Theory of Computation",
    price: "Rs. 800",
    duration: "4 months",
    prerequisite: "Discrete Structures, Data Structures, Design and analysis of algorithms",
    description:
      "This course explores finite automata, pushdown automata, Turing machines, formal grammars, language equivalence, and decidability/undecidability of computational problems.",
    instructor:
      "Course Instructor: Rajesh Kumar",
    facultyMeta:
      "Educational Qualifications: PhD from IIT Madras, M.Tech from IIT Kanpur. Journals Published: 14 international, 9 national.",
    curriculum: [
      "COURSE OBJECTIVES: Study abstract computation models and formal languages.",
      "COURSE OUTCOMES: Build automata, derive regular expressions, analyze CFG/PDA equivalence, and classify decidability.",
      "UNIT-I: Automata, Finite Automata",
      "UNIT-I Topics: DFA/NFA construction, conversion techniques, and language acceptance.",
      "UNIT-II: Regular Expression and languages, Properties of Regular Languages",
      "UNIT-II Topics: Regex equivalence, pumping lemma, and closure properties.",
      "UNIT-III: Context Free Grammars and Languages, Properties of Context Free Languages",
      "UNIT-III Topics: Parse trees, ambiguity, simplification of CFG, and CNF/GNF forms.",
      "UNIT-IV: Pushdown Automata, Context-sensitive Languages",
      "UNIT-IV Topics: PDA design, CFL recognition, and linear bounded automata basics.",
      "UNIT-V: Introduction to Turing Machines, Undecidability",
      "UNIT-V Topics: TM models, reducibility, decidable problems, and classic undecidable languages."
    ],
    enrollCourse: "Theory of Computation"
  },
  wp: {
    title: "Web Programming",
    price: "Rs. 700",
    duration: "4 months",
    prerequisite: "None",
    description:
      "This course builds practical understanding of HTML, JavaScript, XML, Vue.js, Node.js, and MongoDB for client-side and end-to-end web application development.",
    instructor:
      "Course Instructor: Raju",
    facultyMeta:
      "Educational Qualifications: PhD from IIT Hyderabad, B.Tech from IIT Kanpur. Journals Published: 10 international, 7 national.",
    curriculum: [
      "COURSE OBJECTIVES: Learn HTML, JavaScript, XML, Vue.js, and modern web stacks.",
      "COURSE OUTCOMES: Build structured web pages and full applications using Vue.js, Node.js, and MongoDB.",
      "UNIT-I: Web Basics",
      "UNIT-I Topics: Client-server model, HTTP methods, browsers, and developer tools.",
      "UNIT-II: Introduction HTML5, XML",
      "UNIT-II Topics: Semantic tags, forms, media elements, and XML document structure.",
      "UNIT-III: The Basics of Java script, JQuery",
      "UNIT-III Topics: DOM manipulation, events, validation, asynchronous calls, and utility methods.",
      "UNIT-IV: Bootstrap, Vue.js",
      "UNIT-IV Topics: Responsive layouts, components, directives, and state handling.",
      "UNIT-V: Node.js, MongoDB",
      "UNIT-V Topics: REST APIs, routing, middleware, schema design, and CRUD integration."
    ],
    enrollCourse: "Web Programming"
  },
  ps: {
    title: "Probability and Statistics",
    price: "Rs. 600",
    duration: "4 months",
    prerequisite: "None",
    description:
      "This course focuses on statistical analysis, probability distributions, hypothesis testing, and practical modeling of real-world random phenomena.",
    instructor:
      "Course Instructor: Ramesh Kandukuri",
    facultyMeta:
      "Educational Qualifications: PhD from IIT Kharagpur, M.Sc from IIT Madras. Journals Published: 12 international, 8 national.",
    curriculum: [
      "COURSE OBJECTIVES: Analyze linear/non-linear data and solve bivariate probability problems.",
      "COURSE OUTCOMES: Apply skewness fitting, marginal probabilities, hypothesis tests, and real-world data analysis.",
      "UNIT-I: Basic Statistics",
      "UNIT-I Topics: Measures of central tendency, dispersion, and graphical summaries.",
      "UNIT-II: Univariate and Bivariate Distribution",
      "UNIT-II Topics: Joint, marginal, and conditional distributions with practical examples.",
      "UNIT-III: Probability Distributions",
      "UNIT-III Topics: Binomial, Poisson, normal distribution, and parameter interpretation.",
      "UNIT-IV: Testing of Hypotheses",
      "UNIT-IV Topics: z-test, t-test, chi-square test, p-values, and confidence intervals.",
      "UNIT-V: Analysis of Variance and Time Series",
      "UNIT-V Topics: ANOVA models, trend estimation, smoothing methods, and forecasting basics."
    ],
    enrollCourse: "Probability and Statistics"
  }
};

function setMessage(target, message, isSuccess) {
  if (!target) {
    return;
  }

  target.textContent = message;
  target.classList.remove("success", "error");
  target.classList.add(isSuccess ? "success" : "error");
}

function isStrongPassword(password) {
  return password.length >= 8;
}

function initCourseDetails() {
  const detailsPanel = document.getElementById("courseDetailsPanel");
  if (!detailsPanel) {
    return;
  }

  const placeholder = document.getElementById("courseDetailsPlaceholder");
  const detailTitle = document.getElementById("detailTitle");
  const detailPrice = document.getElementById("detailPrice");
  const detailDuration = document.getElementById("detailDuration");
  const detailPrerequisite = document.getElementById("detailPrerequisite");
  const detailDescription = document.getElementById("detailDescription");
  const detailInstructor = document.getElementById("detailInstructor");
  const detailFacultyMeta = document.getElementById("detailFacultyMeta");
  const detailCurriculum = document.getElementById("detailCurriculum");
  const enrollLink = document.getElementById("enrollLink");

  const renderCourse = (courseId) => {
    const course = courseData[courseId];
    if (!course) {
      return;
    }

    const splitPoints = (text) => {
      if (!text) {
        return [];
      }

      const normalized = text
        .replace(/, and /gi, ", ")
        .replace(/ and /gi, ", ")
        .replace(/;\s*/g, ", ");

      return normalized
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean);
    };

    const addCurriculumSection = (heading, points) => {
      const sectionItem = document.createElement("li");
      sectionItem.className = "curriculum-heading";

      const headingText = document.createElement("span");
      headingText.textContent = heading;
      sectionItem.appendChild(headingText);

      const pointsList = document.createElement("ul");
      pointsList.className = "curriculum-points";

      points.forEach((point) => {
        const pointItem = document.createElement("li");
        pointItem.textContent = point;
        pointsList.appendChild(pointItem);
      });

      sectionItem.appendChild(pointsList);
      detailCurriculum.appendChild(sectionItem);
    };

    detailTitle.textContent = course.title;
    detailPrice.textContent = course.price;
    detailDuration.textContent = course.duration;
    detailPrerequisite.textContent = course.prerequisite;
    detailDescription.textContent = course.description;
    detailInstructor.textContent = course.instructor;
    detailFacultyMeta.textContent = course.facultyMeta;

    detailCurriculum.innerHTML = "";

    const objectivesLine = course.curriculum.find((item) => item.startsWith("COURSE OBJECTIVES:"));
    const outcomesLine = course.curriculum.find((item) => item.startsWith("COURSE OUTCOMES:"));

    if (objectivesLine) {
      const objectiveText = objectivesLine.replace("COURSE OBJECTIVES:", "").trim();
      addCurriculumSection("Course Objectives", splitPoints(objectiveText));
    }

    if (outcomesLine) {
      const outcomesText = outcomesLine.replace("COURSE OUTCOMES:", "").trim();
      addCurriculumSection("Course Outcomes", splitPoints(outcomesText));
    }

    const unitHeadings = course.curriculum.filter(
      (item) => /^UNIT-[IVX]+:/i.test(item) && !/Topics:/i.test(item)
    );

    const unitTopics = {};
    course.curriculum.forEach((item) => {
      const match = item.match(/^(UNIT-[IVX]+) Topics:\s*(.*)$/i);
      if (match) {
        unitTopics[match[1].toUpperCase()] = splitPoints(match[2]);
      }
    });

    unitHeadings.forEach((unitLine) => {
      const unitMatch = unitLine.match(/^(UNIT-[IVX]+):\s*(.*)$/i);
      if (!unitMatch) {
        return;
      }

      const unitCode = unitMatch[1].toUpperCase();
      const unitTitle = unitMatch[2].trim();
      const points = unitTopics[unitCode] && unitTopics[unitCode].length
        ? unitTopics[unitCode]
        : [unitTitle];

      addCurriculumSection(`${unitCode}: ${unitTitle}`, points);
    });

    if (!detailCurriculum.children.length) {
      course.curriculum.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        detailCurriculum.appendChild(li);
      });
    }

    enrollLink.href = `register-login.html?course=${encodeURIComponent(course.enrollCourse)}`;
    enrollLink.classList.remove("hidden");
    detailsPanel.classList.remove("hidden");
    placeholder.classList.add("hidden");
  };

  const redirectToCourseDetails = (courseId) => {
    const targetUrl = `courses.html?course=${encodeURIComponent(courseId)}#details-heading`;
    window.location.href = targetUrl;
  };

  document.querySelectorAll(".view-course").forEach((button) => {
    button.addEventListener("click", () => {
      redirectToCourseDetails(button.dataset.course);
    });
  });

  const params = new URLSearchParams(window.location.search);
  const selectedCourseId = params.get("course");
  if (selectedCourseId && courseData[selectedCourseId]) {
    renderCourse(selectedCourseId);
  }
}

function initAuthForms() {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("regConfirmPassword").value;
      const message = document.getElementById("registerMessage");

      if (!name || !email || !password || !confirmPassword) {
        setMessage(message, "Please fill all registration fields.", false);
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setMessage(message, "Please enter a valid email address.", false);
        return;
      }

      if (!isStrongPassword(password)) {
        setMessage(message, "Password must be at least 8 characters long.", false);
        return;
      }

      if (password !== confirmPassword) {
        setMessage(message, "Passwords do not match.", false);
        return;
      }

      setMessage(message, "Registration successful.", true);
      registerForm.reset();
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("loginName").value.trim();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;
      const message = document.getElementById("loginMessage");

      if (!name || !email || !password) {
        setMessage(message, "Name, email, and password are required.", false);
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setMessage(message, "Please enter a valid email address.", false);
        return;
      }

      if (!isStrongPassword(password)) {
        setMessage(message, "Password must be at least 8 characters long.", false);
        return;
      }

      setMessage(message, "Login validation passed.", true);
    });
  }
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const inquiry = document.getElementById("contactMessage").value.trim();
    const message = document.getElementById("contactMessageStatus");

    if (!name || !email || !inquiry) {
      setMessage(message, "Please complete all inquiry form fields.", false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage(message, "Please enter a valid email address.", false);
      return;
    }

    setMessage(message, "Your inquiry has been submitted.", true);
    contactForm.reset();
  });
}

initCourseDetails();
initAuthForms();
initContactForm();
