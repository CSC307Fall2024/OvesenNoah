export default function Projects({params}: { params: { id: string} }) {

    let projectsList = {
        'rack': "I built a network rack out of ewaste from my highschool.",
        'services': "The services I host are airsonic, ftp, tailscale, among others",
        'programming': "Programmed a rudimentary HTTP Server, File System Emulator, and copies of Linux utilities in C."
    };

    return (<div>
        <h1>{params.id}</h1>
        <div>{ projectsList[params.id] } </div>
        </div>
    );
}