import { useEffect, useRef, useState } from 'react'

const WHATSAPP_URL = import.meta.env.VITE_WHATSAPP_URL || ''
const INSTAGRAM_URL = 'https://www.instagram.com/a9_epoxy_inspirations/'

const imagePath = (folder, filename) => `/${folder}/${encodeURIComponent(filename)}`

// Keep the supplied file names explicit so each public asset is auditable and portable.
// Pooja & Festive and Baby Memories are intentionally empty until their uploads are present.
const artworkAssets = {
  hero: [
    imagePath('hero', 'Screenshot 2026-10-15 041719.png'),
    imagePath('hero', 'Screenshot 2026-10-15 041211.png'),
  ],
  collections: {
    pooja: [],
    baby: [],
    wedding: [
      imagePath('wedding-keepsakes', 'Screenshot 2026-10-15 041342.png'),
      imagePath('wedding-keepsakes', 'Screenshot 2026-10-23 144523.png'),
    ],
    devotional: [
      imagePath('devotional-art', 'Screenshot 2026-10-15 041135.png'),
      imagePath('devotional-art', 'Screenshot 2026-10-15 041302.png'),
    ],
    wall: [
      imagePath('custom-wall-art', 'Screenshot 2026-10-15 041320.png'),
    ],
  },
}

const collections = [
  {
    id: 'pooja',
    index: '01',
    title: 'Pooja & Festive',
    description: 'Pieces that bring a quiet glow to your rituals.',
    variant: 'pooja',
    image: artworkAssets.collections.pooja[0],
  },
  {
    id: 'baby',
    index: '02',
    title: 'Baby Memories',
    description: 'The tiny details you never want to forget.',
    variant: 'baby',
    image: artworkAssets.collections.baby[0],
  },
  {
    id: 'wedding',
    index: '03',
    title: 'Wedding & Anniversary',
    description: 'Love stories, preserved in a layer of light.',
    variant: 'wedding',
    image: artworkAssets.collections.wedding[0],
  },
  {
    id: 'devotional',
    index: '04',
    title: 'Devotional Art',
    description: 'A considered presence for meaningful spaces.',
    variant: 'devotional',
    image: artworkAssets.collections.devotional[0],
  },
  {
    id: 'wall-art',
    index: '05',
    title: 'Custom Wall Art',
    description: 'A one-of-one piece, made around your story.',
    variant: 'wall',
    image: artworkAssets.collections.wall[0],
  },
]

const featuredCreations = [
  {
    title: 'The Quiet Devotion',
    category: 'Devotional frame',
    detail: 'Layered depth · champagne foil',
    variant: 'shiva',
    image: artworkAssets.collections.devotional[1],
    size: 'feature-card--tall',
  },
  {
    title: 'Little Footprints',
    category: 'Baby memory plaque',
    detail: 'Photograph · name · first details',
    variant: 'baby-frame',
    image: artworkAssets.collections.baby[0],
    size: 'feature-card--wide',
  },
  {
    title: 'After the Vows',
    category: 'Wedding keepsake',
    detail: 'Pressed botanicals · handwritten date',
    variant: 'wedding-keepsake',
    image: artworkAssets.collections.wedding[1],
    size: 'feature-card--standard',
  },
  {
    title: 'A Small Celebration',
    category: 'Pooja accent',
    detail: 'Hand-finished · warm rose tones',
    variant: 'pooja-set',
    image: artworkAssets.collections.pooja[0],
    size: 'feature-card--standard',
  },
  {
    title: 'The Red Machine',
    category: 'Custom wall art',
    detail: 'Miniature car · statement frame',
    variant: 'car-art',
    image: artworkAssets.collections.wall[0],
    size: 'feature-card--wide',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Share your idea',
    text: 'Tell us about the moment, memory, or room you want the piece to belong to.',
  },
  {
    number: '02',
    title: 'Choose your details',
    text: 'Together, shape the colours, personal touches, and feeling you want to keep.',
  },
  {
    number: '03',
    title: 'Watch it take shape',
    text: 'Every layer is placed with patience, allowing the small details to settle into place.',
  },
  {
    number: '04',
    title: 'Make it yours',
    text: 'Receive a keepsake that feels specific to your story — because it is.',
  },
]

function Icon({ name, size = 20, strokeWidth = 1.6 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'arrow-up-right') {
    return <svg {...common}><path d="M5 19 19 5" /><path d="M8 5h11v11" /></svg>
  }
  if (name === 'arrow-right') {
    return <svg {...common}><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></svg>
  }
  if (name === 'arrow-down') {
    return <svg {...common}><path d="M12 4v15" /><path d="m6 13 6 6 6-6" /></svg>
  }
  if (name === 'arrow-left') {
    return <svg {...common}><path d="M20 12H5" /><path d="m11 18-6-6 6-6" /></svg>
  }
  if (name === 'menu') {
    return <svg {...common}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>
  }
  if (name === 'close') {
    return <svg {...common}><path d="m6 6 12 12" /><path d="m18 6-12 12" /></svg>
  }
  if (name === 'plus') {
    return <svg {...common}><path d="M12 5v14" /><path d="M5 12h14" /></svg>
  }
  if (name === 'instagram') {
    return <svg {...common}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.7 6.3h.01" /></svg>
  }
  if (name === 'message') {
    return <svg {...common}><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.6 8.6 0 0 1-3.4-.7L4 20l1.3-3.6A7.2 7.2 0 0 1 4 12a7.5 7.5 0 0 1 8-7.5 7.5 7.5 0 0 1 8 7Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></svg>
  }
  if (name === 'spark') {
    return <svg {...common}><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" /><path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" /></svg>
  }
  return null
}

function BrandMark({ light = false }) {
  return (
    <a className={`brand-mark ${light ? 'brand-mark--light' : ''}`} href="#home" aria-label="A9 Epoxy Inspirations home">
      <span className="brand-mark__symbol">A9</span>
      <span className="brand-mark__name">Epoxy<br />Inspirations</span>
    </a>
  )
}

function Artwork({ src, variant = 'default', title = 'Handcrafted resin artwork', className = '', loading = 'lazy' }) {
  const variantClass = variant ? `artwork--${variant}` : ''

  if (!src) {
    return (
      <div className={`artwork artwork--unavailable ${variantClass} ${className}`} role="img" aria-label={`${title} artwork is being added`}>
        <span>Artwork upload pending</span>
      </div>
    )
  }

  return (
    <img
      className={`artwork artwork--photo ${variantClass} ${className}`}
      src={src}
      alt={title}
      loading={loading}
      decoding="async"
    />
  )
}

function HeroArtwork() {
  return (
    <div className="hero-artwork" role="img" aria-label="A9 Epoxy Inspirations handcrafted artwork">
      <div className="hero-artwork__halo" />
      <div className="hero-artwork__shadow" />
      <img className="hero-artwork__image hero-artwork__image--back" src={artworkAssets.hero[0]} alt="" fetchPriority="high" />
      <img className="hero-artwork__image hero-artwork__image--front" src={artworkAssets.hero[1]} alt="Handcrafted A9 Epoxy Inspirations artwork" fetchPriority="high" />
      <div className="hero-artwork__caption">
        <span>01 / 02</span>
        <span>A9 studio artwork</span>
      </div>
    </div>
  )
}

function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align} reveal`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p className="section-heading__copy">{copy}</p>}
    </div>
  )
}

function Navbar({ open, setOpen, scrolled, onWhatsApp }) {
  const menuButtonRef = useRef(null)
  const navRef = useRef(null)
  const wasOpen = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 760px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (!isMobile) return
    if (open) {
      wasOpen.current = true
      navRef.current?.querySelector('a, button')?.focus()
    } else if (wasOpen.current) {
      wasOpen.current = false
      menuButtonRef.current?.focus()
    }
  }, [open, isMobile])

  const closeMenu = () => setOpen(false)
  const navTabIndex = isMobile && !open ? -1 : undefined

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <BrandMark />
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
        <nav ref={navRef} id="primary-navigation" className={`primary-nav ${open ? 'primary-nav--open' : ''}`} aria-label="Primary navigation" aria-hidden={isMobile && !open} inert={isMobile && !open ? '' : undefined}>
          <a href="#home" onClick={closeMenu} tabIndex={navTabIndex}>Home</a>
          <a href="#featured" onClick={closeMenu} tabIndex={navTabIndex}>Arts Done</a>
          <a href="#about" onClick={closeMenu} tabIndex={navTabIndex}>About</a>
          <a href="#contact" onClick={closeMenu} tabIndex={navTabIndex}>Contact</a>
          <button className="nav-cta" type="button" onClick={() => { closeMenu(); onWhatsApp() }} tabIndex={navTabIndex}>
            Order Custom Art <Icon name="arrow-up-right" size={16} />
          </button>
        </nav>
      </div>
    </header>
  )
}

function CollectionsSection() {
  return (
    <section className="collections section" id="collections">
      <div className="container">
        <div className="collections__intro">
          <SectionHeading
            eyebrow="The collection"
            title="Explore our art"
            copy="Thoughtfully handcrafted pieces for the moments and spaces that matter."
          />
          <div className="collections__stamp reveal" aria-hidden="true">
            <span>A9</span>
            <span>Made personal</span>
          </div>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <a className={`collection-card collection-card--${collection.id} reveal`} href="#featured" key={collection.id}>
              <div className="collection-card__image">
                <Artwork src={collection.image} variant={collection.variant} title={`${collection.title} collection`} />
                <span className="collection-card__index">{collection.index}</span>
                <span className="collection-card__arrow"><Icon name="arrow-up-right" size={18} /></span>
              </div>
              <div className="collection-card__meta">
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCreations({ onSelect }) {
  return (
    <section className="featured section section--ivory" id="featured">
      <div className="container">
        <div className="featured__topline reveal">
          <SectionHeading
            eyebrow="A closer look"
            title="Handmade with love"
            copy="A considered selection of keepsakes, frames, and decorative pieces — each one carrying its own little world."
          />
          <span className="featured__note">Curated studies / 2024—25</span>
        </div>
        <div className="featured-grid">
          {featuredCreations.map((creation, index) => (
            <button
              className={`feature-card ${creation.size} reveal`}
              type="button"
              key={creation.title}
              onClick={(event) => onSelect(creation, event.currentTarget)}
              aria-label={`View ${creation.title}`}
            >
              <div className="feature-card__media">
                <Artwork src={creation.image} variant={creation.variant} title={creation.title} />
                <span className="feature-card__number">0{index + 1}</span>
                <span className="feature-card__view"><Icon name="plus" size={17} /> View piece</span>
              </div>
              <div className="feature-card__caption">
                <div>
                  <p className="feature-card__category">{creation.category}</p>
                  <h3>{creation.title}</h3>
                </div>
                <p>{creation.detail}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function CraftProcess() {
  return (
    <section className="process section" id="process">
      <div className="container">
        <div className="process__layout">
          <div className="process__visual reveal">
            <div className="process__visual-frame">
              <div className="process__glass-orb process__glass-orb--one" />
              <div className="process__glass-orb process__glass-orb--two" />
              <div className="process__visual-copy">
                <span className="eyebrow">The making of meaning</span>
                <p>Slow layers.<br /><em>Small details.</em><br />A piece that lasts.</p>
              </div>
              <span className="process__visual-label">A9 / PROCESS</span>
            </div>
          </div>
          <div className="process__content">
            <SectionHeading
              eyebrow="Your idea, in layers"
              title="Every piece has a story"
              copy="From the first thought to the final glint, the journey is collaborative, considered, and completely your own."
            />
            <div className="process-list">
              {processSteps.map((step) => (
                <div className="process-step reveal" key={step.number}>
                  <span className="process-step__number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  <Icon name="arrow-up-right" size={18} />
                </div>
              ))}
            </div>
            <a className="text-link" href="#contact">Start with an idea <Icon name="arrow-right" size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyA9() {
  const reasons = [
    ['01', 'Personal by design', 'Your memories, colours, names, and little details are what make the piece feel like yours.'],
    ['02', 'Handmade in spirit', 'Every composition is placed with a human eye for balance, texture, and the unexpected beautiful detail.'],
    ['03', 'Meaningful gifting', 'For milestones, rituals, new beginnings, and the people who make ordinary days feel special.'],
    ['04', 'Made to be noticed', 'Distinctive decorative art for the wall, shelf, altar, or corner that deserves a little more feeling.'],
  ]

  return (
    <section className="why section section--forest" id="about">
      <div className="container">
        <div className="why__header reveal">
          <p className="eyebrow eyebrow--gold">Why A9</p>
          <h2>Crafted to inspire.</h2>
          <p>There is something special about giving an idea a physical form. A9 is for the pieces that hold a feeling, long after the moment has passed.</p>
        </div>
        <div className="reason-grid">
          {reasons.map(([number, title, text]) => (
            <article className="reason reveal" key={number}>
              <span className="reason__number">{number}</span>
              <div className="reason__icon"><Icon name="spark" size={22} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CustomOrderCTA({ onWhatsApp, whatsappMessage }) {
  return (
    <section className="custom-cta section" id="contact">
      <div className="custom-cta__ambient" aria-hidden="true">
        <span className="custom-cta__orb custom-cta__orb--one" />
        <span className="custom-cta__orb custom-cta__orb--two" />
        <span className="custom-cta__line" />
      </div>
      <div className="container custom-cta__inner">
        <p className="eyebrow eyebrow--gold reveal">Bring your idea to life</p>
        <h2 className="reveal">Let&apos;s create<br /><em>something meaningful.</em></h2>
        <p className="custom-cta__copy reveal">Have an idea in mind? Let&apos;s turn your inspiration into a one-of-a-kind resin creation.</p>
        <div className="custom-cta__actions reveal">
          <button className="button button--gold" type="button" onClick={onWhatsApp}>
            <Icon name="message" size={18} /> Enquire on WhatsApp
          </button>
          <a className="button button--outline-light" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Icon name="instagram" size={18} /> Explore Instagram
          </a>
        </div>
        <p className={`config-note ${whatsappMessage ? 'config-note--visible' : ''}`} role="status">
          {whatsappMessage || 'WhatsApp enquiries will be enabled once the business number is connected.'}
        </p>
      </div>
    </section>
  )
}

function Footer({ onWhatsApp }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <BrandMark light />
            <p>Handcrafted resin art for the moments, spaces, and people that matter.</p>
          </div>
          <div className="site-footer__links">
            <div>
              <span className="footer-label">Explore</span>
              <a href="#collections">Collections</a>
              <a href="#featured">Arts Done</a>
              <a href="#process">The Process</a>
            </div>
            <div>
              <span className="footer-label">Connect</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram <Icon name="arrow-up-right" size={14} /></a>
              <button type="button" onClick={onWhatsApp}>WhatsApp <Icon name="arrow-up-right" size={14} /></button>
              <a href="#contact">Custom enquiry <Icon name="arrow-up-right" size={14} /></a>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} A9 Epoxy Inspirations</span>
          <span>Made with intention</span>
          <a className="back-to-top" href="#home">Back to top <Icon name="arrow-up-right" size={15} /></a>
        </div>
      </div>
    </footer>
  )
}

function Lightbox({ creation, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.body.classList.add('lightbox-open')
    window.addEventListener('keydown', onKeyDown)
    requestAnimationFrame(() => closeButtonRef.current?.focus())
    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${creation.title} artwork preview`} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="lightbox__panel" ref={dialogRef}>
        <button ref={closeButtonRef} className="lightbox__close" type="button" onClick={onClose} aria-label="Close artwork preview"><Icon name="close" size={21} /></button>
        <div className="lightbox__art"><Artwork src={creation.image} variant={creation.variant} title={creation.title} /></div>
        <div className="lightbox__details">
          <p className="eyebrow">{creation.category}</p>
          <h2>{creation.title}</h2>
          <p>{creation.detail}. Enquire to explore a piece made around your own story.</p>
          <a className="text-link" href="#contact" onClick={onClose}>Request a custom piece <Icon name="arrow-right" size={18} /></a>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null)
  const [whatsappMessage, setWhatsappMessage] = useState('')
  const heroRef = useRef(null)
  const selectedTriggerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' })
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let frame = 0
    let x = 0
    let y = 0
    const move = (event) => {
      const rect = hero.getBoundingClientRect()
      x = (event.clientX - rect.left) / rect.width - 0.5
      y = (event.clientY - rect.top) / rect.height - 0.5
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        hero.style.setProperty('--pointer-x', `${x * 1.7}`)
        hero.style.setProperty('--pointer-y', `${y * 1.7}`)
      })
    }
    const leave = () => {
      cancelAnimationFrame(frame)
      hero.style.setProperty('--pointer-x', '0')
      hero.style.setProperty('--pointer-y', '0')
    }
    hero.addEventListener('pointermove', move)
    hero.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(frame)
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', leave)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const handleWhatsApp = () => {
    if (WHATSAPP_URL) {
      window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
      return
    }
    setWhatsappMessage('WhatsApp is ready to connect — add VITE_WHATSAPP_URL with the business number to enable this button.')
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleSelectWork = (creation, trigger) => {
    selectedTriggerRef.current = trigger
    setSelectedWork(creation)
  }

  const handleCloseLightbox = () => {
    setSelectedWork(null)
    requestAnimationFrame(() => selectedTriggerRef.current?.focus())
  }

  const handleSkip = (event) => {
    event.preventDefault()
    const main = document.getElementById('main-content')
    main?.focus()
    main?.scrollIntoView({ block: 'start' })
  }

  return (
    <>
      <a className="skip-link" href="#main-content" onClick={handleSkip}>Skip to content</a>
      <Navbar open={menuOpen} setOpen={setMenuOpen} scrolled={scrolled} onWhatsApp={handleWhatsApp} />
      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="home" ref={heroRef}>
          <div className="hero__grid-lines" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow hero__eyebrow reveal"><span className="eyebrow__dot" /> Handcrafted <span>·</span> Custom <span>·</span> Timeless</p>
              <h1 className="reveal">Art made personal.<br /><em>Memories made timeless.</em></h1>
              <p className="hero__description reveal">Discover exquisite epoxy resin art, personalized keepsakes, and distinctive decorative pieces, handcrafted with care.</p>
              <div className="hero__actions reveal">
                <a className="button button--primary" href="#collections">Explore creations <Icon name="arrow-up-right" size={17} /></a>
                <a className="button button--text" href="#contact">Create your custom piece <Icon name="arrow-right" size={17} /></a>
              </div>
              <div className="hero__scroll reveal"><span>Scroll to explore</span><span className="hero__scroll-line" /></div>
            </div>
            <div className="hero__art-wrap reveal">
              <div className="hero__art-label hero__art-label--top"><span>Resin / 01</span><span>Hand poured</span></div>
              <HeroArtwork />
              <div className="hero__art-label hero__art-label--bottom"><span>Light finds its way through</span><span>A9 studio study</span></div>
            </div>
          </div>
          <div className="hero__side-note">Objects with a story <span>—</span> 2024—25</div>
        </section>
        <CollectionsSection />
        <FeaturedCreations onSelect={handleSelectWork} />
        <CraftProcess />
        <WhyA9 />
        <CustomOrderCTA onWhatsApp={handleWhatsApp} whatsappMessage={whatsappMessage} />
      </main>
      <Footer onWhatsApp={handleWhatsApp} />
      {selectedWork && <Lightbox creation={selectedWork} onClose={handleCloseLightbox} />}
    </>
  )
}
