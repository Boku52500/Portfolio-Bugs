const closeBtn = document.querySelector('.closeButton');
closeBtn.addEventListener('click', () => {
  const menuBackground = document.querySelector('#menuBackground');
  menuBackground.classList.add('display-none');
  const menuContent = document.querySelector('#menuContent');
  menuContent.classList.add('display-none');
  const menuButton = document.querySelectorAll('.dropdowns');
  menuButton.forEach((item) => {
    item.classList.add('display-none');
  });
});

const hambBtn = document.querySelector('#hamb-button');
hambBtn.addEventListener('click', () => {
  const menuContent = document.querySelector('#menuContent');
  menuContent.classList.remove('display-none');
  const menuBackground = document.querySelector('#menuBackground');
  menuBackground.classList.remove('display-none');
  const closeButt = document.querySelector('.closeButton');
  closeButt.classList.remove('display-none');
  const menuButton = document.querySelectorAll('.dropdowns');
  menuButton.forEach((item) => {
    item.classList.remove('display-none');
  });
});

const menuLink = document.querySelectorAll('.dropdowns');

menuLink.forEach((item) => {
  item.addEventListener('click', () => {
    const menuBackground = document.querySelector('#menuBackground');
    menuBackground.classList.add('display-none');
    const menuContent = document.querySelector('#menuContent');
    menuContent.classList.add('display-none');
    const menuButton = document.querySelectorAll('.dropdowns');
    menuButton.forEach((item) => {
      item.classList.add('display-none');
    });
  });
});

const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'Pictures/snapshot.png',
    imageDesktop: 'Pictures/snap-desktop1.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'Pictures/snapshot2.png',
    imageDesktop: 'Pictures/snap-desktop2.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'Pictures/snapshot3.png',
    imageDesktop: 'Pictures/snap-desktop3.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'Pictures/snapshot4.png',
    imageDesktop: 'Pictures/snap-desktop4.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
  },
];

const main = document.querySelector('main');
projects.forEach((project, index) => {
  const section = document.createElement('section');
  const sectionDesktop = document.createElement('section');
  const numberProject = index + 2;
  const classTextMobile = `page-${numberProject}`;
  const classTextDesktop = `page-${numberProject}-desktop`;
  section.classList.add(classTextMobile);
  sectionDesktop.classList.add(classTextDesktop);
  let secondGrid = '';
  if (index === 0) {
    section.id = 'portfolio';
  } else {
    secondGrid = index;
  }
  let textMobile = '';
  let textDesktop = '';
  textMobile += `
    <div class="snapshot">
      <img src="${project.image}" alt="">
    </div>
    <h2>${project.name}</h2>
    <div class="bullets">
        <h3>CANOPY</h3>
        <ul class="bullets1">
            <li>Back End Dev</li>
            <li>2015</li>
        </ul>
    </div>
    <div class="second-para">
        <p>${project.description}</p>
    </div>
    <div class="alltext">
        <ul>
            <li class="text1">html</li>
            <li class="text2">css</li>
            <li class="text3">javaScript</li>
        </ul>
    </div>
    <button class="but" id="btn-${index}">See Project</button>
  `;
  textDesktop = `
    <img class="desktop-poster${index + 1}" src="${project.imageDesktop}" alt="">
    <div class="second-grid${secondGrid}">
        <h2>${project.name}</h2>
        <div class="bullets">
            <h3>CANOPY</h3>
            <ul class="bullets1">
                <li>Back End Dev</li>
                <li>2015</li>
            </ul>
        </div>
        <div class="second-para">
            <p>${project.description}</p>
        </div>
        <div class="alltext">
            <ul>
                <li class="text1">html</li>
                <li class="text2">css</li>
                <li class="text3">javaScript</li>
            </ul>
        </div>
        <button class="but" id="btn-${index}">See Project</button>
    </div>
  `;
  const text2 = `
                <div class="second-grid1">
                    <h2>${project.name}</h2>
                    <div class="bullets">
                        <h3>FACEBOOK</h3>
                        <ul class="bullets1">
                            <li>Full Stack Dev</li>
                            <li>2015</li>
                        </ul>
                    </div>
                    <div class="second-para">
                        <p>${project.description}</p>
                    </div>
                    <div class="alltext1">
                        <ul>
                            <li class="text1">html</li>
                            <li class="text4">Ruby on rails</li>
                            <li class="text2">css</li>
                            <li class="text3">javaScript</li>
                        </ul>
                    </div>
                    <button class="but" id="btn-${index}">See Project</button>
                </div>
                <img class="desktop-poster2" src="${project.imageDesktop}" alt="">
            `;
  section.innerHTML = textMobile;
  if (index === 1 || index === 3) {
    sectionDesktop.innerHTML = text2;
  } else {
    sectionDesktop.innerHTML = textDesktop;
  }
  main.appendChild(section);
  main.appendChild(sectionDesktop);
});

const modalBack = document.querySelector('.modal-back');
const modalClose = document.querySelectorAll('.modal-close');
const modalDesktop = document.querySelector('.module-desktop');
const modalMobile = document.querySelector('.modules');

modalClose.forEach((button) => {
  button.addEventListener('click', () => {
    modalDesktop.classList.add('display-none');
    modalMobile.classList.add('display-none');
    modalBack.classList.add('display-none');
  });
});

const projectButtons = document.querySelectorAll('.but');
projectButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const { id } = e.target;
    const index = id.replace('btn-', '');
    const titleMobile = modalMobile.querySelector('#modal-title-mobile');
    const titleDesktop = modalDesktop.querySelector('#modal-title-desktop');
    titleMobile.textContent = projects[index].name;
    titleDesktop.textContent = projects[index].name;

    const imgMobile = modalMobile.querySelector('#module-poster');
    const imgDesktop = modalDesktop.querySelector('#module-desktop-snap');
    imgMobile.src = projects[index].image;
    imgDesktop.src = projects[index].imageDesktop;

    modalBack.classList.remove('display-none');
    modalMobile.classList.remove('display-none');
    modalDesktop.classList.remove('display-none');
  });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
e.preventDefault();
const { email } = form.elements;
const emailRegex = /[A-Z]/;
const message = email.parentNode.querySelector('small');
if (emailRegex.test(email.value)) {
message.textContent = 'Error. You can only use Lowercase, please modify the email address and try again';
} else {
message.textContent = '';
form.submit;
}
}); 