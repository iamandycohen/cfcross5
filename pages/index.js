export async function getServerSideProps(context) {
    const res = await fetch(`https://cfcross1.sitecore-saas---staging.workers.dev/`)
    const data = await res.json()
  
    if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }

function HomePage({ data }) {
  return <div>Welcome to Next.js! {JSON.stringify(data)}</div>;
}

export default HomePage;
