import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsPage from "./pages/ProjectPage";
import ProjectDetail from "./components/ProjectDetail";
import ContactSection from "./components/ContactSection";
import imgGameStore from "./assets/storegame.png";
import imgEcommerce from "./assets/ecommerce.png";
import imgGestorInventario from "./assets/gestorinventario.png";
import imgTolibird from "./assets/tolibird.png";
import imgPractica from "./assets/practica.png";

function App() {
  return (
    <BrowserRouter basename="/portafolio">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <About />
              <Skills />
              <ProjectsPage />
              <ContactSection />
            </>
          }
        />
        <Route
          path="/proyecto/gamestore"
          element={
            <ProjectDetail
              backgroundImage={imgGameStore}
              title="Game Store"
              subtitle="React JS / Tailwind"
              description="El desarrollo del proyecto Game Store representó una experiencia enriquecedora, 
              en la que pude poner en práctica mis habilidades como desarrollador empleando tecnologías modernas 
              como React y Tailwind CSS. El objetivo principal fue diseñar una plataforma visualmente atractiva y fácil de usar, 
              pensada para que los amantes de los videojuegos pudieran adquirir y disfrutar sus títulos favoritos de manera online.
              Este trabajo me permitió adquirir conocimientos valiosos en el uso de herramientas frontend, mejorar la experiencia del usuario,
              integrar funcionalidades avanzadas y mantener siempre presente la importancia de la seguridad y la protección de los datos."
              technologies={["React", "Tailwind", "Javascript"]}
              repoLink="https://github.com/BrandonCardona/storegame"
              demoLink="https://brandoncardona.github.io/storegame/"
            />
          }
        />
        <Route
          path="/proyecto/tolibird"
          element={
            <ProjectDetail
              backgroundImage={imgTolibird}
              title="Tolibird AI"
              subtitle="Python / Streamlit"
              description="Tolibird es un proyecto enfocado en el reconocimiento de aves del departamento del Tolima, Colombia. 
              Entrenamos un modelo de aprendizaje automático capaz de identificar distintas especies de aves a partir de imágenes, 
              utilizando técnicas de visión por computador. Para facilitar su uso, desarrollamos una interfaz interactiva con Streamlit, 
              que permite a los usuarios cargar imágenes y obtener predicciones del modelo de manera sencilla y accesible. Tolibird combina
              ciencia de datos, conservación y tecnología para apoyar el conocimiento y la preservación de la biodiversidad regional."
              technologies={["Python", "Streamlit"]}
              repoLink="https://github.com/BrandonCardona/tolibird"
              demoLink="https://tolibird.streamlit.app"
            />
          }
        />
        <Route
          path="/proyecto/ecommerce"
          element={
            <ProjectDetail
              backgroundImage={imgEcommerce}
              title="Ecommerce"
              subtitle="React JS / Tailwind"
              description="Bienvenido a esta sección de mi portafolio, donde presento un proyecto de e-commerce de comida que desarrollé utilizando React.
                          En este trabajo me enfoqué en crear un diseño limpio y atractivo, resaltando los productos alimenticios y brindando una experiencia 
                          de usuario fluida. Gracias a React, implementé componentes interactivos que permiten navegar y filtrar el catálogo de manera sencilla 
                          y amigable."
              technologies={["React", "Tailwind", "Javascript"]}
              repoLink="https://github.com/BrandonCardona/ecommerce"
              demoLink="https://brandoncardona.github.io/ecommerce/"
            />
          }
        />
        <Route
          path="/proyecto/gestor-inventario"
          element={
            <ProjectDetail
              backgroundImage={imgGestorInventario}
              title="Gestor de Inventario"
              subtitle="PHP / JavaScript / MySQL"
              description="Este proyecto consiste en un sistema de gestión de inventario desarrollado con PHP, JavaScript y MySQL, 
              orientado al control eficiente de productos en bodega. La plataforma permite registrar y actualizar el inventario, 
              así como gestionar ventas asociadas a dicho inventario. Además, el sistema genera reportes de inventario disponible, 
              facturas automáticas al realizar una venta y reportes detallados de ventas por rangos de fechas, lo que facilita el 
              seguimiento y la toma de decisiones en entornos comerciales."
              technologies={["PHP", "JavaScript", "MySQL"]}
              repoLink="https://github.com/BrandonCardona/gestor-inventario"
            />
          }
        />
        <Route
          path="/proyecto/gestor-pacs"
          element={
            <ProjectDetail
              backgroundImage={imgPractica}
              title="Gestor de Pacs"
              subtitle="React JS / Express JS / PostgreSQL"
              description="Esta aplicación fue desarrollada para la gestión integral de los Planes de Acción Cuatrienales (PACs) en la entidad CORTOLIMA, 
              utilizando una arquitectura basada en ReactJS para el frontend, ExpressJS para el backend y PostgreSQL como base de datos relacional.
              La plataforma permite llevar un registro estructurado de los PACs, incluyendo todos sus subniveles jerárquicos como pilares, políticas, metas e 
              indicadores. A nivel de frontend, se generaron componentes reutilizables, interfaces limpias y accesibles. Por otro lado, a nivel de Backend se 
              diseñó con un enfoque en la seguridad, incorporando firewalls, autenticación basada en JSON Web Tokens (JWT), control de acceso 
              por roles (RBAC), encriptación de datos sensibles, y medidas de protección contra ataques comunes como inyecciones SQL y cross-site scripting (XSS)."
              technologies={["React", "Express", "PostgreSQL"]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
