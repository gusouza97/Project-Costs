import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';

function Newproject(){
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    );
}

export default Newproject;