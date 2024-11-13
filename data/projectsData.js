const projects = [
    {
      title: "Fragment UI & Fragments Microservice",
      description: `
        The <b>Fragment UI & Fragments Microservice</b> is a comprehensive full-stack project that combines a <b>front-end web application</b> with a <b>cloud-based microservice backend</b>. The <b>Fragments UI</b> provides a user-friendly interface for managing <b>text, images, and JSON data</b> with features like <b>Docker integration</b>, <b>multi-stage builds</b>, and <b>Nginx</b> for serving static content. Integrated with <b>AWS Cognito</b> for authentication and deployed on <b>AWS</b>, this application enables secure and scalable data management.
  
        The <b>Fragments Microservice</b> handles various data formats, featuring <b>CRUD operations</b>, <b>data conversion</b>, and enhanced <b>security</b>. It integrates seamlessly with the UI and supports large-scale deployments through <b>AWS Elastic Container Service</b> and <b>AWS Load Balancer</b>. The project incorporates <b>GitHub Actions</b> for CI/CD and <b>Docker Compose</b> for managing containers. This project demonstrates a user-focused, secure, and scalable approach to software development.
      `,
      technologies: ["JavaScript", "React", "Node.js", "AWS", "Docker", "AWS Cognito", "GitHub Actions", "Docker Compose", "Nginx"],
      github: {
        frontend: "https://github.com/DennisBaksheev/fragments-ui",
        backend: "https://github.com/DennisBaksheev/fragments-Microservice"
      },
      image: "/fragmentui.jpg",
      link: ["https://github.com/DennisBaksheev/fragments-ui", "https://github.com/DennisBaksheev/fragments-Microservice"],
      icon: {
        github: ["https://github.com/DennisBaksheev/fragments-ui", "https://github.com/DennisBaksheev/fragments-Microservice"]
      }
    },
    {
        title: "Fitness Footwear E-commerce Website",
        description: `The <strong>Fitness Footwear E-commerce Website</strong> is a fully functional online storefront built on <strong>Shopify</strong>, tailored for athletic shoes. Developed using <strong>Shopify's Liquid</strong> template language, along with custom <strong>CSS</strong>, <strong>HTML</strong>, and <strong>JavaScript</strong>, the site provides an engaging and responsive shopping experience. It features dynamic <strong>product filtering and sorting</strong>, an intuitive <strong>shopping cart</strong>, and a <strong>secure checkout system</strong>.
          <p>
            <strong><a href="https://mvp-vault.myshopify.com/?_ab=0&_fd=0&_sc=1" target="_blank" rel="noopener noreferrer">Live Website Demo</a></strong><br>
            <strong>Password:</strong> redkrypton
          </p>`,
        technologies: ["Shopify Liquid", "JavaScript", "CSS", "HTML", "Shopify AJAX API"],
        github: "https://github.com/DennisBaksheev/Fitness-Footwear-Shopify",
        image: "/FitnessForever.png",
        link: "https://mvp-vault.myshopify.com/?_ab=0&_fd=0&_sc=1"
    },
      
    {
      title: "Bookworm Web App",
      description: `
        The <b>Bookworm Web App</b> is designed for <b>book enthusiasts</b> to search for books, maintain a personalized reading list, and securely sign in with <b>Google OAuth</b>. This application integrates with the <b>Google Books API</b> to allow users to search and save books, providing a seamless experience for managing their reading collections. Key features include <b>Book Search</b> using the <b>Google Books API</b>, a <b>Reading List</b> where users can add and manage books, and <b>Google OAuth Authentication</b> for secure login and registration. The app is built using <b>Node.js</b>, <b>Express.js</b>, <b>MongoDB</b> with <b>Mongoose</b>, and <b>EJS</b> templates, providing a robust backend and a seamless frontend. It also incorporates <b>Passport.js</b> for authentication and <b>Axios</b> for efficient API requests.
        <p>
           <strong><a href="https://reflective-voracious-provelone.glitch.me/">Live Website Demo</a></strong><br>
        </p>
      `,
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Google OAuth", "Passport.js", "Axios"],
      github: "https://github.com/DennisBaksheev/BookWorm",
      image: "/BookWorm.png",
      link: "https://reflective-voracious-provelone.glitch.me/"
    },
    {
      title: "Show Biz - TV Production Management App",
      description: `
        The <b>Show Biz - TV Production Management App</b> is an advanced web application designed to streamline the management of TV series production. It offers rich features like <b>role-based access control</b>, <b>data management</b>, and <b>media uploads</b>. The app supports various <b>user roles</b> (Executive, Coordinator, Clerk, Admin), each with specific responsibilities, and allows seamless management of <b>actors</b>, <b>TV series</b>, and <b>episodes</b> through functionalities for adding, editing, and viewing details.
        
        Key features include <b>rich text support</b> for actor biographies and episode descriptions, <b>media item uploads</b> (PDFs, images, audio, and video), and <b>Azure integration</b> for robust hosting. The project is built using <b>ASP.NET</b> with <b>C#</b>, <b>Entity Framework</b> for data management, and <b>Bootstrap</b> for a responsive UI, all deployed to <b>Microsoft Azure</b>. This project showcases a comprehensive understanding of web development, security, and deployment strategies.
      `,
      technologies: ["ASP.NET", "C#", "Entity Framework", "Azure", "Bootstrap", "AutoMapper"],
      github: "https://github.com/DennisBaksheev/Show-Biz",
      image: "/ShowBiz.png",
      link: "https://github.com/DennisBaksheev/Show-Biz"
    },
    {
      title: "Python-Pygame Chess Game",
      description: `
        The <b>Python-Pygame Chess Game</b> is a simple yet engaging two-player chess game built using <b>Python</b> and the <b>Pygame library</b>. It provides a classic chess experience with a <b>graphical user interface (GUI)</b>, allowing two human players to compete in a strategic game of chess. The game adheres to <b>classic chess rules</b> and features interactive elements like <b>move highlighting</b>, which displays all valid moves for selected pieces, and an intuitive <b>move log panel</b> that tracks every move during the game. Players can also <b>undo moves</b> to correct mistakes, and the game automatically detects and announces <b>checkmate and stalemate conditions</b>. The <b>interactive GUI</b> ensures a user-friendly and engaging chess experience. Built with <b>Python 3.x</b> and the <b>Pygame library</b>, this project showcases core programming skills and game logic.
      `,
      technologies: ["Python", "Pygame", "Chess Game Logic", "GUI Development"],
      github: "https://github.com/DennisBaksheev/Python-Pygame-Chess",
      image: "/Python-Pygame-Chess.png",
      link: "https://github.com/DennisBaksheev/Python-Pygame-Chess"
    },
    {
      title: "3D Arkanoid Game",
      description: `
        The <b>3D Arkanoid Game</b> reimagines the classic Arkanoid gameplay with a modern <b>3D perspective</b> using <b>OpenGL</b> for an enhanced gaming experience. Set in a 1024x768 window, players are immersed in dynamic gameplay from a static 3/4 view. The game features <b>3D graphics</b>, <b>interactive controls</b> where players use keyboard arrows to navigate the platform and launch the sphere with the spacebar, and <b>collision detection</b> that provides realistic physics between the sphere and bricks. The visually appealing game is enriched with <b>rich textures</b>, and the challenge increases as the game ends if the player fails to catch the sphere.
        
              This project utilizes <b>OpenGL rendering</b> for advanced 3D graphics, <b>sophisticated collision mechanics</b>, and <b>texture mapping</b> for enhanced visuals. It pushed my skills in game development, particularly in implementing collision detection and texture mapping.
    `,
    technologies: ["OpenGL", "C++"],
    github: "https://github.com/DennisBaksheev/Arkanoid-",
    image: "/Arkanoid.png",
    link: "https://github.com/DennisBaksheev/Arkanoid-" // GitHub link for the repository
  }
];

export default projects;

  