// ABOUTME: Structured content for the OpenChat blog.
// ABOUTME: Each article is rendered by pages/blog/index.tsx and pages/blog/[slug].tsx.

import { StaticImageData } from "next/image"

import coverImage from "../public/blog/cover.jpg"
import pillar1Memory from "../public/blog/pillar-1-memory.jpg"
import pillar2Skills from "../public/blog/pillar-2-skills.jpg"
import pillar3Soul from "../public/blog/pillar-3-soul.jpg"
import pillar4Crons from "../public/blog/pillar-4-crons.jpg"
import pillar5Loop from "../public/blog/pillar-5-self-improving-loop.jpg"
import agentsMd from "../public/blog/agents-md.jpg"
import vpsSetup from "../public/blog/vps-setup.png"
import newAgentDecisionTree from "../public/blog/new-agent-decision-tree.png"
import scalingPattern from "../public/blog/scaling-pattern-bad-vs-good.png"
import scalingContainers from "../public/blog/scaling-containers.png"
import dashboardSessions from "../public/blog/dashboard-sessions.jpg"
import dashboardKanban from "../public/blog/dashboard-kanban.jpg"

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "image"; src: StaticImageData; alt: string }

export type Article = {
  slug: string
  title: string
  /** ISO date (yyyy-mm-dd) used for sorting and the <time> element */
  date: string
  excerpt: string
  author: {
    name: string
    handle: string
    url: string
  }
  /** Where the article was originally published */
  source: {
    label: string
    url: string
  }
  content: ArticleBlock[]
}

const articles: Article[] = [
  {
    slug: "from-zero-to-ultimate-hermes-agent-army",
    title: "From Zero to Ultimate Hermes Agent Army",
    date: "2026-05-09",
    excerpt:
      "Hermes Agent. Open source, MIT licensed, 140K GitHub stars and growing fast. Built by Nous Research.",
    author: {
      name: "Nate Herk",
      handle: "@nateherk",
      url: "https://x.com/nateherk",
    },
    source: {
      label: "Originally posted on X",
      url: "https://x.com/nateherk/status/2053308681299616125",
    },
    content: [
      {
        type: "image",
        src: coverImage,
        alt: "Hermes Agent — rows of glowing humanoid robots beneath the Hermes Agent wordmark.",
      },
      {
        type: "paragraph",
        text: "Hermes Agent. Open source, MIT licensed, 140K GitHub stars and growing fast. Built by Nous Research.",
      },
      {
        type: "paragraph",
        text: "This is the full breakdown. The mental model, the setup, the API key handling, the first cron worth running, the dashboard, the scaling rules, and every piece of practical advice I'd give you if we were sitting down to build one together.",
      },
      { type: "heading", text: "TL;DR" },
      {
        type: "list",
        items: [
          "Hermes is an open source agent that grows with you. VPS, Mac Mini, laptop, Docker, even Android via Termux.",
          "Five pillars: Memory, Skills, Soul, Crons, Self-Improving Loop.",
          "Connects to Telegram, Discord, Slack, WhatsApp, iMessage.",
          "I don't replace Claude Code with it. Hermes is the on-the-go, voice-first, scheduled-automation layer that lives in your pocket.",
        ],
      },
      { type: "heading", text: "What Hermes Actually Is" },
      { type: "paragraph", text: "It's the agent in your pocket." },
      {
        type: "paragraph",
        text: "Claude Code is my daily driver for knowledge work and coding at my desk.",
      },
      {
        type: "paragraph",
        text: "Hermes is what I talk to from Telegram while I'm walking the dog, on a flight, or away from the laptop.",
      },
      { type: "paragraph", text: "Same brain, different interface." },
      {
        type: "paragraph",
        text: "Out of the box, 91 skills ship with it. The community hub has 520+ more. 16 of those are official Anthropic skills. I've never had to install Excalidraw or a transcription skill. Both were already there.",
      },
      { type: "paragraph", text: "My main one runs:" },
      {
        type: "list",
        items: [
          "A daily AI news briefing posted to my Skool community",
          "YouTube comment monitoring with sarcastic-but-not-rude replies",
          "Skool community engagement",
          "Morning business summaries",
          "Server health checks",
          "Research reports",
          "Follow-up reminders",
        ],
      },
      { type: "paragraph", text: "All scheduled. All from natural language." },
      {
        type: "paragraph",
        text: "I once asked it to make a video about itself using HyperFrames. It did the research. Installed HyperFrames on its own. Used vision to grade its own output. Iterated. Shipped a video that wasn't half bad.",
      },
      {
        type: "paragraph",
        text: "The mindset shift: Hermes understands Hermes better than you do. Just ask it.",
      },
      { type: "heading", text: "Hermes vs Claude Code vs OpenClaw" },
      {
        type: "paragraph",
        text: "These are not the same tool. Don't pick one.",
      },
      {
        type: "list",
        items: [
          "Claude Code is Anthropic's coding assistant. Lives in your terminal next to your code. You sit and drive it. Daily driver for desk work.",
          "OpenClaw was created by Peter Steinberger (now at OpenAI). 350K+ stars. NVIDIA built Nemo Claw on top of it. Strong on-the-go agent.",
          "Hermes is lighter, faster, more focused on the self-improvement loop. Built for people who want to tinker with open source models like Qwen and LLaMA.",
        ],
      },
      {
        type: "paragraph",
        text: "I switched from OpenClaw to Hermes because OpenClaw was crashing too often after rapid updates. Hermes has been more stable for me.",
      },
      {
        type: "paragraph",
        text: "The unlock: all of these can run side by side on the same GitHub repo. Your business context, skills, and memory live in version control. Then any agent (Claude Code, Hermes, OpenClaw, Codex) can plug into it.",
      },
      {
        type: "paragraph",
        text: "The terminology shifts (Claude.md vs Agents.md vs Hermes files) but each agent understands its own conventions. Tell it \"make this repo work for you\" and it adapts.",
      },
      { type: "heading", text: "The Five Pillars" },
      {
        type: "paragraph",
        text: "This is the mental model that makes Hermes click. Skip this and nothing else makes sense.",
      },
      { type: "heading", text: "1️⃣ Memory" },
      {
        type: "list",
        items: [
          "user.md is who you are, your style, your preferences, things you don't like",
          "memory.md is your projects, your environment, your business context",
          "Both load at session start so the agent doesn't wake up stateless every time",
          "Think Memento. Agents wake up with no memory unless you've built the context for them",
          "Hermes auto-extracts facts and updates these files as you work",
          "Don't be passive. Tell it: \"Chuck that in memory\" or \"Update user.md so I never have to repeat that\"",
          "Save durable preferences and facts. Use session search for old conversations (stored in SQLite)",
          "Never put secrets or temporary task status in memory",
        ],
      },
      {
        type: "image",
        src: pillar1Memory,
        alt: "Pillar 1: Memory diagram — USER.md and MEMORY.md inject into a session-start snapshot that guides the Hermes session, with a memory tool updating the files.",
      },
      { type: "heading", text: "2️⃣ Skills" },
      {
        type: "list",
        items: [
          "Procedural memory. Reusable playbooks",
          "Recipe analogy: ask for chocolate chip pancakes from memory and they're inconsistent. Pull up the recipe and they come out the same every time.",
          "Stored as skill.md files with YAML front matter",
          "Front matter tells the agent when to invoke the skill (progressive disclosure)",
          "The body only loads when the skill is invoked, so you don't bloat the context",
          "Hermes analyzes your conversations and offers to turn repeated patterns into skills",
          "Give feedback and skills update over time",
        ],
      },
      {
        type: "image",
        src: pillar2Skills,
        alt: "Pillar 2: Skills diagram — a complex task or correction becomes a SKILL.md with YAML frontmatter, fed by a Skills Hub, enabling faster, safer repeat execution.",
      },
      { type: "heading", text: "3️⃣ Soul" },
      {
        type: "list",
        items: [
          "soul.md shapes the agent's personality",
          "Spin up six Hermes agents and each one can have its own vibe",
          "Concise, sarcastic, blunt, formal, whatever fits the role",
          "My YouTube comment Hermes is sarcastic but not rude. That's all in the soul",
          "Evolves over time as you give it feedback",
        ],
      },
      {
        type: "image",
        src: pillar3Soul,
        alt: "Pillar 3: Soul diagram — SOUL.md styles Hermes responses so the same tools and memory feel like your assistant rather than a generic bot.",
      },
      { type: "heading", text: "4️⃣ Crons" },
      {
        type: "list",
        items: [
          "This is where Hermes leaves Claude Code in the dust",
          "Tell it \"every morning at 6am do X\" and it just does it",
          "Each cron runs in a fresh isolated session and sends results back to chat",
          "Useful flags: CONTEXTFROM passes one job's output into the next. WORKDIR runs tools from a project folder. NOAGENT runs a script without the agentic harness loop (just executes the workflow, no agent reasoning)",
          "Cron sessions cannot recursively create more cron jobs, so the prompt has to be self-contained",
          "You can also set time-bounded crons. \"For the next 12 hours, run every 10 minutes, then kill it\" works the same way the /loop slash command works in Claude Code",
        ],
      },
      {
        type: "image",
        src: pillar4Crons,
        alt: "Pillar 4: Crons diagram — natural language creates a scheduled cron job that runs in a fresh isolated session and delivers results back to chat, local files, or a platform target.",
      },
      { type: "heading", text: "5️⃣ Self-Improving Loop" },
      {
        type: "list",
        items: [
          "Do work, get feedback, save to memory",
          "Turn repeatable steps into skills",
          "Search past sessions when old context matters",
          "The more you use it, the better it gets",
          "Honest caveat: automatic doesn't mean magic. The loop works best when you correct it on the spot, ask it to save things, and let it create new skills after complex work",
        ],
      },
      {
        type: "image",
        src: pillar5Loop,
        alt: "Pillar 5: Self-Improving Loop diagram — do the work, save durable facts to memory, turn repeatable steps into skills, and search past sessions, for a better next run.",
      },
      {
        type: "paragraph",
        text: "There's also a sixth honorable mention: agents.md (Codex's version, similar to Claude.md). Project-level context. Useful when you're using Hermes in the terminal for coding.",
      },
      {
        type: "image",
        src: agentsMd,
        alt: "Context File: AGENTS.md diagram — a project folder's AGENTS.md injects project-local architecture, commands, and rules so the Hermes session follows project rules while using tools.",
      },
      {
        type: "paragraph",
        text: "Also, my Hermes agent generated all of these Excalidraw diagrams ;)",
      },
      { type: "heading", text: "The Claude Code Trick That Saves You" },
      { type: "paragraph", text: "This is the move most people skip. Don't." },
      {
        type: "paragraph",
        text: "Build a Claude Code project to manage your Hermes agents.",
      },
      {
        type: "paragraph",
        text: "I have one called `vps-agents`. Inside it, every agent has its own folder. Mine has bull (my trading bot), my main Hermes, uppit-os, and claus (my personal assistant).",
      },
      { type: "paragraph", text: "Each folder stores:" },
      {
        type: "list",
        items: [
          "The IP address",
          "The admin username and password",
          "Notes on which API keys live where",
          "Container setup details",
          "Docker info",
          "Security and integration notes",
        ],
      },
      {
        type: "paragraph",
        text: "Why it matters: when something breaks at 11pm, I don't dig through Hostinger looking for passwords. I open Claude Code, point it at the project, and it fixes the agent for me.",
      },
      {
        type: "paragraph",
        text: "You're building the assistant for the assistant.",
      },
      { type: "heading", text: "Setting Up Your VPS On Hostinger" },
      {
        type: "paragraph",
        text: "A VPS is a computer in the cloud you rent. Get an IP, get a password, SSH in, install stuff. Done.",
      },
      { type: "paragraph", text: "Here's the path:" },
      {
        type: "list",
        items: [
          "Pick a plan. KVM2 is plenty to start. KVM1 if you want cheap. Scale up later if you need more CPU/RAM",
          "Annual plan saves real money. Use code NATEHURK for 10% off",
          "Choose Ubuntu 24.04 LTS as the OS",
          "The Hostinger marketplace has a Hermes Agent one-click install if you want to skip the manual route",
          "Set a root password (you can regenerate it later if you forget)",
          "Turn on the free malware scanner",
        ],
      },
      {
        type: "paragraph",
        text: "Now the choice that matters: install at the root of the VPS or use Docker?",
      },
      {
        type: "list",
        items: [
          "Root install: Hermes lives directly on the VPS at the root level",
          "Docker container (one-click): Each agent gets its own isolated container with its own keys, memory, and tools",
        ],
      },
      {
        type: "image",
        src: vpsSetup,
        alt: "Two ways to set up Hermes on Hostinger — install directly on the VPS, or use the one-click Docker image where each agent runs inside its own isolated container.",
      },
      {
        type: "paragraph",
        text: "I went Docker. Each agent stays cleanly separated. Easy to spin up a marketing Hermes, a finance Hermes, or a content Hermes later, each in their own container, each with their own .env.",
      },
      {
        type: "paragraph",
        text: "Pro tip: change the hostname so your VPS list stays organized. Mine looks like `youtube-hermes.vps`. Hostinger's UI updates instantly.",
      },
      { type: "heading", text: "Onboarding Hermes" },
      {
        type: "paragraph",
        text: "Once the container is deployed, hit Open. Punch in the admin username and password. Onboarding fires.",
      },
      {
        type: "paragraph",
        text: "Here's the inference provider call. Hermes supports tons of providers. The cheapest one for most people:",
      },
      {
        type: "list",
        items: [
          "OpenAI Codex via OAuth. Plugs your existing ChatGPT subscription ($20, $100, or $200/mo) into Hermes instead of burning API tokens.",
        ],
      },
      {
        type: "paragraph",
        text: "For open-source-purist mode you can run Qwen or LLaMA locally. I'm not there yet. Plan to experiment.",
      },
      {
        type: "paragraph",
        text: "Choose your model (GPT-5.5 in my case). Set up messaging. Pick Telegram from the list with the spacebar.",
      },
      { type: "paragraph", text: "Telegram setup, 90 seconds:" },
      {
        type: "list",
        ordered: true,
        items: [
          "Open Telegram, message BotFather, type `/newbot`",
          "Name your bot. Username has to end in \"Bot\"",
          "Copy the token. Paste it back into the Hermes terminal",
          "Get your Telegram user ID from the USERINFO bot",
          "Paste the user ID into Hermes to lock the bot to you",
        ],
      },
      {
        type: "paragraph",
        text: "Tools that ship enabled: Vision, Browser Automation, Image Gen, Text-to-Speech, Terminal Commands, Task Planning, Skills.",
      },
      {
        type: "paragraph",
        text: "Save everything Hermes prints during onboarding (settings paths, API key paths, config paths) into your Claude Code project. Future-you will thank present-you.",
      },
      {
        type: "paragraph",
        text: "Here's what stood out. I didn't have to know any of this before I started. I just asked Hermes and Claude Code to explain it as I went.",
      },
      { type: "heading", text: "API Keys, Done The Right Way" },
      {
        type: "paragraph",
        text: "Don't paste API keys in chat. Even if the model is private, the key is now in conversation history.",
      },
      {
        type: "paragraph",
        text: "If you're using a hosted model and you accidentally drop one, just rotate it. Not the end of the world. But best practice is never paste them.",
      },
      { type: "paragraph", text: "The right way:" },
      {
        type: "list",
        ordered: true,
        items: [
          "SSH into your container",
          "Run `hermes config set GITHUB_TOKEN [your_token]`",
          "The key gets saved into the container's `/opt/data/.env`. Never seen by the model. Never in logs.",
        ],
      },
      {
        type: "paragraph",
        text: "Same pattern for every key. Named per agent. Scoped to the minimum permissions that agent actually needs.",
      },
      {
        type: "paragraph",
        text: "If you ever need to wipe or rotate a key, ask Hermes for the Nano command to open the right .env. The first time I tried this, the command pointed at the root VPS .env, not the container's. Hermes corrected itself once I told it the agent runs inside Docker. Lesson: you don't need to understand the path tree, you just need to communicate clearly what you're seeing.",
      },
      { type: "heading", text: "The First Cron Worth Building" },
      {
        type: "paragraph",
        text: "Connect Hermes to a private GitHub repo. Then schedule a nightly sync.",
      },
      {
        type: "paragraph",
        text: "If the VPS gets corrupted, your skills and memory are gone. With a GitHub backup, you spin up a new Hermes, point it at the repo, and you're back online.",
      },
      {
        type: "paragraph",
        text: "I told my agent: \"Every night at midnight Central, push everything except secrets to my private GitHub repo.\"",
      },
      {
        type: "paragraph",
        text: "It built the skill. Set the cron. Wrote the .gitignore so secrets never get committed. Done.",
      },
      {
        type: "paragraph",
        text: "The annoying part: containers run in UTC by default. Hermes self-checks Central time on the hour to handle daylight savings. It figured that out on its own.",
      },
      {
        type: "paragraph",
        text: "Token best practice: classic GitHub token, scoped to repo + contents (read and write) only. Don't grant more than the agent needs.",
      },
      {
        type: "paragraph",
        text: "That's the loop. Natural language in. Working automation out.",
      },
      { type: "heading", text: "CLI vs Telegram" },
      {
        type: "paragraph",
        text: "Same agent, same brain, same skills, same memory, same window. Different interfaces.",
      },
      {
        type: "list",
        items: [
          "CLI (terminal) is the cockpit. Best for deep work, coding, hardcore building. You can see context usage, manage compaction, hit slash commands, and live in there like an operating system.",
          "Telegram is the remote control. Best for scheduled jobs, quick tasks, voice messages, on-the-go knowledge work, talking to it from your phone.",
        ],
      },
      {
        type: "paragraph",
        text: "Telegram has less visibility into context. The session feels ambiguous because auto-compaction runs under the hood and you can't really see when. So don't vibe code apps from Telegram. Risk of context rot is too high.",
      },
      {
        type: "paragraph",
        text: "But for \"Hey check ClickUp,\" \"research this for me,\" \"schedule this cron,\" \"post to Skool\" — Telegram is faster than the CLI ever could be.",
      },
      {
        type: "paragraph",
        text: "Token-based context, not message-based. The model always sees system prompt + user.md + soul.md + memory.md. That all has to fit. As you approach the limit, auto-compaction fires.",
      },
      { type: "heading", text: "Two Paths To Your First Skill" },
      { type: "paragraph", text: "There are two ways to add a skill." },
      {
        type: "list",
        items: [
          "Describe an outcome. \"Every night at midnight Central, sync this repo.\" Hermes builds the skill, names it, sets the cron, ships it.",
          "Install one from a URL. Grab a skill from the community hub or your own Claude Code projects. Tell Hermes the link. It installs and registers it.",
        ],
      },
      {
        type: "paragraph",
        text: "I tested by asking Hermes to install the official HyperFrames skill and generate a 5-second video introducing itself based on its own soul.md. It did the install, ran the skill, and produced a usable clip with no extra hand-holding.",
      },
      {
        type: "paragraph",
        text: "Watch the agent while it's working. If you wanted it to invoke a skill and it didn't, that's your signal to tell it: \"Update the YAML front matter so this skill triggers when I say things like X.\"",
      },
      { type: "paragraph", text: "That's how skills actually get sharp." },
      { type: "heading", text: "Treat Hermes Like A New Hire" },
      { type: "paragraph", text: "This is non-negotiable." },
      {
        type: "list",
        items: [
          "Each Hermes agent gets its own accounts (Gmail or agent mail), not yours",
          "Each agent gets its own API keys, scoped tight",
          "Use named API keys per agent (OpenRouter, Perplexity, etc.) so you can see which agent is spending what",
          "Least privilege rule: only the credentials and tools needed for the job",
          "Marketing agent doesn't need read access to QuickBooks. Finance agent does",
        ],
      },
      {
        type: "paragraph",
        text: "You wouldn't hand a brand new intern your credit card. Don't hand it to your agent either.",
      },
      {
        type: "paragraph",
        text: "Lock down the VPS too. Set up a firewall on Hostinger, restrict to your IP, block unused ports. Build a skill that runs a nightly security audit. Hermes can attack its own setup and report what it found.",
      },
      {
        type: "paragraph",
        text: "I didn't know anything about firewalls before this. Hermes and Claude Code walked me through it. The agents teach you the system.",
      },
      { type: "heading", text: "Maintenance Rules" },
      {
        type: "paragraph",
        text: "These are the rules I follow to keep an agent sharp:",
      },
      {
        type: "list",
        items: [
          "Wrong twice on the same thing? Correct it on the spot and tell it to update the relevant skill or memory",
          "Same instruction twice? Ask Hermes to write a skill for it",
          "Verbose or off-tone? Edit the soul",
          "New scheduled task? Build a skill, then ask Hermes to schedule it",
          "Something breaks? Check memory.md first. Stale memory is the number one cause of weird agent behavior",
        ],
      },
      {
        type: "paragraph",
        text: "Audit any time. \"Read me your memory file. Read me your soul file.\" See what's in there. Cut what's wrong.",
      },
      {
        type: "paragraph",
        text: "This isn't a tool you finish setting up. It's a teammate you keep training.",
      },
      { type: "heading", text: "Compaction Will Hit. Don't Panic" },
      {
        type: "paragraph",
        text: "Eventually you'll hit the auto-compaction threshold. Mine fired around 170K tokens (threshold is roughly 136K).",
      },
      {
        type: "paragraph",
        text: "When it fails, Hermes inserts a fallback context marker, pauses crons that need pausing, and updates memory before continuing.",
      },
      {
        type: "paragraph",
        text: "If you don't understand what just happened, paste the message back to it: \"Explain this to me. What does that fallback marker mean?\" It'll explain. That's part of the loop.",
      },
      { type: "heading", text: "When To Spin Up A Second Hermes" },
      { type: "paragraph", text: "Simple decision tree:" },
      {
        type: "list",
        items: [
          "Needs its own credentials, secrets, or tools? → New agent",
          "Needs its own long-term memory? → New agent",
          "Ongoing, repeated work that's basically a separate role? → New agent",
          "Otherwise → Keep it in your main personal one",
        ],
      },
      {
        type: "image",
        src: newAgentDecisionTree,
        alt: "When should you create a new Hermes agent? Decision tree — create a new agent if it needs different permissions, separate long-term memory, or is ongoing repeated work; otherwise keep it in your main personal Hermes.",
      },
      {
        type: "paragraph",
        text: "Recommendation: get max use out of your main personal Hermes first. Once you've built five or ten skills there, splitting becomes obvious.",
      },
      {
        type: "paragraph",
        text: "Migration is easy. Skills, crons, soul, memory are all markdown files. Move them, point the new agent at them, you're running.",
      },
      {
        type: "paragraph",
        text: "Bad pattern: one mega-agent with every API key, every skill, every cron. High confusion. High blast radius when something breaks.",
      },
      {
        type: "paragraph",
        text: "Good pattern: a main personal Hermes plus split-off agents for marketing, finance, content, or whatever vertical fits. Each in its own Docker container. Each with scoped keys. Each with its own .env that never gets committed to GitHub.",
      },
      {
        type: "image",
        src: scalingPattern,
        alt: "Good scaling pattern: specialized agents, not one mega-agent — the bad pattern is one mega-agent with every key and cron; the good pattern is separate marketing, finance, and ops agents each with limited keys and tools.",
      },
      {
        type: "image",
        src: scalingContainers,
        alt: "Scaling Hermes on one VPS — each agent (Personal, Marketing, Ops, Finance) gets its own Docker container with private keys, role memory, and scoped tools so one broken agent doesn't affect the others.",
      },
      {
        type: "paragraph",
        text: "Your main Hermes can help you plan the org structure. Treat it like your COO. Ask it: \"Based on what we've built, what should I split off first?\" It'll have an opinion.",
      },
      { type: "heading", text: "The Dashboard And Kanban Board" },
      {
        type: "paragraph",
        text: "Hermes ships with its own dashboard. Recent sessions, connected platforms, keys, configs, skills, plug-ins, crons, and a Kanban board for assigning tasks across multiple agents.",
      },
      {
        type: "paragraph",
        text: "To open it the first time you have to tunnel into your container, open the gateway, and run a few commands. It's clunky on first try.",
      },
      {
        type: "paragraph",
        text: "The fix: tell your Hermes \"I want to open the dashboard. Walk me through it.\" Once it works, ask it to save the steps as a skill so future opens are three commands.",
      },
      {
        type: "image",
        src: dashboardSessions,
        alt: "Hermes Agent dashboard — the Sessions view showing connected platforms (Telegram) and a list of recent sessions with model, message, and tool counts.",
      },
      {
        type: "image",
        src: dashboardKanban,
        alt: "Hermes Agent dashboard — the Kanban board with Triage, Todo, Ready, In Progress, Blocked, and Done lanes for assigning tasks across agents.",
      },
      {
        type: "paragraph",
        text: "I rarely use the dashboard because most of my Hermes work happens on the go. But if you're running multiple agents and want to assign tasks visually, the Kanban board is solid.",
      },
      { type: "heading", text: "Wrap" },
      { type: "paragraph", text: "Hermes isn't a replacement for Claude Code." },
      {
        type: "paragraph",
        text: "It's the on-the-go, voice-first, scheduled-automation layer that lives in your pocket and grows with you.",
      },
      {
        type: "paragraph",
        text: "Get one running. Connect Telegram. Set the GitHub backup. Build a couple of skills. The compounding starts after that.",
      },
      {
        type: "paragraph",
        text: "I walk through the full setup, every command, every gotcha, in the video. Link in the first reply.",
      },
    ],
  },
]

export default articles
