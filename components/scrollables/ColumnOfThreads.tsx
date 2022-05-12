import styles from "../../styles/Home.module.css";
import ThreadContentCard from "../cards/threads/ThreadContentCard";
import GenericButton from "../buttons/GenericButton";
import {useSelector} from "react-redux";
import {AppState} from "../../app/store";
import {useEffect, useState} from "react";
import {ThreadPageResponse, UserDisplayInfo} from "../../@types";
import {element} from "prop-types";
import {Button, Card, Stack, Typography} from "@mui/material";


const threadResponseMapper = (threadDisplayInfo: ThreadPageResponse, key: number): JSX.Element => {
    return (<ThreadContentCard
        key={key}
        title={threadDisplayInfo.title}
        description={threadDisplayInfo.description}
        createdAt={threadDisplayInfo.createdAt}
        creator={threadDisplayInfo.creator}
        contributors={threadDisplayInfo.contributors}
    />);
}

export default function ColumnOfThreads() {

    const [displayVals, setDisplayVals] = useState<JSX.Element[]>([<div key={"unused"}>Loading...</div>])
    const [threadData, setThreadData] = useState<ThreadPageResponse[]>([])

    // TODO: Paginate this i guess

    // inital fetch for getting the data
    useEffect(() => {
        fetch("http://localhost:8080/findPage", {
            method: 'POST',
            mode:'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            },
            body: '{}'
        })
            .then((res: Response) => res.json())
            .then((result: ThreadPageResponse[]) => setThreadData(result))

    }, []);

    // For processing the data
    useEffect(() => {
        const displayVals: JSX.Element[] = []
        threadData.map((element, index) => {
            displayVals.push(threadResponseMapper(element, index))
       })

        setDisplayVals(displayVals)
        console.log("fetched")
    }, [threadData])

    const [page, setPage] = useState(1);
    const handlePageClickBack = (event: any) => {

        setPage(Math.max(page - 1, 1));
    };
    const handlePageClickForward = (event: any) => {
        setPage(page + 1);
    };

    return (
        <div style={{
            // border: `${showThreads ? "3px solid black" : "3px solid green"}`,
            display: "flex",
            // display: "none",
            flexDirection: "column",
            padding: "1vw",
            // overflow: "scroll",
            // border: "3px solid green",
            // height: "92vh",
            // width: "35vw"
        }}>
            {displayVals}
            <Stack direction="row" spacing={2} sx={{mt: "auto"}}>
                <Button variant="outlined" onClick={handlePageClickBack}>Back</Button>
                <Typography>{page}</Typography>
                <Button variant="outlined" onClick={handlePageClickForward}>Next</Button>
            </Stack>
        </div>
    );
}
