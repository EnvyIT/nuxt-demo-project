import { BlogMutations } from '~/store/blog'
import { JobMutations } from '~/store/job'
import { EducationMutations } from '~/store/education'
import { CertificateMutations } from '~/store/certificate'

export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  nuxtServerInit (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit(BlogMutations.SET_BLOGS,
        [
          {
            id: 1,
            img: {
              alt: 'Nuxt.js Logo',
              url: 'nuxtjs.png'
            },
            en: {
              title: 'This is Nuxt.js!',
              text: `Nuxt is a framework designed to give you a strong architecture following official Vue guidelines. Incrementally adoptable, it can be used to create from static landing pages to complex enterprise ready web applications.`,
              content: `Nuxt is a framework designed to give you a strong architecture following official Vue guidelines. Incrementally adoptable, it can be used to create from static landing pages to complex enterprise ready web applications.
                  Versatile by nature, it supports different targets (server, serverless or static) and server side rendering is switchable.
                  Extendable with a strong module ecosystem, it makes it easy to connect your REST or GraphQL endpoints, favorites CMS, CSS frameworks and more. PWA and AMP support is only a module away from your Nuxt project.
                  NuxtJS is the backbone of your Vue.js project, giving structure to build your project with confidence while being flexible.`
            },
            de: {
              title: 'Das ist Nuxt.js!',
              text: `Nuxt ist ein Framework, das entwickelt wurde, um Ihnen eine starke Architektur zu bieten, die den offiziellen Vue-Richtlinien entspricht. Inkrementell anpassbar, kann es zum Erstellen von statischen Zielseiten bis hin zu komplexen, für Unternehmen geeigneten Webanwendungen verwendet werden.`,
              content: `Nuxt ist ein Framework, das entwickelt wurde, um Ihnen eine starke Architektur zu bieten, die den offiziellen Vue-Richtlinien entspricht. Inkrementell anpassbar, kann es zum Erstellen von statischen Zielseiten bis hin zu komplexen, für Unternehmen geeigneten Webanwendungen verwendet werden.
                  Es ist von Natur aus vielseitig und unterstützt verschiedene Ziele (server-, serverlos oder statisch). Das serverseitige Rendering kann umgeschaltet werden.
                  Erweiterbar mit einem starken Modul-Ökosystem, erleichtert es die Verbindung Ihrer REST- oder GraphQL-Endpunkte, bevorzugten CMS, CSS-Frameworks und mehr. Die Unterstützung von PWA und AMP ist nur ein Modul von Ihrem Nuxt-Projekt entfernt.
                  NuxtJS ist das Rückgrat Ihres Vue.js-Projekts und gibt Ihnen die Möglichkeit, Ihr Projekt mit Zuversicht und Flexibilität aufzubauen.`
            },
            author: 'Admin',
            date: new Date()
          },
          {
            id: 2,
            img: {
              alt: 'VueX Logo',
              url: 'vuex.png'
            },
            en: {
              title: 'The Vuex - Guide 2020!',
              text: `Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.`,
              content: `Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.`
            },
            de: {
              title: 'Der Vuex - Guide 2020!',
              text: `Vuex ist ein Zustandsverwaltungsmuster und eine Bibliothek für Vue.js-Anwendungen. Es dient als zentraler Speicher für alle Komponenten in einer Anwendung, wobei Regeln sicherstellen, dass der Status nur auf vorhersehbare Weise geändert werden kann. Es lässt sich auch in die offizielle devtools-Erweiterung von Vue integrieren und bietet erweiterte Funktionen wie das konfigurationsfreie Debuggen von Zeitreisen und den Export / Import von Status-Snapshots.`,
              content: `Vuex ist ein Zustandsverwaltungsmuster und eine Bibliothek für Vue.js-Anwendungen. Es dient als zentraler Speicher für alle Komponenten in einer Anwendung, wobei Regeln sicherstellen, dass der Status nur auf vorhersehbare Weise geändert werden kann. Es lässt sich auch in die offizielle devtools-Erweiterung von Vue integrieren und bietet erweiterte Funktionen wie das konfigurationsfreie Debuggen von Zeitreisen und den Export / Import von Status-Snapshots.`
            },
            author: 'Admin',
            date: new Date()
          },
          {
            id: 3,
            img: {
              alt: 'Redux Logo',
              url: 'flux_redux.jpg'
            },
            en: {
              title: 'Redux + Flux',
              text: `Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
                      You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.`,
              content: `Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
                      You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.`
            },
            de: {
              title: 'Redux + Flux',
              text: `Redux ist ein vorhersehbarer Statuscontainer für JavaScript-Anwendungen. Es hilft Ihnen, Anwendungen zu schreiben, die sich konsistent verhalten, in verschiedenen Umgebungen (Client, Server und nativ) ausgeführt werden und einfach zu testen sind. Darüber hinaus bietet es eine großartige Entwicklererfahrung,
                     wie beispielsweise die Bearbeitung von Live-Code in Kombination mit einem zeitreisenden Debugger.
                     Sie können Redux zusammen mit React oder einer anderen Ansichtsbibliothek verwenden. Es ist winzig (2 KB, einschließlich Abhängigkeiten), verfügt jedoch über ein großes Ökosystem an Addons.`,
              content: `Redux ist ein vorhersehbarer Statuscontainer für JavaScript-Anwendungen. Es hilft Ihnen, Anwendungen zu schreiben, die sich konsistent verhalten, in verschiedenen Umgebungen (Client, Server und nativ) ausgeführt werden und einfach zu testen sind. Darüber hinaus bietet es eine großartige Entwicklererfahrung,
                        wie beispielsweise die Bearbeitung von Live-Code in Kombination mit einem zeitreisenden Debugger.
                        Sie können Redux zusammen mit React oder einer anderen Ansichtsbibliothek verwenden. Es ist winzig (2 KB, einschließlich Abhängigkeiten), verfügt jedoch über ein großes Ökosystem an Addons.`
            },
            author: 'Admin',
            date: new Date()
          },
          {
            id: 4,
            img: {
              alt: 'Tailwind CSS Logo',
              url: 'tailwindcss.png'
            },
            en: {
              title: 'What is tailwind css?',
              text: `Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.\nThey come with all sorts of predesigned components like buttons, cards, and alerts that might help you move quickly at first, but cause more pain than they cure when it comes time to make your site stand out with a custom design.
                     Tailwind is different.Instead of opinionated predesigned components, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.\nEvery Tailwind utility also comes with responsive variants, making it extremely easy to build responsive interfaces without resorting to custom CSS.
                     Tailwind uses an intuitive {screen}: prefix that makes it easy to notice responsive classes in your markup while keeping the original class name recognizable and intact.`,
              content: `Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.\nThey come with all sorts of predesigned components like buttons, cards, and alerts that might help you move quickly at first, but cause more pain than they cure when it comes time to make your site stand out with a custom design.
                        Tailwind is different.Instead of opinionated predesigned components, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.\nEvery Tailwind utility also comes with responsive variants, making it extremely easy to build responsive interfaces without resorting to custom CSS.
                        Tailwind uses an intuitive {screen}: prefix that makes it easy to notice responsive classes in your markup while keeping the original class name recognizable and intact.`
            },
            de: {
              title: 'Was ist tailwind css?',
              text: `Tailwind CSS ist ein hochgradig anpassbares CSS-Framework auf niedriger Ebene, das Ihnen alle Bausteine bietet, die Sie zum Erstellen maßgeschneiderter Designs benötigen, ohne störende Stile, mit denen Sie kämpfen müssen, um sie zu überschreiben.
                    Sie werden mit allen möglichen vorgefertigten Komponenten wie Schaltflächen, Karten und Warnmeldungen geliefert, die Ihnen möglicherweise helfen, sich zuerst schnell zu bewegen, aber mehr Schmerzen verursachen als sie heilen, wenn es darum geht, Ihre Website durch ein individuelles Design hervorzuheben.\n
                    Tailwind ist anders. Tailwind bietet nicht nur vorausschauende vordefinierte Komponenten, sondern auch Utility-Klassen auf niedriger Ebene, mit denen Sie vollständig benutzerdefinierte Designs erstellen können, ohne jemals Ihr HTML zu verlassen.\n
                    Jedes Tailwind-Dienstprogramm wird auch mit reaktionsschnellen Varianten geliefert, wodurch es extrem einfach ist, reaktionsschnelle Schnittstellen zu erstellen, ohne auf benutzerdefiniertes CSS zurückgreifen zu müssen.
                    Tailwind verwendet ein intuitives {screen}: Präfix, mit dem reaktionsschnelle Klassen in Ihrem Markup leicht zu erkennen sind und der ursprüngliche Klassenname weiterhin erkennbar und intakt bleibt.`,
              content: `Tailwind CSS ist ein hochgradig anpassbares CSS-Framework auf niedriger Ebene, das Ihnen alle Bausteine bietet, die Sie zum Erstellen maßgeschneiderter Designs benötigen, ohne störende Stile, mit denen Sie kämpfen müssen, um sie zu überschreiben.
                    Sie werden mit allen möglichen vorgefertigten Komponenten wie Schaltflächen, Karten und Warnmeldungen geliefert, die Ihnen möglicherweise helfen, sich zuerst schnell zu bewegen, aber mehr Schmerzen verursachen als sie heilen, wenn es darum geht, Ihre Website durch ein individuelles Design hervorzuheben.\n
                    Tailwind ist anders. Tailwind bietet nicht nur vorausschauende vordefinierte Komponenten, sondern auch Utility-Klassen auf niedriger Ebene, mit denen Sie vollständig benutzerdefinierte Designs erstellen können, ohne jemals Ihr HTML zu verlassen.\n
                    Jedes Tailwind-Dienstprogramm wird auch mit reaktionsschnellen Varianten geliefert, wodurch es extrem einfach ist, reaktionsschnelle Schnittstellen zu erstellen, ohne auf benutzerdefiniertes CSS zurückgreifen zu müssen.
                    Tailwind verwendet ein intuitives {screen}: Präfix, mit dem reaktionsschnelle Klassen in Ihrem Markup leicht zu erkennen sind und der ursprüngliche Klassenname weiterhin erkennbar und intakt bleibt.`
            },
            author: 'Admin',
            date: new Date()
          },
          {
            id: 5,
            img: {
              alt: 'Angular VS Vue VS React',
              url: 'reactVSvueVSangular.jpg'
            },
            en: {
              title: 'Angular vs Vue vs React',
              text: `In 2019, it is impractical to imagine web development without HTML, CSS, and Javascript. Javascript is the soul of front-end development of web apps.
                     If you have landed on this page, I assume that you are confused between
                     the different frameworks & libraries of Javascript programming
                     language`,
              content: `Although it is clear that React is most loved and downloaded framework in 2019, it does not mean that it is the best. There are many other factors that
                      will decide which framework is the most appropriate one for a particular
                      type of web development project.2. Angular vs React vs Vue: An introduction to the backgroundBefore we get into the more specific details about these three Javascript frameworks or library, let’s get a brief intro of Angular vs React vs Vue.Angular:Released in 2010 by Google. It is a typescript based javascript framework. It
                      was released prior to the other two Javascript frameworks that we are
                      discussing in this blog. Today it is called Angular but before 2016
                      there was a suffix ‘JS’ to its name.JS was dropped from its name after the release of Angular 2+. On 28 May’2019, its latest version, Angular 8.0.0 was released. Google and Wix are among the most popular companies using Angular.React:Released in 2013 by Facebook. It is mostly used in high traffic websites. It was developed when Facebook ads started gaining traffic and faced problems in their coding and maintenance which depicted certain issues. Its latest version, 16.8.6 was released on 6 May’2019.They were resolved with the release of this library of Javascript. Whatsapp, Instagram Paypal, Glassdoor, BBC are some of the popular companies using React. It is highly dynamic and offers great support in creating interactive user interfaces.Vue:A progressive Javascript framework released in 2014 and developed by no
                      big name like React and Angular. In fact, it was created by an ex-engineer of Google, Evan You. It is gaining constant popularity. Its latest version; Version 2.6.10 was released on 20 March 2019.It is the youngest member of the family of Javascript frameworks. It has
                      practically removed the drawbacks of the other frameworks to offer ease
                      of next level to software developers. Websites like GitLab and Alibaba
                      are using Vue.3. Angular vs React vs Vue: PerformanceSummary:There is a thing called DOM which can be understood as UI, that is the user
                      interface of your application. The DOM changes whenever you update the
                      user interface. This represents the changes that are made in the
                      application.It can be used in two ways, either as virtual DOM or a real DOM. The performance of the framework/library is highly affected by them. Let’s see what is used by Angular vs React vs Vue 2019 to understand their level of performance:Angular:This framework of Javascript uses real DOM. It is extremely hard to handle
                      because if you lose the flow, you will have to go deep into the codes to
                      actually find out the issue. It is time-consuming, and risky to attract
                      a lot of bugs.The real DOM use by Angular affects its performance and ability to make
                      dynamic software application. Furthermore, it results in the slow
                      performance of this Javascript framework.React:This Javascript library is using virtual DOM. It is not browser specific and
                      lightweight. It is provided in react package for free and eliminates
                      the issues of slow performance of real DOM.This allowed a significant improvement in the performance of javascript frameworks/ libraries and made React utterly popular.`
            },
            de: {
              title: 'Angular vs Vue vs React',
              text: `Im Jahr 2019 ist es unpraktisch, sich eine Webentwicklung ohne HTML, CSS und Javascript vorzustellen. Javascript ist die Seele der Front-End-Entwicklung von Web-Apps.
                     Wenn Sie auf dieser Seite gelandet sind, gehe ich davon aus, dass Sie durcheinander sind
                     die verschiedenen Frameworks und Bibliotheken der Javascript-Programmierung
                     Sprache`,
              content: `Obwohl es klar ist, dass React 2019 das beliebteste und am meisten heruntergeladene Framework ist, bedeutet dies nicht, dass es das beste ist. Es gibt viele andere Faktoren, die
                      wird entscheiden, welcher Rahmen für einen bestimmten am besten geeignet ist
                      Art des Webentwicklungsprojekts.2. Angular vs React vs Vue: Eine Einführung in den Hintergrund Bevor wir uns näher mit diesen drei Javascript-Frameworks oder -Bibliotheken befassen, möchten wir Ihnen eine kurze Einführung in Angular vs React vs Vue geben. Angular: Veröffentlicht 2010 von Google. Es ist ein Typoskript-basiertes Javascript-Framework. Es
                      wurde vor den beiden anderen Javascript-Frameworks veröffentlicht, die wir sind
                      diskutieren in diesem Blog. Heute heißt es Angular aber vor 2016
                      Es gab ein Suffix "JS" zu seinem Namen. JS wurde nach der Veröffentlichung von Angular 2+ von seinem Namen gestrichen. Am 28. Mai2019 wurde die neueste Version Angular 8.0.0 veröffentlicht. Google und Wix gehören zu den beliebtesten Unternehmen, die Angular nutzen.React: Veröffentlicht 2013 von Facebook. Es wird hauptsächlich in stark frequentierten Websites verwendet. Es wurde entwickelt, als Facebook-Anzeigen immer häufiger aufgerufen wurden und Probleme bei der Codierung und Wartung hatten, die bestimmte Probleme darstellten. Die neueste Version, 16.8.6, wurde am 6. Mai 2009 veröffentlicht. Mit der Veröffentlichung dieser Javascript-Bibliothek wurden sie behoben. WhatsApp, Instagram Paypal, Glassdoor, BBC sind einige der beliebtesten Unternehmen, die React verwenden. Es ist hochdynamisch und bietet hervorragende Unterstützung bei der Erstellung interaktiver Benutzeroberflächen.Vue: Ein progressives Javascript-Framework, das 2014 veröffentlicht und von No.
                      großer Name wie React and Angular. In der Tat wurde es von einem Ex-Ingenieur von Google, Evan You, erstellt. Es wird immer beliebter. Seine neueste Version; Version 2.6.10 wurde am 20. März 2019 veröffentlicht. Es ist das jüngste Mitglied der Familie der Javascript-Frameworks. Es hat
                      Die Nachteile der anderen Frameworks wurden praktisch beseitigt, um sie zu vereinfachen
                      von nächstem Niveau für Softwareentwickler. Websites wie GitLab und Alibaba
                      verwenden Vue.3. Angular vs React vs Vue: PerformanceSummary: Es gibt eine Sache namens DOM, die als Benutzeroberfläche verstanden werden kann, nämlich den Benutzer
                      Schnittstelle Ihrer Anwendung. Das DOM ändert sich, wenn Sie das aktualisieren
                      Benutzeroberfläche. Dies stellt die Änderungen dar, die in der vorgenommen werden
                      application.It kann auf zwei Arten verwendet werden, entweder als virtuelles DOM oder als reales DOM. Die Leistung des Frameworks / der Bibliothek wird stark von ihnen beeinflusst. Sehen wir uns an, was Angular vs React vs Vue 2019 verwendet, um das Leistungsniveau zu verstehen: Angular: Dieses Framework von Javascript verwendet reales DOM. Es ist extrem schwer zu handhaben
                      denn wenn du den fluss verlierst, musst du tief in die codes gehen um
                      finde das Problem tatsächlich heraus. Es ist zeitaufwändig und riskant anzuziehen
                      Viele Bugs. Die tatsächliche Verwendung von DOM durch Angular wirkt sich auf die Leistung und die Fähigkeit aus
                      dynamische Softwareanwendung. Darüber hinaus ergibt sich die langsame
                      Leistung dieses Javascript-Frameworks. Reaktion: Diese Javascript-Bibliothek verwendet virtuelles DOM. Es ist nicht browserspezifisch und
                      Leicht. Es wird kostenlos im React-Paket zur Verfügung gestellt und eliminiert
                      Die Probleme der langsamen Leistung von echtem DOM. Dies ermöglichte eine signifikante Verbesserung der Leistung von Javascript-Frameworks / -Bibliotheken und machte React äußerst beliebt.`
            },
            author: 'Admin',
            date: new Date()
          }
        ]
      )
      context.commit(JobMutations.SET_JOBS, [
        {
          id: 1,
          from: '06.2019',
          to: '',
          title: 'Software Developer',
          company: 'Objectbay Software GmbH'
        },
        {
          id: 2,
          from: '06.2018',
          to: '05.2019',
          title: 'Software Developer',
          company: 'corner4 Information Technology GmbH'
        },
        {
          id: 3,
          from: '02.2018',
          to: '05.2018',
          title: 'Software Developer/ Intern',
          company: 'Objectbay Software GmbH'
        },
        {
          id: 4,
          from: '02.2017',
          to: '08.2017',
          title: 'Software Developer / Intern',
          company: 'Objectbay Software GmbH'
        },
        {
          id: 5,
          from: '03.2005',
          to: '10.2015',
          title: 'Teamlead Repair & Restoring',
          company: 'Wacker Neuson Group'
        }
      ])

      context.commit(EducationMutations.SET_EDUCATIONS, [
        {
          id: 1,
          from: '2018',
          to: '2021',
          degree: 'BSc.',
          school: 'FH Hagenberg'
        },
        {
          id: 2,
          from: '2014',
          to: '2018',
          degree: 'Ing.',
          school: 'HTBLA Leonding'
        }
      ])

      context.commit(CertificateMutations.SET_CERTIFICATES, [
        {
          id: 1,
          issuedOn: '08.2019',
          issuer: 'Scrum Alliance',
          title: 'Certified ScrumMaster (CSM)'
        }
      ])

      resolve()
    })
  }
}
