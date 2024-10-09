
export default function Jobs({params}: { params: { id: string} }) {

    let jobsList = {
        1: "Job #1 desc",
        2: "Job #2 desc",
        3: "Job #3 desc"
    };

    return (
        <div>This is a job detail { jobsList[params.id] } </div>
    );
}