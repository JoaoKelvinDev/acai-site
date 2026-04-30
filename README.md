🍧 Açaí Ki-Delicia | E-commerce Web App
Solução web moderna desenvolvida para o estabelecimento Açaí Ki-DeliciaPL, focada em proporcionar uma experiência de compra fluida e intuitiva. O projeto utiliza as tecnologias mais recentes do ecossistema Frontend para garantir performance, tipagem segura e manutenibilidade.

🚀 Tecnologias e Ferramentas
Framework: React com Vite para um build ultra-rápido.

Linguagem: TypeScript (Tipagem estática para maior segurança no desenvolvimento).

Estilização: Tailwind CSS & Lucide React (Ícones).

Componentes: shadcn/ui (Componentes acessíveis e customizáveis).

Runtime/Package Manager: Bun.

Testes: Vitest configurado para garantir a qualidade do código.

Animações: Hooks customizados (useReveal.ts) para efeitos de scroll e interatividade.

🛠️ Diferenciais Técnicos
Arquitetura Limpa: Separação clara entre componentes de UI, páginas e lógica de negócio (hooks customizados).

Responsividade Mobile-First: Design otimizado prioritariamente para dispositivos móveis através do hook use-mobile.tsx.

Integração com WhatsApp: Lógica implementada para conversão de itens do carrinho em mensagens estruturadas para o fechamento do pedido.

Configuração de Testes: Ambiente preparado com Vitest para testes unitários e de integração.

📁 Organização de Pastas
Plaintext
src/
├── assets/         # Recursos estáticos (Imagens e ícones)
├── components/     # Componentes reutilizáveis (UI e Site)
├── hooks/          # Lógica de estado e efeitos (ex: useReveal, useMobile)
├── lib/            # Utilitários de configuração (utils.ts)
├── pages/          # Páginas principais da aplicação
└── test/           # Suíte de testes da aplicação
🔧 Como rodar o projeto
Instale as dependências:

Bash
bun install
Inicie o servidor de desenvolvimento:

Bash
bun dev
Para rodar os testes:

Bash
bun test

✒️ Autor
Joao Kelvin Barbosa Novais
Software Developer
