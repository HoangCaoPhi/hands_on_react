import { useState } from "react";
import { Project } from "./Project";
import { ProjectCard } from "./ProjectCard";
import ProjectForm from "./ProjectForm";


interface ProjectListProps {
    projects: Project[],
    onSave: (project: Project) => void
}

export const ProjectList = ({ projects, onSave }: ProjectListProps) => {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleClick = (project: Project) => {
        setProjectBeingEdited(project);
    }

    const cancelEditing = () => {
        setProjectBeingEdited({});
    };

    return (
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    {
                        project === projectBeingEdited ?
                            <ProjectForm project={project} onCancel={cancelEditing} onSave={onSave}></ProjectForm> :
                            <ProjectCard project={project} onEdit={handleClick}></ProjectCard>
                    }
                </div>
            ))}
        </div>
    );
}