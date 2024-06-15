const lessons = [
  {
    title: 'Introduction to Security',
    content: 'What is security? Why is it important?',
    image: 'https://www.archtis.com/wp-content/uploads/2018/12/Info-security-vs-IT-security.png',
    slides: [
      'Security is all about keeping things safe and protected from harm or danger. Think about how we use locks to keep our homes safe or how we use passwords to keep our online games and information safe. In this chapter, we will learn about different types of security and why it’s important to stay safe both in the real world and online. There are two main types of security: Physical Security: This type of security is about protecting things that you can touch and see in the real world. It includes keeping your belongings safe and making sure that places like your home and school are secure. Examples of Physical Security: Locks: We use locks on doors and windows to keep our homes safe from people who might try to get inside without permission. Fences: Around playgrounds and parks, fences help keep us safe by making sure we stay inside where it’s safe to play. Security Guards: In places like malls and big buildings, security guards help watch over everything and make sure everyone stays safe. Digital Security: Digital security is about keeping things safe on computers, tablets, and the internet. It’s like putting a lock on your online games and making sure only your friends can see your pictures. Examples of Digital Security: Passwords: When you play games or use apps on your tablet, you use passwords to keep them safe. A strong password is like a secret code that only you know. Privacy Settings: On websites and apps, there are settings that let you choose who can see your information. It’s important to check these settings to make sure your information is safe. Not Sharing Personal Information: Online, it’s important not to share things like your full name, address, or phone number with people you don’t know.  ',
      'Why is Security Important? Security is important for many reasons: Keeps Us Safe: Security measures like locks and fences help us stay safe by keeping bad things away from us. Protects Our Things: When we lock our bikes or our toys, it makes sure they don’t get taken by someone else. Privacy: Digital security helps us keep our personal information, like our names and addresses, safe from people we don’t know. Examples of Security Measures Let’s explore some examples of how we use security measures in our daily lives: At Home: Locks: We use locks on our doors to keep our homes safe when we’re inside sleeping or playing. Windows: Closing and locking windows helps keep our homes safe from people who might try to get inside. At School: School Gates: Fences and gates around schools help keep strangers out and students safe inside. Visitor Policies: Schools have rules about who can come inside to make sure only safe people are allowed in. Online: Passwords: Using strong passwords for your online games and apps helps keep them safe from people who shouldn’t be using them. Privacy Settings: On websites and apps, setting privacy options helps control who can see your information, like pictures and messages.',
      'Staying Safe Online When we use the internet, we need to be extra careful to stay safe: Use Strong Passwords: Make sure your passwords are hard for other people to guess. Use a mix of letters, numbers, and symbols. Don’t Share Personal Information: Never share things like your full name, address, phone number, or school name with people you don’t know online. Ask for Help: If something online makes you feel uncomfortable or scared, always tell a grown-up you trust. They can help you stay safe. Conclusion Security is all about keeping ourselves, our belongings, and our information safe from harm. Whether it’s using locks on our doors, fences around our playgrounds, or passwords for our online games, security helps us feel safe and protected in our daily lives. Remember to always be aware of your surroundings and to use security measures like passwords and privacy settings to keep yourself safe online too. By understanding and practicing these security measures, you can become a smart and safe kid both in the real world and on the internet. Always remember that staying safe is important, and you can help others stay safe too by sharing what you’ve learned about security.'
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
    image: 'https://www.ccsipro.com/wp-content/uploads/2023/05/iStock-808424876-1536x864.jpg',
    slides: [
      'What are Passwords? Passwords are like secret codes that you create to keep your things safe on computers, tablets, and even some toys. They are important because they help protect your games, apps, and other online accounts from people who shouldn’t be using them. Why Do We Use Passwords? We use passwords for several important reasons: Security: Passwords help keep your things safe from people who might try to use them without your permission. Privacy: They protect your personal information, like your games, pictures, and messages, from others who shouldn’t see them. Control: With a password, you can decide who gets to use your things and when. Creating a Strong Password A strong password is hard for other people to guess, even if they know you well. Here’s how you can create a strong password: Mix It Up: Use a combination of letters (both uppercase and lowercase), numbers, and symbols (!, @, #, $, etc.). Avoid Personal Info: Don’t use things like your name, birthday, or favorite sports team in your password. Length Matters: The longer your password, the harder it is for someone to guess. Aim for at least 8 characters.',
      'Examples of Strong Passwords Here are some examples of strong passwords that you can create: Good Password: P@ssw0rd!, Strong Password: Sunsh!ne2Day$2023, Secure Password: Tr3@sureHunt3r$2k24!, Remember, it’s important to keep your password a secret and not share it with anyone, except for a grown-up you trust, like your parents or a teacher. Using Passwords Safely - Now that you know how to create a strong password, here are some tips for using passwords safely: Don’t Write It Down: Keep your password in your head instead of writing it down where someone might find it. Change It Sometimes: Every few months, it’s a good idea to change your password to keep your accounts extra safe. Don’t Share: Never share your password with friends, even if they ask nicely. It’s important to keep it a secret.',
      'Password Rules - When you create a password, there are some rules you should follow to make sure it’s strong and secure: Use Different Passwords: Don’t use the same password for all your accounts. If someone figures out one password, they shouldn’t be able to use it to access all your things. Be Creative: Think of something that only you would know and that would be hard for others to guess. Conclusion - Passwords are like secret keys that help keep your games, pictures, and other online things safe and private. By creating strong passwords and keeping them to yourself, you can stay in control of who gets to use your things. Remember to always be smart about passwords and ask for help if you’re not sure what to do. By understanding how to create and use strong passwords, you can be a smart and safe user of computers and the internet!'
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
    image: 'https://us.v-cdn.net/6036147/uploads/O07GV2DRAA0T/l-02-6-1-1200x675.jpg',
    slides: [
      'The internet is a wonderful place where we can play games, watch videos, learn new things, and stay connected with our friends. However, just like in the real world, there are certain rules and practices we need to follow to stay safe online. This chapter will help you understand how to stay safe on the internet by following simple but important guidelines. What is Internet Safety? Internet safety refers to the practices and precautions we take to protect ourselves from harm while using the internet. This includes keeping our personal information private, being aware of potential dangers, and knowing how to handle situations that make us feel uncomfortable or unsafe. Why is Internet Safety Important? Protects Your Personal Information: Keeping your personal details private helps prevent identity theft and protects your privacy. Prevents Cyberbullying: Understanding how to behave and respond online can help prevent and address cyberbullying. Keeps You Safe from Online Predators: Knowing how to recognize and avoid potential dangers can keep you safe from individuals with bad intentions. Helps You Avoid Scams: Learning to identify scams and phishing attempts can prevent you from falling victim to fraud.',
      'Key Internet Safety Tips Use Strong Passwords: Create passwords that are hard for others to guess but easy for you to remember. Use a mix of letters (both uppercase and lowercase), numbers, and symbols. Avoid using obvious passwords like "123456" or "password". Change your passwords regularly and don’t share them with anyone except your parents or a trusted adult. Protect Your Personal Information: Never share your full name, address, phone number, school name, or any other personal details with strangers online. Be cautious about sharing your location. Turn off location services on apps when not needed. Think Before You Post: Remember that anything you post online can be seen by many people and can stay online forever. Before posting, ask yourself if you’d be comfortable with your family, teachers, or future employers seeing it. Avoid posting pictures or information that might give away too much about your personal life. Be Aware of Privacy Settings: Use the privacy settings on social media platforms to control who can see your information. Adjust settings so that only friends and family can see your posts. Regularly check and update your privacy settings as needed. Recognize and Avoid Scams: Be skeptical of emails, messages, or pop-ups that ask for your personal information or offer something that seems too good to be true. Don’t click on links or download attachments from unknown or suspicious sources. Be Cautious with Online Friends: It’s fun to make new friends online, but be careful about sharing personal information with people you don’t know in real life. Never agree to meet someone in person that you’ve only met online without talking to your parents or a trusted adult first. Handle Cyberbullying Properly: If someone is mean to you online or makes you feel uncomfortable, don’t respond. Instead, save the messages and tell a trusted adult. Block and report anyone who bullies you online. Use Secure Websites: When shopping or entering personal information online, make sure the website is secure. Look for a padlock symbol in the address bar and ensure the URL starts with "https://". Avoid using public Wi-Fi for transactions or accessing sensitive information. Ask for Help: If you ever feel unsure about something online, talk to a trusted adult. They can help you understand what’s safe and what’s not. Report any suspicious or harmful behavior to a trusted adult, teacher, or through the reporting tools on the website or app.',
      'Common Internet Safety Scenarios - Phishing Emails: Imagine you receive an email that looks like it’s from your favorite online game asking you to log in to claim a prize. The email asks for your username and password. What should you do? Answer: Don’t click on the link or provide your information. It might be a phishing attempt to steal your login details. Instead, go to the official website directly and check if the offer is real. Friend Request from a Stranger: You get a friend request on social media from someone you don’t know. They have a profile picture and some posts, but you’ve never met them before. What should you do? Answer: It’s best to ignore or decline friend requests from people you don’t know in real life. If you’re unsure, talk to a parent or a trusted adult. Cyberbullying: Someone from your school starts sending you mean messages online and posting hurtful comments about you. What should you do? Answer: Don’t respond to the messages. Save the evidence by taking screenshots and show them to a trusted adult. Block the person and report the behavior to the platform. Conclusion- Internet safety is essential to protect yourself from potential dangers online. By using strong passwords, protecting your personal information, thinking before you post, and being cautious with online friends, you can enjoy the internet safely. Remember, if something feels wrong or makes you uncomfortable, always talk to a trusted adult. Staying informed and aware is the key to being a responsible and safe internet user. By following these guidelines, you can make the most of the internet while keeping yourself safe. Always remember that the internet is a powerful tool, and with great power comes great responsibility. Stay safe, stay smart, and enjoy your time online!'
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
    image: 'https://d12jofbmgge65s.cloudfront.net/wp-content/uploads/2023/02/effects_of_cyberbullying_blog_WIP-1536x804.png',
    slides: [
      'Introduction to Cyberbullying - In todays digital age, we use the internet for everything from playing games and doing homework to chatting with friends and sharing photos. While the internet offers many exciting opportunities, it also comes with its own set of challenges. One of the most serious challenges young people face online is cyberbullying. In this chapter, we will explore what cyberbullying is, its effects, and how we can prevent it. What is Cyberbullying?  Cyberbullying is when someone uses the internet, social media, or other digital technologies to harass, threaten, or humiliate another person. Unlike traditional bullying, cyberbullying can happen anytime and anywhere, as long as someone has access to the internet. Forms of Cyberbullying: Harassing Messages: Sending mean or threatening messages through texts, emails, or social media. Spreading Rumors: Posting or sharing false information about someone to damage their reputation. Exclusion: Intentionally leaving someone out of online groups, games, or activities. Impersonation: Pretending to be someone else online to harm that person or their reputation. Cyberstalking: Repeatedly sending messages that are threatening or intimidating. Why is Cyberbullying Serious? Cyberbullying can have serious emotional and psychological effects on the person being bullied. Because it happens online, it can feel like there’s no escape. Here are some reasons why cyberbullying is so serious: Emotional Impact: Victims of cyberbullying often feel sad, angry, and scared. It can lead to feelings of isolation and loneliness. Mental Health: Persistent bullying can lead to depression, anxiety, and even thoughts of self-harm or suicide. Academic Performance: Being bullied can make it hard to concentrate on schoolwork, leading to lower grades and a lack of interest in school. Physical Health: Stress from being bullied can cause headaches, stomachaches, and other physical symptoms. Signs of Cyberbullying It’s important to recognize the signs that someone might be experiencing cyberbullying. These can include: Changes in Mood: Sudden changes in behavior, such as becoming withdrawn, sad, or anxious. Avoiding School or Social Activities: Not wanting to go to school or participate in activities they once enjoyed. Decline in Academic Performance: Struggling with schoolwork or losing interest in school. Changes in Online Behavior: Becoming secretive about their online activities or spending more or less time online than usual.',
      'How to Prevent Cyberbullying Preventing cyberbullying starts with understanding how to use the internet safely and respectfully. Here are some tips to help prevent cyberbullying: Be Kind Online: Treat others with respect and kindness online, just as you would in person. Think Before You Post: Before sharing something online, think about how it might affect others. Keep Personal Information Private: Don’t share personal details like your address, phone number, or school online. Use Privacy Settings: Adjust privacy settings on social media to control who can see your posts and personal information. Don’t Respond to Bullies: If someone is trying to bully you online, don’t respond. Instead, save the evidence and tell a trusted adult. Block and Report: Most social media platforms have options to block and report bullies. Use these features to protect yourself and others. What to Do If You Are Being Cyberbullied If you or someone you know is being cyberbullied, it’s important to take action to stop it. Here are some steps you can take: Tell a Trusted Adult: Talk to a parent, teacher, or another trusted adult about what’s happening. They can help you figure out the best way to handle the situation. Save the Evidence: Keep copies of any mean or threatening messages, posts, or emails. This can be useful if you need to report the bullying. Don’t Engage: Avoid responding to the bully. Engaging with them can often make things worse. Block the Bully: Use the block feature on social media and other online platforms to prevent the bully from contacting you. Report the Bullying: Report the bully to the website or platform where the bullying is happening. Most platforms take bullying seriously and will take action to stop it.',
      'Supporting Someone Who Is Being Cyberbullied If you know someone who is being cyberbullied, you can help by being a supportive friend. Here are some ways to help: Listen and Offer Support: Let them know you care and are there to listen. Sometimes, just knowing someone cares can make a big difference. Encourage Them to Speak Up: Encourage your friend to talk to a trusted adult about what’s happening. Stand Up for Them: If it’s safe to do so, stand up for your friend online. Sometimes, just showing that someone has support can discourage the bully. Include Them in Activities: Help your friend feel included and valued by inviting them to join in activities and spend time together. Conclusion - Cyberbullying is a serious issue that can have lasting effects on those who experience it. By understanding what cyberbullying is, recognizing the signs, and knowing how to prevent and respond to it, we can help create a safer and more respectful online environment. Remember, everyone deserves to feel safe and respected, both online and offline. Let’s work together to stop cyberbullying and support those who are affected by it.'
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
    image: 'https://d2z0k1elb7rxgj.cloudfront.net/uploads/2019/12/data-privacy-example-1024x768.jpg',
    slides: [
      'Introduction to Data Privacy In todays digital world, we share a lot of information online, from our names and photos to our likes and dislikes. Data privacy is all about protecting this personal information from being seen or used by people who shouldn’t have access to it. Just like you wouldnt want a stranger to know all about your private life, we need to make sure our information stays safe online. What is Data Privacy? Data privacy refers to the practices and measures we use to ensure that our personal information is kept secure and is only shared with people we trust. It’s about making sure that our private information stays private and is only used in ways that we agree with. Why is Data Privacy Important? Data privacy is crucial for several reasons: Protects Personal Information: It keeps sensitive information like your address, phone number, and birthday safe from people who might misuse it. Prevents Identity Theft: When someone gets hold of your personal information, they might pretend to be you, which can cause a lot of problems. Maintains Trust: When we know our information is secure, we feel more comfortable using websites and apps. Ensures Control: Data privacy allows us to control who sees our information and how it is used. Examples of Personal Data Personal data can include a wide range of information about you: Basic Information: Name, address, phone number, and email address. Sensitive Information: Birthdate, social security number, and financial information. Online Activity: Photos, posts, and messages on social media, as well as your browsing history. Preferences: Likes, dislikes, and interests shown through your online activity. How to Protect Your Data Privacy Protecting your data privacy involves being careful about what you share online and who you share it with. ',
      'Here are some tips to help you keep your personal information safe: Use Strong Passwords: Create passwords that are difficult for others to guess. Use a mix of letters, numbers, and symbols. Avoid using easily guessable passwords like “123456” or “password.” Adjust Privacy Settings: On social media and other websites, use the privacy settings to control who can see your information. Make sure only friends and family can see personal details and posts. Be Cautious About Sharing Information: Think twice before sharing personal information like your address or phone number online. Avoid sharing sensitive information through unsecured channels. Use Secure Websites: Look for “https” in the website address, which indicates that the site is secure. Avoid entering personal information on websites that don’t have this security feature. Be Aware of Phishing Scams: Don’t click on suspicious links or open emails from people you don’t know. Scammers often try to trick you into giving away your personal information through fake websites or emails. Keep Software Updated: Make sure your computer, phone, and apps are always updated with the latest security patches. This helps protect against viruses and other security threats.',
      'Understanding Terms of Service and Privacy Policies When you sign up for a new website or app, you often have to agree to the terms of service and privacy policy. These documents explain how the company will use your data and what rights you have. It’s important to: Read the Privacy Policy: Understand what information the company collects and how they plan to use it. Know Your Rights: Some policies explain how you can control your data or request that it be deleted. Real-World Examples of Data Privacy Issues To better understand the importance of data privacy, lets look at some real-world examples where data privacy was compromised: Data Breaches: When a company’s security is broken, hackers can steal personal information of millions of users. This can lead to identity theft and other problems for those affected. Social Media Oversharing: Sharing too much information on social media can lead to unwanted attention or even theft if someone knows you’re not home. Phishing Scams: People receive fake emails pretending to be from banks or other trusted sources, tricking them into giving away personal information. Conclusion Data privacy is essential in today’s digital age. It helps protect your personal information, prevents identity theft, and ensures you have control over who sees your data and how it is used. By using strong passwords, adjusting privacy settings, being cautious about sharing information, using secure websites, being aware of phishing scams, and keeping your software updated, you can protect your data privacy. Remember, just as you wouldn’t give out personal details to strangers in real life, you should also be careful about what you share online. Stay informed and take steps to ensure your data remains private and secure. By practicing good data privacy habits, you can enjoy the benefits of the internet while keeping your personal information safe and secure.'
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
