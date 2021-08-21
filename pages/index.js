import Head from 'next/head'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import Card from "../src/components/Card";
import CardPlaceHolder from "../src/components/CardPlaceHolder";
import { getRepos } from "../src/heplers/func";


export default function Home() {
  const [repos, setrepos] = useState([])
  const [loadingRepos, setloadingRepos] = useState(true)
  const [pageCount, setpageCount] = useState(2)
  const loadFunc = () => {
    getRepos(pageCount).then(({data}) => {
      setrepos(x=> [...x, ...data.items])
      setpageCount(x=> x+1)
    }).catch(err=>{
      console.log("err",err.message)
    })
  }
  useEffect(() => {
    getRepos().then(({data}) => {
      setrepos(data.items)
      setloadingRepos(false)
    }).catch(err=>{
      console.log("err",err.message)
      setloadingRepos(false)
    })

  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 bg-white">
        <section className="bg-gray-200">
          <article className="max-w-2xl flex flex-col mx-auto w-full justify-center py-5">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Gemography Webapp by soufiyan benallal 🖤</h2>
            <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">Trending respos</h1>
          </article>
        </section>
        <section className="max-w-3xl flex flex-col mx-auto w-full justify-center ">
          {
            loadingRepos 
            ? (
                <ul className="flex flex-col w-full divide divide-y" >
                  {
                    [...Array(3).keys()].map((_,key)=>(<CardPlaceHolder key={'card-placeholder-'+key} />))
                  }
                </ul>
              )
            : (
              <InfiniteScroll
                pageStart={1}
                loadMore={loadFunc}
                hasMore={true || false}
                loader={
                  <div className=" flex justify-center items-center my-3" key={'load-'+pageCount}>
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
                  </div>
                }
              >
                <ul className="flex flex-col w-full divide divide-y" >
                  {
                    repos.map((item,key)=>(<Card key={'card-'+key} item={item} />))
                  }  
                </ul>
              </InfiniteScroll>
            )
          }
        </section>
      </main>

      <footer className="bg-gray-200 flex items-center justify-center w-full h-20 border-t mt-5">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >Designed with 🖤 by Soufiyan benallal
        </a>
      </footer>
    </div>
  )
}
