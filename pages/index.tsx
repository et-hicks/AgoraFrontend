import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThreadContentCard from "../components/cards/threads/ThreadContentCard";
import Article from "../components/article/Article";
import {useState} from "react";
import dynamic from "next/dynamic";
import {useSelector} from "react-redux";
import {AppState} from "../app/store";
import Discussion from "../components/discussion/Discussion";
import GenericButton from "../components/buttons/GenericButton";
import HomePage from "../components/HomePage";
import ProfilePage from "../components/ProfilePage";

const Home: NextPage = () => {



    return (
        <div>
            {/*<HomePage />*/}
            <ProfilePage />
        </div>
    )
}

export default Home
