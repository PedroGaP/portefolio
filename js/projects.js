class Project {
  constructor(title, description, image, links) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.links = links;
  }
}

const detailsIcon = "fa-solid fa-arrow-up-right-from-square";
const playStoreIcon = "fa-brands fa-google-play";
const githubIcon = "fa-brands fa-github";

const projects = [
  new Project(
    "RMAAA (Rede de Monitorização e Avisos Agrícolas dos Açores)",
    "Aplicação desenvolvida pela MAIDOT para dar apoio aos trabalhos de campo no contexto do Concurso Público com Publicidade Internacional para o Desenvolvimento de uma Rede de Monitorização e Avisos Agrícolas ao nível de ilha (CP/2022/4/DRAG). Trata-se de uma aplicação que visa facilitar e acelerar os trabalhos no terreno para as observações visuais de doenças nas diversas culturas e contagens de armadilhas com as capturas de pragas, com recurso a leitura de Código QR para uma associação imediata à armadilha em questão. Possibilita também a inserção de novos POB (Postos de Observação Biológica) assim como das respetivas Armadilhas contidas nestes, com recurso também à geo localização em tempo real.",
    "/portefolio/assets/rmaaa.png",
    [
      {
        label: "Ver Detalhes",
        url: "/portefolio/pages/projects/rmaaa.html",
        icon: detailsIcon,
      },
      {
        label: "Website",
        url: "https://www.rmaaa.pt/",
        icon: detailsIcon,
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=pt.maidot.rmaaa&hl=pt",
        icon: playStoreIcon,
      },
    ]
  ),
  new Project(
    "Pageable Vaden",
    "PageableVaden é uma package para Dart desenvolvida para uso na framework Vaden – uma framework que facilita a criação de APIs REST do lado do servidor com Dart.Inspirada na abordagem do Pageable do Spring Boot, esta package fornece uma implementação simples, extensível e integrada de paginação e ordenação de dados, com suporte a repositórios automáticos e integração fluida com controladores e serviços da Vaden.",
    "/portefolio/assets/pageable_vaden.png",
    [
      {
        label: "Ver Detalhes",
        url: "/portefolio/pages/projects/pageable_vaden.html",
        icon: detailsIcon,
      },
      {
        label: "GitHub",
        url: "https://github.com/utilizador/rmaaa",
        icon: githubIcon,
      },
    ]
  ),
  new Project(
    "InnovAcad API",
    "Sistema de gestão escolar. A API foi construída utilizando Dart, VadenAPI e PostgreSQL, oferecendo funcionalidades como gestão de alunos, professores, cursos e turmas. A aplicação inclui autenticação JWT para segurança e um painel administrativo para facilitar a gestão diária da instituição.",
    "/portefolio/assets/innovacad.png",

    [
      {
        label: "Ver Detalhes",
        url: "/portefolio/pages/projects/innovacad.html",
        icon: detailsIcon,
      },
    ]
  ),
  new Project(
    "AllDayCare",
    "Plataforma de apoio domiciliário para idosos e pessoas com necessidades especiais",
    "/portefolio/assets/alldaycare.jpg",

    [
      {
        label: "Ver Detalhes",
        url: "/portefolio/pages/projects/alldaycare.html",
        icon: detailsIcon,
      },
    ]
  ),
  new Project(
    "ExpenseTracker",
    "Plataforma de gestão de despesas pessoais",
    "/portefolio/assets/expensetracker.png",

    [
      {
        label: "Ver Detalhes",
        url: "/portefolio/pages/projects/expensetracker.html",
        icon: detailsIcon,
      },
    ]
  ),
];

const projectsContainer = document.getElementById("projects-container");
let projectCount = 0;

projects.forEach((proj) => {
  if (
    projectsContainer.classList.contains("three-project-slide") &&
    projectCount > 2
  )
    return;

  const slide = document.createElement("div");
  slide.classList.add("project-slide");
  slide.style.backgroundImage = `url('${proj.image}')`;

  const content = document.createElement("div");
  content.classList.add("project-content");

  const title = document.createElement("h3");
  title.classList.add("title", "is-2", "has-text-white", "retro-font");
  title.textContent = proj.title;

  const desc = document.createElement("p");
  desc.classList.add("has-text-white", "project-description");
  desc.textContent = proj.description;

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("buttons", "is-centered", "mt-3");
  proj.links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.className = "button is-link is-outlined";
    if (link.icon) {
      a.innerHTML = `<span class="icon"><i class="${link.icon}"></i></span>
                     <span>${link.label}</span>`;
    } else {
      a.textContent = link.label;
    }
    btnGroup.appendChild(a);
  });

  content.append(title, desc, document.createElement("hr"), btnGroup);
  slide.appendChild(content);
  projectsContainer.appendChild(slide);

  projectCount++;
});

window.addEventListener("scroll", () => {
  const slides = document.querySelectorAll(".project-slide");

  slides.forEach((slide) => {
    const speed = parseFloat(slide.dataset.speed) || 0;
    const rect = slide.getBoundingClientRect();
    const yPos = rect.top * speed;

    slide.style.backgroundPosition = `center ${yPos}px`;
  });
});

const slides = document.querySelectorAll(".project-slide");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dots.forEach((d) => d.classList.remove("active"));
        const index = [...slides].indexOf(entry.target);
        if (index >= 0) dots[index].classList.add("active");
      }
    });
  },
  { threshold: 0.5 }
);

slides.forEach((slide) => observer.observe(slide));

const dotsContainer = document.getElementById("project-dots");

projects.forEach((proj, idx) => {
  const dot = document.createElement("div");
  dot.classList.add("project-dot");
  dot.dataset.index = idx;

  dot.dataset.title = proj.title;

  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    document
      .querySelectorAll(".project-slide")
      [idx].scrollIntoView({ behavior: "smooth" });
  });
});

const dots = document.querySelectorAll(".project-dot");
