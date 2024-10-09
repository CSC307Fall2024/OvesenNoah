
export default function Jobs({params}: { params: { id: string} }) {

    let jobsList = {
        'ElRancho': "Student Assistant. Diagnosing and repairing common computer issues in person and over the phone.",
        'Highline': "Zipline Guide. Training and guiding customers safely through obstacle course and ziplines",
        'ServiceDesk': "Part-time Courtesy Clerk. Bagging groceries, collecting carts, assisting customers with their needs"
    };

    return (<div>
        <h1>{params.id}</h1>
        <div>The details of this job are as follows: { jobsList[params.id] } </div>
        </div>
    );
}