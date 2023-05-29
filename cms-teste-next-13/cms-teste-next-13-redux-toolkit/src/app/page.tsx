'use client'

import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/store/store'
import { increment, decrement, incrementByAmount } from '@/store/features/counter/counterSlice'
// import { getCounters } from '@/store/features/counter/counterSlice'
import { useGetPokemonByNameQuery } from '@/services/pokemon'

import styles from './page.module.css'

export default function HomePage() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  // const { entities, loading } = useSelector((state) => state.posts)

  // useEffect(() => {
  //   dispatch(getPosts())
  // }, [])

  return (
    <>
      <main className={styles.main}>

        <button className={styles.button} onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          Decrement</button>
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>


        <div className="App">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <h3>{data?.species.name}</h3>
              <img src={data.sprites.front_shiny} alt={data.species.name} />
            </>
          ) : null}
        </div>

      </main>
    </>
  )
}
