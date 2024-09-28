import React from "react";

function Projects() {
  return (
    <>
      <div className="w-full" id="projects">
      <h2 className="text-left text-xl p-4" id="title">
          <span className="text-red-600"> $ > </span>
          <span className="text-vert">git commit -m "PROJECTS"</span>
        </h2>

        <div className="p-4 flex flex-col md:flex-row md:gap-4">
          <div className="w-full h-auto border-2 md:w-1/3 p-4 mb-4 md:mb-0">
            <h1 className="bg-gray-100 text-black text-center rounded-md p-1">
              Smart Contact Manager
            </h1>
            <p className="text-center my-4 p-4">
              Spring Boot - Spring Security - Oauth Google - Spring Data JPA -
              Thymeleaf - TailwindCSS - Mysql - Java Mail - Kafka - Github
              Actions - Docker - Kubernetes - Kvm - Libvirt
            </p>
          </div>

          <div className="w-full h-auto border-2 md:w-1/3 p-4 mb-4 md:mb-0">
            <h1 className="bg-gray-100 text-black text-center rounded-md p-1">
              Bookmarker
            </h1>
            <p className="text-center my-4 p-4">
              Spring Boot - Postgres - Nextjs - Flyway - Github Actions - Docker
              - Kubernetes - Kvm - Libvirt
            </p>
          </div>

          <div className="w-full h-auto border-2 md:w-1/3 p-4">
            <h1 className="bg-gray-100 text-black text-center rounded-md p-1">
              Spring Hateoas
            </h1>
            <p className="text-center my-4 p-4">
              Restfull Api avec Spring Hateoas
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
