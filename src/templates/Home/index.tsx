import React from 'react'
import Layout from 'components/organisms/Layout'
import Post from 'components/molecules/Post'

const Home = () => (
  <div>
    <Layout>
      <Post
        tag={{ title: 'misc', colorText: 'white', colorBackground: 'green' }}
        date={{ day: 15, month: 5, year: 2000 }}
        title="Meu ano de 2021"
        shortText="Ano passado ja foi complicado para mim, mas esse ano foi mais ainda."
        href="/"
      />
    </Layout>
  </div>
)

export default Home
