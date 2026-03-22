## An AI-powered platform for practicing real-time mock interviews.

MockInter helps candidates prepare for interviews using AI-driven voice interactions, instant feedback, and personalized interview flows—built with Next.js, Firebase, and the OpenAI / Vapi Agent API....

<img width="1902" height="980" alt="image" src="https://github.com/user-attachments/assets/7259fce3-750b-47ce-b847-1571717c7196" />
<img width="1831" height="806" alt="image" src="https://github.com/user-attachments/assets/f598b71c-65ef-48c7-80fe-235c01262a85" />


🚀 Features
🎤 AI Interviewer (Voice + Text)

Conduct mock interviews with an AI interviewer

Real-time voice-based Q&A

Context-aware dynamic questioning

📝 Detailed Feedback & Scoring

Instant evaluation after each interview

Highlights strengths & improvement areas

Tracks user performance over time

🧑‍💻 Multiple Interview Categories

Behavioral interviews

DSA / coding interviews (conceptual)

System design round (basic/intro level)

HR interviews

🔥 Authentication & User Profiles

Secure login using Firebase Auth

Progress stored per-user

⚙️ Modern Tech Stack

Next.js 14 (App Router)

TypeScript

Firebase (Auth + Firestore)

Vapi Agent / OpenAI API for AI responses

Tailwind CSS + ShadCN UI

📂 Project Structure<br/>
MockInter/<br/>
│── app/                 <br/>
│── components/        <br/>
│── firebase/          <br/>
│── lib/               <br/>
│── types/              <br/>
│── public/             <br/>
│── constants/          <br/>
│── next.config.ts <br/>
│── package.json <br/>
│── README.md <br/>

🛠️ Getting Started
1️⃣ Install Dependencies
npm install
# or
yarn install

2️⃣ Run Development Server
npm run dev
# or
yarn dev


The app will be available at:
👉 http://localhost:3000

3️⃣ Environment Variables

Create a .env.local file:

NEXT_PUBLIC_FIREBASE_API_KEY=...<br/>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...<br/>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...<br/>

OPENAI_API_KEY=...<br/>
VAPI_AGENT_KEY=...<br/>

🤖 How It Works

User selects interview type

AI agent (Vapi) starts a real-time voice session

Your answers are evaluated

Feedback & score generated

Data saved to Firebase for future insights

## 💛 Author <br/>
Anjali Daharwal<br/>
CS Student | Web Developer | Java Developer | Full-Stack Developer
