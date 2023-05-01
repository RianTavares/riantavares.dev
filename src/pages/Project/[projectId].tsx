import React, { useContext, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { LocaleContext } from "@/context/LocaleContext";
import { AppBar, Footer, ProjectHeader, ProjectInfoWrapper } from "@/components";
import parse from 'html-react-parser';

import styles from './project.module.scss';

interface Project {
    id: number;
    name: string;
    description: string;
    date: string;
    android: boolean;
    android_url: string;
    case: { [key: string]: any };
    created_at: string;
    ios: boolean;
    ios_url: string | null;
    locale: string;
    localizations: any[];
    post: string;
    post_banner: { [key: string]: any };
    post_title: string;
    published_at: string;
    see_more_button: string;
    slug: string;
    tags: any[];
    updated_at: string;
    web: boolean;
    web_url: string | null;
  }

async function getProjectById(id: string | string[] | undefined, locationCode: string) {
    const res = await fetch(`https://content-manager-rt.herokuapp.com/projects?_locale=${locationCode}&id=${id}`);
    return res.json();
  }

const Project = () => {
    const { translate, locale } = useContext(LocaleContext);
    const router = useRouter()
    const { projectId } = router.query
    const [projectData, setProjectData] = useState<Project>();
    const [projectPost, setProjectPosts] = useState<string | null>(null);

    useEffect(() => {
        if(projectId) getProjectById(projectId, locale).then((data) => {
            setProjectData(data[0]);
            setProjectPosts(parse(data[0].post) as string);
        });
      }, [locale, projectId]);
    
    if (!projectData) return null;
  
    return (
        <section className={styles.projectPage}>
            <AppBar />
            <section className={styles.projectContent}>
                <ProjectHeader 
                    title={projectData.name}
                    description={projectData.description}
                    imageSource={projectData.post_banner.url}
                />
                <ProjectInfoWrapper />
                <main className={styles.postBody}>
                    {projectPost}
                </main>
                <Footer />
            </section>
        </section>
        )
    }

    export default Project;