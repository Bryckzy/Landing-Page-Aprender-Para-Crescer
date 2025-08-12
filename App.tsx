import React from 'react';
import { CheckIcon, StarIcon } from './components/icons';

const books = [
  { title: "O Pato no Lago", emoji: "🦆" },
  { title: "A Fada Boa", emoji: "🧚‍♀️" },
  { title: "O Bolo do Zezé", emoji: "🎂" },
  { title: "A Vaca MuMu", emoji: "🐮" },
  { title: "Ovelha Bebé", emoji: "🐑" },
  { title: "Caco o Macaco", emoji: "🐵" },
];

const features = [
    { 
        emoji: '🖨️', 
        title: 'Prontos para Imprimir', 
        description: 'Transforme a montagem numa atividade em família. Imprima, dobre e crie livrinhos de verdade!',
        color: 'bg-brand-light-green/80'
    },
    { 
        emoji: '📱', 
        title: 'Leitura Digital', 
        description: 'Leve as historinhas para qualquer lugar. Perfeito para tablets e celulares, garantindo diversão em passeios e viagens.',
        color: 'bg-brand-yellow/60'
    },
    { 
        emoji: '💡', 
        title: 'Aprendizado Lúdico', 
        description: 'Textos curtos e temas cativantes que aceleram o desenvolvimento da leitura de forma natural e prazerosa.',
        color: 'bg-brand-pink/80'
    },
];

const CTAButton: React.FC<{ children: React.ReactNode; href: string; className?: string }> = ({ children, href, className }) => (
    <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`inline-block font-black text-lg px-10 py-4 rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-100 ${className}`}
    >
        {children}
    </a>
);

const Header: React.FC = () => (
    <header className="bg-brand-off-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="#" className="flex items-center space-x-2 text-brand-dark-green hover:opacity-80 transition-opacity">
                <span className="text-3xl" aria-label="Maçã">🍎</span>
                <span className="font-bold text-xl">Aprender para Crescer</span>
            </a>
            <nav className="hidden md:flex items-center space-x-2">
                <a href="#livrinhos" className="text-gray-600 hover:text-brand-dark-green font-bold transition-colors px-4 py-2 rounded-md">Os Livrinhos</a>
                <a href="#features" className="text-gray-600 hover:text-brand-dark-green font-bold transition-colors px-4 py-2 rounded-md">Vantagens</a>
                <a href="https://aprenderparacrescer.com.br/produtos/combo-seis-livros-primeira-leitura/" target="_blank" rel="noopener noreferrer" className="bg-brand-dark-green text-white px-5 py-2 rounded-full font-bold hover:bg-opacity-90 transition-shadow shadow-md hover:shadow-lg">Garantir Combo</a>
            </nav>
        </div>
    </header>
);

const MagicalBackground: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
        {/* Large decorative shapes */}
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-brand-pink/20 rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '12s' }}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-brand-light-green/20 rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '15s' }}></div>
        <div className="absolute top-1/2 -right-1/3 w-80 h-80 bg-brand-yellow/20 rounded-full animate-float" style={{ animationDelay: '6s', animationDuration: '10s' }}></div>

        {/* Medium decorative shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-pink/30 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-brand-yellow/30 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-brand-light-green/40 rounded-full animate-float" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>

        {/* Small pulsing dots */}
        <div className="absolute top-20 right-40 w-8 h-8 bg-brand-pink/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-10 left-20 w-10 h-10 bg-brand-yellow/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-brand-light-green/60 rounded-full animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-5 h-5 bg-brand-pink/40 rounded-full animate-pulse" style={{ animationDelay: '3.5s', animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-4 h-4 bg-brand-yellow/60 rounded-full animate-pulse" style={{ animationDelay: '4.5s', animationDuration: '5s' }}></div>
    </div>
);


const Hero: React.FC = () => (
    <section className="bg-brand-off-white text-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-6/12 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-black text-brand-dark-green leading-tight mb-4">
                        Transforme a Alfabetização em uma <span className="text-brand-pink-600">Aventura Inesquecível</span>
                    </h1>
                    <p className="max-w-xl text-lg text-gray-600 mb-10 mx-auto md:mx-0">
                        Com o <span className="font-bold text-brand-dark-green">Combo Primeira Leitura</span>, seu filho descobre o prazer das palavras através de 6 livrinhos mágicos, criados para encantar e educar na fase mais importante.
                    </p>
                    <CTAButton href="https://aprenderparacrescer.com.br/produtos/combo-seis-livros-primeira-leitura/" className="bg-brand-dark-green text-white shadow-brand-dark-green/30">
                        QUERO INICIAR ESTA JORNADA
                    </CTAButton>
                </div>
                <div className="md:w-6/12">
                    <div className="relative">
                        <img 
                            src="https://i.imgur.com/JQUjN6F.jpeg" 
                            alt="Criança sorrindo enquanto lê um dos livrinhos do combo"
                            className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out w-full max-w-md mx-auto relative z-10"
                        />
                         <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-yellow/50 rounded-full animate-float z-0" style={{ animationDuration: '6s' }}></div>
                         <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-brand-pink/50 rounded-full animate-float z-0" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const BookCard: React.FC<{ title: string; emoji: string }> = ({ title, emoji }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-brand-pink hover:shadow-2xl hover:shadow-brand-pink/30">
        <div className="text-7xl mb-4" aria-hidden="true">{emoji}</div>
        <h3 className="font-bold text-xl text-gray-800 h-14 flex items-center">{title}</h3>
    </div>
);


const BookShowcase: React.FC = () => (
    <section id="livrinhos" className="py-20 bg-brand-light-green/20 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-green">Conheça os 6 Livrinhos Mágicos</h2>
                <p className="text-gray-600 mt-2 text-lg">Histórias encantadoras para cativar os pequenos leitores.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                {books.map((book) => (
                    <BookCard key={book.title} title={book.title} emoji={book.emoji} />
                ))}
            </div>
        </div>
    </section>
);

const FeatureCard: React.FC<{ emoji: string; title: string; description: string; circleClassName: string; }> = ({ emoji, title, description, circleClassName }) => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100 text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105 h-full">
        <div className={`rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 ${circleClassName}`}>
             <span className="text-4xl" aria-hidden="true">{emoji}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Features: React.FC = () => (
    <section id="features" className="py-20 bg-brand-off-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark-green">Uma Experiência Completa, do Papel à Tela</h2>
                <p className="text-gray-600 mt-2 text-lg">Pensamos em cada detalhe para que o aprendizado seja flexível, divertido e sempre à mão.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto group">
                {features.map((feature) => (
                     <FeatureCard key={feature.title} {...feature} circleClassName={feature.color} />
                ))}
            </div>
        </div>
    </section>
);

const Pricing: React.FC = () => (
    <section id="pricing" className="bg-brand-dark-green text-white relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
             <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Um Investimento Mínimo no Futuro Gigante do seu Filho</h2>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 max-w-2xl mx-auto mt-10 shadow-2xl border border-white/20">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl animate-pulse" style={{animationDuration: '6s'}}></div>
                 <StarIcon className="absolute -top-5 -left-5 w-12 h-12 text-brand-yellow transform -rotate-12 animate-float" style={{animationDuration: '5s'}} />
                 <StarIcon className="absolute -top-3 right-10 w-8 h-8 text-brand-yellow transform rotate-45 animate-float" style={{animationDelay: '1s', animationDuration: '7s'}} />
                 <StarIcon className="absolute -bottom-5 -right-3 w-10 h-10 text-brand-yellow transform rotate-12 animate-float" style={{animationDelay: '2s', animationDuration: '4s'}} />
                 <StarIcon className="absolute bottom-10 -left-8 w-6 h-6 text-brand-yellow transform animate-float" style={{animationDelay: '3s', animationDuration: '6s'}} />

                <p className="font-bold text-lg text-brand-yellow relative z-10">O COMBO COMPLETO INCLUI:</p>
                <div className="my-6 text-6xl md:text-7xl font-black flex justify-center items-baseline gap-2 relative z-10">
                    <span>R$18</span>
                    <span className="text-2xl font-bold text-gray-200">,00</span>
                </div>
                 <ul className="text-left space-y-3 my-8 inline-block max-w-md mx-auto relative z-10">
                    <li className="flex items-center gap-3"><CheckIcon className="w-6 h-6 text-brand-yellow flex-shrink-0" /> 6 livrinhos completos</li>
                    <li className="flex items-center gap-3"><CheckIcon className="w-6 h-6 text-brand-yellow flex-shrink-0" /> Formato para impressão (livreto)</li>
                    <li className="flex items-center gap-3"><CheckIcon className="w-6 h-6 text-brand-yellow flex-shrink-0" /> Formato digital (PDF)</li>
                    <li className="flex items-center gap-3"><CheckIcon className="w-6 h-6 text-brand-yellow flex-shrink-0" /> Acesso vitalício e imediato</li>
                </ul>
                <div className="relative z-10">
                  <CTAButton href="https://aprenderparacrescer.com.br/produtos/combo-seis-livros-primeira-leitura/" className="bg-brand-yellow text-brand-dark-green hover:bg-opacity-90 w-full md:w-auto shadow-brand-yellow/30">
                    GARANTIR O COMBO POR R$18
                  </CTAButton>
                </div>
                <p className="text-xs text-gray-300 mt-4 relative z-10">Compra segura. Entrega imediata por e-mail.</p>
            </div>
        </div>
    </section>
);

const WaveDivider: React.FC = () => (
    <div className="bg-brand-dark-green">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block">
            <path fill="#fdfdfc" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </div>
);


const Footer: React.FC = () => (
    <footer className="bg-brand-off-white pb-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
            <div className="flex items-center justify-center space-x-2 text-brand-dark-green mb-4">
                <span className="text-3xl" aria-label="Maçã">🍎</span>
                <span className="font-bold text-xl">Aprender para Crescer</span>
            </div>
            <p>&copy; {new Date().getFullYear()} Aprender para Crescer. Todos os direitos reservados.</p>
        </div>
    </footer>
);

export default function App() {
    return (
        <div className="bg-brand-off-white font-nunito antialiased relative">
            <MagicalBackground />
            <Header />
            <main>
                <Hero />
                <BookShowcase />
                <Features />
                <Pricing />
                <WaveDivider />
            </main>
            <Footer />
        </div>
    );
}