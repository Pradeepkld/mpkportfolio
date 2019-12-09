import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    cannonical
  } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Pradeep Kumar Matam Portfolio';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="My name is Pradeep Kumar Matam and I am an experienced software engineer and freelance developer. I have a Bachelor's degree in Computer Science Engineering and several years of experience working on a wide range of Web technologies and worked on projects developed using ASP.NET, ASP.NET Core, C#, React, Angular, Python, Django, Machine Learning throughout my career. I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to read my blogs, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way."
        />
        <meta
          name="keywords"
          content="Pradeep, Pradeep developer, Pradeep freelancig, Pradeep programming"
        />
        <meta
          property="og:title"
          content="Pradeep Matam - programmer, developer, bloger"
        />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Pradeep Matam and I am an experienced software engineer and freelance developer."
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        {cannonical && (
          <link
            rel="cannonical"
            href={`${process.env.BASE_URL}${cannonical}`}
          />
        )}
        <link rel="icon" type="image/ico" href="/static/favicon.ico" />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
