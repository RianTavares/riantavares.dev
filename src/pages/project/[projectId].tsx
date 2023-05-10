import React, { useContext, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import { LocaleContext } from "@/context/LocaleContext";
import { AppBar, Footer, ProjectHeader, ProjectInfoWrapper } from "@/components";
import { Project } from '@/types/project';
import { NextSeo } from 'next-seo';

import styles from './project.module.scss';

const Project = () => {
  const { locale } = useContext(LocaleContext);
  const router = useRouter();
  const { projectId } = router.query;
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [projectPost, setProjectPosts] = useState<React.ReactNode | null>(null);
  const [slug, setSlug] = useState(null);

  async function getProjectById(id: string | string[] | undefined, locationCode: string, slug: string | null) {
    if (slug) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects?locale=${locationCode}&filters[slug][$eq]=${slug}&populate=*`);
      return res.json();
    } else {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}?locale=${locationCode}&populate=*`);
      return res.json();
    }
  }

  useEffect(() => {
    if (projectId) {
      getProjectById(projectId, locale, slug).then((data) => {
        const project = slug ? data.data[0] : data.data;
        setProjectData(project);
        setProjectPosts(parse(project.attributes.postDescription) as string);
        if (!slug) setSlug(project.attributes.slug);
      });
    }
  }, [locale, projectId]);

  if (!projectData) return null;

  return (
    <>
      <NextSeo
        title={`${projectData.attributes.name} - RianTavaresDev`}
        description={projectData.attributes.shortDescription}
      />
      <section className={styles.projectPage}>
        <AppBar />
        <section className={styles.projectContent}>
          <ProjectHeader
            title={projectData.attributes.name}
            description={projectData.attributes.shortDescription}
            imageSource={projectData.attributes.postImg.data.attributes.url}
          />
          <ProjectInfoWrapper
            client={projectData.attributes.client}
            stack={projectData.attributes.stack}
            year={projectData.attributes.year}
            demo={projectData.attributes.demo}
          />
          <main className={styles.postBody}>
            {projectPost}
          </main>
          <Footer />
        </section>
      </section>
    </>
  );
};

export default Project;
