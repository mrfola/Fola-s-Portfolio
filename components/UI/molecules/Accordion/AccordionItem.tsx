import styles from "./AccordionItem.module.scss";

interface AccItemProject
{
    name: string;
    description: string;
    projectDetails: Array<string>;  
}

interface AccItemProp
{
    className?: string,
    accItem:
    {
        title: string;
        company: string;
        startDate: Date;
        endDate?: Date;
        projects: Array<AccItemProject>            
    }
    
}

const AccordionItem = (props: AccItemProp) => 
{
    const accItem = props.accItem;
    const startDate = accItem.startDate.getMonth() + "/" + accItem.startDate.getFullYear();
    const endDate = accItem.endDate ? accItem.endDate.getMonth() + "/" + accItem.endDate.getFullYear() : "present";

    return ( 
        <div className={`${styles.accordionItem} ${props.className}`}>
            <div className={styles.title}>{accItem.title}</div>
            <div className={styles.companyAndDate}>{accItem.company + " (" + startDate + " - " + endDate + ")"}</div>
            <div className={styles.projects}>
                {accItem.projects.map((project: any) => 
                {
                    return(
                        <div key={project.name} className={styles.project}>
                            <div className={styles.projectNameAndDescription}>
                                <span className={styles.projectName}>{"Project: " + project.name + ": "}</span> 
                                <span className={styles.projectDescription}>{project.description}</span>
                            </div>
                            <div className={styles.projectDetails}>
                                <ul>{project.projectDetails.map((detail: any) => (<li key={detail}>{detail}</li>))} </ul>
                            </div>
                    </div>
                    )
                    
                })}
                
            </div>
            

        </div>
     );
}
 
export default AccordionItem;