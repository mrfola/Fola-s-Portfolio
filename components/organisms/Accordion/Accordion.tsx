import AccordionItem from "../../UI/molecules/Accordion/AccordionItem";
import styles from "./Accordion.module.scss";

interface props
{
   accordionItems: any
}

const Accordion = (props: props) => 
{
    return ( 
        <div className={styles.accordion}>
            {
                props.accordionItems.map((accordionItem: any) => 
                {
                    return <AccordionItem key={accordionItem.key} accItem={accordionItem} />;
                })
            }
        </div>
     );
}
 
export default Accordion;