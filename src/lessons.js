const lessons = [
  {
    title: 'Introduction to Security',
    content: 'What is security? Why is it important?',
    image: 'path/to/intro_to_security.jpg', // Add the image URL
    slides: [
      'Security is about keeping safe.',
      'It is important to protect ourselves from threats.',
      'Security measures can be physical or digital.'
    ],
    quiz: [
      {
        question: 'What is security?',
        options: ['Keeping safe', 'Playing games', 'Watching TV'],
        correct: 'Keeping safe',
      },
      {
        question: 'Why is security important?',
        options: ['To stay safe', 'To have fun', 'To sleep'],
        correct: 'To stay safe',
      }
    ],
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
  },
  {
    title: 'Passwords',
    content: 'What is a password? Why do we need strong passwords? Tips for creating strong passwords.',
    image: 'path/to/passwords.jpg',
    slides: [
      'A password is a string of characters.',
      'Strong passwords keep us secure.',
      'Tips: Use a mix of letters, numbers, and symbols.'
    ],
    quiz: [
      {
        question: 'What is a password?',
        options: ['A key', 'A string of characters', 'A game'],
        correct: 'A string of characters',
      },
      {
        question: 'Why do we need strong passwords?',
        options: ['For fun', 'To stay secure', 'To impress friends'],
        correct: 'To stay secure',
      }
    ],
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
  },
  {
    title: 'Internet Safety',
    content: 'What are some internet safety tips for kids?',
    image: 'path/to/internet_safety.jpg',
    slides: [
      'Use strong passwords.',
      'Don’t share personal information.',
      'Tell a trusted adult if you see something inappropriate.'
    ],
    quiz: [
      {
        question: 'Which is a safe practice online?',
        options: ['Sharing personal information', 'Talking to strangers', 'Using strong passwords'],
        correct: 'Using strong passwords',
      },
      {
        question: 'What should you do if you see something inappropriate online?',
        options: ['Tell your friends', 'Ignore it', 'Tell a trusted adult'],
        correct: 'Tell a trusted adult',
      }
    ],
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
  },
  {
    title: 'Cyberbullying',
    content: 'What is cyberbullying? How can you deal with cyberbullying?',
    image: 'path/to/cyberbullying.jpg',
    slides: [
      'Cyberbullying is sending mean messages online.',
      'Don’t respond with more mean messages.',
      'Tell a trusted adult about cyberbullying.'
    ],
    quiz: [
      {
        question: 'What is cyberbullying?',
        options: ['Being nice online', 'Sending mean messages', 'Playing games'],
        correct: 'Sending mean messages',
      },
      {
        question: 'How can you deal with cyberbullying?',
        options: ['Respond with more mean messages', 'Tell a trusted adult', 'Do nothing'],
        correct: 'Tell a trusted adult',
      }
    ],
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
  },
  {
    title: 'Data Privacy',
    content: 'Why is it important to protect your personal information online?',
    image: 'path/to/data_privacy.jpg',
    slides: [
      'Protecting personal information helps avoid identity theft.',
      'Don’t share your full name and address online.',
      'Use privacy settings on social media.'
    ],
    quiz: [
      {
        question: 'Why is it important to protect your personal information online?',
        options: ['To make friends', 'To avoid identity theft', 'To watch videos'],
        correct: 'To avoid identity theft',
      },
      {
        question: 'What kind of information should you not share online?',
        options: ['Favorite book', 'Full name and address', 'Favorite color'],
        correct: 'Full name and address',
      }
    ],
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
  },
  {
    title: 'Phishing',
    content: 'What is phishing? How can you recognize and avoid phishing scams?',
    image: 'path/to/phishing.jpg',
    slides: [
      'Phishing is a scam to steal your information.',
      'Don’t click on links in suspicious emails.',
      'Ignore and report phishing attempts.'
    ],
    quiz: [
      {
        question: 'What is phishing?',
        options: ['Fishing in a lake', 'A scam to steal your information', 'Playing a game'],
        correct: 'A scam to steal your information',
      },
      {
        question: 'How can you recognize and avoid phishing scams?',
        options: ['Click on all links in emails', 'Ignore suspicious emails', 'Share your passwords'],
        correct: 'Ignore suspicious emails',
      }
    ],
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
  },
  {
    title: 'Online Gaming Safety',
    content: 'What are some tips for staying safe while playing games online?',
    image: 'path/to/online_gaming_safety.jpg',
    slides: [
      'Use strong passwords.',
      'Don’t share personal information.',
      'Tell a trusted adult if someone you don’t know asks to meet in person.'
    ],
    quiz: [
      {
        question: 'What are some tips for staying safe while playing games online?',
        options: ['Use strong passwords', 'Don’t share personal information', 'All of the above'],
        correct: 'All of the above',
      },
      {
        question: 'What should you do if someone you don’t know asks to meet in person after playing an online game?',
        options: ['Agree to meet', 'Tell a trusted adult', 'Keep it a secret'],
        correct: 'Tell a trusted adult',
      }
    ],
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
  },
  {
    title: 'Social Media Safety',
    content: 'Why is it important to be careful about what you share on social media?',
    image: 'path/to/social_media_safety.jpg',
    slides: [
      'Be careful about what you share to protect your privacy and reputation.',
      'Don’t accept friend requests from people you don’t know.',
      'Ask a parent or guardian before accepting friend requests.'
    ],
    quiz: [
      {
        question: 'Why is it important to be careful about what you share on social media?',
        options: ['To make friends', 'To protect your privacy and reputation', 'To get likes'],
        correct: 'To protect your privacy and reputation',
      },
      {
        question: 'What should you do if you receive a friend request from someone you don’t know?',
        options: ['Accept it', 'Ignore it', 'Ask a parent or guardian'],
        correct: 'Ask a parent or guardian',
      }
    ],
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
  },
  {
    title: 'Device Security',
    content: 'How can you keep your devices secure?',
    image: 'path/to/device_security.jpg',
    slides: [
      'Install antivirus software.',
      'Keep your devices locked.',
      'Change passwords if you lose a device.'
    ],
    quiz: [
      {
        question: 'How can you keep your devices secure?',
        options: ['Share your passwords', 'Install antivirus software', 'Leave devices unlocked'],
        correct: 'Install antivirus software',
      },
      {
        question: 'What should you do if you lose a device?',
        options: ['Do nothing', 'Change passwords', 'Nothing can be done'],
        correct: 'Change passwords',
      }
    ],
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
  },
  {
    title: 'Online Shopping Safety',
    content: 'What are some tips for safe online shopping?',
    image: 'path/to/online_shopping_safety.jpg',
    slides: [
      'Check for secure websites (https://).',
      'Avoid using public Wi-Fi for transactions.',
      'Report unauthorized charges to the bank.'
    ],
    quiz: [
      {
        question: 'What are some tips for safe online shopping?',
        options: ['Use public Wi-Fi for transactions', 'Check for secure websites (https://)', 'Share credit card details openly'],
        correct: 'Check for secure websites (https://)',
      },
      {
        question: 'What should you do if you notice unauthorized charges on your credit card after online shopping?',
        options: ['Ignore it', 'Report it to the bank', 'Do nothing'],
        correct: 'Report it to the bank',
      }
    ],
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
  }
];

export default lessons;
