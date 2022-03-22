import ThreadContentCard from "../../cards/threads/ThreadContentCard";


const GeneratedPost = () => {
    // TODO: use react-query for this to autoload
    return (
        <div style={{
            border: "3px solid pink",
            width: "65vw",
            height: "min-content"
        }}>
            Huh?

        </div>
    );
}


export default function ProfileContent() {
    return (
        <div style={{
            border: "3px solid black",
            width: "65vw",
            height: "min-content",
            display: "flex",
            flexDirection: "column",
            // overflow: "scroll"
        }}>
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
            <ThreadContentCard />
        </div>
    );
}