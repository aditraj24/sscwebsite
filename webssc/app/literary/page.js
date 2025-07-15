"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calendar, User, FileText, X } from "lucide-react";

// Sample literary works data
const literaryWorks = {
  english: [
    {
      id: 1,
      title: "The Power of Communication",
      author: "Kumar Raunak",
      date: "2024-01-15",
      content: "Communication is not just about speaking; it's about connecting. In today's interconnected world, the ability to convey ideas clearly and persuasively has become more crucial than ever. This piece explores the fundamental principles of effective communication and how they can transform our personal and professional relationships...",
      fullContent: `Communication is not just about speaking; it's about connecting. In today's interconnected world, the ability to convey ideas clearly and persuasively has become more crucial than ever. This piece explores the fundamental principles of effective communication and how they can transform our personal and professional relationships.

The foundation of effective communication lies in understanding that it's a two-way process. It's not just about transmitting information; it's about ensuring that the message is received, understood, and acted upon as intended. This requires active listening, empathy, and the ability to adapt our communication style to different audiences and contexts.

One of the most important aspects of communication is clarity. Whether we're writing an email, giving a presentation, or having a conversation, our message should be clear, concise, and well-structured. This means avoiding jargon when speaking to non-experts, using concrete examples to illustrate abstract concepts, and organizing our thoughts in a logical sequence.

Another crucial element is empathy. Understanding the perspective of our audience helps us tailor our message appropriately. This involves considering their background, knowledge level, and potential concerns. When we communicate with empathy, we're more likely to build trust and create meaningful connections.

Non-verbal communication also plays a significant role. Our body language, facial expressions, and tone of voice can convey as much meaning as our words. Being aware of these signals and ensuring they align with our verbal message is essential for effective communication.

In professional settings, communication skills can make the difference between success and failure. Whether it's negotiating a deal, leading a team, or presenting to stakeholders, the ability to communicate effectively is often the key differentiator. It's not just about what we say, but how we say it, when we say it, and to whom we say it.

The digital age has introduced new challenges and opportunities for communication. While technology has made it easier to connect with people across the globe, it has also created barriers to meaningful interaction. The absence of non-verbal cues in digital communication can lead to misunderstandings, and the constant flow of information can make it difficult to capture and maintain attention.

To navigate these challenges, we must adapt our communication strategies. This might involve using more visual elements in digital presentations, being more explicit about our intentions in written communication, or finding ways to create personal connections in virtual environments.

Ultimately, the power of communication lies in its ability to bridge gaps, build relationships, and drive positive change. When we communicate effectively, we can inspire others, resolve conflicts, and create opportunities for collaboration and growth. It's a skill that requires continuous practice and refinement, but the rewards are immeasurable.

As we continue to develop our communication skills, we should remember that every interaction is an opportunity to learn and improve. Whether the outcome is positive or negative, there's always something to be gained from reflecting on our communication experiences and identifying areas for improvement.

The journey toward becoming a better communicator is ongoing, but with dedication and practice, we can all develop the skills needed to connect more effectively with others and make a positive impact in our personal and professional lives.`,
      category: "Essay",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Leadership in the Digital Age",
      author: "Shiwangi Kumari",
      date: "2024-01-20",
      content: "As we navigate through the complexities of the digital era, leadership has evolved beyond traditional hierarchical structures. Modern leaders must adapt to rapid technological changes while maintaining human connection and empathy. This article delves into the essential qualities that define successful leadership in contemporary times...",
      fullContent: `As we navigate through the complexities of the digital era, leadership has evolved beyond traditional hierarchical structures. Modern leaders must adapt to rapid technological changes while maintaining human connection and empathy. This article delves into the essential qualities that define successful leadership in contemporary times.

The digital transformation has fundamentally changed how organizations operate, communicate, and compete. Leaders today must navigate a landscape where change is constant, information flows freely, and traditional boundaries between industries are blurring. This requires a new set of skills and mindsets that go beyond the conventional command-and-control approach.

One of the most critical qualities for digital-age leaders is adaptability. The pace of technological change means that strategies and approaches that worked yesterday may be obsolete tomorrow. Leaders must be willing to learn continuously, experiment with new approaches, and pivot when necessary. This requires a growth mindset and the ability to embrace uncertainty.

Digital literacy is another essential skill. While leaders don't need to be technical experts, they must understand how technology impacts their business and industry. This includes knowledge of emerging technologies, digital platforms, and data analytics. Leaders who can speak the language of technology are better equipped to make informed decisions and communicate effectively with technical teams.

Emotional intelligence remains crucial in the digital age. As automation and artificial intelligence take over routine tasks, the human aspects of leadership become even more important. Leaders must be able to inspire, motivate, and connect with their teams on a personal level. This includes understanding individual motivations, providing meaningful feedback, and creating a culture of psychological safety.

Collaboration and networking skills are also essential. The digital age has made it easier to connect with people across the globe, but it has also made competition more intense. Leaders must be able to build and maintain relationships with diverse stakeholders, including customers, partners, employees, and investors. This requires strong communication skills, cultural sensitivity, and the ability to find common ground.

Innovation and creativity are more important than ever. In a world where products and services can be copied quickly, the ability to innovate and create unique value propositions is crucial. Leaders must foster a culture of creativity, encourage experimentation, and be willing to take calculated risks.

Data-driven decision making is another key aspect of modern leadership. The availability of vast amounts of data means that leaders can make more informed decisions than ever before. However, this also requires the ability to interpret data correctly, ask the right questions, and avoid analysis paralysis.

Agility and speed are essential in the digital age. Organizations must be able to respond quickly to changing market conditions, customer needs, and competitive threats. This requires leaders who can make decisions quickly, empower their teams to act autonomously, and create processes that enable rapid execution.

Sustainability and social responsibility are increasingly important considerations for leaders. As awareness of environmental and social issues grows, organizations are expected to operate responsibly and contribute positively to society. Leaders must balance short-term performance with long-term sustainability and consider the broader impact of their decisions.

The digital age has also changed how leaders communicate and engage with their teams. Traditional top-down communication is being replaced by more collaborative and transparent approaches. Leaders must be comfortable with social media, digital platforms, and new communication tools. They must also be willing to share information openly and engage in two-way conversations with their teams.

Mentorship and development are crucial for building the next generation of leaders. As the pace of change accelerates, organizations need leaders at all levels who can adapt and grow. Senior leaders must invest time in developing their teams, providing opportunities for growth, and creating a pipeline of future leaders.

Resilience and mental toughness are essential qualities for digital-age leaders. The constant pressure to perform, adapt, and innovate can be overwhelming. Leaders must be able to manage stress, maintain perspective, and bounce back from setbacks. This requires self-awareness, emotional regulation, and a strong support network.

Ultimately, leadership in the digital age is about balancing the human and technological aspects of organizational success. While technology provides powerful tools and opportunities, it's the human qualities of leadership that will determine long-term success. Leaders who can combine technical understanding with emotional intelligence, adaptability with stability, and innovation with execution will be best positioned to thrive in the digital era.

The journey of digital leadership is ongoing and requires continuous learning and adaptation. By developing these essential qualities and staying attuned to emerging trends and technologies, leaders can navigate the complexities of the digital age and create lasting value for their organizations and stakeholders.`,
      category: "Article",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Art of Public Speaking",
      author: "Amarjeet Ahuja",
      date: "2024-02-05",
      content: "Public speaking is an art that combines confidence, preparation, and authenticity. Whether addressing a small group or a large audience, the principles remain the same. This comprehensive guide covers everything from overcoming stage fright to crafting compelling narratives that resonate with your audience...",
      fullContent: `Public speaking is an art that combines confidence, preparation, and authenticity. Whether addressing a small group or a large audience, the principles remain the same. This comprehensive guide covers everything from overcoming stage fright to crafting compelling narratives that resonate with your audience.

The foundation of effective public speaking lies in thorough preparation. This begins with understanding your audience - their background, interests, and expectations. Research your topic extensively, gather relevant examples and statistics, and organize your thoughts in a logical structure. The more prepared you are, the more confident you'll feel when you step onto the stage.

Content organization is crucial for keeping your audience engaged. Start with a strong opening that captures attention - this could be a compelling story, a surprising statistic, or a thought-provoking question. Follow this with a clear preview of what you'll cover, then deliver your main points with supporting evidence, and conclude with a memorable summary that reinforces your key message.

Storytelling is one of the most powerful tools in public speaking. Humans are naturally drawn to stories, and they help make abstract concepts concrete and memorable. Incorporate personal anecdotes, case studies, or historical examples that illustrate your points. When you tell a story, you're not just sharing information; you're creating an emotional connection with your audience.

Body language and non-verbal communication play a significant role in how your message is received. Stand tall with your shoulders back, make eye contact with different sections of the audience, and use purposeful gestures to emphasize key points. Your posture and movements should convey confidence and enthusiasm for your topic.

Voice modulation is another important aspect of effective public speaking. Vary your pitch, pace, and volume to maintain interest and emphasize important points. Use pauses strategically to let key ideas sink in and to give yourself time to collect your thoughts. A monotone voice can make even the most interesting content seem dull.

Managing nervousness is a challenge that most speakers face. The key is to channel that nervous energy into enthusiasm for your topic. Practice deep breathing exercises before speaking, visualize yourself succeeding, and remember that some nervousness is normal and can actually enhance your performance. The more you practice, the more comfortable you'll become.

Audience engagement is essential for maintaining interest and ensuring your message is understood. Ask rhetorical questions, encourage participation when appropriate, and be responsive to audience reactions. If you notice people looking confused or disengaged, be willing to adjust your approach or provide additional clarification.

Visual aids can enhance your presentation, but they should support rather than replace your spoken words. Keep slides simple and uncluttered, use high-quality images and graphics, and ensure that any text is large enough to be read from the back of the room. Remember that you are the main focus, not your slides.

Handling questions and interactions requires preparation and flexibility. Anticipate potential questions and prepare thoughtful responses. When answering, be concise but thorough, and don't be afraid to admit if you don't know something - offer to follow up later with more information.

Practice is essential for developing public speaking skills. Rehearse your presentation multiple times, ideally in front of a mirror or with a trusted friend who can provide feedback. Record yourself to identify areas for improvement, and practice in conditions similar to those you'll face during the actual presentation.

Authenticity is perhaps the most important quality of effective public speakers. Be yourself, speak from the heart, and let your passion for the topic shine through. Audiences can sense when someone is being genuine, and this creates a stronger connection than perfect delivery of someone else's words.

Continuous improvement is a lifelong journey for public speakers. Seek feedback from trusted sources, attend workshops and training sessions, and study the techniques of speakers you admire. Every presentation is an opportunity to learn and grow, regardless of how it goes.

Technology has opened new opportunities for public speaking through virtual platforms and recorded presentations. While the core principles remain the same, virtual speaking requires additional considerations such as camera positioning, lighting, and managing technical issues. Practice in the virtual environment you'll be using.

Cultural sensitivity is increasingly important in our globalized world. Be aware of cultural differences in communication styles, gestures, and topics that might be considered sensitive. Research your audience's cultural background and adapt your approach accordingly.

The impact of effective public speaking extends far beyond the immediate presentation. It can inspire action, change perspectives, and create lasting connections. Whether you're speaking to inform, persuade, or entertain, your words have the power to make a difference in the lives of your audience members.

Remember that every great speaker started somewhere, and even the most experienced presenters continue to learn and improve. Focus on your message and your audience rather than on being perfect. With practice, preparation, and persistence, anyone can become a confident and effective public speaker.

The art of public speaking is not about being the most eloquent or charismatic person in the room; it's about connecting with your audience, sharing valuable insights, and inspiring positive change. When you speak with authenticity, preparation, and genuine care for your audience, you'll find that public speaking becomes not just a skill, but a powerful tool for making a difference in the world.`,
      category: "Guide",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Building Effective Teams",
      author: "Sanaya Singh",
      date: "2024-02-12",
      content: "Teamwork is the foundation of success in any organization. But building and maintaining effective teams requires more than just bringing people together. This piece explores the dynamics of team formation, conflict resolution, and creating an environment where every member can thrive and contribute their best...",
      fullContent: `Teamwork is the foundation of success in any organization. But building and maintaining effective teams requires more than just bringing people together. This piece explores the dynamics of team formation, conflict resolution, and creating an environment where every member can thrive and contribute their best.

The journey of building an effective team begins with understanding that a team is more than just a collection of individuals. It's a dynamic system where each member's strengths, weaknesses, and interactions create a unique culture and capability. The most successful teams are those that leverage diversity while maintaining unity of purpose.

Team formation typically follows a predictable pattern: forming, storming, norming, and performing. During the forming stage, team members are polite and cautious as they get to know each other. The storming phase brings conflicts and challenges as individuals assert their ideas and preferences. Norming occurs when the team establishes working relationships and processes, and performing is when the team reaches peak productivity and collaboration.

Clear communication is the cornerstone of effective teamwork. This includes not only sharing information but also ensuring that everyone understands the team's goals, roles, and expectations. Regular check-ins, transparent decision-making processes, and open channels for feedback help maintain alignment and prevent misunderstandings.

Role clarity is essential for team effectiveness. Each team member should understand their responsibilities, how their work contributes to the team's goals, and how their role relates to others. This doesn't mean rigid job descriptions, but rather a shared understanding of who does what and why.

Trust is the foundation upon which all successful teams are built. Trust develops when team members demonstrate reliability, competence, and integrity over time. It's fostered through consistent behavior, keeping commitments, and being honest about challenges and mistakes. Without trust, collaboration becomes difficult and team performance suffers.

Diversity in teams brings different perspectives, skills, and approaches to problem-solving. However, diversity alone is not enough; teams must also be inclusive, ensuring that all voices are heard and valued. This requires conscious effort to create an environment where everyone feels comfortable sharing their ideas and concerns.

Conflict is inevitable in any team, but it's not necessarily destructive. Healthy conflict can lead to better decisions, innovation, and stronger relationships when managed constructively. The key is to focus on issues rather than personalities, encourage open dialogue, and seek solutions that benefit the team as a whole.

Leadership within teams can take many forms. While formal leaders provide direction and support, informal leaders often emerge based on expertise, influence, or ability to motivate others. The most effective teams have multiple leaders who step up in different situations and complement each other's strengths.

Goal alignment ensures that all team members are working toward the same objectives. This requires regular communication about priorities, progress, and any changes in direction. When team members understand how their individual contributions fit into the larger picture, they're more motivated and engaged.

Performance management in teams involves both individual and collective accountability. Regular feedback, recognition of achievements, and constructive criticism help team members grow and improve. Celebrating team successes and learning from failures together strengthens bonds and builds resilience.

Technology plays an increasingly important role in team collaboration, especially in remote or hybrid work environments. The right tools can facilitate communication, project management, and knowledge sharing. However, technology should enhance rather than replace human connection and interaction.

Team culture develops over time through shared experiences, values, and norms. A positive team culture is characterized by mutual respect, support, and a commitment to excellence. Leaders and team members alike contribute to shaping this culture through their words, actions, and decisions.

Continuous learning and development are essential for maintaining team effectiveness. This includes both individual skill development and team process improvement. Regular retrospectives, training opportunities, and knowledge sharing help teams adapt to changing circumstances and stay competitive.

Work-life balance and well-being are increasingly recognized as important factors in team performance. Teams that support their members' physical and mental health tend to be more productive, creative, and resilient. This includes respecting boundaries, providing flexibility when possible, and creating a supportive environment.

The impact of effective teams extends beyond individual organizations. Teams that work well together can achieve remarkable results, solve complex problems, and create innovative solutions. They serve as models for collaboration and demonstrate what's possible when people work together toward common goals.

Building and maintaining effective teams is an ongoing process that requires attention, effort, and commitment from all team members. It's not always easy, but the rewards of working in a high-performing team - increased productivity, job satisfaction, and personal growth - make the effort worthwhile.

The most successful teams are those that continuously evolve and adapt. They learn from their experiences, embrace change, and remain committed to their shared purpose. By focusing on the fundamentals of effective teamwork while remaining flexible and responsive to new challenges, any team can achieve extraordinary results.`,
      category: "Analysis",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "The Psychology of Persuasion",
      author: "Satwik Pal",
      date: "2024-02-18",
      content: "Understanding how people think and what motivates them to take action is crucial for effective persuasion. This article examines the psychological principles behind successful persuasion techniques, from establishing credibility to creating emotional connections that drive decision-making...",
      fullContent: `Understanding how people think and what motivates them to take action is crucial for effective persuasion. This article examines the psychological principles behind successful persuasion techniques, from establishing credibility to creating emotional connections that drive decision-making.

Persuasion is fundamentally about influencing others to change their attitudes, beliefs, or behaviors. While it's often associated with sales and marketing, persuasion is a skill that's valuable in many contexts - from leadership and negotiation to education and advocacy. Understanding the psychology behind persuasion can help us become more effective communicators and make better decisions.

Credibility is the foundation of effective persuasion. People are more likely to be persuaded by sources they perceive as trustworthy, competent, and reliable. Credibility can be established through expertise, experience, credentials, or reputation. However, it's important to note that credibility is not just about qualifications; it's also about how you present yourself and your message.

The principle of reciprocity suggests that people feel obligated to return favors or concessions. When you give something to someone - whether it's information, help, or a small gift - they're more likely to respond positively to your requests. This principle is often used in marketing through free samples, trials, or valuable content that creates a sense of indebtedness.

Social proof is another powerful persuasion principle. People look to others to determine what's appropriate or correct, especially in uncertain situations. Testimonials, reviews, case studies, and examples of others' behavior can be highly persuasive because they provide evidence that others have made similar decisions or taken similar actions.

The principle of authority suggests that people are more likely to follow the advice or recommendations of perceived experts or authority figures. This is why endorsements from respected individuals, certifications, and professional credentials can be so effective. However, it's important to use authority ethically and ensure that the authority is relevant to the topic at hand.

Scarcity creates urgency and increases perceived value. When people believe that something is rare, limited, or time-sensitive, they're more likely to act quickly to secure it. This principle is commonly used in marketing through limited-time offers, exclusive access, or highlighting unique features that aren't available elsewhere.

Liking is a simple but powerful principle: people are more likely to be persuaded by those they like. This can be achieved through similarity, compliments, cooperation, and positive associations. Building rapport and finding common ground with your audience can significantly increase your persuasive effectiveness.

Commitment and consistency are important psychological drivers. Once people make a commitment or take a position, they're more likely to act in ways that are consistent with that commitment. This is why getting small commitments can lead to larger ones, and why it's important to help people see how their actions align with their stated values and beliefs.

Emotional appeals can be highly effective in persuasion, often more so than purely logical arguments. Emotions influence decision-making by affecting how people process information and what they remember. Stories, vivid examples, and emotional language can create connections and motivate action in ways that facts and figures alone cannot.

Framing refers to how information is presented and can significantly influence how people perceive and respond to it. The same information can be framed positively or negatively, as a gain or a loss, or in terms of different values or priorities. Understanding your audience's perspective and framing your message accordingly can increase its effectiveness.

Timing and context are crucial factors in persuasion. People are more receptive to certain messages at certain times, and the context in which a message is delivered can significantly impact its effectiveness. Understanding when and where to deliver your message can be as important as the message itself.

Ethical persuasion is about influencing others in ways that are honest, respectful, and beneficial to all parties involved. It's important to avoid manipulation, deception, or coercion, which can damage relationships and trust. Ethical persuasion focuses on creating mutual understanding and helping others make informed decisions.

Resistance to persuasion is natural and can serve as a protective mechanism against manipulation. Understanding the factors that contribute to resistance - such as reactance, skepticism, and prior commitments - can help you address concerns and build trust. It's important to respect people's autonomy and right to make their own decisions.

Cultural factors play a significant role in persuasion. Different cultures have different norms, values, and communication styles that influence how persuasive messages are received and processed. Understanding and respecting cultural differences is essential for effective cross-cultural persuasion.

The digital age has created new opportunities and challenges for persuasion. Social media, online reviews, and digital communication have changed how people form opinions and make decisions. Understanding these new channels and how people use them is essential for effective persuasion in the modern world.

Continuous learning and adaptation are essential for effective persuasion. What works in one situation or with one audience may not work in another. Being willing to experiment, learn from feedback, and adjust your approach based on results is crucial for long-term success.

The psychology of persuasion is not about manipulation or trickery; it's about understanding human nature and using that understanding to communicate more effectively. When used ethically and responsibly, persuasion can help create positive change, build stronger relationships, and achieve mutually beneficial outcomes.

By studying and applying these psychological principles, we can become more effective communicators and make better decisions about when and how to influence others. The key is to use these insights responsibly, with respect for others' autonomy and a commitment to ethical communication.`,
      category: "Research",
      readTime: "9 min read"
    }
  ],
  hindi: [
    {
      id: 1,
      title: "संवाद की शक्ति",
      author: "कुमार रौनक",
      date: "2024-01-16",
      content: "संवाद सिर्फ बोलने का नाम नहीं है; यह जुड़ने का नाम है। आज के परस्पर जुड़े हुए विश्व में, विचारों को स्पष्ट और प्रभावशाली तरीके से व्यक्त करने की क्षमता पहले से कहीं अधिक महत्वपूर्ण हो गई है। यह लेख प्रभावी संवाद के मूल सिद्धांतों की खोज करता है...",
      fullContent: `संवाद सिर्फ बोलने का नाम नहीं है; यह जुड़ने का नाम है। आज के परस्पर जुड़े हुए विश्व में, विचारों को स्पष्ट और प्रभावशाली तरीके से व्यक्त करने की क्षमता पहले से कहीं अधिक महत्वपूर्ण हो गई है। यह लेख प्रभावी संवाद के मूल सिद्धांतों की खोज करता है।

प्रभावी संवाद की नींव यह समझने में निहित है कि यह एक द्विमार्गी प्रक्रिया है। यह सिर्फ जानकारी प्रसारित करने के बारे में नहीं है; यह सुनिश्चित करने के बारे में है कि संदेश प्राप्त, समझा और इच्छित तरीके से कार्यान्वित किया गया है। इसके लिए सक्रिय श्रवण, सहानुभूति और विभिन्न दर्शकों और संदर्भों के अनुकूल अपनी संवाद शैली को अनुकूलित करने की क्षमता की आवश्यकता होती है।

संवाद का सबसे महत्वपूर्ण पहलू स्पष्टता है। चाहे हम ईमेल लिख रहे हों, प्रस्तुति दे रहे हों, या बातचीत कर रहे हों, हमारा संदेश स्पष्ट, संक्षिप्त और अच्छी तरह से संरचित होना चाहिए। इसका मतलब है कि गैर-विशेषज्ञों से बात करते समय जटिल शब्दों से बचना, अमूर्त अवधारणाओं को स्पष्ट करने के लिए ठोस उदाहरणों का उपयोग करना, और अपने विचारों को तार्किक क्रम में व्यवस्थित करना।

एक अन्य महत्वपूर्ण तत्व सहानुभूति है। अपने दर्शकों के दृष्टिकोण को समझने से हमें अपना संदेश उचित रूप से तैयार करने में मदद मिलती है। इसमें उनकी पृष्ठभूमि, ज्ञान स्तर और संभावित चिंताओं पर विचार करना शामिल है। जब हम सहानुभूति के साथ संवाद करते हैं, तो हमें विश्वास बनाने और सार्थक संबंध बनाने की अधिक संभावना होती है।

अशाब्दिक संवाद भी महत्वपूर्ण भूमिका निभाता है। हमारी शारीरिक भाषा, चेहरे के भाव और आवाज का लहजा हमारे शब्दों जितना ही अर्थ व्यक्त कर सकता है। इन संकेतों के प्रति जागरूक होना और सुनिश्चित करना कि वे हमारे मौखिक संदेश के अनुरूप हैं, प्रभावी संवाद के लिए आवश्यक है।

पेशेवर सेटिंग्स में, संवाद कौशल सफलता और विफलता के बीच का अंतर बना सकते हैं। चाहे यह सौदा करना हो, टीम का नेतृत्व करना हो, या हितधारकों को प्रस्तुति देना हो, प्रभावी ढंग से संवाद करने की क्षमता अक्सर महत्वपूर्ण अंतरकारक होती है। यह सिर्फ हम क्या कहते हैं, बल्कि हम इसे कैसे कहते हैं, कब कहते हैं, और किससे कहते हैं, इसके बारे में है।

डिजिटल युग ने संवाद के लिए नई चुनौतियां और अवसर पैदा किए हैं। जबकि प्रौद्योगिकी ने दुनिया भर के लोगों से जुड़ना आसान बना दिया है, इसने सार्थक बातचीत के लिए बाधाएं भी पैदा की हैं। डिजिटल संवाद में अशाब्दिक संकेतों की अनुपस्थिति गलतफहमी का कारण बन सकती है, और जानकारी का निरंतर प्रवाह ध्यान आकर्षित करने और बनाए रखने को कठिन बना सकता है।

इन चुनौतियों को नेविगेट करने के लिए, हमें अपनी संवाद रणनीतियों को अनुकूलित करना चाहिए। इसमें डिजिटल प्रस्तुतियों में अधिक दृश्य तत्वों का उपयोग करना, लिखित संवाद में अपने इरादों के बारे में अधिक स्पष्ट होना, या आभासी वातावरण में व्यक्तिगत संबंध बनाने के तरीके खोजना शामिल हो सकता है।

अंततः, संवाद की शक्ति अंतरालों को पाटने, संबंध बनाने और सकारात्मक परिवर्तन को प्रेरित करने की क्षमता में निहित है। जब हम प्रभावी ढंग से संवाद करते हैं, तो हम दूसरों को प्रेरित कर सकते हैं, संघर्षों को हल कर सकते हैं, और सहयोग और विकास के अवसर पैदा कर सकते हैं। यह एक ऐसा कौशल है जिसके लिए निरंतर अभ्यास और परिशोधन की आवश्यकता होती है, लेकिन पुरस्कार अमूल्य हैं।

जैसे-जैसे हम अपने संवाद कौशल को विकसित करना जारी रखते हैं, हमें याद रखना चाहिए कि हर बातचीत सीखने और सुधारने का अवसर है। चाहे परिणाम सकारात्मक हो या नकारात्मक, हमारे संवाद अनुभवों पर विचार करने और सुधार के क्षेत्रों की पहचान करने से हमेशा कुछ हासिल होता है।

बेहतर संवादकर्ता बनने की यात्रा निरंतर चलती है, लेकिन समर्पण और अभ्यास के साथ, हम सभी दूसरों के साथ अधिक प्रभावी ढंग से जुड़ने और अपने व्यक्तिगत और पेशेवर जीवन में सकारात्मक प्रभाव डालने के लिए आवश्यक कौशल विकसित कर सकते हैं।`,
      category: "निबंध",
      readTime: "5 मिनट का पठन"
    },
    {
      id: 2,
      title: "डिजिटल युग में नेतृत्व",
      author: "शिवांगी कुमारी",
      date: "2024-01-22",
      content: "जैसे-जैसे हम डिजिटल युग की जटिलताओं से गुजर रहे हैं, नेतृत्व पारंपरिक पदानुक्रमिक संरचनाओं से परे विकसित हो गया है। आधुनिक नेताओं को तेज तकनीकी परिवर्तनों के अनुकूल होना चाहिए, साथ ही मानवीय संबंध और सहानुभूति बनाए रखनी चाहिए...",
      category: "लेख",
      readTime: "7 मिनट का पठन"
    },
    {
      id: 3,
      title: "सार्वजनिक भाषण की कला",
      author: "अमरजीत अहूजा",
      date: "2024-02-06",
      content: "सार्वजनिक भाषण एक कला है जो आत्मविश्वास, तैयारी और प्रामाणिकता को जोड़ती है। चाहे छोटे समूह को संबोधित कर रहे हों या बड़े दर्शकों को, सिद्धांत वही रहते हैं। यह व्यापक मार्गदर्शिका स्टेज फ्राइट से लेकर आकर्षक कथाएं बनाने तक सब कुछ कवर करती है...",
      category: "मार्गदर्शिका",
      readTime: "8 मिनट का पठन"
    },
    {
      id: 4,
      title: "प्रभावी टीमों का निर्माण",
      author: "सनाया सिंह",
      date: "2024-02-13",
      content: "टीमवर्क किसी भी संगठन में सफलता की नींव है। लेकिन प्रभावी टीमों का निर्माण और रखरखाव सिर्फ लोगों को एक साथ लाने से कहीं अधिक है। यह लेख टीम गठन की गतिशीलता, संघर्ष समाधान और ऐसे वातावरण के निर्माण की खोज करता है...",
      category: "विश्लेषण",
      readTime: "6 मिनट का पठन"
    },
    {
      id: 5,
      title: "मनोविज्ञान और प्रेरणा",
      author: "सत्विक पाल",
      date: "2024-02-19",
      content: "यह समझना कि लोग कैसे सोचते हैं और उन्हें कार्रवाई करने के लिए क्या प्रेरित करता है, प्रभावी प्रेरणा के लिए महत्वपूर्ण है। यह लेख सफल प्रेरणा तकनीकों के पीछे के मनोवैज्ञानिक सिद्धांतों की जांच करता है...",
      category: "अनुसंधान",
      readTime: "9 मिनट का पठन"
    }
  ]
};

export default function LiteraryPage() {
  const [activeLanguage, setActiveLanguage] = useState("english");
  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B6B52] to-[#083D30] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-20 w-[300px] h-[300px] bg-[#FFD8C2] rounded-full blur-[100px] opacity-20"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-20 w-[400px] h-[400px] bg-[#FBC5C5] rounded-full blur-[100px] opacity-20"
            animate={{
              x: [0, -50, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/10 backdrop-blur-sm rounded-full p-4"
              >
                <BookOpen className="w-12 h-12 text-[#FFD8C2]" />
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white/80">Literary</span>{" "}
              <span className="text-[#FFD8C2]">Works</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto">
              Explore the creative expressions and insights from our talented team members
            </p>
          </motion.div>
        </div>
      </section>

      {/* Language Toggle */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="bg-gray-100 rounded-full p-1 shadow-lg">
              <div className="flex">
                {["english", "hindi"].map((language) => (
                  <motion.button
                    key={language}
                    onClick={() => setActiveLanguage(language)}
                    className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 relative ${
                      activeLanguage === language
                        ? "text-white"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeLanguage === language && (
                      <motion.div
                        layoutId="activeLanguage"
                        className="absolute inset-0 bg-gradient-to-r from-[#0B6B52] to-[#FF7F50] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 capitalize">
                      {language === "english" ? "English" : "हिंदी"}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Literary Works Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLanguage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {literaryWorks[activeLanguage].map((work) => (
                <motion.div
                  key={work.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-[#0B6B52]/20 transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-[#0B6B52] to-[#FF7F50] text-white p-2 rounded-lg">
                          <FileText className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          {work.category}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                        {work.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {work.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                      {work.content}
                    </p>

                    {/* Author and Date */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#0B6B52] to-[#FF7F50] rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {work.author}
                          </p>
                          <p className="text-xs text-gray-500">Author</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs">
                          {new Date(work.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="px-6 pb-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedWork(work);
                        setIsModalOpen(true);
                      }}
                      className="w-full bg-gradient-to-r from-[#0B6B52] to-[#FF7F50] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      {activeLanguage === "english" ? "Read Full Article" : "पूरा लेख पढ़ें"}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#0B6B52] to-[#083D30] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {activeLanguage === "english" 
                ? "Share Your Literary Talent" 
                : "अपनी साहित्यिक प्रतिभा साझा करें"
              }
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {activeLanguage === "english"
                ? "Are you a member of our team with a passion for writing? We'd love to showcase your work here!"
                : "क्या आप हमारी टीम के सदस्य हैं और लेखन का जुनून रखते हैं? हम आपके काम को यहाँ प्रदर्शित करना पसंद करेंगे!"
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0B6B52] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {activeLanguage === "english" ? "Submit Your Work" : "अपना काम जमा करें"}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal for Full Article */}
      <AnimatePresence>
        {isModalOpen && selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0B6B52] to-[#FF7F50] text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedWork.title}</h2>
                      <div className="flex items-center space-x-4 mt-2 text-white/90">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span className="text-sm">{selectedWork.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">
                            {new Date(selectedWork.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line leading-relaxed text-gray-700">
                    {selectedWork.fullContent || selectedWork.content}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="bg-[#0B6B52] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {selectedWork.category}
                    </span>
                    <span className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{selectedWork.readTime}</span>
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gradient-to-r from-[#0B6B52] to-[#FF7F50] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
