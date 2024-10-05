export default function HobbyLinks() {
    const hobbyLinks = ["https://www.crunchyroll.com/", "https://en.wikipedia.org/wiki/Brazilian_jiu-jitsu", "https://en.wikipedia.org/wiki/Muay_Thai"];
    return (
        <div>
            <a href = {hobbyLinks[0]}>CrunchyRoll</a>
            <a href = {hobbyLinks[1]}>Jiu Jitsu</a>
            <a href = {hobbyLinks[2]}>Muay Thai</a>
        </div>
    );
}