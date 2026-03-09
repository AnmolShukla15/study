import { useState } from "react";

const subjects = {
  Maths: {
    color: "#f97316",
    icon: "∑",
    chapters: [
      { name: "Coordinate Geometry", priority: "High", weight: "12-15%", tip: "Straight lines, circles, parabola, ellipse, hyperbola — very scoring!" },
      { name: "Calculus (Limits, Derivatives, Integrals)", priority: "High", weight: "18-20%", tip: "Most weightage in JEE. Master differentiation and integration thoroughly." },
      { name: "Algebra (Quadratics, Complex Numbers, Matrices)", priority: "High", weight: "15-18%", tip: "Complex numbers + matrices appear every year." },
      { name: "Trigonometry", priority: "High", weight: "8-10%", tip: "Formulas must be at fingertips. Easy marks if memorized well." },
      { name: "Probability & Statistics", priority: "Medium", weight: "6-8%", tip: "Bayes theorem + permutations/combinations are common." },
      { name: "Vectors & 3D Geometry", priority: "Medium", weight: "8-10%", tip: "Frequently tested in Advanced. Practice thoroughly." },
      { name: "Differential Equations", priority: "Medium", weight: "4-6%", tip: "2-3 questions usually appear. Focus on variable separable." },
    ]
  },
  Physics: {
    color: "#3b82f6",
    icon: "⚛",
    chapters: [
      { name: "Mechanics (Laws of Motion, Work-Energy)", priority: "High", weight: "20-25%", tip: "Foundation of Physics. Cannot skip. Appears heavily in both Mains & Advanced." },
      { name: "Electrostatics & Current Electricity", priority: "High", weight: "15-18%", tip: "Gauss law, capacitors, Kirchhoff's laws — all very common." },
      { name: "Optics (Ray & Wave)", priority: "High", weight: "10-12%", tip: "Mirror/lens formula + interference/diffraction. Scoring topic." },
      { name: "Modern Physics (Atoms, Nuclei)", priority: "High", weight: "8-10%", tip: "Photoelectric effect, nuclear reactions — easy if you understand basics." },
      { name: "Thermodynamics", priority: "Medium", weight: "7-9%", tip: "Laws of thermodynamics + ideal gas — consistent in JEE." },
      { name: "Electromagnetic Induction & AC", priority: "Medium", weight: "8-10%", tip: "Faraday's law + LCR circuits. Tricky but high value." },
      { name: "Waves & Simple Harmonic Motion", priority: "Medium", weight: "6-8%", tip: "SHM appears almost every year. Master it!" },
    ]
  },
  Chemistry: {
    color: "#10b981",
    icon: "⚗",
    chapters: [
      { name: "Organic Chemistry (Nomenclature, Reactions)", priority: "High", weight: "30-35%", tip: "You're already studying this! Keep going — it's the biggest chunk." },
      { name: "Chemical Bonding & Molecular Structure", priority: "High", weight: "8-10%", tip: "VSEPR, hybridization, MO theory — always appears." },
      { name: "Electrochemistry", priority: "High", weight: "6-8%", tip: "Nernst equation, Faraday laws — scoring in Mains." },
      { name: "Equilibrium (Chemical & Ionic)", priority: "High", weight: "7-9%", tip: "Kp, Kc, pH calculations — very frequently tested." },
      { name: "Coordination Compounds", priority: "Medium", weight: "5-7%", tip: "IUPAC naming + isomerism. Memorize Werner's theory." },
      { name: "Block Elements (s, p, d, f)", priority: "Medium", weight: "8-10%", tip: "More factual. Good for quick marks if memorized." },
      { name: "Thermodynamics (Chem)", priority: "Medium", weight: "5-7%", tip: "Hess's law, enthalpy, Gibbs energy — overlaps with Physics concepts." },
    ]
  }
};

const researchQuestions = [
  "What are the most frequently tested topics in JEE Mains over the last 5 years?",
  "How does JEE Advanced differ from JEE Mains in terms of question style and difficulty?",
  "What is the minimum percentile/score needed in JEE Mains for Advanced eligibility?",
  "Which IITs/NITs offer Computer Science programs and what are their cutoff ranks?",
  "What is the most efficient study schedule for a diploma student with limited time?",
  "Which study resources (books, apps, YouTube channels) are best for self-study?",
  "How are diploma students ranked differently compared to 10+2 students in JEE?",
];

export default function JEEGuide() {
  const [activeSubject, setActiveSubject] = useState("Maths");
  const [checkedTopics, setCheckedTopics] = useState({});
  const [activeTab, setActiveTab] = useState("topics");

  const toggleCheck = (subject, idx) => {
    const key = `${subject}-${idx}`;
    setCheckedTopics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalTopics = Object.values(subjects).reduce((a, s) => a + s.chapters.length, 0);
  const doneTopics = Object.values(checkedTopics).filter(Boolean).length;
  const progress = Math.round((doneTopics / totalTopics) * 100);

  const subj = subjects[activeSubject];

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      background: "#0f0f13",
      minHeight: "100vh",
      color: "#e8e4d9",
      padding: "24px 16px",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 12, letterSpacing: 6, color: "#888", textTransform: "uppercase", marginBottom: 8 }}>
          JEE Preparation Guide
        </div>
        <h1 style={{
          fontSize: "clamp(24px, 5vw, 42px)",
          fontWeight: 900,
          margin: 0,
          background: "linear-gradient(135deg, #f97316, #3b82f6, #10b981)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.1,
        }}>
          Your JEE Roadmap
        </h1>
        <p style={{ color: "#888", marginTop: 8, fontSize: 14 }}>
          Diploma → JEE Mains + Advanced → IIT/NIT CS
        </p>
      </div>

      {/* Progress Bar */}
      <div style={{
        background: "#1a1a22",
        borderRadius: 12,
        padding: "16px 20px",
        marginBottom: 24,
        border: "1px solid #2a2a35",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13 }}>
          <span style={{ color: "#aaa" }}>Topics Covered</span>
          <span style={{ color: "#f97316", fontWeight: 700 }}>{doneTopics}/{totalTopics}</span>
        </div>
        <div style={{ background: "#2a2a35", borderRadius: 99, height: 8, overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #f97316, #3b82f6)",
            borderRadius: 99,
            transition: "width 0.4s ease",
          }} />
        </div>
        <div style={{ fontSize: 11, color: "#555", marginTop: 6 }}>{progress}% complete</div>
      </div>

      {/* Tab Toggle */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {["topics", "questions"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: "8px 18px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 600,
            background: activeTab === tab ? "#f97316" : "#1a1a22",
            color: activeTab === tab ? "#fff" : "#888",
            transition: "all 0.2s",
          }}>
            {tab === "topics" ? "📚 Study Topics" : "🔍 Research Questions"}
          </button>
        ))}
      </div>

      {activeTab === "topics" && (
        <>
          {/* Subject Tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {Object.entries(subjects).map(([name, data]) => (
              <button key={name} onClick={() => setActiveSubject(name)} style={{
                padding: "10px 20px",
                borderRadius: 10,
                border: `2px solid ${activeSubject === name ? data.color : "#2a2a35"}`,
                cursor: "pointer",
                background: activeSubject === name ? data.color + "22" : "#1a1a22",
                color: activeSubject === name ? data.color : "#888",
                fontWeight: 700,
                fontSize: 14,
                transition: "all 0.2s",
              }}>
                {data.icon} {name}
              </button>
            ))}
          </div>

          {/* Topic Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {subj.chapters.map((ch, idx) => {
              const key = `${activeSubject}-${idx}`;
              const done = checkedTopics[key];
              return (
                <div key={idx} onClick={() => toggleCheck(activeSubject, idx)} style={{
                  background: done ? subj.color + "15" : "#1a1a22",
                  border: `1px solid ${done ? subj.color + "55" : "#2a2a35"}`,
                  borderRadius: 12,
                  padding: "14px 16px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, border: `2px solid ${done ? subj.color : "#444"}`,
                    background: done ? subj.color : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 2,
                    transition: "all 0.2s",
                  }}>
                    {done && <span style={{ color: "#fff", fontSize: 13, fontWeight: 900 }}>✓</span>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
                      <span style={{
                        fontWeight: 700, fontSize: 15,
                        color: done ? subj.color : "#e8e4d9",
                        textDecoration: done ? "line-through" : "none",
                        opacity: done ? 0.7 : 1,
                      }}>{ch.name}</span>
                      <div style={{ display: "flex", gap: 6 }}>
                        <span style={{
                          fontSize: 11, padding: "2px 8px", borderRadius: 99,
                          background: ch.priority === "High" ? "#f9731622" : "#ffffff11",
                          color: ch.priority === "High" ? "#f97316" : "#888",
                          border: `1px solid ${ch.priority === "High" ? "#f9731644" : "#333"}`,
                          fontWeight: 600,
                        }}>{ch.priority}</span>
                        <span style={{
                          fontSize: 11, padding: "2px 8px", borderRadius: 99,
                          background: "#ffffff08", color: "#666",
                          border: "1px solid #2a2a35",
                        }}>{ch.weight}</span>
                      </div>
                    </div>
                    <p style={{ margin: "6px 0 0", fontSize: 13, color: "#777", lineHeight: 1.5 }}>💡 {ch.tip}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {activeTab === "questions" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ color: "#888", fontSize: 13, marginBottom: 4 }}>
            Use these to guide your own research — look them up on Google, YouTube, or ask a mentor:
          </p>
          {researchQuestions.map((q, i) => (
            <div key={i} style={{
              background: "#1a1a22",
              border: "1px solid #2a2a35",
              borderRadius: 12,
              padding: "14px 16px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}>
              <span style={{
                width: 26, height: 26, borderRadius: 8,
                background: "linear-gradient(135deg, #f97316, #3b82f6)",
                color: "#fff", fontSize: 12, fontWeight: 900,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>{i + 1}</span>
              <p style={{ margin: 0, fontSize: 14, color: "#ccc", lineHeight: 1.6 }}>{q}</p>
            </div>
          ))}

          {/* Key Reminder */}
          <div style={{
            marginTop: 8,
            background: "#f9731611",
            border: "1px solid #f9731633",
            borderRadius: 12,
            padding: "14px 16px",
          }}>
            <p style={{ margin: 0, fontSize: 13, color: "#f97316", fontWeight: 700 }}>⚠️ Important for Diploma Students</p>
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "#bbb", lineHeight: 1.6 }}>
              As a diploma holder, you qualify for JEE but must clear <strong style={{ color: "#fff" }}>both Mains AND Advanced</strong> for IIT admission. You are eligible for <strong style={{ color: "#fff" }}>lateral entry</strong> in some NITs too — research that option in parallel!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
