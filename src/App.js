import React, { useState, useEffect } from 'react';
import {
  ArrowLeftIcon,
  ClockIcon,
  ChartBarIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CheckIcon,
  ExclamationTriangleIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  SunIcon
} from '@heroicons/react/24/outline';

const EnhancedInsightsQuiz = () => {
  // const [currentScreen, setCurrentScreen] = useState('login'); // login, landing, learn, quiz, results
  // const [username, setUsername] = useState('');
  
  const [quizData, setQuizData] = useState({ 
    easy: [
    // Original questions
    {
      text: "Let's get straight to the point. I think we need to make a decision now and move forward quickly. Time is money, and we can't afford to waste it.",
      color: "Fiery Red",
      explanation: "This statement shows directness, focus on quick decision-making, and efficiency - all classic Fiery Red traits."
    },
    {
      text: "I'm excited about this new opportunity! Let's get everyone involved and brainstorm some creative ideas. This could be really fun and energizing for the whole team!",
      color: "Sunshine Yellow",
      explanation: "The enthusiasm, focus on involvement, creativity, and fun reflect typical Sunshine Yellow energy."
    },
    {
      text: "I think we should take our time with this decision and make sure everyone's concerns are addressed. How does this affect the team's wellbeing?",
      color: "Earth Green",
      explanation: "Caring about others' concerns, focusing on wellbeing, and taking time for consensus are Earth Green characteristics."
    },
    {
      text: "Before we proceed, I'd like to analyze all the data and consider every possible outcome. We need to be methodical and ensure our approach is accurate and logical.",
      color: "Cool Blue",
      explanation: "The desire for analysis, methodical approach, and focus on accuracy and logic are strong Cool Blue traits."
    },
    // Additional questions
    {
      text: "Let's set clear goals with specific metrics so we can track our progress effectively. I want to see measurable results.",
      color: "Fiery Red",
      explanation: "The focus on clear goals, metrics, and measurable results demonstrates Fiery Red's drive for achievement and concrete outcomes."
    },
    {
      text: "I love connecting with new people! Networking events are where I thrive - there are so many interesting stories and opportunities to discover!",
      color: "Sunshine Yellow",
      explanation: "The enthusiasm for social connection, networking, and discovering new opportunities reflects Sunshine Yellow's sociable and interactive nature."
    },
    {
      text: "I think it's important that we check in with each team member and make sure they feel supported before we move forward with the project.",
      color: "Earth Green",
      explanation: "Prioritizing team members' feelings and ensuring support demonstrates Earth Green's people-focused, harmonious approach."
    },
    {
      text: "I'd like to review all the documentation thoroughly before making any commitments. We need to understand all the details and implications.",
      color: "Cool Blue",
      explanation: "The desire for thorough review, attention to details, and understanding implications shows Cool Blue's analytical and careful approach."
    },
    {
      text: "I'll take the lead on this project. Let me know what resources you need, and I'll make it happen.",
      color: "Fiery Red",
      explanation: "Taking initiative, leadership, and focusing on resource allocation shows Fiery Red's decisive and action-oriented nature."
    },
    {
      text: "This meeting needs more energy! Let's stand up and do a quick activity to get our creative juices flowing.",
      color: "Sunshine Yellow",
      explanation: "The desire to increase energy, engage in physical activity, and stimulate creativity is typical of Sunshine Yellow's dynamic approach."
    },
    {
      text: "Let's make sure our decision doesn't negatively impact any team members or create unnecessary stress for anyone.",
      color: "Earth Green",
      explanation: "Considering the potential negative impact on team members and wanting to avoid causing stress shows Earth Green's caring nature."
    },
    {
      text: "I need to organize all this information into a structured framework before I can make a recommendation.",
      color: "Cool Blue",
      explanation: "The need for organization, structure, and systematic thinking before making recommendations is characteristic of Cool Blue."
    },
    {
      text: "We're falling behind schedule. We need to pick up the pace immediately.",
      color: "Fiery Red",
      explanation: "The concern about schedule, urgency, and direct call for increased speed reflects Fiery Red's results-focused approach."
    },
    {
      text: "This is a fantastic opportunity for us to try something completely new and exciting!",
      color: "Sunshine Yellow",
      explanation: "The enthusiasm for novelty and excitement demonstrates Sunshine Yellow's optimistic and innovation-seeking nature."
    },
    {
      text: "I notice some team members haven't shared their thoughts yet. I'd like to hear from everyone before we continue.",
      color: "Earth Green",
      explanation: "Noticing who hasn't contributed and ensuring everyone is heard shows Earth Green's inclusive and relationship-focused approach."
    },
    {
      text: "Let's define our terms clearly before moving forward to ensure we're all working from the same understanding.",
      color: "Cool Blue",
      explanation: "The need for clear definitions and shared understanding before proceeding reflects Cool Blue's precision and clarity-seeking tendencies."
    }
  ],
  medium: [
    // Original questions
    {
      text: "This deadline is non-negotiable. We need results by the end of the day, and I expect everyone to prioritize this task above all else.",
      color: "Fiery Red",
      explanation: "The focus on deadlines, results, and direct expectations are distinctive Fiery Red characteristics."
    },
    {
      text: "What if we tried something completely different? I know it sounds wild, but imagine the possibilities! Let's not be afraid to shake things up!",
      color: "Sunshine Yellow",
      explanation: "The focus on novelty, possibilities, and enthusiasm for change are hallmarks of Sunshine Yellow energy."
    },
    {
      text: "I appreciate everyone's input on this matter. Let's make sure we're creating a solution that works for the entire team and maintains our positive work environment.",
      color: "Earth Green",
      explanation: "Valuing input from everyone, focusing on team harmony, and maintaining a positive environment reflect Earth Green values."
    },
    {
      text: "I've prepared a detailed report with my findings and recommendations based on extensive research. I'd like to walk through each point systematically.",
      color: "Cool Blue",
      explanation: "The preparation of detailed reports, systematic approach, and extensive research are typical Cool Blue behaviors."
    },
    // Additional questions
    {
      text: "We've been discussing this for too long. Let's make a decision now and adjust course later if needed.",
      color: "Fiery Red",
      explanation: "The impatience with lengthy discussion and preference for quick decision-making with later adjustments shows Fiery Red's action-oriented approach."
    },
    {
      text: "This project seems too rigid. How can we add some fun elements to make it more engaging and inspiring for everyone involved?",
      color: "Sunshine Yellow",
      explanation: "The concern about rigidity and desire to add fun and engagement reflects Sunshine Yellow's enthusiasm and creativity."
    },
    {
      text: "Before we implement this change, I want to make sure everyone feels heard and that we're considering the impact on team morale.",
      color: "Earth Green",
      explanation: "Ensuring everyone feels heard and considering impact on morale demonstrates Earth Green's focus on harmony and team wellbeing."
    },
    {
      text: "I need to see the data behind this proposal. What research has been done, and how reliable are these projections?",
      color: "Cool Blue",
      explanation: "The request for data, research, and reliability assessment of projections shows Cool Blue's evidence-based and analytical thinking."
    },
    {
      text: "Let's cut to the chase and focus only on what will drive results. We can deal with the details later.",
      color: "Fiery Red",
      explanation: "The desire to 'cut to the chase,' focus solely on results, and postpone details shows Fiery Red's directness and outcome orientation."
    },
    {
      text: "I have a bold vision for this project that will revolutionize how we approach these challenges!",
      color: "Sunshine Yellow",
      explanation: "Having a bold, revolutionary vision shows Sunshine Yellow's big-picture thinking and enthusiasm for transformative ideas."
    },
    {
      text: "I'm concerned that we're moving too quickly and not giving people enough time to adjust to these changes.",
      color: "Earth Green",
      explanation: "Concern about pace and giving people adjustment time demonstrates Earth Green's patient and people-centered approach."
    },
    {
      text: "Before making this decision, we should evaluate all alternatives using a consistent set of criteria.",
      color: "Cool Blue",
      explanation: "Wanting to evaluate all alternatives with consistent criteria reflects Cool Blue's systematic and thorough approach to decision-making."
    },
    {
      text: "I need this completed by tomorrow. What obstacles do you anticipate, and how will you overcome them?",
      color: "Fiery Red",
      explanation: "Setting a tight deadline while demanding forward-thinking about obstacles and solutions shows Fiery Red's results-driven and challenging approach."
    },
    {
      text: "Let's break away from tradition and explore some unconventional approaches that could give us a competitive edge!",
      color: "Sunshine Yellow",
      explanation: "The eagerness to break from tradition and explore unconventional paths for competitive advantage demonstrates Sunshine Yellow's innovative thinking."
    },
    {
      text: "I'd like to schedule one-on-one check-ins with each team member to see how they're feeling about their current workload.",
      color: "Earth Green",
      explanation: "Scheduling individual check-ins to assess feelings about workload shows Earth Green's personalized care and attention to individual wellbeing."
    },
    {
      text: "We should create a detailed project plan with clear dependencies, milestones, and contingency protocols.",
      color: "Cool Blue",
      explanation: "The desire for a detailed plan with dependencies, milestones, and contingency protocols reflects Cool Blue's methodical and risk-aware planning style."
    }
  ],
  hard: [
    // Original questions (now made more difficult/subtle)
    {
      text: "We need to focus on our core objectives. What's the critical path to delivery?",
      color: "Fiery Red",
      explanation: "The emphasis on focus, core objectives, and identifying the critical path demonstrates Fiery Red's strategic and results-oriented thinking."
    },
    {
      text: "Perhaps we could explore connections between departments that might yield unexpected synergies for this initiative.",
      color: "Sunshine Yellow",
      explanation: "The interest in exploring interdepartmental connections and discovering synergies shows Sunshine Yellow's relational and possibility-focused thinking, though expressed more subtly."
    },
    {
      text: "It might be beneficial to ensure alignment across stakeholders before proceeding with implementation.",
      color: "Earth Green",
      explanation: "The concern for stakeholder alignment before implementation indicates Earth Green's consensus-building approach, despite the more formal language."
    },
    {
      text: "The parameters require further specification to ensure optimal configuration of resources.",
      color: "Cool Blue",
      explanation: "The focus on parameter specification and optimal configuration reveals Cool Blue's analytical precision, though expressed in more technical language."
    },
    // Additional more challenging questions
    {
      text: "The constraints we're operating under necessitate immediate prioritization. Let's identify the highest-impact activities.",
      color: "Fiery Red",
      explanation: "Despite the formal language, the drive for immediacy, prioritization, and focus on high-impact activities reveals Fiery Red's results-driven nature."
    },
    {
      text: "I wonder if there might be alternative frameworks we haven't considered that could potentially reframe our understanding of this challenge.",
      color: "Sunshine Yellow",
      explanation: "The curiosity about alternative frameworks and reframing challenges shows Sunshine Yellow's innovative thinking and openness to possibilities, though expressed more tentatively."
    },
    {
      text: "I'm contemplating the implications this might have for our established team dynamics and wondering if we should address those potential concerns.",
      color: "Earth Green",
      explanation: "The contemplation of implications for team dynamics and suggestion to address concerns reveals Earth Green's people-focused approach, despite the indirect phrasing."
    },
    {
      text: "The methodology employed appears to have certain inconsistencies that may warrant further investigation before conclusions are drawn.",
      color: "Cool Blue",
      explanation: "The attention to methodological inconsistencies and call for further investigation before concluding demonstrates Cool Blue's analytical thoroughness, though in formal academic language."
    },
    {
      text: "While the proposal has merit, the timeline doesn't align with our strategic imperatives for this quarter.",
      color: "Fiery Red",
      explanation: "The quick evaluation and focus on strategic timeline alignment reveals Fiery Red's decisive and strategic thinking, despite the measured tone."
    },
    {
      text: "I see potential for cross-functional collaboration here that might generate unexpected value streams if approached creatively.",
      color: "Sunshine Yellow",
      explanation: "The recognition of collaboration potential and generation of unexpected value streams through creativity shows Sunshine Yellow's connective and possibility-oriented thinking."
    },
    {
      text: "Perhaps we should consider how these changes align with the values we've collectively established as an organization.",
      color: "Earth Green",
      explanation: "The suggestion to consider alignment with collective values reveals Earth Green's concern for shared principles and group harmony, though expressed indirectly."
    },
    {
      text: "The current architecture may benefit from a more granular analysis to identify optimization opportunities.",
      color: "Cool Blue",
      explanation: "The recommendation for granular analysis to identify optimization opportunities demonstrates Cool Blue's detail-oriented and improvement-focused thinking."
    },
    {
      text: "Given our resource constraints, we need to determine the minimum viable approach to achieve our primary objective.",
      color: "Fiery Red",
      explanation: "The pragmatic focus on resource constraints and achieving primary objectives efficiently reveals Fiery Red's practical and goal-oriented nature."
    },
    {
      text: "I'm envisioning how we might reconfigure these elements to create a more dynamic and adaptable framework moving forward.",
      color: "Sunshine Yellow",
      explanation: "The forward-thinking vision of reconfiguration for greater dynamism and adaptability shows Sunshine Yellow's innovative and future-oriented perspective."
    },
    {
      text: "The sustainability of our approach should be considered not just in terms of resources but also regarding team wellbeing.",
      color: "Earth Green",
      explanation: "The concern for sustainability with specific attention to team wellbeing alongside resources reveals Earth Green's balanced care for people and practical considerations."
    },
    {
      text: "Before proceeding, I'd like to examine the underlying assumptions in our model to ensure logical consistency.",
      color: "Cool Blue",
      explanation: "The desire to examine underlying assumptions for logical consistency demonstrates Cool Blue's critical thinking and concern for fundamental accuracy."
    }
  ],
  mixed: [
    // Original questions
    {
      text: "We need to make this decision quickly, but let's make sure everyone has a chance to voice their concerns first.",
      primaryColor: "Fiery Red",
      secondaryColor: "Earth Green",
      explanation: "This combines Fiery Red's urgency with Earth Green's concern for everyone's input and feelings."
    },
    {
      text: "I'm excited about this innovative approach, but I'd like to see the data that supports its effectiveness.",
      primaryColor: "Sunshine Yellow",
      secondaryColor: "Cool Blue",
      explanation: "The enthusiasm for innovation is Sunshine Yellow, while the need for supporting data is Cool Blue."
    },
    {
      text: "Let's analyze all the options carefully, and then make a swift decision once we have the facts.",
      primaryColor: "Cool Blue",
      secondaryColor: "Fiery Red",
      explanation: "The careful analysis is Cool Blue, while the push for swift action once information is gathered is Fiery Red."
    },
    {
      text: "I want to create an energizing team experience, but we need to ensure everyone feels comfortable with the direction we're taking.",
      primaryColor: "Sunshine Yellow",
      secondaryColor: "Earth Green",
      explanation: "The focus on energy and excitement is Sunshine Yellow, while ensuring everyone's comfort is Earth Green."
    },
    // Additional questions
    {
      text: "Let's create an innovative solution, but make sure we've thoroughly tested it before launch.",
      primaryColor: "Sunshine Yellow",
      secondaryColor: "Cool Blue",
      explanation: "The drive for innovation shows Sunshine Yellow energy, while the insistence on thorough testing reflects Cool Blue caution."
    },
    {
      text: "We need to meet our targets, but not at the expense of burning out our team members.",
      primaryColor: "Fiery Red",
      secondaryColor: "Earth Green",
      explanation: "The focus on targets is Fiery Red, while the concern about team burnout shows Earth Green compassion."
    },
    {
      text: "I value the team's harmony, but we also need to be honest about what's not working and address it directly.",
      primaryColor: "Earth Green",
      secondaryColor: "Fiery Red",
      explanation: "The emphasis on team harmony is Earth Green, while the push for direct honesty about problems reflects Fiery Red directness."
    },
    {
      text: "I want to ensure our plan is thoroughly researched, but we should also remain open to spontaneous opportunities that arise.",
      primaryColor: "Cool Blue",
      secondaryColor: "Sunshine Yellow",
      explanation: "The need for thorough research is Cool Blue, while openness to spontaneous opportunities shows Sunshine Yellow flexibility."
    },
    {
      text: "We should implement this system methodically, but let's also explain the logic behind it so everyone understands the benefits.",
      primaryColor: "Cool Blue",
      secondaryColor: "Earth Green",
      explanation: "The methodical implementation approach is Cool Blue, while ensuring everyone understands the benefits shows Earth Green's concern for people's comprehension and buy-in."
    },
    {
      text: "Let's ensure our approach is people-centered, but we also need to inject some energy and excitement into this process.",
      primaryColor: "Earth Green",
      secondaryColor: "Sunshine Yellow",
      explanation: "The people-centered focus is Earth Green, while the desire to inject energy and excitement reflects Sunshine Yellow enthusiasm."
    },
    {
      text: "I appreciate your detailed analysis, but now we need to make a decision and move forward with implementation.",
      primaryColor: "Fiery Red",
      secondaryColor: "Cool Blue",
      explanation: "The push for decision and implementation is Fiery Red, while the appreciation for detailed analysis shows respect for Cool Blue thoroughness."
    },
    {
      text: "I have an exciting vision for this project, but I want to make sure we've established a detailed implementation plan first.",
      primaryColor: "Sunshine Yellow",
      secondaryColor: "Cool Blue",
      explanation: "The exciting vision shows Sunshine Yellow energy, while the insistence on a detailed implementation plan first reflects Cool Blue planning."
    },
    {
      text: "Let's keep our team cohesive during this transition, but we also need to meet our strategic objectives on time.",
      primaryColor: "Earth Green",
      secondaryColor: "Fiery Red",
      explanation: "The concern for team cohesion during transition is Earth Green, while the focus on meeting strategic objectives on time shows Fiery Red's results orientation."
    },
    {
      text: "We need to gather comprehensive data, but let's also consider how we can present it in an engaging and inspiring way.",
      primaryColor: "Cool Blue",
      secondaryColor: "Sunshine Yellow",
      explanation: "The need for comprehensive data gathering is Cool Blue, while the concern for engaging and inspiring presentation reflects Sunshine Yellow's communication style."
    }
  ],
  scenarios: [
    // Original scenarios
    {
      scenario: "During a team meeting with a tight agenda, someone raises an unrelated but interesting idea. How would each color respond?",
      responses: [
        {
          text: "We need to stick to the agenda. We can discuss that at another time if it's important.",
          color: "Fiery Red",
          explanation: "Fiery Red prioritizes the agenda and efficiency over exploring tangential ideas."
        },
        {
          text: "That sounds fascinating! Let's explore it for a few minutes and see where it leads us!",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow is excited by new ideas and willing to deviate from the plan to explore possibilities."
        },
        {
          text: "That could be valuable. How does everyone feel about taking a few minutes to discuss this now?",
          color: "Earth Green",
          explanation: "Earth Green considers everyone's feelings and seeks consensus on whether to discuss the new idea."
        },
        {
          text: "That's interesting, but off-topic. Could you schedule a separate meeting and share research on that idea first?",
          color: "Cool Blue",
          explanation: "Cool Blue appreciates structure and proper planning, suggesting a dedicated time with proper preparation."
        }
      ]
    },
    {
      scenario: "A project is falling behind schedule. How would each color approach this situation?",
      responses: [
        {
          text: "We need to reallocate resources immediately and focus only on the critical path items to meet the deadline.",
          color: "Fiery Red",
          explanation: "Fiery Red focuses on immediate action and prioritization to achieve results."
        },
        {
          text: "Let's get the team together for a creative problem-solving session! I bet we can find an innovative way to overcome this!",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow seeks collaborative, creative solutions and maintains optimism."
        },
        {
          text: "Let's check in with the team members who are struggling and see how we can support them to get back on track.",
          color: "Earth Green",
          explanation: "Earth Green focuses on supporting team members and understanding the human factors behind the delay."
        },
        {
          text: "We should analyze where the bottlenecks are occurring and develop a systematic plan to address each one.",
          color: "Cool Blue",
          explanation: "Cool Blue wants to analyze the problem thoroughly and develop a systematic solution."
        }
      ]
    },
    // Additional scenarios
    {
      scenario: "The team has to choose between two project proposals. How would each color approach the decision-making process?",
      responses: [
        {
          text: "Which proposal will deliver results faster and with greater impact? That's the one we should choose.",
          color: "Fiery Red",
          explanation: "Fiery Red focuses on speed and impact, prioritizing tangible results above other considerations."
        },
        {
          text: "Which proposal excites people more and has potential for growth? Let's go with the one that energizes the team!",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow prioritizes excitement, energy, and growth potential over other factors."
        },
        {
          text: "Which proposal will best maintain team cohesion and ensure everyone has a meaningful role they're comfortable with?",
          color: "Earth Green",
          explanation: "Earth Green prioritizes team cohesion and ensuring everyone has a comfortable role they feel good about."
        },
        {
          text: "Let's evaluate both proposals against our criteria matrix and determine which one best meets our quality standards.",
          color: "Cool Blue",
          explanation: "Cool Blue prefers a systematic evaluation against established criteria, focusing on quality and thoroughness."
        }
      ]
    },
    {
      scenario: "A team member has made a significant mistake on a project. How would each color respond?",
      responses: [
        {
          text: "Let's identify exactly what went wrong and implement immediate corrective action to get back on track.",
          color: "Fiery Red",
          explanation: "Fiery Red focuses on identifying the problem and taking swift action to correct it and move forward."
        },
        {
          text: "These things happen! Let's look at this as a learning opportunity and brainstorm ways to turn this situation around.",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow maintains optimism, reframes the mistake as an opportunity, and looks for creative solutions."
        },
        {
          text: "How is the team member feeling about this? Let's make sure they have the support they need and work through this together.",
          color: "Earth Green",
          explanation: "Earth Green focuses first on the person's emotional wellbeing and offers support rather than criticism."
        },
        {
          text: "We should analyze the root cause of this error and develop a process to prevent similar issues in the future.",
          color: "Cool Blue",
          explanation: "Cool Blue wants to understand the underlying cause and create systematic prevention measures for the future."
        }
      ]
    },
    {
      scenario: "The team needs to adapt to a major, unexpected change in project requirements. How would each color typically react?",
      responses: [
        {
          text: "Let's quickly reprioritize our tasks and reallocate resources to address these new requirements efficiently.",
          color: "Fiery Red",
          explanation: "Fiery Red adapts quickly, focusing on reprioritization and resource allocation to maintain efficiency."
        },
        {
          text: "This is an exciting challenge! Let's see what new possibilities these changes open up for us to explore!",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow sees change as exciting and focuses on the new possibilities rather than the disruption."
        },
        {
          text: "Let's take some time to process this change as a team and make sure everyone is comfortable with the new direction.",
          color: "Earth Green",
          explanation: "Earth Green prioritizes giving the team time to process the change and ensuring everyone's comfort with the new situation."
        },
        {
          text: "We need to fully understand the implications of these changes before proceeding. Let's review the new requirements in detail.",
          color: "Cool Blue",
          explanation: "Cool Blue wants to thoroughly analyze the new requirements and understand all implications before taking action."
        }
      ]
    },
    {
      scenario: "Your team has been assigned a project with unclear objectives. How would each color handle this situation?",
      responses: [
        {
          text: "I'll speak directly with leadership to get clarity on what success looks like so we can focus our efforts appropriately.",
          color: "Fiery Red",
          explanation: "Fiery Red takes initiative to get clarity on success criteria, showing their direct approach and results focus."
        },
        {
          text: "This gives us a chance to be creative! Let's brainstorm different interpretations and see what exciting directions we could take this!",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow sees the ambiguity as an opportunity for creativity and exploration of multiple possibilities."
        },
        {
          text: "Let's discuss as a team how we feel about this lack of clarity and come to a shared understanding of what we think the objectives should be.",
          color: "Earth Green",
          explanation: "Earth Green focuses on the team's collective feelings and reaching consensus about objectives through discussion."
        },
        {
          text: "We should develop a detailed list of questions and request a formal clarification before we begin any work on this project.",
          color: "Cool Blue",
          explanation: "Cool Blue systematically identifies questions and seeks formal clarification, showing their methodical approach."
        }
      ]
    },
    {
      scenario: "During a presentation, someone challenges your ideas with strong criticism. How would each color typically respond?",
      responses: [
        {
          text: "I appreciate direct feedback. Let's focus on the specific concerns and address them head-on.",
          color: "Fiery Red",
          explanation: "Fiery Red responds directly to challenges, appreciates straightforward feedback, and wants to address concerns efficiently."
        },
        {
          text: "That's an interesting perspective! Perhaps we can combine our ideas to create something even better!",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow stays positive, sees criticism as interesting input, and looks for ways to integrate opposing ideas creatively."
        },
        {
          text: "I value your feedback. Can you help me understand your concerns better so we can find a solution that works for everyone?",
          color: "Earth Green",
          explanation: "Earth Green responds with appreciation, seeks deeper understanding of concerns, and aims for a solution that satisfies everyone."
        },
        {
          text: "Thank you for your critique. I'd like to review the evidence behind your concerns so I can evaluate how to improve my proposal.",
          color: "Cool Blue",
          explanation: "Cool Blue wants to examine the evidence behind the criticism to logically evaluate how to improve their work."
        }
      ]
    },
    {
      scenario: "Your team needs to implement a new technology that will change current work processes. How would each color approach this?",
      responses: [
        {
          text: "Let's set a clear implementation timeline with specific milestones and move quickly to get everyone up to speed.",
          color: "Fiery Red",
          explanation: "Fiery Red establishes a clear timeline with milestones and pushes for swift implementation and adaptation."
        },
        {
          text: "This is a great opportunity for growth! Let's make the learning process fun and highlight all the exciting new possibilities this brings!",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow focuses on making the change exciting, fun, and highlighting the new possibilities it creates."
        },
        {
          text: "Let's ensure everyone receives proper training and has a chance to express any concerns about how this affects their work.",
          color: "Earth Green",
          explanation: "Earth Green prioritizes proper training for everyone and creating space for concerns to be expressed and addressed."
        },
        {
          text: "We should document the new processes in detail and analyze potential implementation issues before rolling this out company-wide.",
          color: "Cool Blue",
          explanation: "Cool Blue wants detailed documentation and thorough analysis of potential issues before full implementation."
        }
      ]
    },
    {
      scenario: "Your team has limited resources and must decide which of three important projects to prioritize. How would each color approach this decision?",
      responses: [
        {
          text: "We should focus on the project with the highest ROI and strategic impact. Let's make a decision today and move forward.",
          color: "Fiery Red",
          explanation: "Fiery Red prioritizes based on ROI and strategic impact, and pushes for immediate decision-making."
        },
        {
          text: "Which project offers the most exciting opportunities for innovation and growth? That's where we'll make the biggest difference!",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow prioritizes based on opportunities for innovation and making a significant positive difference."
        },
        {
          text: "Let's consider which project best utilizes our team's strengths and creates the most positive environment for everyone involved.",
          color: "Earth Green",
          explanation: "Earth Green prioritizes team strengths and creating a positive working environment for all team members."
        },
        {
          text: "We should create a matrix of criteria including risks, resource requirements, and projected outcomes to objectively compare all three options.",
          color: "Cool Blue",
          explanation: "Cool Blue develops a systematic framework with multiple criteria to objectively evaluate and compare the options."
        }
      ]
    },
    {
      scenario: "You notice a colleague is consistently underperforming. How would each color address this situation?",
      responses: [
        {
          text: "I would directly address the performance issues with clear expectations for improvement and specific consequences if those aren't met.",
          color: "Fiery Red",
          explanation: "Fiery Red addresses issues directly with clear expectations and consequences, focusing on performance outcomes."
        },
        {
          text: "I'd try to discover what motivates them and find ways to make their work more engaging and connected to their interests and strengths.",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow focuses on finding motivation, engagement, and connecting work to the person's interests and strengths."
        },
        {
          text: "I would have a private, supportive conversation to understand what personal or professional challenges might be affecting their work.",
          color: "Earth Green",
          explanation: "Earth Green has a private, supportive conversation focused on understanding underlying challenges and providing support."
        },
        {
          text: "I would collect specific examples of the underperformance and analyze patterns to identify the root causes before discussing solutions.",
          color: "Cool Blue",
          explanation: "Cool Blue gathers specific examples, looks for patterns, and analyzes root causes before approaching the situation."
        }
      ]
    },
    {
      scenario: "Your organization needs to adapt to significant industry changes. How would each color approach leading this transformation?",
      responses: [
        {
          text: "I would create a clear strategy with decisive actions, defined outcomes, and accountability measures to drive the transformation forward.",
          color: "Fiery Red",
          explanation: "Fiery Red focuses on clear strategy, decisive actions, defined outcomes, and accountability to drive swift transformation."
        },
        {
          text: "I would inspire the organization with a compelling vision of future possibilities and engage people in generating creative approaches to the new landscape.",
          color: "Sunshine Yellow",
          explanation: "Sunshine Yellow inspires with a compelling vision and engages people in generating creative approaches to embrace change."
        },
        {
          text: "I would ensure the transformation respects organizational values and that we support people through the emotional journey of significant change.",
          color: "Earth Green",
          explanation: "Earth Green ensures the transformation aligns with values and supports people through the emotional aspects of change."
        },
        // Conflict Negotiation Scenarios
        {
          scenario: "Two team members come to you with conflicting ideas about a project direction. How would each color approach resolving this conflict?",
          responses: [
            {
              text: "I would evaluate both ideas based on which will get better results, make a clear decision, and explain my reasoning directly.",
              color: "Fiery Red",
              explanation: "Fiery Red prioritizes swift resolution, evaluates options based on results, and makes decisive calls with direct communication."
            },
            {
              text: "I'd bring everyone together to explore how we might combine the best elements of both ideas into something even more innovative!",
              color: "Sunshine Yellow",
              explanation: "Sunshine Yellow seeks to integrate opposing viewpoints creatively, focusing on possibilities rather than limitations."
            },
            {
              text: "I would create a safe space for both people to fully express their perspectives and facilitate a conversation until we reach consensus.",
              color: "Earth Green",
              explanation: "Earth Green focuses on creating harmony, ensuring everyone feels heard, and working toward a solution everyone can support."
            },
            {
              text: "I would ask both parties to present their evidence and reasoning, then methodically evaluate the merits of each approach against our objectives.",
              color: "Cool Blue",
              explanation: "Cool Blue approaches conflict with logical analysis, examining evidence and evaluating options against objective criteria."
            }
          ]
        },
        {
          scenario: "During a heated negotiation with a client about contract terms, tensions are rising. How would each color handle this situation?",
          responses: [
            {
              text: "I would address concerns head-on, clearly state our bottom line, and propose a direct compromise to close the deal efficiently.",
              color: "Fiery Red",
              explanation: "Fiery Red confronts tension directly, states positions clearly, and drives toward efficient resolution with specific proposals."
            },
            {
              text: "I'd lighten the mood and reframe the discussion around our shared goals, looking for creative win-win options that excite both parties.",
              color: "Sunshine Yellow",
              explanation: "Sunshine Yellow diffuses tension with positivity, focuses on shared vision, and generates creative solutions that benefit everyone."
            },
            {
              text: "I would acknowledge the client's feelings, slow the conversation down, and focus on rebuilding trust before discussing specific terms.",
              color: "Earth Green",
              explanation: "Earth Green prioritizes emotional connection, slows down to reduce tension, and rebuilds relationship foundations before tackling issues."
            },
            {
              text: "I would suggest we take a break to review the contract points systematically, focusing on data and facts rather than emotional reactions.",
              color: "Cool Blue",
              explanation: "Cool Blue creates distance from emotional tension, refocuses on factual analysis, and approaches the negotiation systematically."
            }
          ]
        },
        {
          scenario: "You need to mediate a longstanding conflict between two departments that consistently clash over resources. How would each color approach this mediation?",
          responses: [
            {
              text: "I would get key decision-makers in a room, identify the business impact of the conflict, and establish clear protocols for resource allocation going forward.",
              color: "Fiery Red",
              explanation: "Fiery Red focuses on business impact, gathers decision-makers, creates clear rules, and implements practical solutions with defined boundaries."
            },
            {
              text: "I'd organize a collaborative workshop where both departments can visualize future cooperation and develop exciting joint initiatives that benefit everyone.",
              color: "Sunshine Yellow",
              explanation: "Sunshine Yellow creates collaborative environments, focuses on future possibilities, and develops shared initiatives to build enthusiasm."
            },
            {
              text: "I would hold separate listening sessions with each department first, acknowledge past hurts, then facilitate a group dialogue focused on mutual understanding.",
              color: "Earth Green",
              explanation: "Earth Green listens deeply to all perspectives, acknowledges emotional history, and builds bridges through enhanced mutual understanding."
            },
            {
              text: "I would analyze historical resource allocation data, map interdependencies between the departments, and develop an objective framework for cooperation.",
              color: "Cool Blue",
              explanation: "Cool Blue analyzes underlying patterns, gathers relevant data, and develops systematic frameworks to address structural causes of conflict."
            }
          ]
        },
        {
          scenario: "A team member has publicly criticized your decision during a meeting. How would each color handle this interpersonal conflict?",
          responses: [
            {
              text: "I would address the critique directly and immediately, either defending my rationale or acknowledging valid points while maintaining authority.",
              color: "Fiery Red",
              explanation: "Fiery Red confronts criticism head-on, responds immediately, defends their position, and maintains decisiveness and authority."
            },
            {
              text: "I'd acknowledge their perspective with good humor, use the critique as a springboard for discussion, and involve the team in exploring alternatives.",
              color: "Sunshine Yellow",
              explanation: "Sunshine Yellow responds with optimism, turns criticism into an opportunity for engagement, and includes others in exploring possibilities."
            },
            {
              text: "I would thank them for sharing their view and suggest we discuss their concerns privately after the meeting to better understand each other's perspectives.",
              color: "Earth Green",
              explanation: "Earth Green avoids public confrontation, moves difficult conversations to private settings, and focuses on creating mutual understanding."
            },
            {
              text: "I would ask them to elaborate on specific concerns, take notes, and commit to reviewing the decision in light of the new information they've presented.",
              color: "Cool Blue",
              explanation: "Cool Blue requests specific details, documents concerns, remains objective, and commits to analytical review of all information."
            }
          ]
        },
        {
          scenario: "You need to facilitate a difficult conversation about compensation disparities that has created tensions within the team. How would each color approach this?",
          responses: [
            {
              text: "I would directly acknowledge the issue, present clear data on how compensation decisions are made, and outline specific steps for addressing concerns.",
              color: "Fiery Red",
              explanation: "Fiery Red addresses sensitive issues directly, presents clear information, and focuses on actionable solutions with specific next steps."
            },
            {
              text: "I'd create an open forum where everyone can share their perspective, emphasizing our shared commitment to fairness and brainstorming innovative approaches.",
              color: "Sunshine Yellow",
              explanation: "Sunshine Yellow creates open dialogue, maintains optimistic focus on shared values, and generates creative approaches to complex problems."
            },
            {
              text: "I would begin with one-on-one conversations to understand personal impacts, then facilitate a respectful group discussion focused on restoring trust.",
              color: "Earth Green",
              explanation: "Earth Green starts with personal connections, ensures psychological safety, and prioritizes rebuilding damaged trust and team cohesion."
            },
            {
              text: "I would present a comprehensive analysis of our compensation structure, benchmark data, and develop a systematic framework for addressing inequities.",
              color: "Cool Blue",
              explanation: "Cool Blue approaches sensitive issues with detailed analysis, relies on objective data, and develops systematic solutions to complex problems."
            }
          ]
        }
        ]
      }
    ]
  })

  // Learning content for each color
  const learningContent = {
    "Fiery Red": {
      title: "Fiery Red Energy",
      description: "Fiery Red energy is driven, direct, and decisive. People with dominant Fiery Red energy are typically:",
      characteristics: [
        "Results-oriented and focused on the bottom line",
        "Direct and straightforward in communication",
        "Quick to make decisions and take action",
        "Competitive and goal-driven",
        "Time-conscious and efficiency-focused",
        "Confident and assertive in their approach",
        "Problem-solvers who seek immediate solutions"
      ],
      strengths: "Great at taking charge, driving projects forward, and making tough decisions quickly.",
      challenges: "May appear intimidating, impatient, or insensitive to others' feelings.",
      quotes: [
        "Let's get this done now.",
        "What's the bottom line?",
        "I'll take the lead on this.",
        "Time is money, let's not waste it.",
        "Make a decision and move on."
      ],
      image: "🔥"
    },
    "Sunshine Yellow": {
      title: "Sunshine Yellow Energy",
      description: "Sunshine Yellow energy is sociable, dynamic, and demonstrative. People with dominant Sunshine Yellow energy are typically:",
      characteristics: [
        "Enthusiastic and optimistic",
        "Sociable and people-oriented",
        "Creative and innovative in their thinking",
        "Persuasive and engaging communicators",
        "Collaborative and team-focused",
        "Spontaneous and flexible in approach",
        "Inspiring and motivating to others"
      ],
      strengths: "Excellent at generating enthusiasm, coming up with creative ideas, and building relationships.",
      challenges: "May appear disorganized, overly optimistic, or lacking in follow-through.",
      quotes: [
        "Let's brainstorm some ideas!",
        "This will be fun and energizing!",
        "Imagine the possibilities!",
        "Let's get everyone involved!",
        "What if we tried something completely new?"
      ],
      image: "☀️"
    },
    "Earth Green": {
      title: "Earth Green Energy",
      description: "Earth Green energy is caring, encouraging, and sharing. People with dominant Earth Green energy are typically:",
      characteristics: [
        "Caring and empathetic toward others",
        "Patient and supportive listeners",
        "Focused on harmony and positive relationships",
        "Loyal and committed team members",
        "Consistent and reliable in their approach",
        "Considerate of everyone's feelings and needs",
        "Collaborative and consensus-seeking"
      ],
      strengths: "Exceptional at building strong relationships, creating harmony, and supporting team members.",
      challenges: "May avoid conflict, take too long to make decisions, or prioritize others' needs over business objectives.",
      quotes: [
        "How does everyone feel about this?",
        "Let's make sure we consider everyone's input.",
        "I want to ensure this works for the whole team.",
        "Let's take our time and get this right.",
        "How can I support you with this?"
      ],
      image: "🌿"
    },
    "Cool Blue": {
      title: "Cool Blue Energy",
      description: "Cool Blue energy is precise, deliberate, and questioning. People with dominant Cool Blue energy are typically:",
      characteristics: [
        "Analytical and detail-oriented",
        "Methodical and systematic in approach",
        "Data-driven decision makers",
        "Precise and accurate in their work",
        "Cautious and thorough planners",
        "Logical and objective thinkers",
        "Independent and self-sufficient"
      ],
      strengths: "Excellent at analyzing complex problems, ensuring quality, and developing precise solutions.",
      challenges: "May appear distant, overly cautious, or critical of new ideas without sufficient data.",
      quotes: [
        "Let me analyze this more carefully.",
        "I need more data before deciding.",
        "Let's be precise about the requirements.",
        "We should consider all possible outcomes.",
        "The details matter here."
      ],
      image: "❄️"
    }
  };

  // State variables
  const [currentScreen, setCurrentScreen] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState(() => {
  const savedUsers = localStorage.getItem("insightsQuizUsers");
  return savedUsers ? JSON.parse(savedUsers) : {};
});
  const [difficulty, setDifficulty] = useState("easy");
  const [gameMode, setGameMode] = useState("standard"); // standard, mixed, scenario, learning
  const [currentLearningColor, setCurrentLearningColor] = useState("Fiery Red");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState(null);
  const [selectedSecondaryColor, setSelectedSecondaryColor] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10); // 10-second timer
  // const [timeRemaining, setTimeRemaining] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [sessionHistory, setSessionHistory] = useState({
    "Fiery Red": { correct: 0, attempted: 0 },
    "Sunshine Yellow": { correct: 0, attempted: 0 },
    "Earth Green": { correct: 0, attempted: 0 },
    "Cool Blue": { correct: 0, attempted: 0 }
  });
  const [screenSize, setScreenSize] = useState("desktop");

  // Quiz progress tracking
  const [highScore, setHighScore] = useState(0);
  // Update quizHistory to use user-specific data
  const [quizHistory, setQuizHistory] = useState([]);
  // const [quizHistory, setQuizHistory] = useState(() => {
//   const savedHistory = localStorage.getItem("insightsQuizHistory");
//   const parsedHistory = savedHistory ? JSON.parse(savedHistory) : {};
//   return Object.values(parsedHistory);  // Convert object values into an array
// });

  const colorStyles = {
    "Fiery Red": {
      bg: 'bg-red-100',
      text: 'text-red-800',
      border: 'border-red-300',
      button: 'bg-red-500 hover:bg-red-600 text-white'
    },
    "Sunshine Yellow": {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      border: 'border-yellow-300',
      button: 'bg-yellow-400 hover:bg-yellow-500 text-black'
    },
    "Earth Green": {
      bg: 'bg-green-100',
      text: 'text-green-800',
      border: 'border-green-300',
      button: 'bg-green-600 hover:bg-green-700 text-white'
    },
    "Cool Blue": {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      border: 'border-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700 text-white'
    }
  };
  
  // Calculate cumulative stats from the entire history
const calculateCumulativeStats = () => {
  return users[username]?.cumulativeStats || {
    "Fiery Red": { correct: 0, attempted: 0 },
    "Sunshine Yellow": { correct: 0, attempted: 0 },
    "Earth Green": { correct: 0, attempted: 0 },
    "Cool Blue": { correct: 0, attempted: 0 }
  };
};

const cumulativeStats = calculateCumulativeStats();

  // Effect to determine screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect for timer
  useEffect(() => {
    let timer;
    if (isTimerRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (isTimerRunning && timeRemaining === 0) {
      handleTimeUp();
    }

    return () => clearInterval(timer);
  }, [isTimerRunning, timeRemaining]);

  // Effect to save quiz history to local storage
  useEffect(() => {
    localStorage.setItem("insightsQuizHistory", JSON.stringify(quizHistory));
  }, [quizHistory]);

// Add login handler
const handleLogin = (e) => {
  e.preventDefault();
  if (!users[username]) {
    // Create new user
    setUsers(prev => ({
      ...prev,
      [username]: {
        password,
        highScore: 0,
        quizHistory: [],
        cumulativeStats: {
          "Fiery Red": { correct: 0, attempted: 0 },
          "Sunshine Yellow": { correct: 0, attempted: 0 },
          "Earth Green": { correct: 0, attempted: 0 },
          "Cool Blue": { correct: 0, attempted: 0 }
        }
      }
    }));
  }
  setCurrentScreen('landing');
};


useEffect(() => {
  if (currentScreen === 'landing' && users[username]) {
    setQuizHistory(users[username].quizHistory);
    setHighScore(users[username].highScore);
  }
}, [currentScreen, username, users]);

  // Handle timer expiration
  const handleTimeUp = () => {
    if (!isAnswered) {
      setIsAnswered(true);
      setShowExplanation(true);

      // Update session history for timed out question
      const currentQuestion = getCurrentQuestion();
      updateSessionHistory(currentQuestion.color, false);
    }
  };

  // Get current question based on mode and difficulty
  const getCurrentQuestion = () => {
    if (gameMode === "standard") {
      return quizData[difficulty][currentQuestionIndex];
    } else if (gameMode === "mixed") {
      return quizData.mixed[currentQuestionIndex];
    } else if (gameMode === "scenario") {
      return quizData.scenarios[currentQuestionIndex].responses[currentQuestionIndex % 4];
    }
    return null;
  };

  // Get current scenario for scenario mode
  const getCurrentScenario = () => {
    if (gameMode === "scenario") {
      return quizData.scenarios[Math.floor(currentQuestionIndex / 4)].scenario;
    }
    return "";
  };

  

  // Get questions array based on current mode and difficulty
  const getCurrentQuestions = () => {
    if (gameMode === "standard") {
      return quizData[difficulty];
    } else if (gameMode === "mixed") {
      return quizData.mixed;
    } else if (gameMode === "scenario") {
      return quizData.scenarios.flatMap(scenario => scenario.responses);
    }
    return [];
  };

  // Start new quiz with selected settings
  const startQuiz = (mode, diff, timed) => {
    setGameMode(mode);
    setDifficulty(diff);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedPrimaryColor(null);
    setSelectedSecondaryColor(null);
    setIsAnswered(false);
    setGameOver(false);
    setShowExplanation(false);
    setShowStartScreen(false);
    setTimerEnabled(true);
    setTimeRemaining(10);
    setIsTimerRunning(true);
    setSessionHistory({
      "Fiery Red": { correct: 0, attempted: 0 },
      "Sunshine Yellow": { correct: 0, attempted: 0 },
      "Earth Green": { correct: 0, attempted: 0 },
      "Cool Blue": { correct: 0, attempted: 0 }
    });
  };

  // Switch to learning mode for a specific color
  const startLearningMode = (color) => {
    setGameMode("learning");
    setCurrentLearningColor(color);
    setShowStartScreen(false);
  };

  // Handle color selection for standard and scenario modes
  const handleColorSelect = (selectedColor) => {
    if (isAnswered) return;
    
    setSelectedPrimaryColor(selectedColor);
    setIsAnswered(true);
    setIsTimerRunning(false);
    
    const currentQuestion = getCurrentQuestion();
    const isCorrect = selectedColor === currentQuestion.color;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    updateSessionHistory(currentQuestion.color, isCorrect);
    
    setShowExplanation(true);
  };

  // Handle primary color selection for mixed mode
  const handlePrimaryColorSelect = (selectedColor) => {
    if (isAnswered) return;
    setSelectedPrimaryColor(selectedColor);
  };

  // Handle secondary color selection for mixed mode
  const handleSecondaryColorSelect = (selectedColor) => {
  if (isAnswered || !selectedPrimaryColor || selectedPrimaryColor === selectedColor) return;
  
  setSelectedSecondaryColor(selectedColor);
  setIsAnswered(true);
  setIsTimerRunning(false);
  
  const currentQuestion = quizData.mixed[currentQuestionIndex];
  const selectedColors = new Set([selectedPrimaryColor, selectedColor]);
  const correctColors = new Set([currentQuestion.primaryColor, currentQuestion.secondaryColor]);

  // Check if all correct colors are present regardless of order
  const isCorrect = 
    selectedColors.has(currentQuestion.primaryColor) && 
    selectedColors.has(currentQuestion.secondaryColor);

  if (isCorrect) {
    setScore(score + 1);
  }

  // Update stats for both colors
  updateSessionHistory(currentQuestion.primaryColor, selectedColors.has(currentQuestion.primaryColor));
  updateSessionHistory(currentQuestion.secondaryColor, selectedColors.has(currentQuestion.secondaryColor));

  setShowExplanation(true);
};

  // Update session history for color performance tracking
  const updateSessionHistory = (color, isCorrect) => {
    setSessionHistory(prev => ({
      ...prev,
      [color]: {
        correct: prev[color].correct + (isCorrect ? 1 : 0),
        attempted: prev[color].attempted + 1
      }
    }));
  };

  // Move to the next question
  const handleNextQuestion = () => {
    const questions = getCurrentQuestions();
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedPrimaryColor(null);
      setSelectedSecondaryColor(null);
      setIsAnswered(false);
      setShowExplanation(false);
      setTimeRemaining(10);
      setIsTimerRunning(timerEnabled);
    } else {
      // Save quiz results to history
      const newQuizResult = {
        date: new Date().toISOString(),
        mode: gameMode,
        difficulty,
        score,
        totalQuestions: questions.length,
        performanceByColor: { ...sessionHistory }
      };
      // Update user data
const updatedUsers = {
  ...users,
  [username]: {
    ...users[username],
    highScore: Math.max(users[username].highScore, score),
    quizHistory: [...users[username].quizHistory, newQuizResult],
    cumulativeStats: Object.entries(users[username].cumulativeStats).reduce(
      (acc, [color, stats]) => {
        acc[color] = {
          correct: stats.correct + sessionHistory[color].correct,
          attempted: stats.attempted + sessionHistory[color].attempted
        };
        return acc;
      },
      {}
    )
  }
};
setUsers(updatedUsers);
localStorage.setItem("insightsQuizUsers", JSON.stringify(updatedUsers));
      
      setQuizHistory(prev => [...prev, newQuizResult]);
      setGameOver(true);
      setIsTimerRunning(false);
    }
  };


  



  // Return to start screen
  const goToStartScreen = () => {
    setShowStartScreen(true);
    setGameMode("standard");
    setGameOver(false);
    setIsTimerRunning(false);
  };

  // Restart the quiz with same settings
  const handleRestartQuiz = () => {
    startQuiz(gameMode, difficulty, timerEnabled);
  };

  // Get score message based on performance
  const getScoreMessage = () => {
    const questions = getCurrentQuestions();
    const percentage = (score / questions.length) * 100;
    
    if (percentage >= 90) return "Excellent! You're an Insights Discovery expert!";
    if (percentage >= 70) return "Great job! You have a strong understanding of color energies!";
    if (percentage >= 50) return "Good effort! You're developing your color energy recognition.";
    return "Keep practicing! With time, you'll get better at recognizing color energies.";
  };

  // Get feedback on colors the user struggles with
  const getColorFeedback = () => {
    const weakestColors = Object.entries(sessionHistory)
      .filter(([_, stats]) => stats.attempted > 0)
      .map(([color, stats]) => ({
        color,
        accuracy: stats.correct / stats.attempted
      }))
      .sort((a, b) => a.accuracy - b.accuracy);
    
    if (weakestColors.length === 0) return null;
    
    const weakestColor = weakestColors[0];
    if (weakestColor.accuracy < 0.7) {
      return (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="font-semibold">Learning Opportunity:</p>
          <p>You might benefit from studying more about <span className="font-medium">{weakestColor.color}</span> energy.</p>
          <button
            onClick={() => startLearningMode(weakestColor.color)}
            className="mt-2 text-indigo-600 hover:text-indigo-800 underline"
          >
            Learn about {weakestColor.color}
          </button>
        </div>
      );
    }
    
    return null;
  };

  // Color styling for buttons
  const getColorStyle = (color) => {
    switch (color) {
      case "Fiery Red": return "bg-red-500 hover:bg-red-600 text-white";
      case "Sunshine Yellow": return "bg-yellow-400 hover:bg-yellow-500 text-black";
      case "Earth Green": return "bg-green-600 hover:bg-green-700 text-white";
      case "Cool Blue": return "bg-blue-600 hover:bg-blue-700 text-white";
      default: return "bg-gray-600 hover:bg-gray-700 text-white";
    }
  };

  // Updated render methods

  const renderProgressBar = (percentage, color) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className={`${colorStyles[color].bg} h-2.5 rounded-full`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );

  const renderDifficultySelector = () => (
  <div className="mb-6">
    <h3 className="text-sm font-medium mb-3 mt-6 text-gray-700">Select Difficulty</h3>
    <div className="flex gap-2">
      {['easy', 'medium', 'hard'].map((diff) => (
        <button
          key={diff}
          onClick={() => setDifficulty(diff)}
          className={`px-4 py-2 rounded-lg transition-all ${
            difficulty === diff 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {diff.charAt(0).toUpperCase() + diff.slice(1)}
        </button>
      ))}
    </div>
  </div>
);


const renderLearningNavigation = () => (
  <header className="mb-8">
    <div className="flex justify-right ">
      <button
        onClick={() => setCurrentScreen('login')}
        className="bg-gray-400 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex ml-auto"
      >
        Logout
      </button>
  </div>
    <h1 className="text-2xl font-bold text-center mb-4">Hi, {username}</h1>
    <h1 className="text-2xl font-bold text-center mb-4">Welcome to Discovery Insights 🚀</h1>
    <hr className="border-t-2 border-gray-300 mb-6" />
    <div className="border-b pb-4">
      <h2 className="text-xl font-semibold mb-4">Learn About Color Energies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.keys(learningContent).map((color) => (
          <button
            key={color}
            onClick={() => startLearningMode(color)}
            className={`p-4 rounded-lg flex flex-col items-center transition-transform hover:scale-105 ${colorStyles[color].bg}`}
          >
            <span className="text-3xl mb-2">{learningContent[color].image}</span>
            <span className="font-medium text-center">{color}</span>
          </button>
        ))}
      </div>
    </div>
  </header>
);


  // Render color wheel visualization
  const renderColorWheel = () => {
  return (
    <div className="relative w-56 h-56 mx-auto my-6">
      {/* Fiery Red Quadrant */}
      <div
        className={`absolute top-0 left-0 w-28 h-28 bg-red-500 rounded-tl-full flex items-center justify-center 
          ${currentLearningColor === "Fiery Red" ? "border-4 border-black" : ""}`}
        onClick={() => startLearningMode("Fiery Red")}
      >
        <div className="absolute top-14 left-16 transform -translate-x-4 -translate-y-6">
          <p className="text-white font-bold">Fiery Red 🔥</p>
          {/* <p className="absolute top-7 left-6 text-white text-xs">🔥</p> */}
        </div>
      </div>

      {/* Sunshine Yellow Quadrant */}
      <div
        className={`absolute top-0 right-0 w-28 h-28 bg-yellow-400 rounded-tr-full flex items-center justify-center 
          ${currentLearningColor === "Sunshine Yellow" ? "border-4 border-black" : ""}`}
        onClick={() => startLearningMode("Sunshine Yellow")}
      >
        <div className="absolute top-16 left-8 transform -translate-x-6 -translate-y-6">
          <p className="text-white font-bold">Sunshine Yellow☀️</p>
          {/* <p className="text-white text-xs">☀️</p> */}
        </div>
      </div>

      {/* Earth Green Quadrant */}
      <div
        className={`absolute bottom-0 right-0 w-28 h-28 bg-green-600 rounded-br-full flex items-center justify-center 
          ${currentLearningColor === "Earth Green" ? "border-4 border-black" : ""}`}
        onClick={() => startLearningMode("Earth Green")}
      >
        <div className="absolute top-10 left-12 transform -translate-x-6 -translate-y-6">
          <p className="text-white font-bold">Earth Green</p>
          <p className="text-white text-xs">🌿</p>
        </div>
      </div>

      {/* Cool Blue Quadrant */}
      <div
        className={`absolute bottom-0 left-0 w-28 h-28 bg-blue-600 rounded-bl-full flex items-center justify-center 
          ${currentLearningColor === "Cool Blue" ? "border-4 border-black" : ""}`}
        onClick={() => startLearningMode("Cool Blue")}
      >
        <div className="absolute top-12 left-12 transform -translate-x-2 -translate-y-8">
          <p className="text-white font-bold">Cool Blue❄️</p>
          {/* <p className="text-white text-xs">❄️</p> */}
        </div>
      </div>
    </div>
  );
};


  // Render progress chart
const renderProgressChart = () => {
  if (quizHistory.length === 0) return null;

  const recentScores = quizHistory.slice(-5); // Get the last 5 quiz attempts

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Quiz Performance</h3>
      <div className="flex flex-col h-48 border-l-2 border-b-2 border-gray-200 pb-2 pl-2 relative">
        <div className="flex items-end justify-around h-full w-full">
          {recentScores.map((quiz, index) => {
            const percentage = quiz.totalQuestions > 0 ? (quiz.score / quiz.totalQuestions) * 100 : 0;
            const barHeight = (quiz.score / quiz.totalQuestions) * 100;

            return (
              <div key={index} className="flex flex-col items-center mx-2 w-10">
                <div className="relative w-full flex justify-center">
                  {/* Score Label Above Bar */}
                  <div className="absolute -top-6 text-xs font-medium">
                    {percentage.toFixed(0)}%
                  </div>
                  {/* Bar */}
                  <div
                    className="bg-indigo-500 rounded-t w-full min-w-[8px] max-w-[20px]"
                    style={{
                      height: `${barHeight}px`,
                      minHeight: '40px',
                    }}
                  />
                </div>
                {/* Quiz Name Below Bar */}
                <span className="text-xs mt-2 text-gray-600 text-center truncate w-12">
                  {quiz.name || `Quiz ${quizHistory.length - recentScores.length + index + 1}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* X-axis Labels */}
      {/* <div className="mt-2 flex justify-between text-sm text-gray-600">
        <span>0%</span>
        <span>100%</span>
      </div> */}
    </div>
  );
};



// Add login screen
if (currentScreen === 'login') {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        {/* <img 
          src="/logo.gif" 
          alt="Company Logo" 
          className="h-16 w-auto"
        /> */}
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center">Insights Quiz Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            required
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
        >
          {users[username] ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

  // Update the start screen return statement
  if (showStartScreen) {
    return (
      <div className={`p-6 ${screenSize === "mobile" ? "max-w-sm" : "max-w-3xl"} mx-auto bg-white rounded-xl shadow-lg`}>
        {/* {renderNavigationHeader()} */}
        {renderLearningNavigation()}
        
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <AcademicCapIcon className="h-6 w-6 mr-2 text-indigo-600" />
              Start New Quiz
              
              <span className="ml-4 flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                <ClockIcon className="h-4 w-4 mr-1" />
                10s
              </span>
            
            </h2>
            
            {renderDifficultySelector()}

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium mb-2">Quiz Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setGameMode("standard")}
                    className={`p-3 text-left rounded-lg ${
                      gameMode === "standard" 
                        ? 'border-2 border-indigo-500 bg-indigo-50' 
                        : 'border border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <h3 className="font-medium">Standard</h3>
                    <p className="text-sm text-gray-600 mt-1">Single color identification</p>
                  </button>
                  <button
                    onClick={() => setGameMode("mixed")}
                    className={`p-3 text-left rounded-lg ${
                      gameMode === "mixed" 
                        ? 'border-2 border-indigo-500 bg-indigo-50' 
                        : 'border border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <h3 className="font-medium">Mixed Colors (Beta)</h3>
                    <p className="text-sm text-gray-600 mt-1">Identify dual energies</p>
                  </button>
                  <button
                    onClick={() => setGameMode("scenario")}
                    className={`p-3 text-left rounded-lg ${
                      gameMode === "scenario" 
                        ? 'border-2 border-indigo-500 bg-indigo-50' 
                        : 'border border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <h3 className="font-medium">Scenarios (Beta)</h3>
                    <p className="text-sm text-gray-600 mt-1">Real-world situations</p>
                  </button>
                </div>
              </div>

              <button
                onClick={() => startQuiz(gameMode, difficulty, timerEnabled)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg flex items-center justify-center"
              >
                Start Quiz Now
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <ChartBarIcon className="h-6 w-6 mr-2 text-green-600" />
              Your Progress
            </h2>
            
          <div className="text-left mb-6">
            <div className="text-xl font-bold mb-2">
              Personal Best: {((highScore / getCurrentQuestions().length) * 100).toFixed(1)}%
            </div>
          </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              {renderProgressChart()}
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Color Mastery</h3>
                {Object.entries(cumulativeStats).map(([color, stats]) => (
                  <div key={color} className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{color}</span>
                      <span className="text-sm text-gray-600">
                        {stats.attempted > 0 
                          ? `${Math.round((stats.correct / stats.attempted) * 100)}%` 
                          : '--'}
                      </span>
                    </div>
                    {renderProgressBar(
                      stats.attempted > 0 ? (stats.correct / stats.attempted) * 100 : 0,
                      color
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render learning mode
  // Update learning mode section
  
  if (gameMode === "learning") {
    const colorInfo = learningContent[currentLearningColor];
    
    return (
      <div className={`p-6 ${screenSize === "mobile" ? "max-w-sm" : "max-w-3xl"} mx-auto bg-white rounded-xl shadow-lg`}>
        <header className="mb-8 border-b pb-4">
      <button
        onClick={goToStartScreen}
        className="flex items-center text-gray-600 hover:text-gray-800"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Back to Main
      </button>
      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          {gameMode === 'learning' ? 'Learning Mode' : 'Color Energy Quiz'}
        </h1>
        {!showStartScreen && (
          <div className="flex items-center gap-4">
          </div>
        )}
      </div>
    </header>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className={`p-6 rounded-lg ${colorStyles[currentLearningColor].bg}`}>
              <div className="flex items-center mb-6">
                <span className="text-5xl mr-4">{colorInfo.image}</span>
                <div>
                  <h1 className="text-3xl font-bold">{colorInfo.title}</h1>
                  <p className="text-lg mt-2">{colorInfo.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg">
                  <h3 className="font-semibold mb-2">Strengths</h3>
                  <ul className="list-check space-y-2">
                    {colorInfo.characteristics.slice(0, 4).map((char, i) => (
                      <li key={i} className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded-lg">
                  <h3 className="font-semibold mb-2">Challenges</h3>
                  <ul className="list-warning space-y-2">
                    {colorInfo.characteristics.slice(4).map((char, i) => (
                      <li key={i} className="flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Interactive Color Wheel</h3>
              {renderColorWheel()}
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Typical Phrases</h3>
              <div className="space-y-2">
                {colorInfo.quotes.map((quote, i) => (
          <div
            key={i}
            className={`p-3 bg-white rounded border-l-4 ${colorStyles[currentLearningColor].border}`}
          >
            "{quote}"
          </div>
                ))}
              </div>
            </div>
      </div>
    );
  }



  // Render quiz interface
  if (!showStartScreen && !gameOver) {
    const currentQuestion = getCurrentQuestion();
    const isMixedMode = gameMode === "mixed";
    const isScenarioMode = gameMode === "scenario";
    
    return (
      <div className={`p-4 ${screenSize === "mobile" ? "max-w-sm" : "max-w-2xl"} mx-auto bg-white rounded-xl shadow-md`}>

        <header className="mb-8 border-b pb-4">
       <button
        onClick={goToStartScreen}
        className="flex items-center text-gray-600 hover:text-gray-800"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Back to Main
      </button>
      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          {gameMode === 'learning' ? 'Learning Mode' : 'Color Energy Quiz'}
        </h1>
        {!showStartScreen && (
          <div className="flex items-center gap-4">
          </div>
        )}
      </div>
    </header>


        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-lg font-semibold">Question {currentQuestionIndex + 1}</span>
            {timerEnabled && (
    <div className="flex items-center gap-2 text-red-600 font-medium">
      <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
      </svg>
      <span>{timeRemaining}s</span>
    </div>
  )}
          </div>
          <span className="text-lg font-semibold">Score: {score}</span>
        </div>
        
        {isScenarioMode && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">{getCurrentScenario()}</p>
          </div>
        )}
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-lg italic">"{currentQuestion.text}"</p>
        </div>
        
        {isMixedMode ? (
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">Select Primary Color:</p>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(learningContent).map(color => (
                  <button
                    key={color}
                    onClick={() => handlePrimaryColorSelect(color)}
                    className={`${getColorStyle(color)} p-3 rounded-lg ${
                      selectedPrimaryColor === color ? "ring-4 ring-black" : ""
                    }`}
                    disabled={isAnswered}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            {selectedPrimaryColor && (
              <div>
                <p className="font-semibold mb-2">Select Secondary Color:</p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(learningContent)
                    .filter(color => color !== selectedPrimaryColor)
                    .map(color => (
                      <button
                        key={color}
                        onClick={() => handleSecondaryColorSelect(color)}
                        className={`${getColorStyle(color)} p-3 rounded-lg ${
                          selectedSecondaryColor === color ? "ring-4 ring-black" : ""
                        }`}
                        disabled={isAnswered}
                      >
                        {color}
                      </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(learningContent).map(color => (
              <button
                key={color}
                onClick={() => handleColorSelect(color)}
                className={`${getColorStyle(color)} p-3 rounded-lg ${
                  selectedPrimaryColor === color ? "ring-4 ring-black" : ""
                }`}
                disabled={isAnswered}
              >
                {color}
              </button>
            ))}
          </div>
        )}
        
        {/* {showExplanation && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg"> */}


 {showExplanation && (
  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
    {gameMode === "mixed" ? (
      <div>
        <p className="font-semibold mb-2">
          {[...new Set([selectedPrimaryColor, selectedSecondaryColor])].sort().join(" + ") === 
           [currentQuestion.primaryColor, currentQuestion.secondaryColor].sort().join(" + ")
            ? "✅ Perfect Match!"
            : "❌ Combination Needed:"}
        </p>
        <p>
          {[...new Set([selectedPrimaryColor, selectedSecondaryColor])].sort().join(" + ") === 
           [currentQuestion.primaryColor, currentQuestion.secondaryColor].sort().join(" + ")
            ? "You matched both colors correctly!"
            : `Correct combination: ${currentQuestion.primaryColor} + ${currentQuestion.secondaryColor}`}
        </p>
      </div>
    ) : (
      <p className="font-semibold text-green-600 mb-2">
        {selectedPrimaryColor === currentQuestion.color 
          ? "✅ Correct!" 
          : `❌ Incorrect. The correct answer is ${currentQuestion.color}.`}
      </p>
    )}
    <p>{currentQuestion.explanation}</p>
    <button
      onClick={handleNextQuestion}
      className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
    >
      {currentQuestionIndex < getCurrentQuestions().length - 1 ? "Next Question" : "Finish Quiz"}
    </button>
  </div>
)}




            
          </div>
        )}

  

  // Render results screen
  if (gameOver) {
    const totalQuestions = getCurrentQuestions().length;
    
    return (
      <div className={`p-4 ${screenSize === "mobile" ? "max-w-sm" : "max-w-2xl"} mx-auto bg-white rounded-xl shadow-md`}>
        <h1 className="text-3xl font-bold mb-4 text-center">Quiz Complete!</h1>
        
        <div className="text-center mb-6">
          <div className="text-4xl font-bold mb-2">{score}/{totalQuestions}</div>
          <div className="text-xl">{getScoreMessage()}</div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Performance by Color</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(sessionHistory).map(([color, stats]) => (
              <div key={color} className="p-3 rounded-lg bg-gray-50">
                <div className="flex items-center mb-2">
                  <span className={`text-sm font-semibold ${getColorStyle(color)} px-2 py-1 rounded`}>
                    {color}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Accuracy:</span>
                  <span>
                    {stats.attempted > 0 
                      ? `${Math.round((stats.correct / stats.attempted) * 100)}%` 
                      : "N/A"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {getColorFeedback()}
        {renderProgressChart()}
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={handleRestartQuiz}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
          >
            Try Again
          </button>
          <button
            onClick={goToStartScreen}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
          >
            Main Menu
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default EnhancedInsightsQuiz;