let nav_english = document.getElementById('nav-english');
let nav_french = document.getElementById('nav-french');
let nav_home = document.getElementById('nav-home');
let nav_skills = document.getElementById('nav-skills');
let nav_projects = document.getElementById('nav-projects');
let header_subtitle = document.getElementById('header-subtitle');
let skills_title = document.getElementById('skills-title');
let projects_title_1 = document.getElementById('projects-title-1');
let projects_title_2 = document.getElementById('projects-title-2');
let projects_title_3 = document.getElementById('projects-title-3');
let project_title_1 = document.getElementById('project-title-1');
let project_title_2 = document.getElementById('project-title-2');
let project_title_4 = document.getElementById('project-title-4');
let project_title_5 = document.getElementById('project-title-5');
let project_title_8 = document.getElementById('project-title-8');
let project_title_9 = document.getElementById('project-title-9');
let project_info_1 = document.getElementById('project-info-1');
let project_info_2 = document.getElementById('project-info-2');
let project_info_3 = document.getElementById('project-info-3');
let project_info_4 = document.getElementById('project-info-4');
let project_info_5 = document.getElementById('project-info-5');
let project_info_6 = document.getElementById('project-info-6');
let project_info_7 = document.getElementById('project-info-7');
let project_info_8 = document.getElementById('project-info-8');
let project_info_9 = document.getElementById('project-info-9');
let project_info_10 = document.getElementById('project-info-10');
let project_info_11 = document.getElementById('project-info-11');

const lang = {
    english: {
        nav_home: "Home",
        nav_skills: "Skills",
        nav_projects: "Projects",
        header_subtitle: "WELCOME",
        skills_title: "Skills",

        projects_title_1: "Projects Title",
        projects_title_2: "Projects Title",
        projects_title_3: "Projects Title",

        project_title_1: "Project Title",
        project_title_2: "Project Title",
        project_title_4: "Project Title",
        project_title_5: "Project Title",
        project_title_8: "Project Title",
        project_title_9: "Project Title",

        project_info_1: "Project Info",
        project_info_2: "Project Info",
        project_info_3: "Project Info",
        project_info_4: "Project Info",
        project_info_5: "Project Info",
        project_info_6: "Project Info",
        project_info_7: "Project Info",
        project_info_8: "Project Info",
        project_info_9: "Project Info",
        project_info_10: "Project Info",
        project_info_11: "Project Info"
    },
    french: {
        nav_home: "Home",
        nav_skills: "Comp??tences",
        nav_projects: "Projets",
        header_subtitle: "BIENVENUE",
        skills_title: "Comp??tences",
        projects_title_1: "Titre Projets",
        projects_title_2: "Titre Projets",
        projects_title_3: "Titre Projets",
        project_title_1: "Titre Projet",
        project_title_2: "Titre Projet",
        project_title_4: "Titre Projet",
        project_title_5: "Titre Projet",
        project_title_8: "Titre Projet",
        project_title_9: "Titre Projet",
        project_info_1: "Info Projet",
        project_info_2: "Info Projet",
        project_info_3: "Info Projet",
        project_info_4: "Info Projet",
        project_info_5: "Info Projet",
        project_info_6: "Info Projet",
        project_info_7: "Info Projet",
        project_info_8: "Info Projet",
        project_info_9: "Info Projet",
        project_info_10: "Info Projet",
        project_info_11: "Info Projet"
    }
};

function englishTranslation() {
    nav_french.style.display = 'flex';
    nav_english.style.display = 'none';
    nav_home.textContent = lang['english'].nav_home;
    nav_skills.textContent = lang['english'].nav_skills;
    nav_projects.textContent = lang['english'].nav_projects;
    header_subtitle.textContent = lang['english'].header_subtitle;
    skills_title.textContent = lang['english'].skills_title;
    projects_title_1.textContent = lang['english'].projects_title_1;
    projects_title_2.textContent = lang['english'].projects_title_2;
    projects_title_3.textContent = lang['english'].projects_title_3;
    project_title_1.textContent = lang['english'].project_title_1;
    project_title_2.textContent = lang['english'].project_title_2;
    project_title_4.textContent = lang['english'].project_title_4;
    project_title_5.textContent = lang['english'].project_title_5;
    project_title_8.textContent = lang['english'].project_title_8;
    project_title_9.textContent = lang['english'].project_title_9;
    project_info_1.textContent = lang['english'].project_info_1;
    project_info_2.textContent = lang['english'].project_info_2;
    project_info_3.textContent = lang['english'].project_info_3;
    project_info_4.textContent = lang['english'].project_info_4;
    project_info_5.textContent = lang['english'].project_info_5;
    project_info_6.textContent = lang['english'].project_info_6;
    project_info_7.textContent = lang['english'].project_info_7;
    project_info_8.textContent = lang['english'].project_info_8;
    project_info_9.textContent = lang['english'].project_info_9;
    project_info_10.textContent = lang['english'].project_info_10;
    project_info_11.textContent = lang['english'].project_info_11;
}

function frenchTranslation() {
    nav_english.style.display = 'flex';
    nav_french.style.display = 'none';
    nav_home.textContent = lang['french'].nav_home;
    nav_skills.textContent = lang['french'].nav_skills;
    nav_projects.textContent = lang['french'].nav_projects;
    header_subtitle.textContent = lang['french'].header_subtitle;
    skills_title.textContent = lang['french'].skills_title;
    projects_title_1.textContent = lang['french'].projects_title_1;
    projects_title_2.textContent = lang['french'].projects_title_2;
    projects_title_3.textContent = lang['french'].projects_title_3;
    project_title_1.textContent = lang['french'].project_title_1;
    project_title_2.textContent = lang['french'].project_title_2;
    project_title_4.textContent = lang['french'].project_title_4;
    project_title_5.textContent = lang['french'].project_title_5;
    project_title_8.textContent = lang['french'].project_title_8;
    project_title_9.textContent = lang['french'].project_title_9;
    project_info_1.textContent = lang['french'].project_info_1;
    project_info_2.textContent = lang['french'].project_info_2;
    project_info_3.textContent = lang['french'].project_info_3;
    project_info_4.textContent = lang['french'].project_info_4;
    project_info_5.textContent = lang['french'].project_info_5;
    project_info_6.textContent = lang['french'].project_info_6;
    project_info_7.textContent = lang['french'].project_info_7;
    project_info_8.textContent = lang['french'].project_info_8;
    project_info_9.textContent = lang['french'].project_info_9;
    project_info_10.textContent = lang['french'].project_info_10;
    project_info_11.textContent = lang['french'].project_info_11;
}

nav_english.addEventListener('click', function () {
    return englishTranslation();
});

nav_french.addEventListener('click', function () {
    return frenchTranslation();
});

let language = navigator.language;

function checkNavigator() {
    if (
        language === "en" ||
        language === "en-AU" ||
        language === "en-BZ" ||
        language === "en-CA" ||
        language === "en-GB" ||
        language === "en-IE" ||
        language === "en-JM" ||
        language === "en-NZ" ||
        language === "en-TT" ||
        language === "en-US"
    ) {
        return englishTranslation();
    }

    if (
        language === "fr" ||
        language === "fr-BE" ||
        language === "fr-CA" ||
        language === "fr-CH" ||
        language === "fr-LU"
    ) {
        return frenchTranslation();
    }
}

window.addEventListener('load', checkNavigator);
