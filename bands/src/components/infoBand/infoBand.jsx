import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import { AuthContext } from "../../context/authcontext";
import './infoBand.css'
import imagen from './youtube.png'

export const InfoBand = (props) => {
    const [loading, setLoading] = useState(true);
    const [albumsToShow, setAlbumsToShow] = useState();
    const [bandInfo, setBandInfo] = useState();
    const { bands, albums } = useContext(AuthContext);
    const { infoband } = useParams();

    useEffect(() => {
        
        
        const bandInfoToShow = bands.find(el => el.name == infoband)
        setBandInfo(bandInfoToShow)

        const bandAlbumToShow = albums.filter(el => el.bandId == bandInfoToShow.id)
        console.log(bandAlbumToShow)
        setAlbumsToShow(bandAlbumToShow)

        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [infoband])

    return (
        <>
            {!loading ?
            
                <div class="card resultadobusqueda">
                    <div class="card-body">
                        <h4 class="card-title">{bandInfo.name}</h4>
                        <h5 class="card-subtitle mb-2">{bandInfo.year}</h5>
                        <h6 class="card-subtitle mb-2">{bandInfo.country}</h6>
                        {
                            bandInfo.members.map(member => {
                                return (
                                    <li>{member.name}</li>
                                )
                            })
                        }

                        
                    </div>
                    <h6>Albums:</h6>
                    {
                        albumsToShow.map( el =>{
                            return(
                                <li>{el.name} || {el.year} </li>
                            )
                        })
                    }
                <a target="_blank" href={`https://www.youtube.com/results?search_query=${bandInfo.name}`}>
                    <div className="youtube">
                    <img src={imagen} />
                    </div>
                </a>
                </div>
                :
                <div class="spinner-border" role="status">
                    <span class="visually-hidden"></span>
                </div>
            }
        </>
    )
}