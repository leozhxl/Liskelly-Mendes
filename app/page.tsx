'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Brain,
  ChevronDown,
  Clock3,
  Globe,
  HeartHandshake,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  MoveRight,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react'

const whatsapp = 'https://wa.me/5541999328332?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta.'

const demands = [
  ['Ansiedade', 'Excesso de preocupações, pressão, inseguranças e experiências difíceis.', 'Identificar gatilhos, reduzir a preocupação excessiva e aprender técnicas de regulação emocional.', Brain],
  ['Depressão e desânimo', 'Perdas, isolamento, estresse prolongado e fatores biológicos e históricos.', 'Acolher o sofrimento, reconstruir rotina, sentido e vínculos.', Moon],
  ['Estresse e burnout', 'Sobrecarga no trabalho, cobranças e falta de pausas.', 'Estabelecer limites, reorganizar prioridades e recuperar o equilíbrio.', Clock3],
  ['Autoestima e autoconhecimento', 'Críticas internalizadas, comparações e experiências de rejeição.', 'Fortalecer a autoimagem e desenvolver autocompaixão.', Sparkles],
  ['Relacionamentos', 'Dificuldades de comunicação, dependência emocional e conflitos.', 'Compreender padrões, comunicar necessidades e construir relações mais saudáveis.', UsersRound],
  ['Luto e perdas', 'Morte de pessoas queridas, términos e mudanças de vida.', 'Um espaço para elaborar a dor no seu tempo.', HeartHandshake],
  ['Traumas', 'Situações de violência, acidentes ou experiências marcantes.', 'Ressignificar vivências com segurança e cuidado.', ShieldCheck],
  ['Crises e transições', 'Mudanças de carreira, maternidade, separações ou cidade.', 'Apoio para atravessar a fase com mais clareza.', MoveRight],
  ['Emoções difíceis', 'Irritabilidade, culpa, medo e tristeza que parecem fora de controle.', 'Nomear, compreender e regular as emoções.', Brain],
] as const

const approaches = [
  ['Terapia Cognitivo-Comportamental (TCC)', 'Trabalha a relação entre pensamentos, emoções e comportamentos, com técnicas práticas e objetivos definidos.'],
  ['Psicanálise', 'Investiga conteúdos inconscientes e a história de vida por meio da fala livre.'],
  ['Terapia de Aceitação e Compromisso (ACT)', 'Ajuda a aceitar emoções difíceis e agir de acordo com os próprios valores.'],
  ['Abordagem Humanista / Centrada na Pessoa', 'Valoriza a empatia, a autenticidade e o potencial de crescimento de cada pessoa.'],
  ['Terapia Sistêmica', 'Compreende a pessoa dentro de suas relações familiares e sociais.'],
  ['Mindfulness e regulação emocional', 'Práticas de atenção plena para reduzir ansiedade e estresse.'],
]

const faqs = [
  ['Preciso estar mal para fazer terapia?', 'Não. A terapia também ajuda no autoconhecimento, na prevenção e na qualidade de vida.'],
  ['Quanto tempo dura o tratamento?', 'Varia de pessoa para pessoa e é conversado ao longo do processo terapêutico.'],
  ['O que eu falar fica em sigilo?', 'Sim. O sigilo é garantido pelo Código de Ética do Psicólogo.'],
  ['Terapia online funciona?', 'Sim. É reconhecida pelo Conselho Federal de Psicologia e tem eficácia comprovada.'],
  ['Qual a diferença entre psicólogo e psiquiatra?', 'O psicólogo trabalha com psicoterapia; o psiquiatra é médico e pode prescrever medicamentos. Os dois podem atuar juntos.'],
  ['Atende convênios?', 'Entre em contato para saber mais sobre as modalidades de atendimento.'],
]

function Logo({ light = false }: { light?: boolean }) {
  return <a href="#inicio" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Liskelly Mendes, início">
    <span className="brand-mark"><HeartHandshake size={30} strokeWidth={1.25} /></span>
    <span><strong>Liskelly <em>Ψ</em> Mendes</strong><small>PSICÓLOGA</small></span>
  </a>
}

function SectionIntro({ eyebrow, title, text, align = 'left' }: { eyebrow: string; title: string; text?: string; align?: 'left' | 'center' }) {
  return <div className={`section-intro ${align === 'center' ? 'text-center' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    <div className="title-rule" />
    {text && <p>{text}</p>}
  </div>
}

const subjects = ['Ansiedade', 'Depressão e desânimo', 'Estresse e burnout', 'Autoestima e autoconhecimento', 'Relacionamentos', 'Terapia de casal', 'Terapia familiar', 'Grupo de adolescentes', 'Luto e perdas', 'Traumas', 'Crises e transições', 'Outro assunto']

function BookingForm() {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [mode, setMode] = useState('Online')
  const [message, setMessage] = useState('')

  function submit(e: { preventDefault(): void }) {
    e.preventDefault()
    const text = [
      `Olá, Liskelly! Meu nome é ${name.trim()} e gostaria de agendar uma consulta.`,
      `• Assunto: ${subject}`,
      `• Modalidade: ${mode}`,
      message.trim() && `• Mensagem: ${message.trim()}`,
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/5541999328332?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  const Choice = ({ options, value, onChange, label }: { options: string[]; value: string; onChange: (v: string) => void; label: string }) =>
    <div className="choice-group" role="radiogroup" aria-label={label}>{options.map(o => <button type="button" role="radio" aria-checked={value === o} className={value === o ? 'is-active' : ''} onClick={() => onChange(o)} key={o}>{o}</button>)}</div>

  return <form className="booking-form" onSubmit={submit}>
    <div className="booking-head"><CalendarDays /><div><strong>Solicitar horário</strong><span>Preencha e envie pelo WhatsApp</span></div></div>
    <label className="field"><span>Seu nome</span><input required value={name} onChange={e => setName(e.target.value)} placeholder="Como posso te chamar?" autoComplete="name" /></label>
    <label className="field"><span>Assunto</span><select required value={subject} onChange={e => setSubject(e.target.value)}><option value="" disabled>Selecione o motivo da consulta</option>{subjects.map(s => <option key={s}>{s}</option>)}</select></label>
    <div className="field"><span>Modalidade</span><Choice label="Modalidade" options={['Online', 'Presencial']} value={mode} onChange={setMode} /></div>
    <label className="field"><span>Mensagem <em>(opcional)</em></span><textarea rows={3} value={message} onChange={e => setMessage(e.target.value)} placeholder="Conte brevemente o que te trouxe até aqui" /></label>
    <button className="button booking-submit" type="submit"><MessageCircle size={18} /> Enviar pelo WhatsApp</button>
    <p className="booking-note"><ShieldCheck size={14} /> Suas informações são enviadas só para a psicóloga, com sigilo.</p>
  </form>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [openApproach, setOpenApproach] = useState(0)
  return <main>
    <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-wrap"><Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">{[['Início','#inicio'],['Sobre','#sobre'],['Como posso ajudar','#ajuda'],['Abordagens','#abordagens'],['Como funciona','#funciona'],['Dúvidas','#duvidas'],['Contato','#contato']].map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Agendar consulta <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="mobile-nav">{[['Início','#inicio'],['Sobre','#sobre'],['Como posso ajudar','#ajuda'],['Abordagens','#abordagens'],['Como funciona','#funciona'],['Dúvidas','#duvidas'],['Contato','#contato']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="button button-primary" href={whatsapp}>Agendar pelo WhatsApp <ArrowUpRight size={16} /></a></nav>}
    </header>

    <section className="hero" id="inicio"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">PSICOLOGIA CLÍNICA · CURITIBA E ONLINE</span><h1>Um espaço seguro<br /><i>para você se escutar.</i></h1><p>Psicoterapia com acolhimento, ética e escuta atenta para ajudar você a compreender suas emoções e construir caminhos mais leves.</p><div className="button-row"><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowUpRight size={17} /></a><a className="button button-outline" href="#terapia">Conhecer a terapia <MoveRight size={17} /></a></div></div></div><div className="scroll-note"><span /> role para descobrir</div></section>

    <section className="section about" id="sobre"><div className="container about-grid"><div className="portrait-wrap"><div className="portrait"><img src="/sobre.jpg" alt="Pessoa meditando sobre uma rocha flutuante sob um cérebro iluminado" width={736} height={1318} loading="lazy" /></div></div><div className="about-copy"><SectionIntro eyebrow="Sobre a psicóloga" title={<>Um cuidado que começa<br /><i>pela escuta.</i></>} /><p className="lead">Sou Liskelly Mendes, psicóloga clínica. Acredito que cada pessoa carrega uma história única, e que a terapia é um encontro de respeito, sem julgamentos, onde é possível olhar para as dores com cuidado e descobrir novos recursos para lidar com a vida.</p><ul className="credentials"><li><BadgeCheck /><span><b>Psicóloga Sistêmica | TCC</b> · CRP 08/10398</span></li><li><UsersRound /><span>Casais, famílias e grupos de adolescentes</span></li><li><Globe /><span>Online, presencial e no exterior</span></li></ul><div className="mini-features"><span><HeartHandshake />Escuta sem julgamentos</span><span><ShieldCheck />Sigilo profissional</span><span><UsersRound />Atendimento humanizado</span></div></div></div></section>

    <section className="section therapy" id="terapia"><div className="container narrow"><SectionIntro eyebrow="O que é psicoterapia" title="Um processo de cuidado, no seu ritmo." align="center" /><p className="therapy-text">A psicoterapia é um processo de cuidado da saúde mental conduzido por um profissional habilitado. Por meio do diálogo e de técnicas baseadas em evidências científicas, você compreende pensamentos, sentimentos e comportamentos, desenvolve autoconhecimento e aprende formas mais saudáveis de enfrentar os desafios.</p><p className="therapy-note"><Sparkles size={17} /> Não é preciso estar em crise para começar. A terapia também é prevenção, crescimento pessoal e qualidade de vida.</p></div></section>

    <section className="section demands" id="ajuda"><div className="container"><SectionIntro eyebrow="Como posso ajudar" title="Cuidar do que está pedindo atenção." text="Cada demanda merece ser acolhida com respeito e sem pressa. A terapia pode ajudar você a encontrar novos caminhos." /><div className="demand-grid">{demands.map(([title, cause, help, Icon]) => <article className="demand-card" key={title}><Icon className="card-icon" /><h3>{title}</h3><p><b>Possíveis causas:</b> {cause}</p><p><b>Na terapia:</b> {help}</p><span className="card-arrow">↗</span></article>)}</div></div></section>

    <section className="section approaches" id="abordagens"><div className="container approach-grid"><div><SectionIntro eyebrow="Abordagens e métodos" title={<>A técnica se adapta<br /><i>a quem você é.</i></>} text="A psicologia conta com diferentes abordagens, todas baseadas em estudos científicos. O cuidado é sempre adaptado a cada pessoa." /><div className="approach-orbit" aria-hidden="true"><div className="orbit-ring" /><div className="orbit-core">Ψ</div><span className="orbit-chip chip-top"><i />cuidado</span><span className="orbit-chip chip-right"><i />presença</span><span className="orbit-chip chip-left"><i />evidência</span></div></div><div className="accordion-list approach-list">{approaches.map(([title, text], i) => <div className={`accordion-item ${openApproach === i ? 'is-open' : ''}`} key={title}><button onClick={() => setOpenApproach(openApproach === i ? -1 : i)} aria-expanded={openApproach === i}><span>{String(i + 1).padStart(2,'0')}</span><strong>{title}</strong>{(i === 0 || title.includes('Sistêmica')) && <small>Minha abordagem</small>}<ChevronDown /></button>{openApproach === i && <p>{text}</p>}</div>)}</div></div></section>

    <section className="section process" id="funciona"><div className="container"><SectionIntro eyebrow="Como funciona" title="Quatro passos para começar." align="center" /><div className="steps">{[['01','Primeiro contato','Você chama pelo WhatsApp e agendamos um horário.'],['02','Primeira sessão','Conversamos sobre o que te trouxe e suas expectativas.'],['03','Processo terapêutico','Sessões semanais de aproximadamente 50 minutos, com sigilo total.'],['04','Evolução','Acompanhamos juntos seu desenvolvimento ao longo do tempo.']].map(([number,title,text]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

    <section className="section modalities"><div className="container"><div className="modalities-grid"><article><MapPin /><span className="eyebrow">Modalidade 01</span><h3>Presencial</h3><p>Consultório em Curitiba, no bairro Guabirotuba, em ambiente acolhedor e reservado.</p><a href="#contato">Ver endereço <MoveRight size={15} /></a></article><article><MessageCircle /><span className="eyebrow">Modalidade 02</span><h3>Online</h3><p>Sessões por videochamada, com a mesma qualidade e sigilo, de qualquer lugar.</p><a href={whatsapp}>Conversar sobre <MoveRight size={15} /></a></article></div></div></section>

    <section className="section faq" id="duvidas"><div className="container faq-grid"><SectionIntro eyebrow="Dúvidas frequentes" title={<>Talvez sua pergunta<br /><i>já esteja aqui.</i></>} text="Se não encontrar o que procura, estou à disposição para conversar." /><div className="accordion-list">{faqs.map(([question, answer], i) => <div className={`accordion-item ${openFaq === i ? 'is-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><strong>{question}</strong><ChevronDown /></button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>

    <section className="contact" id="contato"><div className="blob blob-blue" /><div className="container contact-grid"><div><span className="eyebrow">Contato</span><h2>Dê o primeiro<br /><i>passo.</i></h2><p>Cuidar de si é um ato de coragem. Estou aqui para caminhar com você.</p><div className="contact-details"><p><MapPin /> Rua Alcides Therézio de Carvalho, 719<br />Guabirotuba, Curitiba – PR</p><p><MessageCircle /> (41) 99932-8332</p></div><div className="map-frame"><iframe title="Mapa do consultório em Curitiba" src="https://www.google.com/maps?q=Rua+Alcides+Therézio+de+Carvalho,+719,+Curitiba&output=embed" loading="lazy" /></div></div><BookingForm /></div></section>

    <footer><div className="footer-glow" aria-hidden="true" /><div className="container"><div className="footer-cta"><div><span className="footer-label">Primeiro passo</span><h3>Vamos conversar sobre <i>o que você precisa?</i></h3></div><a className="button footer-cta-btn" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Agendar pelo WhatsApp</a></div><div className="footer-grid"><div><Logo light /><p className="footer-tag">Psicologia clínica com acolhimento,<br />ética e presença.</p></div><nav aria-label="Rodapé"><span className="footer-label">Navegue</span>{[['Sobre','#sobre'],['Como posso ajudar','#ajuda'],['Abordagens','#abordagens'],['Como funciona','#funciona'],['Dúvidas','#duvidas']].map(([l,h]) => <a key={h} href={h}>{l}</a>)}</nav><div><span className="footer-label">Fale comigo</span><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle />(41) 99932-8332</a><a href="#contato"><MapPin />Guabirotuba · Curitiba</a><a href="#contato"><Globe />Online e presencial</a></div><div className="footer-badge"><span className="footer-badge-mark">Ψ</span><div><strong>Liskelly Mendes</strong><small>Psicóloga Sistêmica | TCC</small><small>CRP 08/10398</small></div></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Liskelly Mendes. Todos os direitos reservados.</p><p className="footer-cvv"><HeartHandshake size={14} /><span>Este site não oferece atendimento de emergência. Em caso de crise, ligue para o <b>CVV 188</b>.</span></p><a href="#inicio" aria-label="Voltar ao início"><ChevronDown size={16} style={{ transform: 'rotate(180deg)' }} /></a></div></div></footer>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><MessageCircle /></a>
  </main>
}
