import Head from 'next/head'
import styles from '../../styles/CareerInner.module.css'
import { Container } from 'reactstrap';
const baseUrl = process.env.API_URL;
import JobDetails from '../../components/Career/JobDetails';



const CareerInner = ({ job }) => {

    return (
        <>
            <Head>
                <title>{job[0].Job_Title} | Jindal  Lifestyle</title>
                <meta name="description" content="Jobs" />
            </Head>
            <div className={styles.dummyBanner}  >
                <section >
                    <Container>
                        <JobDetails job={job} />
                    </Container>
                </section>
            </div>

        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${baseUrl}jobs`);
    const posts = await res.json();
    const paths = posts.map((post) => ({
        params: { slug: post.Slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    let slug = context.params.slug;
    const res = await fetch(`${baseUrl}jobs?Slug=${slug}`)
    const job = await res.json()

    return { props: { job } }
}


export default CareerInner