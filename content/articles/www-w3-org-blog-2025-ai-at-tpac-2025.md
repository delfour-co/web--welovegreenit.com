---
title: "AI at TPAC 2025"
date: 2025-12-09T13:35:00.000Z
source: "W3C Blog"
language: "en"
link: "https://www.w3.org/blog/2025/ai-at-tpac-2025/"
description: "Web & AI at W3C During the Advisory Committee and Community session held in the middle of the TPAC 2025 week for W3C Members and all attendees —in-person and remote— I (Roy Ruoxi Ran) gave an overview of Web & AI at W3C (7-minute video available) where I talked about how W3C is engaging, specificati..."
author: "Roy Ruoxi Ran, Principal Accessibility Specialist; AI, Dominique Hazaël-Massieux, Distinguished Expert, VR/AR & AI"
image: "https://www.w3.org/cms-uploads/_580xAUTO_crop_center-center_none/P1012115.jpeg"
guid: "https://www.w3.org/blog/2025/ai-at-tpac-2025/"
categories:
  - "blogs"
draft: false
---

Web & AI at W3C
During the Advisory Committee and Community session held in the middle of the TPAC 2025 week for W3C Members and all attendees —in-person and remote— I (Roy Ruoxi Ran) gave an overview of Web & AI at W3C (7-minute video available) where I talked about how W3C is engaging, specifications, community efforts and upcoming activities. My presentation included why AI matters for the web, which W3C groups are contributing to advancing AI, how W3C's horizontals (ethics, security, privacy, accessibility) are shaping the impact of AI, and the W3C Workshop in preparation on AI Agents & the Web Browsers.
I also talked about the new Web & AI Interest Group, a chartered group that was nearing the end of W3C Member review and that we have launched since then. The group aims to provide a forum to explore and discuss how emerging AI-related technologies impact and intersect with the web and consider how the community could collaborate to shape these evolutions for the benefit of web users.

 Roy Ruoxi Ran presenting on Web & AI in W3C, 12 November 2025

 Read transcript for Web & AI in W3C, 12 November 2025

 Where AI meets the agenda of W3C working groups and interest groups & companion community groups
Several W3C chartered work groups as well as community-run groups had Artificial Intelligence (AI) on their group meeting's agenda at W3C's annual TPAC 2025, where the global web community met to coordinate the development of Web standards.
Web Machine Learning Working Group
The Working Group focused on the Web Neural Network API (WebNN). Discussions included optimizing WebNN for Small Language Models (SLMs), including the need for new features like dynamic shapes and tensor binding to improve performance. The group also debated the core operator set, considering whether complex operators should be baked into the API or handled via fusion or subgraph composition. A significant portion of the meeting was dedicated to device selection (CPU, GPU, NPU) and the need to balance empowering applications to choose high-performance devices with user privacy and security concerns, particularly regarding device fingerprinting.
Web Machine Learning CG
This companion community group has a scope that extends beyond that of the Web Machine Learning Working Group, and deliverables that may graduate to the Working Group for standardization.
The group focused on incubating higher-level AI APIs and supporting technologies for the agentic web. A major topic was WebMCP (Web Model Context Protocol), which allows websites to expose their JavaScript functionality as "tools" for AI agents (typically those embedded within browsers) to call securely and client-side, circumventing brittle DOM parsing or screenshot interpretation. This included considerations about how to manage consent and permissions for sensitive actions in a WebMCP context. The group also discussed the design of the Prompt API which allows web pages to interact with a browser-provided LLM, specifically adopting an "open-loop" tool execution pattern to enhance interoperability and flexibility across different models.
Web Payment Security Interest Group
The group discussed the emerging landscape of Agentic Payments, highlighting how rising AI-generated traffic is complicating fraud detection and necessitating new regulatory controls, such as auditable consent logs. Two protocols, AP2 and ACP, were presented to support agent-driven commerce: AP2 uses verifiable digital credentials (Mandates) to structure user intent, while ACP uses shared, scoped payment tokens. Discussions centered on the need for the web to adopt clear, consistent semantics to enable predictable agent actions and to prevent agents from relying on screen scraping. A major challenge identified was establishing a secure and verifiable Agent Identity to help merchants trust the payment and determine liability when a agent-managed transaction gets contested.
Autonomous Agents on the Web CG
The group talked about an overview of the WebAgents CG, including its history, goals, and scope. It discussed Hypermedia Multi-Agent Systems, starting from early visions of agents on the web, a brief history of web-based agents and multi-agent systems (MAS), and focusing on the CG's current work on defining architectural patterns for web-based MAS.
AI Agent Protocol CG
This meeting centered on the current architecture of the AI Agent Protocol, providing a review of its structure. The discussion also covered the Community Group's ongoing work and detailed its future plans for development. Finally, the meeting also discussed the proposed agent payment protocols.

 Group meeting: AI Agent Protocol CG

 Documentation CG
One of the agenda items of this Community Groups was the impact of AI on the audience of web developers served by classic documentation and the trends in how developers consume information, particularly through interactions with AI coding agents and chatbots. The group discussed whether and how AI coding agents should be integrated as a target of web documentation writers, in particular in the context where these agents might become a critical component of how developers discover and adopt new web technologies.
AI Knowledge Representation (AI KR) CG
This group talked about developing explicit, shared knowledge representation standards for explainable and trustworthy AI. Future plans focus on refining the proposed standards, expanding the AI KR vocabulary, and eventually transitioning to a formal Working Group. The ultimate goal is to establish W3C knowledge representation standards for industry adoption, supporting transparent and responsible AI systems.
Chinese Web Interest Group
One of agenda items of this group was a new Web AI Agent subset standard to solve the challenges of Generative UI driven by AI agents. The core trend is AI shifting from generating content to generating dynamic UIs and applications on demand. The proposal argues against the "Raw Web" and proprietary DSLs, suggesting a lean, cross-platform standard subset for LLMs to generate instead of complex HTML/CSS/JS. The conclusion recommends building Web AI rendering containers that utilize this open, secure standard to deliver smarter, cross-platform user experiences.
See slides and recording & minutes.

 Where AI is being socialized
The breakout sessions at TPAC were participant-driven meetings. Quite a few revolved around AI.
Semantics for the Agentic Web
This session was a discussion on the challenges facing the "agentic web," where AI agents perform tasks for users. The current reliance of these agents on brittle methods like parsing visual labels often leads to high failure rates when websites change. The core problem discussed was whether existing tools like ARIA (designed for human accessibility) are sufficient and well-suited for machine agents, or if a new, machine-facing semantic layer (possibly re-using existing mechanisms for embedding data in HTML) is required for improved reliability and safety. Participants explored specific high-level semantic needs specific to agents, such as flagging destructive actions.
Agentic Browsing and the Web's Security Model
This session focused on the new security challenges posed by AI agents, which are non-deterministic and can act as a third party between the user and the browser. Key concerns included agent vulnerability to manipulative content, such as marketing, even when operating within defined price bounds. Participants proposed separating the agent and the user agent (browser) to allow the browser to enforce policies on the agent regarding what content it can see and actions it can take. The discussion highlighted the urgent need for new web standards to enforce guardrails and establish the context and authority of agents to ensure the user's best interests are protected.

 Breakout session: Agentic Browsing and the Web's Security Model

 Future of the Open Web
This session discussed the impact of generative AI on the future of the Open Web, following up on IETF discussions about AI crawlers and authentication. The primary concern raised was the exploitative nature of AI scraping that threatens to make publishers close their content, thereby limiting the open availability of information. Participants debated the definition of "Open Web," stressing it should support diverse business models beyond advertising (citing Wikipedia and OpenStreetMap) and provide publishers with choice over how their content is used by machines. The consensus was the need to identify the core values of the open web to preserve them, potentially through new standards for agent identity and technical or policy-based usage expectations for crawled content.
Design and Implementation of the Agent Network Protocol (ANP)
The session introduced the Agent Network Protocol (ANP), an open-source communication protocol that aims to establish an efficient, secure, and open network for AI agent collaboration by breaking down silos. The presentation also detailed the ANP's core design principles and how it differs from other emerging protocols like Google's A2A and Anthropic's MCP.
AI Agents and The Web
This session explored the intersection of AI Agents and the web within W3C, focusing on how web browsers may need to evolve to support these new AI-driven applications. The discussion covered ongoing work, such as is done in the Web Machine Learning (WebML) Working Group and Community Group, and the potential for browsers to become intelligent execution and interaction platforms for large language models and agents. The primary goal was to identify gaps and opportunities across W3C groups, gather community input, and inform the scope of a forthcoming W3C Workshop on AI Agents and the Web.
Stronger Together: Super-charging Agentic AI with Accessibility Destinations
This session discussed how to supercharge Agentic AI using Accessibility Destinations, a proposal to help agents find key pages like "Accessibility Statement" or "Login" predictably. The core idea is to add new metadata or attributes to existing structures, such as sitemaps, to make important site destinations easily discoverable by agents and users alike. Participants agreed that the direction is useful, particularly for common actions like login, which could potentially be elevated into the browser UI for a better user experience. Future work will focus on defining a manageable list of "proposed destinations" and addressing maintenance and scalability concerns.
AI Driven Web Standards Specification
This breakout session explored the possibility of leveraging AI agents to draft and publish next-generation web standard specifications, collaborating with the AI Knowledge Representation Community Group. The primary goal was to review the traditional human-led standards drafting process and then collaborate on creating AI tools to automate and streamline the drafting and publication workflow.