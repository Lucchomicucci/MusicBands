import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import { AuthContext } from "../../context/authcontext";
import { Nav } from "../nav/nav";
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
        setAlbumsToShow(bandAlbumToShow)

        setTimeout(() => {
            setLoading(false)
        }, 300)

    }, [infoband])

    return (
        <>
                <Nav headerName="Result"/>
                
                {!loading ?
            
                <div className="card resultadobusqueda">
                    <div className="card-body">
                        <h4 className="card-title">{bandInfo.name}</h4>
                        <h5 className="card-subtitle mb-2">{bandInfo.year}</h5>
                        <h6 className="card-subtitle mb-2">{bandInfo.country}</h6>
                        {
                            bandInfo.members.map((member, index) => {
                                return (
                                    <li key={index}>{member.name}</li>
                                )
                            })
                        }

                        
                    </div>
                    <h6>Albums:</h6>
                    {
                        albumsToShow.map( (el, index) =>{
                            return(
                                <li key={index}>{el.name} || {el.year} </li>
                            )
                        })
                    }
                <a target="_blank" href={`https://www.youtube.com/results?search_query=${bandInfo.name}`}>
                    <div className="youtube">
                    <img src={imagen} alt="Logo de Youtube" />
                    </div>
                </a>
                </div>
                :
                <div className="spinnerCenter">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
        </>
    )
}