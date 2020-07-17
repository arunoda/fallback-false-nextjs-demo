import Link from 'next/link'
import Theme from '../components/Theme'
import ms from 'ms'

export default function Home ({ postList }) {
  return (
    <Theme>
      <div className='post-list'>
        {postList.map(post => (
          <div key={post.slug} className='post-link'>
            <Link href='/post/[slug]' as={`/post/${post.slug}`}>
              <a>
                <div className='time'>{ms(Date.now() - post.createdAt, { long: true })} ago</div>
                <div className='title'>{post.title}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Theme>
  )
}

export async function getStaticProps () {
  const postList = [
    {
      slug: '2020-July-01-Hello-World',
      title: 'Hello World',
      createdAt: (new Date('2020 July 01')).getTime()
    }
  ]

  return {
    props: {
      postList
    }
  }
}
