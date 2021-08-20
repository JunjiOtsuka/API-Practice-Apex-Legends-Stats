import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import PlayerStats from './PlayerStats'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

function App() {
  const [platformSlug, setPlatformSlug] = useState('')
  const [platformUserIdentifier, setPlatformUserIdentifier] = useState('')
  const [userInformation, setUserInformation] = useState([])
  const [lifetimeStats, setLifetimeStats] = useState('')

  //***********This Effect helps us see whats inside userInformation and lifetimeStats*******/
  // useEffect(() => {
  //   if (!userInformation) return
  //   console.log(userInformation)
  //   console.log(lifetimeStats)
  // }, [userInformation])

  useEffect(() => {
    if (!platformSlug || !platformUserIdentifier) return
       axios.post('http://localhost:3001/user', {
       user: platformSlug,
       platform: platformUserIdentifier
    }).then(data => {
      splitArray(data.data.data.segments)
    }).catch(err => {
      console.log(err)
    })
  }, [platformSlug, platformUserIdentifier])

  function splitArray (arr) {
    let firstElement = arr.shift()
    setUserInformation(arr)
    setLifetimeStats(firstElement)
  }

  return (
    lifetimeStats ? 
    <PlayerStats userInformation={userInformation} lifetimeStats={lifetimeStats} platformSlug={platformSlug} /> :
    <SearchBar
      platformSlug={platformSlug}
      setPlatformSlug={setPlatformSlug}
      platformUserIdentifier={platformUserIdentifier}
      setPlatformUserIdentifier={setPlatformUserIdentifier}
    />
  );
}

export default App;
