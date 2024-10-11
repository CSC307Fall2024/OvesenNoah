export default function Skills({params}: { params: { id: string} }) {

    let skillsList = {
        'certs': "I have Comptia Net+ and Comptia Sec+",
        'langs': "I know C, Python, Java, Typescript, Ansible, Docker, RISC V assembly"
    };

    return (<div>
        <h1>{params.id}</h1>
        <div>This this is some details about my skill: { skillsList[params.id] } </div>
        </div>
    );
}