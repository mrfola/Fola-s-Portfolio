import styles from "./JobsOfFola.module.scss";
import Logo from "./../../UI/atoms/Logo/Logo";
import Accordion from "../../organisms/Accordion/Accordion";
import AccordionItem from "../../UI/molecules/Accordion/AccordionItem";

const JobsOfFola = () => 
{
    const jobs = 
    [
        {
            key : "1",
            title : "Backend Developer",
            company : "Trillz Global",
            startDate : new Date("2022-03-25"),
            projects: 
            [

                {
                    name: "SecureMyId",
                    description: "A platform to verify your identity and protect you in cases of identity theft",
                    projectDetails :
                    [
                        "Developed the API that allowed users to verify, monitor and protect their identities from compromise.",
                        "Contributed to the Laravel package that allowed companies to integrate our application into their system.",
                        "Overhauled the database design and backend codebase to reduce redundancy and ensure scalability.",
                        "Created technical documentation for API using Postman."
                    ]  
                },
                {

                    name: "Querelis",
                    description: "A USSD-based support system for mobile network",
                    projectDetails :
                    [
                        "Integrated functionality that allowed users to send their support requests over USSD.",
                        "Led the design and architecture of the backend application (database design, choice of technology, etc).",
                        "Developed middlewares that helped separate user access, company access and admin access.",
                        "Built REST API endpoints in Laravel which were consumed by the ReactJs application."
                    ]  
                }
              
              
            ]
        },
        {
            key : "2",
            title : "Front-end Developer (Contract)",
            company : "Jazbeth Care",
            startDate : new Date("2022-06-01"),
            endDate: new Date("2022-07-01"),
            projects: 
            [
                {
                    name: "Jazbethcare.com",
                    description: "Website for a residential and commercial cleaning company.",
                    projectDetails :
                    [
                        "Tested the website to ensure cross-browser compatibility and mobile responsiveness.",
                        "Assessed technical feasibility of UI/UX design.",
                        "Collaborated with the designer to identify critical website features based on consumer needs.",
                        "Converted UI/UX designs and wireframes into a fast, completely responsive website using React.js.",
                        "Optimized the website by lowering page load time to improve sales and marketing efforts.",
                    ]  
                }         
              
            ]
        },
        {
            key : "3",
            title : "Web developer and manager",
            company : "Income Boomers",
            startDate : new Date("2019-12-1"),
            endDate: new Date("2021-10-1"),
            projects: 
            [
                {
                    name: "Income Boomers",
                    description: "A platform to verify your identity and protect you in cases of identity theft",
                    projectDetails :
                    [
                        "Served as the principal web designer responsible for mapping out and developing the company's websites",
                        "Built marketing funnels and templates used to sell the client's services, courses, and coaching programs",
                        "Provided support and maintenance for all websites and marketing funnels",
                        "Offered technical insights and advice to help scale the output of client services"
                    ]  
                }          
            ]
        }
    ]
    return ( 
        <div className={styles.jobsOfFola}>
            <div className={styles.heading}>
                <span>Jobs of </span>
                <Logo/>
            </div>
            <div className={styles.jobAccordion}>
                <Accordion accordionItems = {jobs} />
            </div>
        </div>
     );
}
 
export default JobsOfFola;