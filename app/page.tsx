import {
  Home,
  Users,
  MessageCircle,
  Video,
  ShoppingBag,
  BriefcaseBusiness,
  GraduationCap,
  Store,
  Star,
  Search,
  Bell,
  Menu,
  Plus,
  Heart,
  MessageSquare,
  Share2,
  MapPin,
  Play,
  TrendingUp,
  Settings,
  Compass,
  Image,
  Send,
  ChevronRight,
  Globe,
} from "lucide-react";

const navigation = [
  { label: "Início", icon: Home, active: true },
  { label: "Amigos", icon: Users },
  { label: "MOZ CHAT", icon: MessageCircle },
  { label: "MOZ VÍDEOS", icon: Video },
  { label: "MOZ MARKET", icon: ShoppingBag },
  { label: "Serviços", icon: BriefcaseBusiness },
  { label: "Empregos", icon: GraduationCap },
  { label: "Empresas", icon: Store },
  { label: "Talentos", icon: Star },
];

const communities = [
  { name: "Empreendedores de Moçambique", members: "12,5 mil", color: "blue" },
  { name: "Oportunidades em Nampula", members: "8,2 mil", color: "yellow" },
  { name: "Tecnologia e Inovação", members: "5,7 mil", color: "pink" },
];

const stories = [
  { name: "A tua história", initials: "+", color: "new" },
  { name: "Marta", initials: "M", color: "pink" },
  { name: "Carlos", initials: "C", color: "blue" },
  { name: "Ana", initials: "A", color: "yellow" },
  { name: "Pedro", initials: "P", color: "green" },
];

const products = [
  {
    name: "Smartphone Android",
    price: "8.500 MT",
    location: "Nampula",
    emoji: "📱",
    color: "product-blue",
  },
  {
    name: "Ténis desportivos",
    price: "2.200 MT",
    location: "Nampula",
    emoji: "👟",
    color: "product-yellow",
  },
  {
    name: "Computador portátil",
    price: "25.000 MT",
    location: "Nampula",
    emoji: "💻",
    color: "product-pink",
  },
];

function SectionTitle({
  title,
  action,
}: {
  title: string;
  action?: string;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {action && <a href="#explorar">{action} <ChevronRight size={15} /></a>}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="moz-app">

      {/* MENU LATERAL */}
      <aside className="sidebar">

        <a href="#" className="brand">
          <div className="brand-icon">M</div>
          <div>
            <strong>MOZ<span>CONNECT</span></strong>
            <small>Conecta-te ao futuro</small>
          </div>
        </a>

        <div className="sidebar-location">
          <MapPin size={16} />
          <span>Nampula, Moçambique</span>
        </div>

        <p className="menu-label">MENU PRINCIPAL</p>

        <nav className="side-navigation">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <a
                href="#explorar"
                key={item.label}
                className={`nav-item ${item.active ? "active" : ""}`}
              >
                <Icon size={19} />
                <span>{item.label}</span>
                {item.label === "MOZ CHAT" && (
                  <span className="notification-count">3</span>
                )}
              </a>
            );
          })}
        </nav>

        <p className="menu-label community-label">COMUNIDADES</p>

        <div className="community-list">
          {communities.map((community) => (
            <a href="#comunidades" className="community-item" key={community.name}>
              <span className={`community-dot ${community.color}`}></span>
              <span>
                <strong>{community.name}</strong>
                <small>{community.members} membros</small>
              </span>
            </a>
          ))}
        </div>

        <a href="#definicoes" className="settings-link">
          <Settings size={19} />
          <span>Definições</span>
        </a>

        <div className="sidebar-footer">
          <div className="footer-logo">M</div>
          <div>
            <strong>MOZ CONNECT</strong>
            <small>Uma nova forma de conectar Moçambique.</small>
          </div>
        </div>

      </aside>

      {/* ÁREA PRINCIPAL */}
      <section className="main-area">

        {/* CABEÇALHO */}
        <header className="topbar">

          <button className="mobile-menu" aria-label="Abrir menu">
            <Menu size={23} />
          </button>

          <div className="search-box">
            <Search size={19} />
            <input
              type="search"
              placeholder="Pesquisar pessoas, vídeos, lojas e muito mais..."
            />
            <span className="search-shortcut">⌘ K</span>
          </div>

          <div className="topbar-actions">
            <button className="icon-button" aria-label="Notificações">
              <Bell size={21} />
              <span className="red-dot"></span>
            </button>

            <button className="icon-button" aria-label="Mensagens">
              <MessageCircle size={21} />
            </button>

            <div className="user-avatar">J</div>
          </div>

        </header>

        {/* CONTEÚDO */}
        <div className="content-area">

          {/* BOAS-VINDAS */}
          <section className="welcome-banner">
            <div className="welcome-content">
              <span className="welcome-tag">
                <Globe size={14} /> A TUA PLATAFORMA DIGITAL
              </span>

              <h1>
                Bem-vindo ao <span>MOZ CONNECT</span>
              </h1>

              <p>
                Conecta pessoas, descobre oportunidades,
                partilha ideias e faz negócios.
                Tudo o que precisas, perto de ti.
              </p>

              <a href="#explorar" className="welcome-button">
                Explorar plataforma <ChevronRight size={17} />
              </a>
            </div>

            <div className="welcome-decoration">
              <div className="decoration-circle circle-one"></div>
              <div className="decoration-circle circle-two"></div>
              <div className="decoration-card">
                <Globe size={55} />
                <strong>Moçambique</strong>
                <span>Conectado ao mundo</span>
              </div>
            </div>
          </section>

          {/* ATALHOS */}
          <section className="shortcut-section" id="explorar">
            <SectionTitle title="Explora o MOZ CONNECT" />

            <div className="shortcut-grid">

              <a href="#amigos" className="shortcut-card shortcut-social">
                <div className="shortcut-icon"><Users size={24} /></div>
                <strong>Social</strong>
                <span>Conhece pessoas</span>
              </a>

              <a href="#videos" className="shortcut-card shortcut-video">
                <div className="shortcut-icon"><Video size={24} /></div>
                <strong>Vídeos</strong>
                <span>Assiste e partilha</span>
              </a>

              <a href="#market" className="shortcut-card shortcut-market">
                <div className="shortcut-icon"><ShoppingBag size={24} /></div>
                <strong>Market</strong>
                <span>Compra e vende</span>
              </a>

              <a href="#servicos" className="shortcut-card shortcut-services">
                <div className="shortcut-icon"><BriefcaseBusiness size={24} /></div>
                <strong>Serviços</strong>
                <span>Encontra profissionais</span>
              </a>

              <a href="#talentos" className="shortcut-card shortcut-talents">
                <div className="shortcut-icon"><Star size={24} /></div>
                <strong>Talentos</strong>
                <span>Descobre talentos</span>
              </a>

              <a href="#oportunidades" className="shortcut-card shortcut-jobs">
                <div className="shortcut-icon"><GraduationCap size={24} /></div>
                <strong>Oportunidades</strong>
                <span>Aprende e trabalha</span>
              </a>

            </div>
          </section>

          {/* HISTÓRIAS */}
          <section className="stories-section">
            <SectionTitle title="Histórias" action="Ver todas" />

            <div className="stories-list">
              {stories.map((story) => (
                <button className="story-item" key={story.name}>
                  <div className={`story-circle story-${story.color}`}>
                    {story.initials}
                  </div>
                  <span>{story.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* FEED E COLUNA LATERAL */}
          <div className="dashboard-grid">

            <div className="feed-column">

              {/* PUBLICAR */}
              <section className="card create-post">
                <div className="post-input-row">
                  <div className="user-avatar">J</div>
                  <button className="post-placeholder">
                    O que estás a pensar?
                  </button>
                </div>

                <div className="post-tools">
                  <button><Image size={18} /> Foto</button>
                  <button><Video size={18} /> Vídeo</button>
                  <button><MapPin size={18} /> Localização</button>
                  <button className="post-submit"><Send size={16} /> Publicar</button>
                </div>
              </section>

              {/* PUBLICAÇÕES */}
              <section className="feed-section">
                <SectionTitle title="Últimas publicações" action="Explorar" />

                <article className="card post-card">

                  <div className="post-header">
                    <div className="user-avatar avatar-pink">M</div>

                    <div className="post-author">
                      <strong>Comunidade MOZ CONNECT</strong>
                      <span>Há 15 minutos · Nampula</span>
                    </div>

                    <button className="more-button">•••</button>
                  </div>

                  <p className="post-text">
                    Bem-vindos ao futuro da conexão em Moçambique!
                    Aqui poderás descobrir pessoas, partilhar ideias,
                    encontrar oportunidades e desenvolver o teu negócio.
                    <strong> O MOZ CONNECT é de todos nós! 🇲🇿</strong>
                  </p>

                  <div className="post-image-placeholder">
                    <div className="post-image-content">
                      <div className="post-image-logo">M</div>
                      <strong>MOZ CONNECT</strong>
                      <span>Conecta pessoas. Cria oportunidades.</span>
                    </div>
                  </div>

                  <div className="post-statistics">
                    <span>❤️ 128 reações</span>
                    <span>24 comentários · 8 partilhas</span>
                  </div>

                  <div className="post-actions">
                    <button><Heart size={19} /> Gostar</button>
                    <button><MessageSquare size={19} /> Comentar</button>
                    <button><Share2 size={19} /> Partilhar</button>
                  </div>

                </article>

                <article className="card post-card">

                  <div className="post-header">
                    <div className="user-avatar avatar-blue">C</div>

                    <div className="post-author">
                      <strong>Carlos Manuel</strong>
                      <span>Há 1 hora · Nampula</span>
                    </div>

                    <button className="more-button">•••</button>
                  </div>

                  <p className="post-text">
                    Estou à procura de pessoas interessadas em tecnologia
                    e empreendedorismo. Vamos criar grandes oportunidades!
                  </p>

                  <div className="post-statistics">
                    <span>❤️ 36 reações</span>
                    <span>12 comentários · 4 partilhas</span>
                  </div>

                  <div className="post-actions">
                    <button><Heart size={19} /> Gostar</button>
                    <button><MessageSquare size={19} /> Comentar</button>
                    <button><Share2 size={19} /> Partilhar</button>
                  </div>

                </article>

              </section>

            </div>

            {/* COLUNA DIREITA */}
            <aside className="right-column">

              {/* VÍDEOS */}
              <section className="card right-card" id="videos">
                <SectionTitle title="MOZ VÍDEOS" action="Ver todos" />

                <a href="#videos" className="video-preview">
                  <div className="video-preview-art">
                    <div className="play-button"><Play size={25} fill="white" /></div>
                    <span>MOZ VÍDEOS</span>
                  </div>
                  <strong>Descobre vídeos populares</strong>
                  <small>Entretenimento, cultura e criatividade.</small>
                </a>
              </section>

              {/* MARKET */}
              <section className="card right-card" id="market">
                <SectionTitle title="MOZ MARKET" action="Ver mercado" />

                <div className="products-list">
                  {products.map((product) => (
                    <a href="#market" className="product-item" key={product.name}>
                      <div className={`product-image ${product.color}`}>
                        {product.emoji}
                      </div>

                      <div className="product-details">
                        <strong>{product.name}</strong>
                        <span>{product.price}</span>
                        <small><MapPin size={12} /> {product.location}</small>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* TENDÊNCIAS */}
              <section className="card right-card">
                <SectionTitle title="Em destaque" />

                <div className="trend-item">
                  <TrendingUp size={19} />
                  <div>
                    <strong>Empreendedorismo</strong>
                    <small>Novas oportunidades</small>
                  </div>
                </div>

                <div className="trend-item">
                  <TrendingUp size={19} />
                  <div>
                    <strong>Tecnologia</strong>
                    <small>Inovação em Moçambique</small>
                  </div>
                </div>

                <div className="trend-item">
                  <TrendingUp size={19} />
                  <div>
                    <strong>Emprego</strong>
                    <small>Oportunidades profissionais</small>
                  </div>
                </div>
              </section>

              <div className="right-footer">
                <a href="#sobre">Sobre</a>
                <a href="#privacidade">Privacidade</a>
                <a href="#termos">Termos</a>
                <p>© 2026 MOZ CONNECT</p>
              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* NAVEGAÇÃO PARA TELEMÓVEIS */}
      <nav className="mobile-bottom-nav">
        <a href="#" className="mobile-active"><Home size={21} /><span>Início</span></a>
        <a href="#videos"><Video size={21} /><span>Vídeos</span></a>
        <a href="#market"><ShoppingBag size={21} /><span>Market</span></a>
        <a href="#chat"><MessageCircle size={21} /><span>Chat</span></a>
        <a href="#perfil"><Users size={21} /><span>Perfil</span></a>
      </nav>

    </main>
  );
}
