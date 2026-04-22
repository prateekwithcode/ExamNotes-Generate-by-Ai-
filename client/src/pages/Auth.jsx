// import React from "react";
// import { motion } from "motion/react";
// import { FcGoogle } from "react-icons/fc";
// import {auth,provider} from "../utils/firebase.js";
// import {signInWithPopup} from "firebase/auth";
// import axios from "axios";
// import { serverUrl } from "../App.jsx";
// import { useDispatch } from "react-redux";
// import { setUserData } from "../redux/userSlice.js";


// function Auth() {
//   const dispatch = useDispatch();
//   const handleGoogleAuth=async()=>{
//     try {
//       const response = await signInWithPopup(auth,provider)
//       const User= response.user
//       const name = User.displayName
//       const email = User.email

//       const result = await axios.post(serverUrl + "/api/auth/google",{name,email},{
//         withCredentials:true
//       })
//       dispatch(setUserData(result.data));
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <div className="min-h-screen overflow-hidden bg-white text-black px-8">
//       <motion.header
//         initial={{ opacity: 0, y: -15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//         className="max-w-7xl mx-auto mt-8 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-6 shadow-[0_20x_45px_rgba(0,0,0,0.6)] "
//       >
//         <h1 className="text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
//           ExamNotes Ai
//         </h1>

//         <p className="text-sm text-gray-300 mt-1">
//           Ai-Powered exam-oriented notes & revision
//         </p>
//       </motion.header>

//       <main className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent">
//             Unlock Smart <br />
//             AI Notes
//           </h1>

//           <motion.button
//             whileHover={{ y: -10, rotateX: 8, rotateY: -8, scale: 1.07 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 200, damping: 18 }}
//             className="mt-10 px-10 py-3 rounded-xl flex items-center gap-3 bg-gradient-to-br from-black via-black/80 to-black/90 border border-white/10 text-white font-semibold text-lg shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
//            onClick={handleGoogleAuth}>
//             <FcGoogle size={22} />
//             Continue with Google
//           </motion.button>

//           <p className="mt-6 max-w-xl text-lg bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent">
//             You get <span className="font-semibold">50 Free Credits </span>to
//             create exam notes,project notes,charts,graphs and download clean
//             PDFs - instantly using AI
//           </p>

//           <p className="mt-4 text-sm text-gray-500">
//             Start with 50 free credits . Upgrade anything for more credits .
//             instant access
//           </p>
//         </motion.div>

//         {/* RIGHT CONTENT */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           <Features
//             icon="🎁"
//             title="50 Free Credits"
//             desc="Start with 50 credits to generate notes without paying."
//           />
//           <Features
//             icon="📘"
//             title="Exam Notes"
//             desc="High-yields, revision-ready exam oriented notes."
//           />
//           <Features
//             icon="📁"
//             title="Project Notes"
//             desc="Well-structured documentation for assignments & projects."
//           />
//           <Features
//             icon="📊"
//             title="Charts & Graphs"
//             desc="Auto-generated diagrams, charts and flow graphs."
//           />
//           <Features
//             icon="⬇"
//             title="Free PDF Download"
//             desc="Download clean, printable PDFs instantly."
//           />
//         </div>
//       </main>
//     </div>
//   );
// }

// function Features({ icon, title, desc }) {
//   return (
//     <motion.div
//       whileHover={{ y: -12, rotateX: 8, rotateY: -8, scale: 1.05 }}
//       transition={{ type: "spring", stiffness: 200, damping: 18 }}
//       className="relative rounded-2xl p-6 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] text-white]"
//       style={{ transformStyle: "preserve-3d" }}
//     >
      
//       <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
//         \
//         <div
//           className="text-4xl mb-3"
          
//         >
//           {icon}
//         </div>
//         <h3 className="text-lg text-cyan-50 font-semibold mb-2">{title}</h3>
//         <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
//       </div>
//     </motion.div>
//   );
// }
// export default Auth;





import React from "react";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../utils/firebase.js";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { serverUrl } from "../App.jsx";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice.js";

const features = [
  { icon: "🎁", title: "50 Free Credits", desc: "Start generating notes right away — no payment needed." },
  { icon: "📘", title: "Exam Notes", desc: "High-yield, revision-ready notes tailored for exams." },
  { icon: "📁", title: "Project Notes", desc: "Structured documentation for assignments & projects." },
  { icon: "📊", title: "Charts & Graphs", desc: "Auto-generated diagrams and flow charts." },
  { icon: "⬇️", title: "PDF Download", desc: "Download clean, printable PDFs in one click." },
];

function FeatureCard({ icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(99,102,241,0.13)", borderColor: "#a5b4fc" }}
      style={{
        background: "#fff",
        border: "1.5px solid #e9eaf0",
        borderRadius: 16,
        padding: "22px 20px",
        cursor: "default",
        transition: "border-color 0.25s ease",
      }}
    >
      <div style={{ fontSize: 30, marginBottom: 10 }}>{icon}</div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1b2e", marginBottom: 6 }}>{title}</h3>
      <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.6 }}>{desc}</p>
    </motion.div>
  );
}

function Auth() {
  const dispatch = useDispatch();

  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const User = response.user;
      const name = User.displayName;
      const email = User.email;
      const result = await axios.post(serverUrl + "/api/auth/google", { name, email }, { withCredentials: true });
      // dispatch(setUserData(result.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f5f6fa; }

        .auth-wrap {
          min-height: 100vh;
          background: #f5f6fa;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #1a1b2e;
        }

        .google-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          border-radius: 12px;
          border: 1.5px solid #e2e3ef;
          background: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #1a1b2e;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.07);
          transition: all 0.22s ease;
        }
        .google-btn:hover {
          background: #f9f9ff;
          border-color: #a5b4fc;
          box-shadow: 0 6px 20px rgba(99,102,241,0.14);
          transform: translateY(-2px);
        }
        .google-btn:active { transform: translateY(0); box-shadow: none; }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 99px;
          background: #eef2ff;
          color: #4f46e5;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 900px) {
          .main-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .features-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 34px !important; }
        }
      `}</style>

      <div className="auth-wrap">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

          {/* Navbar */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 0",
              borderBottom: "1px solid #e9eaf0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16,
              }}>📝</div>
              <span style={{ fontSize: 17, fontWeight: 800, color: "#1a1b2e" }}>ExamNotes AI</span>
            </div>
            <button className="google-btn" style={{ padding: "9px 18px", fontSize: 13 }} onClick={handleGoogleAuth}>
              <FcGoogle size={17} /> Sign in
            </button>
          </motion.nav>

          {/* Main grid */}
          <div
            className="main-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "center",
              paddingTop: 64,
              paddingBottom: 72,
            }}
          >
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="badge">✦ AI-Powered Notes</div>

              <h1
                className="hero-title"
                style={{
                  fontSize: 48,
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                  color: "#1a1b2e",
                  marginBottom: 20,
                }}
              >
                Smarter Notes,<br />
                <span style={{ color: "#6366f1" }}>Better Results</span>
              </h1>

              <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, maxWidth: 400, marginBottom: 32 }}>
                Generate exam-ready notes, project docs, charts, and PDFs instantly with AI.
                Start free —{" "}
                <strong style={{ color: "#1a1b2e" }}>50 credits on us</strong>.
              </p>

              <motion.button
                className="google-btn"
                whileTap={{ scale: 0.97 }}
                onClick={handleGoogleAuth}
              >
                <FcGoogle size={21} />
                Continue with Google
              </motion.button>

              <p style={{ marginTop: 14, fontSize: 12.5, color: "#adb5bd" }}>
                Free to start · No credit card required
              </p>

              {/* Stats */}
              <div style={{ display: "flex", gap: 28, marginTop: 36 }}>
                {[["50", "Free Credits"], ["PDF", "Export"], ["AI", "Powered"]].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#6366f1" }}>{val}</div>
                    <div style={{ fontSize: 12, color: "#adb5bd", marginTop: 2 }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="features-grid">
                {features.map((f, i) => (
                  <div
                    key={f.title}
                    style={i === features.length - 1 && features.length % 2 !== 0 ? { gridColumn: "1 / -1" } : {}}
                  >
                    <FeatureCard {...f} index={i} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              borderTop: "1px solid #e9eaf0",
              padding: "20px 0 28px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 12.5, color: "#adb5bd" }}>© 2025 ExamNotes AI</span>
            <div style={{ display: "flex", gap: 20 }}>
              {["Privacy", "Terms", "Help"].map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{ fontSize: 12.5, color: "#adb5bd", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#6366f1"}
                  onMouseLeave={e => e.target.style.color = "#adb5bd"}
                >
                  {l}
                </a>
              ))}
            </div>
          </motion.footer>

        </div>
      </div>
    </>
  );
}

export default Auth;