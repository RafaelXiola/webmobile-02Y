document.addEventListener('DOMContentLoaded', function() {
    
    // Animação de scroll suave para links de navegação
    const linksNavegacao = document.querySelectorAll('.link-navegacao');
    linksNavegacao.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Adiciona efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    const itensFaq = document.querySelectorAll('.item-faq');
    itensFaq.forEach(item => {
        const pergunta = item.querySelector('.pergunta-faq');
        const resposta = item.querySelector('.resposta-faq');
        const icone = item.querySelector('.icone-faq');
        
        if (!item.querySelector('.resposta-faq')) {
            return;
        }
        
        if (icone.textContent === '+') {
            resposta.style.display = 'none';
        }
        
        pergunta.addEventListener('click', function() {
            const estaAberto = resposta.style.display !== 'none';
            
            if (estaAberto) {
                resposta.style.display = 'none';
                icone.textContent = '+';
                icone.style.transform = 'rotate(0deg)';
            } else {
                resposta.style.display = 'block';
                icone.textContent = '-';
                icone.style.transform = 'rotate(180deg)';
            }
            icone.style.animation = 'pular 0.3s ease';
            setTimeout(() => {
                icone.style.animation = '';
            }, 300);
        });
    });

    // Animação de contadores na seção de estatísticas
    const numerosEstatisticas = document.querySelectorAll('.numero-estatistica');
    const animarContadores = () => {
        numerosEstatisticas.forEach(estatistica => {
            const valorAlvo = estatistica.textContent;
            const ehPorcentagem = valorAlvo.includes('%');
            const ehMilhar = valorAlvo.includes('K') || valorAlvo.includes('k');
            
            let numeroFinal;
            if (ehPorcentagem) {
                numeroFinal = parseInt(valorAlvo.replace('%', ''));
            } else if (ehMilhar) {
                numeroFinal = parseInt(valorAlvo.replace(/[Kk]/, '')) * 1000;
            } else {
                numeroFinal = parseInt(valorAlvo);
            }
            
            let atual = 0;
            const incremento = numeroFinal / 50;
            const temporizador = setInterval(() => {
                atual += incremento;
                if (atual >= numeroFinal) {
                    atual = numeroFinal;
                    clearInterval(temporizador);
                }
                
                let valorExibicao;
                if (ehPorcentagem) {
                    valorExibicao = Math.floor(atual) + '%';
                } else if (ehMilhar) {
                    valorExibicao = Math.floor(atual / 1000) + 'K';
                } else {
                    valorExibicao = Math.floor(atual).toLocaleString();
                }
                
                estatistica.textContent = valorExibicao;
            }, 50);
        });
    };

    const opcoesDosObservador = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
                
                // Anima contadores quando a seção de stats fica visível
                if (entrada.target.classList.contains('estatisticas')) {
                    animarContadores();
                }
            }
        });
    }, opcoesDosObservador);

    const elementosAnimados = document.querySelectorAll('.item-depoimento, .cartao-servico, .item-estatistica, .logo-parceiro, .item-faq');
    elementosAnimados.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(30px)';
        elemento.style.transition = 'all 0.6s ease';
        observador.observe(elemento);
    });

    const secaoEstatisticas = document.querySelector('.estatisticas');
    if (secaoEstatisticas) {
        observador.observe(secaoEstatisticas);
    }

    window.addEventListener('scroll', () => {
        const rolagemAtual = window.pageYOffset;
        const imagemPrincipal = document.querySelector('.imagem-principal');
        if (imagemPrincipal) {
            imagemPrincipal.style.transform = `translateY(${rolagemAtual * 0.1}px)`;
        }
    });

    const botoes = document.querySelectorAll('.botao-primario, .botao-secundario');
    botoes.forEach(botao => {
        botao.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        botao.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        botao.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(0.98)';
        });
        
        botao.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
    });

    const tituloPrincipal = document.querySelector('.titulo-principal');
    if (tituloPrincipal) {
        const texto = tituloPrincipal.innerHTML;
        tituloPrincipal.innerHTML = '';
        let indice = 0;
        
        const maquinaEscrever = () => {
            if (indice < texto.length) {
                tituloPrincipal.innerHTML += texto.charAt(indice);
                indice++;
                setTimeout(maquinaEscrever, 50);
            }
        };
        
        setTimeout(maquinaEscrever, 500);
    }

    document.querySelectorAll('a[href^="#"]').forEach(ancora => {
        ancora.addEventListener('click', function (e) {
            e.preventDefault();
            const alvo = document.querySelector(this.getAttribute('href'));
            if (alvo) {
                alvo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    window.addEventListener('scroll', () => {
        const cabecalho = document.querySelector('.cabecalho');
        if (window.scrollY > 100) {
            cabecalho.style.background = 'rgba(255, 255, 255, 0.95)';
            cabecalho.style.backdropFilter = 'blur(10px)';
        } else {
            cabecalho.style.background = '#ffffff';
            cabecalho.style.backdropFilter = 'none';
        }
    });

    const imagensPlaceholder = document.querySelectorAll('.imagem-placeholder');
    imagensPlaceholder.forEach((imagem, indice) => {
        setTimeout(() => {
            imagem.style.animationDelay = `${indice * 0.2}s`;
        }, 100);
    });

    const cartoesServico = document.querySelectorAll('.cartao-servico');
    cartoesServico.forEach(cartao => {
        cartao.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
        });
        
        cartao.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });
    });

    function criarOnda(evento) {
        const botao = evento.currentTarget;
        const circulo = document.createElement('span');
        const diametro = Math.max(botao.clientWidth, botao.clientHeight);
        const raio = diametro / 2;

        circulo.style.width = circulo.style.height = `${diametro}px`;
        circulo.style.left = `${evento.clientX - botao.offsetLeft - raio}px`;
        circulo.style.top = `${evento.clientY - botao.offsetTop - raio}px`;
        circulo.classList.add('onda');

        const ondaExistente = botao.getElementsByClassName('onda')[0];
        if (ondaExistente) {
            ondaExistente.remove();
        }

        botao.appendChild(circulo);
    }

    // Aplica ripple effect aos botões
    botoes.forEach(botao => {
        botao.addEventListener('click', criarOnda);
    });

    console.log('Landing page carregada com sucesso! 🚀');
});

const cssOnda = `
.onda {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: onda 600ms linear;
    background-color: rgba(255, 255, 255, 0.6);
}

@keyframes onda {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes pular {
    0%, 20%, 60%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    80% {
        transform: translateY(-5px);
    }
}
`;

const estilo = document.createElement('style');
estilo.textContent = cssOnda;
document.head.appendChild(estilo);
