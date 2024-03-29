export const SKILLS = ['Python', 'Typescript & Javacript', 'Java', 'Ruby', 'Flask', 'React.js', 'Vue.js',
    'Ruby on Rails', 'TailwindCSS, MUI & Bootstrap']

export const EDUCATION = [
    {
        school: 'University of Sheffield',
        degree: 'BSc Computer Science',
        grade: 'First-Class Honours (1:1)',
    },
    {
        school: 'University of Sheffield International College',
        degree: 'RQF Level 3',
        grade: '81%',
    }
]

export const EXPERIENCES = [
    {
        company: 'Nomura',
        position: 'Technology Placement',
        startDate: 'Jun 2023',
        endDate: 'Present',
        description: [
            'Developed a Flask server to automate market load processes, leading to enhanced support for the global markets team',
            'Designed and implemented a user-friendly web interface for the market server using React.js',
            'Remediated a regression test viewer with over 50,000 failing test cases built on Excel using VBA',
            'Developed robust error-handling procedures to effectively address all trivial test cases, significantly reducing the number of failing tests by 80%'
        ]
    },
    {
        company: 'Univeristy of Sheffield',
        position: 'Software Developer',
        startDate: 'Sep 2022',
        endDate: 'Jun 2023',
        description: [
            "Worked as a part of a team to develop a Ruby on Rails application to streamline the management of student record change requests at the University of Sheffield",
            "Implemented a user-friendly web interface using Bootstrap",
            "Implemented various unit and end-to-end tests, enhancing the system's reliability and robustness",
        ]
    },
    {
        company: 'Engineers Without Borders UK',
        position: 'Report Reviewer',
        startDate: 'Jun 2022',
        endDate: 'Jul 2022',
        description: [
            "Marked and gave feedback to innovative design concepts, submitted by other students for the Engineering for People Design Challenge 2022."
        ]
    },
]

export const PROJECTS = [
    {
        name: 'QuickDict',
        description: 'An online english dictionary powered by Meriam-Webster\'s Collegiate dictionary API.',
        webLink: 'https://priscillaemasoga.com',
        githubLink: 'https://github.com/priscilla-e/quickdict',
        techStack: ['React.js', 'TypeScript', 'Firebase', 'TailwindCSS', 'IndexedDB'],
        thumbnail: 'quickdict-project.png'
    },
    {
        name: 'Portfolio Website',
        description: 'A personal portfolio website showcasing a creative blend of modern design and functionality.',
        webLink: 'https://priscillaemasoga.com',
        githubLink: 'https://github.com/priscilla-e/my-portfolio',
        techStack: ['React.js', 'HTML', 'TailwindCSS'],
        thumbnail: 'portfolio-project.png'
    },
    {
        name: 'Tic-tac-AI Game',
        description: 'A Tic-Tac-Toe game, enhanced with a Minimax algorithm and OpenAI\'s text generation model for challenging gameplay.',
        webLink: 'https://tic-tac-ai-nu.vercel.app',
        githubLink: 'https://github.com/priscilla-e/tic-tac-AI',
        techStack: ['FastAPI', 'React.js', 'OpenAI', 'HTML', 'TailwindCSS'],
        thumbnail: 'tic-tac-toe-project.png'
    },
    {
        name: 'Sheffield University COS Portal',
        description: 'A Ruby on Rails application to streamline the management of student record change requests at the University of Sheffield',
        webLink: null,
        githubLink: null,
        techStack: ['Ruby on Rails', 'Bootstrap'],
        thumbnail: 'engagement-tracker-project.jpg'
    },
    {
        name: 'Enigma Simulator',
        description: 'An Enigma machine simulator built using Haskell, accurately replicating the encryption mechanics of the historic cipher device.',
        webLink: null,
        githubLink: 'https://github.com/priscilla-e/enigma-simulator',
        techStack: ['Haskell'],
        thumbnail: 'enigma-project.jpg'
    },
]