import axios from "axios"
import { useEffect } from "react"


function Home() {

    const getData = async() => {
        try {
            const response = await axios.post('/api/user/get-user-info-by-id', {}, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div>Home</div>
  )
}

export default Home