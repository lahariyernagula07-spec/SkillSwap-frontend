import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Bell, BookOpen, CalendarDays, Check, ChevronRight, CircleHelp,
  Code2, Compass, Flame, GraduationCap, Heart, LayoutDashboard, Menu, MessageCircle,
  Palette, Search, Settings, ShieldCheck, Sparkles, Star, Trophy, UserRound, Users,
  Video, X, Zap
} from "lucide-react";
import "./styles.css";

const skills = [
  { id:1, name:"Java Basics", category:"Technology", level:"Beginner Friendly", icon:"☕", teacher:"Shalini Rao", course:"CSE • 2nd Year", wants:"UI/UX", rating:4.8, exchanges:12 },
  { id:2, name:"Photoshop", category:"Design", level:"Intermediate", icon:"🎨", teacher:"Rahul Varma", course:"ECE • 3rd Year", wants:"Java", rating:4.9, exchanges:18 },
  { id:3, name:"Video Editing", category:"Media", level:"Intermediate", icon:"🎬", teacher:"Sneha Patel", course:"IT • 3rd Year", wants:"Python", rating:4.7, exchanges:9 },
  { id:4, name:"Public Speaking", category:"Communication", level:"Beginner Friendly", icon:"🎤", teacher:"Arjun Kumar", course:"CSE • 4th Year", wants:"Figma", rating:4.8, exchanges:15 },
  { id:5, name:"Python", category:"Technology", level:"Intermediate", icon:"🐍", teacher:"Kiran Teja", course:"AI&DS • 3rd Year", wants:"Photography", rating:4.9, exchanges:21 },
  { id:6, name:"Figma / UI UX", category:"Design", level:"Advanced", icon:"🖌️", teacher:"Ananya Singh", course:"CSE • 4th Year", wants:"Cybersecurity", rating:4.9, exchanges:27 }
];

const matches = [
  { name:"Rahul Varma", teach:"Photoshop", want:"Java Basics", score:96, avatar:"RV", color:"violet" },
  { name:"Ananya Singh", teach:"UI/UX", want:"Java", score:91, avatar:"AS", color:"blue" },
  { name:"Sneha Patel", teach:"Video Editing", want:"Python", score:84, avatar:"SP", color:"pink" }
];

function App() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [abstractVisible, setAbstractVisible] = useState(false);

  const navigate = (p) => { setPage(p); setMobileOpen(false); window.scrollTo({top:0, behavior:"smooth"}); };

  return <div className="app">
    <Navbar page={page} navigate={navigate} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
    {page === "project" && <ProjectInfo navigate={navigate} abstractVisible={abstractVisible} setAbstractVisible={setAbstractVisible}/>}
    {page === "home" && <Home navigate={navigate} setModal={setModal}/>}
    {page === "explore" && <Explore setModal={setModal}/>}
    {page === "matches" && <Matches setModal={setModal}/>}
    {page === "dashboard" && <Dashboard navigate={navigate}/>}
    {page === "profile" && <Profile setModal={setModal}/>}
    {page === "sessions" && <Sessions/>}
    {page === "leaderboard" && <Leaderboard/>}
    {page === "chat" && <Chat/>}
    {page === "settings" && <SettingsPage/>}
    <Footer navigate={navigate}/>
    {modal && <Modal type={modal} close={()=>setModal(null)}/>}
  </div>
}

function Navbar({page,navigate,mobileOpen,setMobileOpen}) {
  const links = [["explore","Explore"],["matches","Matches"],["leaderboard","Leaderboard"],["project","Project Info"]];
  return <header className="nav">
    <div className="container nav-inner">
      <button className="brand" onClick={()=>navigate("home")}><span className="brand-mark">S</span><span>Skill<span>Swap</span></span></button>
      <nav className={"nav-links "+(mobileOpen?"open":"")}>
        {links.map(([p,l])=><button key={p} className={page===p?"active":""} onClick={()=>navigate(p)}>{l}</button>)}
        <button className="mobile-nav-btn" onClick={()=>navigate("dashboard")}>Dashboard</button>
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" aria-label="Notifications"><Bell size={19}/><i/></button>
        <button className="avatar sm" onClick={()=>navigate("profile")}>LR</button>
        <button className="menu-btn" onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen?<X/>:<Menu/>}</button>
      </div>
    </div>
  </header>
}

function ProjectInfo({navigate, abstractVisible, setAbstractVisible}) {
  return <main className="project-page">
    <section className="project-hero"><div className="container project-card">
      <div className="eyebrow"><span className="pulse-dot"/> RAGHU ENGINEERING COLLEGE (A) · VISAKHAPATNAM</div>
      <div className="project-pill">BACHELOR OF TECHNOLOGY · MINI PROJECT</div>
      <div className="project-mark">S</div>
      <h1>SKILLSWAP <span>– CAMPUS SKILL EXCHANGE PLATFORM</span></h1>
      <p className="project-subtitle">A Web-Based Student Skill Exchange Mini Project</p>
      <div className="project-rule"/>
      <div className="project-credits">
        <div><small>PRESENTED BY</small><strong>Team 8 · CSE AI-ML</strong><span>M. Shalini Sri · M. Trikanth · A. Tarun Teja<br/>G. Akhil · L. Bhanu Prakash</span></div>
        <div><small>PROJECT GUIDE</small><strong>K. Sandeep Kumar</strong><span>Assistant Professor</span></div>
      </div>
      <div className="project-actions">
        <button className="btn primary" onClick={()=>setAbstractVisible(!abstractVisible)}><BookOpen size={18}/>{abstractVisible ? "Hide Abstract" : "Abstract"}</button>
        <button className="btn secondary" onClick={()=>navigate("home")}>Website Link <ArrowRight size={18}/></button>
      </div>
      <p className="project-note">Learn. Teach. Exchange.</p>
    </div></section>
    {abstractVisible && <section className="container abstract-panel"><div className="eyebrow purple">PROJECT ABSTRACT</div><h2>About SkillSwap</h2><p>SkillSwap is a student-to-student skill exchange platform designed to help students learn new skills by teaching skills they already know. Instead of relying on direct payments or subscriptions, the platform focuses on knowledge exchange, where students can offer a skill, discover another student’s skill, find a compatible match, and arrange an exchange session.</p><p>The project is implemented as a frontend prototype with a responsive web interface and mock data. Students can browse skills such as Java, Python, UI/UX, Photoshop, Video Editing, Public Speaking, and other categories; search and filter skills or students; offer a skill they can teach and a skill they want to learn; view compatible matches with match percentages; send exchange requests; communicate through a chat interface; arrange learning sessions; and view SkillPoints, ratings, exchanges, recommendations, and campus activity.</p><p>The platform includes student profiles, dashboard, sessions/calendar, campus leaderboard, chat, settings, and responsive mobile layouts. React, Vite, JavaScript (JSX), Lucide React, CSS, Inter and Space Grotesk are used, with mock/static frontend data. Backend, database, authentication, real-time messaging, and production matching logic are future development areas.</p></section>}
  </main>
}

function Home({navigate,setModal}) {
  return <main>
    <section className="hero">
      <div className="grid-glow"/>
      <div className="container hero-content">
        <div className="eyebrow"><span className="pulse-dot"/> CAMPUS SKILL EXCHANGE</div>
        <h1>Your skill has value.<br/><span>Trade it. Don't pay for it.</span></h1>
        <p>Learn something new by teaching something you already know. Connect with students who have the skills you want.</p>
        <div className="hero-buttons">
          <button className="btn primary" onClick={()=>navigate("explore")}>Explore Skills <ArrowRight size={18}/></button>
          <button className="btn secondary" onClick={()=>setModal("offer")}>Offer Your Skill <Zap size={17}/></button>
        </div>
        <div className="hero-proof"><div className="proof-avatars"><span>SR</span><span>RV</span><span>SP</span><span>AK</span></div><div><b>1,240+</b><small>students already swapping skills</small></div></div>
      </div>
      <div className="skill-orbit">
        <div className="orbit-line o1"/><div className="orbit-line o2"/>
        <div className="node n1">☕<small>Java</small></div><div className="node n2">🎨<small>Design</small></div>
        <div className="node n3">🐍<small>Python</small></div><div className="node n4">🎬<small>Editing</small></div>
        <div className="match-core"><Sparkles/><strong>96%</strong><small>MATCH</small></div>
      </div>
    </section>

    <section className="stats"><div className="container stats-grid">
      <Stat n="1,240+" l="Active Students"/><Stat n="86" l="Skills Shared"/><Stat n="324" l="Exchanges Made"/><Stat n="18" l="Colleges"/>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading kicker="HOW IT WORKS" title={<>Knowledge is the <span>currency.</span></>} text="No payments. No subscriptions. Just students helping students grow."/>
      <div className="steps">
        <Step n="01" icon={<UserRound/>} title="Share your skill" text="Tell the community what you can teach and what you want to learn."/>
        <Step n="02" icon={<Compass/>} title="Find your match" text="Our matching system connects complementary skills and interests."/>
        <Step n="03" icon={<ArrowRight/>} title="Exchange & grow" text="Agree on a format, meet for a session, and earn SkillPoints."/>
      </div>
    </div></section>

    <section className="section muted"><div className="container">
      <SectionHeading kicker="FEATURED SKILLS" title={<>Find someone who knows what <span>you don't.</span></>} text="Browse skills offered by students across your campus." action={<button className="text-btn" onClick={()=>navigate("explore")}>View all skills <ChevronRight size={16}/></button>}/>
      <div className="skill-grid">{skills.slice(0,3).map(s=><SkillCard key={s.id} skill={s} setModal={setModal}/>)}</div>
    </div></section>

    <section className="section"><div className="container match-banner">
      <div><div className="eyebrow purple">SMART MATCHING</div><h2>Stop searching.<br/><span>Start swapping.</span></h2><p>Tell us what you know and what you want to learn. We'll surface students who can teach you — and want what you know.</p><button className="btn primary" onClick={()=>navigate("matches")}>See my matches <ArrowRight size={17}/></button></div>
      <div className="match-card">
        <div className="match-top"><span>🎯 PERFECT MATCH</span><b>96%</b></div><div className="match-person"><div className="avatar big">RV</div><div><strong>Rahul Varma</strong><small>ECE • 3rd Year</small></div><span className="online">●</span></div>
        <div className="swap"><div><span>YOU TEACH</span><b>☕ Java</b></div><ArrowRight/><div><span>YOU LEARN</span><b>🎨 Photoshop</b></div></div><button className="btn full" onClick={()=>setModal("exchange")}>Offer Exchange</button>
      </div>
    </div></section>

    <section className="section muted"><div className="container">
      <SectionHeading kicker="CAMPUS COMMUNITY" title={<>Your campus.<br/><span>Your network.</span></>} text="Switch to Campus Mode and discover students, skills and leaders around you."/>
      <div className="campus-card"><div className="campus-icon"><GraduationCap size={32}/></div><div><div className="eyebrow">RAGHU ENGINEERING COLLEGE</div><h3>2,438 skill exchanges</h3><p>1,240 active students • 86 skills</p></div><button className="btn secondary" onClick={()=>navigate("leaderboard")}>View campus <ArrowRight size={16}/></button></div>
    </div></section>

    <section className="cta"><div className="container"><Sparkles/><h2>Everyone knows something<br/><span>worth sharing.</span></h2><p>Join the student-powered learning community.</p><button className="btn primary" onClick={()=>setModal("signup")}>Join SkillSwap <ArrowRight size={17}/></button></div></section>
  </main>
}

const Stat=({n,l})=><div className="stat"><strong>{n}</strong><span>{l}</span></div>;
const Step=({n,icon,title,text})=><div className="step"><span className="step-num">{n}</span><div className="step-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
const SectionHeading=({kicker,title,text,action})=><div className="section-heading"><div><div className="eyebrow">{kicker}</div><h2>{title}</h2><p>{text}</p></div>{action}</div>;

function SkillCard({skill,setModal}) {
 return <article className="skill-card">
   <div className="card-top"><span className="skill-icon">{skill.icon}</span><button className="heart"><Heart size={17}/></button></div>
   <span className="tag">{skill.category}</span><h3>{skill.name}</h3><span className="level"><Star size={13}/> {skill.level}</span>
   <div className="skill-lines"><div><span>Can teach</span><b>{skill.name}</b></div><div><span>Wants to learn</span><b>{skill.wants}</b></div></div>
   <div className="student-row"><div className="avatar">{skill.teacher.split(" ").map(x=>x[0]).join("")}</div><div><b>{skill.teacher}</b><small>{skill.course}</small></div><div className="rating"><Star size={13}/>{skill.rating}</div></div>
   <div className="card-buttons"><button className="btn ghost" onClick={()=>setModal("profile")}>View Profile</button><button className="btn dark" onClick={()=>setModal("exchange")}>Offer Exchange</button></div>
 </article>
}

function Explore({setModal}) {
 const [q,setQ]=useState(""); const [cat,setCat]=useState("All");
 const filtered=skills.filter(s=>(cat==="All"||s.category===cat)&&(`${s.name} ${s.teacher} ${s.wants}`.toLowerCase().includes(q.toLowerCase())));
 return <main className="page"><div className="container">
   <div className="page-head"><div><div className="eyebrow">DISCOVER</div><h1>Explore skills</h1><p>Find students who can teach what you want to learn.</p></div><button className="btn primary" onClick={()=>setModal("offer")}>+ Offer a skill</button></div>
   <div className="filters"><div className="search"><Search size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search skills, students..."/></div><div className="chips">{["All","Technology","Design","Media","Communication"].map(c=><button className={cat===c?"selected":""} onClick={()=>setCat(c)} key={c}>{c}</button>)}</div></div>
   <div className="result-line"><span>{filtered.length} skills found</span><span>Sort: <b>Best match ▾</b></span></div>
   <div className="skill-grid four">{filtered.map(s=><SkillCard key={s.id} skill={s} setModal={setModal}/>)}</div>
 </div></main>
}

function Matches({setModal}) {
 return <main className="page"><div className="container">
   <div className="page-head"><div><div className="eyebrow purple">AI-POWERED MATCHING</div><h1>Your skill matches</h1><p>Based on what you teach: <b>Java, Python</b> · Want to learn: <b>UI/UX, Video Editing</b></p></div><button className="btn secondary">Edit preferences</button></div>
   <div className="match-list">{matches.map((m,i)=><div className="match-row" key={m.name}><div className={"match-score "+m.color}><Sparkles size={16}/><b>{m.score}%</b><small>match</small></div><div className="avatar big">{m.avatar}</div><div className="match-info"><h3>{m.name} <span className="verified"><ShieldCheck size={14}/> verified</span></h3><p>Teaches <b>{m.teach}</b> · Wants <b>{m.want}</b></p><small>⭐ 4.9 · 18 exchanges · 🟢 Available this weekend</small></div><button className="btn dark" onClick={()=>setModal("exchange")}>Offer Exchange <ArrowRight size={15}/></button></div>)}</div>
 </div></main>
}

function Dashboard({navigate}) {
 return <main className="page"><div className="container">
  <div className="dashboard-head"><div><div className="eyebrow">MY SKILLSWAP</div><h1>Good evening, Lahari 👋</h1><p>Keep learning. Keep sharing.</p></div><button className="btn primary" onClick={()=>navigate("explore")}>Find a match <ArrowRight size={16}/></button></div>
  <div className="dash-stats"><div><Zap/><b>1,620</b><span>SkillPoints</span></div><div><Users/><b>12</b><span>Exchanges</span></div><div><Star/><b>4.8</b><span>Rating</span></div><div><Trophy/><b>8</b><span>Skills shared</span></div></div>
  <div className="dash-grid"><section className="panel"><div className="panel-head"><h3>🎯 Recommended for you</h3><button onClick={()=>navigate("matches")}>View all</button></div>{matches.map(m=><div className="mini-match" key={m.name}><div className="avatar">{m.avatar}</div><div><b>{m.name}</b><small>Teaches {m.teach} · Wants {m.want}</small></div><strong>{m.score}%</strong></div>)}</section>
  <section className="panel"><div className="panel-head"><h3>📅 Upcoming session</h3><button onClick={()=>navigate("sessions")}>View calendar</button></div><div className="session-highlight"><div className="date-box"><b>18</b><span>SEP</span></div><div><span className="tag">ONLINE</span><h3>Java Basics — Session 01</h3><p>with Rahul Varma · 6:00 PM – 7:00 PM</p></div><button className="icon-btn"><Video size={18}/></button></div></section></div>
  <section className="panel"><div className="panel-head"><h3>🏆 Your progress</h3><span>Level 4 · Skill Mentor</span></div><div className="progress-wrap"><div><b>1,620 XP</b><span>Next badge: 2,000 XP</span></div><div className="progress"><i style={{width:"81%"}}/></div><small>380 XP to Campus Expert</small></div></section>
 </div></main>
}

function Profile({setModal}) {
 return <main className="page"><div className="container"><div className="profile-cover"><div className="profile-main"><div className="avatar profile">LR</div><div><span className="verified"><ShieldCheck size={15}/> Campus verified</span><h1>Lahari Rao</h1><p>CSE • 3rd Year · Raghu Engineering College</p></div><button className="btn secondary">Edit profile</button></div></div>
 <div className="profile-grid"><section className="panel"><h3>About</h3><p className="bio">I love building things with code and helping other students get started. Always looking to exchange technical skills with creative ones.</p><div className="profile-metrics"><div><b>12</b><span>Exchanges</span></div><div><b>4.8</b><span>Rating</span></div><div><b>1,620</b><span>SkillPoints</span></div></div></section>
 <section className="panel"><h3>I can teach</h3><div className="pill-list"><span>☕ Java</span><span>🐍 Python</span><span>🌐 HTML/CSS</span><span>⚡ JavaScript</span></div><h3 className="mt">I want to learn</h3><div className="pill-list muted-pills"><span>🎨 UI/UX</span><span>🎬 Video Editing</span></div><button className="btn dark full mt" onClick={()=>setModal("exchange")}>Request Exchange</button></section></div>
 </div></main>
}

function Sessions() { return <main className="page"><div className="container"><div className="page-head"><div><div className="eyebrow">LEARN TOGETHER</div><h1>Skill sessions</h1><p>Plan, join and review your exchanges.</p></div><button className="btn primary">+ Schedule session</button></div><div className="calendar-card"><div className="calendar-title"><CalendarDays/><b>September 2026</b><span>‹ &nbsp; ›</span></div><div className="calendar"><div className="days">{["SUN","MON","TUE","WED","THU","FRI","SAT"].map(d=><b key={d}>{d}</b>)}</div><div className="dates">{Array.from({length:30},(_,i)=><span className={i===17?"today":""} key={i}>{i+1}{[17,24].includes(i)&&<i/>}</span>)}</div></div></div><div className="session-list"><div className="panel"><span className="tag">SAT • 6:00 PM</span><h3>☕ Java Basics — Session 01</h3><p>Teaching: Lahari ↔ Learning: Rahul · Online</p><button className="btn dark">Join Session</button></div><div className="panel"><span className="tag">THU • 5:30 PM</span><h3>🎨 UI/UX Foundations</h3><p>Teaching: Ananya ↔ Learning: Lahari · Online</p><button className="btn ghost">View details</button></div></div></div></main> }

function Leaderboard(){const people=[["Rahul","RV","1,840"],["Shalini","SR","1,620"],["Arjun","AK","1,430"],["Sneha","SP","1,210"],["Kiran","KT","980"]];return <main className="page"><div className="container leaderboard"><div className="center-head"><div className="trophy-big">🏆</div><div className="eyebrow">CAMPUS SKILL LEADERS</div><h1>Top skill swappers</h1><p>Raghu Engineering College · September 2026</p></div><div className="podium">{people.slice(0,3).map((p,i)=><div className={"pod p"+i} key={p[0]}><div className="rank">{i+1}</div><div className="avatar big">{p[1]}</div><b>{p[0]}</b><span>{p[2]} XP</span></div>)}</div><div className="rank-list">{people.slice(3).map((p,i)=><div key={p[0]}><b>{i+4}</b><div className="avatar">{p[1]}</div><strong>{p[0]}</strong><span>{p[2]} XP</span></div>)}</div></div></main>}

function Chat(){return <main className="page"><div className="container chat-page"><aside className="chat-list"><h2>Messages</h2>{["Rahul Varma","Ananya Singh","Sneha Patel"].map((x,i)=><div className={"chat-item "+(i===0?"selected":"")} key={x}><div className="avatar">{x.split(" ").map(v=>v[0])}</div><div><b>{x}</b><small>{i===0?"When can we start?":"Sounds great!"}</small></div><span>{i+1}m</span></div>)}</aside><section className="chat-window"><div className="chat-head"><div className="avatar">RV</div><div><b>Rahul Varma</b><small>🟢 Online · Exchange: Java ↔ Photoshop</small></div><button className="icon-btn"><CircleHelp size={18}/></button></div><div className="messages"><div className="bubble">Hey! When can we start?</div><div className="bubble me">I'm free Saturday evening.</div><div className="bubble">Perfect 👍 I'll teach Java OOP.</div><div className="bubble me">And I'll show you Photoshop basics!</div></div><div className="composer"><input placeholder="Type a message..." /><button className="btn primary">Send</button></div></section></div></main>}

function SettingsPage(){return <main className="page"><div className="container narrow"><div className="eyebrow">ACCOUNT</div><h1>Settings</h1><div className="panel settings"><Setting icon={<Bell/>} title="Notifications" text="Exchange requests, sessions and messages"/><Setting icon={<ShieldCheck/>} title="Campus verification" text="Your college email is verified"/><Setting icon={<Users/>} title="Campus mode" text="Show students from your campus first" toggle/><Setting icon={<ShieldCheck/>} title="Privacy" text="Keep personal contact information private"/><Setting icon={<Settings/>} title="Preferences" text="Skills, availability and learning goals"/></div></div></main>}
const Setting=({icon,title,text,toggle})=><div className="setting"><div className="setting-icon">{icon}</div><div><b>{title}</b><small>{text}</small></div>{toggle?<div className="toggle on"><i/></div>:<ChevronRight size={18}/>}</div>;

function Footer({navigate}){return <footer><div className="container footer-grid"><div><button className="brand"><span className="brand-mark">S</span><span>Skill<span>Swap</span></span></button><p>Teach what you know.<br/>Learn what you don't.</p></div><div><b>Explore</b><button onClick={()=>navigate("explore")}>Skills</button><button onClick={()=>navigate("matches")}>Matches</button><button onClick={()=>navigate("leaderboard")}>Leaderboard</button></div><div><b>My SkillSwap</b><button onClick={()=>navigate("dashboard")}>Dashboard</button><button onClick={()=>navigate("sessions")}>Sessions</button><button onClick={()=>navigate("chat")}>Messages</button></div><div><b>Community</b><button>Guidelines</button><button>Safety</button><button>Help Center</button></div></div><div className="container footer-bottom"><span>© 2026 SkillSwap</span><span>No money. Just skills. 🤝</span></div></footer>}

function Modal({type,close}){const title=type==="offer"?"Offer your skill":type==="signup"?"Join SkillSwap":type==="profile"?"Student profile":"Skill exchange request";return <div className="modal-bg" onClick={close}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-x" onClick={close}><X/></button><div className="eyebrow">SKILLSWAP</div><h2>{title}</h2>{type==="offer"?<><label>Skill you can teach<input placeholder="e.g. Java Basics"/></label><label>Skill you want to learn<input placeholder="e.g. UI/UX"/></label><label>Preferred format<select><option>Either</option><option>Online</option><option>In Person</option></select></label></>:type==="signup"?<><label>College email<input placeholder="you@college.edu"/></label><label>Display name<input placeholder="Your name"/></label></>:type==="profile"?<div className="modal-person"><div className="avatar profile">RV</div><h3>Rahul Varma</h3><p>ECE • 3rd Year · ⭐ 4.9 · 18 exchanges</p><div className="pill-list"><span>🎨 Photoshop</span><span>🖌️ Design</span></div></div>:<><div className="swap modal-swap"><div><span>YOU OFFER</span><b>☕ Java Basics</b></div><ArrowRight/><div><span>YOU WANT</span><b>🎨 Photoshop</b></div></div><label>Message<textarea defaultValue="Hey Rahul! I'd love to learn Photoshop while teaching Java Basics."/></label><label>Preferred format<select><option>Online</option><option>In Person</option><option>Either</option></select></label></>}<button className="btn primary full" onClick={close}>{type==="signup"?"Create account":type==="profile"?"Close":"Send request"} <Check size={17}/></button></div></div>}

createRoot(document.getElementById("root")).render(<App/>);
