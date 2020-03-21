import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Run Production</>,
    imageUrl: 'img/production-warehouse.svg',
    description: (
      <>
        We run Glasswall's products in Production following Google's SRE practices. Our
        aim is to make sure all customers experience a high level of availability no matter
        what product they use.
      </>
    ),
***REMOVED***
  {
    title: <>Consulting and Guidance</>,
    imageUrl: 'img/consulting.svg',
    description: (
      <>
        We provide consulting and guidance on best practices for creating scalable
        available products.
      </>
    ),
***REMOVED***
  {
    title: <>Infrastructure</>,
    imageUrl: 'img/construction.svg',
    description: (
      <>
        We help build infrastructure and provide platforms for you to run your
        products.
      </>
    ),
***REMOVED***
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
***REMOVED***imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/about/what-is-sre')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
***REMOVED***features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
        ***REMOVED***features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
