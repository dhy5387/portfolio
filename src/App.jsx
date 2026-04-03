import { useState } from 'react'
import './App.css'

const FIELD_SKILLS = {
  '설비 운영': {
    icon: '⚙️',
    desc: [
      'B사 현장 반도체 설비에서 근무',
      '반도체 Attach 설비 관련 공정 촬영 장비 정비 담당',
      '설비 유지관리 및 이상 발생 시 원인 분석·조치',
    ],
  },
  '데이터 모니터링': {
    icon: '📊',
    desc: [
      '설비에서 생산된 제품 데이터 수집 및 관리',
      'Rotation 측정, Tilt 측정, Thick 측정 등 수행',
      '다양한 데이터값을 산출하여 제품 품질 관리 서포팅',
    ],
  },
  '공정 분석': {
    icon: '📋',
    desc: [
      '공정 내 신입사원 대상 설비 가이드 제작',
      '설비 안내 포트폴리오 작성 및 배포',
      '빠른 공정 적응 지원으로 생산성 향상에 기여',
    ],
  },
  '팀 관리': {
    icon: '🤝',
    desc: [
      '설비 관리와 동시에 생산 담당 사원 관리',
      '팀원 격려 및 팀워크 강화를 위한 적극적 소통',
      '화목한 사내 분위기 조성에 앞장섬',
    ],
  },
}

function SkillModal({ skill, onClose }) {
  if (!skill) return null
  const info = FIELD_SKILLS[skill]
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-icon">{info.icon}</div>
        <h3 className="modal-title">{skill}</h3>
        <ul className="modal-desc">
          {info.desc.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>
    </div>
  )
}

function App() {
  const [activeSkill, setActiveSkill] = useState(null)

  return (
    <div className="portfolio">
      {/* 네비게이션 */}
      <nav className="nav">
        <span className="nav-logo">KKH</span>
        <ul className="nav-links">
          <li><a href="#about">소개</a></li>
          <li><a href="#experience">경력</a></li>
          <li><a href="#skills">기술</a></li>
          <li><a href="#contact">연락처</a></li>
        </ul>
      </nav>

      {/* 히어로 */}
      <section className="hero" id="about">
        <div className="hero-content">
          <p className="hero-sub">안녕하세요 👋</p>
          <h1 className="hero-title">김경환입니다</h1>
          <p className="hero-desc">
            데이터과학부에서 데이터 분석과 개발을 공부하고 있습니다.<br />
            LG이노텍에서 설비 운영 경험을 바탕으로<br />
            현장과 데이터를 잇는 개발자를 목표로 합니다.
          </p>
          <div className="hero-btns">
            <a href="#experience" className="btn btn-primary">경력 보기</a>
            <a href="#contact" className="btn btn-outline">연락하기</a>
          </div>
        </div>
        <div className="hero-avatar">KH</div>
      </section>

      {/* 경력 */}
      <section className="section" id="experience">
        <h2 className="section-title">경력</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <span className="company">LG이노텍</span>
                <span className="period">2022 — 2024 · 1년 9개월</span>
              </div>
              <p className="role">개발팀 현장직 설비 Supervisor (MT)</p>
              <ul className="timeline-desc">
                <li>생산 설비 운영 및 이상 발생 시 원인 분석·조치</li>
                <li>설비 데이터 모니터링을 통한 생산성 향상 기여</li>
                <li>유지보수 계획 수립 및 현장 인원 관리</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <span className="company">2026 화성시 대학(원)생 공모전</span>
                <span className="period">2026</span>
              </div>
              <p className="role">AI 서비스 개발 및 데이터 분석 공모전 참여</p>
              <ul className="timeline-desc">
                <li>화성시 주관 대학(원)생 대상 AI 서비스 개발 및 데이터 분석 공모전 참여</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="section section-alt" id="skills">
        <h2 className="section-title">기술 스택</h2>
        <div className="skills-grid">
          <div className="skill-group">
            <h3 className="skill-group-title">언어</h3>
            <div className="skill-tags">
              <span className="tag">Python</span>
              <span className="tag">JavaScript</span>
              <span className="tag">SQL</span>
            </div>
          </div>
          <div className="skill-group">
            <h3 className="skill-group-title">프레임워크 / 라이브러리</h3>
            <div className="skill-tags">
              <span className="tag">React</span>
              <span className="tag">Vite</span>
              <span className="tag">Pandas</span>
              <span className="tag">NumPy</span>
            </div>
          </div>
          <div className="skill-group">
            <h3 className="skill-group-title">도구 / 배포</h3>
            <div className="skill-tags">
              <span className="tag">Git</span>
              <span className="tag">GitHub</span>
              <span className="tag">Cloudflare Pages</span>
              <span className="tag">Formspree</span>
            </div>
          </div>
          <div className="skill-group">
            <h3 className="skill-group-title">현장 역량 <span className="hint">클릭하여 상세 보기</span></h3>
            <div className="skill-tags">
              {Object.keys(FIELD_SKILLS).map((skill) => (
                <span
                  key={skill}
                  className="tag tag-clickable"
                  onClick={() => setActiveSkill(skill)}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 */}
      <section className="section" id="contact">
        <h2 className="section-title">연락처</h2>
        <p className="contact-desc">협업 제안이나 궁금한 점이 있으시면 편하게 연락주세요.</p>
        <form
          className="contact-form"
          action="https://formspree.io/f/mzdkeag"
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.target
            const btn = form.querySelector('button[type="submit"]')
            btn.disabled = true
            btn.textContent = '전송 중...'
            try {
              const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' },
              })
              if (res.ok) {
                form.innerHTML = '<p class="form-success">✅ 메시지가 전송되었습니다. 감사합니다!</p>'
              } else {
                throw new Error()
              }
            } catch {
              btn.disabled = false
              btn.textContent = '보내기'
              alert('전송 중 오류가 발생했습니다. 다시 시도해주세요.')
            }
          }}
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="이름" required />
            <input type="email" name="email" placeholder="이메일" required />
          </div>
          <textarea name="message" placeholder="메시지를 입력해주세요." rows={5} required />
          <button type="submit" className="btn btn-primary">보내기</button>
        </form>
      </section>

      <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />

      {/* 푸터 */}
      <footer className="footer">
        <p>© 2024 김경환 · 데이터과학부</p>
        <a href="https://github.com/dhy5387" target="_blank" rel="noreferrer">GitHub</a>
      </footer>
    </div>
  )
}

export default App
